import styled, { keyframes, css } from "styled-components";
import { QUERIES } from "../constants";
import { useInView } from "react-intersection-observer";

const Wrapper = styled.section`
  position: relative;
  min-height: 100%;
  background-color: var(--color-very-light-gray);
  width: 100%;
  overflow: hidden;
`;

export const Container = styled.div`
  width: clamp(1400px, 9vw, 1450px);
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 0 auto;
  padding: 80px 12px;
  position: relative;
  max-width: 100%;

  @media ${QUERIES.phoneAndSmaller} {
    align-items: center;
    justify-content: center;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 700px;

  @media ${QUERIES.phoneAndSmaller} {
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

const Title = styled.h1`
  color: var(--color-dark-blue);
  font-weight: var(--font-weight-regular);
  font-size: ${36 / 16}rem;

  @media ${QUERIES.phoneAndSmaller} {
    width: 100%;
    font-size: ${36 / 16}rem;
    line-height: ${42 / 16}rem;
  }
`;

const Desc = styled.span`
  font-weight: var(--font-weight-regular);
  color: var(--color-gray-blue);

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${16 / 16}rem;
    line-height: ${28 / 16}rem;
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;

  @media ${QUERIES.phoneAndSmaller} {
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 32px;
    margin-top: 32px;
  }
`;

const showCard = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
    box-shadow: 2px 4px 16px var(--color-dark-blue);
  }
  100% {
    opacity: 1;
    transform: scale(1);
    box-shadow: none;
  }
`;

const cardAnim = css`
  animation: 0.55s ${showCard} ease-in forwards;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media ${QUERIES.phoneAndSmaller} {
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  opacity: 0;
  ${(p) => (p.inView ? cardAnim : "")}
  animation-delay: ${(p) => p.delay}s;
`;

const CardImage = styled.img`
  object-fit: cover;
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const CardTitle = styled.h2`
  font-size: ${26 / 16}rem;
  font-weight: var(--font-weight-light);
`;

const CardDesc = styled(Desc)`
  max-width: 298px;

  @media ${QUERIES.phoneAndSmaller} {
    max-width: 90%;
    font-size: ${15 / 16}rem;
  }
`;

function WhyChooseUs() {
  const [cardsRef, inViewCards] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <Wrapper aria-label={"Why choose us"}>
      <Container>
        <TextWrapper>
          <Title>Why choose Easeybank?</Title>
          <Desc>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </Desc>
        </TextWrapper>

        <CardsWrapper ref={cardsRef}>
          <Card inView={inViewCards} delay={0}>
            <CardImage
              src={"/frontendmentor_12/icon-online.svg"}
              alt={"online banking image"}
            />
            <CardTitle>Online Banking</CardTitle>
            <CardDesc>
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </CardDesc>
          </Card>
          <Card inView={inViewCards} delay={0.6}>
            <CardImage
              src={"/frontendmentor_12/icon-budgeting.svg"}
              alt={"simple budgeting image"}
            />
            <CardTitle>Simple Budgeting</CardTitle>
            <CardDesc>
              See exactly where your money goes each month. Receive
              notifications when you're close to hitting your limits.
            </CardDesc>
          </Card>
          <Card inView={inViewCards} delay={1.4}>
            <CardImage
              src={"/frontendmentor_12/icon-onboarding.svg"}
              alt={"fast onboarding image"}
            />
            <CardTitle>Fast Onboarding</CardTitle>
            <CardDesc>
              We don't do branches. Open your account in minutes online and
              start taking control of your finances right away.
            </CardDesc>
          </Card>
          <Card inView={inViewCards} delay={2.2}>
            <CardImage
              src={"/frontendmentor_12/icon-api.svg"}
              alt={"open api image"}
            />
            <CardTitle>Open API</CardTitle>
            <CardDesc>
              Manage your savings, investments, pension, and much more from one
              account. Tracking your money has never been easier.
            </CardDesc>
          </Card>
        </CardsWrapper>
      </Container>
    </Wrapper>
  );
}

export default WhyChooseUs;
