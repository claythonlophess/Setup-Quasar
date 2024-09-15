<template>
  <div
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    class="text-white text-center justify-center items-center"
    :style="isHovered? `background: linear-gradient(
    to right,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0)
  );
  border-radius: 5rem;
  margin-left: 2rem;
  width: 80%;
  position: relative; cursor: pointer`:'color:red;cursor: pointer'"
  >
  <div class="row text-white text-center justify-center items-center">
    <q-icon size="1rem" name="font_download" />
    <div  class="text-h5 ">Orders</div>
  </div>
    <q-menu anchor="top right" self="top left">

      <q-list style="min-width: 100px;">
        <q-item clickable v-close-popup>
          <q-item-section>anchor="top right"</q-item-section>
        </q-item>
        <q-item clickable v-close-popup>
          <q-item-section>self="top left"</q-item-section>
        </q-item>
      </q-list>
    </q-menu>

  </div>
</template>

<script>
export default {
  name: "GradientButton",
  data() {
    return {
      isHovered: false,
    };
  },
};
</script>

<style>
.gradient-effect {
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0)
  );
  border-radius: 5rem;
  margin-left: 2rem;
  width: 80%;
  position: relative;
}
</style>
