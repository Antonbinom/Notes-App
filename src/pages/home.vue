<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/valid-template-root -->
<template>
	<Form @onSubmit="handleSubmit"/>
	<List :items="notes" @onRemove="handleRemove"/>
</template>

<script>
	import Form from '@/components/Notes/Form.vue';
import List from '@/components/Notes/List.vue';
	export default {
		data(){
			return {
				notes: ['item1', 'item2', 'item3'],
			}
		},
		components:{ Form, List },
		methods: {
			handleRemove(item) {
				this.notes.splice(item, 1)
			},
			handleSubmit(note) {
				this.notes.push(note)
			}
		}
	}
</script>