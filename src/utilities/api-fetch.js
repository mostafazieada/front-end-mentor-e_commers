export async function fetching() {
    try {
        const data = await fetch("http://localhost:3000/products")

        if (!data.ok) {
            throw new Error("fetching is not completed")
        }

        const products = await data.json()

        return products
    } catch (error) {
        console.error("something went wrong==>", error)
    }
}