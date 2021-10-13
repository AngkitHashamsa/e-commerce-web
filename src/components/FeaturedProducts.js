import React from 'react'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'

import styled from 'styled-components'
import Error from './Error'
import Loading from './Loading'
import Product from './Product'

const FeaturedProducts = () => {
  const { product_loading, product_error, featuredProduct } =
    useProductsContext()
  if (product_loading) {
    return <Loading />
  }
  if (product_error) {
    return <Error />
  }
  return (
    <Wrapper className='section'>
      <div className='title'>
        <h2>Featured Products</h2>
        <div className='underline'></div>
      </div>
      <div className='featured section-center'>
        {featuredProduct.slice(0, 3).map((item) => {
          return <Product key={item.id} product={item} />
        })}
      </div>
      <Link to='/products' className='btn'>
        all products
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`

export default FeaturedProducts
