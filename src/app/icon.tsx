import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = {
  width: 512,
  height: 512,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#070706',
          color: '#d7b46a',
          border: '28px solid #d7b46a',
          fontSize: 168,
          fontWeight: 700,
          fontFamily: 'Arial',
        }}
      >
        LF
      </div>
    ),
    size,
  );
}

