const Prompt = () => {
    return (
        <textarea
            rows={4}
            placeholder="Enter your prompt here..."
            className="w-full p-2.5 text-sm text-gray-900 bg-slate-200 rounded-lg border border-gray-300"
        />
    );
};

export default Prompt;
