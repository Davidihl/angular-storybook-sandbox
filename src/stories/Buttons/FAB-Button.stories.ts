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
  title: 'Components/Buttons/FAB Button',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MatButtonModule, MatIconModule],
    }),
  ],
  args: {
    icon: 'home',
    color: 'primary',
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

const Config: Story = {
  render: (args) => ({
    template: `
    <!-- import {MatButtonModule} from '@angular/material/button'; -->
    <!-- import {MatIconModule} from '@angular/material/icon'; -->

    <button
        ${args['variant'] === 'FAB' ? 'mat-fab' : ''}
        ${args['variant'] === 'Mini FAB' ? 'mat-mini-fab' : ''}
        ${args['color'] ? 'color={{color}}' : ''}
        ${args['disabled'] ? 'disabled' : ''}

    >
        <mat-icon>{{icon}}</mat-icon>
    </button>`,
  }),
};

export const FAB: Story = {
  render: (args) => ({
    props: args,
    template: `
    <!-- import {MatButtonModule} from '@angular/material/button'; -->
    <!-- import {MatIconModule} from '@angular/material/icon'; -->

    <button
      mat-fab

      ${args['color'] ? 'color={{color}}' : ''}
      ${args['disabled'] ? 'disabled' : ''}

    >
        <mat-icon>{{icon}}</mat-icon>
    </button>`,
  }),
};

export const MiniFAB: Story = {
  render: (args) => ({
    props: args,

    template: `
    <!-- import {MatButtonModule} from '@angular/material/button'; -->
    <!-- import {MatIconModule} from '@angular/material/icon'; -->

    <button
      mat-mini-fab
      ${args['color'] ? 'color={{color}}' : ''}
      ${args['disabled'] ? 'disabled' : ''}
    >
        <mat-icon>{{icon}}</mat-icon>
    </button>`,
  }),
};
