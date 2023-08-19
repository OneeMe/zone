// get global i18n map or default value
function getI18nMap() {
  return window.i18nMap ?? {
    "site_logo": [],
    "site_name": [
      ["XR 基地", "XRealityZone"]
    ],
    "nav_title": [
      ["XR 世界导览", "XR World Weekly"],
      ["文章", "Article"]
    ],
  };
}

function getLang() {
  // get lang from url
  if (window.location.href.includes("en")) {
    return "en";
  } else {
    return "zh";
  }
}

function replaceZhToEn() {
  const i18nMap = getI18nMap();
  Object.keys(i18nMap).forEach(className => {
    const values = i18nMap[className];
    const elements = document.getElementsByClassName(className)
    for (let element of elements) {
      if (!!element.innerText) {
        let targetPair = values.find(value => {
          if (!value) {
            return false;
          }
          return value[0] === element.innerText
        });
        if (!!targetPair) {
          element.innerText = targetPair[1];
        }
      }
      if (!!element.href) {
        let enHref = element.href.replace("/zh", "/en")
        element.href = enHref;
      }
    }
  });
}


document.addEventListener('DOMContentLoaded', function () {
  const lang = getLang();
  // set lang to html
  document.documentElement.lang = lang;
  // replace all zh to en if needed
  if (lang === "en") {
    replaceZhToEn();
  }
});
