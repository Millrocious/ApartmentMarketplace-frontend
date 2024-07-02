
import {useState} from "react";
import {AvailableApartments, RentForm} from "../features/apartments/components";


const ApartmentPage = () => {
    const [shouldRefetch, setShouldRefetch] = useState(false);

    const handleApartmentAdded = () => {
        setShouldRefetch(true);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-7xl mx-auto p-8">
                <h1 className="text-2xl font-bold mb-10">Apartments Marketplace</h1>
                <div className="space-y-20">
                    <RentForm onApartmentAdded={handleApartmentAdded} />
                    <AvailableApartments shouldRefetch={shouldRefetch} setShouldRefetch={setShouldRefetch} />
                </div>
            </div>
        </div>
    );
};

export default ApartmentPage;
