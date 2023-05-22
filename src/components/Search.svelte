<script>
	import Conversation from './Conversation.svelte';

	export const search = false;
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
		},
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
		}
	];
</script>

<form>
	<input
		type="text"
		placeholder="Search conversation"
		class="h-9 w-full rounded-md border-2 border-gray-300 p-2 text-foreground focus:border-blue-500 focus:outline-none"
	/>
</form>
{#if search}
	<!-- Customize a bit more -->
	<div class="relative top-2 h-[72vh] w-full overflow-y-auto rounded-lg text-white shadow-md">
		{#each conversations as conv}
			<Conversation {...conv} />
		{/each}
	</div>
{/if}
