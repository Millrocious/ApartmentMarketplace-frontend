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
        green: 'bg-lime-300',
    };

    return (
        <button
            className={`
            px-4 py-2 
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