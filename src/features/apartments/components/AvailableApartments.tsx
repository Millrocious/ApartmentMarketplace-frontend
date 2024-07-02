import {useState, useEffect, ChangeEvent} from 'react';
import ApartmentService, {SortOrder} from '../services/ApartmentService';
import {Apartment} from "../models/Apartment.ts";
import {ApartmentCard} from '../components';
import DefaultInputField from "../../../components/ui/InputField/DefaultInputField/DefaultInputField.tsx";

interface AvailableApartmentsProps {
    shouldRefetch: boolean;
    setShouldRefetch: (value: boolean) => void;
}

const AvailableApartments = ({shouldRefetch, setShouldRefetch}: AvailableApartmentsProps) => {
    const [apartments, setApartments] = useState<Apartment[]>([]);
    const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
    const [roomFilter, setRoomFilter] = useState<string>('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchApartments();
    }, [sortOrder]);

    useEffect(() => {
        if (shouldRefetch) {
            fetchApartments();
            setShouldRefetch(false);
        }
    }, [shouldRefetch, setShouldRefetch]);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            fetchApartments();
        }, 300);

        return () => clearTimeout(delayDebounceFn);
    }, [roomFilter]);

    const fetchApartments = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const rooms = roomFilter ? parseInt(roomFilter, 10) : undefined;
            const fetchedApartments = await ApartmentService.getApartments(sortOrder, rooms);
            setApartments(fetchedApartments);
        } catch (err) {
            setError('Failed to fetch apartments. Please try again later.');
            console.error('Error fetching apartments:', err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSortOrder(event.target.value as SortOrder);
    };

    const handleRoomFilterChange = (s: string) => {
        if (s === '' || /^[1-9]\d*$/.test(s)) {
            setRoomFilter(s);
        }
    };

    if (isLoading) {
        return <div>Loading apartments...</div>;
    }

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Available Apartments ({apartments.length})</h2>
                <div className="flex items-center space-x-4">
                    <div>
                        <DefaultInputField
                            value={roomFilter}
                            onChange={s => handleRoomFilterChange(s)}
                            placeholder="Rooms"
                            label="Filter by rooms: "
                            labelStyle="inline"
                            size="small"
                            type="number"
                        />
                    </div>
                    <div>
                        <label className="mr-2">Sort by: </label>
                        <select
                            className="border px-2 py-1 rounded"
                            value={sortOrder}
                            onChange={handleSortChange}
                        >
                            <option value="desc">Price: Highest First</option>
                            <option value="asc">Price: Lowest First</option>
                        </select>
                    </div>
                </div>
            </div>
            {apartments.map((apartment) => (
                <ApartmentCard
                    key={apartment.id}
                    apartment={apartment}
                />
            ))}
        </div>
    );
};

export default AvailableApartments;