import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'
import { getUniqueValues, formatPrice } from '../utils/helpers'
import { FaCheck } from 'react-icons/fa'

const Filters = () => {
  const {
    updateFilter,
    clearFilter,
    all_product,
    filter: {
      search,
      category,
      company,
      colors,
      min_price,
      max_price,
      price,
      shipping,
    },
  } = useFilterContext()

  const categories = getUniqueValues(all_product, 'category')

  const companies = getUniqueValues(all_product, 'company')

  const color = getUniqueValues(all_product, 'colors')

  return (
    <Wrapper>
      <div className='content'>
        <form onSubmit={(e) => e.preventDefault()}>
          {/* search */}
          <div className='form-control'>
            <input
              type='text'
              name='search'
              placeholder='search'
              className='search-input'
              value={search}
              onChange={updateFilter}
            />
          </div>
          {/* search end */}
          {/* category */}
          <div className=' form-control'>
            <h5>Category</h5>
            <div>
              {categories.map((item, index) => {
                return (
                  <button
                    type='button'
                    name='category'
                    onClick={updateFilter}
                    key={index}
                    className={`${
                      category === item.toLowerCase() ? 'active' : 'null'
                    }`}
                  >
                    {item}
                  </button>
                )
              })}
            </div>
          </div>

          {/* company */}
          <div className='form-control'>
            <h5>company</h5>
            <div>
              <select
                name='company'
                id='company'
                className='company'
                value={company}
                onChange={updateFilter}
              >
                {companies.map((item, index) => {
                  return (
                    <option value={item} key={index}>
                      {item}
                    </option>
                  )
                })}
              </select>
            </div>
          </div>
          {/*colors  */}
          <div className='form-control'>
            <h5>colors</h5>
            <div className='colors'>
              {color.map((p, index) => {
                if (p === 'all') {
                  return (
                    <button
                      className={`${
                        colors === 'all' ? 'all-btn active' : 'all-btn '
                      }`}
                      data-color='all'
                      onClick={updateFilter}
                      type='button'
                      name='colors'
                      key={index}
                    >
                      all
                    </button>
                  )
                }

                return (
                  <button
                    name='colors'
                    className={`${
                      p === colors ? 'color-btn active' : 'color-btn'
                    }`}
                    key={index}
                    style={{ background: p }}
                    onClick={updateFilter}
                    data-color={p}
                    type='button'
                  >
                    {colors === p ? <FaCheck /> : null}
                  </button>
                )
              })}
            </div>
          </div>
          {/* price */}
          <div className='form-control'>
            <h5>price</h5>
            <div>
              <p className='price'>{formatPrice(price)}</p>
              <input
                type='range'
                value={price}
                onChange={updateFilter}
                min={min_price}
                max={max_price}
                name='price'
              />
            </div>
          </div>
          {/*shipping  */}
          <div className='form-control'>
            <div className='shipping'>
              <p>free shipping</p>
              <input
                type='checkbox'
                name='shipping'
                onChange={updateFilter}
                checked={shipping}
              />
            </div>
          </div>
        </form>
        <button className='clear-btn' onClick={clearFilter}>
          clear filter
        </button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
    &::placeholder {
      text-transform: capitalize;
    }
    &:focus {
      outline: none;
    }
  }
  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
    p {
      margin-bottom: 0.25rem;
    }
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`

export default Filters
