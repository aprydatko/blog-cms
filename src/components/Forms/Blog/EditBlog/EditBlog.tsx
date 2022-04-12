import { useState } from 'react';
import { HStack, Box, Flex, Link, VStack, Container } from '@chakra-ui/react';
import { FaRegSun, FaEllipsisV } from 'react-icons/fa';
import { TextEditor, ToolPanel } from 'src/components';

const SavePannel = ({ isActiveRightPanel, setIsActiveRightPanel }) => {
  return (
    <HStack minW="460px" justifyContent="space-between">
      <Link
        fontSize="13px"
        px="10px"
        py="6px"
        border="1px solid"
        borderColor="transparent"
        _hover={{
          borderColor: 'blue.500',
        }}
      >
        Зберегти чернетку
      </Link>
      <Link
        fontSize="13px"
        px="10px"
        py="6px"
        border="1px solid"
        borderColor="transparent"
        _hover={{
          borderColor: 'blue.500',
        }}
      >
        Переглянути
      </Link>
      <Link
        fontSize="13px"
        px="10px"
        py="6px"
        border="1px solid"
        borderColor="transparent"
        background="blue.500"
        color="white"
        _hover={{
          borderColor: 'blue.500',
        }}
      >
        Опублікувати
      </Link>
      <Link
        color="black"
        onClick={() => setIsActiveRightPanel(!isActiveRightPanel)}
      >
        <FaRegSun style={{ width: '20px', height: '20px' }} />
      </Link>
      <Link color="black">
        <FaEllipsisV style={{ width: '20px', height: '20px' }} />
      </Link>
    </HStack>
  );
};

const EditBlog = () => {
  const [isActiveRightPanel, setIsActiveRightPanel] = useState(false);
  return (
    <div>
      <Flex h="60px" px={8} boxShadow="sm" bg="white">
        <HStack w="full">
          <ToolPanel />
        </HStack>
        <SavePannel
          isActiveRightPanel={isActiveRightPanel}
          setIsActiveRightPanel={setIsActiveRightPanel}
        />
      </Flex>
      <Flex h="calc(100vh - 96px)">
        <VStack w="full" bg="gray.100">
          {/* <Box>block 1</Box> */}
          <Container
            maxW="container.lg"
            h="full"
            overflowY="auto"
            mt="35px"
            p={4}
            bg="white"
            boxShadow="sm"
          >
            <TextEditor />
          </Container>
        </VStack>
        <VStack
          minW={isActiveRightPanel ? '490px' : '0px'}
          justifyContent="space-between"
          bg="red.100"
        >
          <Box display={isActiveRightPanel ? 'block' : 'none'}>block 2</Box>
        </VStack>
      </Flex>
    </div>
  );
};

export default EditBlog;
