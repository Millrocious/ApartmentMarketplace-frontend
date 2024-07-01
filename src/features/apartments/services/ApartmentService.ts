import axios from 'axios';
import {Apartment} from "../models/Apartment.ts";

const API_URL = 'http://localhost:8000';

export type SortOrder = 'asc' | 'desc';

class ApartmentService {
    async getApartments(sortBy?: SortOrder, rooms?: number): Promise<Apartment[]> {
        try {
            const url = `${API_URL}/apartments`;
            const params: Record<string, string | number> = {};

            if (sortBy) {
                params.price = sortBy;
            }
            if (rooms) {
                params.rooms = rooms;
            }

            const response = await axios.get(url, { params } );
            return response.data;
        } catch (error) {
            console.error('Error fetching apartments:', error);
            throw error;
        }
    }

    async getApartmentById(id: string): Promise<Apartment> {
        try {
            const response = await axios.get(`${API_URL}/apartments/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching apartment with id ${id}:`, error);
            throw error;
        }
    }

    async addApartment(apartment: Omit<Apartment, 'id'>): Promise<Apartment> {
        try {
            const response = await axios.post(`${API_URL}/apartments`, apartment);
            return response.data;
        } catch (error) {
            console.error('Error adding apartment:', error);
            throw error;
        }
    }

    async deleteApartment(id: string): Promise<void> {
        try {
            await axios.delete(`${API_URL}/apartments/${id}`);
        } catch (error) {
            console.error(`Error deleting apartment with id ${id}:`, error);
            throw error;
        }
    }

    async updateApartment(id: string, apartment: Omit<Apartment, 'id'>): Promise<Apartment> {
        try {
            const response = await axios.put(`${API_URL}/apartments/${id}`, apartment);
            return response.data;
        } catch (error) {
            console.error(`Error updating apartment with id ${id}:`, error);
            throw error;
        }
    }

    validateApartment(apartment: Omit<Apartment, 'id'>): string[] {
        const errors: string[] = [];

        if (!apartment.name.trim()) {
            errors.push("Apartment name can't be empty");
        }
        if (apartment.name.length > 99) {
            errors.push("Apartment name can't be longer than 99 characters");
        }
        if (apartment.rooms <= 0 || !Number.isInteger(apartment.rooms)) {
            errors.push("Number of rooms must be a positive integer");
        }
        if (apartment.price <= 0) {
            errors.push("Price must be greater than 0");
        }
        if (apartment.description && apartment.description.length > 999) {
            errors.push("Description can't be longer than 999 characters");
        }

        return errors;
    }
}

export default new ApartmentService();