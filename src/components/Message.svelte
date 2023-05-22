<script lang="ts">
	export let id: string;
	export let message: string;
	export let time: string;
	export let sender: string;
</script>

{#if sender === 'John Doe'}
	<div {id} class="flex flex-col items-end">
		<div class="flex flex-col items-end gap-1">
			<p class="text-sm text-text">{message}</p>
			<p class="text-sm text-text">{time}</p>
		</div>
	</div>
{:else}
	<div {id} class="flex flex-col items-start">
		<div class="flex flex-col items-start gap-1">
			<p class="text-sm text-text">{message}</p>
			<p class="text-sm text-text">{time}</p>
		</div>
	</div>
{/if}
