function get() {
    try {
        const data = JSON.parse(localStorage.getItem('users.json')) || [];
        return data;
    } catch (error) {
        return [];
    }
}

function add() {
    let product_name = document.getElementById('product_name').value;
    let product_price = document.getElementById('product_price').value;
    let product_picture = document.getElementById('product_picture').value;
    const data = get();
    id = 1;
    if (data.length != 0) {
        id = data[data.length - 1]['id'] + 1;
    }
    const product = {
        id: id,
        name: product_name,
        price: product_price,
        picture: product_picture,
    };
    data.push(product);
    localStorage.setItem('users.json', JSON.stringify(data));
}