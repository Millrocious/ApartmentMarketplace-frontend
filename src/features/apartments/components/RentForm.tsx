import DefaultInputField from "../../../components/ui/InputField/DefaultInputField/DefaultInputField.tsx";
import SolidButton from "../../../components/ui/Button/SolidButton/SolidButton.tsx";
import {useState} from "react";
import ApartmentService from "../services/ApartmentService.ts";
import axios from "axios";

const RentForm = () => {
    const [name, setName] = useState<string>('');
    const [rooms, setRooms] = useState<number>(1);
    const [price, setPrice] = useState<number>(0);
    const [description, setDescription] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        setSuccess(false);

        const newApartment = {
            name,
            rooms,
            price,
            description
        };

        const validationErrors = ApartmentService.validateApartment(newApartment);
        if (validationErrors.length > 0) {
            setError(validationErrors.join(', '));
            return;
        }

        try {
            await ApartmentService.addApartment(newApartment);
            setSuccess(true);
            // Reset form
            setName('');
            setRooms(1);
            setPrice(0);
            setDescription('');
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                setError(error.response.data.message || 'An error occurred while adding the apartment.');
            } else {
                setError('An unexpected error occurred.');
            }
        }
    };

    return (
        <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Create a new apartment listing</h2>
            <div className="bg-gray-200 border-2 border-gray-300 rounded-xl p-8">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-wrap items-end gap-8">
                        <DefaultInputField
                            label="Name"
                            type="text"
                            placeholder="Apartment name"
                            value={name}
                            onChange={(value) => setName(value)}
                        />
                        <DefaultInputField
                            label="Rooms"
                            type="number"
                            placeholder="Number of rooms"
                            value={rooms}
                            onChange={(value) => setRooms(Number(value))}
                        />
                        <DefaultInputField
                            label="Price"
                            type="number"
                            placeholder="Rent price"
                            value={price}
                            onChange={(value) => setPrice(Number(value))}
                        />
                        <DefaultInputField
                            label="Description"
                            type="text"
                            placeholder="Apartment description"
                            value={description}
                            onChange={(value) => setDescription(value)}
                        />
                        <SolidButton text="Add Apartment" type="submit" color="green" />
                    </div>
                </form>
                {error && <p className="text-red-500 mt-4">{error}</p>}
                {success && <p className="text-green-500 mt-4">Apartment added successfully!</p>}
            </div>
        </div>
    );
};

export default RentForm;