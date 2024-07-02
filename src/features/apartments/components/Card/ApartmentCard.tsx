import {Apartment} from "../../models/Apartment.ts";
import SolidButton from "../../../../components/ui/Button/SolidButton/SolidButton.tsx";

interface ApartmentCardProps {
    apartment: Apartment
}

const ApartmentCard = ({apartment}: ApartmentCardProps) => {
    return (
        <div className="bg-white border p-4 rounded mb-4 flex justify-between items-center">
            <span>
                {apartment.name} / {apartment.rooms} {apartment.rooms === 1 ? 'room' : 'rooms'} /
                ${apartment.price} / {apartment.description}
            </span>
            <div className="space-x-4">
                <SolidButton text="Delete" color="red" />
            </div>
        </div>
    );
};

export default ApartmentCard;