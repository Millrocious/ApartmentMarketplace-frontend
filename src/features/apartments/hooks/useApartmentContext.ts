import {useContext} from "react";
import {ApartmentContext} from "../context/ApartmentContext.ts";

export const useApartmentContext = () => {
    const context = useContext(ApartmentContext);
    if (context === undefined) {
        throw new Error('useApartmentContext must be used within an ApartmentProvider');
    }
    return context;
};