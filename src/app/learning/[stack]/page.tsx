'use client';

import Message from '@/components/Message';
import stacks from '@/data/stacks.json';
import Prompt from '@/components/Prompt';
import Header from '@/components/Header';
import { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface MessageInterface {
    id: string;
    author: 'human' | 'ai';
    avatar: string;
    text: string;
}

const createMessage = (
    author: 'human' | 'ai',
    text: string,
    avatar: string,
): MessageInterface => ({
    id: uuidv4(),
    author,
    avatar,
    text,
});

const LearningStackPage = ({ params }: { params: { stack: string } }) => {
    const [messages, setMessages] = useState<MessageInterface[]>([]);
    const chatRef = useRef<HTMLDivElement | null>(null);

    const stackKey = params.stack;

    const stackObj = stacks[stackKey as keyof typeof stacks];

    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTo(0, chatRef.current.scrollHeight);
        }
    }, [messages]);

    const handleSubmit = async (prompt: string) => {
        if (!prompt.trim()) return;

        const newMessage = createMessage('human', prompt, '/images/profile.jpg');

        setMessages((prev) => [...prev, newMessage]);

        try {
            const response = await fetch('/api/completion', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt }),
            });

            const json = await response.json();

            if (!response.ok) {
                console.error(json?.error?.message);
                return;
            }

            const text = json.completion.choices[0].message.content || 'No response';

            const aiMessage = createMessage('ai', text, '/images/logo-open-ai.png');

            setMessages((prev) => [...prev, aiMessage]);
        } catch (error) {
            console.error('Error:', error);
            alert('Something went wrong. Please try again.');
        }
    };

    if (!stackObj) {
        return <div>Stack not found.</div>; // Handle invalid stack key
    }

    return (
        <div className="h-full flex flex-col">
            <Header logo={stackObj.logo} info={stackObj.info} />
            <hr className="my-8" />
            <div className="chat h-full flex flex-col overflow-auto" ref={chatRef}>
                {messages.map(({ id, author, avatar, text }: MessageInterface, index: number) => (
                    <Message key={id} author={author} avatar={avatar} text={text} index={index} />
                ))}
            </div>
            <div className="prompt flex mb-8">
                <Prompt onSubmit={handleSubmit} />
            </div>
        </div>
    );
};

export default LearningStackPage;
