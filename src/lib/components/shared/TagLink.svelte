<script lang="ts">
	import Tag from './Tag.svelte';

	export let href: string;
	export let disabled = false;
</script>

<a {href}>
	<Tag isActive size="lg" {disabled}>
		<slot />
	</Tag>
</a>
