import ApartmentService from "../services/ApartmentService.ts";
import {ChangeEvent, FormEvent, useState} from "react";
import {useApartmentContext} from "./useApartmentContext.ts";

export const useApartmentForm = () => {
    const { addApartment } = useApartmentContext();
    const [formData, setFormData] = useState({
        name: '',
        rooms: '',
        price: '',
        description: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleChange = (name: string) => (value: string) => {
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const { name, rooms, price, description } = formData;

        const newApartment = {
            name,
            rooms: Number(rooms),
            price: Number(price),
            description
        };

        const validationErrors = ApartmentService.validateApartment(newApartment);
        if (validationErrors.length > 0) {
            setError(validationErrors.join(', '));
            return;
        }

        try {
            await addApartment(newApartment);
            setSuccess(true);
            setFormData({ name: '', rooms: '', price: '', description: '' });
            setError('');
            setTimeout(() => setSuccess(false), 3000);
        } catch (err) {
            setError('Failed to add apartment');
        }
    };

    return { formData, handleChange, handleSubmit, error, success };
};