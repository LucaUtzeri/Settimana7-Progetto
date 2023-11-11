const URL = "https://striveschool-api.herokuapp.com/api/product"
const params = new URLSearchParams(window.location.search).get("appId")
const editId = params.get("appId")

const editURL = editId ? "https://striveschool-api.herokuapp.com/api/product/" + editId : "https://striveschool-api.herokuapp.com/api/product/"
const method = editId ? "PUT" : "POST"


window.onload = () => {
    if (editURL) {

        fetch(editURL)// fetch di tipo GET su endpoint con id incorporato
            .then(resp => resp.json())
            .then(resourceObj => {

                const { name, imageUrl, description, price } = resourceObj

                document.getElementById("name").value = name
                document.getElementById("imageUrl").value = imageUrl
                document.getElementById("description").value = description
                document.getElementById("price").value = price

            })

        const submitBtn = document.getElementById("confirmBtn")
        submitBtn.innerText = "Edit"
        submitBtn.classList.remove("btn-success")
        submitBtn.classList.add("btn-warning")
        const delBtn = document.getElementById("delBtn")
        delBtn.classList.remove("d-none")
    }
}

let myForm = document.getElementById("myForm");

myForm.onsubmit = (e) => {
    e.preventDefault();
    const productObj = {
        name: document.getElementById("name").value,
        description: document.getElementById("description").value,
        brand: document.getElementById("brand").value,
        imageUrl: document.getElementById("imgurl").value,
        price: document.getElementById("price").value,
    };

    fetch(URL, {
        method: "POST",
        body: JSON.stringify(productObj),
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZWJlZjI1NGU4ODAwMTgzZjE4NzkiLCJpYXQiOjE2OTk2MDU0ODcsImV4cCI6MTcwMDgxNTA4N30.FWx-mvfCbT5qhqV4IYSpQpYOpBKRgP63cycYfeyzSNE",
            "Content-Type": "application/json"
        },
    })
        .then((resp) => {
            if (resp.ok) { return resp.json() }
        })
        .then((newProduct) => {
            console.log(newProduct)
            alert("New product successfully added.")
        })
        .catch(error => console.log("CATCH BLOCK", error))
}


