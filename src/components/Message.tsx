import Image from 'next/image';
import { useEffect, useState } from 'react';

type MessageProps = {
    author: string;
    avatar: string
    text: string
    index: number
}

const Message = ({ text: initialText, author, avatar, index }: MessageProps) => {
    const [text, setText] = useState<string>(author === 'ai' ? '' : initialText);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setText(initialText.slice(0, text.length + 1));
        }, 20);

        return () => clearTimeout(timeout);
    }, [initialText, text.length]);

    const blinkingCursorClass = text.length === initialText.length
        ? 'cursor-not-allowed'
        : 'blinking-cursor';

    return (
        <div
            className={`flex flex-row bg-slate-${index % 2 === 0 ? '100' : '200'} p-4`}
        >
            <div className="w-12 relative">
                <Image
                    src={avatar}
                    alt=""
                    width={30}
                    height={30}
                />
            </div>
            <div className="w-full">
                <div className={blinkingCursorClass}>
                    {text}
                </div>
            </div>
        </div>
    );
};

export default Message;
