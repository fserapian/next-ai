import stacks from '../../../data/stacks.json';
import Image from 'next/image';

const LearningStackPage = ({ params }: { params: { stack: string }}) => {
    const stackKey = params.stack;

    const stackObj = stacks[stackKey as keyof typeof stacks]

    return (
        <div className="p-4 bg-slate-100 rounded-lg mt-10">
            <div className="flex space-x-6">
                <Image src={stackObj.logo} width={100} height={100} alt='' />
                <div className="flex justify-center items-center font-semibold text-slate-600">{stackObj.info}</div>
            </div>
        </div>
    );
};

export default LearningStackPage;
