const URL = "https://striveschool-api.herokuapp.com/api/product"

window.onload = () => {
    fetch(URL, {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZWJlZjI1NGU4ODAwMTgzZjE4NzkiLCJpYXQiOjE2OTk2MDU0ODcsImV4cCI6MTcwMDgxNTA4N30.FWx-mvfCbT5qhqV4IYSpQpYOpBKRgP63cycYfeyzSNE"
        },
    })
        .then(response => response.json())
        .then(products => {
            console.log(products);
            products.forEach((prod) => {
                if (prod.name) {
                    const myRow = document.getElementById("Library");

                    const col = document.createElement("div");
                    col.className = "col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2 mt-5";

                    const card = document.createElement("div");
                    card.className = "card  border border-success";
                    card.style = "height: 700px;"

                    const img = document.createElement("img");
                    img.className = "card-img-top h-50 object-fit-cover";
                    img.src = prod.imageUrl;

                    const cardBody = document.createElement("div");
                    cardBody.className = "card-body";

                    const cardTitle = document.createElement("h5");
                    cardTitle.className = "card-title";
                    cardTitle.innerText = prod.name;

                    const cardDesc = document.createElement("p");
                    cardDesc.className = "card-text";
                    cardDesc.innerText = prod.description;

                    const cardPrice = document.createElement("p");
                    cardPrice.className = "card-text";
                    cardPrice.innerText = prod.price + "€";

                    const detailBtn = document.createElement("button");
                    detailBtn.className = "btn btn-success ";
                    detailBtn.innerHTML = `<a href="./detail.html?appId=${prod._id}" class="text-decoration-none text-light">Details</a>`

                    const delBtn = document.createElement("button");
                    delBtn.className = "btn btn-outline-secondary";
                    delBtn.innerText = "Hide";

                    delBtn.onclick = function (e) {
                        e.target.closest(".card").remove()
                    }



                    cardBody.appendChild(cardTitle)
                    cardBody.appendChild(cardDesc)
                    cardBody.appendChild(cardPrice)
                    cardBody.appendChild(detailBtn)
                    cardBody.appendChild(delBtn)
                    card.appendChild(img)
                    card.appendChild(cardBody)
                    col.appendChild(card)
                    myRow.appendChild(col)
                }
            })

        })
        .catch(error => console.log(error))
}