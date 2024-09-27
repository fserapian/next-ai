import stacks from '../../../data/stacks.json';

const LearningStackPage = ({ params }: { params: { stack: string }}) => {
    const stack = params.stack;

    return (
        <div>
            <div>Learning {stack}</div>
            <div>{JSON.stringify(stacks[stack as keyof typeof stacks])}</div>
        </div>
    );
};

export default LearningStackPage;
