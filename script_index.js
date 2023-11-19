function get() {
    try {
        const data = JSON.parse(localStorage.getItem('users.json')) || [];
        return data;
    } catch (error) {
        return [];
    }
}

let container = document.getElementById('container');
data = get();
data.forEach((product) => {
    container.innerHTML += `
        <div class="product_post">
        <img src="${product['picture']}" alt="">
        <h3>${product['name']}</h3>
        <h4>${product['price']}$</h4>
        </div>
    `;
});

console.log(1)
