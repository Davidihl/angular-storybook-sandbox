import { CommonModule } from '@angular/common';
import { MatButton, MatButtonModule } from '@angular/material/button';
import type { Meta, StoryObj } from '@storybook/angular';
import {
  argsToTemplate,
  componentWrapperDecorator,
  moduleMetadata,
} from '@storybook/angular';

const meta: Meta = {
  component: MatButton,
  title: 'Components/Buttons/Button',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MatButtonModule],
    }),
  ],
  args: {
    label: 'Button',
    color: 'primary',
    disabled: false,
  },
  argTypes: {
    label: {
      description: 'Change the name of the button',
    },
    color: {
      description: 'Choose color based on the theme',
      options: [null, 'primary', 'accent', 'warn'],
      control: { type: 'select' },
    },
    disabled: {
      description: 'Deactivate the button',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Raised: Story = {
  render: (args) => ({
    props: args,
    template: `
    <!-- import {MatButtonModule} from '@angular/material/button'; -->

      <button
          mat-raised-button
          ${args['color'] ? 'color={{color}}' : ''}
          ${args['disabled'] ? 'disabled' : ''}
      >
          {{label}}
      </button>`,
  }),
};

export const Basic: Story = {
  render: (args) => ({
    props: args,
    template: `
    <!-- import {MatButtonModule} from '@angular/material/button'; -->

      <button
          mat-button
          ${args['color'] ? 'color={{color}}' : ''}
          ${args['disabled'] ? 'disabled' : ''}
      >
          {{label}}
      </button>`,
  }),
};

export const Flat: Story = {
  render: (args) => ({
    props: args,
    template: `
    <!-- import {MatButtonModule} from '@angular/material/button'; -->

      <button
          mat-flat-button
          ${args['color'] ? 'color={{color}}' : ''}
          ${args['disabled'] ? 'disabled' : ''}
      >
          {{label}}
      </button>`,
  }),
};

export const Stroked: Story = {
  render: (args) => ({
    props: args,
    template: `
    <!-- import {MatButtonModule} from '@angular/material/button'; -->

      <button
          mat-stroked-button
          ${args['color'] ? 'color={{color}}' : ''}
          ${args['disabled'] ? 'disabled' : ''}
      >
          {{label}}
      </button>`,
  }),
};
