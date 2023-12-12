import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import {MatButton, MatButtonModule} from'@angular/material/button';

const meta: Meta = {
    component: MatButton,
    title:'Components/Buttons/Basic Button',
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [
                CommonModule,
                MatButtonModule
              ]
        })
    ],
    args:{
        label:'Button'
    }
  };
  
  export default meta;
  type Story = StoryObj;


export const Basic: Story = {
    render: (args) => ({
        props: args,
        template: `<button mat-button>{{label}}</button>`,
    }),
};