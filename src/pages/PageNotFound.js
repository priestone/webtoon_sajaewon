import styled from "styled-components";

const Notice = styled.div`
font-size: 60px;
text-align:center;
h1{
  font-size:80px;
  margin-bottom:30px;
}
p{
  margin-top: 30px;
  font-size:30px;
}
`;


const PageNotFound = () => {
  return <div>
    <Notice>
    <h1>404</h1>
      Oops, This Page Not Found!
    <p>페이지 경로를 잘못 입력하신듯 합니다. <br/> 홈페이지로 돌아가려면 로고를 클릭해주세요</p>
      </Notice>
  </div>;
};

export default PageNotFound;
