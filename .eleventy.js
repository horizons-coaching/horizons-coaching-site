module.exports = function(eleventyConfig) {
  // Copy admin (CMS) and assets straight through
  eleventyConfig.addPassthroughCopy({ "src/admin": "admin" });
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  // Readable French date
  eleventyConfig.addFilter("dateFR", (d) => {
    try { return new Date(d).toLocaleDateString("fr-FR", { year:"numeric", month:"long", day:"numeric" }); }
    catch(e){ return ""; }
  });

  return {
    dir: { input: "src", includes: "_includes", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
