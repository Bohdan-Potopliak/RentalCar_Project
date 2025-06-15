import CatalogCard from '../CatalogCard/CatalogCard';
import s from './CatalogList.module.css';
import { useSelector } from 'react-redux';

const CatalogList = () => {
    const cars = useSelector((state) => state.cars.items);

    return (
        <div className={s.grid}>
            {cars.map((car) => (
                <CatalogCard key={car.id} car={car} />
            ))}
        </div>
    );
};

export default CatalogList;
