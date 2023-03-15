import styled, { keyframes, css } from "styled-components";
import { Container } from "../WhyChooseUs";
import { hoverSupported } from "../hoverSupported";
import { QUERIES } from "../constants";
import { useInView } from "react-intersection-observer";

const Wrapper = styled.div`
  background: linear-gradient(
    180deg,
    var(--color-white) 20%,
    var(--color-very-light-gray) 100%
  );
  width: 100%;
  position: relative;
  min-height: 700px;
  max-width: 100%;
  overflow: hidden;
`;

const Title = styled.h1`
  color: var(--color-dark-blue);
  font-weight: var(--font-weight-regular);
  font-size: ${42 / 16}rem;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${32 / 16}rem;
  }
`;

const ArticlesWrapper = styled.div`
  display: flex;
  gap: 24px;
  justify-content: space-between;
  flex-wrap: wrap;

  @media ${QUERIES.phoneAndSmaller} {
    justify-content: center;
  }
`;

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-120%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`;

const articlesAnim = css`
  animation: 0.45s ${slideIn} ease-in forwards;
`;

const Article = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  width: 320px;

  opacity: 0;
  ${(p) => (p.inView ? articlesAnim : "")}
  animation-delay: ${(p) => p.delay}s;

  ${hoverSupported(css`
    &:hover {
      box-shadow: 2px 3px 12px var(--color-gray-blue);
      transform: translateY(-6px);
    }
  `)}
`;

const Image = styled.img`
  object-fit: cover;
  width: 320px;
  height: 200px;
  border-radius: 8px 8px 0px 0px;
`;

const ContentWrapper = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 0px 0px 8px 8px;
  background-color: var(--color-white);

  @media ${QUERIES.phoneAndSmaller} {
    padding: 24px;
  }
`;

const Author = styled.span`
  color: var(--color-gray-blue);
  font-size: ${14 / 16}rem;
  font-weight: var(--font-weight-light);
`;

const ArticleTitle = styled.span`
  font-size: ${20 / 16}rem;
  line-height: ${24 / 16}rem;
  font-weight: var(--font-weight-regular);
  opacity: 0.7;
  color: var(-color-dark-blue);
  max-width: 250px;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${15 / 16}rem;
    line-height: ${18 / 16}rem;
  }
`;

const ArticleDesc = styled.span`
  color: var(--color-gray-blue);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  max-width: 300px;
  font-size: ${16 / 16}rem;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${14 / 16}rem;
    -webkit-line-clamp: 3;
  }
`;

function Articles() {
  const [articlesRef, inViewArticles] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <Wrapper>
      <Container>
        <Title>Latest Articles</Title>

        <ArticlesWrapper ref={articlesRef}>
          <Article inView={inViewArticles} delay={0}>
            <Image
              src={"/frontendmentor_12/image-currency.jpg"}
              alt={"image currency"}
            />
            <ContentWrapper>
              <Author>By Claire Robinson</Author>
              <ArticleTitle>
                Receive money in any currency with no fees
              </ArticleTitle>
              <ArticleDesc>
                The world is getting smaller and we're becoming more mobile. So
                why should you be forced to only receive money in a single
                exchange when you can extra word it up.
              </ArticleDesc>
            </ContentWrapper>
          </Article>
          <Article inView={inViewArticles} delay={0.3}>
            <Image
              src={"/frontendmentor_12/image-restaurant.jpg"}
              alt={"image restaurant"}
            />
            <ContentWrapper>
              <Author>By Wilson Hutton</Author>
              <ArticleTitle>
                Treat yourself without worrying about money
              </ArticleTitle>
              <ArticleDesc>
                Our simple budgeting feature allows you to separate out your
                spending and set realistic limits each month. That means you go
                the extra mile.
              </ArticleDesc>
            </ContentWrapper>
          </Article>
          <Article inView={inViewArticles} delay={1.2}>
            <Image
              src={"/frontendmentor_12/image-plane.jpg"}
              alt={"image plane"}
            />
            <ContentWrapper>
              <Author>By Wilson Hutton</Author>
              <ArticleTitle>
                Take your Easybank card wherever you go
              </ArticleTitle>
              <ArticleDesc>
                We want you to enjoy your travels. This is why we don't charge
                any fees on purchases while you're abroad. We'll even show you
                what it means to fly.
              </ArticleDesc>
            </ContentWrapper>
          </Article>
          <Article inView={inViewArticles} delay={2}>
            <Image
              src={"/frontendmentor_12/image-confetti.jpg"}
              alt={"image plane"}
            />
            <ContentWrapper>
              <Author>By Claire Robinson</Author>
              <ArticleTitle>
                Our invite-only Beta accounts are now live!
              </ArticleTitle>
              <ArticleDesc>
                After a lot of hard work by the whole team, we're excited to
                launch our closed beta. It's easy to request an ivnite through
                the site and through the roof.
              </ArticleDesc>
            </ContentWrapper>
          </Article>
        </ArticlesWrapper>
      </Container>
    </Wrapper>
  );
}

export default Articles;
