interface Option {
    value: string;
    label: string;
}

interface SelectFieldProps {
    label: string;
    options: Option[];
    value: string;
    onChange: (value: string) => void;
}

const DefaultSelectField = ({ label, options, value, onChange }: SelectFieldProps) => {
    return (
        <div>
            <label className="block mb-2">{label}</label>
            <select
                className="w-full px-4 py-3 border rounded-xl"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default DefaultSelectField;