<!-- ButtonComponent.vue -->
<template>
  <div>
    <div
      :class="buttonClasses"
      @mouseenter="toggleOpenIcon"
      @mouseleave="toggleCloseIcon"
      @click="toggleOpenIcon"
      :style="{ transform: isDropdown ? 'translateY(-10px)' : 'translateY(0)' }"
    >
      <div class="row items-center text-subtitle1">
        <div class="q">Label</div>
        <q-icon left size="3em" :name="iconName" />
      </div>
      <div
        v-if="!isDropdown"
        class="bg-green-1 full-width"
        style="height: 5px"
      ></div>
    </div>
    <div
      v-if="!isDropdown"
      class=" text-white"
      style="
        position: absolute;
        left: 0;
        right: 0;
        top: 100%;
        min-height: 100px;
        z-index: 9999;
        background-color: #055550;
      "
      @mouseleave="toggleCloseIcon"
      @mouseenter="toggleOpenIcon"
    >
      <div v-for="(category, index) in categories" :key="index" class="q-pa-md">
        {{ category }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iconName: "arrow_drop_down",
      isDropdown: true,
    };
  },
  props: {
    categories: Array,
  },
  computed: {
    buttonClasses() {
      return {
        row: true,
        "items-center": true,
        "text-subtitle1": true,
        'q-mt-lg': true,
        'q-ml-md': true,
      };
    },
  },
  methods: {
    toggleOpenIcon() {
      this.iconName = "arrow_drop_up";
      this.isDropdown = false;
    },
    toggleCloseIcon() {
        this.iconName =  "arrow_drop_down";
        this.isDropdown = true;
    },

  },
};
</script>
