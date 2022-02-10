let getInput = (a) => {
    let input = document.getElementById("input").value;
    console.log(input);
    getName(input);

};

document.querySelector(".input-search").addEventListener('keyup', (e) => {
    let input = document.querySelector('input').value;
    // If the key ENTER is pressed....
    if (e.which === 13) {
        getName(input);
    }
});





// Interacting with the Giphy API
let getName = (item) => {
    let query = item.split(' ').join('+')

    //2. Do the data stuff with API
    let url = "https://api.giphy.com/v1/gifs/search?q="+ query + "&api_key=ZZvgfdi4cOKxEu6jIapo44P94iVPpAj6";


    // AJAX Request
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open('GET', url);
    GiphyAJAXCall.send();


    GiphyAJAXCall.addEventListener("load", (e) => {
        let data = e.target.response;
        // console.log(data);
        pushToDom(data);
    });
};




//3. Show the GIF's
let pushToDom = (input) => {
    let response = JSON.parse(input);

    let container = document.querySelector(".js-container");

    let result = document.querySelector(".results");

    // clear(container);
    // clear(result);

    let imageUrls = response.data;

    imageUrls.forEach((image) => {
        let src = image.images.fixed_height.url;

        result.innerHTML = src.length + "gifs found";
        container.innerHTML += "<img src=\"" + src + "\" class=\'container-image\'>";
    });

    let clear = (item) => {
        item.innerHTML = "";
    };

};
