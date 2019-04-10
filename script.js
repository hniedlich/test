// Add a Featured category as the first category tab.
window.OPENSHIFT_CONSTANTS.SERVICE_CATALOG_CATEGORIES.unshift({
  // Required. Must be unique.
  id: "hubapps",
  // Required
  label: "HubApps :)"
    items: [
    {
      // Required.  Must be unique
      id: "cms",
      // Required
      label: "CMS",
      // Optional.  If specified, defines a unique icon for this item
      // iconClass: "font-icon icon-go-gopher",
      // Optional.  If specified, enables matching other tag values to this
      // category item
      categoryAliases: [
        "CMS"
      ],
      // Optional.  If specified, will display below the item label
      description: "Made by Hubert"
    },
});
