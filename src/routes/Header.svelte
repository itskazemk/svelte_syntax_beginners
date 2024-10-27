<script lang="ts">
	import { chnage_state, globalState } from './values.svelte';

	let { name } = $props();
</script>

<header>{name ? name : 'someone'}'s form</header>
<button
	onclick={() => {
		globalState.jwt = 'new_jwt_token';
	}}>change global state</button
>
<button
	onclick={() => {
		chnage_state();
	}}>change2 global state</button
>
