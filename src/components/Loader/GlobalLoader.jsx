import { useSelector } from 'react-redux';
import s from './GlobalLoader.module.css';

const GlobalLoader = () => {
    const isLoading = useSelector((state) => state.loader.isLoading);

    if (!isLoading) return null;

    return (
        <div className={s.overlay}>
            <div className={s.loader}></div>
        </div>
    );
};

export default GlobalLoader;
