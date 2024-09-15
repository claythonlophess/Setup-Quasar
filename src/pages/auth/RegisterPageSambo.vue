<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="flex flex-center bg-grey-2">
        <q-card class="q-pa-md shadow-2 my_card" bordered>
          <div class="row">
            <div class="col full-width bg-accent1 flex flex-center">
              <q-img src="src/assets/img/Capture.PNG" style="min-width: 55">
              </q-img>
            </div>
            <div class="col">
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
                    href="#"
                    class="text-dark text-weight-bold"
                    style="text-decoration: none"
                    >Sign up.</a
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
  created() {},
  methods: {
    async login() {
      console.log("hgfdsa")
      const user = await db.users
        .where({ email: this.email, password: this.password })
        .first();

      if (user) {
        await db.users.update(user.id, { loggedIn: true });
        return user;
      } else {
        throw new Error("Usuário ou senha inválidos.");
      }
    },
  },
  setup() {
    return {
      email: ref(""),
      password: ref(""),
      ilustre,
      logos,
    };
  },
};
</script>

<style scoped>
.my_card {
  width: 55vw;
  border-radius: 8px;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
}
</style>
