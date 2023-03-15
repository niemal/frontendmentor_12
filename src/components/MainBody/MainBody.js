import styled from "styled-components";
import NavBar from "../NavBar";
import MainHero from "../MainHero";
import WhyChooseUs from "../WhyChooseUs";
import Articles from "../Articles";
import Footer from "../Footer";

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  overflow: hidden;
`;

function MainBody() {
  return (
    <Wrapper role={"main"}>
      <NavBar />
      <MainHero />
      <WhyChooseUs />
      <Articles />
      <Footer />
    </Wrapper>
  );
}

export default MainBody;
