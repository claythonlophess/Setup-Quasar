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

  <!-- THEME 3 -->
  <!-- cards -->
  <div class="q-pt-xl q-pa-md">
    <div class="text-h3 text-bold">Profile</div>
    <div class="text-h6 text-bold q-pt-sm">
      Aproveite os melhores combos para curtir filmes, jogar e navegar na
      internet
    </div>
    <div class="row justify-center q-gutter-md">
      <div class="col-xs-12 col-sm-12 col-md-5 q-pa-md animated jackInTheBox">
        <q-card bordered class="text-white">
          <q-card-section class="bg-blue-6">
            <q-avatar
              size="5rem"
              color="red"
              text-color="white"
              icon="directions"
            />
            <div class="text-h6">Claiton Lopes</div>

            <div class="row justify-between">
              <div class="text-subtitle2">Engenheiro de software</div>

              <div class="">
                <div style="background-color: transparent">
                  <div class="text-subtitle1 text-weight-bold">...</div>
                  <q-menu
                    transition-show="flip-right"
                    transition-hide="flip-left"
                  >
                    <q-list style="min-width: 100px">
                      <q-item clickable>
                        <q-item-section>Editar</q-item-section>
                      </q-item>
                      <q-item clickable>
                        <q-item-section>Mudar Senha</q-item-section>
                      </q-item>
                      <q-separator />
                      <q-item clickable>
                        <q-item-section>Terminar sessao</q-item-section>
                      </q-item>
                    </q-list>
                  </q-menu>
                </div>
              </div>
            </div>
          </q-card-section>

          <q-card-section>
            <q-form
              @submit="onSubmit"
              @reset="onReset"
              class="q-gutter-md text-black"
            >
              <q-input
                filled
                v-model="name"
                label="Your name *"
                hint="Name and surname"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Please type something',
                ]"
              />

              <q-input
                filled
                v-model="name"
                label="Your name *"
                hint="Name and surname"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Please type something',
                ]"
              />

              <q-input
                filled
                v-model="name"
                label="Your name *"
                hint="Name and surname"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Please type something',
                ]"
              />

              <q-input
                filled
                v-model="name"
                label="Your name *"
                hint="Name and surname"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Please type something',
                ]"
              />

              <q-input
                filled
                type="number"
                v-model="age"
                label="Your age *"
                lazy-rules
                :rules="[
                  (val) =>
                    (val !== null && val !== '') || 'Please type your age',
                  (val) => (val > 0 && val < 100) || 'Please type a real age',
                ]"
              />

              <q-toggle v-model="accept" label="Suspender conta" />
            </q-form>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-xs-12 col-sm-12 col-md-5 q-pa-md animated jackInTheBox">
        <q-card bordered class="text-black q-pa-md">
          <q-card-section class="card">
            <q-avatar
              size="5rem"
              color="red"
              text-color="white"
              icon="directions"
            />
            <div class="text-h6">Claiton Lopes</div>

            <div class="row justify-between">
              <div class="text-subtitle2">Engenheiro de software</div>

              <div class="">
                <q-btn
                  rounded
                  icon="edit"
                  label="Editar"
                  style="background-color: transparent"
                >
                  <q-menu
                    transition-show="flip-right"
                    transition-hide="flip-left"
                  >
                    <q-list style="min-width: 100px">
                      <q-item clickable>
                        <q-item-section>Editar</q-item-section>
                      </q-item>
                      <q-item clickable>
                        <q-item-section>Mudar Senha</q-item-section>
                      </q-item>
                      <q-separator />
                      <q-item clickable>
                        <q-item-section>Terminar sessao</q-item-section>
                      </q-item>
                    </q-list>
                  </q-menu>
                </q-btn>
              </div>
            </div>
          </q-card-section>

          <q-card-section class="card">
            <div class="row justify-between">
              <div class="text-subtitle1 text-bold">Dados Pessoais</div>
              <div class="">
                <q-btn
                  rounded
                  icon="edit"
                  label="Editar"
                  style="background-color: transparent"
                >
                </q-btn>
              </div>
            </div>
            <div class="row q-gutter-lg">
              <div class="collumn col-5">
                <div class="text-subtitle1">Nome</div>
                <div class="text-h6">Claiton</div>
              </div>

              <div class="collumn col-5">
                <div class="text-subtitle1">Apelido</div>
                <div class="text-h6">Lopes</div>
              </div>

              <div class="collumn col-5">
                <div class="text-subtitle1">Email</div>
                <div class="text-h6">Claiton@Lopes.com</div>
              </div>

              <div class="collumn col-5">
                <div class="text-subtitle1">Telefone</div>
                <div class="text-h6">23456789056</div>
              </div>
            </div>
          </q-card-section>

          <q-card-section class="card">
            <div class="row justify-between">
              <div class="text-subtitle1 text-bold">Endereco</div>
              <div class="">
                <q-btn
                  rounded
                  icon="edit"
                  label="Editar"
                  style="background-color: transparent"
                >
                </q-btn>
              </div>
            </div>
            <div class="row q-gutter-lg">
              <div class="collumn col-5">
                <div class="text-subtitle1">Pais</div>
                <div class="text-h6">Mocambique</div>
              </div>

              <div class="collumn col-5">
                <div class="text-subtitle1">Cidade</div>
                <div class="text-h6">Maputo</div>
              </div>

              <div class="collumn col-5">
                <div class="text-subtitle1">Codico Postal</div>
                <div class="text-h6">11 111 11</div>
              </div>

              <div class="collumn col-5">
                <div class="text-subtitle1">Bi</div>
                <div class="text-h6">23456784569056</div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-xs-12 col-sm-12 col-md-5 q-pa-md animated jackInTheBox">
        <q-card bordered class="text-black q-pa-md">
          <q-card-section class="card1 text-center justify-center items-center">
            <div class="row justify-between items-center">
              <div class="col text-right">
                <q-btn round color="primary" icon="camera" />
              </div>
              <div class="collumn">
                <q-avatar
                  size="5rem"
                  color="red"
                  text-color="white"
                  icon="directions"
                />
                <div class="text-h6">Claiton Lopes</div>
                <div class="text-subtitle2">Engenheiro de software</div>
              </div>
              <div class="col text-left">
                <q-btn round color="secondary" icon="edit" />
              </div>
            </div>
          </q-card-section>

          <q-card-section class="card1 q-gutter-lg">
            <q-banner
              class="card-1 bg-grey-2 text-black"
              style="max-height: 60px"
            >
              <div class="row items-center">
                <div class="col-2">
                  <q-btn round color="primary" icon="person" />
                </div>
                <div class="col-10">
                  <div class="text-subtitle1">Minha conta</div>
                </div>
              </div>
            </q-banner>

            <q-banner
              class="card-1 bg-grey-2 text-black"
              style="max-height: 60px"
            >
              <div class="row items-center">
                <div class="col-2">
                  <q-btn round color="primary" icon="message" />
                </div>
                <div class="col-10">
                  <div class="text-subtitle1">Notificacoes</div>
                </div>
              </div>
            </q-banner>

            <q-banner
              class="card-1 bg-grey-2 text-black"
              style="max-height: 60px"
            >
              <div class="row items-center">
                <div class="col-2">
                  <q-btn round color="primary" icon="help" />
                </div>
                <div class="col-10">
                  <div class="text-subtitle1">Centro de ajuda</div>
                </div>
              </div>
            </q-banner>
          </q-card-section>

          <q-card-section class="card">
            <div class="row justify-between">
              <div class="text-subtitle1 text-bold">Endereco</div>
              <div class="">
                <q-btn
                  rounded
                  icon="edit"
                  label="Editar"
                  style="background-color: transparent"
                >
                </q-btn>
              </div>
            </div>

            <div class="row q-gutter-lg q-pa-md">
              <div class="row col-5 bg-amber-4 card">
                <div class="text-subtitle1">Pais</div>
                <div class="text-h6">Mocambique</div>
              </div>

              <div class="collumn col-5 bg-red-4 card">
                <div class="text-subtitle1">Cidade</div>
                <div class="text-h6">Maputo</div>
              </div>

              <div class="collumn col-5 bg-green-4 card">
                <div class="text-subtitle1">Codico Postal</div>
                <div class="text-h6">11 111 11</div>
              </div>

              <div class="collumn col-5 bg-blue-4 card">
                <div class="text-subtitle1">Bi</div>
                <div class="text-h6">23456784569056</div>
              </div>

              <q-banner
                class="card-1 bg-green-1 text-black"
                style="max-height: 60px; width: 100%"
              >
                <div class="row items-center">
                  <div class="col-6">
                    <div class="text-subtitle2 text-center">My coupon</div>
                  </div>
                  <div class="col-6 text-center">
                    <div
                      class="text-subtitle1 text-green text-bold text-uppercase"
                    >
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
                  <div class="col-6">
                    <div class="text-subtitle2 text-center">Total</div>
                  </div>
                  <div class="col-6 text-center">
                    <div class="text-subtitle1 text-bold text-uppercase">
                      MZN 400.00
                    </div>
                  </div>
                </div>
              </q-banner>
            </div>
          </q-card-section>
        </q-card>
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
