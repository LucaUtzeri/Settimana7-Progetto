
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
            if (prod._id) {
                const row = document.getElementById("row")

                const col = document.createElement("div")
                col.className = "col-12"
                col.innerHTML = `<div>
                                    <img src=${prod.imageUrl} alt=${prod.description}>
                                </div>`

                row.appendChild(col)

            }
        })
        .catch(err => {
            console.log(err)
        })
}