<script lang="ts">
	export let id: string;
	export let message: string;
	export let time: string;
	export let sender: string;
</script>

{#if sender === 'John Doe'}
	<div class="flex justify-end">
		<div class="mr-1 max-w-[50%]">
			<div class="rounded-lg bg-primary p-2 text-text">
				<div>{message}</div>
			</div>
			<div class="relative -top-6 left-[calc(100%-6px)] h-3 w-3 rotate-45 bg-primary" />
			<p class="text-sm text-gray-500">{time}</p>
		</div>
	</div>
{:else}
	<div {id} class="flex">
		<div class="max-w-[50%]">
			<div class="rounded-lg bg-white p-2 text-gray-800">
				<div>{message}</div>
			</div>
			<div class="relative -left-[6px] -top-6 h-3 w-3 rotate-45 bg-white" />
			<p class="text-sm text-gray-500">{time}</p>
		</div>
	</div>
{/if}
