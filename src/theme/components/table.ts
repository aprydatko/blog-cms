import type { ComponentStyleConfig } from '@chakra-ui/theme';

export const Table: ComponentStyleConfig = {
  baseStyle: {
    border: '1px solid',
    borderColor: '#c3c4c7',
    backgroundColor: 'white',
  },
  sizes: {},
  variants: {
    blog: {
      table: {
        border: '1px solid',
        borderColor: '#c3c4c7',
        backgroundColor: 'white',
      },
      thead: {
        height: '36px',
        border: '1px solid',
        borderColor: '#c3c4c7',
        tr: {
          th: {
            fontSize: '14px',
            fontWeight: 'normal',
            textTransform: 'none',
            color: '#3c434a',
          },
        },
      },
      tfoot: {
        height: '36px',
        borderTop: '1px solid',
        borderColor: '#c3c4c7',
        tr: {
          th: {
            fontSize: '14px',
            fontWeight: 'normal',
            textTransform: 'none',
            color: '#3c434a',
          },
        },
      },
      tbody: {
        tr: {
          height: '60px',
          th: {
            fontSize: '14px',
            fontWeight: 'normal',
            textTransform: 'none',
            color: '#3c434a',
          },
          _odd: {
            background: '#f6f7f7',
          },
        },
        td: {
          py: '10px',
        },
      },
    },
  },
  defaultProps: {
    size: 'sm',
    variant: 'blog',
  },
};
