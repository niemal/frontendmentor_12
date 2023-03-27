import styled from "styled-components";
import { Container } from "../WhyChooseUs";
import ShinyButton from "../ShinyButton";
import { QUERIES } from "../constants";
import ClickableWrapper from "../ClickableWrapper";

const Wrapper = styled.footer`
  min-height: 250px;
  width: 100%;
  max-width: 100%;
  background-color: var(--color-dark-blue);
  padding: 12px;
`;

const MyContainer = styled(Container)`
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 100%;

  @media ${QUERIES.exclusiveWidth1} {
    justify-content: center;
    gap: 60px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding: 32px;
    width: 100%;
    height: 100%;
  }
`;

const LogoAndSocialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;

  @media ${QUERIES.phoneAndSmaller} {
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 32px;
  }
`;

const LogoWrapper = styled.div`
  width: 180px;
  height: 20px;
`;

const Logo = styled.img`
  object-fit: cover;
  width: 100%;
`;

const SocialWrapper = styled.nav`
  display: flex;
  gap: 14px;
  align-items: baseline;
`;

const SocialLink = styled.a`
  text-decoration: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;

  &:focus {
    outline: 4px solid var(--color-lime-green);
    outline-offset: 8px;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  padding-left: 120px;
  gap: 200px;
  margin-right: auto;
  flex-wrap: wrap;

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: center;
    width: 100%;
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 0px;
    gap: 16px;
    flex-direction: column;
    align-items: center;
    width: 100%;
    text-align: center;
  }
`;

const LinkWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Link = styled.a`
  text-decoration: none;
  color: var(--color-white);
  font-weight: var(--font-weight-regular);
  border-radius: 8px;
  transition: all 0.3s ease-in-out;

  &:focus {
    outline: 2px solid var(--color-lime-green);
    outline-offset: 4px;
  }
`;

const CopyrightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 32px;

  @media ${QUERIES.exclusiveWidth1} {
    align-items: center;
  }
`;

const Copyright = styled.span`
  font-weight: var(--font-weight-regular);
  color: var(--color-gray-blue);
`;

function Footer() {
  return (
    <Wrapper>
      <MyContainer>
        <LogoAndSocialWrapper>
          <LogoWrapper>
            <Logo
              src={"/frontendmentor_12/logo_footer.svg"}
              alt={"footer logo image button"}
            />
          </LogoWrapper>

          <SocialWrapper aria-label={"social menu navigation"}>
            <ClickableWrapper>
              <SocialLink href={"/"}>
                <Logo
                  src={"/frontendmentor_12/icon-facebook.svg"}
                  alt={"facebook link image button"}
                />
              </SocialLink>
            </ClickableWrapper>
            <ClickableWrapper>
              <SocialLink href={"/"}>
                <Logo
                  src={"/frontendmentor_12/icon-youtube.svg"}
                  alt={"youtube link image button"}
                />
              </SocialLink>
            </ClickableWrapper>
            <ClickableWrapper>
              <SocialLink href={"/"}>
                <Logo
                  src={"/frontendmentor_12/icon-twitter.svg"}
                  alt={"twitter link image button"}
                />
              </SocialLink>
            </ClickableWrapper>
            <ClickableWrapper>
              <SocialLink href={"/"}>
                <Logo
                  src={"/frontendmentor_12/icon-pinterest.svg"}
                  alt={"pinterest link image button"}
                />
              </SocialLink>
            </ClickableWrapper>
            <ClickableWrapper>
              <SocialLink href={"/"}>
                <Logo
                  src={"/frontendmentor_12/icon-instagram.svg"}
                  alt={"instagram link image button"}
                />
              </SocialLink>
            </ClickableWrapper>
          </SocialWrapper>
        </LogoAndSocialWrapper>

        <LinksWrapper aria-label={"Footer site links menu #1"}>
          <LinkWrapper>
            <ClickableWrapper>
              <Link href={"/"}>About Us</Link>
            </ClickableWrapper>
            <ClickableWrapper>
              <Link href={"/"}>Contact</Link>
            </ClickableWrapper>
            <ClickableWrapper>
              <Link href={"/"}>Blog</Link>
            </ClickableWrapper>
          </LinkWrapper>

          <LinkWrapper aria-label={"Footer site links menu #2"}>
            <ClickableWrapper>
              <Link href={"/"}>Careers</Link>
            </ClickableWrapper>
            <ClickableWrapper>
              <Link href={"/"}>Support</Link>
            </ClickableWrapper>
            <ClickableWrapper>
              <Link href={"/"}>Privacy Policy</Link>
            </ClickableWrapper>
          </LinkWrapper>
        </LinksWrapper>

        <CopyrightWrapper>
          <ShinyButton style={{ width: "max-content" }}>
            Request Invite
          </ShinyButton>
          <Copyright>&copy; Easeybank. All Rights Reserved</Copyright>
        </CopyrightWrapper>
      </MyContainer>
    </Wrapper>
  );
}

export default Footer;
