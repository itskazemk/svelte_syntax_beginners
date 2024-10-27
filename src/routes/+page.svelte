<script lang="ts">
	import Header from './Header.svelte';

	let formState = $state({
		answers: { name: '', birthday: '' },
		step: 0,
		error: ''
	});

	const QUESTIONS = [
		{
			question: 'What is your name?',
			id: 'name',
			type: 'text'
		},
		{
			question: 'What is your birthday?',
			id: 'birthday',
			type: 'date'
		}
	];

	function nextStep(id: string) {
		if (formState.answers[id]) {
			formState.step += 1;
			formState.error = '';
		} else {
			formState.error = 'please fill out the form input.';
		}
	}
</script>

<Header name={formState.answers.name} />
<main>
    
	<p>step: {formState.step + 1}</p>

	{#each QUESTIONS as question, index (question.id)}
		{#if formState.step === index}
			{@render formStep({ ...question })}
		{/if}
	{/each}

	{#if formState.error}
		<div>
			<p class="error">form error: {formState.error}</p>
		</div>
	{/if}
</main>

{#snippet formStep({ question, id, type })}
	<article>
		<div>
			<label for={id}>{question}</label>
			<input {type} {id} bind:value={formState.answers[id]} />
		</div>
		<button
			onclick={() => {
				nextStep(id);
			}}>Next</button
		>
	</article>
{/snippet}

<style>
	* {
		font-family: 'vazirmatn';
	}

	.error {
		color: red;
	}
</style>
