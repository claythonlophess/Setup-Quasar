<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="flex flex-center bg-grey-2">
        <q-card class="q-pa-md shadow-2 my_card " bordered>
          <div class="row ">
            <div class="col-12 col-sm full-width bg-accent1 flex flex-center">
              <q-img src="data:image/jpeg;base64,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" > </q-img>
            </div>
            <div class="col-12 col-sm">
              <q-card-section class="text-center">
                <div class="text-grey-9 text-h5 text-weight-bold">Sign in</div>
                <div class="text-grey-8">
                  Sign in below to access your account
                </div>
              </q-card-section>

              <q-card-section>
                <q-input
                  dense
                  outlined
                  v-model="email"
                  label="Email Address"
                ></q-input>
                <q-input
                  dense
                  outlined
                  class="q-mt-md"
                  v-model="password"
                  type="password"
                  label="Password"
                ></q-input>
              </q-card-section>
              <q-card-section>
                <q-btn
                  style="border-radius: 8px"
                  color="dark"
                  rounded
                  size="md"
                  label="Entrar"
                  no-caps
                  class="full-width"
                  @click="login"
                ></q-btn>
              </q-card-section>
              <q-card-section class="text-center q-pt-none">
                <div class="text-grey-8">
                  Don't have an account yet?
                  <a
                    href="#/register-sambo"
                    class="text-dark text-weight-bold"
                    style="text-decoration: none"
                    >Criar conta.</a
                  >
                </div>
              </q-card-section>
            </div>
          </div>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useQuasar } from "quasar";
import { $logos, $ilustre } from "/src/assets/assets.js";
const ilustre = ref($ilustre);
const logos = ref($logos);
import db from "/src/services/IndexedDBService";

const router = useRouter();

export default {
  name: "LoginPage",
  data() {
    return {};
  },

  methods: {
    async login() {
      console.log("hgfdsa");

      const user = await db.users
        .where({ email: this.email, password: this.password })
        .first();

      if (user) {
        await db.users.update(user.id, { loggedIn: 1 });
        this.$router.push(`/editor`);
        this.$q.notify({
          type: "positive",
          position: "bottom-right",
          message: "Bem vindo.",
        });
      } else {
        this.$q.notify({
          type: "negative",
          position: "bottom-right",
          message: "Usuário ou senha inválidos.",
        });
        throw new Error("Usuário ou senha inválidos.");
      }
    },
  },
  setup() {
    const $q = useQuasar();
    return {
      email: ref(""),
      password: ref(""),
      ilustre,
      logos,
      $q,
    };
  },
};
</script>

<style scoped>
.my_card {
 min-width: 50vw;
  border-radius: 8px;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
}
</style>
