const path = require("path");

module.exports = {
  experimental: {
    optimizeCss: true,
  },
  future: {
    webpack5: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  },
};
