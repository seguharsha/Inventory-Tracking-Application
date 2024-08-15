let formfinder=document.getElementById('form');
formfinder.style.display="none";
fetchcaller();
function fetchcaller(){
fetch('http://localhost:8080/Items').then(response=>response.json()).then((data)=>{
        display(data);
    }
    ).catch(err=>console.log(err));
}

    
function display(data){
    let x=document.getElementById('outer');
    x.innerHTML="";
    console.log(data);
   for (let ind of data){
    //name,description,price,category,quantity,brand,weight,color
    let res=`<div class="content">
    <p class="nameofouter"><span class="labell">Name :</span> ${ind.name}</p>
    <br>
    <p class="descriptionofouter"><span class="labell">Description :</span> ${ind.description}</p>
            <br>
            <p class="priceofouter"><span class="labell">Price :</span> ${ind.price} Rs</p>
            <br>
            <p class="categoryofouter"><span class="labell">Category :</span> ${ind.category}</p>
            <br>                        
            <p class="quantityofouter"><span class="labell">Quantity :</span> ${ind.quantity} Units</p>
            <br>
            <p class="brandofouter"><span class="labell">Brand :</span> ${ind.brand}</p>
            <br>
            <p class="weightofouter"><span class="labell">Weight :</span> ${ind.weight} grams</p>
            <br>
            <p class="colorofouter"><span class="labell">Color :</span> ${ind.color}</p>
            <div class="buttons">
            <button class="upta" onclick="update(${ind.id})" >Update</button>
            <button class="delta" onclick="deletee(${ind.id})" >Delete</button>
            <br>
        </div>`
           x.innerHTML+=res; 
   }
}

async function update(idd){
    formfinder.style.display="block";
    let op={};
 await   fetch('http://localhost:8080/Items').then(response=>response.json()).then((data)=>{
        op=data;
    }).catch(err=>console.log(err));
    
    console.log(op);
    console.log(idd);

    for(let arr in op){
        console.log(op[arr]["id"]+"asdasas")
        if(op[arr]["id"]==idd){
                
            console.log(arr+""+idd)
            console.log(op[arr]["name"])
                    f=1;
                    document.getElementById('formname').value=op[arr]["name"]
                    document.getElementById('formdescription').value=op[arr]["description"]
                    document.getElementById('formprice').value=op[arr]["price"]
                    document.getElementById('formcategory').value=op[arr]["category"]
                    document.getElementById('formquantity').value=op[arr]["quantity"]
                    document.getElementById('formbrand').value=op[arr]["brand"]
                    document.getElementById('formweight').value=op[arr]["weight"]
                    document.getElementById('formcolor').value=op[arr]["color"]

                 
                    break;
                }
            }    
            let s = document.getElementById('submit');
           
     s.replaceWith(s.cloneNode(true));
              s = document.getElementById('submit');
        
            s.addEventListener('click', async () => {    
                if((document.getElementById('formname').value).length===0){
                        alert("ItemName should not be empty")
                        return
                }
                if((document.getElementById('formdescription').value).length==0){
                    alert("Description should not be empty")
                    return

            }
            if((document.getElementById('formcategory').value).length==0){
                alert("Category should not be empty")
                return

        }
        if((document.getElementById('formbrand').value).length==0){
            alert("Brand should not be empty")
            return

    }
if((document.getElementById('formcolor').value).length==0){
    alert("Color should not be empty")
    return
}

let x=document.getElementById('formprice').value;
x=String(x)
let xy=String(document.getElementById('formquantity').value);
let xyz=String(document.getElementById('formweight').value)
            if(parseInt(document.getElementById('formprice').value)<=0||x.length==0){
                alert("the price should greater than 0");
                // x.removeEventListener();
                return;
            }
            if(parseInt(document.getElementById('formquantity').value)<=0||xy.length==0){
                alert("the quantity should greater than 0");
                        return;
            }
            if(parseInt(document.getElementById('formweight').value)<=0||xyz.length==0){
                alert("the weight should greater than 0");
                 return;
            }



       
             else{
                await fetch(`http://localhost:8080/Items/${idd}`, {
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: document.getElementById('formname').value,
                        description: document.getElementById('formdescription').value,
                        price: document.getElementById('formprice').value,
                        category: document.getElementById('formcategory').value,
                        quantity: document.getElementById('formquantity').value,
                        brand: document.getElementById('formbrand').value,
                        weight: document.getElementById('formweight').value,
                        color: document.getElementById('formcolor').value,
                    })
                })
                .then(response => response.json())
            
                .catch(err => console.log(err));
        
               document.getElementById('formname').value = "";
                    document.getElementById('formdescription').value = "";
        document.getElementById('formprice').value = "";
                 document.getElementById('formcategory').value = "";
               document.getElementById('formquantity').value = "";
                 document.getElementById('formbrand').value = "";
     
                 document.getElementById('formweight').value = "";
                document.getElementById('formcolor').value = "";
        
                formfinder.style.display = "none";
                fetchcaller();
                alert("Item updated");
            }
            });
            
        }

