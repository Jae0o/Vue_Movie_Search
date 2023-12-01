<template>
  <p class="info-detail">
    <span class="tag">{{ tagName }}</span>
    {{ text }}
  </p>
</template>

<script setup lang="ts">
defineProps<{
  text: string;
  tagName: string;
}>();
</script>

<style lang="scss">
.info-detail {
  .tag {
    padding: 2px 6px;
    margin-bottom: 8px;

    display: flex;
    align-items: center;

    background-color: var(--color-semi-white);
    border-radius: 4px;

    color: var(--color-dark);
    font-weight: 700;
  }
  width: 400px;
  margin-bottom: 20px;

  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
