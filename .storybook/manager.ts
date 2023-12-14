import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';
import customTheme from './customTheme';

addons.setConfig({
  theme: customTheme,
});
