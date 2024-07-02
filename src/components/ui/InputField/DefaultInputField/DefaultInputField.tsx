interface InputFieldProps {
    label?: string;
    labelStyle?: 'block' | 'inline';
    type: 'text' | 'number';
    size?: 'small' | 'medium';
    fullWidth?: boolean;
    placeholder: string;
    value: string | number;
    onChange: (value: string) => void;
}

const DefaultInputField = ({
   label,
   labelStyle = 'block',
   type,
   size = 'medium',
   fullWidth = false,
   placeholder,
   value,
   onChange
}: InputFieldProps) => {
    return (
        <div className={`flex ${labelStyle === 'block' ? 'flex-col' : 'items-center'}`}>
            {label && (
                <label className={`
                    ${labelStyle === 'block' ? 'block mb-2' : 'mr-2'}
                `}>
                    {label}
                </label>
            )}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={`
                ${size === 'small' ? 'px-2 py-1' : 'px-4 py-3'}
                ${fullWidth ? 'w-full' : 'w-24'}
                border rounded-xl
                `}
            />
        </div>
    );
};

export default DefaultInputField;