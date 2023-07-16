import React from 'react'
import {products} from '../../backend/db/products.js'

const ProductListing = () => {
    console.log(products)
  return (
    <div>
      <h1>This is the Product Listing Page</h1>
      {
        products.map((product)=>{
            return(
                <div>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <hr />
                </div>
            )
        })
      }
    </div>
  )
}

export default ProductListing
