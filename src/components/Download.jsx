import React from 'react';
import Windows from '../assets/windows.png';
import Apple from '../assets/apple.svg';
import Linux from '../assets/linux.svg';
import Brackets from '../assets/brackets.svg';

function Download() {
    const [open, setOpen] = React.useState(false);
    const downloads = [{img: Apple, name: 'macOS', size: '236MB'}, {img: Linux, name: 'Linux', size: '215MB'}, {img: Brackets, name: 'Source code', size: '51MB'}];

    return (
        <section className="download" id='download'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="download__title">Скачать Grafit</h2>
                        <a href='#' className="download__windows d-flex">
                            <img src={Windows} alt="Windows" className="download__img" />
                            <p className="download__windows-text">Скачать Grafit v1.1.0</p>
                        </a>
                        <p className="download__description">Windows  •  Installer  •  231MB</p>
                        <div className="download__other" onClick={() => setOpen(!open)}>
                            <p className="download__other-text">macOS, Linux, and other versions</p>
                            <svg className="download__angle" fill="#edeef0" width="64px" height="36px" viewBox="-8.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <title>angle-down</title>
                            <path d="M7.28 20.040c-0.24 0-0.44-0.080-0.6-0.24l-6.44-6.44c-0.32-0.32-0.32-0.84 0-1.2 0.32-0.32 0.84-0.32 1.2 0l5.84 5.84 5.84-5.84c0.32-0.32 0.84-0.32 1.2 0 0.32 0.32 0.32 0.84 0 1.2l-6.44 6.44c-0.16 0.16-0.4 0.24-0.6 0.24z"></path>
                            </svg>
                            {open && (
                            <ul className="download__more">
                                {downloads.map((obj) => (
                                    <li className="download__more-item">
                                        <a className='d-flex' href='#'>
                                            <div className='d-flex'>
                                                <img src={obj.img} alt="" />
                                                <p className='download__more-text'>{obj.name}</p>
                                            </div>
                                            <p>{obj.size}</p>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            )} 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Download;