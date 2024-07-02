import DefaultInputField from "../../../../components/ui/InputField/DefaultInputField/DefaultInputField.tsx";
import SolidButton from "../../../../components/ui/Button/SolidButton/SolidButton.tsx";
import {useApartmentForm} from "../../hooks/useApartmentForm.ts";


const RentForm = () => {
    const {formData, handleChange, handleSubmit, error, success} = useApartmentForm();

    return (
        <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Create a new apartment listing</h2>
            <div className="bg-gray-200 border-2 border-gray-300 rounded-xl p-8">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-wrap gap-4 items-end">
                        <div className="flex-grow">
                            <DefaultInputField
                                label="Name"
                                name="name"
                                type="text"
                                placeholder="Apartment name"
                                value={formData.name}
                                onChange={handleChange('name')}
                                fullWidth
                            />
                        </div>
                        <div className="w-32">
                            <DefaultInputField
                                label="Rooms"
                                name="rooms"
                                type="number"
                                placeholder="Rooms"
                                value={formData.rooms}
                                onChange={handleChange('rooms')}
                                fullWidth
                            />
                        </div>
                        <div className="w-32">
                            <DefaultInputField
                                label="Price"
                                name="price"
                                type="number"
                                placeholder="Rent price"
                                value={formData.price}
                                onChange={handleChange('price')}
                                fullWidth
                            />
                        </div>
                        <div className="flex-grow">
                            <DefaultInputField
                                label="Description"
                                name="description"
                                type="text"
                                placeholder="Apartment description"
                                value={formData.description}
                                onChange={handleChange('description')}
                                fullWidth
                            />
                        </div>
                        <div className="flex items-center flex-grow-0">
                            <SolidButton text="Add Apartment" type="submit" color="green"/>
                        </div>
                    </div>
                </form>
                {error && <p className="text-red-500 mt-4">{error}</p>}
                {success && <p className="text-green-500 mt-4">Apartment added successfully!</p>}
            </div>
        </div>
    );
};

export default RentForm;
