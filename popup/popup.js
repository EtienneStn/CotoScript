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
        console.log("Script Courir")
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
      else{
        console.log("Script OFF : " + allCheckbox[i].value)
      }
      /* selectedlist.push(allCheckbox[i].value); */
  }
}
  /* let checkedSite = selectedlist;
  console.log(checkedSite)
  if((checkedSite))
  {
    if(checkedSite.find(element => element === "courir" ))
    {
      console.log("Script Courir")
    }

    if(checkedSite.find(element => element === "zalando"))
    {
      console.log("Script zalando")
    }

    if(checkedSite.find(element => element === "galerielafayette"))
    {
      console.log("Script galerielafayette")
    }

    if(checkedSite.find(element => element === "test"))
    {
      console.log("Script Courir")
    }
  }
  else
  {
    console.log("Scrip OFF")
  }
} */

/* function storageCheck(e) {
  const defaultValue = false;
  chrome.storage.sync.get(selectedlist);
  console.log(selectedlist)
}
 */
/* function storeSwitch() {
  var switchState = document.getElementById(allCheckbox).checked;
  chrome.storage.sync.set({activeSwitch: switchState}, function () {
    console.log('activeSwitch saved');
  });
}

document.getElementById(allCheckbox).addEventListener('change', storeSwitch); */
/* <div>
	<img src="logo128.png"/>

	<label class="switch">

		<input type="checkbox" id="activeSwitch"/>

		<span class="slider round"></span>

	</label>
	
	<script src="popup.js"></script>
</div> */