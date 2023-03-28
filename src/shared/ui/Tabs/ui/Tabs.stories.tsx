import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Tabs } from '@/shared/ui/Tabs';

export default {
    title: 'shared/Tabs',
    component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    tabs: [
        {
            value: '1',
            content: 'tab 1',
        },
        {
            value: '2',
            content: 'tab 2',
        },
        {
            value: '3',
            content: 'tab 3',
        },
    ],
    value: '3',
};
