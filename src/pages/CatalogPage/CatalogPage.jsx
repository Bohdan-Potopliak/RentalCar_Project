import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars, incrementPage, resetCars } from '../../redux/cars/carsSlice';
import s from './CatalogPage.module.css';
import FilterPanel from '../../components/FilterPanel/FilterPanel';
import CatalogList from '../../components/Catalog/CatalogList.jsx/CatalogList';

const CatalogPage = () => {
    const dispatch = useDispatch();
    const { items, isLoading, error, page } = useSelector((state) => state.cars);
    const filters = useSelector((state) => state.filters);

    useEffect(() => {
        dispatch(resetCars());
        dispatch(fetchCars({ page: 1, filters }));
    }, [dispatch]);

    useEffect(() => {
        if (page > 1) {
            dispatch(fetchCars({ page, filters }));
        }
    }, [dispatch, page]);

    const handleLoadMore = () => {
        dispatch(incrementPage());
    };

    const handleSearch = () => {
        dispatch(resetCars());
        dispatch(fetchCars({ filters, page: 1 }));
    };

    return (
        <div>
            <FilterPanel onSearch={handleSearch} />
            <CatalogList />

            {isLoading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {!isLoading && !error && items.length >= 12 && (
                <div className={s.loadMoreWrapper}>
                    <button className={s.btnLoad} onClick={handleLoadMore}>
                        Load more
                    </button>
                </div>
            )}
        </div>
    );
};

export default CatalogPage;
