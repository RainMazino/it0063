function showPopup(dish) {
    const data = {
        'adobo': {title: 'ADOBO', desc: 'A classic Filipino dish with rich flavors.', img: 'adobo.jpg', info: 'Address: Manila, Philippines\nCategory: Filipino\nOpen Time: 10 AM - 9 PM\nPrice: 350 PHP'},
        'kaiseki': {title: 'KAISEKI', desc: 'A traditional multi-course Japanese meal.', img: 'kaiseki.jpg', info: 'Address: Kyoto, Japan\nCategory: Japanese\nOpen Time: 11 AM - 10 PM\nPrice: 5000 PHP'},
        'beefwellington': {title: 'BEEF WELLINGTON', desc: 'A luxurious dish wrapped in flaky pastry.', img: 'beef wellington.jpg', info: 'Address: London, UK\nCategory: United Kingdom\nOpen Time: 12 PM - 10 PM\nPrice: 2000 PHP'},
        'temanalamb': {title: 'TEMANA LAMB', desc: 'A premium lamb dish with exquisite taste.', img: 'temanalamb.jpg', info: 'Address: Auckland, New Zealand\nCategory: New Zealand\nOpen Time: 10 AM - 8 PM\nPrice: 1800 PHP'}
    };
    document.getElementById('popup-title').innerText = data[dish].title;
    document.getElementById('popup-description').innerText = data[dish].desc;
    document.getElementById('popup-info').innerText = data[dish].info;
    document.getElementById('popup-image').src = data[dish].img;
    document.getElementById('popup').classList.add('show');
}

function closePopup() {
    document.getElementById('popup').classList.remove('show');
}