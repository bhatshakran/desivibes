import isNull from 'lodash.isnull';
export const checkIfInCart = (details: any): boolean => {
  const parsedCart = JSON.parse(localStorage.getItem('vibes-cart')!);

  let isInCart = false;

  parsedCart.map((el: any) => {
    if (el.name === details.name) {
      isInCart = true;
      return;
    }
  });
  return isInCart;
};

export function removeFromCart(item: any) {
  const parsedCart = JSON.parse(localStorage.getItem('vibes-cart')!);

  const updatedCart = [...parsedCart].filter(
    (product: any) => product.name !== item.name
  );
  localStorage.setItem('vibes-cart', JSON.stringify(updatedCart));
}
export function addToCart(item: any) {
  console.log('adding to cart');

  let cart = localStorage.getItem('vibes-cart');

  if (isNull(cart)) {
    localStorage.setItem('vibes-cart', '[]');
  }

  const parsedCart = JSON.parse(localStorage.getItem('vibes-cart')!);

  // find item in the cart
  let isInCart = checkIfInCart(item);

  if (!isInCart) {
    const updatedCart = [...parsedCart, item];

    localStorage.setItem('vibes-cart', JSON.stringify(updatedCart));
  } else {
    removeFromCart(item);
  }

  console.log(localStorage.getItem('vibes-cart'));
}
