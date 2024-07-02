interface ButtonProps {
    text: string;
    onClick?: () => void;
    rounded?: boolean;
    color: 'blue' | 'red' | 'green';
}

const SolidButton = ({text, onClick, rounded = false, color}: ButtonProps) => {
    const colorClasses = {
        blue: 'bg-blue-300',
        red: 'bg-red-300',
        green: 'bg-emerald-500',
    };

    return (
        <button
            className={`
            px-4 py-3 
            ${colorClasses[color]}
            ${rounded ? 'rounded-full' : 'rounded-lg'} 
            text-white rounded
            `}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default SolidButton;