import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../component/common/theme';
import styled from 'styled-components';
import ContentEditable from 'react-contenteditable';

export default function EditTextBox({ placeholder, editMode }) {
  const returnText = useRef(''); // 작성된 문구를 useRef로 저장해서 관리합니다. 입력마다 리렌더링이 발생되어 useRef 값으로 저장합니다.
  const [active, setActive] = useState(false); // 해당 입력창의 활성화 여부 상태값 입니다.
  const [textAlign, setTextAlign] = useState({ textAlign: 'left' }); // 작성 문구의 정렬 설정값을 갖고 있는 상태값 입니다.
  const handleChange = (e) => {
    returnText.current = e.target.value;
    returnText.current.length > 0
      ? e.currentTarget.classList.remove('placeholder')
      : e.currentTarget.classList.add('placeholder');
  };

  // input 에 forcus 했을때, 테두리 style 을 적용합니다.
  const forcusIn = (e) => {
    e.currentTarget.parentNode.classList.add('edit-border');
  };

  // 글 작성이 완료되었을때, 테두리 style을 제거하고, 업데이트 합니다.
  const handleBlur = (e) => {
    if (!editMode) {
      e.currentTarget.parentNode.classList.remove('edit-border');
    }
  };

  const editOff = (e) => {
    e.currentTarget.parentNode.parentNode.classList.remove('edit-border');
  };

  const editTextAlign = (type) => {
    setTextAlign({ textAlign: `${type}` });
    setActive(true);
  };

  // prop 값으로 전달받은 placeholder 값으로 edit 모드로 전환되었을때 placeholder 효과를 적용합니다.
  const EditText = styled.div`
    display: block;
    position: relative;
    width: 100%;
    min-height: 3rem;
    margin: 0.8rem auto;
    padding: 1rem;
    text-align: left;
    border: 0.1rem solid transparent;
    border-radius: 0.5rem;
    box-sizing: border-box;
    .content-edit-text {
      font-size: 1.8rem;
      outline: 0;
      border: 0;
      &.placeholder::before {
        display: inline-block;
        content: '${placeholder}';
        padding-top: 0.2rem;
        color: #aaa;
      }
    }
    .edit-control {
      position: relative;
      width: 100%;
      height: 0;
      padding: 0 0 1rem 0;
      background-color: #fff;
      box-sizing: border-box;
      border-top-right-radius: 1rem;
      border-top-left-radius: 1rem;
      transition: 0.3s;
      opacity: 0;
      z-index: -1;
      button {
        display: inline-block;
        margin-right: 1rem;
        padding: 1rem;
        background-color: #eee;
        border-radius: 0.4rem;
      }
      .btn-complete {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 3;
      }
    }
    &.edit-border {
      border: 0.1rem solid #ddd;
      .edit-control {
        height: 5.4rem;
        opacity: 1;
        z-index: 1;
        button {
        }
      }
    }
  `;

  return (
    <>
      <ThemeProvider theme={theme}>
        <EditText className={active ? 'edit-border' : ''}>
          {editMode ? (
            <div className="edit-control">
              <button type="button" onClick={() => editTextAlign('left')}>
                left
              </button>
              <button type="button" onClick={() => editTextAlign('center')}>
                center
              </button>
              <button type="button" onClick={() => editTextAlign('right')}>
                right
              </button>
              <button type="button" className="btn-complete" onClick={(e) => editOff(e)}>
                완료
              </button>
            </div>
          ) : (
            ``
          )}
          <ContentEditable
            html={returnText.current}
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={forcusIn}
            className={`content-edit-text` + (returnText.current.length <= 0 ? ` placeholder` : ``)}
            style={textAlign}
          />
        </EditText>
      </ThemeProvider>
    </>
  );
}
