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

export const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
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
      if (!values.password) {
        errors.password = 'Обов`язкове поле';
      }

      return errors;
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  console.log('formik', formik);
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
              Увійдіть у свій обліковий запис
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
                  id="password"
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  placeholder="********"
                />
                {formik.errors.password && (
                  <Text fontSize="sm" mt={1} color="red.500">
                    {formik.errors.password}
                  </Text>
                )}
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <Checkbox
                id="rememberMe"
                name="rememberMe"
                colorScheme="blue"
                onChange={formik.handleChange}
                isChecked={formik.values.rememberMe}
              >
                Запам'ятати мене
              </Checkbox>
            </GridItem>
            <GridItem colSpan={1} textAlign="right">
              <Link variant="primary" href="/lostpassword">
                Забув пароль
              </Link>
            </GridItem>
            <GridItem colSpan={2}>
              <Button type="submit" variant="primary" size="lg" w="full">
                Увійти
              </Button>
            </GridItem>
            <GridItem colSpan={2}>
              <Button variant="secondary" size="lg" w="full">
                <FaGoogle /> {'\u00A0'} Увійти через Google
              </Button>
            </GridItem>
            <GridItem colSpan={2} display="flex" justifyContent="center">
              <Text>Немає облікового запису?</Text>
              {'\u00A0'}
              <Link variant="primary" href="/sign-up">
                Зареєструватися
              </Link>
            </GridItem>
          </SimpleGrid>
        </VStack>
      </form>
    </Flex>
  );
};
