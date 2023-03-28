import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from '@/shared/ui/Text';
import { Card } from '@/shared/ui/Card';

export default {
    title: 'shared/Card',
    component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: <Text
        title="Title"
        text="Text"
    />,
};
