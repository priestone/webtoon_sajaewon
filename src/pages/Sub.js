import { useParams } from "react-router-dom";
import styled from "styled-components";

const subPageData = [
  {
    id: 0,
    title: "삼봉이발소",
    author: "하일권",
    desc: `'너무 불공평해. 태어날 때부터 인생의 반이 결정되어 있잖아!' 외모지상주의에 상처받은 이들을 치유하는 감동의 웹툰 '목욕의 신', '3단합체 김창남' 하일권 작가의 데뷔작 <삼봉이발소>"`,
    imgUrl:
      "https://i.namu.wiki/i/01YcfJDn3yWI_K-1oMGOIjhale9q2tompHU78Xqj58jYuGcAyqgLUfncMN0Dpn-PKzD3CU2I6yzKoOvsPyGbjQ.webp",
    hashtag01: "#드라마",
    hashtag02: "#감성드라마",
    hashtag03: "#완결드라마",
    more01: `https://image-comic.pstatic.net/webtoon/179704/thumbnail/thumbnail_IMAG21_3486178852879937589.jpg`,
    more02: `https://image-comic.pstatic.net/webtoon/517773/thumbnail/thumbnail_IMAG21_3977016233125099056.jpg`,
    more03: `https://image-comic.pstatic.net/webtoon/674209/thumbnail/thumbnail_IMAG21_3689681082105750067.jpg`,
  },
  {
    id: 1,
    title: "안나라수마나라",
    author: "하일권",
    desc: `따뜻한 감성의 하일권 작가 2010 작품. 철없는 마술사를 만난 한 소녀의 성장 드라마. 당신, 마술을 믿으시나요?`,
    imgUrl:
      "https://image-comic.pstatic.net/webtoon/179704/thumbnail/thumbnail_IMAG21_3486178852879937589.jpg",
    hashtag01: "#드라마",
    hashtag02: "#드라마&영화 원작웹툰",
    hashtag03: "#성장드라마",
    more01: `https://i.namu.wiki/i/01YcfJDn3yWI_K-1oMGOIjhale9q2tompHU78Xqj58jYuGcAyqgLUfncMN0Dpn-PKzD3CU2I6yzKoOvsPyGbjQ.webp`,
    more02: `https://image-comic.pstatic.net/webtoon/517773/thumbnail/thumbnail_IMAG21_3977016233125099056.jpg`,
    more03: `https://image-comic.pstatic.net/webtoon/674209/thumbnail/thumbnail_IMAG21_3689681082105750067.jpg`,
  },
  {
    id: 2,
    title: "육아일기",
    author: "자까",
    desc: `이젠 갠플이 아니라 팀플이다! 조별 과제와 차원이 다른 인생을 건 팀플이 시작된다. 1인가구에서 2인가구로 2인가구에서 3인 가구로 인생 난이도가 급격히 상승한 자까 작가의 일상 이야기`,
    imgUrl:
      "https://image-comic.pstatic.net/webtoon/812354/thumbnail/thumbnail_IMAG21_be53c95b-d800-4275-8869-e9b9a8413ce8.jpg",
    hashtag01: "#일상",
    hashtag02: "#공감",
    hashtag03: "#결혼생활",
    more01: `https://image-comic.pstatic.net/webtoon/679519/thumbnail/thumbnail_IMAG21_3559076483126814265.jpg`,
    more02: `https://image-comic.pstatic.net/webtoon/748105/thumbnail/thumbnail_IMAG21_87f84b6f-a211-4940-8684-f4b8731357eb.jpg`,
    more03: `https://image-comic.pstatic.net/webtoon/773419/thumbnail/thumbnail_IMAG21_7147323883558940978.jpg`,
  },
  {
    id: 3,
    title: "죽음에 관하여",
    author: "혀노",
    desc: `삶과 죽음의 경계선, 그 곳엔 누가 있을까? "가는 길에 심심한데 네 이야기나 한번 듣지"`,
    imgUrl:
      "https://image-comic.pstatic.net/webtoon/703845/thumbnail/thumbnail_IMAG21_4120902941892752226.JPEG",
    hashtag01: "#드라마",
    hashtag02: "#감성드라마",
    hashtag03: "#완결드라마",
    more01: `https://image-comic.pstatic.net/webtoon/737628/thumbnail/thumbnail_IMAG21_9e108875-36b5-4872-8ace-53a6e492376b.jpg`,
    more02: `https://image-comic.pstatic.net/webtoon/632341/thumbnail/thumbnail_IMAG21_3978993364777646179.jpg`,
    more03: `https://image-comic.pstatic.net/webtoon/578105/thumbnail/thumbnail_IMAG21_3545002742209733475.jpg`,
  },
  {
    id: 4,
    title: "마음의소리",
    author: "조석",
    desc: `솔직 담백 최강의 개그 만화 <마음의 소리> 날 가져요 엉엉`,
    imgUrl:
      "https://image-comic.pstatic.net/webtoon/20853/thumbnail/thumbnail_IMAG21_a715d0bd-fe55-4658-a573-669e0c0261f6.jpg",
    hashtag01: "#개그",
    hashtag02: "#명작",
    hashtag03: "#드라마&영화 원작웹툰",
    more01: `https://image-comic.pstatic.net/webtoon/697656/thumbnail/thumbnail_IMAG21_7306590557355194677.jpg`,
    more02: `https://image-comic.pstatic.net/webtoon/679544/thumbnail/thumbnail_IMAG21_4122029949915247460.jpg`,
    more03: `https://image-comic.pstatic.net/webtoon/733047/thumbnail/thumbnail_IMAG21_7076054841960129336.jpg`,
  },
];

