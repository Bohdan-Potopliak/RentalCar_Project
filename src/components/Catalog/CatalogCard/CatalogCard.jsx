import s from './CatalogCard.module.css';
import sprite from '../../../assets/icons/symbol-defs.svg';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../../redux/favorites/favoritesSlice';

const CatalogCard = ({ car }) => {
    const { img, brand, model, year, rentalPrice, rentalCompany, address, type, mileage } = car;

    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites.items);
    const isFavorite = favorites.includes(car.id);

    const handleToggleFavorite = () => {
        dispatch(toggleFavorite(car.id));
    };

    const [country, city] = address
        ? address
              .split(',')
              .slice(-2)
              .map((s) => s.trim())
        : ['', ''];

    return (
        <div className={s.card}>
            <div className={s.imageWrapper}>
                <img src={car.img} alt={`${car.brand} ${car.model}`} className={s.image} />
                <button className={s.heartBtn} type="button" onClick={handleToggleFavorite} title="Toggle favorite">
                    <svg className={s.heartIcon}>
                        <use href={`${sprite}#${isFavorite ? 'icon-heart-active' : 'icon-heart'}`} />
                    </svg>
                </button>
            </div>

            <div className={s.infoBlock}>
                <div className={s.header}>
                    <h2 className={s.title}>
                        {brand} <span className={s.model}>{model}</span> {year}
                    </h2>
                    <span className={s.price}>${rentalPrice}</span>
                </div>

                <div className={s.details}>
                    <div className={s.detailsRow}>
                        <span>{city}</span>
                        <Separator />
                        <span>{country}</span>
                        <Separator />
                        <span>{rentalCompany}</span>
                        <Separator />
                    </div>
                    <div className={s.detailsRow}>
                        <span>{type}</span>
                        <Separator />
                        <span>{mileage.toLocaleString()} km</span>
                    </div>
                </div>
            </div>

            <button className={s.readMoreBtn} onClick={() => alert(`Read more about ${brand} ${model}`)}>
                Read more
            </button>
        </div>
    );
};

const Separator = () => <span className={s.separator} />;

export default CatalogCard;
