import React from 'react'
import styled from 'styled-components'
import { PageHero, StripeCheckout } from '../components'
// extra imports
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/cart_context'
const CheckoutPage = () => {
  const { cart } = useCartContext()

  return (
    <main>
      <PageHero title='checkout' />
      <Wrapper>
        {cart.length >= 1 ? (
          <StripeCheckout />
        ) : (
          <div className='empty'>
            <h2>your cart is empty</h2>
            <Link to='/products' className='btn'>
              fill it
            </Link>
          </div>
        )}
      </Wrapper>
    </main>
  )
}
const Wrapper = styled.div`
  padding: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 10rem);
  .empty {
    text-align: center;
  }
`
export default CheckoutPage
