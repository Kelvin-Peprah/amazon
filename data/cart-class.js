class Cart {
	cartItems;
	#localStorageKey;

	constructor(localStorageKey) {
		this.#localStorageKey = localStorageKey;
		this.loadFromStorage();
	}

	loadFromStorage() {
		this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey)) || [
			{
				productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
				quantity: 2,
				deliveryOptionId: '1',
			},
			{
				productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
				quantity: 1,
				deliveryOptionId: '2',
			},
		];
	}
	saveToStorage() {
		localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
	}

	addToCart(productId) {
		/* const quantitySelector = document.querySelector(
    `.js-quantity-selector-${productId}`
  );

  const selectQuantity = Number(quantitySelector.value); */

		/* don't forget to uncomment the above */

		let matchingProduct;
		this.cartItems.forEach((cartItem) => {
			if (productId === cartItem.productId) {
				matchingProduct = cartItem;
			}
		});

		if (matchingProduct) {
			matchingProduct.quantity += 1;
		} else {
			this.cartItems.push({
				productId,
				quantity: 1,
				deliveryOptionId: '1',
			});
		}
		this.saveToStorage();
	}

	removeFromCart(productId) {
		let newCart = [];

		this.cartItems.forEach((cartItem) => {
			if (cartItem.productId !== productId) {
				newCart.push(cartItem);
			}
		});

		this.cartItems = newCart;

		this.saveToStorage();
	}

	calculateCartQuantity() {
		let cartQuantity = 0;
		this.cartItems.forEach((cartItem) => {
			cartQuantity += cartItem.quantity;
		});

		return cartQuantity;
	}

	updateDeliveryOption(productId, deliveryOptionId) {
		let matchingProduct;
		this.cartItems.forEach((cartItem) => {
			if (productId === cartItem.productId) {
				matchingProduct = cartItem;
			}
		});

		matchingProduct.deliveryOptionId = deliveryOptionId;

		this.saveToStorage();
	}
}

const cart = new Cart('cart-oop');
const businessCart = new Cart('cart-business');

console.log(cart);
console.log(businessCart);
