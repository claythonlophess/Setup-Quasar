<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar
        v-if="$q.screen.gt.sm"
        :style="
          $q.screen.gt.xs
            ? 'background-color: #239687;'
            : `background-color: #28bea5; padding: 0 200px 0 200px`
        "
      >
        <div v-if="false">
          <div class="animated bounce">Bounce</div>
          <div class="animated flash">Flash</div>
          <div class="animated flip">Flip</div>
          <div class="animated headShake">Head Shake</div>
          <div class="animated heartBeat">Heart Beat</div>
          <div class="animated hinge">Hinge</div>
          <div class="animated jello">Jello</div>
          <div class="animated pulse">Pulse</div>
          <div class="animated rubberBand">Rubber Band</div>
          <div class="animated shake">Shake</div>
          <div class="animated shakeX">Shake X</div>
          <div class="animated shakeY">Shake Y</div>
          <div class="animated swing">Swing</div>
          <div class="animated tada">Tada</div>
          <div class="animated wobble">Wobble</div>
        </div>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <div>Quasar h v{{ $q.version }}</div>

        <q-toolbar-title>Quasar App</q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
        <div>Quasar v{{ $q.version }}</div>
        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>

      <q-toolbar
        class="items-center"
        :style="
          !$q.screen.gt.xs
            ? 'background-color: #28bea5;'
            : `background-color: #28bea5; padding: 0 200px 0 200px`
        "
      >
        <q-avatar square>
          <img :src="logos.your_logo" />
        </q-avatar>
        x
        <ButtonComponent :categories="categories" />
        <ButtonComponent />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
        <div>Quasar v{{ $q.version }}</div>
        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>

      <div
        v-if="!isDropdown"
        class="bg-green-1 full-width"
        style="min-height: 100px"
      ></div>
    </q-header>
    <q-page-sticky
      position="bottom-right"
      style="z-index: 9"
      :offset="[18, 18]"
    >
      <div
        class="text-white bg-green-9 row"
        style="border-radius: 3rem; padding: 0.5rem"
      >
        <div class="row text-center items-center">
          <div class="collumn q-mr-md" v-if="$q.screen.gt.sm">
            <div class="text-subtilte1 text-bold">Não achou algo?</div>
            <div class="text-subtilte2">Veja mais opções</div>
          </div>

          <q-img
            class=""
            :src="icons.whatsapp_white"
            style="height: 3rem; width: 3rem"
          />
        </div>
      </div>
    </q-page-sticky>

    <q-drawer>
      <!-- <q-drawer v-model="leftDrawerOpen" show-if-above bordered> -->
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { $logos, $icons, $ilustre } from "/src/assets/assets.js";
const ilustre = ref($ilustre);
const logos = ref($logos);
const icons = ref($icons);

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];
import ButtonComponent from "/src/components/btn/ButtonC01.vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
    ButtonComponent,
  },
  data() {
    return {
      iconName: "arrow_drop_down",
      dropdownIcon: "arrow_drop_down",
      dropupIcon: "arrow_drop_up",
      isDropdown: true,
      buttonClasses: "transparent-button",
      categories: ["Categoria 1", "Categoria 2", "Categoria 3"],
    };
  },
  methods: {
    toggleOpenIcon(button) {
      console.log(button);
      button.iconName = this.isDropdown ? this.dropupIcon : this.dropdownIcon;
      button.isDropdown = !this.isDropdown;
      button.buttonClasses = this.isDropdown
        ? "transparent-button"
        : "bg-green-13";
    },
    toggleCloseIcon(button) {
      console.log(button);
      button.iconName = this.isDropdown ? this.dropupIcon : this.dropdownIcon;
      button.isDropdown = !this.isDropdown;
      button.buttonClasses = this.isDropdown
        ? "transparent-button"
        : "bg-green-13";
    },
  },

  setup() {
    const leftDrawerOpen = ref(true);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
        leftDrawerOpen.value = false;
      },
      ilustre,
      logos,
      icons,
    };
  },
});
</script>

<style>
.transparent-button {
  background-color: transparent;
  color: inherit;
}

.position-none {
  content: "";
  display: block;
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: inherit;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12);
}
div {
  transition: transform 0.3s;
}

/* Adicione a classe 'animated' e a classe da animação desejada */
.animated {
  animation-duration: 3s;
  animation-fill-mode: both;
}
</style>
