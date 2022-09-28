export const updateNotes = (store) => {
	const localNotes = localStorage.getItem('notes')
	if (localNotes) {
		store.dispatch('setNotes', [JSON.parse(localNotes)])
	}
}
