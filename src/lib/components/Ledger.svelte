<script>
	/** Tabla de especificaciones en filetes. Formato de hoja técnica, no de tabla web. */
	let { rows = [], columns = false } = $props();
</script>

<dl class="ledger">
	{#each rows as row (row.key)}
		<div class="ledger__row">
			<dt class="ledger__key">{row.key}</dt>
			<dd class="ledger__value">
				{#if row.value}
					{row.value}
				{:else}
					<span class="dim">—</span>
				{/if}
			</dd>
		</div>
	{/each}
</dl>