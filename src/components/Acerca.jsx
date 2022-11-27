import React from 'react';
import acercaImg from '../assets/barco_noche.jpeg'

const Acerca = () => {
    return (
       <section id="acerca">
        <div className="container">
            <div className="row">
                <figure className="acerca__img--wrapper">
                    <img src={acercaImg} alt="" className="acerca__img" />
                </figure>
                <h1 className="title"></h1>
            </div>
        </div>
       </section>
    );
}

export default Acerca;
