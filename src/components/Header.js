import styled from "styled-components";

const Logo = styled.div`
  width: 300px;
  height: 50px;
  img {
    width: 100%;
  }
`;

const Header = () => {
  return (
    <div>
      <Logo>
        <img
          src="https://www.theteams.kr/includes/uploads/recruit/385020de4779cc825b66eb1f075d7952.jpg"
          alt="네이버 웹툰 로고"
        />
      </Logo>
    </div>
  );
};

export default Header;
