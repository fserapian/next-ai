'use client';

import { ChangeEvent, KeyboardEvent, useState } from 'react';

type PromptProps = {
    onSubmit: (inputPrompt: string) => void
}

const Prompt = ({ onSubmit }: PromptProps) => {
    const [input, setInput] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
        setInput(e.target.value);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>): void => {
        if (e.key === 'Enter') {
            e.preventDefault();
            onSubmit(input);
            setInput('');
        }
    };

    return (
        <textarea
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            rows={4}
            placeholder="Enter your prompt here..."
            className="w-full p-2.5 text-sm text-gray-900 bg-slate-200 rounded-lg border border-gray-300"
            value={input}
        />
    );
};

export default Prompt;
