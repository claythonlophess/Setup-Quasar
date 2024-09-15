<!-- ButtonComponent.vue -->
<template>
  <div
    :class="buttonClasses"
    @mouseenter="toggleOpenIcon"
    @mouseleave="toggleCloseIcon"
    :style="{ transform: isDropdown ? 'translateY(-10px)' : 'translateY(0)' }"
  >
    <div
      class="row items-center text-subtitle1"
    >
      <div class="qight">Label</div>
      <q-icon left size="3em" outline :name="iconName" />
    </div>
    <div v-if="!isDropdown" class="bg-green-1 full-width" style="height: 5px"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iconName: 'arrow_drop_down',
      isDropdown: true
    };
  },
  computed: {
    buttonClasses() {
      return {
        'row': true,
        'items-center': true,
        'text-subtitle1': true,
        'q-mr-lg': true,
        'q-mt-lg': true,
        // 'q-ml-': true,
        // 'bg-green-13':!this.isDropdown,
        // 'transparent-button':this.isDropdown,

      };
    }
  },
  methods: {
    toggleOpenIcon() {
      this.iconName = this.isDropdown ? 'arrow_drop_up' : 'arrow_drop_down';
      this.isDropdown = !this.isDropdown;
    },
    toggleCloseIcon() {
      this.iconName = this.isDropdown ? 'arrow_drop_up' : 'arrow_drop_down';
      this.isDropdown = !this.isDropdown;
    }
  }
};
</script>

<style>
.transparent-button {
  background-color: transparent;
  color: inherit;
}

div {
  /* transition: transform 0.3s; */
}
</style>

