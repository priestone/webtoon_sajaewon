import { useParams } from "react-router-dom";
import styled from "styled-components";

const subPageData = [
  {
    id: 0,
    title: "외모지상주의",
    author: "박태준",
    desc: "못생기고 뚱뚱하다고 괴롭힘을 당하며 루저 인생만 살아온 내가 잘생겨졌다는 이유로 인싸가 됐다.어느 날 자고 일어났더니 갑자기 완벽한 외모와 몸을 지닌 사람이 되어 깨어난다면?",
    imgUrl: "d",
  },
];

const ConWrap = styled.div`
  width: 1000px;
  padding: 30px 10px;
`;

const ConImg = styled.div`
  width: 480px;
  height: 600px;
  border-radius: 20px;
  /* background-color: lightgray; */
  background: url(https://image-comic.pstatic.net/webtoon/641253/thumbnail/thumbnail_IMAG21_01672165-03c8-44b1-ba0e-ef82c9cfcd10.jpg)
    no-repeat center;
`;

const Sub = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <ConWrap>
        <ConImg></ConImg>
      </ConWrap>
    </div>
  );
};

export default Sub;
