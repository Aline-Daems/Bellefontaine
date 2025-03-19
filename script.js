const sliderItems = document.querySelectorAll(".sliderContentItem");

let i = 1; 

setInterval(() =>  {
    console.log("coucou");

    Array.from(sliderItems).forEach((item,index) => {

        if(i < sliderItems.length){
            item.style.transform = `translateX(-${i*100}%)`
        }
    })

    if(i < sliderItems.length) {
        i++
    }else {
        i=0;
    }
}, 2000)

