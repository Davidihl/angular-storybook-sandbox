import { setCompodocJson } from '@storybook/addon-docs/angular';
import type { Preview } from '@storybook/angular';
import { themes } from '@storybook/theming';
import docJson from '../documentation.json';

setCompodocJson(docJson);

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.light,
      // toc: {
      //   contentsSelector: '.sbdocs-content',
      //   headingSelector: 'h1,h2,h3',
      //   ignoreSelector: '#primary',
      //   disable: false,
      //   unsafeTocbotOptions: {
      //     orderedList: false,
      //   },
      // },
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
