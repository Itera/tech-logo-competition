import { useState } from 'react';
import styled from 'styled-components';

type RoundProp = {
  text: string;
};

export function Round({ text }: RoundProp) {
  const [clicked, setClicked] = useState(false);

  const handleClick = (event: React.SyntheticEvent) => {
    setClicked(!clicked);
  };

  return (
    <Text clicked={clicked} onClick={handleClick}>
      {text}
    </Text>
  );
}

type TextProp = {
  clicked: boolean;
};

const Text = styled.p<TextProp>`
  text-decoration: ${(props) => (props.clicked ? 'line-through' : '')};
  margin-top: 1vw;
  font-size: 1vw;
  cursor: pointer;
`;
