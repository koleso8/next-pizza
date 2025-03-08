import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET(req: string) {
  const query = 'Мик';

  const address = await axios.get(
    `https://api.dmsolutions.com.ua:2661/api/Cities?sRequest=${query}&sLang=ru_RU`
  );

  return NextResponse.json(address);
}
