import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import theme from '../component/common/theme';
import dynamic from 'next/dynamic';
const Loading = dynamic(() => import('../component/common/Loading'));

export default function Index() {
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    // 로드 조건 달성 시 setIsLoad(true) 처리. (ex. API 통신 및 로드 완료 시)
    setTimeout(() => {
      setIsLoad(true);
    }, 1000);
  });

  const TestBtn = styled.div`
    display: inline-block;
    position: relative;
    width: 20rem;
    margin: 1rem;
    padding: 1.5rem 0;
    font-size: 2rem;
    color: #fff;
    background-color: ${theme.colors.subColor};
    border-radius: 0.8rem;
    box-shadow: 0.1rem 0.1rem 3.3rem rgb(0 0 0 / 4%);
    text-align: center;
    cursor: pointer;
  `;

  return (
    <>
      {isLoad ? (
        <div style={{ textAlign: 'center', fontSize: '1.8rem', lineHeight: '1.4' }}>
          <p style={{ marginBottom: '3rem' }}>
            여기는 싹로그의 처음 페이지 입니다. <br />
            접속된 사용자의 로그인 여부를 체크하여
            <br />
            <br />
            * 비로그인 상태였다면 : 로그인 페이지로
            <br />
            * 로그인 상태였다면 : 개인 메인 페이지로
            <br />
            <br />
            이동되도록 분기처리 합니다.
            <br />
            로그인 체크 API가 준비된다면 적용할 예정입니다.
          </p>
          <Link href="/login" passHref>
            <TestBtn>비로그인 상태였다면..</TestBtn>
          </Link>
          <Link href="/list" passHref>
            <TestBtn>로그인 상태였다면..</TestBtn>
          </Link>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
