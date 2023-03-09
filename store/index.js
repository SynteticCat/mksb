import { PRODUCTS } from "../consts"

export const state = () => ({
  activeProduct: PRODUCTS[0]
})

export const mutations = {
	setActiveProduct(state, { product }) {
		state.activeProduct = product
	}
}

export const getters = {
	getActiveProduct(store) {
		return store.activeProduct
	}
}

export const actions = {
	changeActiveProduct({ commit }, { product }) {
		commit({ type: 'setActiveProduct', product })
	}
}
