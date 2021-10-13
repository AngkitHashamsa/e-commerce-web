import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {
  const { filtered_product, grid_view } = useFilterContext()
  if (filtered_product.length < 1) {
    return (
      <h4 style={{ textTransform: 'none' }}>
        Sorry no product match your search...
      </h4>
    )
  }
  if (grid_view) {
    return <GridView products={filtered_product} />
  } else {
    return <ListView products={filtered_product} />
  }
}

export default ProductList
