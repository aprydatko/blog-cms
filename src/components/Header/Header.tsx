import React from 'react';
import { Container, Flex } from '@chakra-ui/react';
import { UserProfile, Menu } from '../Menu/header';

export const Header = (): JSX.Element => {
  return (
    <Container maxW="100wv" p={0}>
      <Flex justifyContent="space-between" h="30px" backgroundColor="black">
        <Menu logo blogLink addPost />
        <UserProfile />
      </Flex>
    </Container>
  );
};
