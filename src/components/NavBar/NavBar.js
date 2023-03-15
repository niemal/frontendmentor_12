import styled, { keyframes, css } from "styled-components";
import ShinyButton from "../ShinyButton";
import { QUERIES } from "../constants";
import { useState } from "react";
import { hoverSupported } from "../hoverSupported";

const Wrapper = styled.div`
  background-color: var(--color-white);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  padding-top: 0px;
  position: relative;
  z-index: 2;
`;

const InnerWrapper = styled.div`
  width: clamp(1400px, 9vw, 1450px);
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${QUERIES.phoneAndSmaller} {
    padding-right: 20px;
  }
`;

const LogoContainer = styled.div`
  position: relative;
  width: 180px;
  height: 60px;
  display: grid;
  place-content: center;
`;

const Logo = styled.img`
  object-fit: cover;
  width: 100%;
`;

const NavWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const NavEntry = styled.a`
  text-decoration: none;
  color: var(--color-gray-blue);
  font-weight: var(--font-weight-light);
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease-in-out;

  ${hoverSupported(css`
    &:hover {
      color: var(--color-dark-blue);
      border-color: var(--color-dark-blue);
    }
  `)}
`;

const ButtonContainer = styled.div`
  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const appearIcon = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const BurgerIcon = styled.img`
  object-fit: cover;
  width: 40px;
  height: 25px;
  display: none;
  padding: 4px;

  @media ${QUERIES.phoneAndSmaller} {
    display: block;
    cursor: pointer;
    opacity: 0;
    animation: 0.25s ${appearIcon} ease-in-out forwards;
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`;

const MenuWrapper = styled.div`
  position: fixed;
  top: 72px;
  left: 0;
  min-height: 100%;
  width: 100%;
  background: linear-gradient(
    180deg,
    var(--color-dark-blue-fade) 40%,
    var(--color-white-fade) 100%
  );
  z-index: 88;
  animation: 0.3s ${fadeIn} ease-in forwards;
`;

const squeezeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const MenuCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-white);
  padding: 32px;
  gap: 32px;
  border-radius: 8px;
  width: 90%;
  margin: 0 auto;
  margin-top: 24px;
  overflow: hidden;

  animation: 0.3s ${squeezeIn} ease-in forwards;
  animation-delay: 0.3s;
  opacity: 0;
`;

const MenuEntry = styled.a`
  text-decoration: none;
  color: var(--color-dark-blue);
  font-weight: var(--font-weight-regular);
`;

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <InnerWrapper>
        <LogoContainer>
          <Logo src={"/frontendmentor_12/logo.svg"} alt={"logo image"} />
        </LogoContainer>

        <NavWrapper>
          <NavEntry href={"/"}>Home</NavEntry>
          <NavEntry href={"/"}>About</NavEntry>
          <NavEntry href={"/"}>Contact</NavEntry>
          <NavEntry href={"/"}>Blog</NavEntry>
          <NavEntry href={"/"}>Careers</NavEntry>
        </NavWrapper>

        <ButtonContainer>
          <ShinyButton>Request invite</ShinyButton>
        </ButtonContainer>

        {!open ? (
          <BurgerIcon
            src={"/frontendmentor_12/icon-hamburger.svg"}
            alt={"burger menu icon"}
            onClick={() => {
              setOpen(true);
            }}
          />
        ) : (
          ""
        )}
        {open ? (
          <BurgerIcon
            src={"/frontendmentor_12/icon-close.svg"}
            alt={"close menu icon"}
            onClick={() => {
              setOpen(false);
            }}
          />
        ) : (
          ""
        )}
        {open ? (
          <MenuWrapper>
            <MenuCard>
              <MenuEntry href={"/"}>Home</MenuEntry>
              <MenuEntry href={"/"}>About</MenuEntry>
              <MenuEntry href={"/"}>Contact</MenuEntry>
              <MenuEntry href={"/"}>Blog</MenuEntry>
              <MenuEntry href={"/"}>Careers</MenuEntry>
            </MenuCard>
          </MenuWrapper>
        ) : (
          ""
        )}
      </InnerWrapper>
    </Wrapper>
  );
}

export default NavBar;
