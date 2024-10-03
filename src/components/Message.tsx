import Image from 'next/image';

const Message = () => {
    return (
        <div className="chat h-full flex flex-col overflow-auto">
            <div className="flex flex-row gap-5 bg-slate-200 p-4">
                <div className="w-12 relative">
                    <Image
                        src="/images/logo-open-ai.png"
                        alt=""
                        width={100}
                        height={100}
                    />
                </div>
                <div className="w-full">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni dolor, rem reprehenderit cumque perspiciatis obcaecati
                    repudiandae numquam nesciunt. Mollitia cum facilis inventore
                    voluptates fugiat sequi minus quidem laudantium deleniti
                    vitae. Inventore quis consequatur repellat officiis quae
                    nulla ipsum dicta quidem illo saepe impedit, enim dolores
                    eveniet quod molestiae vel voluptates explicabo voluptatum,
                    fugit corporis. Accusantium aliquid id sequi sapiente culpa.
                </div>
            </div>
        </div>
    );
};

export default Message;
