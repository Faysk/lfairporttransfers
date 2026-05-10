import { NextResponse } from 'next/server';

export const revalidate = 3600;

export async function GET() {
  const apiKey = process.env.GOOGLE_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return NextResponse.json([], {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=3600',
      },
    });
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;

  try {
    const res = await fetch(url, { next: { revalidate } });
    if (!res.ok) {
      return NextResponse.json([], { status: 200 });
    }

    const data = await res.json();
    const reviews = data.result?.reviews || [];

    return NextResponse.json(reviews.slice(0, 5), {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('Google Reviews API error:', error);
    return NextResponse.json([], { status: 200 });
  }
}
