interface ButtonProps {
    text: string;
    onClick: () => void;
    color: 'blue' | 'red' | 'green';
}

const SolidButton = ({ text, onClick, color }: ButtonProps) => {
    const colorClasses = {
        blue: 'bg-blue-500',
        red: 'bg-red-500',
        green: 'bg-green-500',
    };

    return (
        <button
            className={`px-4 py-2 ${colorClasses[color]} text-white rounded`}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default SolidButton;