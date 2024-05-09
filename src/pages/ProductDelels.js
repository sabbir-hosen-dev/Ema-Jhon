import React from 'react'
import { useParams } from 'react-router'
import { useShopContext } from '../Hook/useShopContext'
import Product from '../components/product/Product';

function ProductDelels() {
  const {products} = useShopContext();
  const {key} = useParams()

  const filterProduct = products && products.filter(product => product.key === key);
  console.log(filterProduct)
  const detlsProduct = filterProduct[0];
  return (
    <div className='paddig'>
        <Product product={detlsProduct} />
    </div>
  )
}

export default ProductDelels
