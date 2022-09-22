<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/valid-template-root -->
<template>
	<Form @onSubmit="handleSubmit"/>
	<List @onRemove="handleRemove" :items="notes"/>
</template>

<script>
	import Form from '@/components/Notes/Form.vue';
	import List from '@/components/Notes/List.vue';
	export default {
		components:{ Form, List },
		data(){
			return {
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
			}
		},
	mounted(){
		this.getNotes()
	},
	watch: {
		notes: {
			handler(updateList) {
				localStorage.setItem('notes', JSON.stringify(updateList));
			},
			deep: true,
		}
	},
		methods: {
			getNotes(){
				const localNotes = localStorage.getItem('notes')
				if (localNotes) {
					this.notes = JSON.parse(localNotes)
				}
			},
			handleRemove(item) {
				this.notes.splice(item, 1)
			},
			handleSubmit({value, tag}) {
				this.notes.push({title: value, tag:[...tag]});
				this.tag = tag;
			}
		}
	}
</script>
