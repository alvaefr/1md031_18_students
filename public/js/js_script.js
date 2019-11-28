var document = window.document;

function MenuItem(name, img, kcal, adds,lactose, gluten) {
    this.name = name; 
    this.img = img;
    this.kCal = kcal;
    this.adds = adds;
    this.lactose = lactose;
    this.gluten = gluten;
    this.getName = function () {
        return this.name + ' ' + this.kCal;
    };
}

var listBurger = []

// Objects are then instantiated using the new keyword
listBurger.push(new MenuItem('Hallumibürger',"/img/halloumiburgare.jpg", '350 kCal', ["Picklad rödlök", "Soltorkadtomat", "Halloumi", "Avokado", "Ruccula", "Bürgerdressing", "Briochebröd"], true, false));

listBurger.push(new MenuItem("Cheezebürger", "/img/cheezebürgare.jpg", "400 kCal", ["Karamelliserad lök", "Cheddar", "Vegopuck", "Tomat", "Sallad", "Srirachadressing", "Bürgerbröd"], false, false)); 
                             
listBurger.push(new MenuItem("Greenbürger","/img/greenburgare.jpg", "360 kCal",["Rödkål", "Chilimayo", "Vegopuck", "Guacamole", "Sallad", "Bürgerbröd"], true, false));

listBurger.push(new MenuItem("Köttbürger", "/img/meatburger.jpg", "500 kCal", ["Tomat", "Rödlök", "Cheddar", "Köttpuck", "Sallad", "Ketchup", "Bürgerbröd"], false, false))

listBurger.push(new MenuItem("Godisbürger", "/img/candyburger.jpg", "200 kCal", ["Sött godis", "Surt godis", "Salt godis"], true, true))

function clickedButton() {
    console.log(document.getElementById("name").value);
           
    
}



//BUTTONCLICKER TEST
//function clickButton() {
//  console.log("Button Clicked");
//}

////object constructor function 
//function MenuItem(name, kcal, lactose, gluten) {
//    this.name = name; 
//    this.kCal = kcal;
//    this.lactose = lactose;
//    this.gluten = gluten;
//    this.getName = function () {
//        return this.name + ' ' + this.kCal;
//    };
//    
//}
//
//// Objects are then instantiated using the new keyword
//var halloumi = new MenuItem('Hallumiburger', '350', false, true);
//var cheeze = new MenuItem("Cheezeburger", "400", true, true); 
//var green = new MenuItem("Greenburger", "360", false, true);
//function that returns name and kcal for halloumi


//console.log(halloumi.getName() );
//console.log(cheeze.getName() );
//console.log(green.getName() );

//---------------------------------------------------------
      

//function MenuItem(name, kcal, adds,lactose, gluten) {
//    this.name = name; 
//    this.kCal = kcal;
//    this.adds = adds;
//    this.lactose = lactose;
//    this.gluten = gluten;
//    this.getName = function () {
//        return this.name + ' ' + this.kCal;
//    };
//}
//
//var listBurger = []
//
//// Objects are then instantiated using the new keyword
//listBurger.push(new MenuItem('Hallumiburger', '350 kCal', 'Sallad, Tomat', false, true));
//listBurger.push(new MenuItem("Cheezeburger", "400 kCal", 'Avokado',true, true)); 
//listBurger.push(new MenuItem("Greenburger", "360 kCal",'', false, true));

  
 
  
//var listburger2 = [ { name: "burgerA", stock: 2 }, { name: "burgerB", stock: 0 } ]

//document.getElementById("burgare").innerHTML = listBurger

//var myElement = document.getElementById("burgare");
//
//
//for (let i=0; i < listBurger.length; i++) 
//{
//        var listItem = document.createElement("li");
//        var name = document.createTextNode(listBurger[i].name + ' ');
//        var kcal = document.createTextNode(listBurger[i].kCal + ' ');
//        var add = document.createTextNode(listBurger[i].adds + ' ');
//        listItem.appendChild(name);
//        listItem.appendChild(kcal);
//        listItem.appendChild(add);
//        myElement.appendChild(listItem);
//        
//    
// 	if (listBurger[i].gluten){
//  var gluten = document.createTextNode("Gluten"+ ' ');
//  listItem.appendChild(gluten);
//  }
//  
//  if (listBurger[i].lactose){
//  var lactose = document.createTextNode("Laktos" + ' ');
//  listItem.appendChild(lactose);
//  }
//  
//}

