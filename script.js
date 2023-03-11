const models = [
    {
        name: 'BMW 418d',
        image: './img/bmw.jpg',
        link: "https://www.cars-data.com/en/bmw-418d-gran-coupe-specs/75189"
    },
    {
        name: 'Honda Civic 1.7',
        image: './img/honda.jpg',
        link: "https://www.cars-data.com/en/honda-civic-1-7-ctdi-es-specs/16825"
    },
    {
        name: 'Mazda 6',
        image: './img/mazda.jpg',
        link: "https://www.cars-data.com/en/mazda-6-skyactiv-d-2-2-150-signature-specs/82158"
    },
    {
        name: 'Skoda Fabia',
        image: './img/skoda.jpg',
        link: "https://www.cars-data.com/en/skoda-fabia-combi-1-2-tsi-81kw-greentech-joy-specs/70023"
    },
    {
        name: 'volvo s90',
        image: './img/volvo.jpg',
        link: "https://www.cars-data.com/en/volvo-s90-b4-business-pro-specs/174615"
    }
]



var index = 0;
var slaytCount = models.length;
var interval;
let settings = {
    random : true,
    duration : 1500
}
let textValue = document.querySelector(".rangeValue");
let rangeValue = document.querySelector("#customRange2");
rangeValue.addEventListener("input", updateDuration);

slideAuto(settings);

document.querySelector('.fa-arrow-left').addEventListener("click", ()=>{
    index--;
    showSlide();
    // console.log(index);
})

document.querySelector('.fa-arrow-right').addEventListener("click", ()=>{
    index++
    showSlide();
    // console.log(index);
})

document.querySelectorAll(".arrow").forEach(e => {
    e.addEventListener("mouseenter", ()=>{ 
        clearInterval(interval); // mouseu üzerine gelince slayt durur
    })
});
document.querySelectorAll(".arrow").forEach(e => {
    e.addEventListener("mouseleave", ()=>{
        slideAuto(settings); // mouse u çekince slayt devam eder
    })
});




function updateDuration(event) {    //*! Done */
    if (event.target.id === 'customRange2') {
        settings.duration = parseInt(event.target.value);
        textSticker(settings.duration);
        // console.log(settings.duration);
    }if(rangeValue.addEventListener("click", ()=>{
        clearInterval(interval);
        slideAuto(settings)
        
    }))
    
     return settings.duration
}

console.log(settings.duration);

function textSticker(value){ // textContent changes according to slide speed
    if(value >= 0 && value <= 500){
        textValue.textContent = "Super Fast"
        textValue.setAttribute("style", "color: red" )
    }else if(value >= 501 && value <= 2000){
        textValue.textContent = "Fast"
        textValue.setAttribute("style", "color: green" )
    }else if(value >= 2001 && value <= 3000){
     textValue.textContent = "Slow"
     textValue.setAttribute("style", "color: orange" )
    }
    console.log(value);
}


function slideAuto(s){
    var prev;
    
    interval = setInterval(() => {
        if(s.random){
          do {
            index = Math.floor(Math.random() * slaytCount)
        } while (index == prev); //Equality produces a fairly new value. The slideshow shows random     pictures. two images are not displayed one above the other.
        prev = index;
        }else{
            if(slaytCount == index + 1 ){ // slideshow pictures one by one
                index = -1;
            }
            showSlide();
            // console.log(index);
            index++
            
        }
        isChecked();
        showSlide(index);
        
        
    }, settings.duration); //The updateDuration function returns a value to settings.duraction

}



function showSlide(){

    if(index < 0){
        index = slaytCount -1 
    }if(index >= slaytCount){
        index = 0;
    }
    

document.querySelector(".card-img-top").setAttribute('src', models[index].image)

document.querySelector(".card-title").textContent = models[index].name

document.querySelector(".btn-primary").setAttribute('href', models[index].link)
}

function isChecked(){ // random feature checkbox
   if(document.querySelector(".form-check-input").checked){
    settings.random = true;
}else{
    settings.random = false;
}
}

