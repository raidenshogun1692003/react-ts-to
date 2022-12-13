import * as React from 'react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem
} from '@chakra-ui/react'
import { Box, Text, HStack, Flex, Avatar, VStack } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverArrow,
    PopoverCloseButton,
} from '@chakra-ui/react'
import { CalendarIcon } from '@chakra-ui/icons'
import { SettingsIcon } from '@chakra-ui/icons'
import { Calender } from './Calender';

function Navbar() {
    return (

        <Box color='white.600' bg='#2564cf' px='6' h='80px'>

            <Flex justifyContent='space-between' alignItems='center'>
                <HStack>
                    <Text as='b' fontSize='20px' p='6'>To do</Text>
                    <Link to="/">
                        <Text fontSize='18px'>Download</Text>
                    </Link>
                </HStack>
                <Input bg='white' maxW='400px' placeholder='Search' textColor='black' />
                <HStack>
                    <Popover>
                        <PopoverTrigger>
                            <CalendarIcon mr='30px' boxSize={6} />
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <Calender />
                        </PopoverContent>
                    </Popover>



                    <Menu >
                        <MenuButton >
                            <SettingsIcon mr='30px' boxSize={6} />
                        </MenuButton>
                        <MenuList px={4}
                            py={6}
                            transition='all 0.1s'
                            borderRadius='md'
                            borderWidth='1px'
                            _expanded={{ bg: 'blue.400' }}>
                            <MenuItem color='black'>Download</MenuItem>
                            <MenuItem color='black'>Save Config</MenuItem>
                            <MenuItem color='black'>Mark as Draft</MenuItem>
                            <MenuItem color='black'>Profile</MenuItem>
                            <MenuItem color='black'>Logout</MenuItem>
                        </MenuList>
                    </Menu>
                    <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                </HStack>
            </Flex>
        </Box>
    );
}

export default Navbar;