import Image from 'next/image';
import { useEffect, useState } from 'react';

type MessageProps = {
    avatar: string
    text: string
    index: number
}

const Message = ({ text: initialText, avatar, index }: MessageProps) => {
    const [text, setText] = useState<string>('');

    useEffect(() => {
        const timeout = setTimeout(() => {
            setText(initialText.slice(0, text.length + 1));
        }, 20);

        return () => clearTimeout(timeout);
    }, [initialText, text.length]);

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
                {text}
            </div>
        </div>
    );
};

export default Message;
