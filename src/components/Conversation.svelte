<script lang="ts">
	export let id: string;
	export let name: string;
	export let lastMessage: string;
	export let lastMessageTime: string;
	export let lastMessageSender: string;
	export let avatar: string;
</script>

<div {id}>
	<div class="flex cursor-pointer items-center gap-3 rounded-lg p-2 hover:bg-background">
		<img class="h-12 w-12 rounded-full" src={avatar} alt="avatar" />
		<div class="flex-1">
			<h3 class="font-display text-lg text-text">{name}</h3>
			<p class="text-sm text-text">{lastMessageSender}: {lastMessage}</p>
		</div>
		<div class="flex flex-col items-end">
			<p class="text-sm text-text">{lastMessageTime}</p>
			<div class="h-3 w-3 rounded-full bg-blue-500" />
		</div>
	</div>
</div>
