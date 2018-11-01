let root = document.getElementById('root');
let body = document.body;
let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let coords = document.getElementById('coords');
let moveForward = 0;
let moveBackward = 0;
let currentPos = 0;

/*
left = 37
up = 38
right = 39
down = 40

*/
root.addEventListener('click', e => {
    root.classList.toggle('backwards');
    body.classList.toggle('reverse');

})

// b1.addEventListener('mousedown', e => {
//    currentPos += 96;
    
//     root.style.backgroundPosition = `-${currentPos}px -90px`;
//     coords.innerText = `-${currentPos}px -90px`;
// });

// b2.addEventListener('mousedown', e => {
//     if (currentPos !== 0) {
//         currentPos -= 96;
//         root.style.backgroundPosition = `-${currentPos}px -90px`;
//         coords.innerText = `-${currentPos}px -90px`;
//     }
// });

// window.addEventListener('scroll', e => {
//   root.style.backgroundPosition = `${scrollY}px 0px`;
// });
