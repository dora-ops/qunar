export default {
	updateCity(state, city) {
		state.city = city
		try {
			localStorage.city = city
		} catch (e) {}
	}
}