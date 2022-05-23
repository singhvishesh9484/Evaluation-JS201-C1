
let Data=JSON.parse(localStorage.getItem("products"));

Data.map(function(el,index){

    let box=document.createElement("div");

    let img=document.createElement("img");
    img.src=el.image;

    let type=document.createElement("p");
    type.innerText=el.type;

    let desc=document.createElement("p");
    desc.innerText=el.desc;

    let price=document.createElement("p");
    price.innerText=el.price;

    let btn=document.createElement("button");
    btn.setAttribute("id","remove_product")
    btn.innerText="Remove";

    btn.addEventListener("click",function(){
        removed(el,index)
    })

    box.append(img,type,desc,price,btn);
    document.getElementById("all_products").append(box);

    
    function removed(el,index){
        Data.splice(index,1);
        localStorage.setItem("products",JSON.stringify(Data))
        window.location.reload()
    }
})