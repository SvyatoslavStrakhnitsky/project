import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from '@/shared/ui/Input';
import { ThemeDecorator } from '@/shared/lib/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

export default {
    title: 'shared/Input',
    component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Light = Template.bind({});
Light.args = {
    placeholder: 'Text',
    value: 'Text 2',
};

export const Dark = Template.bind({});
Dark.args = {
    placeholder: 'Text',
    value: 'Text 2',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];