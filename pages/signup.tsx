import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import theme from '../component/common/theme';
import styled from 'styled-components';
import styleLogin from '../styles/Login.module.scss';
import HeadInfo from '../component/common/HeadInfo';
// import Loading from '../component/common/Loading';
import useInput from '../hooks/useInput';
// import Editor from '../hooks/EditorComponent';
import dynamic from 'next/dynamic';
const Loading = dynamic(() => import('../component/common/Loading'));

export default function Signup() {
  const [isLoad, setIsLoad] = useState(false);
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [email, onChangeEmail] = useInput('');

  const [desc, setDesc] = useState('');
  function onEditorChange(value) {
    setDesc(value);
  }

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );

  useEffect(() => {
    setTimeout(() => {
      setIsLoad(true);
    }, 1000);
    console.log(desc);
  });
  return (
    <>
      <HeadInfo title="싹로그 : 회원가입" />
      {isLoad ? (
        <SignupItem className={styleLogin.loginBox}>
          <strong className={styleLogin.loginLogo + ` login-logo`}>
            <Link href="/" passHref>
              SSAKLOG
            </Link>
          </strong>

          <SignupForm>
            <div>
              <label htmlFor="user-id">아이디</label>
              <input name="user-id" value={id} type="email" onChange={onChangeId} required />
            </div>
            <div>
              <label htmlFor="user-password">비밀번호</label>
              <input
                name="user-password"
                type="password"
                value={password}
                onChange={onChangePassword}
                required
              />
            </div>
            <div>
              <label htmlFor="user-password-check">비밀번호체크</label>
              <input
                name="user-password-check"
                value={passwordCheck}
                onChange={onChangePasswordCheck}
                type="password"
                required
              />
              {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
            </div>
            <div>
              <label htmlFor="user-email">이메일</label>
              <input
                name="user-email"
                value={email}
                type="email"
                onChange={onChangeEmail}
                required
              />
            </div>
            <button
              type="button"
              className={styleLogin.btnLogin + ` btn-login`}
              onClick={() => (location.href = '/list')}
            >
              가입하기
            </button>
          </SignupForm>
          {/* <Editor value={desc} onChange={onEditorChange} /> */}
        </SignupItem>
      ) : (
        <Loading />
      )}
    </>
  );
}

const SignupItem = styled.div`
  width: 32rem;
  height: auto;
  margin: auto;
`;

const SignupForm = styled.form`
  div {
    & + div {
      margin-top: 3rem;
    }

    & + button {
      margin-top: 4rem;
    }
  }

  label {
    display: block;
    font-size: 1.4rem;
  }

  input {
    display: block;
    width: 100%;
    color: #666;
  }
`;

const ErrorMessage = styled.div`
  font-size: 1.2rem;
  color: red;
`;
