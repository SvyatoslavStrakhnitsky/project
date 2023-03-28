import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '@/shared/ui/Button';
import { ThemeDecorator } from '@/shared/lib/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

export default {
    title: 'shared/Button',
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Button', 
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
    children: 'Button', 
    disabled: true,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Button', 
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];


export const PrimaryDarkDisabled = Template.bind({});
PrimaryDarkDisabled.args = {
    children: 'Button', 
    disabled: true,

};
PrimaryDarkDisabled.decorators = [ThemeDecorator(Theme.DARK)];

export const Clear = Template.bind({});
Clear.args = {
    children: 'Button', 
    theme: 'clear'
};

export const ClearDisabled = Template.bind({});
ClearDisabled.args = {
    children: 'Button', 
    theme: 'clear',
    disabled: true,
};

export const ClearDark = Template.bind({});
ClearDark.args = {
    children: 'Button', 
    theme: 'clear'
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];


export const ClearDisabledDark = Template.bind({});
ClearDisabledDark.args = {
    children: 'Button', 
    theme: 'clear',
    disabled: true,
};
ClearDisabledDark.decorators = [ThemeDecorator(Theme.DARK)];
