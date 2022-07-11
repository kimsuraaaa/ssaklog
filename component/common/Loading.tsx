import React from 'react';
import listStyled from '../../styles/listStyled.js';
import { ThemeProvider } from 'styled-components';
import theme from '../common/theme';

const Loading = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <listStyled.Loading>
          <div className="logo-motion">
            <span>Loading</span>
          </div>
        </listStyled.Loading>
      </ThemeProvider>
    </>
  );
};

export default Loading;
