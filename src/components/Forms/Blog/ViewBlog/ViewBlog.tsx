import {
  Flex,
  HStack,
  Link,
  Box,
  VStack,
  Input,
  Button,
  Select,
  Text,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import { TableBlog } from './TableBlog';

export const ViewBlog = () => {
  const searchForm = useFormik({
    initialValues: {
      search: '',
    },
    validate: (values) => {
      const errors = {};

      return errors;
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <VStack w="full" justifyContent="flex-start" alignItems="flex-start">
      <Flex w="full" display="flex" justifyContent="space-between">
        <HStack fontSize="xs">
          <Link>Всі (2)</Link>
          <Box color="blackAlpha.500">|</Box>
          <Link>Оприлюднено (1)</Link>
          <Box color="blackAlpha.500">|</Box>
          <Link>Чернетка (1)</Link>
        </HStack>
        <form onSubmit={searchForm.handleSubmit}>
          <HStack>
            <Input
              w="176px"
              size="sm"
              variant="search"
              id="search"
              name="search"
              type="search"
              onChange={searchForm.handleChange}
              value={searchForm.values.search}
              placeholder="Пошук"
            />
            <Button type="submit" size="sm">
              Шукати записи
            </Button>
          </HStack>
        </form>
      </Flex>
      <Flex w="full" display="flex" justifyContent="space-between">
        <Box display="flex">
          <HStack>
            <Box>
              <Select size="sm">
                <option value="one">Групові дії</option>
                <option value="two">Редагувати</option>
                <option value="three">Видалити</option>
              </Select>
            </Box>
            <Button size="sm">Застосувати</Button>
          </HStack>
          <Box px={3} />
          <HStack>
            <Box>
              <Select size="sm">
                <option value="one">Квітень 2022</option>
                <option value="two">Всі дати</option>
              </Select>
            </Box>
            <Box>
              <Select size="sm">
                <option value="one">Всі категорії</option>
                <option value="two">Без категорії</option>
              </Select>
            </Box>
            <Button size="sm">Фільтрувати</Button>
          </HStack>
        </Box>
        <Box>
          <Text fontSize="sm">2 елемента</Text>
        </Box>
      </Flex>
      <TableBlog />
      <HStack>
        <Box>
          <Select size="sm">
            <option value="one">Групові дії</option>
            <option value="two">Редагувати</option>
            <option value="three">Видалити</option>
          </Select>
        </Box>
        <Button size="sm">Застосувати</Button>
      </HStack>
    </VStack>
  );
};
