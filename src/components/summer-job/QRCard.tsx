import styled from 'styled-components';

export default function QRCard(props: any) {
  return (
    <Wrapper>
      <img src={props.qr} alt='qr' style={{ width: '6.5vw' }} />
      <h1 style={{ marginLeft: '2.5vw' }}>{props.workTitle}</h1>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Neue Machina';
  font-weight: bold;
  color: white;
  font-size: 1.1vw;

  margin: 4.4vw 1vw 4.4vw;
`;
