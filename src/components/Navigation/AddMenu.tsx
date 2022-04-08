import React, { useState } from 'react';
import NextLink from 'next/link';
import { Flex, HStack, Text, Box, Link } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaSolarPanel,
  FaRegImages,
  FaRegEdit,
  FaClone,
  FaUserAlt,
  FaTools,
  FaRegSun,
  FaArrowCircleLeft,
  FaArrowCircleRight,
} from 'react-icons/fa';

const MotionStack = motion(Flex);

interface AddMenuProps {
  name: string;
  title?: string;
  isFullWith: boolean;
  url: string;
  onClick?: () => void;
  children?: React.ReactChild | React.ReactChildren | React.ReactNode;
}

const variants = {
  open: { opacity: 1, x: 0, display: 'flex' },
  close: { opacity: 1, x: '-5%', display: 'none' },
};

export const AddMenu = ({
  name,
  title,
  isFullWith,
  url,
  onClick,
  children,
}: AddMenuProps): JSX.Element => {
  const [isActive, setIsActive] = useState(false);

  const getIcon = (name: string): JSX.Element => {
    switch (name) {
      case 'dashboard':
        return <FaSolarPanel color={isActive ? '#63B3ED' : 'white'} />;
      case 'posts':
        return <FaRegEdit color={isActive ? '#63B3ED' : 'white'} />;
      case 'mediaFiles':
        return <FaRegImages color={isActive ? '#63B3ED' : 'white'} />;
      case 'pages':
        return <FaClone color={isActive ? '#63B3ED' : 'white'} />;
      case 'users':
        return <FaUserAlt color={isActive ? '#63B3ED' : 'white'} />;
      case 'tools':
        return <FaTools color={isActive ? '#63B3ED' : 'white'} />;
      case 'settings':
        return <FaRegSun color={isActive ? '#63B3ED' : 'white'} />;
      case 'hidden-button':
        return isFullWith ? (
          <FaArrowCircleLeft color={isActive ? '#63B3ED' : 'white'} />
        ) : (
          <FaArrowCircleRight color={isActive ? '#63B3ED' : 'white'} />
        );
      default:
        return <></>;
    }
  };

  const changeOnMouseEnter = (event: React.MouseEvent) => {
    setIsActive(true);
  };

  const changeOnMouseLeave = (event: React.MouseEvent) => {
    setIsActive(false);
  };

  return (
    <Flex w="full" pos="relative" h="34px">
      <Box
        display={name !== 'hidden-button' ? 'block' : 'none'}
        pos="absolute"
        top="0"
        left="0"
        w="3px"
        h="full"
        bg={isActive ? 'blue.300' : 'transparent'}
      />
      <HStack
        w="full"
        pl={3}
        pr={2}
        spacing={2}
        bg={isActive ? 'whiteAlpha.100' : '#1d2327'}
        onClick={onClick}
        onMouseEnter={changeOnMouseEnter}
        onMouseLeave={changeOnMouseLeave}
      >
        {getIcon(name)}{' '}
        {title && isFullWith && (
          <NextLink href={url}>
            <Link
              variant="navigation-menu"
              color={isActive ? '#63B3ED' : 'white'}
            >
              {title}
            </Link>
          </NextLink>
        )}
      </HStack>
      <AnimatePresence>
        {isActive && name !== 'hidden-button' && (
          <MotionStack
            pos="absolute"
            w="160px"
            top="0px"
            left={isFullWith ? '160px' : '40px'}
            pl={4}
            pr={0}
            py={2}
            fontSize="xs"
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="flex-start"
            bg="#2c3338"
            onMouseEnter={changeOnMouseEnter}
            onMouseLeave={changeOnMouseLeave}
            variants={variants}
            initial="close"
            animate="open"
            exit="close"
          >
            {children}
          </MotionStack>
        )}
      </AnimatePresence>
    </Flex>
  );
};
