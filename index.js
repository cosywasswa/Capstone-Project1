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
  <div class="speaker1">
    <div class="img1">
      <img src="images/christiana2.PNG" alt="">
    </div>
    <div class="bio1">
      <h4>Christiana Figueres</h4>
      <p class="p1">Karen Christiana Figueres Olsen is a Costa Rican diplomat</p>
      <p class="p2">She was appointed Executive Secretary on Climate Change in July 2010</p>
    </div>
  </div>
  <div class="speaker2">
    <div class="img2">
      <img src="images/naomi2.PNG" alt="">
    </div>
    <div class="bio2">
      <h4>Naomi klein</h4>
      <p class="p1">Naomi A. Klein is a Canadian author, social activist, and filmmaker</p>
      <p class="p2"> her political analyses, support of ecofeminism, organized labour.</p>
    </div>
  </div>
  <div class="speaker3">
    <div class="img3">
      <img src="images/suzuki2.PNG" alt="">
    </div>
    <div class="bio3">
      <h4>David Suzuki</h4>
      <p class="p1">David Takayoshi Suzuki CC OBC FRSC is a Canadian academic</p>
      <p class="p2">Suzuki earned a PhD in zoology from the University of Chicago in 1961</p>
    </div>
  </div>
</div>
<div class="speakers-right">
  <div class="speaker4">
    <div class="img4">
      <img src="images/alexanda2.PNG" alt="">
    </div>
    <div class="bio4">
      <h4>Alexandra Palt </h4>
      <p class="p1"> Chief Sustainability Officer of L'Oreal; Lucas Joppa</p>
      <p class="p2">Chief Environmental Officer of Microsoft</p>
    </div>
  </div>
  <div class="speaker5">
    <div class="img5">
      <img src="images/bill2.PNG" alt="">
    </div>
    <div class="bio5">
      <h4>Bill Mckibben</h4>
      <p class="p1">McKibben is an American environmentalist</p>
      <p class="p2">journalist who has written extensively on global warming</p>
    </div>
  </div>
  <div class="speaker6">
    <div class="img6">
      <img src="images/alexanda2.PNG" alt="">
    </div>
    <div class="bio6">
      <h4>Alexandra Palt </h4>
      <p class="p1"> Chief Sustainability Officer of L'Oreal; Lucas Joppa</p>
      <p class="p2">Chief Environmental Officer of Microsoft</p>
    </div>
  </div>
</div>
  `;

 