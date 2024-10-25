import { useParams } from "react-router-dom";
import styled from "styled-components";

const subPageData = [
  {
    id: 0,
    title: "외모지상주의",
    author: "박태준",
    desc: "못생기고 뚱뚱하다고 괴롭힘을 당하며 루저 인생만 살아온 내가 잘생겨졌다는 이유로 인싸가 됐다.어느 날 자고 일어났더니 갑자기 완벽한 외모와 몸을 지닌 사람이 되어 깨어난다면?",
    imgUrl: "https://i.namu.wiki/i/01YcfJDn3yWI_K-1oMGOIjhale9q2tompHU78Xqj58jYuGcAyqgLUfncMN0Dpn-PKzD3CU2I6yzKoOvsPyGbjQ.webp",
  },
  {
    id: 1,
    title: "외모지상주의",
    author: "박태준",
    desc: "못생기고 뚱뚱하다고 괴롭힘을 당하며 루저 인생만 살아온 내가 잘생겨졌다는 이유로 인싸가 됐다.어느 날 자고 일어났더니 갑자기 완벽한 외모와 몸을 지닌 사람이 되어 깨어난다면?",
    imgUrl: "https://image-comic.pstatic.net/webtoon/179704/thumbnail/thumbnail_IMAG21_3486178852879937589.jpg",
  },
  {
    id: 2,
    title: "외모지상주의",
    author: "박태준",
    desc: "못생기고 뚱뚱하다고 괴롭힘을 당하며 루저 인생만 살아온 내가 잘생겨졌다는 이유로 인싸가 됐다.어느 날 자고 일어났더니 갑자기 완벽한 외모와 몸을 지닌 사람이 되어 깨어난다면?",
    imgUrl: "https://image-comic.pstatic.net/webtoon/641253/thumbnail/thumbnail_IMAG21_01672165-03c8-44b1-ba0e-ef82c9cfcd10.jpg",
  },
  {
    id: 3,
    title: "외모지상주의",
    author: "박태준",
    desc: "못생기고 뚱뚱하다고 괴롭힘을 당하며 루저 인생만 살아온 내가 잘생겨졌다는 이유로 인싸가 됐다.어느 날 자고 일어났더니 갑자기 완벽한 외모와 몸을 지닌 사람이 되어 깨어난다면?",
    imgUrl: "https://image-comic.pstatic.net/webtoon/641253/thumbnail/thumbnail_IMAG21_01672165-03c8-44b1-ba0e-ef82c9cfcd10.jpg",
  },
  {
    id: 4,
    title: "외모지상주의",
    author: "박태준",
    desc: "못생기고 뚱뚱하다고 괴롭힘을 당하며 루저 인생만 살아온 내가 잘생겨졌다는 이유로 인싸가 됐다.어느 날 자고 일어났더니 갑자기 완벽한 외모와 몸을 지닌 사람이 되어 깨어난다면?",
    imgUrl: "https://image-comic.pstatic.net/webtoon/641253/thumbnail/thumbnail_IMAG21_01672165-03c8-44b1-ba0e-ef82c9cfcd10.jpg",
  },
];

const Wrap = styled.div`
width:1500px;
display:flex;
`;

const ConWrap = styled.div`
  width: 40%;
  padding: 30px 10px;
`;

const ConImg = styled.div`
  width: 100%;
  height: 600px;
  border-radius: 20px;
  overflow: hidden;
`;

const Text = styled.div`
width:60%;
`;

const Sub = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <Wrap>
      <ConWrap>
        <ConImg>
          <img src={subPageData[id].imgUrl} alt="콘텐츠 이미지" />
        </ConImg>
      </ConWrap>
        <Text>
          <h1>{subPageData[id].title}</h1>
          <h2>{subPageData[id].author}</h2>
          <p>{subPageData[id].desc}</p>
        </Text>
    </Wrap>
  );
};

export default Sub;
