console.log('...index.js file ...');

async function setRandomImg(currImg, i) {

    const data = await fetch(`https://source.unsplash.com/random?sig=${i}`);
    const dataBlob = await data.blob();
    const imgURL = URL.createObjectURL(dataBlob);
    document.querySelector(currImg).src = imgURL;

}

const arrImages = [...document.querySelectorAll('img')];
const arrImagesClasses = arrImages.map(itm => '.' + itm.className)
    // console.log('arrImages',Array.isArray(arrImages)  ,arrImages);
    // console.log(arrImages[0].className);

console.log(arrImagesClasses);

for (const [i, imgName] of arrImagesClasses.entries()) {
    setRandomImg(imgName, i);
}