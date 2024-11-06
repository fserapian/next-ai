'use client';

import Message from '@/components/Message';
import stacks from '@/data/stacks.json';
import Prompt from '@/components/Prompt';
import Header from '@/components/Header';
import { useState } from 'react';

export interface MessageInterface {
    id: string;
    author: string;
    avatar: string;
    text: string;
}

const LearningStackPage = ({ params }: { params: { stack: string } }) => {
    const [messages, setMessages] = useState<MessageInterface[]>([]);

    const stackKey = params.stack;

    const stackObj = stacks[stackKey as keyof typeof stacks];

    const handleSubmit = (inputPrompt: string) => {
        if (inputPrompt.trim().length === 0) return;

        setMessages((prev: MessageInterface[]) => {
            return [
                ...prev,
                {
                    id: new Date().toISOString(),
                    author: 'human',
                    avatar: '/images/profile.jpg',
                    text: inputPrompt,
                },
            ];
        });
    };

    return (
        <div className="h-full flex flex-col">
            <Header logo={stackObj.logo} info={stackObj.info} />
            <hr className="my-8" />
            <div className="chat h-full flex flex-col overflow-auto">
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
