import React, { useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { Stack, Flex, HStack, VStack, Text, Link, Box } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';

const variants = {
  open: { opacity: 1, zIndex: 9999, y: 0 },
  close: { opacity: 0, zIndex: -1, y: '-100%' },
};

export const UserProfile = () => {
  const MotionStack = motion(Flex);
  const [isActive, setIsActive] = useState(false);
  const changeOnMouseEnter = (event: React.MouseEvent) => {
    setIsActive(true);
  };

  const changeOnMouseLeave = (event: React.MouseEvent) => {
    setIsActive(false);
  };
  return (
    <Flex pos="relative">
      <HStack
        pl={2}
        pr={2}
        spacing={2}
        bg={isActive ? 'gray.800' : 'black'}
        onMouseEnter={changeOnMouseEnter}
        onMouseLeave={changeOnMouseLeave}
      >
        <Text fontSize="xs" color={isActive ? '#63B3ED' : 'white'}>
          Привіт, user
        </Text>
        <FaUserAlt color={isActive ? '#63B3ED' : 'white'} />
      </HStack>
      <AnimatePresence>
        {isActive && (
          <MotionStack
            pos="absolute"
            top="26px"
            right="0"
            pl={2}
            pr={2}
            py={2}
            fontSize="xs"
            bg="gray.800"
            onMouseEnter={changeOnMouseEnter}
            onMouseLeave={changeOnMouseLeave}
            variants={variants}
            initial="close"
            animate="open"
            exit="close"
          >
            <HStack spacing={2}>
              <Box
                w="100px"
                h="100px"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <FaUserAlt
                  fontSize="50px"
                  width="50px"
                  height="50px"
                  color="white"
                />
              </Box>
              <VStack
                w="150px"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Link href="/" variant="header-menu">
                  user
                </Link>
                <Link href="/" variant="header-menu">
                  Редагувати профіль
                </Link>
                <Link href="/" variant="header-menu">
                  Вийти
                </Link>
              </VStack>
            </HStack>
          </MotionStack>
        )}
      </AnimatePresence>
    </Flex>
  );
};
