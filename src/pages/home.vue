<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/valid-template-root -->
<template>
	<Form />
	<List @onRemove="handleRemove" :items="getNote"/>
</template>

<script>
	import Form from '@/components/Notes/Form.vue';
	import List from '@/components/Notes/List.vue';
	import {updateNotes} from '@/util/updateNotes.js'
	export default {
		components:{ Form, List },
	mounted(){
		this.setNotes()
	},
	watch: {
		"$store.state.notes": {
			handler(updateList) {
				localStorage.setItem('notes', JSON.stringify(updateList));
			},
			deep: true,
		}
	},
		computed: {
			getNote() {
				return this.$store.getters.getNotes
			}
		},
		methods: {
			setNotes(){
				updateNotes(this.$store)
			},
			handleRemove(item) {
				this.$store.dispatch('removeNote', [item])
			},
		}
	}
</script>
