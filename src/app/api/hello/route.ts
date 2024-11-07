import { NextResponse } from 'next/server';

type ResponseType = {
    name: string
}

export async function GET(): Promise<NextResponse<ResponseType>> {
    return NextResponse.json({ name: 'Fadi Serapian!!!' }, { status: 200 });
}
