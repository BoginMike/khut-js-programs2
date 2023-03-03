
//Integrating JS DOM Creating and Rendering Elements
//const createPost = function ({ title, content }) {};
//https://7696adf77aa2e5945c66.clrg2.knowledgehut.com:3000/src


const siteTitle = document.getElementById('site-title');
const contentText = document.getElementsByClassName('content-text');
const siteDesc = document.querySelector('#site-description');
const contentDiv = document.querySelector('.content');
const altNavs = document.querySelectorAll('#nav > li:nth-of-type(odd)');

siteTitle.innerText = 'RedDOT Cloud Engineers';

 
Array.from(contentText).forEach((el) => {
  el.innerText = el.innerText.replace(
    'RedDot Technologies',
    'RedDOT Cloud Engineers'
  );
  el.innerText = el.innerText.toUpperCase();
});

siteDesc.innerText = 'Your trusted partner in the Cloud!';

contentDiv.style.textAlign = 'justify';

altNavs.forEach((el) => (el.style.backgroundColor = 'rgba(0,0,0,0.5)'));