const Wrap = styled.div`
  width: 1500px;
  height: 700px;
  display: flex;
  overflow: hidden;
  /* background-color: #bfa38a; */
`;

// const ConWrap = styled.div`
//   width: 40%;
//   padding: 30px 10px;
//   overflow: hidden;
// `;

const ConImg = styled.div`
  width: 600px;
  overflow: hidden;
  padding: 34px;
  img {
    width: 100%;
  }
`;

const TextWrap = styled.div`
  padding: 30px 10px;
  width: 600px;
  position: relative;
  border-left: 2px solid black;

  h1 {
    font-size: 30px;
    font-weight: 900;
  }
  h2 {
    font-size: 24px;
    font-weight: 900;
    margin: 50px 0;
  }
  p {
    font-size: 18px;
    margin-bottom: 20px;
  }
  span {
    font-size: 14px;
    font-weight: 900;
    background-color: #8c8988;
    border-radius: 4px;
    margin-right: 10px;
    color: #1d1d1d;
  }
`;

const MoreWrap = styled.div`
  position: absolute;
  right: -10px;
  bottom: 0;
  width: 100%;
  h3 {
    font-size: 20px;
    font-weight: 900;
  }
`;

const MoreCon = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  img {
    width: 200px;
    overflow: hidden;
    margin-right: 10px;
  }
`;

const Sub = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <Wrap>
      <ConImg>
        <img src={subPageData[id].imgUrl} alt={subPageData[id].title} />
      </ConImg>
      <TextWrap>
        <h1>{subPageData[id].title}</h1>
        <h2>{subPageData[id].author}</h2>
        <p>{subPageData[id].desc}</p>
        <span>{subPageData[id].hashtag01}</span>
        <span>{subPageData[id].hashtag02}</span>
        <span>{subPageData[id].hashtag03}</span>
        <MoreWrap>
          <h3>"{subPageData[id].author}" 작가의 다른 작품들은요..</h3>
          <MoreCon>
            <img src={subPageData[id].more01} alt="추천작01" />
            <img src={subPageData[id].more02} alt="추천작02" />
            <img src={subPageData[id].more03} alt="추천작03" />
          </MoreCon>
        </MoreWrap>
      </TextWrap>
    </Wrap>
  );
};

export default Sub;
