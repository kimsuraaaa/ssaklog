import React, { useState, useEffect } from 'react';
import styleLogin from '../styles/Login.module.scss';
import HeadInfo from '../component/common/HeadInfo';
// import Loading from '../component/common/Loading';
import dynamic from 'next/dynamic';
const Loading = dynamic(() => import('../component/common/Loading'));

export default function Login() {
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    // 로드 조건 달성 시 setIsLoad(true) 처리. (ex. API 통신 및 로드 완료 시)
    // pushTest
    setTimeout(() => {
      setIsLoad(true);
    }, 1000);
  });
  return (
    <>
      <HeadInfo title="SSAKLOGIN" />
      {isLoad ? (
        <div className={styleLogin.loginBox}>
          <strong className={styleLogin.loginLogo + ` login-logo`}>SSAKLOG</strong>
          <input type="text" placeholder="아이디" />
          <input type="text" placeholder="비밀번호" />
          <button
            type="button"
            className={styleLogin.btnLogin + ` btn-login`}
            onClick={() => (location.href = '/list')}
          >
            로그인
          </button>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
