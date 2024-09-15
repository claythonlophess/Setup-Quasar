<template>
  <q-layout
    view="lHh Lpr lff"
    container
    style="height: 100vh"
    class="shadow-2 rounded-borders"
  >
    <q-header elevated class="bg-transparent text-black">
      <q-toolbar
        class="row text-center justify-between"
        :style="$q.screen.gt.xs ? 'padding: 10px' : 'padding: 10px'"
      >
        <q-btn
          v-if="false"
          class="animate6d fadeOutD1own"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="drawer = !drawer"
        />

        <q-toolbar-title
          class="text-weight-bold text-uppercase animated bounceInDown"
        >
          Portifolio
        </q-toolbar-title>

        <div
          class="animated bounceIn"
          v-if="!$q.screen.gt.xs || $q.screen.gt.sm"
        >
          claythonlophess@gmail.com
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer :width="200" :breakpoint="400">
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
        <q-btn class="full-width" outline label="Sair" color="purple" />
      </div>
    </q-drawer>

    <q-page-container>
      <q-page padding class="row justify-center items-center">
        <div class="col-xs-12 row justify-center">
          <div class="ripple-background">
            <div class="circle xxlarge shade1"></div>
            <div class="circle large shade3"></div>
            <div class="circle xlarge shade2"></div>
            <div class="circle large shade3"></div>
            <div class="circle mediun shade4"></div>
            <div class="circle small shade5"></div>
          </div>

          <div
            v-if="!$q.screen.gt.xs && !$q.screen.gt.sm"
            class="col-xs-12 q-pa-md q-ma-sm"
            style="background-color: #e0deed; border-radius: 1rem"
          >
            <q-img :src="ilustre.Hand_coding"></q-img>
          </div>

          <div
            class="col-xs-12 col-sm-5 col-md-3 q-ma-sm q-pa-lg animated bounceInLeft"
            style="background-color: #9690c5; border-radius: 1rem"
          >
            <q-badge
              class="text-black text-subtitle1 text-bold bg-green-11"
              rounded
              label="Claiton Lopes"
            />
            <div class="text-h2 text-weight-bold">Systems Developer</div>
            <div class="text-h6">
              A Profissional work with multiplatform systems developer desktop,
              web, and mobile
            </div>
            <div class="text-h3 text-bold">
              <span class="text-h6">Over</span> 5<span class="text-h6">
                pro systems</span
              >
            </div>

            <div class="row">
              <q-btn
                unelevated
                rounded
                style="background-color: #e0deed; border-radius: 1rem"
                label="claythonlophess@gmail.com"
              />
              <q-btn flat color="primary" icon="add" />
            </div>

            <q-item  clickable v-rippl @click="redirectTo('http://gestaocontrol.co.mz')">
              <q-item-section side>
                <q-avatar rounded size="48px">
                  <img
                    src="https://media.istockphoto.com/id/1028603300/vector/internet-world-vector.jpg?s=612x612&w=0&k=20&c=Jn-fR7mO1vtwyKEwapt0znvlMp4snBp4SC9hlJmqN4s="
                  />
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label>Control</q-item-label>
                <q-item-label caption>http://gestaocontrol.co.mz</q-item-label>
              </q-item-section>
            </q-item>

            <q-item  clickable v-rippl @click="redirectTo('https://comeaqui.co.mz')">
              <q-item-section side>
                <q-avatar rounded size="48px" class="bg-red">
                  <img
                    src="https://comeaqui.co.mz/imagensApp/Coma%20Aqui.png"
                  />
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label>ComeAqui</q-item-label>
                <q-item-label caption>https://comeaqui.co.mz</q-item-label>
              </q-item-section>
            </q-item>

            <q-item  clickable v-rippl @click="redirectTo('https://marketline.co.mz')">
              <q-item-section side>
                <q-avatar rounded size="48px">
                  <img
                    src="https://scontent.fdur5-1.fna.fbcdn.net/v/t39.30808-1/452415055_122187820958018463_4325053775065048831_n.jpg?stp=dst-jpg_s200x200&_nc_cat=100&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=hKvSlU8pytIQ7kNvgG0oNC9&_nc_ht=scontent.fdur5-1.fna&_nc_gid=AEVXBDLVBntSH8G6XeOflD-&oh=00_AYDyofyIljFJV1O81SGscXpGYg71Xw8F3GO5rVy_Md3_qQ&oe=66EB31BF"
                  />
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label>MarketLine</q-item-label>
                <q-item-label caption>https://marketline.co.mz</q-item-label>
              </q-item-section>
            </q-item>
          </div>

          <div
            v-if="$q.screen.gt.xs && $q.screen.gt.sm"
            class="col-xs-12 col-sm-4 col-md-4 q-pa-md q-ma-sm animated zoomInDown"
            style="background-color: #e0deed; border-radius: 1rem"
          >
            <div
              class="col-xs-12 col-sm-12 col-md-7"
              :style="
                !$q.screen.gt.xs || !$q.screen.gt.sm
                  ? `q-pa-md text-white row`
                  : `q-pa-md text-white row`
              "
            >
              <div class="text-h6">Themes</div>
              <div
                :class="
                  !$q.screen.gt.xs
                    ? `q-pa-md text-white row`
                    : `q-pa-md text-white row   justify-center`
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
                ;`
                "
              >
                <q-card
                  bordered
                  class="row bg-pink-11 col-xs-4 q-ma-xs"
                  style="border-radius: 1rem"
                >
                  <q-card-section>
                    <q-icon color="green-4" size="3rem" name="public" />
                    <div class="text-subtitle1 text-bold">Theme 1</div>
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
                        label="view now"
                        flat
                        @click="this.$router.push(`/theme1`)"
                      />
                    </div>
                  </q-card-section>
                </q-card>

                <q-card
                  bordered
                  class="row k col-xs-3 col-sm-4 q-ma-xs"
                  style="
                    border-radius: 1rem;
                    background: linear-gradient(to bottom, #ee99ac, #8a4be2);
                  "
                >
                  <q-card-section>
                    <q-icon color="green-4" size="3rem" name="public" />
                    <div class="text-subtitle1 text-bold">Theme 2</div>
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
                        label="view now"
                        flat
                        @click="this.$router.push(`/theme2`)"
                      />
                    </div>
                  </q-card-section>
                </q-card>

                <q-card
                  bordered
                  class="row col-xs-3 col-sm-4 q-ma-xs wrap"
                  style="
                    border-radius: 1rem;
                    background: linear-gradient(to bottom, #3884e4, #6ecaec);
                  "
                >
                  <q-card-section>
                    <q-icon color="green-4" size="3rem" name="public" />
                    <div class="text-subtitle1 text-bold">Theme 3</div>
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
                        label="view now"
                        flat
                        @click="this.$router.push(`/theme3`)"
                      />
                    </div>
                  </q-card-section>
                </q-card>

                <q-card
                  bordered
                  class="row col-xs-3 col-sm-4 q-ma-xs"
                  style="
                    border-radius: 1rem;
                    background: linear-gradient(to bottom, #3884e4, #6ecaec);
                  "
                >
                  <q-card-section>
                    <q-icon color="green-4" size="3rem" name="public" />
                    <div class="text-subtitle1 text-bold">Theme 4</div>
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
                        label="view now"
                        flat
                        @click="this.$router.push(`/theme4`)"
                      />
                    </div>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </div>

          <div
            :class="
              $q.screen.gt.xs && $q.screen.gt.sm
                ? `col-xs-12  col-sm-10 q-pa-md col-md-3 q-ma-sm text-h5 animated bounceInRight`
                : `col-xs-12  col-sm-5  col-md-3 q-pa-md q-ma-sm text-h5 animated bounceInRight`
            "
            style="background-color: #e0deed; border-radius: 1rem"
          >
            <div class="q-pa-md">
              <q-list bordered>
                <q-expansion-item
                  group="somegroup"
                  label="Overview"
                  default-opened
                  header-class="text-primary1"
                >
                  <q-card>
                    <q-card-section>
                      Experienced multiplatform systems developer specializing
                      in desktop, web, and mobile development. Passionate about
                      leveraging technology to drive business growth.
                    </q-card-section>
                  </q-card>
                </q-expansion-item>

                <q-separator />

                <q-expansion-item
                  group="somegroup"
                  label="Highlights"
                  header-class="text-teal1"
                >
                  <q-card>
                    <q-card-section>
                      <div class="text-bold">
                        I have developed over
                        <span
                          ><q-badge
                            class="text-black text-h5 text-bold bg-green-11"
                            rounded
                            label="5 professional systems"
                        /></span>
                        , including the following:
                      </div>
                      <br />
                      <div class="text-bold">
                        Online Learning Platform Description:
                      </div>
                      Developed an online learning platform for an educational
                      institution, using technologies such as Vue.js and
                      Laravel. The platform offers advanced learning features
                      such as interactive videos, quizzes, and discussion
                      forums. Responsibilities: Software architecture, front-end
                      and back-end development.
                      <br />
                      <br />

                      <div class="text-bold">
                        Enterprise Resource Planning (ERP) System
                      </div>
                      Description: Developed a custom Enterprise Resource
                      Planning (ERP) system for a medium-sized company, using
                      technologies such as Laravel and MySQL. The system
                      integrates various areas of the company, including
                      finance, inventory, and human resources. Responsibilities:
                      Requirements analysis, back-end development, and
                      implementation of advanced reporting features.
                    </q-card-section>
                  </q-card>
                </q-expansion-item>

                <q-separator />

                <q-expansion-item
                  group="somegroup"
                  label="Technologies"
                  header-class="text-purple1"
                >
                  <q-card>
                    <q-card-section>
                      I have solid experience with the following technologies:
                      <span class="text-bold"
                        >Front-end: HTML5, CSS3, JavaScript, Vue.js, Quasar,
                        React, Expo Back-end: Laravel, Spring Boot, Node.js,
                        Python
                      </span>
                    </q-card-section>
                  </q-card>
                </q-expansion-item>
              </q-list>
            </div>
          </div>

          <div
            v-if="!$q.screen.gt.xs || !$q.screen.gt.sm"
            class="col-xs-12 col-sm-10 col-md-10 q-pa-md q-ma-sm animated zoomInDown"
            style="background-color: #e0deed; border-radius: 1rem"
          >
            <div
              class="col-xs-12 col-sm-12 col-md-7"
              :style="
                !$q.screen.gt.xs || !$q.screen.gt.sm
                  ? `q-pa-md text-white row`
                  : `q-pa-md text-white row`
              "
            >
              <div class="text-h6">Themes</div>
              <div
                :class="
                  !$q.screen.gt.xs
                    ? `q-pa-md text-white row`
                    : `q-pa-md text-white row   justify-center`
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
                ;`
                "
              >
                <q-card
                  bordered
                  class="row bg-pink-11 col-xs-4 q-ma-xs"
                  style="border-radius: 1rem"
                >
                  <q-card-section>
                    <q-icon color="green-4" size="3rem" name="public" />
                    <div class="text-subtitle1 text-bold">Theme 1</div>
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
                        label="view now"
                        flat
                        @click="this.$router.push(`/theme1`)"
                      />
                    </div>
                  </q-card-section>
                </q-card>

                <q-card
                  bordered
                  class="row k col-xs-3 col-sm-4 q-ma-xs"
                  style="
                    border-radius: 1rem;
                    background: linear-gradient(to bottom, #ee99ac, #8a4be2);
                  "
                >
                  <q-card-section>
                    <q-icon color="green-4" size="3rem" name="public" />
                    <div class="text-subtitle1 text-bold">Theme 2</div>
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
                        label="view now"
                        flat
                        @click="this.$router.push(`/theme2`)"
                      />
                    </div>
                  </q-card-section>
                </q-card>

                <q-card
                  bordered
                  class="row col-xs-3 col-sm-4 q-ma-xs wrap"
                  style="
                    border-radius: 1rem;
                    background: linear-gradient(to bottom, #3884e4, #6ecaec);
                  "
                >
                  <q-card-section>
                    <q-icon color="green-4" size="3rem" name="public" />
                    <div class="text-subtitle1 text-bold">Theme 3</div>
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
                        label="view now"
                        flat
                        @click="this.$router.push(`/theme3`)"
                      />
                    </div>
                  </q-card-section>
                </q-card>

                <q-card
                  bordered
                  class="row col-xs-3 col-sm-4 q-ma-xs"
                  style="
                    border-radius: 1rem;
                    background: linear-gradient(to bottom, #3884e4, #6ecaec);
                  "
                >
                  <q-card-section>
                    <q-icon color="green-4" size="3rem" name="public" />
                    <div class="text-subtitle1 text-bold">Theme 4</div>
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
                        label="view now"
                        flat
                        @click="this.$router.push(`/theme4`)"
                      />
                    </div>
                  </q-card-section>
                </q-card>
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
  methods: {
    redirectTo(url) {
      window.location.href = url;
    },
  },
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

<style>
body {
  background: #ffffff;
}

.circle {
  position: absolute;
  border-radius: 50%;
  background: #508fb9;
  animation: ripple 15s infinite;
  box-shadow: 0px 0px 1px 0px rgb(255, 255, 255);
}

.small {
  width: 200px;
  height: 200px;
  left: -100px;
  bottom: -100px;
}

.medium {
  width: 400px;
  height: 400px;
  left: -200px;
  bottom: -200px;
}

.large {
  width: 600px;
  height: 600px;
  left: -300px;
  bottom: -300px;
}

.xlarge {
  width: 800px;
  height: 800px;
  left: -400px;
  bottom: -400px;
}

.xxlarge {
  width: 1000px;
  height: 1000px;
  left: -500px;
  bottom: -500px;
}

.shade1 {
  opacity: 0.2;
}
.shade2 {
  opacity: 0.5;
}

.shade3 {
  opacity: 0.7;
}

.shade4 {
  opacity: 0.8;
}

.shade5 {
  opacity: 0.9;
}

@keyframes ripple {
  0% {
    transform: scale(0.8);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(0.8);
  }
}

/* Adicione a classe 'animated' e a classe da animação desejada */
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}
</style>
