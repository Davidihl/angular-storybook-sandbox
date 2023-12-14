import { create } from '@storybook/theming/create';
import logo from '../src/stories/assets/storybook-neo.svg';

export default create({
  base: 'light',
  brandTitle: 'My custom Storybook',
  brandUrl: 'https://example.com',
  brandImage: '',
  brandTarget: '_self',
});
