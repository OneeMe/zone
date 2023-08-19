# Zone

A Typlog theme for Blog.

## i18n

You can specify the language of your blog by inject the script like this:

```javascript
<script>
  window.i18nMap = {
    "site_logo": [],
    "site_name": [
      ["XR 基地", "XRealityZone"]
    ],
    "nav_title": [
      ["XR 世界导览", "XR World Weekly"],
      ["文章", "Article"]
    ],
    "js-subscribe": [
      ["订阅", "Subscribe"],
    ],
  };
</script>
```

The key is the class name of the element, and the value is a list of translations. The first element of the list is the default language, and the second element is the translation.
