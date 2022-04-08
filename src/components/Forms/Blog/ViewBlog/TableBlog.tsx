import { useState } from 'react';
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Checkbox,
  Tbody,
  Link,
  Flex,
  HStack,
  Tfoot,
  Box,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';

const TableItem = () => {
  const [isOpen, setIsOpen] = useState(false);
  const changeOnMouseEnter = (event: React.MouseEvent): void => {
    setIsOpen(true);
  };
  const changeOnMouseLeave = (event: React.MouseEvent): void => {
    setIsOpen(false);
  };
  return (
    <Tr>
      <Td
        pos="relative"
        maxWidth="340px"
        pl="46px"
        whiteSpace="normal"
        lineHeight="1.5"
        onMouseEnter={changeOnMouseEnter}
        onMouseLeave={changeOnMouseLeave}
        _hover={{
          cursor: 'pointer',
        }}
      >
        <Checkbox pos="absolute" top="14px" left="16px" mr={2} />
        <NextLink href="/" passHref>
          <Link fontWeight="500">
            Привіт, світ! Єто очень длинний пост которий может не поместиться на
            одну строку
          </Link>
        </NextLink>
        <Flex h="20px">
          {isOpen && (
            <HStack>
              <NextLink href="/" passHref>
                <Link fontSize="xs">Редагувати</Link>
              </NextLink>
              <Box color="blackAlpha.300">|</Box>
              <NextLink href="/" passHref>
                <Link fontSize="xs">Властивості</Link>
              </NextLink>
              <Box color="blackAlpha.300">|</Box>
              <NextLink href="/" passHref>
                <Link
                  fontSize="xs"
                  color="red.500"
                  _hover={{ color: 'red.700' }}
                >
                  Видалити
                </Link>
              </NextLink>
              <Box color="blackAlpha.300">|</Box>
              <NextLink href="/" passHref>
                <Link fontSize="xs">Переглянути</Link>
              </NextLink>
            </HStack>
          )}
        </Flex>
      </Td>
      <Td>
        <NextLink href="/" passHref>
          <Link>user</Link>
        </NextLink>
      </Td>
      <Td>
        <NextLink href="/" passHref>
          <Link>Без категорії</Link>
        </NextLink>
      </Td>
      <Td>
        <NextLink href="/" passHref>
          <Link>hello</Link>
        </NextLink>
        ,{'\u00A0'}
        <NextLink href="/" passHref>
          <Link>world</Link>
        </NextLink>
      </Td>
      <Td>-</Td>
      <Td lineHeight="1.5">
        Остання зміна <br /> 03.04.2022 о 11:06
      </Td>
    </Tr>
  );
};

export const TableBlog = () => {
  return (
    <TableContainer w="full">
      <Table variant="blog">
        <Thead>
          <Tr>
            <Th>
              <HStack>
                <Checkbox />
                <Link pl="8px">Заголовок</Link>
                <FaCaretDown />
              </HStack>
            </Th>
            <Th>Автор</Th>
            <Th>Категорії</Th>
            <Th>Позначки</Th>
            <Th>Коментарі</Th>
            <Th>
              <HStack>
                <Link>Дата</Link>
                <FaCaretDown />
              </HStack>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <TableItem />
          <TableItem />
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>
              <HStack>
                <Checkbox />
                <Link pl="8px">Заголовок</Link>
                <FaCaretDown />
              </HStack>
            </Th>
            <Th>Автор</Th>
            <Th>Категорії</Th>
            <Th>Позначки</Th>
            <Th>Коментарі</Th>
            <Th>
              <HStack>
                <Link>Дата</Link>
                <FaCaretDown />
              </HStack>
            </Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};
