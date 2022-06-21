
var container = document.createElement('div');
container.className = 'container';


var div = document.createElement('div');
div.innerText = "Rest Countries Pagination"
div.className = "d-flex justify-content-center title"

var row2 = document.createElement('div');
row2.className = 'row';


function createcolumn(classname, titleclass, titlename, imgclass, srcname, data1, data2, data3) {
  var col = document.createElement('div');
  col.className = 'col-lg-4 column'
  card = createCard(classname, titleclass, titlename, imgclass, srcname, data1, data2, data3);
  col.append(card)
  return col
}

function createCard(classname, titleclass, titlename, imgclass, srcname, data1, data2, data3) {
  var card = document.createElement('div');
  card.className = classname;
  var cardtitle = createcardtitle(titleclass, titlename)

  image = createimage(imgclass, srcname);
  data1 = createdata(data1)
  data2 = createdata(data2)
  data3 = createdata(data3)

  card.append(cardtitle, image, data1, data2, data3);
  return card;
}

function createcardtitle(titleclass, titlename) {
  var cardtitle = document.createElement('div');
  cardtitle.className = titleclass;
  cardtitle.innerHTML = titlename;
  return cardtitle;

}

function createimage(classname, srcname) {
  var image = document.createElement('img');
  image.setAttribute('class', classname);
  image.setAttribute('src', srcname);
  image.setAttribute('alt', "flag")
  return image;

}

function createdata(data) {
  var div = document.createElement('div');
  div.className = "card-text";
  div.innerHTML = data
  return div
}
var col;
//var url = "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
var url = "https://restcountries.com/v2/all"
//GET:read
let arrayList = [];
let page = 0;
var n=6;

function getdata() {
  var res = fetch(url)
  res.then((data) => data.json())
    .then(
      (data1) => {
        console.log(data1)
        for (var i = 0; i < 50; i++) {
          
          arrayList.push(data1[i])
        }
for (let i=0;i<page+n;i++){
   col = createcolumn('card', 'card-title', arrayList[i].name, "card-img-top", arrayList[i].flags.svg, `Capital: ${arrayList[i].capital}`, `Region: ${arrayList[i].region}`, `Counrtycode: ${arrayList[i].callingCodes[0]}`)
  row2.append(col);
}

        

      }).catch((err) => console.log(err))

}
getdata();


 const next=document.getElementById("nextButton")
        next.addEventListener("click",Fornext)
 const prev=document.getElementById("prevButton")
        prev.addEventListener("click",Forprev)
 const first=document.getElementById("firstButton")
        first.addEventListener("click",Forfirst)
 const last=document.getElementById("lastButton")
        last.addEventListener("click",Forlast)
                              
                              
 function Fornext(){
          page==arrayList.length-n?(page=0):(page+=n);
          row2.innerHTML="";
          for(let i=page; i<page+n; i++){
            col = createcolumn('card', 'card-title', arrayList[i].name, "card-img-top", arrayList[i].flags.svg, `Capital: ${arrayList[i].capital}`, `Region: ${arrayList[i].region}`, `Counrtycode: ${arrayList[i].callingCodes[0]}`)
            row2.append(col)
          }
        }

 function Forprev(){
          page== 0? (page=arrayList.length-n):(page-=n);
          row2.innerHTML="";
          for(let i=page; i<page+n; i++){
            col = createcolumn('card', 'card-title', arrayList[i].name, "card-img-top", arrayList[i].flags.svg, `Capital: ${arrayList[i].capital}`, `Region: ${arrayList[i].region}`, `Counrtycode: ${arrayList[i].callingCodes[0]}`)
            row2.append(col)
          }
        }

 function Forfirst(){
          page=0;
          row2.innerHTML="";
          for(let i=page; i<page+n; i++){
            col = createcolumn('card', 'card-title', arrayList[i].name, "card-img-top", arrayList[i].flags.svg, `Capital: ${arrayList[i].capital}`, `Region: ${arrayList[i].region}`, `Counrtycode: ${arrayList[i].callingCodes[0]}`)
            row2.append(col)
          }
        }

 function Forlast(){
          page = arrayList.length-n
          row2.innerHTML="";
          for(let i=page; i<page+n; i++){
            col = createcolumn('card', 'card-title', arrayList[i].name, "card-img-top", arrayList[i].flags.svg, `Capital: ${arrayList[i].capital}`, `Region: ${arrayList[i].region}`, `Counrtycode: ${arrayList[i].callingCodes[0]}`)
            row2.append(col)
          }
        }


container.append(div, row2);
document.body.append(container);