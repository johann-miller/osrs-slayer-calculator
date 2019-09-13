<script>
  export let unlock

  function toggleUnlock() {
    unlock.unlocked = !unlock.unlocked
    console.log(unlock.unlocked)
  }

  // TODO store checked unlock in a store
</script>

<style>
  .checkbox-button {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		width: 100%;
		padding: 0.5rem;
		margin: 0.5rem 0;

		background: #fafafa;
		border: 2px #e7e7e7 solid;
		border-radius: 0.3rem;
		color: inherit;
		cursor: pointer;
	}

	.checkbox-button input[type="checkbox"] {
		opacity: 0;
		width: 0;
		height: 0;
		margin: 0;
		position: absolute;
	}

	.unlocked {
		background: #f9e9cc;
		border: 2px #e59400 solid;
	}
</style>

<label class="checkbox-button" class:unlocked={unlock.unlocked} on:click|preventDefault={toggleUnlock}>
	<input type="checkbox" value="{unlock.name}">{unlock.name}
</label>