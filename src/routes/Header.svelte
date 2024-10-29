<script lang="ts">
	import { change_state, globalState } from './values.svelte';

	let { name } = $props();
</script>

<header>{name ? name : 'someone'}'s form</header>
<button
	onclick={() => {
		globalState.jwt = 'new_jwt_from_header';
	}}>change global state</button
>
<button
	onclick={() => {
		change_state();
	}}>change2 global state</button
>
