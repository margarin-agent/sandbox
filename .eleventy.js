const { DateTime } = require("luxon");
const { execSync } = require("child_process");

function getGitTimestamp(filePath) {
  try {
    const timestamp = execSync(
      `git log -1 --format=%ct -- "${filePath}"`,
      { encoding: "utf-8", cwd: "/root/.sandbox" }
    ).trim();
    return parseInt(timestamp, 10) * 1000; // Convert to milliseconds
  } catch (err) {
    return 0; // Fallback if not in git
  }
}

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
        // Priority: front matter date > git commit timestamp
        let aTime = 0;
        let bTime = 0;
        
        if (a.date instanceof Date && !isNaN(a.date.getTime())) {
          aTime = a.date.getTime();
        } else {
          aTime = getGitTimestamp(a.inputPath);
        }
        
        if (b.date instanceof Date && !isNaN(b.date.getTime())) {
          bTime = b.date.getTime();
        } else {
          bTime = getGitTimestamp(b.inputPath);
        }
        
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
