export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price / 100)
}

export const getUniqueValues = (obj, str) => {
  let unique = obj.map((item) => item[str])
  if (str === 'colors') {
    unique = unique.flat()
  }
  return ['all', ...new Set(unique)]
}
