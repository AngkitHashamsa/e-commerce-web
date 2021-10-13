import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((p) => p.price)
    maxPrice = Math.max(...maxPrice)

    return {
      ...state,
      filtered_product: [...action.payload],
      all_product: [...action.payload],
      filter: { ...state.filter, max_price: maxPrice, price: maxPrice },
    }
  }

  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true }
  }

  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false }
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload }
  }

  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_product } = state
    let tempProducts = [...filtered_product]
    if (sort === 'price-lowest') {
      tempProducts = tempProducts.sort((a, b) => a.price - b.price)
    }
    if (sort === 'price-highest') {
      tempProducts = tempProducts.sort((a, b) => b.price - a.price)
    }
    if (sort === 'name-a') {
      tempProducts = tempProducts.sort((a, b) => {
        return a.name.localeCompare(b.name)
      })
    }
    if (sort === 'name-z') {
      tempProducts = tempProducts.sort((a, b) => {
        return b.name.localeCompare(a.name)
      })
    }
    return { ...state, filtered_product: tempProducts }
  }

  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload

    return { ...state, filter: { ...state.filter, [name]: value } }
  }

  if (action.type === FILTER_PRODUCTS) {
    const {
      all_product,
      filter: {
        search,
        category,
        company,
        colors,

        price,
        shipping,
      },
    } = state
    // console.log('filtered')

    let tempProduct = [...all_product]

    if (search) {
      tempProduct = tempProduct.filter((product) => {
        return product.name.toLowerCase().startsWith(search)
      })
    }

    if (category !== 'all') {
      tempProduct = tempProduct.filter((item) => {
        return item.category === category
      })
    }

    if (company !== 'all') {
      tempProduct = tempProduct.filter((item) => {
        return item.company === company
      })
    }
    if (colors !== 'all') {
      tempProduct = tempProduct.filter((item) => {
        return item.colors.find((p) => p === colors)
      })
    }

    tempProduct = tempProduct.filter((p) => p.price <= price)

    if (shipping) {
      tempProduct = tempProduct.filter((s) => s.shipping === true)
    }

    return { ...state, filtered_product: tempProduct }
  }

  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filter: {
        ...state.filter,
        search: '',
        category: 'all',
        company: 'all',
        colors: 'all',
        price: state.filter.max_price,
        shipping: false,
      },
    }
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
