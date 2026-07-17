module.exports = function(eleventyConfig) {
  // Copy admin (CMS), assets and robots.txt straight through
  eleventyConfig.addPassthroughCopy({ "src/admin": "admin" });
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy("src/robots.txt");

  // Readable French date
  eleventyConfig.addFilter("dateFR", (d) => {
    try { return new Date(d).toLocaleDateString("fr-FR", { year:"numeric", month:"long", day:"numeric" }); }
    catch(e){ return ""; }
  });

  // ISO date for the sitemap
  eleventyConfig.addFilter("dateISO", (d) => {
    try { return new Date(d).toISOString().slice(0,10); }
    catch(e){ return ""; }
  });

  // Line breaks entered in the CMS become real <br> (each line trimmed)
  eleventyConfig.addFilter("nl2br", (s) =>
    String(s || "").split("\n").map((l) => l.trim()).filter((l) => l.length).join("<br>")
  );

  return {
    dir: { input: "src", includes: "_includes", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
