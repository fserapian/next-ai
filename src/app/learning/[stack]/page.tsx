import Message from '@/components/Message';
import stacks from '@/data/stacks.json';
import Prompt from '@/components/Prompt';
import Header from '@/components/Header';

const LearningStackPage = ({ params }: { params: { stack: string } }) => {
    const stackKey = params.stack;

    const stackObj = stacks[stackKey as keyof typeof stacks];

    return (
        <div className="h-full flex flex-col">
            <Header logo={stackObj.logo} info={stackObj.info} />
            <hr className="my-8" />
            <Message />
            <Prompt />
        </div>
    );
};

export default LearningStackPage;
