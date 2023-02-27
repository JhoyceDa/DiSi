'use strict';
const documentReady = () => {
    const heroButtonNo = document.querySelector('#heroButtoNo');
    const heroButtonSi = document.querySelector('#heroButtonSi');
    const heroTitle = document.querySelector('.hero__title');
    const nowSomosNovios = () =>{
        alert('Now Somos Novios');
        location.href = 'https://www.youtube.com/watch?v=3MGRbS7thr4';
    };
    
    const evitarKMRompanMyBobo = () =>{
        heroButtonNo.style.position = 'absolute';
        heroButtonNo.style.top = (Math.random() * innerHeight) + 'px';
        heroButtonNo.style.left = (Math.random() * innerWidth) + 'px';
    };
    
    const partner = prompt('🥰 Dyme 2 naMe 🥰');
    document.getElementById("hero").style.display = "flex";
    heroTitle.innerHTML += partner + '♥';

    
    heroButtonNo.addEventListener('click', evitarKMRompanMyBobo);
    heroButtonNo.addEventListener('mouseover', evitarKMRompanMyBobo);
    heroButtonSi.addEventListener('click', nowSomosNovios);
      
};


document.addEventListener('DOMContentLoaded', documentReady);
