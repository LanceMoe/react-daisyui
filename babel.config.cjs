module.exports =
  process.env.NODE_ENV === "test"
    ? {
        presets: [
          ["@babel/preset-env", { targets: { node: "current" } }],
          ["@babel/preset-react", { runtime: "automatic" }],
          "@babel/preset-typescript",
        ],
        plugins: [
          "@babel/plugin-transform-runtime",
        ],
      }
    : {
        plugins: [
          [
            "@babel/plugin-transform-typescript",
            { isTSX: true, allExtensions: true },
          ],
        ],
      };
