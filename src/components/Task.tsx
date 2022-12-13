import React from 'react';
import { Flex, HStack, Text } from '@chakra-ui/react'
import RightNav from './RightNav';
import Navbar from './Navbar'

function Task() {
    return (
        <div>
            <Navbar />
            <Flex>
                <RightNav />
                <Text>Task</Text>
            </Flex>
        </div>
    );
}

export default Task;