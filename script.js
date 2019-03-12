// Add a Featured category as the first category tab.
window.OPENSHIFT_CONSTANTS.SERVICE_CATALOG_CATEGORIES.unshift({
  // Required. Must be unique.
  id: "cms",
  // Required
  label: "CMS",
  subCategories: [
    {
      // Required. Must be unique.
      id: "wordpress",
      // Required.
      label: "WordPress",
      // Optional. If specified, defines a unique icon for this item.
      icon: "icon-wordpress",
      // Required. Items matching any tag will appear in this subcategory.
      tags: [
        "wordpress"
      ]
    }
  ]
});
