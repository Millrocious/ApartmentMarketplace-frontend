const ApartmentCard = ({apartment}) => {
    return (
        <div className="bg-white border p-4 rounded mb-4 flex justify-between items-center">
            <span>
                {apartment.title} / {apartment.beds} bed(s) / {apartment.days} day(s) / ${apartment.price}
            </span>
            <div className="space-x-4">
                <button className="px-4 py-2 bg-blue-500 text-white rounded">Rent</button>
                <button className="px-4 py-2 bg-red-500 text-white rounded">Delete</button>
            </div>
        </div>
    );
};

export default ApartmentCard;