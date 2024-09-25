import Image from 'next/image';
import stacks from '../data/stacks.json';
import Link from 'next/link';

export default function Home() {
    const renderStacks = () => {
        return (
            <div className="flex space-x-2 justify-center items-center mt-2">
                {(Object.keys(stacks) as Array<keyof typeof stacks>).map(
                    (stackKey) => {
                        const stack = stacks[stackKey];

                        return (
                            <Link href={stack.href} key={stack.href} className="border-2 border-solid rounded w-20 h-20 flex justify-center items-center p-3 hover:border-blue-400">
                                <Image
                                    src={stack.logo}
                                    alt="Logo"
                                    width={75}
                                    height={75}
                                    className="object-contain"
                                />
                            </Link>
                        );
                    }
                )}
            </div>
        );
    };

    return (
        <div className="flex justify-center items-center h-full">
            <div className="flex justify-center items-center flex-col">
                <div>What do you want to learn?</div>
                <div>{renderStacks()}</div>
            </div>
        </div>
    );
}
