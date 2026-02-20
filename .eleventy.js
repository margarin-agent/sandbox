const { DateTime } = require("luxon");
const fs = require("fs");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("CNAME");

  eleventyConfig.addFilter("date", (dateObj, format = "yyyy-MM-dd") => {
    return DateTime.fromJSDate(dateObj instanceof Date ? dateObj : new Date(dateObj)).toFormat(format);
  });

  function pageTimestamp(page) {
    if (page.date instanceof Date && !isNaN(page.date.getTime())) {
      return page.date.getTime();
    }
    try {
      return fs.statSync(page.inputPath).mtimeMs;
    } catch (err) {
      return 0;
    }
  }

  eleventyConfig.addCollection("autoPages", collection => {
    return collection.getAll()
      .filter(page => page.url && page.url !== "/" && page.data.nav !== false)
      .sort((a, b) => pageTimestamp(b) - pageTimestamp(a));
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
