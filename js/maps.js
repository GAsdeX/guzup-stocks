//Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init() {
    var result = document.getElementById('result'), // для отладки

    // в этой версии координаты просто элементы массива (и они поменяны местами)
        destinations = {
            'Москва': [55.753559, 37.609218],
            'Санкт-Петербург': [59.938531, 30.313497],
            'Екатеринбург': [56.829748, 60.617435],
            'Махачкала': [56.829748, 60.617435],
            'Одесса': [46.466444, 30.7058]
        },

    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
        myMap = new ymaps.Map('map', {
            // При инициализации карты обязательно нужно указать
            // её центр и коэффициент масштабирования.
            center: destinations['Москва'], // Москва
            zoom: 10
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/baloon.png',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-3, -42]
        });

    myMap.geoObjects.add(myPlacemark);


    // куда скакать
    function clickGoto() {

        // город
        var pos = this.textContent;
        result.textContent = pos;

        // переходим по координатам
        myMap.panTo(destinations[pos], {
            flying: 1
        });

        return false;
    }

    // навешиваем обработчики
    var col = document.getElementsByClassName('goto');
    for (var i = 0, n = col.length; i < n; ++i) {
        col[i].onclick = clickGoto;
    }
}