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