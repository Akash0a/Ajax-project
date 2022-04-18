// Get Request in Ajax

// let post = document.getElementById("post");

// post.addEventListener('click', function () {
//     // console.log("hello");

//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', 'text.txt', true);
//     // console.log("im get request")

//     xhr.onreadystatechange = function () {
//         console.log("Ready state is " + xhr.readyState)
//     }

//     xhr.onload = function () {
//         if (this.status === 200) {
//             console.log(this.responseText);
//         } else {
//             console.log("page is not found");
//         }
//     }
//     xhr.send();
// })

// Post Request in Ajax

// let post = document.getElementById("post");

// post.addEventListener('click', function () {
//     // console.log("hello");

//     let xhr = new XMLHttpRequest();
//     xhr.open('POST', 'https://fakestoreapi.com/products', true);
//     // console.log("im get request")

//     xhr.onreadystatechange = function () {
//         console.log("Ready state is " + xhr.readyState)
//     }

//     xhr.onload = function () {
//         if (this.status === 200) {
//             console.log(this.responseText);
//         } else {
//             console.log("page is not found");
//         }
//     }
//     data = { title: "Ajax tutorial" }
//     xhr.send();
// })

let getData = document.getElementById("getData");
getData.addEventListener('click', function () {
    // alert("hey");

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://fakestoreapi.com/products', true)

    xhr.onreadystatechange = function () {
        console.log("Ready state is " + xhr.readyState)
    }

    xhr.onload = function () {
        if (this.status === 200) {

            let objectData = JSON.parse(this.responseText);
            console.log(objectData);
            /* data is converted to object */


            // console.log(this.responseText) 
            /* get all data from object */

            let table_data = document.getElementById("table_data");

            data = "";
            table_data.innerHTML = "hello";




        }
    }
    xhr.send();
})