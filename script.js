document.addEventListener('DOMContentLoaded', function () {
    const cars = [
        { name: 'Range Rover', price: 25000, image: 'components/car1.jpg' },
        { name: 'Mercedes', price: 30000, image: 'components/car2.jpg' },
        { name: 'Toyota Brobox', price: 35000, image: 'components/car3.jpg' },
        { name: 'Nissan Caravan', price: 40000, image: 'components/car4.jpg' },
        { name: 'Audi', price: 45000, image: 'components/car5.jpg' },
        { name: 'Lexus', price: 50000, image: 'components/car6.jpg' },
        { name: 'Toyota Prado', price: 55000, image: 'components/car7.jpg' },
        { name: 'Toyota Noah', price: 60000, image: 'components/car8.jpg' },
        { name: 'Toyota Foxy', price: 65000, image: 'components/car9.jpg' },
        { name: 'Toyota Camry', price: 70000, image: 'components/car10.jpg' }
    ];

    const carsContainer = document.querySelector('.cars');
    const cartAvatar = document.getElementById('cart-avatar');
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items').querySelector('ul');
    const totalPrice = document.getElementById('total-price');
    const checkoutButton = document.getElementById('checkout-btn');

    let itemCount = 0;
    let totalCost = 0;

    cars.forEach(car => {
        const carElement = document.createElement('div');
        carElement.classList.add('car');

        const image = document.createElement('img');
        image.src = car.image;
        image.alt = car.name;

        const name = document.createElement('h2');
        name.textContent = car.name;

        const price = document.createElement('p');
        price.textContent = `$${car.price}`;

        const addToCartButton = document.createElement('button');
        addToCartButton.textContent = 'Add to Cart';
        addToCartButton.setAttribute('data-price', car.price);

        carElement.appendChild(image);
        carElement.appendChild(name);
        carElement.appendChild(price);
        carElement.appendChild(addToCartButton);

        carsContainer.appendChild(carElement);

        addToCartButton.addEventListener('click', () => {
            itemCount++;
            cartCount.innerText = itemCount;

            const item = document.createElement('li');
            item.innerText = `${car.name}: $${car.price}`;
            cartItems.appendChild(item);

            totalCost += car.price;
            totalPrice.innerText = `Total: $${totalCost}`;

            addToCartButton.style.display = 'none';
        });
    });

    cartAvatar.addEventListener('click', () => {
        document.getElementById('cart-sidebar').classList.toggle('show');
    });
    checkoutButton.addEventListener('click', () => {
        window.open('https://www.paypal.com/invoice/p/#ARQN28DYXJ8BDXPK', '_blank');
    });
    
    checkoutButton.addEventListener('click', () => {
        alert(`Total Cost: $${totalCost}`);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('message-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
        const mailtoLink = `mailto:info@webcar.com?subject=Message from ${name}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    });
});
