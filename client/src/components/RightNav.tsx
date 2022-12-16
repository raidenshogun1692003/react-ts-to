import { Link } from 'react-router-dom'
import {
    Flex,
    Text,
    VStack,
    HStack,
    Spacer
} from '@chakra-ui/react'
import { SunIcon } from '@chakra-ui/icons'
import { PlusSquareIcon } from '@chakra-ui/icons'
import { StarIcon } from '@chakra-ui/icons'
import { CalendarIcon } from '@chakra-ui/icons'




function RightNav() {
    return (
        <Flex flexDir="row" top="0px" >
            <Flex
                pos="sticky"
                right="0"
                bg='blackAlpha.100'
                h="95vh"
                marginTop="0"
                boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
                w='300px'
                flexDir="column"
                justifyContent="space-between"
            >
                <VStack>
                    <Flex flexDir="column">
                        <Link to="/myday">
                            <HStack mt='50px' ml='-100px' transition=" 250ms ease-in-out" _hover={{ boxShadow: '2xl', p: '20px', px: '20px', rounded: '2xl', bg: 'white' }}>
                                <SunIcon mr='10px' boxSize={5} />
                                <Text>My Day</Text>

                            </HStack>
                        </Link>
                        <Link to="/important">
                            <HStack mt='50px' ml='-100px' transition=" 250ms ease-in-out" _hover={{ boxShadow: '2xl', p: '20px', px: '20px', rounded: '2xl', bg: 'white' }}>
                                <StarIcon mr='10px' fill='none' boxSize={5} />
                                <Text>Important</Text>
                            </HStack>
                        </Link>
                        <Link to="/plan">
                            <HStack mt='50px' ml='-100px' transition=" 250ms ease-in-out" _hover={{ boxShadow: '2xl', p: '20px', px: '20px', rounded: '2xl', bg: 'white' }}>
                                <CalendarIcon mr='10px' boxSize={5} />
                                <Text>Planed</Text>
                            </HStack>
                        </Link>
                        <Link to="/task">
                            <HStack mt='50px' ml='-100px' transition=" 250ms ease-in-out" _hover={{ boxShadow: '2xl', p: '20px', px: '20px', rounded: '2xl', bg: 'white' }}>
                                <PlusSquareIcon mr='10px' boxSize={5} />
                                <Text>Task</Text>
                            </HStack>
                        </Link>
                    </Flex>

                </VStack>

            </Flex>
            <Spacer />

        </Flex>

    );
}

export default RightNav;