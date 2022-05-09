function moveCursor(e){
    let cursor = document.querySelector('.cursor');
    cursor.style.left = e.clientX+'px';
    cursor.style.top = e.clientY+'px';

    console.log(e);
}