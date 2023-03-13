import type { FC } from 'react';
import { Flex, type FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>

export const VStack: FC<VStackProps> = (props) => {
    return (
        <Flex
            direction="column" 
            align="center" 
            {...props}
        />
    );
};