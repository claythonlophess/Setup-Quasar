<template>
  <q-layout
    view="lHh Lpr lff"
    container
    style="height: 100vh"
    class="shadow-2 rounded-borders"
  >
    <q-header elevated class="bg-white text-black">
      <q-toolbar
        class=""
        :style="$q.screen.gt.xs ? 'padding: 10px' : 'padding: 10px'"
      >
        <q-btn
          class="animate6d fadeOutD1own"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="drawer = !drawer"
        />
        <div v-if="$q.screen.gt.xs">Quasar v{{ $q.version }}</div>

        <q-toolbar-title> Quasar App </q-toolbar-title>
        <div class="col-xs-10 col-sm-4 q-mr-md" style="position: relative">
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
              border-radius: 3rem;
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
        <div v-if="!$q.screen.gt.xs || $q.screen.gt.sm">87 714 0136</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" show-if-above :width="200" :breakpoint="400">
      <q-scroll-area
        style="
          height: calc(100% - 150px);
          margin-top: 150px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list padding>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>

            <q-item-section> Inicio </q-item-section>
          </q-item>

          <q-item active clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="list" />
            </q-item-section>

            <q-item-section> Historico </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="place" />
            </q-item-section>

            <q-item-section> Revisao </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="radio" />
            </q-item-section>

            <q-item-section> Radio </q-item-section>
          </q-item>

        </q-list>
      </q-scroll-area>

      <div
        class="absolute-top q-pa-lg"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent q-pa-sm">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <div class="text-weight-bold">Razvan Stoenescu</div>
          <div>@rstoenescu</div>
        </div>
      </div>

      <div
        class="absolute-bottom q-pa-sm"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 50px"
      >
        <q-btn class="full-width" outline label="Sair"  color="purple"/>
      </div>
    </q-drawer>

    <q-page-container>
      <q-page padding>
        <div class="row justify-center">
          <div class="col-12 row justify-center">
            <div
              class="col-xs-12 col-sm-4 q-ma-sm"
              style="background-color: #e0deed; border-radius: 1rem"
            >
              <div class="row justify-center">
                <div class="col-12">
                  <img
                    :src="ilustre.podcast"
                    style="max-width: 100%; max-height: 100%; height: auto"
                  />
                </div>
                <div class="col-12">Could not retrieve travel data.</div>
              </div>
            </div>

            <div
              class="col-xs-12 col-sm-7 q-pa-md q-ma-sm"
              style="background-color: #e0deed; border-radius: 1rem"
            >
              <q-form
                @submit="onSubmitMedia"
                @reset="onResetMedia"
                class="q-gutter-md"
              >
                <q-input
                  outlined
                  v-model="title"
                  label="Titulo"
                  label-color="white"
                  text-color="white"
                  style="background-color: #9690c5; border-radius: 2rem"
                  rounded
                />
                <q-input
                  outlined
                  v-model="description"
                  label="Descricao"
                  type="textarea"
                  label-color="white"
                  text-color="white"
                  style="background-color: #9690c5; border-radius: 2rem"
                  rounded
                />

                <div class="flex justify-center">
                  <input
                    type="file"
                    @change="handleFileUpload"
                    accept=".pdf,.mp4,.avi,.mov,.wmv"
                  />
                  <div v-if="filePreviewUrl">
                    <iframe
                      :src="filePreviewUrl"
                      width="400"
                      height="300"
                    ></iframe>
                  </div>
                </div>
                <div>
                  <q-btn label="Criar" type="submit" color="primary" />
                  <q-btn
                    v-close-popup
                    label="Cancelar"
                    type="reset"
                    color="primary"
                    flat
                    class="q-ml-sm"
                  />
                </div>
              </q-form>
            </div>
          </div>

          <div class="col-12 row justify-center">
            <div
              class="col-xs-12 col-sm-7 q-ma-sm q-pa-lg"
              style="background-color: #9690c5; border-radius: 1rem"
            >
              <div class="text-subtitle1 text-white">Recentes</div>
              <div class="q-gutter-lg">
                <q-banner
                  class="text-black"
                  style="
                    max-height: 60px;
                    background-color: #e0deed;
                    border-radius: 1rem;
                  "
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
                  class="text-black"
                  style="
                    max-height: 60px;
                    background-color: #e0deed;
                    border-radius: 1rem;
                  "
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
                  class="text-black"
                  style="
                    max-height: 60px;
                    background-color: #e0deed;
                    border-radius: 1rem;
                  "
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

            <div
              class="col-xs-12 col-sm-4 q-pa-md q-ma-sm"
              style="background-color: #e0deed; border-radius: 1rem"
            >
              <q-avatar rounded size="48px">
                <img src="https://cdn.quasar.dev/img/avatar.png" />
                <q-badge floating color="teal">new</q-badge>
              </q-avatar>

              <div class="col-4 q-ma-md row justify-around">

                <q-banner
                  class="bg-white text-black col-5 q-pt-lg q-pb-lg"
                  style="border-radius: 1rem"
                >
                  <div class="row items-center justify-between">
                    <div class="col-2">
                      <q-icon round color="primary" name="person" />
                    </div>
                    <div class="col-8">
                      <div class="text-subtitle1">Entradas</div>
                    </div>
                  </div>
                </q-banner>

                <q-banner
                  class="bg-white text-black col-5 q-pt-lg q-pb-lg"
                  style="border-radius: 1rem"
                >
                  <div class="row items-center justify-between">
                    <div class="col-2">
                      <q-icon round color="primary" name="person" />
                    </div>
                    <div class="col-8">
                      <div class="text-subtitle1">Entradas</div>
                    </div>
                  </div>
                </q-banner>

              </div>
              <div class="q-gutter-sm q-mt-md">
              <q-banner
                  class="text-black"
                  style="
                    max-height: 60px;
                    background-color: #9690C5;
                    border-radius: 1rem;
                  "
                >
                  <div class="row items-center justify-between">
                    <div class="col-2">
                      <q-icon round color="primary" name="person" />
                    </div>


                    <div class="col-8 text-right text-bold">MZN +500</div>
                  </div>
                </q-banner>

                <q-banner
                  class="text-black"
                  style="
                    max-height: 60px;
                    background-color: #9690C5;
                    border-radius: 1rem;
                  "
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
                  class="text-black"
                  style="
                    max-height: 60px;
                    background-color: #9690C5;
                    border-radius: 1rem;
                  "
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
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { useQuasar } from "quasar";
import { defineComponent } from "vue";
import { ref } from "vue";
import { $logos, $ilustre } from "/src/assets/assets.js";
import GradientButton from "/src/components/btn/GradientButton.vue";
const ilustre = ref($ilustre);
const logos = ref($logos);

export default {
  setup() {
    const title = ref(null);
    const description = ref(null);
    return {
      drawer: ref(false),
      title,
      description,
      ilustre,
      logos,
    };
  },
};
</script>
