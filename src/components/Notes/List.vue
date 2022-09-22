<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/valid-template-root -->
<template>
	<div class="notes-list">
		<div class="notes-item"  v-for="(note, index) in items" :key="index">
			<div class="notes-header">
				<span>{{note.title}}</span>
				<span class="notes-remove" @click="$emit('onRemove', index)">&#10005;</span>
			</div>
			<div class="notes-footer">
				<TagList
				isPreview
				v-if="note.tag && note.tag.length"
			:items="note.tag"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import TagList from '../UI/TagList.vue';
export default {
    props: {
        items: {
            type: Array,
            required: true,
        },
    },
    components: { TagList }
}
</script>

<style lang="scss">
.notes-list {
	padding: 40px 0;
	color: #000000;
}

.notes-item {
	width: 100%;
	padding: 18px 20px;
	margin-bottom: 20px;
	border-radius: 14px;
	background-color: #ffffff;
	transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
	box-shadow: 0 30px 30px rgba(0, 0, 0, 0.02);

	&:hover {
		box-shadow: 0 30px 30px rgba(0, 0, 0, 0.04);
		transform: translate(0, -6px);
		transition-delay: 0s !important;
	}
}

.notes-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.notes-remove {
	cursor: pointer;
}

.notes-footer {
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: start;
}
</style>
