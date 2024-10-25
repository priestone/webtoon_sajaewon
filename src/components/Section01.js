import { Link } from "react-router-dom";
import styled from "styled-components";

const Section = styled.div`
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
  height: 400px;
  margin-top: 20px;
  border-radius: 10px;
  background-color: lightgray;
  overflow: hidden;
  color: #1d1d1d;
  img {
    width: 100%;
  }
  h4 {
    font-size: 18px;
    text-decoration: none;
  }
  p {
    font-size: 14px;
  }
`;

const Section01 = () => {
  return (
    <Section>
      <h3>우수 작품</h3>
      <ConWrap>
        <Link to="/sub/0">
          <Con>
            <img
              src="https://image-comic.pstatic.net/webtoon/641253/thumbnail/thumbnail_IMAG21_01672165-03c8-44b1-ba0e-ef82c9cfcd10.jpg"
              alt="콘텐츠이미지"
            />
            <h4>작품1</h4>
            <p>설명1</p>
          </Con>
        </Link>
        <Link to="/sub/1">
          <Con>
            <img
              src="https://image-comic.pstatic.net/webtoon/641253/thumbnail/thumbnail_IMAG21_01672165-03c8-44b1-ba0e-ef82c9cfcd10.jpg"
              alt="콘텐츠이미지"
            />
            <h4>작품1</h4>
            <p>설명1</p>
          </Con>
        </Link>
        <Link to="/sub/2">
          <Con>
            <img
              src="https://image-comic.pstatic.net/webtoon/641253/thumbnail/thumbnail_IMAG21_01672165-03c8-44b1-ba0e-ef82c9cfcd10.jpg"
              alt="콘텐츠이미지"
            />
            <h4>작품1</h4>
            <p>설명1</p>
          </Con>
        </Link>
        <Link to="/sub/3">
          <Con>
            <img
              src="https://image-comic.pstatic.net/webtoon/641253/thumbnail/thumbnail_IMAG21_01672165-03c8-44b1-ba0e-ef82c9cfcd10.jpg"
              alt="콘텐츠이미지"
            />
            <h4>작품1</h4>
            <p>설명1</p>
          </Con>
        </Link>
        <Link to="/sub/4">
          <Con>
            <img
              src="https://image-comic.pstatic.net/webtoon/641253/thumbnail/thumbnail_IMAG21_01672165-03c8-44b1-ba0e-ef82c9cfcd10.jpg"
              alt="콘텐츠이미지"
            />
            <h4>작품1</h4>
            <p>설명1</p>
          </Con>
        </Link>
      </ConWrap>
    </Section>
  );
};

export default Section01;
