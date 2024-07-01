import DefaultInputField from "../../components/common/InputField/DefaultInputField/DefaultInputField.tsx";
import SolidButton from "../../components/common/Button/SolidButton/SolidButton.tsx";
import {useState} from "react";
import DefaultSelectField from "../../components/common/SeletField/DefaultSeceltField/DefaultSelectField.tsx";

const RentForm = () => {
    const [title, setTitle] = useState<string>('');
    const [days, setDays] = useState<number>(0);
    const [rooms, setRooms] = useState<string>('1+');
    const [rentPrice, setRentPrice] = useState<number>(0);

    const handleSubmit = () => {
        console.log({ title, days, rooms, rentPrice });
        setTitle('');
        setDays(0);
        setRooms('1+');
        setRentPrice(0);
    };

    return (
        <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Create a new rent</h2>
            <div className="bg-gray-200 border-2 border-gray-300 rounded-xl p-8">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-wrap items-end gap-8">
                        <DefaultInputField
                            label="Title"
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={(value) => setTitle(value)}
                        />
                        <DefaultInputField
                            label="Days"
                            type="number"
                            placeholder="Days"
                            value={days}
                            onChange={(value) => setDays(Number(value))}
                        />
                        <DefaultSelectField
                            label="Rooms"
                            options={[
                                { value: '1+', label: '1+' },
                                { value: '2+', label: '2+' },
                                { value: '3+', label: '3+' },
                                { value: '4+', label: '4+' },
                            ]}
                            value={rooms}
                            onChange={setRooms}
                        />
                        <DefaultInputField
                            label="Rent price"
                            type="number"
                            placeholder="Rent Price"
                            value={rentPrice}
                            onChange={(value) => setRentPrice(Number(value))}
                        />
                        <SolidButton text="Submit rent" onClick={handleSubmit} color="green" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RentForm;