import { NextResponse } from 'next/server';

export async function POST(request: Request): Promise<NextResponse> {
    try {
        const body = await request.json();
        console.log('body', body);
        console.log('prompt', body.prompt);

        const result = 'Message from ChatGPT';

        await new Promise((res) => setTimeout(res, 1000));

        return NextResponse.json({ result }, { status: 200 });
    } catch (error) {
        console.error('Error parsing the request body:', error);

        return NextResponse.json({ error: { message: 'Error processing the request' } }, { status: 400 });
    }
}
