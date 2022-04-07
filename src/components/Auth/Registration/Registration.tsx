import { useFormik } from 'formik';
import {
  Flex,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  Checkbox,
  Link,
  Button,
} from '@chakra-ui/react';
import { FaGoogle } from 'react-icons/fa';

export const RegistrationForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      passwordFirst: '',
      passwordSecond: '',
    },
    validate: (values) => {
      const errors = {};

      if (!values.email) {
        errors.email = 'Обов`язкове поле';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'Невірна адреса електронної пошти';
      }

      console.log(values);
      if (!values.passwordFirst) {
        errors.passwordFirst = 'Обов`язкове поле';
      }

      if (!values.passwordSecond) {
        errors.passwordSecond = 'Обов`язкове поле';
      }

      if (values.passwordFirst && values.passwordSecond) {
        if (values.passwordFirst !== values.passwordSecond) {
          errors.passwordSecond = 'Не співпадає пароль';
        }
      }

      return errors;
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Flex h="100vh" py={[8, 16]}>
      <form onSubmit={formik.handleSubmit}>
        <VStack
          w="full"
          h="full"
          p={[0, 5, 10]}
          spacing={10}
          alignItems="flex-start"
        >
          <VStack w="full" spacing={3} alignItems="center">
            <Heading size="lg" textAlign="center">
              Реєстрація облікового запису
            </Heading>
            <Text>Почніть втілювати свої мрії в життя</Text>
          </VStack>
          <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  placeholder="Введіть свій email"
                />
                {formik.errors.email && (
                  <Text fontSize="sm" mt={1} color="red.500">
                    {formik.errors.email}
                  </Text>
                )}
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel>Пароль</FormLabel>
                <Input
                  id="passwordFirst"
                  name="passwordFirst"
                  type="password"
                  onChange={formik.handleChange}
                  value={formik.values.passwordFirst}
                  placeholder="********"
                />
                {formik.errors.passwordFirst && (
                  <Text fontSize="sm" mt={1} color="red.500">
                    {formik.errors.passwordFirst}
                  </Text>
                )}
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel>Повторіть пароль</FormLabel>
                <Input
                  id="passwordSecond"
                  name="passwordSecond"
                  type="password"
                  onChange={formik.handleChange}
                  value={formik.values.passwordSecond}
                  placeholder="********"
                />
                {formik.errors.passwordSecond && (
                  <Text fontSize="sm" mt={1} color="red.500">
                    {formik.errors.passwordSecond}
                  </Text>
                )}
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <Button type="submit" variant="primary" size="lg" w="full">
                Реєстрація
              </Button>
            </GridItem>
            <GridItem colSpan={2}>
              <Button variant="secondary" size="lg" w="full">
                <FaGoogle /> {'\u00A0'} Реєстрація через Google
              </Button>
            </GridItem>
          </SimpleGrid>
        </VStack>
      </form>
    </Flex>
  );
};
