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
    color: 'accent',
    disabled: false,
    variant: 'Raised',
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
    variant: {
      description: 'Choose color based on the theme',
      options: ['Basic', 'Flat', 'Raised', 'Stroked'],
      control: { type: 'select' },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Basic: Story = {
  render: (args) => ({
    props: args,
    template: `
    <button
        ${args['variant'] === 'Raised' ? 'mat-raised-button' : ''}
        ${args['variant'] === 'Flat' ? 'mat-flat-button' : ''}
        ${args['variant'] === 'Stroked' ? 'mat-stroked-button' : ''}
        ${args['variant'] === 'Basic' ? 'mat-button' : ''}
        ${args['color'] ? 'color={{color}}' : ''}
        ${args['disabled'] ? 'disabled' : ''}

    >
        {{label}}
    </button>`,
  }),
};

export const Raised: Story = {
  render: (args) => ({
    props: args,
    template: `
      <button
          mat-raised-button
          ${args['color'] ? 'color={{color}}' : ''}
          ${args['disabled'] ? 'disabled' : ''}
      >
          {{label}}
      </button>`,
  }),
};
