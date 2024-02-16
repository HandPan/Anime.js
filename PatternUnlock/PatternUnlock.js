let drawing = false;
$(document).ready(function () {
    // buildPattern('15436789');
    // buildPattern('124536987');
    // buildPattern('154984');
    // buildPattern('139719647349761284268');
    idlePattern(0);
    
    document.getElementById('user-in').addEventListener('input', (event) => {
        if (event.target.value.length > 81 || +event.target.value === 'NaN') {
            console.error('Error in input value!');
            return
        }

        drawing = true;
        buildPattern(event.target.value);
        animate();
    });
});

let idlePattern = (i) => {
    if (drawing) {
        return
    }

    let patternLookup = {
        0: '139719647349761284268',
        1: '284627832',
        2: '4567891234',
        3: '842697136186738',
        4: '467294',
        5: '4869753178914263'
    }

    buildPattern(patternLookup[i]);

    anime({
        targets: '#demo-svg path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 5000,
        complete: () => {
            if (drawing) {
                return
            }

            anime({
                targets: '#demo-svg path',
                strokeDashoffset: [0, anime.setDashoffset],
                easing: 'easeInOutSine',
                duration: 5000,
                delay: 2000,
                complete: () => {
                    if (drawing) {
                        return
                    }

                    idlePattern((i+1)%Object.keys(patternLookup).length);
                }
            });
        }
    });
}

let buildPattern = (pattern) => {

    let posLookup = {
        1: [0, 0],
        2: [100, 0],
        3: [200, 0],
        4: [0, 100],
        5: [100, 100],
        6: [200, 100],
        7: [0, 200],
        8: [100, 200],
        9: [200, 200]
    }

    let path = "M";

    for (let i = 0; i < pattern.length-1; i++) {
        path += posLookup[pattern[i]];
        path += 'L';
    }

    path += posLookup[pattern[pattern.length-1]];

    document.getElementById('demo-path').setAttribute('d', path);

}

let animate = () => {
    anime({
        targets: '#demo-svg path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 5000,
        delay: 1000
    });
}