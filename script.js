  const template = document.querySelector("#mytemp").content
      dishes.forEach(listdishes);
/*/ we are telling it to make a function for each student/*/
function listdishes (dish) {
   const clone = template.cloneNode(true);
      const main = document.querySelector("main");
      const productlistLink = "http://kea-alt-del.dk/t5/api/productlist";
      const imgLink = "https://kea-alt-del.dk/t5/site/imgs/";


fetch("http://kea-alt-del.dk/t5/api/productlist").then(e=>e.json()).then(data=>data.forEach(showdata))


       function showdata (oneObject){
           console.log(oneObject.name);
      let clone = template.cloneNode(true);
      clone.querySelector("h3").textContent=oneObject.name;
      clone.querySelector("h2").textContent=oneObject.price + " " + "-kr";
      clone.querySelector("img").src=imgLink +"small/"+ oneObject.image
          + "-sm.jpg";
      clone.querySelector("img").alt=oneObject.name;


               clone.querySelector("p.soldout").textContent=dish.soldout;



           main.appendChild(clone);

};
