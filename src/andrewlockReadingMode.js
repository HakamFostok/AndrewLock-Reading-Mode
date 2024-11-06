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