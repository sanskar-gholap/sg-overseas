const products = {

onion:{

title:"Fresh Onion",

image:"images/products/onion.jpg",

banner:"images/products/onion-banner.jpg",

description:"Premium export quality red onions directly sourced from Indian farms. Rich in flavour, long shelf life and suitable for worldwide export.",

origin:"India",

shelf:"45-60 Days",

packaging:"5kg,10kg,20kg,25kg Mesh Bag"

},

potato:{

title:"Fresh Potato",

image:"images/products/potato.jpg",

banner:"images/products/potato-banner.jpg",

description:"Fresh potatoes with smooth skin and excellent quality for export markets.",

origin:"India",

shelf:"60 Days",

packaging:"10kg,25kg Bags"

},

ginger:{

title:"Fresh Ginger",

image:"images/products/ginger.jpg",

banner:"images/products/ginger-banner.jpg",

description:"Naturally grown Indian ginger with strong aroma and high quality.",

origin:"India",

shelf:"90 Days",

packaging:"5kg & 10kg Cartons"

},

chilli:{

title:"Fresh Green Chilli",

image:"images/products/chilli.jpg",

banner:"images/products/chilli-banner.jpg",

description:"Fresh green chilli carefully packed for export.",

origin:"India",

shelf:"20 Days",

packaging:"2kg & 5kg Cartons"

},

"chilli-powder":{

title:"Chilli Powder",

image:"images/products/chilli-powder.jpg",

banner:"images/products/chilli-powder-banner.jpg",

description:"Finely ground premium chilli powder with rich colour and aroma.",

origin:"India",

shelf:"12 Months",

packaging:"250g,500g,1kg"

},

"onion-powder":{

title:"Onion Powder",

image:"images/products/onion-powder.jpg",

banner:"images/products/onion-powder-banner.jpg",

description:"Premium dehydrated onion powder for food industries.",

origin:"India",

shelf:"12 Months",

packaging:"500g & 1kg"

},

"tomato-powder":{

title:"Tomato Powder",

image:"images/products/tomato-powder.jpg",

banner:"images/products/tomato-banner.jpg",

description:"Natural tomato powder manufactured under hygienic conditions.",

origin:"India",

shelf:"12 Months",

packaging:"500g & 1kg"

},

turmeric:{

title:"Turmeric Powder",

image:"images/products/turmeric.jpg",

banner:"images/products/turmeric-banner.jpg",

description:"Curcumin rich turmeric powder with export quality packaging.",

origin:"India",

shelf:"18 Months",

packaging:"250g,500g,1kg"

}

};

const params=new URLSearchParams(window.location.search);

const key=params.get("product");

if(products[key]){

const p=products[key];

document.title=p.title+" | SG Companies";

document.getElementById("productTitle").innerHTML=p.title;

document.getElementById("productName").innerHTML=p.title;

document.getElementById("tableProduct").innerHTML=p.title;

document.getElementById("productDescription").innerHTML=p.description;

document.getElementById("productImage").src=p.image;

document.querySelector(".hero-image").src=p.banner;

}