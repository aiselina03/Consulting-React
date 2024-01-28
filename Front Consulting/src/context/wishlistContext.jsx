import React, { createContext, useState } from 'react'

export const WishlistContext=createContext()

function WishlistProvider({children}) {
    const [wishlist, setWishlist] = useState([])



    const data={
        wishlist
    }
  return (
 <WishlistContext.Provider value={data}>
    {children}
 </WishlistContext.Provider>
  )
}

export default WishlistProvider