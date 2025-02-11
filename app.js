function update(){
    let str="";
    tableBody = document.getElementById('tbody')
    ItemJsonArrayStr = localStorage.getItem('ItemJson');
    ItemJsonArray = JSON.parse(ItemJsonArrayStr); 
    if(ItemJsonArray != null){
        ItemJsonArray.forEach((element,index)=>{
            str += `
            <div class="row">
              <div class="c1">${index+1}</div>
              <div class="c2">${element[0]}</div>
              <div class="c2">${element[1]}</div>
              <div class="c1 delb"><button onclick="Delete(${index})" class="delbtn">Delete</button></div>
            </div>
            `
        })
        tableBody.innerHTML = str;
    }
}
function Adding(){
    console.log("Appending list...") 
    tit= document.getElementById("title").value;
    desc = document.getElementById("description").value;
    if(localStorage.getItem('ItemJson')==null){
        ItemJsonArray = [];
        ItemJsonArray.push([tit, desc])
        localStorage.setItem('ItemJson', JSON.stringify(ItemJsonArray))
    }
    else{
        ItemJsonArrayStr = localStorage.getItem('ItemJson');
        ItemJsonArray = JSON.parse(ItemJsonArrayStr);
        ItemJsonArray.push([tit, desc]);
        localStorage.setItem('ItemJson',JSON.stringify(ItemJsonArray));
    }

    //add elements to the table
    update()
    document.getElementById("title").value = null;
    document.getElementById("description").value = null;
}
add = document.getElementById("add");
add.addEventListener("click",Adding)
update()//initially updating the data

function Delete(itemIndex){
    //deleting the element from the local storage of the pc
    console.log("Deleting...",itemIndex)
    ItemJsonArrayStr = localStorage.getItem('ItemJson');
    ItemJsonArray = JSON.parse(ItemJsonArrayStr);
    ItemJsonArray.forEach((element,index)=>{
        if(index==itemIndex){
            ItemJsonArray.splice(itemIndex,1);
        }
    })
    localStorage.setItem('ItemJson',JSON.stringify(ItemJsonArray));

    //To remove the element from table
    update()
}