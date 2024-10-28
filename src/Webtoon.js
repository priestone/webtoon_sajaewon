import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import PageNotFound from "./pages/PageNotFound";
import Sub from "./pages/Sub";
import styled from "styled-components";
import Section01 from "./components/Section01";

const Wrap = styled.div`
  max-width: 1500px;
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  border: 1px solid black;
  /* background-color: #dbdbdb; */
  box-shadow: inset 0px 0px 200px rgba(0, 0, 0, 0.3);
  background-image: url(https://img.freepik.com/premium-photo/old-grey-grainy-paper-background-texture_271293-3.jpg?w=1380);
`;

const Webtoon = () => {
  return (
    <Wrap>
      <HashRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Section01 />}></Route>
          <Route path="/sub/:id" element={<Sub />}></Route>
          <Route path="/*" element={<PageNotFound />}></Route>
        </Routes>
      </HashRouter>
    </Wrap>
  );
};

export default Webtoon;
