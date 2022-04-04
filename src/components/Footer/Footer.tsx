import React, { ReactChildren, ReactChild } from 'react';

interface FooterProps {
  children: ReactChild | ReactChildren;
}

export const Footer = (): JSX.Element => {
  return <footer>footer</footer>;
};
