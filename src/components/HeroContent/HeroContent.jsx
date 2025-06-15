import s from './HeroContent.module.css';

const HeroContent = ({ title, text, button }) => {
    return (
        <div className={s.content}>
            <h1 className={s.title}>{title}</h1>
            <p className={s.text}>{text}</p>
            {button}
        </div>
    );
};

export default HeroContent;
