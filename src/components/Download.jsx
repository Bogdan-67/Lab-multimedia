import Windows from '../assets/windows.png';

function Download() {
    return (
        <section className="download" id='download'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="download__title">Скачать Grafit</h2>
                        <div className="download__windows d-flex">
                            <img src={Windows} alt="Windows" className="download__img" />
                            <p className="download__windows-text">Скачать Grafit v1.1.0</p>
                        </div>
                        <p className="download__description">Windows  •  Installer  •  231MB</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Download;