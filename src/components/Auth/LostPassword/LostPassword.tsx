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
  Link,
  Button,
} from '@chakra-ui/react';

export const LostPasswordForm = () => {
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
              Відновити пароль
            </Heading>
            <Text textAlign="center">
              Для того, щоб відновити пароль введіть свою пошту, та підтвердіть
              новий пароль
            </Text>
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
              <Button type="submit" variant="primary" size="lg" w="full">
                Підтвердити
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
