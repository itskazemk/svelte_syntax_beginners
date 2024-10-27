<script lang="ts">
	let { name } = $props();
</script>

<header>{name ? name : 'someone'}'s form</header>
