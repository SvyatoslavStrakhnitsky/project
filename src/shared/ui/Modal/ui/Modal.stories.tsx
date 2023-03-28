import { Modal } from '@/shared/ui//Modal';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'shared/Modal',
    component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sequi quo itaque amet delectus dignissimos excepturi assumenda commodi sit inventore.',

};
