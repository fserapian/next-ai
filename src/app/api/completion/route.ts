import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI();

export async function POST(request: Request): Promise<NextResponse> {
    try {
        const { prompt } = await request.json();

        if (!prompt || typeof prompt !== 'string') {
            return NextResponse.json(
                { error: { message: 'Invalid or missing prompt in the request body' } },
                { status: 400 }
            );
        }

        const completion = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [
                { role: 'system', content: 'You are a helpful assistant.' },
                { role: 'user', content: prompt },
            ],
        });

        return NextResponse.json({ completion }, { status: 200 });
    } catch (error) {
        console.error('Error processing the request:', error);

        return NextResponse.json(
            { error: { message: 'Internal Server Error' } },
            { status: 500 }
        );
    }
}