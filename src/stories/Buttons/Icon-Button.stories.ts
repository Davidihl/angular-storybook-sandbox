import { CommonModule } from '@angular/common';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import type { Meta, StoryObj } from '@storybook/angular';
import {
  argsToTemplate,
  componentWrapperDecorator,
  moduleMetadata,
} from '@storybook/angular';

const meta: Meta = {
  component: MatButton,
  title: 'Components/Buttons/Icon Button',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MatButtonModule, MatIconModule],
    }),
  ],
  args: {
    icon: 'home',
    color: '',
    disabled: false,
    variant: 'FAB',
  },
  argTypes: {
    icon: {
      description: 'https://fonts.google.com/icons (e.g home)',
    },
    color: {
      description: 'Choose color based on the theme',
      options: [null, 'primary', 'accent', 'warn'],
      control: { type: 'select' },
    },
    disabled: {
      description: 'Deactivate the button',
    },
    variant: {
      table: {
        disable: true,
      },
      description: 'Choose color based on the theme',
      options: ['FAB', 'Mini FAB'],
      control: { type: 'select' },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Icon: Story = {
  render: (args) => ({
    props: args,
    template: `
    <!-- import {MatButtonModule} from '@angular/material/button'; -->
    <!-- import {MatIconModule} from '@angular/material/icon'; -->

    <button
      mat-icon-button
      ${args['color'] ? 'color={{color}}' : ''}
      ${args['disabled'] ? 'disabled' : ''}
    >
        <mat-icon>{{icon}}</mat-icon>
    </button>`,
  }),
};
