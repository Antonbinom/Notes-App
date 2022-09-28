import {createStore} from "vuex";

export const store = createStore({
	state: {
		notes: [
			{
				title: 'Play guitar',
				tag: ['music', 'job']
			},
			{
				title: 'Learn Vue3',
				tag: ['study']
			},
			{
				title: 'Do yoga',
				tag: ['sport']
			},
			{
				title: 'Заработать денег',
			},
		],
		tags: [{title: "music", status: false}, {title: "job", status: false}, {title: "study", status: false}, {title: "travel", status: false}, {title: "sport", status: false}],
		value: "",
		activeTags: [],
	},
	getters: {
		getNotes(state) {
			return state.notes
		},
		getTags(state) {
			return state.tags
		}
	},
	mutations: {
		removeNote(state, note) {
			state.notes.splice(note, 1)
		},
		setNotes(state, notes) {
			state.notes = notes
		},
		tagValue(state, index) {
			state.tags[index].status = !state.tags[index].status
		},
		submitNote(state) {
			state.tags.forEach(tag => {
				if (tag.status) state.activeTags.push(tag.title)
			})
			state.notes.push({title: state.value, tag: [...state.activeTags]});
			state.tags.forEach(item => item.status = false);
			state.value = "";
			state.activeTags = [];
		},
		setValue(state, value) {
			state.value = value
			console.log(state.value);
		}
	},
	actions: {
		submitNote({commit}) {
			commit('submitNote')
		},
		removeNote({commit}, [note]) {
			commit('removeNote', note)
		},
		setNotes({commit}, [notes]) {
			commit('setNotes', notes)
		},
		tagValue({commit}, [index]) {
			commit('tagValue', index)
		},
		setValue({commit}, [value]) {
			commit('setValue', value)
		}
	},
})