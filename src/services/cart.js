// quais ações meu carrinho tem

//casos de uso

// -> adicionar item no carrinho
export async function addItem(userCart, item){
    userCart.push(item);
}

// -> calcular total
export async function calculeTotal(userCart) {
    console.log("\nShopee Cart total é: ")

    const result = userCart.reduce((total, item) => total + item.subtotal(), 0)
    console.log(`\n Total: ${result}`)
}

// -> deletar item 
export async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if(index !== -1){
        userCart.splice(index, 1)
    }
}

// -> remover item no carrinho
export async function removeItem(userCart, item) {

    //encontrar o index do item
    const indexFound = userCart.findIndex((product) => product.name === item.name)

    //caso nao encontre o item
    if(indexFound === -1){
        console.log("Item não encontrado!")
        return;
    }

    //item encontrado > subtrair do carrinho se for igual a 1 item, deleta
    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1
        return;
    }

    //se for igual a 1 item, deleta
    if(userCart[indexFound].quantity === 1){
        userCart.splice(indexFound, 1)
        return;
    }

}

// -> função para mostrar os itens do carrinho
export async function lisItem(userCart) {
    
    console.log("\nLista do carrinho:")

    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal ${item.subtotal()}`)
    });
}

// -> Listar os produtos favoritos
export async function listWhish(useCart, index) {

    console.log("\nLista de favoritos:")

    useCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$${item.price} | ${item.quantity}x`)
    }) 
}

 
