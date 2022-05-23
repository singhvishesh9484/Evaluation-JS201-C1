//store the products array in localstorage as "products"

let arr = JSON.parse(localStorage.getItem("products"))||[];

function Products(t,d,p,i){
    this.type=t;
    this.desc=d;
    this.price=p;
    this.image=i;
}

function storeProducts(el){
    el.preventDefault()

    let form=document.getElementById("products");

    let type=form.type.value;

    let desc=form.desc.value;

    let price=form.price.value;

    let image=form.image.value;

    //console.log(type,desc,price,image)

    let prod= new Products(type,desc,price,image)

    arr.push(prod)

    localStorage.setItem("products",JSON.stringify(arr))
    window.location.reload()
}
