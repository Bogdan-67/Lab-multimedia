import youtube from '../assets/youtube.svg';
import facebook from '../assets/facebook.svg';
import telegram from '../assets/telegram.svg';
import vk from '../assets/vk.svg';
import twitter from '../assets/twitter.svg';

function Footer() {
    const links = [youtube, facebook, vk, telegram, twitter];
    const rights = ['Конфиденциальность', 'Условия использования', 'Настройки cookie', 'Запрет на продажу личной информации'];

    return (
        <footer className="contacts" id='contacts'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="contacts__title">Следите за нами в соцсетях</h2>
                        <ul className="contacts__links d-flex">
                            {links.map((link, i) => (
                                <li key={i} className="contacts__link">
                                    <a href="#"><img className="contacts__svg" src={link} alt="" /></a>
                                </li> 
                            ))}
                        </ul>
                        <ul className="contacts__list d-flex">
                            <li className="contacts__item">Copyright © 2023 Grafit. All rights reserved.</li>
                            {rights.map((right, i) => (
                                    <li className="contacts__item" key={i}><span>/</span><a href='#'>{right}</a></li>
                                ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;