import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/filter_reducer'

import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'
import { useProductsContext } from './products_context'

const initialState = {
  filtered_product: [],
  all_product: [],
  grid_view: true,
  sort: 'price-lowest',
  filter: {
    search: '',
    category: 'all',
    company: 'all',
    colors: 'all',
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
}

const FilterContext = React.createContext()

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext()
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products })
  }, [products])

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS })
    dispatch({ type: SORT_PRODUCTS })
  }, [products, state.sort, state.filter])

  const handleGrid = () => {
    dispatch({ type: SET_GRIDVIEW })
  }

  const handleColumn = () => {
    dispatch({ type: SET_LISTVIEW })
  }

  const updateFilter = (e) => {
    let name = e.target.name
    let value = e.target.value
    if (name === 'category') {
      value = e.target.textContent
    }
    if (name === 'colors') {
      value = e.target.dataset.color
    }
    if (name === 'price') {
      value = Number(value)
    }
    if (name === 'shipping') {
      value = e.target.checked
    }

    dispatch({ type: UPDATE_FILTERS, payload: { name, value } })
  }

  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTERS })
  }

  const changeSort = (e) => {
    // let name = e.target.name
    let value = e.target.value

    dispatch({ type: UPDATE_SORT, payload: value })
  }

  return (
    <FilterContext.Provider
      value={{
        ...state,
        handleGrid,
        handleColumn,
        changeSort,
        updateFilter,
        clearFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext)
}
