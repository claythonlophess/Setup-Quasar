<template>
  <q-page>
    <div class="q-gutter-m3d">
      <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="white"
        navigation
        padding
        arrows
        height="300px"
        class="bg-primary text-white shadow-1 rounded-borders"
      >
        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <q-icon name="style" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <q-icon name="live_tv" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <q-icon name="layers" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <q-icon name="terrain" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>

    <!-- services -->
    <div class="animated flash row q-pa-lg" style="background-color: #239687">
      <div
        class="animated shake col-xs-12 col-sm-6 col-md-3 collumn text-center text-white"
      >
        <q-icon name="android" color="warning" size="4rem" />
        <div class="text-subtitle1">Services fibra</div>
      </div>

      <div class="col-xs-12 col-sm-6 col-md-3 collumn text-center text-white">
        <q-icon name="android" color="warning" size="4rem" />
        <div class="text-subtitle1">Services fibra</div>
      </div>

      <div class="col-xs-12 col-sm-6 col-md-3 collumn text-center text-white">
        <q-icon name="android" color="warning" size="4rem" />
        <div class="text-subtitle1">Services fibra</div>
      </div>

      <div class="col-xs-12 col-sm-6 col-md-3 collumn text-center text-white">
        <q-icon name="android" color="warning" size="4rem" />
        <div class="text-subtitle1">Services fibra</div>
      </div>
    </div>

    <!-- cards -->
    <div class="q-pt-xl q-pl-xl">
      <div class="text-h3 text-bold">Ofertas para sua casa</div>
      <div class="text-h6 text-bold q-pt-sm">
        Aproveite os melhores combos para curtir filmes, jogar e navegar na
        internet
      </div>
      <div class="q-pa-md row justify-center q-gutter-md">
        <q-card
          bordered
          class="col-xs-12 col-sm-4 col-md-3 col-lg-2 q-ma-md"
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
            <q-avatar round color="primary" text-color="white">J</q-avatar>
            <div class="text-grey text-subtitle1">Internet Fibra</div>
            <div class="text-h4 text-bold text-s">300 Mega</div>
            <div class="text-grey text-subtitle1">+ Casa ON 1 Equipamento</div>
          </q-card-section>

          <q-separator white inset />

          <q-card-section>
            <div class="text-grey text-subtitle1">Serviços adicionais</div>
            <div
              style="
                color: rgb(27, 126, 108);
                cursor: pointer;
                font-size: 1rem;
                font-weight: 700;
                text-decoration: underline;
              "
              class="text-h6 text-underline"
            >
              Mais informações
            </div>
          </q-card-section>

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
              Valor do pacote com MULTIPLICADOR DE WI-FI por 12 meses com débito
              automático.
            </div>
            <q-btn
              color="amber"
              class="full-width q-ma-md text-bold text-black"
              glossy
              label="Assine ja"
            />
          </q-card-section>
        </q-card>

        <q-card
          bordered
          class="col-xs-12 col-sm-4 col-md-3 col-lg-2 q-ma-md"
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
            <q-avatar round color="primary" text-color="white">J</q-avatar>
            <div class="text-grey text-subtitle1">Internet Fibra</div>
            <div class="text-h4 text-bold text-s">300 Mega</div>
            <div class="text-grey text-subtitle1">+ Casa ON 1 Equipamento</div>
          </q-card-section>

          <q-separator white inset />

          <q-card-section>
            <div class="text-grey text-subtitle1">Serviços adicionais</div>
            <div
              style="
                color: rgb(27, 126, 108);
                cursor: pointer;
                font-size: 1rem;
                font-weight: 700;
                text-decoration: underline;
              "
              class="text-h6 text-underline"
            >
              Mais informações
            </div>
          </q-card-section>

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
              Valor do pacote com MULTIPLICADOR DE WI-FI por 12 meses com débito
              automático.
            </div>
            <q-btn
              color="amber"
              class="full-width q-ma-md text-bold text-black"
              glossy
              label="Assine ja"
            />
          </q-card-section>
        </q-card>

        <q-card
          bordered
          class="col-xs-12 col-sm-4 col-md-3 col-lg-2 q-ma-md"
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
            <q-avatar round color="primary" text-color="white">J</q-avatar>
            <div class="text-grey text-subtitle1">Internet Fibra</div>
            <div class="text-h4 text-bold text-s">300 Mega</div>
            <div class="text-grey text-subtitle1">+ Casa ON 1 Equipamento</div>
          </q-card-section>

          <q-separator white inset />

          <q-card-section>
            <div class="text-grey text-subtitle1">Serviços adicionais</div>
            <div
              style="
                color: rgb(27, 126, 108);
                cursor: pointer;
                font-size: 1rem;
                font-weight: 700;
                text-decoration: underline;
              "
              class="text-h6 text-underline"
            >
              Mais informações
            </div>
          </q-card-section>

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
              Valor do pacote com MULTIPLICADOR DE WI-FI por 12 meses com débito
              automático.
            </div>
            <q-btn
              color="amber"
              class="full-width q-ma-md text-bold text-black"
              glossy
              label="Assine ja"
            />
          </q-card-section>
        </q-card>

        <q-card
          bordered
          class="col-xs-12 col-sm-4 col-md-3 col-lg-2 q-ma-md"
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
            <q-avatar round color="primary" text-color="white">J</q-avatar>
            <div class="text-grey text-subtitle1">Internet Fibra</div>
            <div class="text-h4 text-bold">300 Mega</div>
            <div class="text-grey text-subtitle1">+ Casa ON 1 Equipamento</div>
          </q-card-section>

          <q-separator white inset />

          <q-card-section>
            <div class="text-grey text-subtitle1">Serviços adicionais</div>
            <div
              style="
                color: rgb(27, 126, 108);
                cursor: pointer;
                font-size: 1rem;
                font-weight: 700;
                text-decoration: underline;
              "
              class="text-h6 text-underline"
            >
              Mais informações
            </div>
          </q-card-section>

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
              Valor do pacote com MULTIPLICADOR DE WI-FI por 12 meses com débito
              automático.
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

    <!-- Banner 1 -->
    <div class="q-pt-xl q-pl-xl q-pa-md q-gutter-sm">
      <q-banner rounded>
        <div class="row bg-grey-1 q-card" style="border-radius: 1rem">
          <div
            class="col-xs-12 col-sm-6 bg-green-1 rounded-borders text-center"
            style="
              border-radius: 1rem;
              min-height: 100px;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
            "
          >
            <img
              :src="ilustre.geral_turismo_green_1"
              style="max-width: 100%; max-height: 100%; height: auto"
            />
          </div>

          <div class="col-6">
            <q-card-section>
              <div
                style="
                  color: rgb(27, 126, 108);
                  cursor: pointer;
                  font-size: 1rem;
                  font-weight: 700;
                "
                class="text-h6 text-underline"
              >
                Montar pacote
              </div>
            </q-card-section>
            <q-card-section>
              <div class="text-h5 text-bold">Ainda não se decidiu?</div>
              <div class="text-subtitle1 text-grey-8">
                Monte já uma oferta do seu jeito.
              </div>
            </q-card-section>
            <q-card-section>
              <q-btn
                color="amber"
                class="text-black"
                glossy
                label="Monte seu PAcote"
              />
            </q-card-section>
          </div>
        </div>
      </q-banner>
    </div>

    <!-- cards -->
    <div class="q-pt-xl q-pl-xl">
      <div class="text-black text-h3 text-bold">Ofertas para sua casa</div>
      <div class="text-black text-h6 text-bold q-pt-sm">
        Aproveite os melhores combos para curtir filmes, jogar e navegar na
        internet
      </div>

      <div class="q-pa-md row justify-center">
        <q-card
          bordered
          class="text-white col-xs-12 col-sm-3 col-md-3 col-lg-2 q-ma-md"
          style="
            background: radial-gradient(
              circle,
              rgb(35, 150, 135) 17%,
              rgb(40, 190, 165) 37%,
              rgb(5, 85, 80) 100%
            );
            border-radius: 1rem;
          "
        >
          <q-card-section>
            <div class="text-h5 text-bold">Monte um combo</div>
            <div class="text-subtitle1">Do seu jeito com poucos cliques</div>
          </q-card-section>

          <q-card-section>
            <div
              class="col-6 rounded-borders text-center"
              style="border-radius: 1rem"
            >
              <img :src="ilustre.geral_turismo_green_1" />
            </div>
          </q-card-section>

          <q-card-section>
            <div class="text-start" style="border-radius: 1rem">
              <q-btn icon="chevron_right" label="Aproveite" flat />
            </div>
          </q-card-section>
        </q-card>
        <q-card
          bordered
          class="text-white col-xs-12 col-sm-3 col-md-3 col-lg-2 q-ma-md"
          style="
            background: radial-gradient(
              circle,
              rgb(35, 150, 135) 17%,
              rgb(40, 190, 165) 37%,
              rgb(5, 85, 80) 100%
            );
            border-radius: 1rem;
          "
        >
          <q-card-section>
            <div class="text-h5 text-bold">Monte um combo</div>
            <div class="text-subtitle1">Do seu jeito com poucos cliques</div>
          </q-card-section>

          <q-card-section>
            <div
              class="col-6 rounded-borders text-center"
              style="border-radius: 1rem"
            >
              <img :src="ilustre.geral_turismo_green_1" />
            </div>
          </q-card-section>

          <q-card-section>
            <div class="text-start" style="border-radius: 1rem">
              <q-btn icon="chevron_right" label="Aproveite" flat />
            </div>
          </q-card-section>
        </q-card>
        <q-card
          bordered
          class="text-white col-xs-12 col-sm-3 col-md-3 col-lg-2 q-ma-md"
          style="
            background: radial-gradient(
              circle,
              rgb(35, 150, 135) 17%,
              rgb(40, 190, 165) 37%,
              rgb(5, 85, 80) 100%
            );
            border-radius: 1rem;
          "
        >
          <q-card-section>
            <div class="text-h5 text-bold">Monte um combo</div>
            <div class="text-subtitle1">Do seu jeito com poucos cliques</div>
          </q-card-section>

          <q-card-section>
            <div
              class="col-6 rounded-borders text-center"
              style="border-radius: 1rem"
            >
              <img :src="ilustre.geral_turismo_green_1" />
            </div>
          </q-card-section>

          <q-card-section>
            <div class="text-start" style="border-radius: 1rem">
              <q-btn icon="chevron_right" label="Aproveite" flat />
            </div>
          </q-card-section>
        </q-card>
        <q-card
          bordered
          class="text-white col-xs-12 col-sm-3 col-md-3 col-lg-2 q-ma-md"
          style="
            background: radial-gradient(
              circle,
              rgb(35, 150, 135) 17%,
              rgb(40, 190, 165) 37%,
              rgb(5, 85, 80) 100%
            );
            border-radius: 1rem;
          "
        >
          <q-card-section>
            <div class="text-h5 text-bold">Monte um combo</div>
            <div class="text-subtitle1">Do seu jeito com poucos cliques</div>
          </q-card-section>

          <q-card-section>
            <div
              class="col-6 rounded-borders text-center"
              style="border-radius: 1rem"
            >
              <img :src="ilustre.geral_turismo_green_1" />
            </div>
          </q-card-section>

          <q-card-section>
            <div class="text-start" style="border-radius: 1rem">
              <q-btn icon="chevron_right" label="Aproveite" flat />
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <!-- cards -->
    <div class="q-pt-xl q-pl-xl bg-grey-2">
      <div class="text-h3 text-bold">Veja mais</div>
      <div class="text-h6 text-bold q-pt-sm">
        Atualização de cadastro, devolução de valores, cancelamento e muito mais
      </div>

      <div class="q-pa-md row justify-center">
        <q-card
          bordered
          class="text-black col-xs-12 col-sm-3 col-md-3 col-lg-2 q-ma-md"
          style="background-color: transparent; border-radius: 1rem"
        >
          <q-card-section>
            <q-icon color="green-4" size="3rem" name="public" />

            <div class="text-h5 text-bold">Monte um combo</div>
            <div class="text-subtitle1">Do seu jeito com poucos cliques</div>
          </q-card-section>

          <q-card-section>
            <div class="text-start text-green-8" style="border-radius: 1rem">
              <q-btn
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
          class="text-black col-xs-12 col-sm-3 col-md-3 col-lg-2 q-ma-md"
          style="background-color: transparent; border-radius: 1rem"
        >
          <q-card-section>
            <q-icon color="green-4" size="3rem" name="public" />

            <div class="text-h5 text-bold">Monte um combo</div>
            <div class="text-subtitle1">Do seu jeito com poucos cliques</div>
          </q-card-section>

          <q-card-section>
            <div class="text-start text-green-8" style="border-radius: 1rem">
              <q-btn
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
          class="text-black col-xs-12 col-sm-3 col-md-3 col-lg-2 q-ma-md"
          style="background-color: transparent; border-radius: 1rem"
        >
          <q-card-section>
            <q-icon color="green-4" size="3rem" name="public" />

            <div class="text-h5 text-bold">Monte um combo</div>
            <div class="text-subtitle1">Do seu jeito com poucos cliques</div>
          </q-card-section>

          <q-card-section>
            <div class="text-start text-green-8" style="border-radius: 1rem">
              <q-btn
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
          class="text-black col-xs-12 col-sm-3 col-md-3 col-lg-2 q-ma-md"
          style="background-color: transparent; border-radius: 1rem"
        >
          <q-card-section>
            <q-icon color="green-4" size="3rem" name="public" />

            <div class="text-h5 text-bold">Monte um combo</div>
            <div class="text-subtitle1">Do seu jeito com poucos cliques</div>
          </q-card-section>

          <q-card-section>
            <div class="text-start text-green-8" style="border-radius: 1rem">
              <q-btn
                color="green-8"
                icon="chevron_right"
                label="Aproveite"
                flat
              />
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import { $logos, $ilustre } from "/src/assets/assets.js";
const ilustre = ref($ilustre);
const logos = ref($logos);

export default defineComponent({
  name: "IndexPage",

  setup() {
    onMounted(() => {

      this.$router.push(`/editor`) // Redireciona para a página de login

    });
    return {
      slide: ref("style"),
      ilustre,
      logos,
    };
  },
});
</script>

<style>
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

/* Adicione a classe 'animated' e a classe da animação desejada */
.animated {
  animation-duration: 3s;
  animation-fill-mode: both;
}
</style>
