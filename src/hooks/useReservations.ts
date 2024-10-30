import { useEffect, useState } from 'react';
import axios from 'axios';

interface Reservation {
    id: number;
    date: string;
    time: string;
    origin: string;
    destination: string;
    charge: string;
    driver: string | null;
    carNumber: string | null;
    isCall: boolean;
}

const useReservations = () => {
    const [reservations, setReservations] = useState<Reservation[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchReservations = async () => {
            try {
                const token = localStorage.getItem('accessToken'); 
                const response = await axios.get('https://swing-be-stag.xquare.app/reservation', {
                    headers: {
                        Authorization: `Bearer ${token}`, 
                    },
                });
                setReservations(response.data);
            } catch (error) {
                setError('실패');
            }
        };

        fetchReservations();
    }, []);

    return { reservations, error };
};

export default useReservations;