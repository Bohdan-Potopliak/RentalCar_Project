import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCarById } from '../../api/cars'; // або /carApi залежно від назви
import CarDetails from '../../components/CarDetails/CarDetails/CarDetails';
import s from './CarDetailsPage.module.css';

const CarDetailsPage = () => {
    const { id } = useParams();
    const [car, setCar] = useState(null);

    useEffect(() => {
        const fetchCar = async () => {
            try {
                const data = await getCarById(id);
                setCar(data);
            } catch (error) {
                console.error('Failed to fetch car data:', error);
            }
        };

        fetchCar();
    }, [id]);

    if (!car) return <p>Loading car details...</p>;

    return (
        <div className={s.container}>
            <CarDetails car={car} />
        </div>
    );
};

export default CarDetailsPage;
