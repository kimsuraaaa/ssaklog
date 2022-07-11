// deviceSize 분기점은 3가지로 구성하였습니다.
// pc : 1024px > deviceSize
// pad : 1024px >= deviceSize > 480px
// mobile : 480px < deviceSize
const deviceSize = {
  pad: '1024px',
  mobile: '480px',
};

const device = {
  pad: `screen and (max-width: ${deviceSize.pad})`,
  mobile: `screen and (max-width: ${deviceSize.mobile})`,
};

// // 반응형 픽셀 컨버팅 처리 함수 - 이 방법은 좀 더 고민해 보자.
// const pixelToRem = (size) => `${size / 16}rem`;
// const fontSizes = {
//   title: pixelToRem(60),
//   subtitle: pixelToRem(30),
//   paragraph: pixelToRem(18),
// };

// 싹로그 기본 fontSize 컨벤션
const fontSizes = {
  title: `font-size:3.6rem;`,
  subtitle: `font-size:2.4rem;`,
  contents: `font-size:1.6rem;`,
};

// 싹로그의 메인, 서브 컬러를 선언.
const colors = {
  mainColor: '#69ad83',
  subColor: '#829e5f',
  bgPointColor: '#f7f7f7',
  fontPointColor: '#3a7550',
};

// 자주 사용하는 스타일 속성 패턴들을 theme로 선언.
// flexCenter : flex로 가로 세로 중앙정렬 맞출때.
// textElli1 ~ 3 : 말줄임 처리.
const common = {
  flexCenter: `
    display: flex;
    justify-contents: center;
    align-items: center;
  `,
  textElli1: `
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  `,
  textElli2: `
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  `,
  textElli3: `
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  `,
};

// theme 객체에 감싸서 반환.
const theme = {
  device,
  fontSizes,
  colors,
  common,
};

export default theme;
