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
		border: 1px #e7e7e7 solid;
		border-radius: 0.3rem;
		color: inherit;
		cursor: pointer;
		user-select: none;
		transition: all 0.1s ease-in-out;
	}

	.checkbox-button:first-child {
		margin-top: 0;
	}

	.checkbox-button input[type="checkbox"] {
		opacity: 0;
		width: 0;
		height: 0;
		margin: 0;
		position: absolute;
	}

	.unlocked {
		border: 1px #900 solid;
		box-shadow: 0 1px 5px rgba(153,0,0,.025), 0 2px 10px rgba(153,0,0,.1);
		color: #900;
	}
</style>

<label class="checkbox-button" class:unlocked={unlock.unlocked} on:click|preventDefault={toggleUnlock}>
	<input type="checkbox" value="{unlock.name}">{unlock.name}
</label>