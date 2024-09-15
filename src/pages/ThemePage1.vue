<template>
  <transition-group
    appear
    enter-active-class="animated fadeInDown"
    leave-active-class="animated fadeOutUp"
  >
    <div
      v-if="showMenu"
      class="column q-pa-md bg-grey-3"
      style="z-index: 99; position: absolute; max-width: 250px"
    >
      <div class="q-gutter-md row q-pr-md">
        <q-btn class="col-12" color="primary" label="Flip Menu">
          <q-menu transition-show="flip-right" transition-hide="flip-left">
            <q-list style="min-width: 100px">
              <q-item clickable>
                <q-item-section>Having fun</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>Crazy for transitions</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable>
                <q-item-section>Mind blown</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>

        <q-btn class="col-12" color="primary" label="Flip Menu">
          <q-menu transition-show="scale" transition-hide="scale">
            <q-list style="min-width: 100px">
              <q-item clickable>
                <q-item-section>Having fun</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>Crazy for transitions</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable>
                <q-item-section>Mind blown</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>

        <q-btn class="col-12" color="primary" label="junp Menu">
          <q-menu transition-show="jump-down" transition-hide="jump-up">
            <q-list style="min-width: 100px">
              <q-item clickable>
                <q-item-section>Having fun</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>Crazy for transitions</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable>
                <q-item-section>Mind blown</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>

        <q-btn class="col-12" color="primary" label="Rotate Menu">
          <q-menu transition-show="rotate" transition-hide="rotate">
            <q-list style="min-width: 100px">
              <q-item clickable>
                <q-item-section>Having fun</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>Crazy for transitions</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable>
                <q-item-section>Mind blown</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>

        <q-btn
          class="col-6 items-start"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
      </div>
    </div>
  </transition-group>

  <!-- THEME 1 -->
  <div class="full-width bg-white q-pa-lg">
    <div
      :class="!$q.screen.gt.xs ? `` : `full-width q-pl-xl q-pr-xl q-pb-xl`"
      style="background-color: #f1f8fe; border-radius: 2rem"
    >
      <!-- heider-->
      <div
        :class="!$q.screen.gt.xs ? `` : `bg-white`"
        style="
          border-bottom-right-radius: 3rem;
          border-bottom-left-radius: 3rem;
        "
      >
        <!-- menu bar 1 -->
        <q-toolbar
          class="animated fadeInDown"
          :style="$q.screen.gt.xs ? 'padding: 10px' : 'padding: 10px'"
        >
          <q-btn
            class="animated fadeInDown"
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer"
          />
          <div v-if="$q.screen.gt.xs">Quasar v{{ $q.version }}</div>

          <q-toolbar-title> Quasar App </q-toolbar-title>

          <div v-if="!$q.screen.gt.xs || $q.screen.gt.sm">87 714 0136</div>
        </q-toolbar>

        <!-- intro menu -->
        <div class="full-width q-pa-lg">
          <!-- intro menu -->
          <div class="text-bold text-uppercase animated fadeInDown">
            Balance Details
          </div>

          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-5">
              <div
                class="text-h6 text-bold text-uppercase q-pt-md animated fadeInLeft"
              >
                $2.322.903.00
              </div>
              <div
                class="text-subtitle text-grey-6 text-uppercase animated fadeInLeft"
              >
                $2.322.903.00 BTC
              </div>

              <div class="row q-gutter-xs q-pt-md">
                <div class="col-xs-12 col-sm-5 animated fadeInLeft">
                  <q-item clickable v-ripple>
                    <q-item-section side>
                      <q-avatar rounded size="48px">
                        <img src="https://cdn.quasar.dev/img/avatar.png" />
                      </q-avatar>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="text-bold text-uppercase"
                        >$8.899.909.00</q-item-label
                      >
                      <q-item-label class="text-subtitle text-grey-6" caption
                        >Entradas</q-item-label
                      >
                    </q-item-section>
                  </q-item>
                </div>

                <div class="col-xs-12 col-sm-5 animated fadeInLeft">
                  <q-item clickable v-ripple>
                    <q-item-section side>
                      <q-avatar rounded size="48px">
                        <img src="https://cdn.quasar.dev/img/avatar.png" />
                      </q-avatar>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="text-bold text-uppercase"
                        >$8.899.909.00</q-item-label
                      >
                      <q-item-label class="text-subtitle text-grey-6" caption
                        >Saidas</q-item-label
                      >
                    </q-item-section>
                  </q-item>
                </div>

                <div class="row col-xs-12 justify-between q-pa-md">
                  <div class="col-xs-5 animated fadeInDown">
                    <q-btn
                      rounded
                      style="background-color: #5fd9f9"
                      class="text-white full-width q-mt-lg"
                      label="Receber"
                    />
                  </div>

                  <div class="col-xs-5 animated fadeInDown">
                    <q-btn
                      rounded
                      style="background-color: #4c68ef"
                      class="text-white full-width q-mt-lg"
                      label="transferir"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              class="col-xs-12 col-sm-12 col-md-7"
              :style="
                !$q.screen.gt.xs || !$q.screen.gt.sm
                  ? `q-pa-md text-white row`
                  : `position: absolute; right: -78px; top: 58px`
              "
            >
              <div
                :class="
                  !$q.screen.gt.xs
                    ? `q-pa-md text-white row`
                    : `q-pa-md text-white row no-wrap overflow-x-auto`
                "
                :style="
                  !$q.screen.gt.xs || !$q.screen.gt.sm
                    ? `display: flex;
                flex-wrap: nowrap;
                /* white-space: nowrap; */
                -ms-overflow-style: none; /* for Internet Explorer, Edge */
                scrollbar-width: none; /* for Firefox */
                overflow-x: scroll;
                `
                    : `
                display: flex;
                flex-wrap: nowrap;
                /* white-space: nowrap; */
                -ms-overflow-style: none; /* for Internet Explorer, Edge */
                scrollbar-width: none; /* for Firefox */
                /* overflow-x: scroll; */
                position: absolute;`
                "
              >
                <q-card
                  bordered
                  class="row bg-pink-11 col-xs-3 col-sm-3 col-md-2 col-lg-2 q-ma-xs animated fadeInDown"
                  style="border-radius: 1rem"
                >
                  <q-card-section>
                    <q-icon color="green-4" size="3rem" name="public" />
                    <div class="text-subtitle1 text-bold">Combo</div>
                  </q-card-section>

                  <q-card-section>
                    <div
                      class="text-green-8 text-bottom"
                      style="
                        border-radius: 1rem;
                        margin: 0;
                        padding-left: 0;
                        padding-top: 10px;
                      "
                    >
                      <q-btn
                        style="margin: 0; padding: 0"
                        class="full-width"
                        color="green-8"
                        label="Aproveite"
                        flat
                      />
                    </div>
                  </q-card-section>
                </q-card>

                <q-card
                  bordered
                  class="row k col-xs-3 col-sm-3 col-md-2 col-lg-2 q-ma-xs animated fadeInDown"
                  style="
                    border-radius: 1rem;
                    background: linear-gradient(to bottom, #ee99ac, #8a4be2);
                  "
                >
                  <q-card-section>
                    <q-icon color="green-4" size="3rem" name="public" />
                    <div class="text-subtitle1 text-bold">Monte</div>
                  </q-card-section>

                  <q-card-section
                    class="text-green-8 text-bottom"
                    style="border-radius: 1rem; margin: 0; padding: 0"
                  >
                    <q-btn
                      style="margin: 0; padding: 2px"
                      class="full-width"
                      color="green-8"
                      label="Aproveite"
                      flat
                    />
                  </q-card-section>
                </q-card>

                <q-card
                  bordered
                  class="row col-xs-3 col-sm-3 col-md-2 col-lg-2 q-ma-xs wrap animated fadeInDown"
                  style="
                    border-radius: 1rem;
                    background: linear-gradient(to bottom, #3884e4, #6ecaec);
                  "
                >
                  <q-card-section>
                    <q-icon color="green-4" size="3rem" name="public" />
                    <div class="text-subtitle1 text-bold">Combo</div>
                  </q-card-section>

                  <q-card-section
                    class="text-green-8 text-bottom"
                    style="border-radius: 1rem; margin: 0; padding: 0"
                  >
                    <q-btn
                      style="margin: 0; padding: 2px"
                      class="full-width"
                      color="green-8"
                      label="Aproveite"
                      flat
                    />
                  </q-card-section>
                </q-card>

                <q-card
                  bordered
                  class="row col-xs-3 col-sm-3 col-md-2 col-lg-2 q-ma-xs animated fadeInDown"
                  style="
                    border-radius: 1rem;
                    background: linear-gradient(to bottom, #3884e4, #6ecaec);
                  "
                >
                  <q-card-section>
                    <q-icon color="green-4" size="3rem" name="public" />
                    <div class="text-subtitle1 text-bold">Monte</div>
                  </q-card-section>

                  <q-card-section
                    class="text-green-8 text-bottom"
                    style="border-radius: 1rem; margin: 0; padding: 0"
                  >
                    <q-btn
                      style="margin: 0; padding: 2px"
                      class="full-width"
                      color="green-8"
                      label="Aproveite"
                      flat
                    />
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- MAin -->
      <div :class="!$q.screen.gt.xs ? `` : `q-ml-xl q-mr-xl q-mb-xl `">
        <!-- MAin -->
        <div class="full-width q-pa-xs">
          <!-- setion 0 -->
          <div class="text-bold text-uppercase q-mt-lg q-mb-lg">dashboard</div>

          <div class="row justify-center q-gutter-lg animated fadeInDown">
            <div class="col-xs-11 col-sm-5 q-mb-lg">
              <q-table
                class="bg-transparent card"
                style="box-shadow: none"
                title="Treats"
                :rows="rows"
                :columns="columns"
                row-key="name"
              />
            </div>
            <div class="col-xs-11 col-sm-5 q-mb-lg">
              <q-card
                bordered
                class="col-xs-12 col-sm-3 col-md-3 col-lg-2"
                style="outline: rgb(40, 190, 165) solid 0.1875rem"
              >
                <q-badge
                  style="
                    background-color: rgb(40, 190, 165);
                    border-radius: 1rem 1rem 0px;
                    color: rgb(255, 255, 255);
                    font-size: 0.875rem;
                    font-weight: 600;
                    padding: 0.3125rem 1rem;
                    position: absolute;
                    right: 0px;
                    top: -10px;
                    transition: all 0.3s ease-in-out 0s;
                    text-wrap: wrap;
                  "
                  floating
                  >AQUI 300Mb POR 74,90/mês</q-badge
                >

                <q-card-section>
                  <q-avatar round color="primary" text-color="white"
                    >J</q-avatar
                  >
                  <div class="text-grey text-subtitle1">Internet Fibra</div>
                  <div class="text-h4 text-bold">300 Mega</div>
                  <div class="text-grey text-subtitle1">
                    + Casa ON 1 Equipamento
                  </div>
                </q-card-section>

                <q-separator white inset />

                <q-separator white inset />

                <q-card-section>
                  <div class="text-grey text-strike">140.00 MZN</div>
                  <div
                    style="
                      color: rgb(27, 126, 108);
                      cursor: pointer;
                      font-size: 1rem;
                      font-weight: 700;
                    "
                    class="text-h6 text-underline"
                  >
                    100.00 MZN
                  </div>
                  <div class="text-body2 text-grey">
                    Valor do pacote com MULTIPLICADOR DE WI-FI por 12 meses com
                    débito automático.
                  </div>
                  <q-btn
                    color="amber"
                    class="full-width q-ma-md text-bold text-black"
                    glossy
                    label="Assine ja"
                  />
                </q-card-section>
              </q-card>
            </div>
          </div>

          <!-- section 1 -->
          <div class="row justify-center q-pa-lg animated fadeInDown">
            <div class="col-xs-12 col-sm-6">
              <div class="text-bold text-uppercase q-mt-lg q-mb-lg">
                dashboard
              </div>
              <!-- menu 1 -->
              <div class="col-4 q-ma-md" style="position: relative">
                <q-banner
                  class="bg-transparent text-black"
                  style="max-height: 60px"
                >
                  <div class="row items-center justify-between">
                    <div class="col-2">
                      <q-icon round color="primary" name="person" />
                    </div>
                    <div class="col-2">
                      <div class="text-subtitle1">Entradas</div>
                    </div>

                    <div class="col-8 text-right text-bold">MZN +500</div>
                  </div>
                </q-banner>

                <q-separator />

                <q-banner
                  class="bg-transparent text-black"
                  style="max-height: 60px"
                >
                  <div class="row items-center justify-between">
                    <div class="col-2">
                      <q-icon round color="primary" name="person" />
                    </div>
                    <div class="col-2">
                      <div class="text-subtitle1">Entradas</div>
                    </div>

                    <div class="col-8 text-right text-bold">MZN +500</div>
                  </div>
                </q-banner>
              </div>
            </div>

            <div class="col-xs-12 col-sm-6 animated fadeInDown">
              <div class="text-bold text-uppercase q-mt-lg q-mb-lg">
                dashboard
              </div>

              <!-- menu 1 -->
              <div
                class="col-4 q-ma-md row justify-around"
                style="position: relative"
              >
                <q-banner
                  class="bg-white text-black col-xs-12 col-sm-12 col-md-12 col-lg-5 q-pt-lg q-mt-md q-pb-lg"
                  style="border-radius: 1rem"
                >
                  <div class="row items-center justify-between">
                    <div class="col-2">
                      <q-icon round color="primary" name="person" />
                    </div>
                    <div class="col-2">
                      <div class="text-subtitle1">Entradas</div>
                    </div>

                    <div class="col-8 text-right text-bold">MZN +500</div>
                  </div>
                </q-banner>

                <q-banner
                  class="bg-white text-black col-xs-12 col-sm-12 col-md-12 col-lg-5 q-pt-lg q-mt-md q-pb-lg"
                  style="border-radius: 1rem"
                >
                  <div class="row items-center justify-between">
                    <div class="col-2">
                      <q-icon round color="primary" name="person" />
                    </div>
                    <div class="col-2">
                      <div class="text-subtitle1">Entradas</div>
                    </div>

                    <div class="col-8 text-right text-bold">MZN +500</div>
                  </div>
                </q-banner>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { defineComponent } from "vue";
import { ref } from "vue";
import { $logos, $ilustre } from "/src/assets/assets.js";
import GradientButton from "/src/components/btn/GradientButton.vue";
const ilustre = ref($ilustre);
const logos = ref($logos);

const columns = [
  {
    name: "name",
    required: true,
    label: "Dessert (100g serving)",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "calories",
    align: "center",
    label: "Calories",
    field: "calories",
    sortable: true,
  },
  { name: "fat", label: "Fat (g)", field: "fat", sortable: true },
  { name: "carbs", label: "Carbs (g)", field: "carbs" },
  { name: "protein", label: "Protein (g)", field: "protein" },
  { name: "sodium", label: "Sodium (mg)", field: "sodium" },
  {
    name: "calcium",
    label: "Calcium (%)",
    field: "calcium",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: "iron",
    label: "Iron (%)",
    field: "iron",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
];

const rows = [
  {
    name: "Frozen Yogurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: "14%",
    iron: "1%",
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: "8%",
    iron: "1%",
  },
  {
    name: "Eclair",
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: "6%",
    iron: "7%",
  },
  {
    name: "Cupcake",
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: "3%",
    iron: "8%",
  },
  {
    name: "Gingerbread",
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: "7%",
    iron: "16%",
  },
  {
    name: "Jelly bean",
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    sodium: 50,
    calcium: "0%",
    iron: "0%",
  },
  {
    name: "Lollipop",
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
    calcium: "0%",
    iron: "2%",
  },
  {
    name: "Honeycomb",
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
    calcium: "0%",
    iron: "45%",
  },
  {
    name: "Donut",
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    sodium: 326,
    calcium: "2%",
    iron: "22%",
  },
  {
    name: "KitKat",
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    sodium: 54,
    calcium: "12%",
    iron: "6%",
  },
];

export default defineComponent({
  name: "IndexPage",
  data() {
    return {
      showLeftArrow: false,
      showRightArrow: false,
    };
  },
  components: {
    // GradientButton,
  },
  methods: {
    checkScroll() {
      const scrollContainer = this.$refs.scrollContainer;
      if (scrollContainer.scrollLeft > 0) {
        this.showLeftArrow = true;
      } else {
        this.showLeftArrow = false;
      }

      if (
        scrollContainer.scrollLeft <
        scrollContainer.scrollWidth - scrollContainer.clientWidth
      ) {
        this.showRightArrow = true;
      } else {
        this.showRightArrow = false;
      }
      this.showRightArrow = true;
      this.showLeftArrow = true;
    },
    scrollLeft() {
      const scrollContainer = this.$refs.scrollContainer;
      scrollContainer.scrollBy({
        left: -200, // or whatever value you want
        behavior: "smooth",
      });
    },
    scrollRight() {
      const scrollContainer = this.$refs.scrollContainer;
      scrollContainer.scrollBy({
        left: 200, // or whatever value you want
        behavior: "smooth",
      });
    },
  },

  setup() {
    const $q = useQuasar();
    const name = ref(null);
    const age = ref(null);
    const accept = ref(false);
    const showMenu = ref(false);
    const showMenu2 = ref(false);
    return {
      name,
      age,
      accept,
      showMenu,
      showMenu2,
      toggleLeftDrawer() {
        showMenu.value = !showMenu.value;
      },
      toggleLeftDrawer2() {
        showMenu2.value = !showMenu2.value;
      },

      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "You need to accept the license and terms first",
          });
        } else {
          $q.notify({
            color: "green-4",
            textColor: "white",
            icon: "cloud_done",
            message: "Submitted",
          });
        }
      },

      onReset() {
        name.value = null;
        age.value = null;
        accept.value = false;
      },
      visibleColumns: ref([
        "calories",
        "desc",
        "fat",
        "carbs",
        "protein",
        "sodium",
        "calcium",
        "iron",
      ]),
      columns,
      drawer: ref(false),
      rows,
      slide: ref("style"),
      ilustre,
      logos,
      standard: ref({
        min: 10,
        max: 35,
      }),
    };
  },
});
</script>

