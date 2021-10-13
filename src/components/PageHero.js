import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const PageHero = ({ title, product }) => {
  return (
    <Wrapper>
      <h4>
        <Link to='/'>home</Link>
        {product ? <Link to='/products'>/Products</Link> : null}/{title}
      </h4>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-primary-10);
  width: 100%;
  min-height: 10vh;
  display: flex;
  align-items: center;

  color: var(--clr-primary-1);
  h4 {
    margin-left: 1rem;
  }
  a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`

export default PageHero
