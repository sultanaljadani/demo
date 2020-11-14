import React, {createContext, useState} from 'react'

export const DataContext = createContext();
export const DataProvider = ({children}) => {
    const [products, setProducts] =  useState([
        
    ])
    const [cart, setCart] = useState([])
    const [about, setAbout] = useState([
        
    ])
    const addCart = (id) => {
        const check = cart.every(item => {
            return item._id !== id
        })
        if(check){
            const data = products.filter(product => {
                return product._id === id
            })
            setCart([...cart, ...data])
        } else {
            alert("Product has been added to the cart.")
        }
    }
    const value = {
        products:  [products, setProducts],
        cart: [cart, setCart],
        about: [about, setAbout],
        addCart: addCart,
    }
    return (
        <div>
            <DataContext.Provider value={value}>
                {children}
            </DataContext.Provider>
        </div>
    )
}
