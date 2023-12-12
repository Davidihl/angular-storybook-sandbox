import type { StorybookConfig } from "@storybook/angular";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-styling-webpack",
    ({
      name: "@storybook/addon-styling-webpack",

      options: {
        rules: [{
      test: /\.css$/,
      sideEffects: true,
      use: [
          require.resolve("style-loader"),
          {
              loader: require.resolve("css-loader"),
              options: {
                  
                  
              },
          },
      ],
    },],
      }
    }),
    ({
      name: "@storybook/addon-styling-webpack",

      options: {
        rules: [{
      test: /\.css$/,
      sideEffects: true,
      use: [
          require.resolve("style-loader"),
          {
              loader: require.resolve("css-loader"),
              options: {
                  
                  
              },
          },
      ],
    },],
      }
    })
  ],
  framework: {
    name: "@storybook/angular",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
