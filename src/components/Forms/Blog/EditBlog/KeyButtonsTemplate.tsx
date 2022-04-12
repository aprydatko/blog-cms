import { useState } from 'react';
import {
  HStack,
  Box,
  Flex,
  Link,
  VStack,
  Container,
  Select,
} from '@chakra-ui/react';
import {
  FaHeading,
  FaQuoteLeft,
  FaCode,
  FaBold,
  FaItalic,
  FaUnderline,
  FaParagraph,
  FaImage,
  FaList,
  FaListOl,
  FaSpellCheck,
  FaIndent,
  FaLink,
  FaFileUpload,
} from 'react-icons/fa';

const KeyButtonTemplate = (props) => {
  const [selectValue, setSelectValue] = useState('');
  const selectTypes = props.blockTypes.filter(
    (t) => t.style.indexOf('header') !== -1
  );
  const onHandleSelect = (e) => {
    const event = e.target.value;

    setSelectValue(event);
    props.toggleBlockType(event);
  };

  console.log('selectValue', selectValue);

  const SelectHeadline = () => {
    return (
      <Link color="black">
        <HStack>
          <FaHeading style={{ width: '16px', height: '16px' }} />
          <Select
            onChange={onHandleSelect}
            value={selectValue}
            size="xs"
            borderRadius="3px"
          >
            {selectTypes.map((type, index) => (
              <option key={index} value={type.style}>
                {type.label}
              </option>
            ))}
          </Select>
        </HStack>
      </Link>
    );
  };

  return (
    <HStack w="full">
      <SelectHeadline />
    </HStack>
  );
};

export default KeyButtonTemplate;
