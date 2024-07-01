import ApartmentCard from './ApartmentCard.tsx';

const apartments = [
    {title: 'Market square apartments', beds: 1, days: 2, price: 220},
    {title: 'Sun Hotel', beds: 1, days: 1, price: 100},
    {title: 'Cozy Room', beds: 1, days: 1, price: 20},
];

const AvailableApartments = () => {
    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Available Apartments ({apartments.length})</h2>
                <div>
                    <label>Sort by: </label>
                    <select className="border px-2 py-1 rounded">
                        <option>Price: Highest First</option>
                        <option>Price: Lowest First</option>
                    </select>
                </div>
            </div>
            {apartments.map((apartment, index) => (
                <ApartmentCard key={index} apartment={apartment}/>
            ))}
        </div>
    );
};

export default AvailableApartments;