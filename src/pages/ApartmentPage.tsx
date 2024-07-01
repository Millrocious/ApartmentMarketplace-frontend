import AvailableApartments from "../features/apartments/components/AvailableApartments.tsx";
import RentForm from "../features/apartments/components/RentForm.tsx";
import CurrentRent from "../features/apartments/components/CurrentRent.tsx";

const ApartmentPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-7xl mx-auto p-8">
                <h1 className="text-2xl font-bold mb-10">Apartments Marketplace</h1>
                <div className="space-y-20">
                    <RentForm />
                    <CurrentRent />
                    <AvailableApartments />
                </div>
            </div>
        </div>
    );
};

export default ApartmentPage;
