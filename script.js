let currentPrice = 0;

function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}

function scrollToProducts() {
    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });
}

function openOrder(name, price) {
    currentPrice = price;
    document.getElementById("productName").innerText = name;
    document.getElementById("nights").value = 1;
    document.getElementById("orderModal").style.display = "flex";
    updateTotal();
}

function closeOrder() {
    document.getElementById("orderModal").style.display = "none";
}

function updateTotal() {
    let nights = document.getElementById("nights").value;
    document.getElementById("total").innerText = currentPrice * nights;
}