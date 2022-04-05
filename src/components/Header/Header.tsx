import React from 'react';
import { Container, Flex } from '@chakra-ui/react';
import { UserProfile, Menu } from '../Menu/header';

export const Header = (): JSX.Element => {
  return (
    <Container pos="fixed" maxW="100wv" p={0} zIndex="toast">
      <Flex justifyContent="space-between" h="35px" bg="#222" px={0}>
        <Menu logo blogLink addPost />
        <UserProfile />
      </Flex>
    </Container>
  );
};
