import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text, TextSize, TextTheme } from '@/shared/ui/Text';
import { ThemeDecorator } from '@/shared/lib/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

export default {
    title: 'shared/Text',
    component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Lorem ipsum dolor sit amet.',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sequi quo itaque amet delectus dignissimos excepturi assumenda commodi sit inventore.',
};

export const Error = Template.bind({});
Error.args = {
    theme: TextTheme.ERROR,
    title: 'Lorem ipsum dolor sit amet.',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sequi quo itaque amet delectus dignissimos excepturi assumenda commodi sit inventore.',
};

export const TextProps = Template.bind({});
TextProps.args = {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sequi quo itaque amet delectus dignissimos excepturi assumenda commodi sit inventore.',
};

export const TitleProps = Template.bind({});
TitleProps.args = {
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sequi quo itaque amet delectus dignissimos excepturi assumenda commodi sit inventore.',

};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Lorem ipsum dolor sit amet.',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sequi quo itaque amet delectus dignissimos excepturi assumenda commodi sit inventore.',

};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TextPropsDark = Template.bind({});
TextPropsDark.args = {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sequi quo itaque amet delectus dignissimos excepturi assumenda commodi sit inventore.',
};
TextPropsDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TitlePropsDark = Template.bind({});
TitlePropsDark.args = {
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sequi quo itaque amet delectus dignissimos excepturi assumenda commodi sit inventore.',
};
TitlePropsDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Lorem ipsum dolor sit amet.',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sequi quo itaque amet delectus dignissimos excepturi assumenda commodi sit inventore.',
    size: TextSize.L,
};