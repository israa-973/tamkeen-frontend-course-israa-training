
let productsItems = document.getElementById("products");

fetch("https://dummyjson.com/products")
    .then((res) => {
        console.log(res);
        if (res.ok) {
            return res.json();
        } else {
            throw new Error("Something went wrong!");
        }
    })
    .then((data) => {
        console.log(data.products);
        data.products.forEach(
            (item) =>
            (productsItems.innerHTML += `
                <div class="col-lg-3 col-md-6 mb-4">
                    <div class="product-card h-100">
                        <div class="bg-light d-flex justify-content-center""><img class="img-fluid" src="${item.thumbnail}" /></div>
                        <div class="pt-3 d-flex justify-content-between">
                        <span class="h5 fw-light"> ${item.title}</span>
                        <span class="h5 fw-light text-color ms-2"> ${item.price}</span>
                       </div>
                    </div>
                </div>
            `),
        );
    })
    .catch((err) => console.log(err));
