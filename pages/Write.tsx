import React, { useState, useEffect } from 'react';
import Loading from '../component/common/Loading';
import { ThemeProvider } from 'styled-components';
import theme from '../component/common/theme';
import listStyled from '../styles/listStyled.js';
import EditTextBox from '../hooks/EditTextBox';
import styled from 'styled-components';

export default function Write() {
  const [isLoad, setIsLoad] = useState(false);

  const SsakEditor = styled.div`
    display: block;
    position: relative;
    width: calc(100% - 5rem);
    max-width: 100rem;
    margin: auto;
    padding: 2rem;
    border: 0.1rem solid #ddd;
    border-radius: 1rem;
    box-sizing: border-box;
    h1 {
      margin-bottom: 2rem;
      padding-bottom: 1.5rem;
      font-weight: 400;
      border-bottom: 0.1rem solid #ddd;
    }
  `;

  const BtnApply = styled.button`
    display: block;
    width: 20rem;
    margin: 4rem auto;
    padding: 2rem 0;
    font-size: 2rem;
    color: #fff;
    background-color: #4c7d5f;
    border-radius: 0.4rem;
    transition: 0.2s;
    &:hover {
      background-color: ${theme.colors.subColor};
      transform: scale(1.1);
    }
  `;

  useEffect(() => {
    // 로드 조건 달성 시 setIsLoad(true) 처리. (ex. API 통신 및 로드 완료 시)
    setTimeout(() => {
      setIsLoad(true);
    }, 1000);
  });

  return (
    <>
      {isLoad ? (
        <ThemeProvider theme={theme}>
          <listStyled.ContainerBlock>
            <SsakEditor>
              <h1>
                <EditTextBox placeholder={`제목을 입력해 주세요.`} editMode={false} />
              </h1>
              <EditTextBox placeholder={`내용을 입력해 주세요.`} editMode={true} />
            </SsakEditor>
            <BtnApply>등록하기</BtnApply>
          </listStyled.ContainerBlock>
        </ThemeProvider>
      ) : (
        <Loading />
      )}
    </>
  );
}
