import Art1 from '../assets/art1.png';
import Art2 from '../assets/art2.png';
import Art3 from '../assets/art3.png';

function News() {
    return (
        <section className="news" id='news'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="news__title">Новости</h2>
                    </div>
                    <div className="col-4">
                        <div className="article">
                            <img src={Art1} alt="Photo" className="article__img" />
                            <h3 className="article__title">Новые знания за минуту</h3>
                            <p className="article__text">Узнайте, как анимировать иллюстрацию в Grafit с помощью нового эффекта за 60 секунд.</p>
                            <a href="#" className="article__more">Подробнее</a>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="article">
                            <img src={Art2} alt="Photo" className="article__img" />
                            <h3 className="article__title">Опыт пользователей</h3>
                            <p className="article__text">Makuta Visual Effects - индийская компания по производству визуальных эффектов и анимации, базирующаяся в Хайдарабаде, Индия. Они перенесли большую часть своего конвейера в Grafit в 2019 году с одной или двумя сценами в полнометражном фильме под названием Gang Leader . Пит Дрейпер, генеральный директор и соучредитель MakutaVFX, делится некоторыми соображениями об использовании Grafit во время производства эпической экшн-драмы RRR.</p>
                            <a href="#" className="article__more">Подробнее</a>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="article">
                            <img src={Art3} alt="Photo" className="article__img" />
                            <h3 className="article__title">Конференция Grafit 2022</h3>
                            <p className="article__text">Наконец-то событие года в Grafit произошло снова! Со времен BCON19 многое изменилось. Невероятный рост Grafit и его сообщества позволил провести еще одну “лучшую конференцию Grafit в истории”.</p>
                            <p className="article__text">С более чем 700 участниками и почти 100 презентациями, распределенными по пяти параллельным направлениям, количество и качество контента были беспрецедентными. Вы можете посмотреть все презентации на YouTube-канале Grafit.</p>
                            <a href="#" className="article__more">Подробнее</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default News;