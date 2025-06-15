import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import s from './FilterPanel.module.css'; // імпорт стилів модулем
import { setFilters } from '../../redux/filter/filtersSlice';
import { fetchBrands } from '../../redux/brands/brandsThunks';
import SelectFilter from './Filters/SelectFilter';
import { generatePriceOptions } from '../../utils/priceUtils';

const FilterPanel = ({ onSearch }) => {
    const dispatch = useDispatch();
    const filters = useSelector((state) => state.filters);
    const brands = useSelector((state) => state.brands.items);

    useEffect(() => {
        dispatch(fetchBrands());
    }, [dispatch]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(setFilters({ [name]: value }));
    };

    const brandOptions = brands.map((brand) => ({
        value: brand,
        label: brand,
    }));

    const priceOptions = generatePriceOptions(30, 180, 10).map(({ value }) => ({
        value,
        label: value,
    }));

    return (
        <form className={s.filterForm}>
            <div className={s.filterControls}>
                <div>
                    <label htmlFor="brand-select" className={s.filterLabel}>
                        Car brand
                    </label>
                    <SelectFilter
                        id="brand-select"
                        name="brand"
                        type="brand"
                        value={filters.brand}
                        options={brandOptions}
                        onChange={handleChange}
                        placeholder="Choose a brand"
                        className={s.brandSelect}
                    />
                </div>
                <div>
                    <label htmlFor="price-select" className={s.filterLabel}>
                        Price / 1 hour
                    </label>
                    <SelectFilter
                        id="price-select"
                        name="rentalPrice"
                        type="price"
                        value={filters.rentalPrice}
                        options={priceOptions}
                        onChange={handleChange}
                        placeholder="Choose a price"
                        className={s.priceSelect}
                    />
                </div>
                <div>
                    <label htmlFor="min-mileage" className={s.filterLabel}>
                        Car mileage / km
                    </label>
                    <div className={s.mileageInputsWrapper}>
                        <input
                            type="number"
                            name="minMileage"
                            placeholder="From"
                            value={filters.minMileage}
                            onChange={handleChange}
                            className={`${s.mileageInput} ${s.mileageInputLeft}`}
                        />
                        <input
                            type="number"
                            name="maxMileage"
                            placeholder="To"
                            value={filters.maxMileage}
                            onChange={handleChange}
                            className={`${s.mileageInput} ${s.mileageInputRight}`}
                        />
                    </div>
                </div>
                <button type="button" onClick={onSearch} className={s.searchBtn}>
                    Search
                </button>
            </div>
        </form>
    );
};

export default FilterPanel;
