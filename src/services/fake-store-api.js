const FakeStoreApi = {
    fetchAllProducts: async () => {
        const res = await fetch("https://fakestoreapi.com/products")
        const result = res.json()
        return result
    },
    fetchProductById: async (productId) => {
        const res = await fetch(`https://fakestoreapi.com/products${productId}`)
        const result = res.json()
        return result
    },
    fetchProductsBySearchQuery: async (query) => {
        const res = await fetch("https://fakestoreapi.com/products")
        const resultData = res.json()
        const result = resultData.filter(product => product.titles.toLowerCase().includes(query))
        return result
    }
}

export { FakeStoreApi }