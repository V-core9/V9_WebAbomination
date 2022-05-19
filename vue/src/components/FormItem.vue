<template>
  <div class="item">
    <div class="details">
      <i>
        <slot name="icon"></slot>
      </i>
      <h3>
        <slot name="heading"></slot>
      </h3>
    </div>
    <slot></slot>
  </div>
</template>

<style scoped>
.item {
  gap: .5em;
  display: flex;
  flex-direction: column;
}

.details {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1em;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
  }

  i {
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

}
</style>
