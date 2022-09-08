import React, { useEffect, useState } from 'react';
import price from '../../assets/price.svg';
import './styled.css';
import round1 from '../../assets/round1.svg';
import round2 from '../../assets/round2.svg';
import round3 from '../../assets/round3.svg';
import round4 from '../../assets/round4.svg';
import round5 from '../../assets/round5.svg';
import round6 from '../../assets/round6.svg';

type Props = {
  index: number;
};

export function CompetitionInfo({ index }: Props) {
  const [image, setImage] = useState<string>();

  useEffect(() => {
    const images = [round1, round2, round3, round4, round5, round6];
    setImage(images[index - 1]);
  }, [index]);

  return (
    <div>
      <Paragraph
        heading='Hva må du gjøre?'
        content='Gjett hvilken tech-logo som gjemmer seg bak rutenettet. Hver runde har hver sin logo.'
      />

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p
          style={{
            fontSize: '1.3vw',
          }}
        >
          Send svaret ditt her 👉
        </p>
        <img
          src={image}
          alt='qr'
          style={{ marginLeft: '1.5vw', width: '25%' }}
        />
      </div>

      <Paragraph
        heading='Hvordan vinner du?'
        content='Jo fortere du gjetter, desto flere poeng får du. Vi summerer poengene dine og kårer vinnere etter alle rundene (kl.16:00).'
      />

      <img
        src={price}
        alt='price'
        style={{ width: '27vw', marginTop: '1.5vw' }}
      />
    </div>
  );
}

function Paragraph(props: any) {
  return (
    <div
      style={{
        width: '25vw',
        margin: '2.5vw 0 2.5vw',
      }}
    >
      <h4 className='question'>{props.heading}</h4>
      <p className='answer'>{props.content}</p>
    </div>
  );
}
