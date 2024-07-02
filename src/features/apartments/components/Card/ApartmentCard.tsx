import {Apartment} from "../../models/Apartment.ts";
import SolidButton from "../../../../components/ui/Button/SolidButton/SolidButton.tsx";
import {useApartmentContext} from "../../hooks/useApartmentContext.ts";

interface ApartmentCardProps {
    apartment: Apartment
}

const ApartmentCard = ({ apartment }: ApartmentCardProps) => {
    const { deleteApartment } = useApartmentContext();

    const handleDelete = async () => {
        if (window.confirm(`Are you sure you want to delete ${apartment.name}?`)) {
            try {
                await deleteApartment(apartment.id);
            } catch (error) {
                console.error('Error deleting apartment:', error);
            }
        }
    };

    return (
        <div className="bg-white border p-4 rounded mb-4 flex justify-between items-center">
      <span>
        {apartment.name} / {apartment.rooms} {apartment.rooms === 1 ? 'room' : 'rooms'} /
        ${apartment.price} / {apartment.description}
      </span>
            <div className="space-x-4">
                <SolidButton text="Delete" color="red" onClick={handleDelete} />
            </div>
        </div>
    );
};

export default ApartmentCard;