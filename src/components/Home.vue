<template>
<div class="home-container" >
  <pnl></pnl>

  <notes></notes>
</div>
</template>

<script setup>
import pnl from './Pnl.vue';
import Notes from './Notes.vue';
</script>



<style>
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
}

</style>
