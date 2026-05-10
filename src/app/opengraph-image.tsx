import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'LF Airport Transfers private chauffeur service in London';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          color: '#f8f3e8',
          background:
            'linear-gradient(135deg, #070706 0%, #15130f 48%, #2b2416 100%)',
          fontFamily: 'Arial',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <div
              style={{
                width: 86,
                height: 86,
                border: '2px solid #d7b46a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#d7b46a',
                fontSize: 34,
                fontWeight: 700,
              }}
            >
              LF
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: 34, fontWeight: 700 }}>LF Airport Transfers</span>
              <span style={{ fontSize: 22, color: '#b7b0a4' }}>London private chauffeur service</span>
            </div>
          </div>
          <span style={{ color: '#d7b46a', fontSize: 24 }}>24/7</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <h1 style={{ margin: 0, maxWidth: 860, fontSize: 76, lineHeight: 1.02 }}>
            Private Chauffeur & Airport Transfers in London
          </h1>
          <p style={{ margin: 0, maxWidth: 760, fontSize: 30, color: '#d8d2c8' }}>
            Mercedes EQS, E-Class and V-Class transfers for Heathrow, Gatwick, London City,
            Luton and Stansted.
          </p>
        </div>

        <div style={{ display: 'flex', gap: 18, color: '#15130f' }}>
          {['Flight monitoring', 'Meet & greet', 'Executive Mercedes fleet'].map((item) => (
            <span
              key={item}
              style={{
                padding: '14px 22px',
                background: '#d7b46a',
                fontSize: 22,
                fontWeight: 700,
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    ),
    size,
  );
}

