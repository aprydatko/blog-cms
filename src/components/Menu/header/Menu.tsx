import { Flex, Link } from '@chakra-ui/react';
import { AddMenu } from './AddMenu';

interface MenuProps {
  logo?: boolean;
  blogLink?: boolean;
  addPost?: boolean;
}

export const Menu = ({ logo, blogLink, addPost }: MenuProps): JSX.Element => {
  return (
    <Flex whiteSpace="nowrap">
      {logo && (
        <AddMenu name="logo">
          <Link href="/" variant="header-menu">
            cms.com
          </Link>
          <Link href="/" variant="header-menu">
            Документація
          </Link>
          <Link href="/" variant="header-menu">
            Підтримка
          </Link>
          <Link href="/" variant="header-menu">
            Зворотній зв'язок
          </Link>
        </AddMenu>
      )}
      {blogLink && (
        <AddMenu name="blog" title="Блог">
          <Link href="/" variant="header-menu">
            Відвідати сайт
          </Link>
        </AddMenu>
      )}
      {addPost && (
        <AddMenu name="add" title="Додати">
          <Link href="/" variant="header-menu">
            Запис
          </Link>
          <Link href="/" variant="header-menu">
            Медіа
          </Link>
          <Link href="/" variant="header-menu">
            Сторінку
          </Link>
          <Link href="/" variant="header-menu">
            Користувача
          </Link>
        </AddMenu>
      )}
    </Flex>
  );
};
