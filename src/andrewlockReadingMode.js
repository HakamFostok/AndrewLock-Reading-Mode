removeElement('header');
removeElement('div.text-sm')
removeElement('footer.p-2');
removeElement('footer.p-2');
removeElement('footer.p-2');
removeElement('footer.mb-1');
removeElement('nav.mt-4');
removeElement('div.gsc-comments');
removeElement('aside.giscus');
removeElement('aside.relative.shadow-lg');
removeElement('div.flex.items-center.p-2.subb-body');
removeElement("#subbscribe");
removeElement("header > div");
removeElement("header > ul");

const mainHead = document.querySelector('header > h1');
mainHead.style.fontSize = '1.7rem';

const article = document.querySelector('article');
article.style.padding = '0';

const ps = document.querySelectorAll('p');
ps.forEach(p => {
    p.style.marginTop = '0';
    p.style.marginBottom = '5px';
});

const prosElements = document.querySelectorAll('.prose');
prosElements.forEach(element => {
    element.style.fontSize = '0.8rem';
    element.style.lineHeight = '1.5';
});

let headers = document.querySelectorAll('h2');
headers.forEach(header => {
    header.style.marginTop = '0';
    header.style.marginBottom = '0';
});

headers = document.querySelectorAll('h3');
headers.forEach(header => {
    header.style.marginTop = '0';
    header.style.marginBottom = '0';
});

const element = document.querySelector('main');
element.className = "relative block xl:flex justify-between";

function removeElement(elementName) {
    try {
        const element = document.querySelector(elementName);
        if (element && element.parentElement)
            element.parentElement.removeChild(element);
    } catch (ex) {
        console.log(`Exception when removing element "${elementName}"`);
        console.log(`Exception : ${ex}`);
    }
}