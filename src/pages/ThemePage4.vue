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

  <!-- THEME 4 -->
  <div
    style="background: linear-gradient(to bottom, #faf1f4, #df8aa8)"
    class="row q-pa-md justify-between"
  >
    <div
      class="card col-sm-3 col-xs-12 col-md-3 col-lg-3"
      style="background: linear-gradient(to bottom, #faf1f4, #fbebef)"
    >
      <!-- heider -->
      <div class="row justify-between items-center animated slideInDown">
        <div class="col-5">
          <div class="row q-pa-sm items-center">
            <q-avatar size="20px">
              <img src="https://cdn.quasar.dev/img/avatar.png" />
            </q-avatar>

            <div class="q-pl-sm text-subtitle1">Design</div>
          </div>
        </div>

        <div class="col-6 text-right">
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar.png" />
          </q-avatar>
        </div>
      </div>
      <!-- pesquisa -->
      <div
        class="col-4 q-ma-md animated jackInTheBox"
        style="position: relative"
      >
        <input
          type="text"
          @input="debounceListarProdutos"
          v-model="searchTerm"
          style="
            width: 100%;
            height: 40px; /* Ajuste a altura conforme necessário */
            padding-left: 40px;
            font-size: 16px; /* Ajuste o tamanho da fonte conforme necessário */
            box-sizing: border-box;
            border-width: 0px;
            border-radius: 3rem;
            background-color: #f9daec;
          "
          placeholder="Pesquisar..."
        />
        <i
          class="material-icons"
          style="
            position: absolute;
            top: 10px; /* Ajuste o posicionamento conforme necessário */
            left: 10px; /* Ajuste o posicionamento conforme necessário */
            font-size: 24px;
          "
          >search</i
        >
      </div>

      <!-- menu 1 -->
      <div
        class="col-4 q-ma-md animated slideInRight"
        style="position: relative"
      >
        <q-banner class="bg-transparent text-black" style="max-height: 60px">
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

        <q-banner class="bg-transparent text-black" style="max-height: 60px">
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

      <!-- menu 2 -->
      <q-card-section>
        <div class="row justify-between animated rotateInUpLeft">
          <div class="text-subtitle1 text-bold">Menu</div>
        </div>

        <div
          class="row justify-center q-gutter-lg q-pa-md animated rotateInUpLeft"
        >
          <div
            :class="
              $q.screen.gt.xs
                ? 'row col-sm-12 col-xs-12 bg-amber-4 card'
                : 'row col-sm-2 col-xs-5 bg-amber-4 card'
            "
          >
            <div class="text-subtitle1">Pais</div>
            <div class="text-h6 wrap-xl">Mocambique</div>
          </div>

          <div
            :class="
              $q.screen.gt.xs
                ? 'row col-sm-12 col-xs-12 bg-red-4 card'
                : 'collumn col-sm-2 col-xs-5 bg-red-4 card'
            "
          >
            <div class="text-subtitle1">Cidade</div>
            <div class="text-h6">Maputo</div>
          </div>

          <div
            :class="
              $q.screen.gt.xs
                ? 'collumn col-sm-12 col-xs-12 bg-green-4 card'
                : 'collumn col-sm-2 col-xs-5 bg-green-4 card'
            "
          >
            <div class="text-subtitle1">C. Postal</div>
            <div class="text-h6 text-wrap">111 11</div>
          </div>

          <div
            :class="
              $q.screen.gt.xs
                ? 'collumn col-sm-12 col-xs-12 bg-blue-4 card'
                : 'collumn col-sm-2 col-xs-5 bg-blue-4 card'
            "
          >
            <div class="text-subtitle1">Bi</div>
            <div class="text-h6 text-wrap">234556</div>
          </div>

          <q-banner
            class="card-1 bg-green-1 text-black"
            style="max-height: 60px; width: 100%"
          >
            <div class="row items-center">
              <div class="col-xs-6">
                <div class="text-subtitle2 text-center">My coupon</div>
              </div>
              <div v-if="!$q.screen.gt.xs" class="col-6 text-center">
                <div class="text-subtitle1 text-green text-bold text-uppercase">
                  freedelivery
                </div>
              </div>
            </div>
          </q-banner>

          <q-banner
            class="card-1 bg-grey-2 text-black"
            style="max-height: 60px; width: 100%"
          >
            <div class="row items-center">
              <div class="col-xs-6">
                <div class="text-subtitle2 text-center">Total</div>
              </div>
              <div v-if="!$q.screen.gt.xs" class="col-6 text-center">
                <div class="text-subtitle1 text-bold text-uppercase">
                  MZN 400.00
                </div>
              </div>
            </div>
          </q-banner>
        </div>
      </q-card-section>
    </div>

    <!-- Main -->
    <div class="q-pt-md col-xs-12 col-sm-8 col-md-8 col-lg-8">
      <!-- Menu bar -->
      <div class="q-pa-md col-sm-4 col-xs- col-12 row">
        <div
          class="col-md-8 col-lg-8 col-xs-12 q-gutter-md row items-center overflow-x-auto"
          style="
            display: flex;
            flex-wrap: nowrap;
            white-space: nowrap;
            -ms-overflow-style: none; /* for Internet Explorer, Edge */
            scrollbar-width: none; /* for Firefox */
            overflow-x: scroll;
          "
          @scroll="checkScroll"
          ref="scrollContainer"
        >
          <!-- Botões com setas -->
          <q-btn
            style="
              width: 40px;
              height: 40px;
              min-width: auto;
              padding: 0;
              margin-right: 30px;
              position: relative;
            "
            v-show="showLeftArrow"
            @click="scrollLeft"
            icon="arrow_left"
            flat
          />

          <!-- Conteúdo do scroll -->
          <q-btn
            v-for="index in 20"
            :key="index"
            rounded
            flat
            class="bg-pink-2 text-white"
            label="Botão"
            style="margin-right: 10px"
          />
          <q-btn
            style="
              width: 40px;
              height: 40px;
              min-width: auto;
              padding: 0;
              margin-left: 30px;
            "
            v-show="showRightArrow"
            @click="scrollRight"
            icon="arrow_right"
            flat
          />
        </div>

        <div
          class="col-md-4 col-lg-4 col-xs-12 q-ml-md text-right animated jackInTheBox"
        >
          <q-btn
            icon="add"
            rounded
            class="text-white"
            label="Adicionar Relatorio"
            style="background: linear-gradient(to right, #faf1f4, #df8aa8)"
          />
        </div>
      </div>

      <!-- cards -->
      <div class="q-pt-xl q-pl5-xl">
        <div class="text-h5 text-bold animated jackInTheBox">Dashboard</div>

        <div class="q-pa-md text-white row justify-center animated slideInLeft">
          <q-card
            bordered
            class="row bg-pink-11 col-xs-12 col-sm-3 col-md-3 col-lg-2 q-ma-md"
            style="border-radius: 1rem"
          >
            <q-card-section>
              <q-icon color="green-4" size="3rem" name="public" />
              <div class="text-subtitle1 text-bold">Monte um combo</div>
              <div class="text-subtitle1">Do seu jeito com poucos cliques</div>
            </q-card-section>

            <q-card-section>
              <div
                class="text-start text-green-8 text-bottom"
                style="border-radius: 1rem"
              >
                <q-btn
                  size="0.75rem"
                  color="green-8"
                  icon="chevron_right"
                  label="Aproveite"
                  flat
                />
              </div>
            </q-card-section>
          </q-card>

          <q-card
            bordered
            class="row k col-xs-12 col-sm-3 col-md-3 col-lg-2 q-ma-md"
            style="
              border-radius: 1rem;
              background: linear-gradient(to bottom, #ee99ac, #8a4be2);
            "
          >
            <q-card-section>
              <q-icon color="green-4" size="3rem" name="public" />
              <div class="text-subtitle1 text-bold">Monte um combo</div>
              <div class="text-subtitle1">Do seu jeito com poucos cliques</div>
            </q-card-section>

            <q-card-section>
              <div
                class="text-start text-green-8 text-bottom"
                style="border-radius: 1rem"
              >
                <q-btn
                  size="0.75rem"
                  color="green-8"
                  icon="chevron_right"
                  label="Aproveite"
                  flat
                />
              </div>
            </q-card-section>
          </q-card>

          <q-card
            bordered
            class="row col-xs-12 col-sm-3 col-md-3 col-lg-2 q-ma-md"
            style="
              border-radius: 1rem;
              background: linear-gradient(to bottom, #3884e4, #6ecaec);
            "
          >
            <q-card-section>
              <q-icon color="green-4" size="3rem" name="public" />
              <div class="text-subtitle1 text-bold">Monte um combo</div>
              <div class="text-subtitle1">Do seu jeito com poucos cliques</div>
            </q-card-section>

            <q-card-section>
              <div
                class="text-start text-green-8 text-bottom"
                style="border-radius: 1rem"
              >
                <q-btn
                  size="0.75rem"
                  color="green-8"
                  icon="chevron_right"
                  label="Aproveite"
                  flat
                />
              </div>
            </q-card-section>
          </q-card>
        </div>

        <div class="q-pa-md text-white row animated slideInRight">
          <div class="col-xs-12 col-md-6">
            <div class="text-subtitle1 text-pink-1">Dashboard</div>
            <div class="card bg-pink-1">
              <div class="row justify-around">
                <q-range
                  v-model="standard"
                  :min="0"
                  :max="50"
                  vertical
                  label
                  switch-label-side
                />

                <q-range
                  v-model="standard"
                  :min="0"
                  :max="50"
                  color="green"
                  vertical
                  label-always
                />

                <q-range
                  v-model="standard"
                  :min="0"
                  :max="50"
                  color="red"
                  vertical
                  switch-label-side
                />

                <q-range
                  v-model="standard"
                  :min="0"
                  :max="50"
                  color="yellow"
                  vertical
                  switch-label-side
                />

                <q-range
                  v-model="standard"
                  :min="0"
                  :max="50"
                  color="grey"
                  vertical
                  label-always
                />
              </div>
            </div>
          </div>

          <div class="col-xs-12 col-md-6">
            <div class="text-subtitle1 text-pink-1">Dashboard</div>
            <div class="card bg-transparent">
              <div class="row justify-around">
                <div class="collumn">
                  <q-avatar>
                    <img src="https://cdn.quasar.dev/img/avatar.png" />
                  </q-avatar>
                  <div class="text-subtitle1 text-pink-1">claiton</div>
                  <div class="text-subtitle1 text-black twext-bold">
                    800 000
                  </div>
                </div>

                <div class="collumn">
                  <q-avatar>
                    <img src="https://cdn.quasar.dev/img/avatar.png" />
                  </q-avatar>
                  <div class="text-subtitle1 text-pink-1">claiton</div>
                  <div class="text-subtitle1 text-black twext-bold">
                    800 000
                  </div>
                </div>

                <div class="collumn">
                  <q-avatar>
                    <img src="https://cdn.quasar.dev/img/avatar.png" />
                  </q-avatar>
                  <div class="text-subtitle1 text-pink-1">claiton</div>
                  <div class="text-subtitle1 text-black twext-bold">
                    800 000
                  </div>
                  <div class="text-subtitle1 text-pink-1">claiton</div>
                  <div class="text-subtitle1 text-pink-1">claiton</div>
                </div>

                <div class="collumn">
                  <q-avatar>
                    <img src="https://cdn.quasar.dev/img/avatar.png" />
                  </q-avatar>
                  <div class="text-subtitle1 text-pink-1">claiton</div>
                  <div class="text-subtitle1 text-black twext-bold">
                    800 000
                  </div>
                </div>
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
