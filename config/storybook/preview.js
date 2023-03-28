import { Theme } from '@/app/providers/ThemeProvider';
import { addDecorator } from '@storybook/react';
import {ThemeDecorator} from '@/shared/lib/storybook/ThemeDecorator';
import { StyleDecorator } from '@/shared/lib/storybook/StyleDecorator';
import { RouterDecorator } from '@/shared/lib/storybook/RouterDecorator';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);