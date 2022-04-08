import { useState } from 'react';
import { VStack, Box, Link, HStack } from '@chakra-ui/react';
import { AddMenu } from './AddMenu';
import NextLink from 'next/link';
import { navigation } from 'mocks';

export const Navigation = () => {
  const [isFullWith, setIsFullWith] = useState(true);
  const changeNavigationWith = () => {
    setIsFullWith(!isFullWith);
  };

  return (
    <VStack
      top="30px"
      left="0px"
      w={isFullWith ? '160px' : '40px'}
      h="100vh"
      justifyContent="flex-start"
      alignItems="flex-start"
      zIndex="sticky"
      bg="#1d2327"
    >
      <VStack w={isFullWith ? '160px' : '40px'} mt="30px" py={4} zIndex="base">
        {navigation.map(({ id, name, title, url, tag, submenu }, index) => (
          <>
            <AddMenu
              key={id}
              isFullWith={isFullWith}
              name={name}
              title={title}
              url={url}
            >
              {submenu.map((item) => (
                <NextLink key={item.id} href={item.url} passHref>
                  <Link variant="navigation-submenu">{item.title}</Link>
                </NextLink>
              ))}
            </AddMenu>
            {tag === 'dashboard' && <Box w="full" h="10px" />}
            {tag === 'blog' && navigation[index + 1].tag !== 'blog' && (
              <Box w="full" h="10px" />
            )}
          </>
        ))}
        <AddMenu
          name="hidden-button"
          title="Згорнути меню"
          url=""
          isFullWith={isFullWith}
          onClick={changeNavigationWith}
        />
      </VStack>
    </VStack>
  );
};
