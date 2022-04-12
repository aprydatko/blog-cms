import type { NextPage } from 'next';
import Layout from 'src/layouts/posts';
import { HStack, Button, Heading, Box, Flex } from '@chakra-ui/react';
import { ViewBlog } from 'src/components';

const Posts: NextPage = () => {
  return (
    <Layout title="CMS" description="Система контроля контентом">
      <Box>
        <HStack justifyContent="flex-start" alignItems="center">
          <Heading fontWeight="400" size="md">
            Записи
          </Heading>
          <Button pos="relative" top="2px" size="xs" variant="outline">
            Додати новий
          </Button>
        </HStack>
        <Flex mt={3}>
          <ViewBlog />
        </Flex>
      </Box>
    </Layout>
  );
};

export default Posts;
