import styled, { ThemeProvider, keyframes } from 'styled-components';
import theme from '../component/common/theme';

function ThemeBox({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

const logoLeft = keyframes`
0% {
  transform: rotate(45deg);
  opacity: 0;
}
100% {
  transform: rotate(0deg);
  opacity: 1;
}
`;
const logoRight = keyframes`
0% {
  transform: rotate(-45deg);
  opacity: 0;
}
100% {
  transform: rotate(0deg);
  opacity: 1;
}
`;

const loadingLogoLeft = keyframes`
0% {
  transform: rotate(45deg);
  opacity: 0;
}
80% {
  transform: rotate(0deg);
  opacity: 1;
}
100% {
  transform: rotate(0deg);
  opacity: 0;
}
`;
const loadingLogoRight = keyframes`
0% {
  transform: rotate(-45deg);
  opacity: 0;
}
10% {
  transform: rotate(-45deg);
  opacity: 0;
}
80% {
  transform: rotate(0deg);
  opacity: 1;
}
100% {
  transform: rotate(0deg);
  opacity: 0;
}
`;

const logoLeftLoop = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(5deg);
}`;

const logoRightLoop = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(-5deg);
}
`;

const AfterDotDot = keyframes`
0% {
content:'.';
}
50% {
  content:'..';
  }
100% {
  content:'...';
}
`;

const Loading = styled.div`
  ${theme.common.flexCenter}
  position:absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(1rem);
  z-index: 999;
  .logo-motion {
    display: block;
    position: relative;
    width: 20rem;
    height: 20rem;
    margin: auto;
    padding-top: 13.5rem;
    font-weight: 300;
    font-size: 2rem;
    color: #4b7c5e;
    text-align: center;
    span {
      display: inline-block;
      padding-left: 1.2rem;
      &:after {
        content: '.';
        display: inline-block;
        width: 2rem;
        padding-left: 0.3rem;
        text-align: left;
        animation: ${AfterDotDot} 2s infinite;
      }
    }
    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 4.3rem;
      bottom: 0.5rem;
      left: 0rem;
      width: 5rem;
      height: 5rem;
      margin: auto;
      background: url(assets/images/img_logo_left.png) no-repeat 50% 50% / 100% auto;
      animation: ${loadingLogoRight} 1.5s infinite;
      transform-origin: 100% 100%;
      opacity: 0;
    }
    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0.5rem;
      left: 6.3rem;
      width: 5rem;
      height: 5rem;
      margin: auto;
      background: url(assets/images/img_logo_right.png) no-repeat 50% 50% / 100% auto;
      animation: ${loadingLogoLeft} 1.5s infinite;
      transform-origin: 0% 100%;
      opacity: 0;
    }
  }
`;

const logoEffect = styled.div`
  .logo {
    display: block;
    position: relative;
    width: 20rem;
    height: 20rem;
    margin: auto;
    padding-top: 13.5rem;
    font-weight: 300;
    font-size: 2.4rem;
    color: #4b7c5e;
    text-align: center;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 4.3rem;
      bottom: 0.5rem;
      left: 0rem;
      width: 5rem;
      height: 5rem;
      margin: auto;
      background: url(assets/images/img_logo_left.png) no-repeat 50% 50% / 100% auto;
      animation: ${logoRight} 1s forwards, logoLeftLoop 2s 1s infinite alternate;
      transform-origin: 100% 100%;
      opacity: 0;
    }
    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0.5rem;
      left: 6.3rem;
      width: 5rem;
      height: 5rem;
      margin: auto;
      background: url(assets/images/img_logo_right.png) no-repeat 50% 50% / 100% auto;
      animation: ${logoLeft} 1s 0.2s forwards, logoRightLoop 2s 1.2s infinite alternate;
      transform-origin: 0% 100%;
      opacity: 0;
    }
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100%;
  .category-box {
    position: relative;
    width: 30rem;
    min-height: 80vh;
    background-color: #eee;
    overflow-y: auto;
  }
  .list-box {
    width: 102.4rem;
    margin: auto;
    background-color: #fff;
  }
  @media ${({ theme }) => theme.device.pad} {
    .list-box {
      width: 100%;
      max-width: 100%;
    }
  }
`;

const ContainerBlock = styled.div`
  display: block;
  width: 100%;
  min-height: 100%;
  .category-box {
    position: relative;
    width: 30rem;
    min-height: 80vh;
    background-color: #eee;
    overflow-y: auto;
  }
  .list-box {
    width: 102.4rem;
    margin: auto;
    background-color: #fff;
  }
  @media ${({ theme }) => theme.device.pad} {
    .list-box {
      width: 100%;
      max-width: 100%;
    }
  }
`;

const listStyled = {
  ThemeBox,
  Loading,
  AfterDotDot,
  logoEffect,
  Container,
  ContainerBlock,
};

export default listStyled;
