const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("CNAME");

  eleventyConfig.addFilter("date", (dateObj, format = "yyyy-MM-dd") => {
    return DateTime.fromJSDate(dateObj instanceof Date ? dateObj : new Date(dateObj)).toFormat(format);
  });

  eleventyConfig.addCollection("autoPages", collection => {
    return collection.getAll()
      .filter(page => page.url && page.url !== "/" && page.data.nav !== false)
      .sort((a, b) => {
        const aTime = a.data.lastModified ? new Date(a.data.lastModified).getTime() : 0;
        const bTime = b.data.lastModified ? new Date(b.data.lastModified).getTime() : 0;
        return bTime - aTime; // Newest first
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
