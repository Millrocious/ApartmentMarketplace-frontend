interface InputFieldProps {
    label: string;
    type: 'text' | 'number';
    placeholder: string;
    value: string | number;
    onChange: (value: string) => void;
}

const DefaultInputField = ({ label, type, placeholder, value, onChange }: InputFieldProps) => {
    return (
        <div>
            <label className="block mb-2">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full px-4 py-3 border rounded-xl"
            />
        </div>
    );
};

export default DefaultInputField;