function Cart(localStorageKey) {
  //Cart using Pascal Case
  const cart = {
    //use this instead of cart (outter object)
    cartItems: undefined,

    loadFromStorage() {
      this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));

      if (!this.cartItems) {
        this.cartItems = [
          {
            productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            quantity: 2,
            deliveryOptionId: "1",
          },
          {
            productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
            quantity: 1,
            deliveryOptionId: "2",
          },
        ];
      }
    },

    saveToStorage() {
      localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
    },

    addToCart(productId) {
      let addedMessageTimeoutId; //using closure
      let matchingItem;

      this.cartItems.forEach((cartItem) => {
        if (productId === cartItem.productId) {
          matchingItem = cartItem;
        }
      });

      const quantitySelector = document.querySelector(
        `.js-quantity-selector-${productId}`
      );
      const quantity = Number(quantitySelector.value);

      if (matchingItem) {
        matchingItem.quantity += 1;
      } else {
        this.cartItems.push({
          productId,
          quantity,
          deliveryOptionId: "1",
        });
      }

      const addedMessage = document.querySelector(
        `.js-added-to-cart-${productId}`
      );
      addedMessage.classList.add("added-to-cart-visible");

      if (addedMessageTimeoutId) {
        clearTimeout(addedMessageTimeoutId);
      }
      const timeoutId = setTimeout(() => {
        addedMessage.classList.remove("added-to-cart-visible");
      }, 2000);

      addedMessageTimeoutId = timeoutId;
      this.saveToStorage();
    },

    removeFromCart(productId) {
      const newCart = [];
      this.cartItems.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
          newCart.push(cartItem);
        }
      });

      this.cartItems = newCart;
      this.saveToStorage();
    },

    updateDeliveryOption(productId, deliveryOptionId) {
      let matchingItem;

      this.cartItems.forEach((cartItem) => {
        if (productId === cartItem.productId) {
          matchingItem = cartItem;
        }
      });
      matchingItem.deliveryOptionId = deliveryOptionId;

      this.saveToStorage();
    },
  };
  return cart;
}

const cart = Cart("cart-oop");
const businessCart = Cart("cart-busines");

cart.loadFromStorage();
businessCart.loadFromStorage();

console.log("Cart", cart);
console.log("Business Cart", businessCart);
