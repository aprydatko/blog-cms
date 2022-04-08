import React, { useState } from 'react';
import NextLink from 'next/link';
import { Flex, HStack, Link } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaPlus, FaReact } from 'react-icons/fa';

const MotionStack = motion(Flex);

interface AddMenuProps {
  name: string;
  title?: string;
  children: React.ReactChild | React.ReactChildren | React.ReactNode;
}

const variants = {
  open: { opacity: 1, y: 0 },
  close: { opacity: 0, y: '-100%' },
};

export const AddMenu = ({
  name,
  title,
  children,
}: AddMenuProps): JSX.Element => {
  const [isActive, setIsActive] = useState(false);

  const getIcon = (name: string): JSX.Element => {
    switch (name) {
      case 'logo':
        return <FaReact color={isActive ? '#63B3ED' : 'white'} />;
      case 'blog':
        return <FaHome color={isActive ? '#63B3ED' : 'white'} />;
      case 'add':
        return <FaPlus color={isActive ? '#63B3ED' : 'white'} />;
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
    <Flex pos="relative">
      <HStack
        pl={2}
        pr={2}
        spacing={2}
        bg={isActive ? '#2c3338' : '#1d2327'}
        onMouseEnter={changeOnMouseEnter}
        onMouseLeave={changeOnMouseLeave}
      >
        {getIcon(name)}{' '}
        {title && (
          <NextLink href="/" passHref>
            <Link
              variant="header-menu"
              fontSize="xs"
              color={isActive ? '#63B3ED' : 'white'}
            >
              {title}
            </Link>
          </NextLink>
        )}
      </HStack>
      <AnimatePresence>
        {isActive && (
          <MotionStack
            w="160px"
            pos="absolute"
            top="26px"
            left="0"
            pl={2}
            pr={10}
            py={2}
            fontSize="xs"
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="flex-start"
            zIndex="hide"
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
