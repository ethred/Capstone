const menuIcon = document.querySelector('.mobile-menu .menu-icon');
const closeIcon = document.querySelector('.mobile-menu-contaner .close-icon');
const linksa = document.querySelector('.mobile-menu-contaner ul ');
const seemore = document.querySelector('.seeMore');
const seeless = document.querySelector('.seeLess');

menuIcon.addEventListener('click', () => {
  document.getElementById('mobile-menu-contaner').style.display = 'flex';
});

closeIcon.addEventListener('click', () => {
  document.getElementById('mobile-menu-contaner').style.display = 'none';
});

linksa.addEventListener('click', () => {
  document.getElementById('mobile-menu-contaner').style.display = 'none';
});

// create Experts object
const Experts = [
  {
    id: 'first',
    ExpertInfo: ['Yochai Benkler', 'Directer Art center'],
    description: ['  Berkier studies coom-based peer products and published his seminal book,The Wealth of Network in 2006 '],
    imgSrc: 'images/speaker_01 1.png',
  },
  {
    id: 'second',
    ExpertInfo: ['Kinam Chone', 'Directer Art center'],
    description: ['  Berkier studies coom-based peer products and published his seminal book,The Wealth of Network in 2006 '],
    imgSrc: 'images/speaker_02.png',
  },
  {
    id: 'third',
    ExpertInfo: ['SohYeong Noh', 'Directer Art center'],
    description: ['  Berkier studies coom-based peer products and published his seminal book,The Wealth of Network in 2006 '],
    imgSrc: './images/speaker_03.png',
  },
  {
    id: 'fourth',
    ExpertInfo: ['Julia Leda', 'Directer Art center'],
    description: ['  Berkier studies coom-based peer products and published his seminal book,The Wealth of Network in 2006 '],
    imgSrc: './images/speaker_04.png',
  },
  {
    id: 'fifth',
    ExpertInfo: ['Lila Tritikov', 'Directer Art center'],
    description: ['  Berkier studies coom-based peer products and published his seminal book,The Wealth of Network in 2006 '],
    imgSrc: './images/speaker_05.png',
  },
  {
    id: 'sixth',
    ExpertInfo: ['Ryan Merkely', 'Directer Art center'],
    description: ['  Berkier studies coom-based peer products and published his seminal book,The Wealth of Network in 2006 '],
    imgSrc: 'images/speaker_06.png',
  },
];
// SELECT ELEMENTS
const ExpertSection = document.querySelector('.experts-cards');

// render the Experts
function renderExperts() {
  Experts.forEach((expert) => {
    ExpertSection.innerHTML += `
          <div id="${expert.id}" class="community-expert  ${expert.id} ">
              <img src="${expert.imgSrc}" alt="communit-expert">
              <div class="expert-detail">
                  <span class="expert-name">${expert.ExpertInfo[0]}</span>
                  <span class="expert-position">${expert.ExpertInfo[1]}</span>
                  <p>
                     ${expert.description} 
                  </p>
              </div>
          </div>
      
          `;
  });
}

renderExperts();

seeless.addEventListener('click', () => {
  document.getElementById('second').style.display = 'none';
  document.getElementById('fourth').style.display = 'none';
  document.getElementById('fifth').style.display = 'none';
  document.getElementById('sixth').style.display = 'none';
  document.getElementById('seeMore').style.display = ' flex';
  document.getElementById('seeLess').style.display = ' none';
});

seemore.addEventListener('click', () => {
  document.getElementById('second').style.display = 'flex';
  document.getElementById('fourth').style.display = 'flex';
  document.getElementById('fifth').style.display = 'flex';
  document.getElementById('sixth').style.display = 'flex';
  document.getElementById('seeMore').style.display = 'none';
  document.getElementById('seeLess').style.display = 'flex';
});
