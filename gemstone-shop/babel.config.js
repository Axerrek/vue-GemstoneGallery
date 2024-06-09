module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current", // lub możesz dodać tutaj konkretne przeglądarki, które chcesz obsługiwać
        },
      },
    ],
    "@vue/cli-plugin-babel/preset",
  ],
};
