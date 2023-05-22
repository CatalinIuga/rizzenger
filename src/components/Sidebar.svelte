<script lang="ts">
	import Conversation from '../components/Conversation.svelte';
	import Search from '../components/Search.svelte';
	const conversations = [
		{
			id: '1',
			name: 'John Doe1',
			lastMessage: 'Hello',
			lastMessageTime: '10:00',
			lastMessageSender: 'John Doe',
			avatar: 'https://i.pravatar.cc/150?img=3'
		},
		{
			id: '1',
			name: 'Jane Doe',
			lastMessage: 'Hello',
			lastMessageTime: '10:00',
			lastMessageSender: 'John Doe',
			avatar: 'https://i.pravatar.cc/150?img=3'
		},
		{
			id: '1',
			name: 'John Doe',
			lastMessage: 'Hello',
			lastMessageTime: '10:00',
			lastMessageSender: 'John Doe',
			avatar: 'https://i.pravatar.cc/150?img=3'
		},
		{
			id: '1',
			name: 'Jane Doe',
			lastMessage: 'Hello',
			lastMessageTime: '10:00',
			lastMessageSender: 'John Doe',
			avatar: 'https://i.pravatar.cc/150?img=3'
		},
		{
			id: '1',
			name: 'John Doe',
			lastMessage: 'Hello',
			lastMessageTime: '10:00',
			lastMessageSender: 'John Doe',
			avatar: 'https://i.pravatar.cc/150?img=3'
		},
		{
			id: '1',
			name: 'Jane Doe',
			lastMessage: 'Hello',
			lastMessageTime: '10:00',
			lastMessageSender: 'John Doe',
			avatar: 'https://i.pravatar.cc/150?img=3'
		}
	];
	let search: boolean;
</script>

<aside class="left-3 m-4 mb-0 h-[84vh] w-[35vw] rounded-lg bg-foreground p-4 pr-2">
	<Search bind:search />
	{#if !search}
		<div class="mt-2 h-[72vh] overflow-y-auto">
			{#each conversations as conversation}
				<Conversation {...conversation} />
			{/each}
		</div>
	{/if}
</aside>
