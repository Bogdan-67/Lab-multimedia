function About() {
    return (
        <section className="about" id='about'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="mission">
                            <h2 className="mission__title">Миссия Grafit</h2>
                            <p className="mission__text">Каждый должен иметь право создавать 3D-контент для компьютерной графики, используя бесплатные технические и творческие средства производства и свободный доступ к рынкам.</p>
                        </div>
                        <div className="aims">
                            <h2 className="aims__title">Цели Grafit</h2>
                            <ul className="aims__list">
                                <li className="aims__item">Предоставить преимущества grafit.org для пользователей и разработчиков, которые хотят присоединиться к сообществу Grafit.</li>
                                <li className="aims__item">Поддерживать и улучшать текущий продукт Grafit с помощью общедоступной системы исходного кода в соответствии с GNU General Public License.</li>
                                <li className="aims__item">Создать механизмы финансирования или получения доходов, которые служат целям компании и покрывают расходы компании.</li>
                                <li className="aims__item">Предоставить отдельным пользователям и небольшим командам полный, бесплатный и с открытым исходным кодом инструмент создания в 3D</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;