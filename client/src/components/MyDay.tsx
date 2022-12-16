import { Flex, Text, VStack, Box, HStack, Input, Button, useToast } from '@chakra-ui/react';
import {
    FormControl,
    FormLabel,
} from '@chakra-ui/react'
import React from 'react'
import Navbar from './Navbar';
import RightNav from './RightNav';

function MyDay() {
    const toast = useToast()
    return (
        <div>
            <Navbar />
            <Flex>
                <RightNav />
                <VStack w='100%'>
                    <Text as='h1' pt='30px' fontSize='20px'>My Day</Text>
                    <Box pl='40px' pt='20px' w='100%' pr='40px'>
                        <FormControl>
                            <FormLabel>Add New Things</FormLabel>
                            <Input h='50px' type='text' placeholder='Add a task' />
                            <Box bg='#FAF9F8' h='50px' borderRadius='4px' overflowX='hidden'>
                                <Flex
                                    justifyContent="space-between">
                                    <Box w='50%'></Box>
                                    <Box mr='10px' mt='4px'>
                                        <Button borderRadius='none' pt='2px'
                                            onClick={() =>
                                                toast({
                                                    position: 'bottom-left',
                                                    render: () => (
                                                        <Box color='white' p={3} bg='blue.500'>
                                                            Added new note!
                                                        </Box>
                                                    ),
                                                })
                                            }
                                        >
                                            Add
                                        </Button>

                                    </Box>
                                </Flex>
                            </Box>
                        </FormControl>
                    </Box>
                </VStack>
            </Flex >
        </div >
    );
}

export default MyDay;