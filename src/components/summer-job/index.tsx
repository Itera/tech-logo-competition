import styled from 'styled-components';
import QRCard from './QRCard';
import itera from '../../assets/itera.svg';
import tester from '../../assets/tester2022.svg';
import utvikler from '../../assets/utvikler2022.png';

export function SummerJob() {
  return (
    <Wrapper>
      <Header>Klar for tidenes sommerjobb?</Header>
      <Deadline>Søknadsfrist er 1. oktober</Deadline>
      <Ingress>
        Som student hos oss jobber du tverrfaglig på et helt reelt prosjekt ute
        hos en av kundene våre.
      </Ingress>

      <QRCard workTitle={'Utvikler'} qr={utvikler} />
      <QRCard workTitle={'Tester'} qr={tester} />

      <img src={itera} alt='itera' style={{ width: '25vw' }} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #ff4b34;
  padding: 4vw 2vw 3vw;
`;

const Header = styled.h1`
  font-family: 'Neue Machina';
  text-decoration-line: underline;
  margin-bottom: 2vw;
  color: white;
  font-size: 2.9vw;
`;

const Ingress = styled.p`
  font-family: 'IBM Plex Sans';
  font-size: 1.3vw;
  color: white;
`;

const Deadline = styled.p`
  font-family: 'IBM Plex Sans';
  color: white;
  font-size: 1.3vw;
  font-weight: bold;
  margin-bottom: 2vw;
`;
