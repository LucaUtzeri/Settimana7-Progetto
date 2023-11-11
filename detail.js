
const param = new URLSearchParams(window.location.search).get("appId")
console.log(param)
window.onload = () => {

    fetch("https://striveschool-api.herokuapp.com/api/product/" + param, {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZWJlZjI1NGU4ODAwMTgzZjE4NzkiLCJpYXQiOjE2OTk2MDU0ODcsImV4cCI6MTcwMDgxNTA4N30.FWx-mvfCbT5qhqV4IYSpQpYOpBKRgP63cycYfeyzSNE"
        },
    })

        .then(resp => resp.json())
        .then(prod => {

            const row = document.getElementById("detailImg")

            const col = document.createElement("div")
            col.className = "col-12"
            col.innerHTML = `<div class="d-flex justify-content-center mb-5">
            <img src=${prod.imageUrl} alt=${prod.description} style="width: 60%; border-radius: 50px;">
            </div>`
            const colTitle = document.createElement("div")
            col.className = "col-12"
            colTitle.innerHTML = `<h1 class="bg-dark p-5 text-start" style="border: solid 2px white; border-radius: 10px">${prod.description}</h1>`

            row.appendChild(col)
            row.appendChild(colTitle)
        })
        .catch(err => {
            console.log(err)
        })
} 