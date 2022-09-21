<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/valid-template-root -->
<template>
	<div class="note-form__wrapper">
		<form class="note-form" @submit.prevent="onSubmit">
			<textarea required v-model="value" placeholder="Добавьте запись"></textarea>
			<button class="btn btnPrimary" type="submit">Добавить запись</button>
		</form>
	</div>
</template>

<script>
export default {
	data () {
		return {
			value: ''
		}
	},
	methods: {
		onSubmit() {
			this.$emit('onSubmit', this.value)
			this.value = ''
		}
	}
}
</script>

<style>
	.note-form__wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.note-form {
		display: flex;
		flex-direction: column;
		max-width: 600px;
		width: 100%;
	}
</style>