import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await req.json();
  } catch (error) {
    console.log('[CART_PATCH] SErver error', error);
    return NextResponse.json(
      { message: 'Не вдалося оновити кошик' },
      { status: 500 }
    );
  }
}
