// Add a Featured category as the first category tab.
window.OPENSHIFT_CONSTANTS.SERVICE_CATALOG_CATEGORIES.unshift({
  // Required. Must be unique.
  id: "hubapps",
  // Required
  label: "HubApps",
  subCategories: [
    {
      // Required. Must be unique.
      id: "cms",
      // Required.
      label: "Cms",
      // Optional. If specified, defines a unique icon for this item.
      // icon: "icon-jenkins",
      // Required. Items matching any tag will appear in this subcategory.
      tags: [
        "cms"
      ]
    },
    {
      // Required. Must be unique.
      id: "shop",
      // Required.
      label: "Shop",
      // Optional. If specified, defines a unique icon for this item.
      // icon: "icon-jenkins",
      // Required. Items matching any tag will appear in this subcategory.
      tags: [
        "shop"
      ]
    }
    {
      // Required. Must be unique.
      id: "survey",
      // Required.
      label: "Survey",
      // Optional. If specified, defines a unique icon for this item.
      // icon: "icon-jenkins",
      // Required. Items matching any tag will appear in this subcategory.
      tags: [
        "survey"
      ]
    }
  ]
});
