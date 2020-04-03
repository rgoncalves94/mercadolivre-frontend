export function searchProductsByTerm(term) {
    return fetch(`/api/items?q=${encodeURIComponent(term)}`)
}

export function detailProductById(idProduct) {
    return fetch(`/api/items/${encodeURIComponent(idProduct)}`)
}