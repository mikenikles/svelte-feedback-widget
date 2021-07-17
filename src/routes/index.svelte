<script lang="ts">
	import FeedbackWidget from '$lib/feedback-widget.svelte';
</script>

<div class="mt-8 max-w-lg mx-auto text-center">
	<h1 class="my-4 text-4xl">Svelte Feedback Widget</h1>
	<p class="my-4">If you want to learn what your website visitors think, ask them 😉.</p>
	<p class="my-4">
		To learn more about this widget, its architecture and how to get started, please see th <a
			href="https://github.com/mikenikles/feedback-widget" class="underline"><code>README.md</code></a
		> file.
	</p>
  <FeedbackWidget />
</div>
