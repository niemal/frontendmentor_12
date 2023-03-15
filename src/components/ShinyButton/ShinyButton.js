import styled, { css } from "styled-components";
import { useState } from "react";
import { useInterval } from "../useInterval";
import { hoverSupported } from "../hoverSupported";

const Wrapper = styled.div`
  padding: 12px 36px;
  cursor: pointer;
  color: var(--color-white);
  font-weight: var(--font-weight-bold);
  border-radius: 24px;
  transition: all 0.3s ease-in-out;

  ${hoverSupported(css`
    &:hover {
      box-shadow: 0px 3px 9px var(--color-gray-blue);
      transform: translateY(-4px);
      color: var(--color-very-light-gray);
    }
  `)}
`;

function ShinyButton({ children, style }) {
  const [x, setX] = useState(20);
  const [xNeg, setXNeg] = useState(false);
  const [y, setY] = useState(90);
  const [yNeg, setYNeg] = useState(false);

  useInterval(() => {
    setY((y) => {
      if (yNeg) {
        if (y - 1 < 60) {
          setYNeg(false);
          return y + 1;
        }
        return y - 1;
      } else {
        if (y + 1 > 100) {
          setYNeg(true);
          return y - 1;
        }
        return y + 1;
      }
    });

    setX((x) => {
      if (xNeg) {
        if (x - 1 < 0) {
          setXNeg(false);
          return x + 1;
        }
        return x - 1;
      } else {
        if (x + 1 > 60) {
          setXNeg(true);
          return x - 1;
        }
        return x + 1;
      }
    });
  }, 40);

  return (
    <Wrapper
      style={{
        ...style,
        background: `linear-gradient(
      40deg,
      var(--color-lime-green) ${x}%,
      var(--color-bright-cyan) ${y}%
    )`,
      }}
    >
      {children}
    </Wrapper>
  );
}

export default ShinyButton;
