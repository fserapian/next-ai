import stacks from '../../../data/stacks.json';
import Image from 'next/image';

const LearningStackPage = ({ params }: { params: { stack: string } }) => {
    const stackKey = params.stack;

    const stackObj = stacks[stackKey as keyof typeof stacks];

    return (
        <div className="h-full flex flex-col">
            <div className="header p-4 bg-slate-100 rounded-lg mt-10">
                <div className="flex space-x-6">
                    <Image src={stackObj.logo} width={80} height={80} alt="" />
                    <div className="flex justify-center items-center font-semibold text-slate-600">
                        {stackObj.info}
                    </div>
                </div>
            </div>

            <hr className="my-8" />

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
                        Magni dolor, rem reprehenderit cumque perspiciatis
                        obcaecati repudiandae numquam nesciunt. Mollitia cum
                        facilis inventore voluptates fugiat sequi minus quidem
                        laudantium deleniti vitae. Inventore quis consequatur
                        repellat officiis quae nulla ipsum dicta quidem illo
                        saepe impedit, enim dolores eveniet quod molestiae vel
                        voluptates explicabo voluptatum, fugit corporis.
                        Accusantium aliquid id sequi sapiente culpa.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearningStackPage;
