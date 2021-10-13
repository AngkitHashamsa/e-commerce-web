import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { single_product_url as url } from '../utils/constants'
import { formatPrice } from '../utils/helpers'
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from '../components'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SingleProductPage = () => {
  const { id } = useParams()
  const history = useHistory()
  const {
    fetchSingleProduct,
    singleProduct_loading,
    singleProduct_error,
    singleProduct,
  } = useProductsContext()

  //  get single product

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`)
    // eslint-disable-next-line
  }, [id])

  // redirect if error
  useEffect(() => {
    if (singleProduct_error) {
      setTimeout(() => {
        history.push('/')
      }, 3000)
    }
  }, [singleProduct_error, history])
  if (singleProduct_loading) {
    return <Loading />
  }
  if (singleProduct_error) {
    return <Error />
  }

  const {
    name,
    id: sku,
    description,

    images,
    company,
    price,
    stars,
    stock,
    reviews,
  } = singleProduct
  return (
    <Wrapper>
      <PageHero title={name} product />
      <section className='section-single section-center page'>
        <Link to='/products' className='btn'>
          back to products
        </Link>
        <div className='product-center'>
          <ProductImages images={images} />
          <div>
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className='price'>{formatPrice(price)}</h5>
            <p>{description}</p>
            <p className='info'>
              <span>Available:</span>{' '}
              {stock > 0 ? `In Stock ( ${stock} product ) ` : 'Out of stock'}
            </p>
            <p className='info'>
              <span>SKU:</span> {sku}
            </p>
            <p className='info'>
              <span>Brand:</span> {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={singleProduct} />}
          </div>
        </div>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  .section-single {
    padding: 3rem 0;
  }
  .page-single {
    min-height: calc(100vh - (20vh + 5rem));
  }
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default SingleProductPage
