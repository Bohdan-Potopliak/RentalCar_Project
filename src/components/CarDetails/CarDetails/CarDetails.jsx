import s from './CarDetails.module.css';
import sprite from '../../../assets/icons/symbol-defs.svg';

const CarDetails = ({ car }) => {
    const { id, brand, model, year, address, mileage, rentalPrice, description } = car;

    const [country, city] = address
        ? address
              .split(',')
              .slice(-2)
              .map((s) => s.trim())
        : ['', ''];

    return (
        <section className={s.carDetails}>
            <h2 className={s.title}>
                {brand} {model}, {year} <span className={s.id}>Id: {id}</span>
            </h2>

            <p className={s.location}>
                <svg className={s.icon}>
                    <use href={`${sprite}#icon-location`} />
                </svg>
                {city}, {country} <span className={s.mileage}>Mileage: {mileage.toLocaleString()} km</span>
            </p>

            <p className={s.price}>${rentalPrice}</p>

            <p className={s.description}>{description}</p>
        </section>
    );
};

export default CarDetails;
