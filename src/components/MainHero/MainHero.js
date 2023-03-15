import styled from "styled-components";
import { isMobile } from "react-device-detect";
import ShinyButton from "../ShinyButton/ShinyButton";
import { QUERIES } from "../constants";

const Wrapper = styled.div`
  min-height: 700px;
  background: linear-gradient(
    180deg,
    var(--color-very-light-gray) 40%,
    var(--color-white) 100%
  );
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
  z-index: 1;

  @media ${QUERIES.phoneAndSmaller} {
    flex-direction: column;
    flex-direction: column-reverse;
    min-height: 100%;
  }
`;

const Filler = styled.div`
  position: relative;
  width: 60%;

  @media ${QUERIES.phoneAndSmaller} {
    width: 100%;
  }
`;

const AbsoluteContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  margin-left: 12px;

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const FillerContainer = styled(AbsoluteContainer)`
  position: relative;
  display: none;

  @media ${QUERIES.phoneAndSmaller} {
    display: block;
    padding-top: 8px;
    padding-left: 8px;
    padding-right: 8px;
    padding-bottom: 120px;
    text-align: center;
    max-width: 350px;
    margin: 0 auto;
    min-height: 100%;
  }
`;

const TextContainer = styled.div`
  width: clamp(1400px, 9vw, 1450px);
  position: relative;

  @media ${QUERIES.phoneAndSmaller} {
    width: 100%;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 540px;

  @media ${QUERIES.phoneAndSmaller} {
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 36px;
  }
`;

const TextTitle = styled.h1`
  font-size: ${52 / 16}rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-dark-blue);
  line-height: ${60 / 16}rem;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${36 / 16}rem;
    line-height: ${42 / 16}rem;
    width: 100%;
  }
`;

const TextDesc = styled.span`
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-blue);
  width: 460px;

  @media ${QUERIES.phoneAndSmaller} {
    width: 100%;
    font-size: ${14 / 16}rem;
    margin-top: -12px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 700px;

  @media ${QUERIES.phoneAndSmaller} {
    height: 400px;
  }
`;

const BackgroundImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100vh;
  position: absolute;
  left: 200px;
  top: -260px;

  @media ${QUERIES.tabletAndSmaller} {
    height: 80vh;
    left: 200px;
    top: -160px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    left: 0px;
    top: -170px;
    height: 500px;
    width: 115%;
  }
`;

const PhoneImage = styled.img`
  position: absolute;
  right: -120px;
  top: -145px;
  width: 78%;
  object-fit: cover;

  @media ${QUERIES.tabletAndSmaller} {
    top: 0px;
    width: 90%;
  }

  @media ${QUERIES.phoneAndSmaller} {
    right: 0;
    top: -140px;
    width: 100%;
  }
`;

function MainHero() {
  return (
    <Wrapper>
      <AbsoluteContainer>
        <TextContainer>
          <TextWrapper>
            <TextTitle>Next generation digital banking</TextTitle>
            <TextDesc>
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </TextDesc>
            <ShinyButton style={{ width: "max-content" }}>
              Request invite
            </ShinyButton>
          </TextWrapper>
        </TextContainer>
      </AbsoluteContainer>
      <Filler>
        <FillerContainer>
          <TextWrapper>
            <TextTitle>Next generation digital banking</TextTitle>
            <TextDesc>
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </TextDesc>
            <ShinyButton style={{ width: "max-content" }}>
              Request invite
            </ShinyButton>
          </TextWrapper>
        </FillerContainer>
      </Filler>
      <ImageContainer>
        <BackgroundImage
          src={
            isMobile
              ? "/frontendmentor_12/bg-intro-mobile.svg"
              : "/frontendmentor_12/bg-intro-desktop.svg"
          }
          alt={"main hero background image"}
        />
        <PhoneImage
          src={"/frontendmentor_12/image-mockups.png"}
          alt={"main hero phone image"}
        />
      </ImageContainer>
    </Wrapper>
  );
}

export default MainHero;
