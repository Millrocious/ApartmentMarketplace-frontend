interface CustomInputProps {
    label?: string;
    placeholder?: string;
    type?: string;
    inline?: boolean;
    className?: string;
    options?: { value: string; label: string }[];
}

const CustomInput: React.FC<CustomInputProps> = ({
    label,
    placeholder,
    type = 'text',
    inline = false,
    className = '',
    options,
}) => {
    const inputClasses = `w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`;

    const renderInput = () => {
        if (type === 'select' && options) {
            return (
                <select className={inputClasses}>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            );
        }
        return (
            <input
                type={type}
                placeholder={placeholder}
                className={inputClasses}
            />
        );
    };

    if (!label) {
        return renderInput();
    }

    return (
        <div className={inline ? 'flex items-center' : ''}>
            <label className={`block text-sm font-medium text-gray-700 ${inline ? 'mr-2' : 'mb-1'}`}>
                {label}
            </label>
            {renderInput()}
        </div>
    );
};

export default CustomInput;