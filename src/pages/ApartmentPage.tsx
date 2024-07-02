import {AvailableApartments, RentForm} from "../features/apartments/components";
import {ApartmentProvider} from "../features/apartments/providers/ApartmentProvider.tsx";


const ApartmentPage = () => {
    return (
        <ApartmentProvider>
            <div className="min-h-screen bg-gray-100 p-8">
                <div className="max-w-7xl mx-auto p-8">
                    <h1 className="text-2xl font-bold mb-10">Apartments Marketplace</h1>
                    <div className="space-y-20">
                        <RentForm />
                        <AvailableApartments />
                    </div>
                </div>
            </div>
        </ApartmentProvider>
    );
};

export default ApartmentPage;
