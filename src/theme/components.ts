const inputSelectStyles = {
  variants: {
    filled: {
      field: {
        _focus: {
          borderColor: 'brand.300',
        },
      },
    },
  },
  sizes: {
    md: {
      field: {
        borderRadius: 'none',
      },
    },
  },
};

const brandRing = {
  _focus: {
    ring: 2,
    ringColor: 'brand.500',
  },
};

const buttonStyles = {
  variants: {
    primary: {
      rounded: 'none',
      color: 'white',
      backgroundColor: 'blue.500',

      _hover: {
        backgroundColor: 'blue.400',
      },

      _active: {
        backgroundColor: 'blue.600',
      },

      _focus: {
        ring: 0,
        backgroundColor: 'blue.300',
      },
    },
    secondary: {
      rounded: 'none',
      color: '#222',
      border: '1px solid #CBD5E0',
      backgroundColor: 'white',

      _hover: {
        border: '1px solid #CBD5E0',
        backgroundColor: 'brand.100',
      },

      _active: {
        color: 'white',
        border: '1px solid #CBD5E0',
        backgroundColor: 'brand.200',
      },

      _focus: {
        ring: 0,
        color: 'white',
        border: '1px solid #CBD5E0',
        backgroundColor: 'brand.200',
      },
    },
  },
};

const linkStyles = {
  variants: {
    primary: {
      color: 'blue.500',

      _hover: {
        color: 'blue.300',
      },
    },
    'header-menu': {
      fontSize: '13px',
      fontWeight: 400,
      lineHeight: 2,
      color: 'white',

      _hover: {
        color: 'blue.300',
        textDecorationLine: 'none',
      },
    },
    'navigation-menu': {
      fontSize: 'sm',
      fontWeight: 400,
      lineHeight: 1,
      color: 'white',

      _hover: {
        color: 'blue.300',
        textDecorationLine: 'none',
      },
    },
    'navigation-submenu': {
      position: 'relative',
      fontSize: 'sm',
      fontWeight: 400,
      lineHeight: 2,
      color: 'white',

      _hover: {
        color: 'blue.300',
        textDecorationLine: 'none',

        _before: {
          content: `""`,
          position: 'absolute',
          top: '0px',
          left: '-10px',
          width: '3px',
          height: '28px',
          background: 'blue.300',
        },
      },
    },
  },
};

export { inputSelectStyles, brandRing, linkStyles, buttonStyles };
