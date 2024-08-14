import createItem from "./services/item.js"
import * as cartServices from "./services/cart.js"

//Constante para armazenar os dados 
const myCart = [];

//criando lista de desejos
const myWhishList = [];


console.log("Welcome to the your Shopee Cart!")

//constante com os itens 
const item1 = await createItem("Carrinho - ferrari", 20.99, 1)
const item2 = await createItem("Carrinho - lamborguine", 39.99, 3)


//logica para armazenar os dados do item no array
await cartServices.addItem(myCart, item1)
await cartServices.addItem(myCart, item2)

await cartServices.addItem(myWhishList, item2)

//removendo itens
await cartServices.removeItem(myCart, item2)
await cartServices.removeItem(myCart, item2)


//mostando o valor total e os itens do carrinho
await cartServices.lisItem(myCart)

//mostrando a lista de favoritos
await cartServices.listWhish(myWhishList, item2)





//excluindo item
//await cartServices.deleteItem(myCart, item2.name)
//await cartServices.deleteItem(myCart, item1.name)


await cartServices.calculeTotal(myCart);
