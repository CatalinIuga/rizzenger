<script>
	import Chat from '../components/Chat.svelte';
	import Navigation from '../components/Navigation.svelte';
	import Sidebar from '../components/Sidebar.svelte';
</script>

<Navigation />
<div class="flex w-screen flex-row">
	<Sidebar />
	<Chat />
</div>
