import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomePage from './pages/HomePage/HomePage.jsx';
import CatalogPage from './pages/CatalogPage/CatalogPage.jsx';
import CarDetailsPage from './pages/CarDetailsPage/CarDetailsPage.jsx';
import Layout from './components/Layout/Layout';
import GlobalLoader from './components/Loader/GlobalLoader.jsx';

const App = () => {
    const isLoading = useSelector((state) => state.loader.isLoading);

    return (
        <>
            {isLoading && <GlobalLoader />}
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="catalog" element={<CatalogPage />} />
                    <Route path="catalog/:id" element={<CarDetailsPage />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
