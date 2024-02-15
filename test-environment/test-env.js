$(document).ready(function () {
    // $('.battery-log').text('123');

    // anime({
    //     targets: '.square',
    //     translateX: 250
    // });

    let logEL = document.querySelector('.battery-log');

    let battery = {
        charged: '0%',
        cycles: 120
    }

    // anime({
    //     targets: '.square',
    //     translateX: 250,
    //     rotateZ: 360,
    //     scale: 3,
    //     duration: 3000,
    //     loop: true
    // });
    let tl = anime.timeline({
        duration: 300,
        loop: true,
        direction: 'linear'
    });

    tl.add({
        targets: '.square',
        translateX: anime.stagger(5, {grid: [14, 5], from: 'center', axis: 'x'}),
        translateY: anime.stagger(5, {grid: [14, 5], from: 'center', axis: 'y'}),
        // rotateZ: anime.stagger([0, 90], {grid: [14, 5], from: 'center', axis: 'y'}),
        delay: anime.stagger(100, {grid:[14,5], from: 'center'}),
        easing: 'easeInOutQuad'
    }).add({
        targets: '.square',
        translateX: anime.stagger(0, {grid: [14, 5], from: 'center', axis: 'x'}),
        translateY: anime.stagger(0, {grid: [14, 5], from: 'center', axis: 'y'}),
        // rotateZ: anime.stagger([0, 0], {grid: [14, 5], from: 'center', axis: 'y'}),
        delay: anime.stagger(200, {grid:[14,5], from: 'center'}),
        easing: 'easeInOutQuad'
    }).add({
        targets: '.square',
        scale: [
            {
                value: .1,
                easing: 'easeOutSine',
                duration: 500
            }, 
            {
                value: 1,
                easing: 'easeInOutQuad',
                duration: 1200
            }
        ],
        // rotateZ: anime.stagger([0, 0], {grid: [14, 5], from: 'center', axis: 'y'}),
        delay: anime.stagger(200, {grid:[14,5], from: 'center'}),
        easing: 'easeInOutQuad'
    });

    anime({
        targets: battery,
        charged: '100%',
        cycles: 130,
        round: 1,
        easing: 'linear',
        update: function() {
            logEL.innerHTML = JSON.stringify(battery);
        },
        duration: 3000,
        direction: 'alternate',
        loop: true
    });

    anime({
        targets: '#customer-demo',
        innerHTML: [0, 1535],
        duration: 3000,
        round: 1
    });

    let path = anime.path('#demo-follow path');
    anime({
        targets: '#emoji',
        translateX: path('x'),
        translateY: path('y'),
        easing: 'linear',
        duration: 5000,
        loop: true,
        direction: 'reverse'
    });

    anime({
        targets: '#demo-draw path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 5000,
        // direction: 'reverse',
        loop: true
    });
});