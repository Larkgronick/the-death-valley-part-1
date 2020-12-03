import './style.scss';

//popups

let modal = false;

const select = document.getElementById('gallery');
const close = document.getElementById('modal__content_close');

function popup(){    
        if(modal === false){
            document.getElementById('modal').style.display = 'block';
            modal = true;
        } else {
            document.getElementById('modal').style.display = 'none';
            modal = false;
    }

}

select.addEventListener('click', (image)=> {
    popup()
    document.getElementById('modal__content_image').src = image.target.src;

});

close.addEventListener('click', popup)


//load map

let myMap;
ymaps.ready(init);

function init () {
    myMap = new ymaps.Map('map', {
        center: [21.293094, -157.825685],
        zoom: 14
    }, {
        searchControlProvider: 'yandex#search'
    });
    
}

//prevent form submit

const submit = document.getElementById('submit-button');
function handleForm(event){ 
    event.preventDefault(); 
} 
submit.addEventListener('click', handleForm);
