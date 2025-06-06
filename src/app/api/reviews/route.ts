// src/app/api/reviews/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.GOOGLE_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return NextResponse.json({ error: 'API key or place ID missing' }, { status: 500 });
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    const reviews = data.result?.reviews || [];

    return NextResponse.json(reviews.slice(0, 5)); // Limita a 5 reviews
  } catch (error) {
    console.error('Google Reviews API error:', error);
    return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 500 });
  }
}
