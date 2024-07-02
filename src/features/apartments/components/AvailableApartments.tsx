import {ApartmentCard} from '../components';
import ApartmentFilters from "./ApartmentFilters.tsx";
import {useApartmentContext} from "../hooks/useApartmentContext.ts";


const AvailableApartments = () => {
    const { apartments, roomFilter, setRoomFilter, sortOrder, setSortOrder } = useApartmentContext();

    // Filter and sort apartments
    const filteredAndSortedApartments = apartments
        .filter(apt => roomFilter === '' || apt.rooms === parseInt(roomFilter))
        .sort((a, b) => sortOrder === 'asc' ? a.price - b.price : b.price - a.price);

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Available Apartments ({filteredAndSortedApartments.length})</h2>
                <ApartmentFilters
                    roomFilter={roomFilter}
                    onRoomFilterChange={setRoomFilter}
                    sortOrder={sortOrder}
                    onSortChange={setSortOrder}
                />
            </div>
            {filteredAndSortedApartments.map((apartment) => (
                <ApartmentCard key={apartment.id} apartment={apartment} />
            ))}
        </div>
    );
};

export default AvailableApartments;