<style>
.menu.col-12 {
  background: linear-gradient(to bottom, #faf1f4, #df8aa8);
  width: 100%;
  padding: 10px;
  margin-bottom: 5px;
  transition: background-color 0.3s ease;
}

.menu.col-12.clicked {
  background-color: purple;
  color: white; /* Altera a cor do texto para branco ao passar o mouse */
}

.card-1 {
  /* -webkit-box-pack: justify; */
  border-radius: 1rem;
  box-sizing: border-box;

  outline: rgb(226, 226, 226) solid 0.09375rem;
  transition: all 0.3s linear 0s;
}
.card-highlight {
  outline: rgb(40, 190, 165) solid 0.1875rem;
}
.card-full {
  min-height: 35.9375rem;
}
.card {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-box-pack: justify;
  border-radius: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1.0625rem 0.1875rem 0.1875rem;
  outline: rgb(226, 226, 226) solid 0.09375rem;
  padding: 1.5rem;
  transition: all 0.3s linear 0s;
}

.swiper-slide {
  animation: 0.8s ease-in-out 0s 1 normal forwards running fadeIn;
  height: auto;
}

.card__badge {
  background-color: rgb(40, 190, 165);
  border-radius: 1rem 1rem 0px;
  color: rgb(255, 255, 255);
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.3125rem 1rem;
  position: absolute;
  right: 0px;
  top: 0px;
  transition: all 0.3s ease-in-out 0s;
}
.offerTile__productsIcons {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}
.gradient-effect {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0)
  );
  z-index: -1;
}

/* Adicione a classe 'animated' e a classe da animação desejada */
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}
</style>
