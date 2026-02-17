const { DateTime } = require("luxon");
const fs = require("fs");

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
        const aTime = fs.statSync(a.inputPath).mtimeMs;
        const bTime = fs.statSync(b.inputPath).mtimeMs;
        return bTime - aTime;
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
