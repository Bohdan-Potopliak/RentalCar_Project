import s from './HomePage.module.css';
import { Link } from 'react-router-dom';
import HeroContent from '../../components/HeroContent/HeroContent';

const HomePage = () => {
    return (
        <div className={s.hero}>
            <HeroContent
                title="Find your perfect rental car"
                text="Reliable and budget-friendly rentals for any journey"
                button={
                    <Link to="/catalog" className={s.button}>
                        View Catalog
                    </Link>
                }
            />
        </div>
    );
};

export default HomePage;
