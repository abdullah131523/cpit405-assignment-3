
 choice(); 
  
function choice(){
    
    var sel = document.createElement("select");
   sel.id = "ss";
    sel.onclick=sort;
     var op1 = document.createElement("option");
    sel.appendChild(op1)
    
    
    var op2 = document.createElement("option");
     var l = document.createTextNode("likes");
     op2.appendChild(l);
     
    
    sel.appendChild(op2);
    
    
    var op3 = document.createElement("option");
     var f = document.createTextNode("followers");
     op3.appendChild(f);
     
    
    sel.appendChild(op3);
    

    
    var op4 = document.createElement("option");
     var p = document.createTextNode("price");
     op4.appendChild(p);
     
    
    sel.appendChild(op4);
   
   
    
    
    
    
    document.body.appendChild(sel);
}


function compareLikes(a , b){
    return b.likes - a.likes;
}


function comparePrices(a , b){
    return b.price - a.price;
}


function compareFollowers(a , b){
    return b.followers - a.followers;
   
}



function sort(){
    var sorts = document.getElementById("ss");
    
    if(sorts.value == "likes"){
        images.sort(compareLikes);
        remove();
        
    } else if (sorts.value == "price"){
        images.sort(comparePrices);
        remove();
        
    }else if (sorts.value == "followers"){
        images.sort(compareFollowers);
        remove();
    }
    
    
}

function remove(){
    
    var myList = document.getElementById("list");
    
    while(myList.firstChild){
          myList.removeChild(myList.firstChild);
          }
    
    for(i =0; i < images.length; i++){
    
    

var liElement = document.createElement("li");
    
var imgElement = document.createElement("img");
    
        imgElement.src = images[i].src;

  
    myList.appendChild(liElement);
liElement.appendChild(imgElement);
}
   
    
}



var images = [
    {
    
    name: "death",
    likes: 20 ,
        price: 70 ,
    followers: 30 ,
    src: "death.jpg"
},
             
  {
  
      name: "Canyon-Glow",
    likes: 22 ,
       price: 80 ,
     followers: 50 , 
    src: "Canyon-Glow.jpg"
  
  },
    
     {
  
      name: "november-freeze",
    likes: 24 ,
          price: 75 ,
     followers: 40 ,
    src: "november-freeze.jpg"
  
 
  },
     {
  
      name: "sunrise",
    likes: 26 ,
          price: 90 ,
    followers: 10 , 
    src: "sunrise.jpg"
  
 
  },
    
     {
  
      name: "moss-glen-falls",
    likes: 28 ,
          price: 27 ,
     followers: 100 , 
    src: "moss-glen-falls.jpg"
  
 
  },
    
     {
  
      name: "single-tree",
    likes: 30 ,
          price: 30 ,
     followers: 300 , 
    src: "single-tree.jpg"
  
 
  },
    
      {
  
      name: "st-cyrus-wreck",
    likes: 32 ,
           price: 175 ,
     followers: 70 ,
    src: "st-cyrus-wreck.jpg"
  
 
  },
    
       {
  
      name: "wicked",
    likes: 34 ,
            price: 160 ,
     followers: 310  ,
    src: "wicked.jpg"
  
 
  },
    
      {
  
      name: "stone-barn-on-a-spring",
    likes: 36 ,
           price: 100 ,
     followers: 150 ,
    src: "stone-barn-on-a-spring.jpg"
  
 
  },
     {
  
      name: "nilgiri-south",
    likes: 38 ,
          price: 115 ,
     followers: 900 ,
    src: "nilgiri-south.jpg"
  
 
  },
    
     {
  
      name: "awesome-solitude",
    likes: 40 ,
          price: 23 ,
    followers: 800 ,
    src: "awesome-solitude.jpg"
  
 
  },
    
     {
  
      name: "hazy-reflections-at-scwabacher",
    likes: 42 ,
          price: 120 ,
     followers: 850 ,
    src: "hazy-reflections-at-scwabacher.jpg"
  
 
  },
    
     {
  
      name: "finding-heavenr",
    likes: 44 ,
          price: 16 ,
    followers: 400 ,
    src: "finding-heaven.jpg"
  
 
  },
    
    {
  
      name: "michal-karcz",
    likes: 46 ,
         price: 300 ,
     followers: 600 ,
    src: "michal-karcz.jpg "
  
 
  },
       
     {
  
      name: "beautiful",
    likes: 48 ,
          price: 290 ,
     followers: 200 ,
    src: " beautiful.jpg  "
  
 
  },
       
     {
  
      name: "the-crack-of-dawn",
    likes: 50 ,
          price: 420 ,
    followers: 220 ,
    src: "the-crack-of-dawn.jpg "
  
 
  },
    
      {
  
      name: "switzerland-of-america",
    likes: 52 ,
           price: 55 ,
     followers: 340 ,
    src: "switzerland-of-america.jpg "
  
 
  },
       
      {
  
      name: "nostalgia",
    likes: 56 ,
           price: 63 ,
     followers: 470 ,
    src: "nostalgia.jpg "
  
 
  },
       
     {
  
      name: "zumaia",
    likes: 60 ,
          price: 135 ,
    followers: 804 ,
    src: "zumaia.jpg "
  
 
  },
    
      {
  
      name: "sunflower-in-black-and-white",
    likes: 63 ,
           price: 440 ,
     followers: 390 ,
    src: "sunflower-in-black-and-white.jpg "
  
 
  },
    
      {
  
      name: "haunted-house",
    likes: 67 ,
           price: 114 ,
    followers: 1000 ,
    src: "haunted-house.jpg "
  
 
  },
    
     {
  
      name: "down-the-golden-path",
    likes: 70 ,
          price: 33 ,
    followers: 94 ,
    src: "down-the-golden-path.jpg  "
  
 
  },
    
      {
  
      name: "stillwater",
    likes: 75 ,
           price: 12 ,
    followers: 858 ,
    src: "stillwater.jpg   "
  
 
  },
    
      {
  
      name: "beyond",
    likes: 80 ,
           price: 21 ,
    followers: 777 ,
    src: "beyond.jpg  "
  
 
  },
    
     {
  
      name: "beyond",
    likes: 100 ,
          price: 88 ,
    followers: 389 ,
    src: "paper-airplanes.jpg "
  
 
  },
             ]

  

showing();


function showing(){
    
    
var ulElement = document.createElement("ul");
    ulElement.id = "list";
var i;
    
for(i =0; i < images.length; i++){
    
    

var liElement = document.createElement("li");
    
var imgElement = document.createElement("img");
    
        imgElement.src = images[i].src;

    ulElement.appendChild(liElement);
    
liElement.appendChild(imgElement);
}
    document.body.appendChild(ulElement);
}

