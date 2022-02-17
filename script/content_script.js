const timeAtc = 222222;
getSnkrs();
// let pick = await randomPick();
// let cart = await atc();
// let ship = await redirect('https://www.courir.com/fr/cart');
const getSnkrs =  function () {
    const arrayFunction = [randomPick(), atc(), redir()]
    let i = -1
    setInterval(() => {
        if (i < arrayFunction.length) {
            i++
            console.log(i);
            // arrayFunction[i]
        }
    }, 5000);
}
// await atc();
// await redirect('https://www.courir.com/fr/cart');
const redir = () => {
    redirect('https://www.courir.com/*/cart');
}
const randomPick = () => {
    const inStock = document.querySelectorAll('.selectable');
    const oss = document.querySelectorAll('.unselectable');
    let randSize = Math.floor(Math.random() * inStock.length);
    let randValue = inStock[randSize];
    console.log("RandSize : ", randValue);
    let sizeSelected = randValue.childNodes[1];
    console.log(sizeSelected);
    sizeSelected.click()
    // setTimeout(
    //     sizeSelected.click(), timeAtc
    // );
}
const atc = () => {
    const ATCButton = document.querySelector('#add-to-cart');
    ATCButton.click();
}

const redirect = (url) => {
    window.location.href = url;
}


/* let get = function (url) {
    var req = new XMLHttpRequest()
    req.open('GET', url, true);
} */
//let getUrl = window.location
//console.log(getUrl)
//let url = get('file:///D:/Code/Coto/CotoFnF/Script/popup/cotoscript-popup.html');
//let button = url.querySelector('.tgl-button')
//console.log(button)



//    const size = document.querySelector('.swatches').children;
//    const sizeRange = size.length;
//    for(let i=0;i < size.length; i++){
//     if(size[i].className === "selectable")
//     {
//         let array = [];
//         let sizeSelectable = size[i];
//         let arraySelectable = array.push(sizeSelectable)
//         console.log(array)
//         /* let sizeSplit = size[i];
//         let sizeNumber = size[i].textContent;
//         let sizeFormated = sizeNumber.replace(/ /g, "");
//         console.log(sizeSplit)
//         console.log(sizeFormated) */
//     }
// }
// const sizeInstock = Array.from(inStock);
// const sizeOSS = Array.from(oss); 
// const sizeRange = sizeInstock.concat(sizeOSS)