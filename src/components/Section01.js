import { Link } from "react-router-dom";
import styled from "styled-components";

const Section = styled.div`
  height:708px;
  padding: 10px;
  h3 {
    font-size: 24px;
    font-weight: 900;
  }
`;

const ConWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Con = styled.div`
  width: 260px;
  margin-top: 20px;
  border-radius: 10px;
  /* background-color: lightgray; */
  color: #1d1d1d;
  img {
    width: 100%;
  }
  h4 {
    font-size: 18px;
    font-weight:900;
    text-decoration: none;
    margin: 10px 0;
  }
  p {
    font-size: 14px;
  }
`;

const ConImg = styled.div`
  width: 260px;
  height: 330px;
  overflow: hidden;
  border-radius: 10px;
`;

const section = [
  {
    id:0,
    link:"/sub/0",
    ImgSrc:"https://i.namu.wiki/i/01YcfJDn3yWI_K-1oMGOIjhale9q2tompHU78Xqj58jYuGcAyqgLUfncMN0Dpn-PKzD3CU2I6yzKoOvsPyGbjQ.webp",
    title:"삼봉이발소",
    author:"하일권"
  },
  {
    id:1,
    link:"/sub/1",
    ImgSrc:"https://image-comic.pstatic.net/webtoon/179704/thumbnail/thumbnail_IMAG21_3486178852879937589.jpg",
    title:"안나라수마나라",
    author:"하일권"
  },
  {
    id:2,
    link:"/sub/2",
    ImgSrc:"https://image-comic.pstatic.net/webtoon/812354/thumbnail/thumbnail_IMAG21_be53c95b-d800-4275-8869-e9b9a8413ce8.jpg",
    title:"육아일기",
    author:"자까"
  },
  {
    id:3,
    link:"/sub/3",
    ImgSrc:"https://image-comic.pstatic.net/webtoon/703845/thumbnail/thumbnail_IMAG21_4120902941892752226.JPEG",
    title:"죽음에 관하여",
    author:"혀노"
  },
  {
    id:4,
    link:"/sub/4",
    ImgSrc:"https://image-comic.pstatic.net/webtoon/20853/thumbnail/thumbnail_IMAG21_a715d0bd-fe55-4658-a573-669e0c0261f6.jpg",
    title:"마음의 소리",
    author:"조석"
  }
]

const Section01 = () => {
  return (
    <Section>
      <h3>우수 작품</h3>
      <ConWrap>
        {section.map((webtoon) => (
        <Link to={webtoon.link}>
          <Con>
            <ConImg>
              <img
                src={webtoon.ImgSrc}
                alt={webtoon.title}
              />
            </ConImg>
            <h4>{webtoon.title}</h4>
            <p>{webtoon.author}</p>
          </Con>
        </Link>

        ))}
      </ConWrap>
    </Section>
  );
};

export default Section01;
