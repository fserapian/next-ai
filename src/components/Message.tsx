import Image from 'next/image';

type MessageProps = {
    avatar: string
    text: string
    index: number
}

const Message = ({ text, avatar, index }: MessageProps) => {
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
