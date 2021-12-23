const size = document.querySelector('.swatches').children;
const sizeRange = size.length;
const inStock = document.querySelectorAll('.selectable');
const oss = document.querySelectorAll('.unselectable');
const sizeWanted = "35,5";
console.log(size);
console.log(inStock);
console.log(oss);
let inStockFormated = sizeRange.className === "selectable"
for(let i=0;i < size.length; i++){
    if(inStockFormated)
    {
        let sizeSplit = size[i];
        let sizeNumber = size[i].textContent;
        let sizeFormated = sizeNumber.replace(/ /g, "");
        console.log(sizeSplit)
        console.log(sizeFormated)
    }
}
let randSize = inStockFormated[Math.floor(Math.random() * inStockFormated.length)];
console.log("RandSize : ", randSize)
/* const sizeInstock = Array.from(inStock);
const sizeOSS = Array.from(oss); 
const sizeRange = sizeInstock.concat(sizeOSS) */


