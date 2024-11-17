import React from 'react';
import './home-carousel.css';
import Card_Carrossel_1 from './assets/images/Card_Carrossel_1.svg';
import Card_Carrossel_2 from './assets/images/Card_Carrossel_2.svg';
import Card_Carrossel_3 from './assets/images/Card_Carrossel_3.svg';


const HomeCarousel = () => {
    return (
        <>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" data-bs-interval="1000">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="4000">
                <img src={Card_Carrossel_1} class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                </div>
                </div>
                <div class="carousel-item" data-bs-interval="4000">
                <img src={Card_Carrossel_2} class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                </div>
                </div>
                <div class="carousel-item" data-bs-interval="4000">
                <img src={Card_Carrossel_3} class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
        </>
    );
};

export default HomeCarousel;
