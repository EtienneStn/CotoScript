window.onload = function () {
  chrome.storage.local.get('checkboxOff');
  chrome.storage.local.get('checked', function () {
    const allCheckbox = document.querySelectorAll(".tgl");
    console.log(allCheckbox);
    for (i = 0; i < allCheckbox.length; i++) {
      allCheckbox[i].addEventListener("click", checked)
    }
    function checked(){
      /* let selectedlist=[]; */
    
      for(let i=0; i<allCheckbox.length; i++)       
      {
        if(allCheckbox[i].value === "courir" && allCheckbox[i].checked==true)
        {
          let courirCheck = document.querySelector('').checked==true
          chrome.storage.local.set({'checked': courirCheck}, function() {
            console.log("Script Courir");
          });
        }
        else if(allCheckbox[i].value === "zalando" && allCheckbox[i].checked==true)
        {
          console.log("Script zalando")
        }
        else if(allCheckbox[i].value === "galerielafayette" && allCheckbox[i].checked==true)
        {
          console.log("Script galerielafayette")
        }
        else if(allCheckbox[i].value === "test" && allCheckbox[i].checked==true)
        {
          console.log("Script test")
        }
        else {
          let checboxOff = allCheckbox[i].checked==false
          chrome.storage.local.set({'checkboxOff': checboxOff}, function() {
            console.log("Script OFF : " + allCheckbox[i].value)
          });
        }
      }
      
      /* selectedlist.push(allCheckbox[i].value); */
    }
  });
  let getUrl = window.location
  console.log(getUrl)
}
