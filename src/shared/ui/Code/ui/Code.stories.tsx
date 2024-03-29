import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Code } from './Code';

export default {
    title: 'shared/Code',
    component: Code,
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    text: `export default {
      title: 'shared/Input',
      component: Code,
  } as ComponentMeta<typeof Code>;
  
  const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />`,
};
