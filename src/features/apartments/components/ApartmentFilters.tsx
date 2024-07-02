import {SortOrder} from "../services/ApartmentService.ts";
import {ChangeEvent} from "react";
import DefaultInputField from "../../../components/ui/InputField/DefaultInputField/DefaultInputField.tsx";

interface ApartmentFiltersProps {
    roomFilter: string;
    onRoomFilterChange: (s: string) => void;
    sortOrder: SortOrder;
    onSortChange: (value: SortOrder) => void;
}

const ApartmentFilters = ({ roomFilter, onRoomFilterChange, sortOrder, onSortChange }: ApartmentFiltersProps) => {
    const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
        onSortChange(event.target.value as SortOrder);
    };

    return (
        <div className="flex items-center space-x-4">
            <div>
                <DefaultInputField
                    value={roomFilter}
                    onChange={onRoomFilterChange}
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
    );
};

export default ApartmentFilters;