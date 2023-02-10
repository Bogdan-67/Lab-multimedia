function Advantages() {
    return (
        <section className="advantages" id='advantages'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="advantages__title">Преимущества</h2>
                    </div>
                </div>
                <div className="advantage">
                    <div className="row">
                        <div className="col-12">
                            <h4 className="advantage__title">Cycles Render Engine</h4>
                            <p className="advantage__text">Cycles - это встроенный в Grafit мощный движок для отслеживания траекторий, который обеспечивает потрясающий ультрареалистичный рендеринг.</p>
                            <ul className="advantage__list">
                                <li className="advantage__item">Предварительный просмотр в режиме реального времени</li>
                                <li className="advantage__item">Рендеринг CPU и GPU</li>
                                <li className="advantage__item">Поддержка PBR-шейдеров и HDR-освещения</li>
                                <li className="advantage__item">Поддержка рендеринга виртуальной реальности</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="advantage">
                    <div className="row">
                        <div className="col-12">
                            <h4 className="advantage__title">Modeling, Sculpt, UV</h4>
                            <p className="advantage__text">Широкий набор инструментов моделирования Grafit упрощает создание, трансформацию и редактирование ваших моделей.</p>
                            <ul className="advantage__list">
                                <li className="advantage__item">Полная поддержка N-Gon</li>
                                <li className="advantage__item">Слайд по краям, вставка, заливка сеткой и перемычкой и многое другое</li>
                                <li className="advantage__item">Продвинутые инструменты для лепки и кисти</li>
                                <li className="advantage__item">Мультиразрешение и динамическое разделение</li>
                                <li className="advantage__item">3D-рисование текстурированными кистями и маскировка</li>
                                <li className="advantage__item">Сценарии на Python для пользовательских инструментов и дополнений</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="advantage">
                    <div className="row">
                        <div className="col-12">
                            <h4 className="advantage__title">VFX</h4>
                            <p className="advantage__text">Профессионалы VFX говорят: “Вероятно, лучший трекер на рынке”. Grafit включает в себя готовую к производству камеру и отслеживание объектов. Позволяет импортировать необработанные кадры, отслеживать отснятый материал, маскировать области и видеть движения камеры в реальном времени в вашей 3D-сцене. Устраняется необходимость переключения между программами.</p>
                            <ul className="advantage__list">
                                <li className="advantage__item">Автоматическое и ручное отслеживание</li>
                                <li className="advantage__item">Мощная реконструкция камеры</li>
                                <li className="advantage__item">Предварительный просмотр отснятого материала и 3D-сцены в режиме реального времени</li>
                                <li className="advantage__item">Поддержка плоского трекинга и штативных решателей</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Advantages;