const { resolve } = require("path");

module.exports = {
  stories: ["../components/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  webpackFinal: async (config) => {
    config.resolve.modules = [
      ...(config.resolve.modules ?? []),
      resolve(__dirname, "../"),
    ];

    return config;
  },
};
