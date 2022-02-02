document.addEventListener('DOMContentLoaded', function() {

    // Карта
    var myMap;

    ymaps.ready(init);

    function init() {
        myMap = new ymaps.Map("map", {
            center: [55.761512, 37.624462],
            zoom: 13
        }, );
        // Метка по адресу
        var myPlacemark = new ymaps.Placemark([55.769383, 37.638521], {}, {
            iconLayout: 'default#image',
            iconImageHref: '../img/map.svg',
            iconImageSize: [12, 12],
            iconImageOffset: [0, 0]
        });
        myMap.geoObjects.add(myPlacemark);
        // Удаление не нужных модулей с карты
        myMap.controls.remove('searchControl');
        myMap.controls.remove('trafficControl');
        myMap.controls.remove('fullscreenControl');
        myMap.controls.remove('typeSelector');
        myMap.controls.remove('zoomControl');
        myMap.controls.remove('geolocationControl');
        myMap.controls.remove('rulerControl');
    }
});

$(function() {
    $('.button-close').click(function() {
        $('.maps-info').toggleClass('maps-info__active');
    });
});

// document.querySelector('.button-close').addEventListener('click', function() {
//     document.querySelector('.maps-info').classList.remove('maps-info__active')
// });


$(function() {
    $('.button-close').click(function() {
        $(this).toggleClass('button-close-active');
    });
});