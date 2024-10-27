import { Link } from "react-router-dom";
import styled from "styled-components";
import TitleImg from "./imgs/TitleImg.png";

const Section = styled.div`
  /* height: 300px; */
  padding: 30px;
  /* background-color: #bfa38a; */
  border-bottom: 1.5px solid #444;
  .title {
    /* font-family: "궁서"; */
    /* font-size: 24px;
    font-weight: 900; */
    margin-left: 24px;
    width: 14%;
  }
`;

const ConWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Con = styled.div`
  width: 260px;
  margin-top: 20px;
  /* border-radius: 10px; */
  /* background-color: lightgray; */
  color: #1d1d1d;
  img {
    width: 100%;
  }
  h4 {
    font-size: 18px;
    font-weight: 900;
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
  /* border: 1px solid #888; */
  /* border-radius: 10px; */
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
`;

const section = [
  {
    id: 0,
    link: "/sub/0",
    ImgSrc:
      "https://i.namu.wiki/i/01YcfJDn3yWI_K-1oMGOIjhale9q2tompHU78Xqj58jYuGcAyqgLUfncMN0Dpn-PKzD3CU2I6yzKoOvsPyGbjQ.webp",
    title: "삼봉이발소",
    author: "하일권",
  },
  {
    id: 1,
    link: "/sub/1",
    ImgSrc:
      "https://image-comic.pstatic.net/webtoon/179704/thumbnail/thumbnail_IMAG21_3486178852879937589.jpg",
    title: "안나라수마나라",
    author: "하일권",
  },
  {
    id: 2,
    link: "/sub/2",
    ImgSrc:
      "https://image-comic.pstatic.net/webtoon/812354/thumbnail/thumbnail_IMAG21_be53c95b-d800-4275-8869-e9b9a8413ce8.jpg",
    title: "육아일기",
    author: "자까",
  },
  {
    id: 3,
    link: "/sub/3",
    ImgSrc:
      "https://image-comic.pstatic.net/webtoon/703845/thumbnail/thumbnail_IMAG21_4120902941892752226.JPEG",
    title: "죽음에 관하여",
    author: "혀노",
  },
  {
    id: 4,
    link: "/sub/4",
    ImgSrc:
      "https://image-comic.pstatic.net/webtoon/20853/thumbnail/thumbnail_IMAG21_a715d0bd-fe55-4658-a573-669e0c0261f6.jpg",
    title: "마음의 소리",
    author: "조석",
  },
];

const Section01 = () => {
  return (
    <Section>
      <img src={TitleImg} alt="우수작품" className="title" />
      <ConWrap>
        {section.map((webtoon) => (
          <Link to={webtoon.link}>
            <Con>
              <ConImg>
                <img src={webtoon.ImgSrc} alt={webtoon.title} />
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
