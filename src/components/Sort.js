import React from 'react'
import { useFilterContext } from '../context/filter_context'
import { BsFillGridFill, BsList } from 'react-icons/bs'
import styled from 'styled-components'
const Sort = () => {
  const {
    filtered_product: products,
    grid_view,
    handleGrid,
    handleColumn,
    sort,
    changeSort,
  } = useFilterContext()
  return (
    <Wrapper>
      <div className='btn-container'>
        <button
          className={`${grid_view ? 'active' : null}`}
          onClick={handleGrid}
        >
          <BsFillGridFill />
        </button>
        <button
          className={`${!grid_view ? 'active' : null}`}
          onClick={handleColumn}
        >
          <BsList />
        </button>
      </div>
      <p>{products.length} products found</p>
      <hr />
      <form>
        <label htmlFor='sort'>Sort By</label>
        <select
          name='sort'
          id='sort'
          value={sort}
          onChange={changeSort}
          className='sort-input'
        >
          <option value='price-lowest'>Price (lowest)</option>
          <option value='price-highest'>Price (Highest)</option>
          <option value='name-a'>Name (A-Z)</option>
          <option value='name-z'>Name (Z-A)</option>
        </select>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  column-gap: 2rem;
  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
    .btn-container {
      width: 50px;
    }
    label {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
  @media (min-width: 768px) {
    column-gap: 2rem;
  }
  @media (min-width: 577px) {
    label {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
  p {
    text-transform: capitalize;
    margin-bottom: 0;
  }

  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
    button {
      background: transparent;
      border: 1px solid var(--clr-black);
      color: var(--clr-black);
      width: 1.5rem;
      border-radius: var(--radius);
      height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        font-size: 1rem;
      }
    }
    .active {
      background: var(--clr-black);
      color: var(--clr-white);
    }
  }

  .sort-input {
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
  }
  label {
    font-size: 1rem;
    text-transform: capitalize;
  }
  /* select {
    &:focus {
      outline: none;
    }
  } */
`

export default Sort
