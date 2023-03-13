// Define variables for the menu items
const menuItems = [
    {
      name: "Pepperoni Pizza",
      description: "Tomato sauce, mozzarella cheese, pepperoni",
      price: 14.99,
      img: "pepperoni-pizza.jpg"
    },
    {
      name: "Vegetarian Pizza",
      description: "Tomato sauce, mozzarella cheese, onions, peppers, mushrooms",
      price: 13.99,
      img: "vegetarian-pizza.jpg"
    },
    {
      name: "Cheese Pizza",
      description: "Tomato sauce, mozzarella cheese",
      price: 12.99,
      img: "cheese-pizza.jpg"
    }
  ];
  
  // Define a function to generate the menu items HTML
  function generateMenuItemsHTML() {
    const menuItemsHTML = menuItems.map(item => `
      <li>
        <div class="menu-item">
          <img src="${item.img}" alt="${item.name}">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <span>$${item.price.toFixed(2)}</span>
          <button>Add to Order</button>
        </div>
      </li>
    `);
    return menuItemsHTML.join("");
  }
  
  // Insert the menu items HTML into the DOM
  const menuItemsUL = document.querySelector(".menu ul");
  menuItemsUL.innerHTML = generateMenuItemsHTML();
  
  // Define a function to handle adding an item to the order
  function handleAddToOrder(e) {
    const menuItem = e.target.closest(".menu-item");
    const itemName = menuItem.querySelector("h3").textContent;
    const itemPrice = parseFloat(menuItem.querySelector("span").textContent.slice(1));
    console.log(`Added ${itemName} to order for $${itemPrice.toFixed(2)}`);
  }
  
  // Add event listener to all "Add to Order" buttons
  const addToOrderButtons = document.querySelectorAll(".menu button");
  addToOrderButtons.forEach(button => {
    button.addEventListener("click", handleAddToOrder);
  });
  