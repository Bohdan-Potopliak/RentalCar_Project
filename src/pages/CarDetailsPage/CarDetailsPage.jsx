import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarById } from '../../redux/cars/carsSlice';
import CarDetails from '../../components/CarDetails/CarDetails/CarDetails';
import CarInfo from '../../components/CarDetails/CarInfo/CarInfo';
import s from './CarDetailsPage.module.css';

const CarDetailsPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const { selectedCar: car, error } = useSelector((state) => state.cars);

    useEffect(() => {
        dispatch(fetchCarById(id));
    }, [id, dispatch]);

    if (error) return <p>Error: {error}</p>;
    if (!car) return null;

    const specifications = {
        year: car.year,
        type: car.type,
        fuelConsumption: car.fuelConsumption,
        engineSize: car.engineSize,
    };

    return (
        <div className={s.container}>
            <CarDetails car={car} />
            <CarInfo
                rentalConditions={car.rentalConditions}
                specifications={specifications}
                accessories={car.accessories}
                functionalities={car.functionalities}
            />
        </div>
    );
};

export default CarDetailsPage;
