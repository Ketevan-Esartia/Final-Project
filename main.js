'use strict';

const burgerBtn = document.querySelector('.burger-btn');
const navEl = document.querySelector('#main-nav');

const navLinks = document.querySelectorAll('.nav-link');
const planetName = document.querySelector('#planet-name');
const planetImg = document.querySelector('#planet-img');
const planetImg2 = document.querySelector('#planet-img2');
const planetDesc = document.querySelector('#planet-desc');

const wikiSource = document.querySelector('#wikisource');

const overviewBtn = document.querySelector('#overview');
const structureBtn = document.querySelector('#structure');
const surfaceBtn = document.querySelector('#geology');

const overviewBtn1 = document.querySelector('#overview1');
const structureBtn1 = document.querySelector('#structure1');
const surfaceBtn1 = document.querySelector('#geology1');

const plRotationTime = document.querySelector('#rotation');
const plRevTime = document.querySelector('#revolution');
const plRadius = document.querySelector('#radius');
const plAvTemp = document.querySelector('#temperature');


const PLANET_API_URI = 'https://planets-api.vercel.app/api/v1/planets';

burgerBtn.addEventListener('click', () => {
  navEl.classList.toggle('active');
});

for (let i = 0; i <navLinks.length; i++) {
  navLinks[i].addEventListener('click', () =>{
    getPlanet(navLinks[i].textContent);
  });
}

surfaceBtn.addEventListener('click', () => {
  planetImg2.classList.add('active');
});

const getPlanet = async (planet = 'Mercury') => {
  const response = await fetch(`${PLANET_API_URI}/${planet}`);
  const data = await response.json();
  planetName.textContent = data.name;
  planetImg.src = data.images.planet;
  planetDesc.textContent = data.overview.content;

  plRotationTime.textContent = data.rotation;
  plRevTime.textContent = data.revolution;
  plRadius.textContent = data.radius;
  plAvTemp.textContent = data.temperature;
  
  overviewBtn.addEventListener('click', () => {
    planetDesc.textContent = data.overview.content; 
    planetImg.src = data.images.planet; 
    planetImg2.style.display = 'none';
    wikiSource.src = data.overview.source;
  });
  structureBtn.addEventListener('click', () => {
    planetDesc.textContent = data.structure.content; 
    planetImg.src = data.images.internal; 
    planetImg2.style.display = 'none';
    wikiSource.src = data.structure.source;
  });
  surfaceBtn.addEventListener('click', () => {
    planetDesc.textContent = data.geology.content; 
    planetImg2.style.display = 'block'; 
    planetImg.src = data.images.planet; 
    planetImg2.src = data.images.geology;
    wikiSource.src = data.geology.source;
  });

  overviewBtn1.addEventListener('click', () => {
    planetDesc.textContent = data.overview.content; 
    planetImg.src = data.images.planet; 
    planetImg2.style.display = 'none';
    wikiSource.src = data.overview.source;
  });
  structureBtn1.addEventListener('click', () => {
    planetDesc.textContent = data.structure.content;
    wikiSource.src = data.structure.source; 
    planetImg.src = data.images.internal; 
    planetImg2.style.display = 'none';
    wikiSource.src = data.structure.source;
  });
  surfaceBtn1.addEventListener('click', () => {
    planetDesc.textContent = data.geology.content; 
    planetImg2.style.display = 'block'; 
    planetImg.src = data.images.planet; 
    planetImg2.src = data.images.geology;
    wikiSource.src = data.geology.source;
  });
  console.log(data);
}



getPlanet();

