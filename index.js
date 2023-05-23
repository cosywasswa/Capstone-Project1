const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-mobile2');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.links').forEach((n) => n
  .addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }));

const speaker1 = [
  {
    name: 'Christiana Figueres',
    image: './images/christiana2.PNG',
    position: `Karen Christiana Figueres Olsen is a Costa Rican diplomat`,
    desc: 'She was appointed Executive Secretary on Climate Change in July 2010',
  },
];

const speaker2 = [
  {
    name: 'Naomi klein',
    image: './images/naomi2.PNG',
    position: `Naomi A. Klein is a Canadian author, social activist, and filmmaker`,
    desc: ' her political analyses, support of ecofeminism, organized labour.',
  },
];

const speaker3 = [
  {
    name: 'David Suzuki',
    image: './images/suzuki2.PNG',
    position: `David Takayoshi Suzuki CC OBC FRSC is a Canadian academic`,
    desc: ' Suzuki earned a PhD in zoology from the University of Chicago in 1961',
  },
];

const speaker4 = [
  {
    name: 'Alexandra Palt ',
    image: './images/alexanda2.PNG',
    position: `Chief Sustainability Officer of L'Oreal; Lucas Joppa`,
    desc: ' Chief Environmental Officer of Microsoft',
  },
];

const speaker5 = [
  {
    name: 'Bill Mckibben ',
    image: './images/bill2.PNG',
    position: `McKibben is an American environmentalist`,
    desc: ' journalist who has written extensively on global warming',
  },
];

const speaker6 = [
  {
    name: 'Alexandra Palt ',
    image: './images/alexanda2.PNG',
    position: ` Chief Sustainability Officer of L'Oreal; Lucas Joppa`,
    desc: 'Chief Environmental Officer of Microsoft',
  },
];

const container = document.querySelector('.container-speakers');
const speakers = document.createElement('div');
container.appendChild(speakers);
speakers.innerHTML = `
  <div class="speakers-container">
  <div class="hrtittle">
  <h2>Featured speakers</h2>
  <hr>
</div>
<div class="speakers-align">
<section class="speakers-desk">
  <div class="speakers-left">
  <article>
  <div class="speaker1">
    <div class="img1">
      <img src="${speaker1[0].image}" alt="">
    </div>
    <div class="bio1">
      <h4>${speaker1[0].name}</h4>
      <p class="p1">${speaker1[0].position}</p>
      <hr>
      <p class="p2">${speaker1[0].desc}</p>
    </div>
  </div>
  </article>
  <article>
  <div class="speaker2">
    <div class="img2">
      <img src="${speaker2[0].image}" alt="">
    </div>
    <div class="bio2">
      <h4>${speaker2[0].name}</h4>
      <p class="p1">${speaker2[0].position}</p>
      <hr>
      <p class="p2"> ${speaker2[0].desc}</p>
    </div>
  </div>
  </article>
  <article>
  <div class="speaker3">
    <div class="img3">
      <img src="${speaker3[0].image}" alt="">
    </div>
    <div class="bio3">
      <h4>${speaker3[0].name}</h4>
      <p class="p1">${speaker3[0].position}</p>
      <hr>
      <p class="p2">${speaker3[0].desc}</p>
    </div>
  </div>
</div>
<div class="speakers-right">
</article>
<article>
  <div class="speaker4">
    <div class="img4">
      <img src="${speaker4[0].image}" alt="">
    </div>
    <div class="bio4">
      <h4>${speaker4[0].name}</h4>
      <p class="p1"> ${speaker4[0].position}</p>
      <hr>
      <p class="p2">${speaker4[0].desc}</p>
    </div>
  </div>
  </article>
  <article>
  <div class="speaker5">
    <div class="img5">
      <img src="${speaker5[0].image}" alt="">
    </div>
    <div class="bio5">
      <h4>${speaker5[0].name}</h4>
      <p class="p1">${speaker5[0].position}</p>
      <hr>
      <p class="p2">${speaker5[0].desc}</p>
    </div>
  </div>
  </article>
  <article>
  <div class="speaker6">
    <div class="img6">
      <img src="${speaker6[0].image}" alt="">
    </div>
    <div class="bio6">
      <h4>${speaker6[0].name}</h4>
      <p class="p1">${speaker6[0].position}</p>
      <hr>
      <p class="p2">${speaker5[0].desc}</p>
    </div>
  </div>
</div>
</article>
  `;