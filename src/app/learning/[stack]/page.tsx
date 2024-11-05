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
            <div className="chat h-full flex flex-col overflow-auto">
                <Message text="What is React?" avatar="/images/profile.jpg" index={0} />
                <Message text="React is a popular library to create UIs..." avatar="/images/logo-open-ai.png" index={1} />
            </div>
            <div className="prompt flex mb-8">
                <Prompt />
            </div>
        </div>
    );
};

export default LearningStackPage;
