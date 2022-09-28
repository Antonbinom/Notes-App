<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/valid-template-root -->
<template>
	<div class="note-form__wrapper">
		<form class="note-form" @submit.prevent="onSubmit" >
			<textarea required v-model="value" @input="inputValue" placeholder="Добавьте запись"></textarea>
			<TagList :items="getTags" @onClickItem="tagValue"/>
			<button class="btn btnPrimary" type="submit">Добавить запись</button>
		</form>
	</div>
</template>

<script>
import TagList from '../UI/TagList'
export default {
	components: { TagList },
    data() {
        return {
            value: "",
        };
    },
		computed: {
			getTags(){
				return this.$store.getters.getTags
			}
		},
    methods: {
				inputValue(event){
				this.$store.dispatch('setValue', [event.target.value])
				},
				tagValue({index}) {
					this.$store.dispatch('tagValue', [index])
				},
        onSubmit() {
						this.$store.dispatch('submitNote', [this.value])
						this.value = ''
					},
    },
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