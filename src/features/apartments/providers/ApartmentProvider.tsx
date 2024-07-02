import {ReactNode, useCallback, useEffect, useState} from "react";
import {ApartmentContext, ApartmentContextType} from "../context/ApartmentContext.ts";
import {Apartment} from "../models/Apartment.ts";
import ApartmentService, {SortOrder} from "../services/ApartmentService.ts";

export const ApartmentProvider = ({ children }: ReactNode) => {
    const [apartments, setApartments] = useState<Apartment[]>([]);
    const [roomFilter, setRoomFilter] = useState('');
    const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchApartments = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const fetchedApartments = await ApartmentService.getApartments(sortOrder, roomFilter ? parseInt(roomFilter) : undefined);
            setApartments(fetchedApartments);
        } catch (err) {
            setError('Failed to fetch apartments');
        } finally {
            setIsLoading(false);
        }
    }, [sortOrder, roomFilter]);

    useEffect(() => {
        fetchApartments();
    }, [fetchApartments]);

    const addApartment = async (newApartment: Omit<Apartment, 'id'>) => {
        setIsLoading(true);
        setError(null);
        try {
            await ApartmentService.addApartment(newApartment);
            await fetchApartments();
        } catch (err) {
            setError('Failed to add apartment');
        } finally {
            setIsLoading(false);
        }
    };

    const contextValue: ApartmentContextType = {
        apartments,
        addApartment,
        roomFilter,
        setRoomFilter,
        sortOrder,
        setSortOrder,
        isLoading,
        error,
        refetchApartments: fetchApartments
    };

    return (
        <ApartmentContext.Provider value={contextValue}>
            {children}
        </ApartmentContext.Provider>
    );
};