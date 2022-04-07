export const navigation = [
  {
    id: 1,
    name: 'dashboard',
    title: 'Майстерня',
    url: '/',
    tag: 'dashboard',
    submenu: [
      {
        id: 1,
        title: 'Головна',
        url: '/dashboard',
      },
      {
        id: 2,
        title: 'Оновлення',
        url: '/update',
      },
    ],
  },
  {
    id: 2,
    name: 'posts',
    title: 'Записи',
    url: '/posts',
    tag: 'blog',
    submenu: [
      {
        id: 1,
        title: 'Всі записи',
        url: '/posts',
      },
      {
        id: 2,
        title: 'Додати новий',
        url: '/posts/new',
      },
      {
        id: 3,
        title: 'Категорії',
        url: '/categories',
      },
      {
        id: 4,
        title: 'Позначки',
        url: '/tags',
      },
    ],
  },
  {
    id: 3,
    name: 'mediaFiles',
    title: 'Медіафайли',
    url: '/upload',
    tag: 'blog',
    submenu: [
      {
        id: 1,
        title: 'Бібліотека',
        url: '/upload',
      },
      {
        id: 2,
        title: 'Додати новий',
        url: '/upload/new',
      },
    ],
  },
  {
    id: 4,
    name: 'pages',
    title: 'Сторінки',
    url: '/pages',
    tag: 'blog',
    submenu: [
      {
        id: 1,
        title: 'Всі сторінки',
        url: '/pages',
      },
      {
        id: 2,
        title: 'Додати нову',
        url: '/pages/new',
      },
    ],
  },
  {
    id: 5,
    name: 'users',
    title: 'Користувачі',
    url: '/users',
    tag: 'settings',
    submenu: [
      {
        id: 1,
        title: 'Всі користувачі',
        url: '/users',
      },
      {
        id: 2,
        title: 'Додати',
        url: '/users/new',
      },
      {
        id: 3,
        title: 'Обліковий запис',
        url: '/users/:id',
      },
    ],
  },
  {
    id: 6,
    name: 'tools',
    title: 'Інструменти',
    url: '/tools',
    tag: 'settings',
    submenu: [
      {
        id: 1,
        title: 'Імпотр',
        url: '/tools/import',
      },
      {
        id: 2,
        title: 'Експорт',
        url: '/tools/export',
      },
    ],
  },
  {
    id: 7,
    name: 'settings',
    title: 'Налаштування',
    url: '/settings',
    tag: 'settings',
    submenu: [
      {
        id: 1,
        title: 'Загальні',
        url: '/settings/general',
      },
      {
        id: 2,
        title: 'Написання',
        url: '/settings/posts',
      },
      {
        id: 3,
        title: 'Медіафайли',
        url: '/settings/media',
      },
      {
        id: 4,
        title: 'Постійні посилання',
        url: '/settings/links',
      },
      {
        id: 5,
        title: 'Конфіденційність',
        url: '/settings/confidentially',
      },
    ],
  },
];
