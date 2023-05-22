<script>
	import Message from './Message.svelte';

	let messages = [
		{
			id: '2',
			message: 'Hello',
			time: '9:00',
			sender: 'Jane Doe'
		},
		{
			id: '1',
			message: 'Hello',
			time: '10:00',
			sender: 'John Doe'
		}
	];
</script>

<!-- messages component -->
<div class="m-4 ml-0 h-[84vh] w-full rounded-md bg-foreground p-4">
	<!-- Conversation info -->
	<div class="flex items-center justify-between">
		<div class="flex">
			<img
				class="h-12 w-12 rounded-full border-2 border-solid border-black"
				src="https://i.pravatar.cc/150?img=3"
				alt="avatar"
			/>
			<div class="flex-1">
				<h3 class="font-display text-lg text-text">Jane Doe</h3>
				<p class="text-sm text-text">Online</p>
			</div>
		</div>
		<!-- Actions on conversation -->
		<div class="flex gap-2">
			<button class="h-2 w-2 items-center rounded-full bg-primary p-4 text-white" />
		</div>
	</div>
	<!-- Messages -->
	<div class="mt-4 flex h-[59vh] flex-col gap-2 overflow-y-auto rounded-md bg-underground p-3">
		{#each messages as message}
			<Message {...message} />
		{/each}
	</div>
	<!-- Message input -->
	<div class="bottom-0 mt-4 flex items-center gap-2">
		<input
			class="flex-1 rounded-md border-2 border-solid border-black p-2"
			type="text"
			placeholder="Type a message"
		/>
		<button class="rounded-md bg-primary p-2 text-white">Send</button>
	</div>
</div>
