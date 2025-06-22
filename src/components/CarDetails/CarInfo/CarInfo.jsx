import s from './CarInfo.module.css';
import sprite from '../../../assets/icons/symbol-defs.svg';

const CarInfo = ({ rentalConditions, specifications, accessories, functionalities }) => {
    return (
        <div className={s.container}>
            {/* Rental Conditions */}
            <div className={s.section}>
                <h3 className={s.title}>Rental Conditions:</h3>
                <ul className={s.list}>
                    {rentalConditions.map((item, idx) => (
                        <li key={idx} className={s.item}>
                            <svg className={s.icon}>
                                <use href={`${sprite}#icon-correct`} />
                            </svg>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Car Specifications */}
            <div className={s.section}>
                <h3 className={s.title}>Car Specifications:</h3>
                <ul className={s.list}>
                    <li className={s.item}>
                        <svg className={s.icon}>
                            <use href={`${sprite}#icon-calendar`} />
                        </svg>
                        Year: {specifications.year}
                    </li>
                    <li className={s.item}>
                        <svg className={s.icon}>
                            <use href={`${sprite}#icon-car`} />
                        </svg>
                        Type: {specifications.type}
                    </li>
                    <li className={s.item}>
                        <svg className={s.icon}>
                            <use href={`${sprite}#icon-fuel-pump`} />
                        </svg>
                        Fuel Consumption: {specifications.fuelConsumption}
                    </li>
                    <li className={s.item}>
                        <svg className={s.icon}>
                            <use href={`${sprite}#icon-settings`} />
                        </svg>
                        Engine Size: {specifications.engineSize}
                    </li>
                </ul>
            </div>

            {/* Accessories & Functionalities */}
            <div className={s.section}>
                <h3 className={s.title}>Accessories and functionalities:</h3>
                <ul className={s.list}>
                    {[...accessories, ...functionalities].map((item, idx) => (
                        <li key={idx} className={s.item}>
                            <svg className={s.icon}>
                                <use href={`${sprite}#icon-correct`} />
                            </svg>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CarInfo;
