// import Image from 'next/image';
import stacks from '../data/stacks.json'

export default function Home() {
    return (
        <div className="flex justify-center items-center h-full">
            <div className="flex justify-center items-center flex-col">
                <div>What do you want to learn?</div>
                <div>{JSON.stringify(stacks)}</div>
            </div>
        </div>
    );
}
