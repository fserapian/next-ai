'use client';

import Message from '@/components/Message';
import stacks from '@/data/stacks.json';
import Prompt from '@/components/Prompt';
import Header from '@/components/Header';
import { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface MessageInterface {
    id: string;
    author: string;
    avatar: string;
    text: string;
}

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

        const newMessage = {
            id: uuidv4(),
            author: 'human',
            avatar: '/images/profile.jpg',
            text: prompt,
        };

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

            const aiMessage = {
                id: uuidv4(),
                author: 'ai',
                avatar: '/images/logo-open-ai.png',
                text: json.result,
            };

            setMessages((prev) => [...prev, aiMessage]);
        } catch (error) {
            console.error('Error:', error);
            alert('Something went wrong. Please try again.');
        }
    };

    return (
        <div className="h-full flex flex-col">
            <Header logo={stackObj.logo} info={stackObj.info} />
            <hr className="my-8" />
            <div className="chat h-full flex flex-col overflow-auto" ref={chatRef}>
                {messages.map(({ id, avatar, text }: MessageInterface, index: number) => (
                    <Message key={id} avatar={avatar} text={text} index={index} />
                ))}
            </div>
            <div className="prompt flex mb-8">
                <Prompt onSubmit={handleSubmit} />
            </div>
        </div>
    );
};

export default LearningStackPage;
