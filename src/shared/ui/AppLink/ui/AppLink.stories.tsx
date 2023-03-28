import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/lib/storybook/ThemeDecorator';
import { AppLink } from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    args: {
        to: '/',
        children: 'Test',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Secondary = Template.bind({});
Secondary.args = {
    theme: 'secondary',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    theme: 'primary',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
    theme:  'secondary',
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
