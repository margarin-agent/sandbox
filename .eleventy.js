const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("CNAME");

  eleventyConfig.addFilter("date", (dateObj, format = "yyyy-MM-dd") => {
    return DateTime.fromJSDate(dateObj instanceof Date ? dateObj : new Date(dateObj)).toFormat(format);
  });

  // Set default layout for topics directory
  eleventyConfig.addLayoutAlias("default", "default.njk");

  eleventyConfig.addCollection("autoPages", collection => {
    return collection.getAll()
      .filter(page => page.url && page.url !== "/" && page.data.nav !== false)
      .sort((a, b) => {
        const aTime = a.data.lastModified ? new Date(a.data.lastModified).getTime() : 0;
        const bTime = b.data.lastModified ? new Date(b.data.lastModified).getTime() : 0;
        return bTime - aTime; // Newest first
      });
  });

  // Apply default layout to topics directory
  eleventyConfig.addCollection("topics", collection => {
    return collection.getFilteredByGlob("./src/topics/**/*.md").map(page => {
      if (!page.data.layout) {
        page.data.layout = "default";
      }
      return page;
    });
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