function deletee(idd){
    fetch(`http://localhost:8080/Items/${idd}`,{method:"DELETE"}).then(response=>response.json).catch(err=>console.log(err));
        fetchcaller();
    }


     function createItem(){
        formfinder.style.display="block";
        document.getElementById('formname').value = "";
        document.getElementById('formdescription').value = "";
document.getElementById('formprice').value = "";
     document.getElementById('formcategory').value = "";
   document.getElementById('formquantity').value = "";
     document.getElementById('formbrand').value = "";

     document.getElementById('formweight').value = "";
    document.getElementById('formcolor').value = "";
        let x=document.getElementById('submit');

        let nam="",des="",pric=0,cat="",quant=0,bran="",wei=0,col=""
        x.replaceWith(x.cloneNode(true))
        x=document.getElementById('submit');
        x.addEventListener('click',()=>{
            if((document.getElementById('formname').value).length==0){
                alert("ItemName should not be empty")
                return
        }
        if((document.getElementById('formdescription').value).length==0){
            alert("Description should not be empty")
            return

    }
    if((document.getElementById('formcategory').value).length==0){
        alert("Category should not be empty")
        return

}
if((document.getElementById('formbrand').value).length==0){
    alert("Brand should not be empty")
    return

}
if((document.getElementById('formcolor').value).length==0){
alert("Color should not be empty")
return
}
let x=document.getElementById('formprice').value;
x=String(x)
let xy=String(document.getElementById('formquantity').value);
let xyz=String(document.getElementById('formweight').value)
            if(parseInt(document.getElementById('formprice').value)<=0||x.length==0){
                alert("the price should greater than 0");
                // x.removeEventListener();
                return;
            }
            if(parseInt(document.getElementById('formquantity').value)<=0||xy.length==0){
                alert("the quantity should greater than 0");
                        return;
            }
            if(parseInt(document.getElementById('formweight').value)<=0||xyz.length==0){
                alert("the weight should greater than 0");
                 return;
            }


            nam=document.getElementById('formname').value
               des=document.getElementById('formdescription').value
               pric= document.getElementById('formprice').value
            cat= document.getElementById('formcategory').value              
              quant=  document.getElementById('formquantity').value
              
               bran= document.getElementById('formbrand').value
               wei= document.getElementById('formweight').value
               col= document.getElementById('formcolor').value
          fetch(`http://localhost:8080/Items/`,{
              method:"POST",
              headers: {
                  'Content-Type': 'application/json'
               },
     body:JSON.stringify({
        name:nam,
        description: des,
        price: pric,
        category: cat,
        quantity: quant,
        brand: bran,
        weight: wei,
        color: col
       
   })
}).then(response=>response.json()).then().catch(err=>console.log(err));
document.getElementById('formname').value=""
    document.getElementById('formdescription').value=""
    document.getElementById('formprice').value=""
    document.getElementById('formcategory').value=""
    document.getElementById('formquantity').value=""
    document.getElementById('formbrand').value=""
    document.getElementById('formweight').value=""
    document.getElementById('formcolor').value="";
    formfinder.style.display="none";
    fetchcaller();
    
    alert("Item created");
})
}