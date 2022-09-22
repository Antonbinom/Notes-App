<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/valid-template-root -->
<template>
	<div class="note-form__wrapper">
		<form class="note-form" @submit.prevent="onSubmit" >
			<textarea required v-model="value" placeholder="Добавьте запись"></textarea>
			<TagList :items="tags" @onClickItem="tagValue"/>
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
						activeTags: [],
            tags: [{title: "music", status: false}, {title:"job", status: false}, {title:"study", status: false}, {title:"travel", status: false}, {title:"sport", status: false}],
        };
    },
    methods: {
				tagValue({title, index}) {
					this.tagName = title;
					this.tags[index].status = !this.tags[index].status
				},
        onSubmit() {
						this.tags.forEach(tag => {
							if (tag.status) this.activeTags.push(tag.title)
						})
            this.$emit("onSubmit", {value: this.value, tag: this.activeTags});
						this.tags.forEach(item=>item.status=false);
            this.value = "";
						this.activeTags = [];
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