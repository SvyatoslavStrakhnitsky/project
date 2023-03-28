import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select } from '@/shared/ui/Select';
import { action } from '@storybook/addon-actions';

export default {
    title: 'shared/Select',
    component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Select',
    value: 'UAH',
    options: [
        {
            value: '1',
            content: 'UAH',
        },
        {
            value: '2',
            content: 'USD',
        },
        {
            value: '3',
            content: 'EUR',
        },
    ],
    onChange: action('onChange'),
};
