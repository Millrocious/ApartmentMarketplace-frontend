import {createContext} from "react";
import {Apartment} from "../models/Apartment.ts";
import {SortOrder} from "../services/ApartmentService.ts";

export interface ApartmentContextType {
    apartments: Apartment[];
    addApartment: (apartment: Omit<Apartment, 'id'>) => Promise<void>;
    roomFilter: string;
    setRoomFilter: (filter: string) => void;
    sortOrder: SortOrder;
    setSortOrder: (order: SortOrder) => void;
    isLoading: boolean;
    error: string | null;
    refetchApartments: () => Promise<void>;
    deleteApartment: (id: string) => Promise<void>;
}

export const ApartmentContext = createContext<ApartmentContextType | undefined>(undefined);