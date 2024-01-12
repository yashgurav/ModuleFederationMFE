import { mount as productsMount } from "products/ProductsIndex";
import { mount as cartMount } from "cart/CartShow";

console.log("Container!");

productsMount(document.querySelector("#products-dev"));
cartMount(document.querySelector("#cart-dev"));
