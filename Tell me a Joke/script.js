let options = [
" hey i am anusha",
" hey i am anusha",
" hey i am anusha"
];


function telljoke() {
    let random = Math.floor(Math.random() * options.length);
    const picked = options[random];
    console.log(`${picked}`);

    document.getElementById("joke").textContent = picked;
}