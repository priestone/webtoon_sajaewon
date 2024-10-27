import styled from "styled-components";
import imgLogo from "./imgs/weebtoon.png";
import { Link } from "react-router-dom";

const LogoWrap = styled.div`
  width: 100%;
  border-bottom: 1.5px solid #444;
  display: flex;
  align-items: center;
  /* padding: 0 0 0 34px; */
`;

const Logo = styled.div`
  width: 250px;
  height: 100px;
  overflow: hidden;
  position: relative;
  margin-left: 36px;
  img {
    position: absolute;
    top: 30%;
    left: 7%;
    width: 80%;
  }
`;

const HeaderText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 500;
  width: 120px;
  height: 50px;
  opacity: 0.7;
  margin-top: 20px;
`;

const Bar = styled.div`
  width: 2px;
  height: 50%;
  background-color: black;
  opacity: 0.3;
`;

const Header = () => {
  return (
    <>
      <LogoWrap>
        <Link to="/">
          <Logo>
            <img src={imgLogo} alt="네이버 웹툰 로고" />
          </Logo>
        </Link>
        <HeaderText>
          <p>웹소설</p>
          <Bar></Bar>
          <p>시리즈</p>
        </HeaderText>
      </LogoWrap>
    </>
  );
};

export default Header;
