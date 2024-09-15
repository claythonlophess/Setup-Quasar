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
        <div v-if="$q.screen.gt.xs && loggedUser && loggedUser.role == 'admin'">
          Administrador
        </div>
        <div
          v-if="$q.screen.gt.xs && loggedUser && loggedUser.role == 'reporter'"
        >
          Reporter
        </div>
        <div
          v-if="$q.screen.gt.xs && loggedUser && loggedUser.role == 'editor'"
        >
          Editor
        </div>
        <div
          v-if="$q.screen.gt.xs && loggedUser && loggedUser.role == 'reviewer'"
        >
          Revisor
        </div>
        <div
          v-if="$q.screen.gt.xs && loggedUser && loggedUser.role == 'announcer'"
        >
          Locutor
        </div>

        <q-toolbar-title> ICS </q-toolbar-title>
        <div class="col-xs-2 col-sm-4 q-mr-md" style="position: relative">
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
        <div v-if="loggedUser">
          {{ loggedUser.name }}
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" :width="200" :breakpoint="400">
      <q-scroll-area
        style="
          height: calc(100% - 150px);
          margin-top: 150px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list padding>
          <q-item
            clickable
            v-ripple
            v-if="loggedUser && loggedUser.role == 'admin'"
            @click="$router.push('admin')"
          >
            <q-item-section avatar>
              <q-icon name="people" />
            </q-item-section>

            <q-item-section> Usuarios </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <div
        class="absolute-bottom q-pa-sm"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 50px"
      >
        <q-btn
          class="full-width"
          outline
          label="Sair"
          @click="logout"
          color="purple"
        />
      </div>
    </q-drawer>

    <q-page-container>
      <q-page padding v-if="loggedUser && loggedUser.role == 'reporter'">
        <div class="q-pa-md q-gutter-sm">
          <q-dialog
            v-model="dialog"
            persistent
            :maximized="maximizedToggle"
            transition-show="slide-up"
            transition-hide="slide-down"
          >
            <q-card class="text-black">
              <q-bar>
                <q-space />

                <q-btn
                  dense
                  flat
                  icon="minimize"
                  @click="maximizedToggle = false"
                  :disable="!maximizedToggle"
                >
                  <q-tooltip
                    v-if="maximizedToggle"
                    class="bg-white text-primary"
                    >Minimize</q-tooltip
                  >
                </q-btn>
                <q-btn
                  dense
                  flat
                  icon="crop_square"
                  @click="maximizedToggle = true"
                  :disable="maximizedToggle"
                >
                  <q-tooltip
                    v-if="!maximizedToggle"
                    class="bg-white text-primary"
                    >Maximize</q-tooltip
                  >
                </q-btn>
                <q-btn dense flat icon="close" v-close-popup>
                  <q-tooltip class="bg-white text-primary">Close</q-tooltip>
                </q-btn>
              </q-bar>

              <q-card-section>
                <div
                  class="row q-mb-lg justify-end q-gutter-sm justify-between"
                >
                  <div
                    v-if="contentOnDialog.status === 'regected'"
                    class="text-subtitle1 text-red"
                  >
                    Regeitado
                  </div>

                  <div class="row q-mb-lg justify-end q-gutter-sm">
                    <q-btn
                      color="green"
                      v-if="
                        contentOnDialog.status === 'draft'  &&
                        !contentOnDialog.editor_id
                      "
                      label="Aprovar"
                      @click="aproveContent"
                    />
                    <q-btn
                      v-if="
                        contentOnDialog.status === 'pending' &&
                        !contentOnDialog.editor_id
                      "
                      color="red"
                      label="Cancelar"
                      @click="cancelContent"
                    />

                    <q-btn
                      v-if="
                        contentOnDialog.status === 'pending' &&
                        contentOnDialog.editor_id
                      "
                      color="red"
                      label="regeitar"
                      @click="rejectContent"
                    />
                  </div>
                </div>

                <div class="row">
                  <div class="col-xs-12 col-md-8">
                    <q-banner
                      class="text-white"
                      style="background-color: #9690c5; border-radius: 1rem"
                    >
                      Files
                      <div class="row items-center justify-between">
                        <div
                          v-if="contentOnDialog"
                          class="col-12 text-right text-bold"
                        >
                          <img
                            :src="contentOnDialog.file"
                            style="width: 100%"
                          />
                          <div class="file-preview">
                            <img
                              :src="contentOnDialog.file"
                              class="preview-image"
                            />

                            <div class="preview-pdf">
                              <iframe
                                :src="contentOnDialog.file"
                                width="100%"
                                height="600px"
                              ></iframe>
                            </div>

                            <div class="preview-doc">
                              <div v-html="contentOnDialog.file"></div>
                            </div>
                          </div>
                        </div>
                        <div v-else class="col-12">
                          <q-skeleton width="100%" height="100px" />
                        </div>
                      </div>
                    </q-banner>
                  </div>

                  <div v-if="true" class="col-xs-12 col-md-4">
                    <div class="q-gutter-sm q-pa-md">
                      <q-banner
                      v-if="contentOnDialog.audio"
                        class="text-white"
                        style="background-color: #9690c5; border-radius: 1rem"
                      >
                        <audio

                          :src="audioUrl"
                          controls
                        ></audio>
                      </q-banner>
                      <q-banner
                        class="text-white"
                        style="
                          max-height: 60px;
                          background-color: #9690c5;
                          border-radius: 1rem;
                        "
                      >
                        <div class="row items-center justify-between">
                          <div v-if="contentOnDialog" class="col-12 text-bold">
                            {{ contentOnDialog.title }}
                          </div>
                          <div v-else class="col-12 text-right text-bold">
                            <q-skeleton
                              animation="wave"
                              width="100%"
                              type="text"
                            />
                          </div>
                        </div>
                      </q-banner>

                      <q-banner
                        class="text-white"
                        style="background-color: #9690c5; border-radius: 1rem"
                      >
                        <div class="row items-center justify-between">
                          <div class="col-12">
                            <div v-if="contentOnDialog" class="text-subtitle1">
                              {{ contentOnDialog.description }}
                            </div>
                            <div v-else class="text-right text-bold">
                              <q-skeleton animation="wave" type="text" />
                              <q-skeleton animation="wave" type="text" />
                              <q-skeleton animation="wave" type="text" />
                              <q-skeleton
                                width="50%"
                                animation="wave"
                                type="text"
                              />
                            </div>
                          </div>
                        </div>
                      </q-banner>

                      <q-banner  v-if="
                        contentOnDialog.status !== 'draft'
                      "
                        class="text-white"
                        style="background-color: #9690c5; border-radius: 1rem"
                      >
                        <div   style="width: 100%; max-width: 400px">
                          <q-chat-message
                            v-for="c in comments"
                            :key="c"
                            :name="c.user_id == loggedUser.id ? 'Eu' : 'Editor'"
                            :text="[c.text]"
                            :sent="c.user_id == loggedUser.id ? true : false"
                          />
                        </div>

                        <div class="cursor-pointer">
                          <q-input
                            outlined
                            v-model="popupLabel"
                            label="Comente"
                            type="textarea"
                            label-color="white"
                            text-color="whit5e"
                            style="
                              background-color: #9690c5;
                              border-radius: 2rem;
                            "
                            rounded
                          />
                          <q-btn
                            v-if="
                              (contentOnDialog.status === 'pending' &&
                                !contentOnDialog.editor_id) ||
                              contentOnDialog.status === 'reviwed'
                            "
                            color="green"
                            :disable="!popupLabel"
                            label="comentar"
                            @click="commentContent1"
                          />
                          <q-btn
                            color="green"
                            :disable="!popupLabel"
                            v-if="
                              contentOnDialog.status !== 'draft' ||
                              contentOnDialog.status === 'regected' ||
                              (contentOnDialog.status === 'pending' &&
                                contentOnDialog.editor_id)
                            "
                            label="Aprovar"
                            @click="commentContent"
                          />
                        </div>
                      </q-banner>
                    </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </q-dialog>
        </div>
        <div class="row justify-center">
          <div class="col-12 row justify-center">
            <!-- Recentes -->
            <div
              class="col-xs-12 col-sm-7 q-ma-sm q-pa-lg"
              style="background-color: #9690c5; border-radius: 1rem"
            >
              <div class="text-subtitle1 text-white">Recentes</div>

              <div class="q-gutter-lg" v-if="contents.length > 0">
                <q-banner
                  class="text-black"
                  style="background-color: #e0deed; border-radius: 1rem"
                  v-for="c in contents"
                  :key="c"
                  @click="viewContent(c)"
                >
                  <div class="row items-center justify-between">
                    <div class="col-2">
                      <q-icon round color="primary" name="person" />
                    </div>
                    <div class="col-8">
                      <div class="text-subtitle1">{{ c.title }}</div>
                    </div>

                    <div class="col-2 text-right text-bold">
                      {{ progress(c).status }}
                    </div>
                  </div>
                  <q-linear-progress
                    size="25px"
                    :value="progress(c).value"
                    :color="c.status === 'pending' ? 'yellow-5' : 'amber-8'"
                  >
                    <div class="absolute-full flex flex-center">
                      <q-badge
                        color="white"
                        text-color="accent"
                        :label="progress(c).text"
                      />
                    </div>
                  </q-linear-progress>
                </q-banner>
              </div>
              <div class="q-gutter-lg" v-else>
                <q-banner
                  class="text-black"
                  style="
                    max-height: 60px;
                    background-color: #e0deed;
                    border-radius: 1rem;
                  "
                  v-for="c in 4"
                  :key="c"
                  @click="viewContent(c)"
                >
                  <div class="row items-center justify-between">
                    <div class="col-2">
                      <q-icon round color="primary" name="person" />
                    </div>
                    <div class="col-8">
                      <q-skeleton animation="wave" width="70%" type="text" />
                    </div>
                    <div class="col-2">
                      <q-skeleton animation="wave" width="100%" type="text" />
                    </div>
                  </div>
                </q-banner>
              </div>
            </div>

            <!-- ultimo conteudo a ser resvisto -->
            <div
              class="col-xs-12 col-sm-4 q-pa-md q-ma-sm"
              style="background-color: #e0deed; border-radius: 1rem"
            >
              <div class="q-gutter-sm q-mt-md">
                Conteudo mais recente
                <q-banner
                  class="text-white"
                  style="
                    max-height: 60px;
                    background-color: #9690c5;
                    border-radius: 1rem;
                  "
                >
                  <div class="row items-center justify-between">
                    <div v-if="lastContent" class="col-12 text-bold">
                      {{ lastContent.title }}
                    </div>
                    <div v-else class="col-12 text-right text-bold">
                      <q-skeleton animation="wave" width="100%" type="text" />
                    </div>
                  </div>
                </q-banner>

                <q-banner
                  class="text-white"
                  style="
                    max-height: 200px;
                    background-color: #9690c5;
                    border-radius: 1rem;
                  "
                >
                  <div class="row items-center justify-between">
                    <div class="col-12">
                      <div v-if="lastContent" class="text-subtitle1">
                        {{ limitedDescription(lastContent.description, 20) }}
                      </div>
                      <div v-else class="text-right text-bold">
                        <q-skeleton animation="wave" type="text" />
                        <q-skeleton animation="wave" type="text" />
                        <q-skeleton animation="wave" type="text" />
                        <q-skeleton width="50%" animation="wave" type="text" />
                      </div>
                    </div>
                  </div>
                </q-banner>

                <q-banner
                  class="text-white"
                  style="background-color: #9690c5; border-radius: 1rem"
                >
                  Files
                  <div class="row items-center justify-between">
                    <div v-if="lastContent" class="col-12 text-right text-bold">
                      <img :src="lastContent.file" style="width: 100%" />
                      <div class="file-preview">
                        <img :src="lastContent.file" class="preview-image" />

                        <div class="preview-pdf">
                          <iframe
                            :src="lastContent.file"
                            width="100%"
                            height="600px"
                          ></iframe>
                        </div>

                        <div class="preview-doc">
                          <div v-html="lastContent.file"></div>
                        </div>
                      </div>
                    </div>
                    <div v-else class="col-12">
                      <q-skeleton width="100%" height="100px" />
                    </div>
                  </div>
                </q-banner>
              </div>

              <q-btn
                class="q-mt-lg"
                color="black"
                label="ver detalhes"
                @click="viewContent(lastContent)"
              />
            </div>
          </div>

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
              </div>
            </div>

            <div
              class="col-xs-12 col-sm-7 q-pa-md q-ma-sm"
              style="background-color: #e0deed; border-radius: 1rem"
            >
              <q-form @submit="addContent" class="q-gutter-md">
                <q-input
                  outlined
                  v-model="content.title"
                  label="Titulo"
                  label-color="white"
                  text-color="whiteu"
                  style="background-color: #9690c5; border-radius: 2rem"
                  rounded
                />
                <q-input
                  outlined
                  v-model="content.description"
                  label="Descricao"
                  type="textarea"
                  label-color="white"
                  text-color="whit5e"
                  style="background-color: #9690c5; border-radius: 2rem"
                  rounded
                />

                <div>
                  <input
                    type="file"
                    @change="previewFiles"
                    multiple
                    accept=".png, .jpg, .jpeg, .gif, .pdf, .doc, .docx"
                    style="
                      background-color: lightgray;
                      color: purple;
                      font-size: larger;
                    "
                  />

                  <div class="file-preview">
                    <img :src="imagePreviews" class="preview-image" />

                    <div class="preview-pdf">
                      <iframe
                        :src="pdfPreviews"
                        width="100%"
                        height="600px"
                      ></iframe>
                    </div>

                    <div class="preview-doc">
                      <div v-html="docPreviews"></div>
                    </div>
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
        </div>
      </q-page>

      <q-page padding v-if="loggedUser && loggedUser.role == 'editor'">
        <div class="q-pa-md q-gutter-sm">
          <q-dialog
            v-model="dialog"
            persistent
            :maximized="maximizedToggle"
            transition-show="slide-up"
            transition-hide="slide-down"
          >
            <q-card class="text-black">
              <q-bar>
                <q-space />

                <q-btn
                  dense
                  flat
                  icon="minimize"
                  @click="maximizedToggle = false"
                  :disable="!maximizedToggle"
                >
                  <q-tooltip
                    v-if="maximizedToggle"
                    class="bg-white text-primary"
                    >Minimize</q-tooltip
                  >
                </q-btn>
                <q-btn
                  dense
                  flat
                  icon="crop_square"
                  @click="maximizedToggle = true"
                  :disable="maximizedToggle"
                >
                  <q-tooltip
                    v-if="!maximizedToggle"
                    class="bg-white text-primary"
                    >Maximize</q-tooltip
                  >
                </q-btn>
                <q-btn dense flat icon="close" v-close-popup>
                  <q-tooltip class="bg-white text-primary">Close</q-tooltip>
                </q-btn>
              </q-bar>

              <q-card-section>
                <div class="row q-mb-lg justify-between q-gutter-sm">
                  <div
                    v-if="
                      contentOnDialog.status === 'pending' &&
                      contentOnDialog.editor_id
                    "
                    class="text-subtitle1 text-green"
                  >
                    Aprovado por ti
                  </div>
                  <div
                    v-if="
                      contentOnDialog.status === 'regected' &&
                      contentOnDialog.editor_id
                    "
                    class="text-subtitle1 text-red"
                  >
                    regected por ti
                  </div>

                  <div class="row q-mb-lg justify-end q-gutter-sm">
                    <q-btn
                      color="green"
                      v-if="
                        (contentOnDialog.status === 'pending' &&
                          !contentOnDialog.editor_id) ||
                        contentOnDialog.status === 'regected'
                      "
                      label="Aprovar"
                      @click="aproveContent"
                    />
                  </div>
                </div>

                <div class="row">
                  <div class="col-xs-12 col-md-8">
                    <q-banner
                      class="text-white"
                      style="background-color: #9690c5; border-radius: 1rem"
                    >
                      Files
                      <div class="row items-center justify-between">
                        <div
                          v-if="contentOnDialog"
                          class="col-12 text-right text-bold"
                        >
                          <div
                            v-if="contentOnDialog"
                            class="col-12 text-right text-bold"
                          >
                            <img
                              :src="contentOnDialog.file"
                              style="width: 100%"
                            />
                            <div class="file-preview">
                              <img
                                :src="contentOnDialog.file"
                                class="preview-image"
                              />

                              <div class="preview-pdf">
                                <iframe
                                  :src="contentOnDialog.file"
                                  width="100%"
                                  height="600px"
                                ></iframe>
                              </div>

                              <div class="preview-doc">
                                <div v-html="contentOnDialog.file"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div v-else class="col-12">
                          <q-skeleton width="100%" height="100px" />
                        </div>
                      </div>
                    </q-banner>
                  </div>

                  <div v-if="true" class="col-xs-12 col-md-4">
                    <div class="q-gutter-sm q-pa-md">
                      <q-banner
                        class="text-white"
                        style="background-color: #9690c5; border-radius: 1rem"
                      >
                        <div class="row items-center justify-between">
                          <input
                            class="q-ma-sm"
                            filled
                            type="file"
                            accept="audio/*"
                            @change="onAudioChange"
                            style="color: white"
                          />
                        </div>
                        <audio
                          v-if="contentOnDialog"
                          :src="audioUrl"
                          controls
                        ></audio>
                      </q-banner>

                      <q-banner
                        class="text-white"
                        style="
                          max-height: 60px;
                          background-color: #9690c5;
                          border-radius: 1rem;
                        "
                      >
                        <div class="row items-center justify-between">
                          <div v-if="contentOnDialog" class="col-12 text-bold">
                            {{ contentOnDialog.title }}
                          </div>
                          <div v-else class="col-12 text-right text-bold">
                            <q-skeleton
                              animation="wave"
                              width="100%"
                              type="text"
                            />
                          </div>
                        </div>
                      </q-banner>

                      <q-banner
                        class="text-white"
                        style="background-color: #9690c5; border-radius: 1rem"
                      >
                        <div class="row items-center justify-between">
                          <div class="col-12">
                            <div v-if="contentOnDialog" class="text-subtitle1">
                              {{ contentOnDialog.description }}
                            </div>
                            <div v-else class="text-right text-bold">
                              <q-skeleton animation="wave" type="text" />
                              <q-skeleton animation="wave" type="text" />
                              <q-skeleton animation="wave" type="text" />
                              <q-skeleton
                                width="50%"
                                animation="wave"
                                type="text"
                              />
                            </div>
                          </div>
                        </div>
                      </q-banner>

                      <q-banner
                        class="text-white"
                        style="background-color: #9690c5; border-radius: 1rem"
                      >
                        <div style="width: 100%; max-width: 400px">
                          <q-chat-message
                            v-for="c in comments"
                            :key="c"
                            :name="
                              c.user_id == loggedUser.id ? 'Reporter' : 'Eu'
                            "
                            :text="[c.text]"
                            :sent="c.user_id == loggedUser.id ? true : false"
                          />
                        </div>

                        <div class="cursor-pointer">
                          <q-input
                            outlined
                            v-model="popupLabel"
                            label="Comente"
                            type="textarea"
                            label-color="white"
                            text-color="whit5e"
                            style="
                              background-color: #9690c5;
                              border-radius: 2rem;
                            "
                            rounded
                          />
                          <q-btn
                            v-if="
                              contentOnDialog.status === 'pending' &&
                              !contentOnDialog.reviewer_id
                            "
                            :disable="!popupLabel"
                            color="red"
                            label="regeitar"
                            @click="rejectContent1"
                          />
                          <q-btn
                          v-if="
                              contentOnDialog.status === 'pending' &&
                              !contentOnDialog.reviewer_id
                            "
                            :disable="!popupLabel"
                            color="green"
                            label="Aprovar"
                            @click="commentContent"
                          />
                        </div>
                      </q-banner>
                    </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </q-dialog>
        </div>
        <div class="row justify-center">
          <div class="col-12 row justify-center">
            <!-- Recentes -->
            <div
              class="col-xs-12 col-sm-12 q-ma-sm q-pa-lg"
              style="background-color: #9690c5; border-radius: 1rem"
            >
              <div class="text-subtitle1 text-white">Recentes</div>

              <div class="q-gutter-lg" v-if="contents.length > 0">
                <q-banner
                  class="text-black"
                  style="background-color: #e0deed; border-radius: 1rem"
                  v-for="c in contents"
                  :key="c"
                  @click="viewContent(c)"
                >
                  <div class="row items-center justify-between">
                    <div class="col-2">
                      <q-icon round color="primary" name="person" />
                    </div>
                    <div class="col-8">
                      <div class="text-subtitle1">{{ c.title }}</div>
                    </div>

                    <div class="col-2 text-right text-bold">
                      {{ progress(c).status }}
                    </div>
                  </div>
                  <q-linear-progress
                    size="25px"
                    :value="progress(c).value"
                    :color="c.status === 'pending' ? 'yellow-5' : 'amber-8'"
                  >
                    <div class="absolute-full flex flex-center">
                      <q-badge
                        color="white"
                        text-color="accent"
                        :label="progress(c).text"
                      />
                    </div>
                  </q-linear-progress>
                </q-banner>
              </div>
              <div class="q-gutter-lg" v-else>
                <q-banner
                  class="text-black"
                  style="
                    max-height: 60px;
                    background-color: #e0deed;
                    border-radius: 1rem;
                  "
                  v-for="c in 4"
                  :key="c"
                  @click="viewContent(c)"
                >
                  <div class="row items-center justify-between">
                    <div class="col-2">
                      <q-icon round color="primary" name="person" />
                    </div>
                    <div class="col-8">
                      <q-skeleton animation="wave" width="70%" type="text" />
                    </div>
                    <div class="col-2">
                      <q-skeleton animation="wave" width="100%" type="text" />
                    </div>
                  </div>
                </q-banner>
              </div>
            </div>
          </div>
        </div>
      </q-page>

      <q-page padding v-if="loggedUser && loggedUser.role == 'reviewer'">
        <q-dialog
          v-model="dialog"
          persistent
          :maximized="maximizedToggle"
          transition-show="slide-up"
          transition-hide="slide-down"
        >
          <q-card class="text-black">
            <q-bar>
              <q-space />

              <q-btn
                dense
                flat
                icon="minimize"
                @click="maximizedToggle = false"
                :disable="!maximizedToggle"
              >
                <q-tooltip v-if="maximizedToggle" class="bg-white text-primary"
                  >Minimize</q-tooltip
                >
              </q-btn>
              <q-btn
                dense
                flat
                icon="crop_square"
                @click="maximizedToggle = true"
                :disable="maximizedToggle"
              >
                <q-tooltip v-if="!maximizedToggle" class="bg-white text-primary"
                  >Maximize</q-tooltip
                >
              </q-btn>
              <q-btn dense flat icon="close" v-close-popup>
                <q-tooltip class="bg-white text-primary">Close</q-tooltip>
              </q-btn>
            </q-bar>

            <q-card-section>
              <div class="row q-mb-lg justify-between q-gutter-sm">
                <div
                  v-if="
                    contentOnDialog.status === 'pending' &&
                    contentOnDialog.reviewer_id
                  "
                  class="text-subtitle1 text-green"
                >
                  Aprovado por ti
                </div>
                <div
                  v-if="
                    contentOnDialog.status === 'regected' &&
                    contentOnDialog.reviewer_id
                  "
                  class="text-subtitle1 text-red"
                >
                  regected por ti
                </div>

                <div class="row q-mb-lg justify-end q-gutter-sm">
                  <q-btn
                    color="green"
                    v-if="
                      (contentOnDialog.status === 'pending' &&
                        !contentOnDialog.reviewer_id) ||
                      contentOnDialog.status === 'regected'
                    "
                    label="Aprovar"
                    @click="aproveContent"
                  />
                </div>
              </div>

              <div class="row">
                <div class="col-xs-12 col-md-8">
                  <q-banner
                    class="text-white"
                    style="background-color: #9690c5; border-radius: 1rem"
                  >
                    Files
                    <div class="row items-center justify-between">
                      <div
                        v-if="contentOnDialog"
                        class="col-12 text-right text-bold"
                      >
                        <div
                          v-if="contentOnDialog"
                          class="col-12 text-right text-bold"
                        >
                          <img
                            :src="contentOnDialog.file"
                            style="width: 100%"
                          />
                          <div class="file-preview">
                            <img
                              :src="contentOnDialog.file"
                              class="preview-image"
                            />

                            <div class="preview-pdf">
                              <iframe
                                :src="contentOnDialog.file"
                                width="100%"
                                height="600px"
                              ></iframe>
                            </div>

                            <div class="preview-doc">
                              <div v-html="contentOnDialog.file"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div v-else class="col-12">
                        <q-skeleton width="100%" height="100px" />
                      </div>
                    </div>
                  </q-banner>
                </div>

                <div v-if="true" class="col-xs-12 col-md-4">
                  <div class="q-gutter-sm q-pa-md">
                    <q-banner
                      class="text-white"
                      style="background-color: #9690c5; border-radius: 1rem"
                    >
                      <audio
                        v-if="contentOnDialog"
                        :src="audioUrl"
                        controls
                      ></audio>
                    </q-banner>

                    <q-banner
                      class="text-white"
                      style="
                        max-height: 60px;
                        background-color: #9690c5;
                        border-radius: 1rem;
                      "
                    >
                      <div class="row items-center justify-between">
                        <div v-if="contentOnDialog" class="col-12 text-bold">
                          {{ contentOnDialog.title }}
                        </div>
                        <div v-else class="col-12 text-right text-bold">
                          <q-skeleton
                            animation="wave"
                            width="100%"
                            type="text"
                          />
                        </div>
                      </div>
                    </q-banner>

                    <q-banner
                      class="text-white"
                      style="background-color: #9690c5; border-radius: 1rem"
                    >
                      <div class="row items-center justify-between">
                        <div class="col-12">
                          <div v-if="contentOnDialog" class="text-subtitle1">
                            {{ contentOnDialog.description }}
                          </div>
                          <div v-else class="text-right text-bold">
                            <q-skeleton animation="wave" type="text" />
                            <q-skeleton animation="wave" type="text" />
                            <q-skeleton animation="wave" type="text" />
                            <q-skeleton
                              width="50%"
                              animation="wave"
                              type="text"
                            />
                          </div>
                        </div>
                      </div>
                    </q-banner>

                    <q-banner
                      class="text-white"
                      style="background-color: #9690c5; border-radius: 1rem"
                    >
                      <div style="width: 100%; max-width: 400px">
                        <q-chat-message
                          v-for="c in comments"
                          :key="c"
                          :name="c.user_id == loggedUser.id ? 'Reporter' : 'Eu'"
                          :text="[c.text]"
                          :sent="c.user_id == loggedUser.id ? true : false"
                        />
                      </div>

                      <div class="cursor-pointer">
                        <q-input
                          outlined
                          v-model="popupLabel"
                          label="Comente"
                          type="textarea"
                          label-color="white"
                          text-color="whit5e"
                          style="background-color: #9690c5; border-radius: 2rem"
                          rounded
                        />
                        <q-btn
                          v-if="contentOnDialog.status === 'pending'"
                          :disable="!popupLabel"
                          color="red"
                          label="regeitar"
                          @click="rejectContent1"
                        />
                        <q-btn
                          color="green"
                          :disable="!popupLabel"
                          v-if="
                            (contentOnDialog.status === 'pending' &&
                              !contentOnDialog.reviewer_id) ||
                            contentOnDialog.status === 'regected'
                          "
                          label="Aprovar"
                          @click="commentContent"
                        />
                      </div>
                    </q-banner>
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </q-dialog>
        <div class="row justify-center">
          <div class="col-12 row justify-center">
            <!-- Recentes -->
            <div
              class="col-xs-12 col-sm-12 q-ma-sm q-pa-lg"
              style="background-color: #9690c5; border-radius: 1rem"
            >
              <div class="text-subtitle1 text-white">Recentes</div>

              <div class="q-gutter-lg" v-if="contents.length > 0">
                <q-banner
                  class="text-black"
                  style="background-color: #e0deed; border-radius: 1rem"
                  v-for="c in contents"
                  :key="c"
                  @click="viewContent(c)"
                >
                  <div class="row items-center justify-between">
                    <div class="col-2">
                      <q-icon round color="primary" name="person" />
                    </div>
                    <div class="col-8">
                      <div class="text-subtitle1">{{ c.title }}</div>
                    </div>

                    <div class="col-2 text-right text-bold">
                      {{ progress(c).status }}
                    </div>
                  </div>
                  <q-linear-progress
                    size="25px"
                    :value="progress(c).value"
                    :color="c.status === 'pending' ? 'yellow-5' : 'amber-8'"
                  >
                    <div class="absolute-full flex flex-center">
                      <q-badge
                        color="white"
                        text-color="accent"
                        :label="progress(c).text"
                      />
                    </div>
                  </q-linear-progress>
                </q-banner>
              </div>
              <div class="q-gutter-lg" v-else>
                <q-banner
                  class="text-black"
                  style="
                    max-height: 60px;
                    background-color: #e0deed;
                    border-radius: 1rem;
                  "
                  v-for="c in 4"
                  :key="c"
                  @click="viewContent(c)"
                >
                  <div class="row items-center justify-between">
                    <div class="col-2">
                      <q-icon round color="primary" name="person" />
                    </div>
                    <div class="col-8">
                      <q-skeleton animation="wave" width="70%" type="text" />
                    </div>
                    <div class="col-2">
                      <q-skeleton animation="wave" width="100%" type="text" />
                    </div>
                  </div>
                </q-banner>
              </div>
            </div>
          </div>
        </div>
      </q-page>

      <q-page padding v-if="loggedUser && loggedUser.role == 'announcer'">
        <div class="q-pa-md q-gutter-sm">
          <q-dialog
            v-model="dialog"
            persistent
            :maximized="maximizedToggle"
            transition-show="slide-up"
            transition-hide="slide-down"
          >
            <q-card class="text-black">
              <q-bar>
                <q-space />

                <q-btn
                  dense
                  flat
                  icon="minimize"
                  @click="maximizedToggle = false"
                  :disable="!maximizedToggle"
                >
                  <q-tooltip
                    v-if="maximizedToggle"
                    class="bg-white text-primary"
                    >Minimize</q-tooltip
                  >
                </q-btn>
                <q-btn
                  dense
                  flat
                  icon="crop_square"
                  @click="maximizedToggle = true"
                  :disable="maximizedToggle"
                >
                  <q-tooltip
                    v-if="!maximizedToggle"
                    class="bg-white text-primary"
                    >Maximize</q-tooltip
                  >
                </q-btn>
                <q-btn dense flat icon="close" v-close-popup>
                  <q-tooltip class="bg-white text-primary">Close</q-tooltip>
                </q-btn>
              </q-bar>

              <q-card-section>
                <div class="row q-mb-lg justify-between q-gutter-sm">
                  <div
                    v-if="
                      contentOnDialog.status === 'pending' &&
                      contentOnDialog.announcer_id
                    "
                    class="text-subtitle1 text-green"
                  >
                    Aprovado por ti
                  </div>
                  <div
                    v-if="
                      contentOnDialog.status === 'regected' &&
                      contentOnDialog.announcer_id
                    "
                    class="text-subtitle1 text-red"
                  >
                    regected por ti
                  </div>

                  <div class="row q-mb-lg justify-end q-gutter-sm">
                    <q-btn
                      color="green"
                      v-if="
                        (contentOnDialog.status === 'pending' &&
                          !contentOnDialog.announcer_id) ||
                        contentOnDialog.status === 'regected'
                      "
                      label="Aprovar"
                      @click="aproveContent"
                    />
                  </div>
                </div>

                <div class="row">
                  <div class="col-xs-12 col-md-8">
                    <q-banner
                      class="text-white"
                      style="background-color: #9690c5; border-radius: 1rem"
                    >
                      Files
                      <div class="row items-center justify-between">
                        <div
                          v-if="contentOnDialog"
                          class="col-12 text-right text-bold"
                        >
                          <div
                            v-if="contentOnDialog"
                            class="col-12 text-right text-bold"
                          >
                            <img
                              :src="contentOnDialog.file"
                              style="width: 100%"
                            />
                            <div class="file-preview">
                              <img
                                :src="contentOnDialog.file"
                                class="preview-image"
                              />

                              <div class="preview-pdf">
                                <iframe
                                  :src="contentOnDialog.file"
                                  width="100%"
                                  height="600px"
                                ></iframe>
                              </div>

                              <div class="preview-doc">
                                <div v-html="contentOnDialog.file"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div v-else class="col-12">
                          <q-skeleton width="100%" height="100px" />
                        </div>
                      </div>
                    </q-banner>
                  </div>

                  <div v-if="true" class="col-xs-12 col-md-4">
                    <div class="q-gutter-sm q-pa-md">
                      <q-banner
                        class="text-white"
                        style="background-color: #9690c5; border-radius: 1rem"
                      >
                        <audio
                          v-if="contentOnDialog"
                          :src="audioUrl"
                          controls
                        ></audio>
                      </q-banner>

                      <q-banner
                        class="text-white"
                        style="
                          max-height: 60px;
                          background-color: #9690c5;
                          border-radius: 1rem;
                        "
                      >
                        <div class="row items-center justify-between">
                          <div v-if="contentOnDialog" class="col-12 text-bold">
                            {{ contentOnDialog.title }}
                          </div>
                          <div v-else class="col-12 text-right text-bold">
                            <q-skeleton
                              animation="wave"
                              width="100%"
                              type="text"
                            />
                          </div>
                        </div>
                      </q-banner>

                      <q-banner
                        class="text-white"
                        style="background-color: #9690c5; border-radius: 1rem"
                      >
                        <div class="row items-center justify-between">
                          <div class="col-12">
                            <div v-if="contentOnDialog" class="text-subtitle1">
                              {{ contentOnDialog.description }}
                            </div>
                            <div v-else class="text-right text-bold">
                              <q-skeleton animation="wave" type="text" />
                              <q-skeleton animation="wave" type="text" />
                              <q-skeleton animation="wave" type="text" />
                              <q-skeleton
                                width="50%"
                                animation="wave"
                                type="text"
                              />
                            </div>
                          </div>
                        </div>
                      </q-banner>

                      <q-banner
                        class="text-white"
                        style="background-color: #9690c5; border-radius: 1rem"
                      >
                        <div style="width: 100%; max-width: 400px">
                          <q-chat-message
                            v-for="c in comments"
                            :key="c"
                            :name="
                              c.user_id == loggedUser.id ? 'Reporter' : 'Eu'
                            "
                            :text="[c.text]"
                            :sent="c.user_id == loggedUser.id ? true : false"
                          />
                        </div>

                        <div class="cursor-pointer">
                          <q-input
                            outlined
                            v-model="popupLabel"
                            label="Comente"
                            type="textarea"
                            label-color="white"
                            text-color="whit5e"
                            style="
                              background-color: #9690c5;
                              border-radius: 2rem;
                            "
                            rounded
                          />
                          <q-btn
                            v-if="contentOnDialog.status === 'pending'"
                            :disable="!popupLabel"
                            color="red"
                            label="regeitar"
                            @click="rejectContent1"
                          />
                          <q-btn
                            color="green"
                            :disable="!popupLabel"
                            v-if="
                              (contentOnDialog.status === 'pending' &&
                                !contentOnDialog.announcer_id) ||
                              contentOnDialog.status === 'regected'
                            "
                            label="Aprovar"
                            @click="commentContent"
                          />
                        </div>
                      </q-banner>
                    </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </q-dialog>
        </div>
        <div class="row justify-center">
          <div class="col-12 row justify-center">
            <!-- Recentes -->
            <div
              class="col-xs-12 col-sm-12 q-ma-sm q-pa-lg"
              style="background-color: #9690c5; border-radius: 1rem"
            >
              <div class="text-subtitle1 text-white">Recentes</div>

              <div class="q-gutter-lg" v-if="contents.length > 0">
                <q-banner
                  class="text-black"
                  style="background-color: #e0deed; border-radius: 1rem"
                  v-for="c in contents"
                  :key="c"
                  @click="viewContent(c)"
                >
                  <div class="row items-center justify-between">
                    <div class="col-2">
                      <q-icon round color="primary" name="person" />
                    </div>
                    <div class="col-8">
                      <div class="text-subtitle1">{{ c.title }}</div>
                    </div>

                    <div class="col-2 text-right text-bold">
                      {{ progress(c).status }}
                    </div>
                  </div>
                  <q-linear-progress
                    size="25px"
                    :value="progress(c).value"
                    :color="c.status === 'pending' ? 'yellow-5' : 'amber-8'"
                  >
                    <div class="absolute-full flex flex-center">
                      <q-badge
                        color="white"
                        text-color="accent"
                        :label="progress(c).text"
                      />
                    </div>
                  </q-linear-progress>
                </q-banner>
              </div>
              <div class="q-gutter-lg" v-else>
                <q-banner
                  class="text-black"
                  style="
                    max-height: 60px;
                    background-color: #e0deed;
                    border-radius: 1rem;
                  "
                  v-for="c in 4"
                  :key="c"
                  @click="viewContent(c)"
                >
                  <div class="row items-center justify-between">
                    <div class="col-2">
                      <q-icon round color="primary" name="person" />
                    </div>
                    <div class="col-8">
                      <q-skeleton animation="wave" width="70%" type="text" />
                    </div>
                    <div class="col-2">
                      <q-skeleton animation="wave" width="100%" type="text" />
                    </div>
                  </div>
                </q-banner>
              </div>
            </div>
          </div>
        </div>
      </q-page>

      <q-page padding v-if="loggedUser && loggedUser.role == 'admin'">
        <div class="q-pa-md q-gutter-sm">
          <q-dialog
            v-model="dialog"
            persistent
            :maximized="maximizedToggle"
            transition-show="slide-up"
            transition-hide="slide-down"
          >
            <q-card class="text-black">
              <q-bar>
                <q-space />

                <q-btn
                  dense
                  flat
                  icon="minimize"
                  @click="maximizedToggle = false"
                  :disable="!maximizedToggle"
                >
                  <q-tooltip
                    v-if="maximizedToggle"
                    class="bg-white text-primary"
                    >Minimize</q-tooltip
                  >
                </q-btn>
                <q-btn
                  dense
                  flat
                  icon="crop_square"
                  @click="maximizedToggle = true"
                  :disable="maximizedToggle"
                >
                  <q-tooltip
                    v-if="!maximizedToggle"
                    class="bg-white text-primary"
                    >Maximize</q-tooltip
                  >
                </q-btn>
                <q-btn dense flat icon="close" v-close-popup>
                  <q-tooltip class="bg-white text-primary">Close</q-tooltip>
                </q-btn>
              </q-bar>

              <q-card-section>
                <div class="row q-mb-lg justify-end q-gutter-sm">
                  <q-btn
                    color="green"
                    v-if="
                      contentOnDialog.status === 'draft' ||
                      contentOnDialog.status === 'rejected' ||
                      (contentOnDialog.status === 'pending' &&
                        contentOnDialog.editor_id)
                    "
                    label="Aprovar"
                    @click="aproveContent"
                  />
                  <q-btn
                    v-if="
                      contentOnDialog.status === 'pending' &&
                      !contentOnDialog.editor_id
                    "
                    color="red"
                    label="Cancelar"
                    @click="cancelContent"
                  />

                  <q-btn
                    v-if="
                      contentOnDialog.status === 'pending' &&
                      contentOnDialog.editor_id
                    "
                    color="red"
                    label="regeitar"
                    @click="rejectContent"
                  />
                </div>

                <div class="row">
                  <div class="col-xs-12 col-md-8">
                    <q-banner
                      class="text-white"
                      style="background-color: #9690c5; border-radius: 1rem"
                    >
                      Files
                      <div class="row items-center justify-between">
                        <div
                          v-if="contentOnDialog"
                          class="col-12 text-right text-bold"
                        >
                          <div
                            v-if="contentOnDialog"
                            class="col-12 text-right text-bold"
                          >
                            <img
                              :src="contentOnDialog.file"
                              style="width: 100%"
                            />
                            <div class="file-preview">
                              <img
                                :src="contentOnDialog.file"
                                class="preview-image"
                              />

                              <div class="preview-pdf">
                                <iframe
                                  :src="contentOnDialog.file"
                                  width="100%"
                                  height="600px"
                                ></iframe>
                              </div>

                              <div class="preview-doc">
                                <div v-html="contentOnDialog.file"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div v-else class="col-12">
                          <q-skeleton width="100%" height="100px" />
                        </div>
                      </div>
                    </q-banner>
                  </div>

                  <div v-if="true" class="col-xs-12 col-md-4">
                    <div class="q-gutter-sm q-pa-md">
                      <q-banner
                        class="text-white"
                        style="background-color: #9690c5; border-radius: 1rem"
                      >
                        <audio
                          v-if="contentOnDialog"
                          :src="audioUrl"
                          controls
                        ></audio>
                      </q-banner>
                      <q-banner
                        class="text-white"
                        style="
                          max-height: 60px;
                          background-color: #9690c5;
                          border-radius: 1rem;
                        "
                      >
                        <div class="row items-center justify-between">
                          <div v-if="contentOnDialog" class="col-12 text-bold">
                            {{ contentOnDialog.title }}
                          </div>
                          <div v-else class="col-12 text-right text-bold">
                            <q-skeleton
                              animation="wave"
                              width="100%"
                              type="text"
                            />
                          </div>
                        </div>
                      </q-banner>

                      <q-banner
                        class="text-white"
                        style="background-color: #9690c5; border-radius: 1rem"
                      >
                        <div class="row items-center justify-between">
                          <div class="col-12">
                            <div v-if="contentOnDialog" class="text-subtitle1">
                              {{ contentOnDialog.description }}
                            </div>
                            <div v-else class="text-right text-bold">
                              <q-skeleton animation="wave" type="text" />
                              <q-skeleton animation="wave" type="text" />
                              <q-skeleton animation="wave" type="text" />
                              <q-skeleton
                                width="50%"
                                animation="wave"
                                type="text"
                              />
                            </div>
                          </div>
                        </div>
                      </q-banner>

                      <q-banner
                        v-if="false"
                        class="text-white"
                        style="background-color: #9690c5; border-radius: 1rem"
                      >
                        Files
                        <div class="row items-center justify-between">
                          <div
                            v-if="lastContent"
                            class="col-12 text-right text-bold"
                          >
                            <img :src="lastContent.file" style="width: 100%" />
                          </div>
                          <div v-else class="col-12">
                            <q-skeleton width="100%" height="100px" />
                          </div>
                        </div>
                      </q-banner>
                    </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </q-dialog>
        </div>

        <div class="q-pa-md q-gutter-sm">
          <q-dialog
            v-model="dialogUser"
            persistent
            transition-show="slide-up"
            transition-hide="slide-down"
          >
            <q-card class="text-black">
              <q-bar>
                <q-space />

                <q-btn
                  dense
                  flat
                  icon="minimize"
                  @click="maximizedToggle = false"
                  :disable="!maximizedToggle"
                >
                  <q-tooltip
                    v-if="maximizedToggle"
                    class="bg-white text-primary"
                    >Minimize</q-tooltip
                  >
                </q-btn>
                <q-btn
                  dense
                  flat
                  icon="crop_square"
                  @click="maximizedToggle = true"
                  :disable="maximizedToggle"
                >
                  <q-tooltip
                    v-if="!maximizedToggle"
                    class="bg-white text-primary"
                    >Maximize</q-tooltip
                  >
                </q-btn>
                <q-btn
                  dense
                  flat
                  icon="close"
                  @click="closeDialogUser"
                  v-close-popup
                >
                  <q-tooltip class="bg-white text-primary">Close</q-tooltip>
                </q-btn>
              </q-bar>

              <q-card-section class="row">
                <q-form @submit="addUser" class="q-gutter-md col-xs-4564">
                  <q-input
                    outlined
                    v-model="user.name"
                    label="Nome"
                    label-color="white"
                    text-color="whiteu"
                    style="background-color: #9690c5; border-radius: 2rem"
                    rounded
                  />
                  <q-input
                    outlined
                    v-model="user.lastname"
                    label="Apelido"
                    label-color="white"
                    text-color="whiteu"
                    style="background-color: #9690c5; border-radius: 2rem"
                    rounded
                  />
                  <q-input
                    outlined
                    v-model="user.location"
                    label="Local de trabalho"
                    label-color="white"
                    text-color="white"
                    style="background-color: #9690c5; border-radius: 2rem"
                    rounded
                  />
                  <q-select
                    outlined
                    v-model="user.role"
                    label="Funcao"
                    label-color="white"
                    text-color="whiteu"
                    style="background-color: #9690c5; border-radius: 2rem"
                    rounded
                    :options="options"
                  />
                  <q-input
                    outlined
                    v-model="user.email"
                    label="email"
                    label-color="white"
                    text-color="whiteu"
                    style="background-color: #9690c5; border-radius: 2rem"
                    rounded
                  />
                  <q-input
                    outlined
                    v-model="user.password"
                    label="Senha"
                    label-color="white"
                    text-color="whiteu"
                    style="background-color: #9690c5; border-radius: 2rem"
                    rounded
                  />

                  <div v-if="!user.view">
                    <q-btn label="novo usuario" type="submit" color="primary" />
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
              </q-card-section>
            </q-card>
          </q-dialog>
        </div>

        <div class="row justify-center">
          <div class="col-12 row justify-center">
            <!-- Recentes -->
            <div
              class="col-xs-12 col-sm-8 q-ma-sm q-pa-lg"
              style="background-color: #9690c5; border-radius: 1rem"
            >
              <div class="row justify-between items-center q-pa-lg">
                <div class="text-subtitle1 text-white">Usuarios</div>
                <q-btn color="black" @click="dialogUser = true" label="novo" />
              </div>

              <div class="q-gutter-lg" v-if="users.length > 0">
                <q-banner
                  class="text-black"
                  style="
                    max-height: 60px;
                    background-color: #e0deed;
                    border-radius: 1rem;
                  "
                  v-for="c in users"
                  :key="c"
                  @click="viewUser(c)"
                >
                  <div class="row items-center justify-between">
                    <div class="col-2">
                      <q-icon round color="primary" name="person" />
                    </div>
                    <div class="col-8">
                      <div class="text-subtitle1">
                        {{ c.name + " " + c.lastname }}
                      </div>
                    </div>

                    <div class="col-2 text-right text-bold">{{ c.role }}</div>
                  </div>
                </q-banner>
              </div>
              <div class="q-gutter-lg" v-else>
                <q-banner
                  class="text-black"
                  style="
                    max-height: 60px;
                    background-color: #e0deed;
                    border-radius: 1rem;
                  "
                  v-for="c in 4"
                  :key="c"
                  @click="viewContent(c)"
                >
                  <div class="row items-center justify-between">
                    <div class="col-2">
                      <q-icon round color="primary" name="person" />
                    </div>
                    <div class="col-8">
                      <q-skeleton animation="wave" width="70%" type="text" />
                    </div>
                    <div class="col-2">
                      <q-skeleton animation="wave" width="100%" type="text" />
                    </div>
                  </div>
                </q-banner>
              </div>
            </div>

            <div
              class="col-xs-12 col-sm-2 q-ma-sm"
              style="background-color: #e0deed; border-radius: 1rem"
            >
              <div class="row justify-center items-center">
                <div class="col-12 items-center">
                  <img
                    :src="ilustre.podcast"
                    style="max-width: 100%; max-height: 100%; height: auto"
                  />
                </div>
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
import { ref, onMounted } from "vue";
import { $logos, $ilustre } from "/src/assets/assets.js";
import GradientButton from "/src/components/btn/GradientButton.vue";
import db from "/src/services/IndexedDBService";

const ilustre = ref($ilustre);
const logos = ref($logos);

export default {
  data() {
    return {
      imagePreviews: null,
      pdfPreviews: null,
      docPreviews: null,
      user: {},
      content: {
        reporter_id: null,
        editor_id: null,
        reviewer_id: null,
        announcer_id: null,
        title: "",
        description: "",
        created_at: null,
        updated_at: null,
        status: "draft",
        file: null,
        audio: null,
        audioUrl: null,
      },
      contents: [],
      comments: [],
      users: [],
      lastContent: null,
      contentOnDialog: null,
      loggedUser: null,
      audioUrl: null,
    };
  },
  methods: {
    onAudioChange(event) {
      const files = event.target.files;
      if (files.length > 0) {
        this.content.audio = files[0];
        this.contentOnDialog.audio = URL.createObjectURL(this.content.audio);
        this.audioUrl = this.contentOnDialog.audio;
        // console.log(this.content.audio);
      }
    },

    progress(c) {
      if (c.status == "draft") {
        return { value: 0, text: "0%", status: "Rascunho" };
      }
      if (c.status == "pending" && !c.editor_id) {
        return { value: 0.25, text: "25%", status: "Pendente" };
      }
      if (c.status == "pending" && c.editor_id) {
        if (c.status == "pending" && c.reviewer_id) {
          if (c.status == "pending" && c.announcer_id) {
            return { value: 1, text: "100%", status: "Publicado" };
          }
          return { value: 0.75, text: "75%", status: "Revisto" };
        }
        return { value: 0.5, text: "50%", status: "Editado" };
      }

      if (c.status == "regected" && c.editor_id) {
        if (c.status == "regected" && c.reviewer_id) {
          if (c.status == "regected" && c.announcer_id) {
            return { value: 1, text: "100%", status: "Regeitado" };
          }
          return { value: 0.75, text: "75%", status: "Regeitado" };
        }
        return { value: 0.5, text: "50%", status: "Regeitado" };
      }

      return { value: 1, text: "100%" };
    },

    previewFiles(event) {
      const files = event.target.files;
      this.imagePreviews = null;
      this.pdfPreviews = null;
      this.docPreviews = null;

      for (const file of files) {
        const reader = new FileReader();

        if (file.type.match("image.*")) {
          reader.onload = (e) => {
            this.imagePreviews = e.target.result;
            this.content.file = e.target.result;
          };
          reader.readAsDataURL(file);
        } else if (file.type === "application/pdf") {
          reader.onload = (e) => {
            const pdfData = e.target.result;
            const pdfUrl = URL.createObjectURL(
              new Blob([pdfData], { type: "application/pdf" })
            );
            this.pdfPreviews = pdfUrl;
            this.content.file = pdfUrl;
          };
          reader.readAsArrayBuffer(file);
        } else if (
          file.type === "application/msword" ||
          file.type ===
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        ) {
          reader.onload = (e) => {
            const arrayBuffer = e.target.result;
            mammoth.convertToHtml({ arrayBuffer }).then((result) => {
              this.docPreviews = result.value;
              this.content.file = result.value;
            });
          };
          reader.readAsArrayBuffer(file);
        }
      }
    },

    addContent() {
      try {
        this.content.reporter_id = this.loggedUser.id;
        const contentToAdd = JSON.parse(JSON.stringify(this.content));
        db.content.add(contentToAdd);
        this.listContents();
        this.content = {
          reporter_id: null,
          editor_id: null,
          reviewer_id: null,
          announcer_id: null,
          title: "",
          file: null,
          description: "",
          created_at: null,
          updated_at: null,
          status: null,
          file: null,
        };
        this.imagePreview = null;
        this.pdfPreviews= null;
        this.docPreviews= null;
        this.$q.notify({
          type: "positive",
          position: "top-right",
          message: "Conteúdo adicionado com sucesso.",
        });
        console.log("Conteúdo adicionado com sucesso", this.content);
      } catch (error) {
        this.$q.notify({
          type: "negative",
          position: "top-right",
          message: "Erro ao adicionar conteúdo.",
        });
        console.error("Erro ao adicionar conteúdo:", error);
      }
    },

    addUser() {
      try {
        const user = JSON.parse(JSON.stringify(this.user));
        db.users.add(user);
        this.listUsers();
        this.user.name = "";

        this.user = null;

        this.$q.notify({
          type: "positive",
          position: "top-right",
          message: "Usario adicionado com sucesso.",
        });
        this.dialogUser = false;
        console.log("Usuario adicionado com sucesso", this.content);
      } catch (error) {
        this.$q.notify({
          type: "negative",
          position: "top-right",
          message: "Erro ao adicionar Usuario.",
        });
        console.error("Erro ao adicionar Usuario:", error);
      }
    },

    async logout() {
      await db.users.update(this.loggedUser.id, { loggedIn: 0 });
      this.loggedUser = null;
      this.$router.push(`/login-sambo`);
    },

    // Método para listar todos os conteúdos
    async listContents() {
      try {
        let contentsAux = [];
        if (this.loggedUser.role == "editor") {
          const contents1 = await db.content.toArray();
          for (let index = 0; index < contents1.length; index++) {
            const element = contents1[index];
            if (
              element.status != "draft" &&
              (element.editor_id == null ||
                element.editor_id == this.loggedUser.id)
            ) {
              contentsAux.push(element);
            }
          }
        } else if (this.loggedUser.role == "reviewer") {
          const contents1 = await db.content.toArray();
          for (let index = 0; index < contents1.length; index++) {
            const element = contents1[index];
            if (
              element.status === "pending" &&
              (element.editor_id || element.reviewer_id == this.loggedUser.id)
            ) {
              contentsAux.push(element);
            }
          }
        } else if (this.loggedUser.role == "announcer") {
          const contents1 = await db.content.toArray();
          for (let index = 0; index < contents1.length; index++) {
            const element = contents1[index];
            if (
              element.status === "pending" &&
              (element.reviewer_id ||
                element.announcer_id == this.loggedUser.id)
            ) {
              contentsAux.push(element);
            }
          }
        } else {
          contentsAux = await db.content
            .where({ reporter_id: this.loggedUser.id })
            .toArray();
        }

        this.contents = contentsAux.reverse();
        console.log("Conteúdos:", this.contents);
      } catch (error) {
        console.error("Erro ao listar conteúdos:", error);
        return [];
      }
    },

    async listComments() {
      try {
        let comments = [];

        comments = await db.comments
          .where({ content_id: this.contentOnDialog.id })
          .toArray();

        this.comments = comments;
        // console.log("comments:", this.comments);
      } catch (error) {
        console.error("Erro ao listar comments:", error);
        return [];
      }
    },

    async listUsers() {
      try {
        const users = await db.users.toArray();
        this.users = users.reverse();
        // console.log("users: ", users);
        return users;
      } catch (error) {
        console.error("Erro ao listar users:", error);
        return [];
      }
    },

    async getlastContent() {
      try {
        this.lastContent = await db.content
          .where("status")
          .equals("pending")
          .last(); // Obter o último item que corresponde à condição

        console.log("Último Conteúdo com status 'draft':", contents);
        return contents;
      } catch (error) {
        console.error("Erro ao obter ulimo conteudo:", error);
        return [];
      }
    },

    async getLoggedUser() {
      try {
        this.loggedUser = await db.users.where("loggedIn").equals(1).first();

        if (this.loggedUser) {
          console.log("usuario Logado: ", this.loggedUser);
          this.listContents();
          return;
        }
        this.$router.push(`/login-sambo`);
      } catch (error) {
        console.error("Erro ao obter usuario logado:", error);
        return [];
      }
    },

    closeDialogUser() {
      this.dialogUser = false;
      this.user = {};
    },

    viewContent(content) {
      this.dialog = true;
      this.contentOnDialog = content;
      this.audioUrl = this.contentOnDialog.audio;
      this.listComments();
    },

    viewUser(user) {
      user.view = 1;
      this.dialogUser = true;
      this.user = user;
    },

    aproveContent() {
      this.contentOnDialog.status = "pending";
      if (this.loggedUser.role == "editor") {
        if (!this.content.audio) {
          this.$q.notify({
            type: "negative",
            position: "top-right",
            message: "Adicione o adio para aprovar esse conteudo.",
          });
        }
        this.contentOnDialog.editor_id = this.loggedUser.id;
        this.contentOnDialog.audio = URL.createObjectURL(this.content.audio);
      }
      if (this.loggedUser.role == "reporter") {
        this.contentOnDialog.reporter_id = this.loggedUser.id;
      }
      if (this.loggedUser.role == "reviewer") {
        this.contentOnDialog.reviewer_id = this.loggedUser.id;
      }
      if (this.loggedUser.role == "announcer") {
        this.contentOnDialog.announcer_id = this.loggedUser.id;
      }
      console.log(this.contentOnDialog);
      // return;
      db.content.put(JSON.parse(JSON.stringify(this.contentOnDialog)));
      this.dialog = false; // Fecha o diálogo após a atualização
      this.getlastContent();
      this.listContents();
    },

    commentContent() {
      db.comments.add({
        user_id: this.loggedUser.id,
        content_id: this.contentOnDialog.id,
        text: this.popupLabel,
        created_at: "2024-05-08 17:35:37",
        updated_at: "2024-05-08 17:35:37",
      });
      this.popupLabel = "";
      this.listComments();
      this.aproveContent();
    },

    commentContent1() {
      db.comments.add({
        user_id: this.loggedUser.id,
        content_id: this.contentOnDialog.id,
        text: this.popupLabel,
        created_at: "2024-05-08 17:35:37",
        updated_at: "2024-05-08 17:35:37",
      });
      this.popupLabel = "";
      this.listComments();
    },

    cancelContent() {
      this.contentOnDialog.status = "draft";
      db.content.put(JSON.parse(JSON.stringify(this.contentOnDialog)));
      this.dialog = false; // Fecha o diálogo após a atualização
      this.getlastContent();
      this.listContents();
    },

    rejectContent() {
      if (this.loggedUser.role == "editor") {
        this.contentOnDialog.editor_id = null;
      }
      if (this.loggedUser.role == "reporter") {
        this.contentOnDialog.reporter_id = null;
      }
      if (this.loggedUser.role == "reviewer") {
        this.contentOnDialog.reviewer_id = null;
      }
      if (this.loggedUser.role == "announcer") {
        this.contentOnDialog.announcer_id = null;
      }
      this.contentOnDialog.status = "regected";
      db.content.put(JSON.parse(JSON.stringify(this.contentOnDialog)));
      // this.dialog = false; // Fecha o diálogo após a atualização
      this.getlastContent();
      this.listContents();
    },

    rejectContent1() {
      db.comments.add({
        user_id: this.loggedUser.id,
        content_id: this.contentOnDialog.id,
        text: this.popupLabel,
        created_at: "2024-05-08 17:35:37",
        updated_at: "2024-05-08 17:35:37",
      });

      this.popupLabel = "";
      this.listComments();
      this.rejectContent();
    },

    previewImage(event) {
      this.imagePreview = [];
      // this.imagesItem = []; // Limpa as prévias de imagem anteriores
      const files = event.target.files;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (!file.type.startsWith("image/")) {
          Continuar; // Ignora arquivos que não são imagens
        }
        const reader = new FileReader();
        reader.onload = (e) => {
          // Suponha que result.assets[0].uri contém a imagem em formato base64
          const imageBase64 = e.target.result;

          // Remova o prefixo 'data:image/jpeg;base64,' se estiver presente
          const base64Content = imageBase64.replace(
            /^data:image\/\w+;base64,/,
            ""
          );

          // Converta a string base64 em um ArrayBuffer
          const arrayBuffer = new Uint8Array(
            atob(base64Content)
              .split("")
              .map((char) => char.charCodeAt(0))
          ).buffer;

          // Crie um objeto Blob a partir do ArrayBuffer
          const blob = new Blob([arrayBuffer], { type: "image/jpeg" });
          this.imagePreview.push(e.target.result);

          this.content.file = e.target.result;
          // this.imagesItem.push(blob);
          // console.log(this.imagesItem); // Adiciona o URL da imagem ao array de prévias
          console.log(this.content);
        };
        reader.readAsDataURL(file);
      }
    },

    limitedDescription(text, wordsLimit) {
      if (!text) return "";
      let words = text.split(" ");
      if (words.length > wordsLimit) {
        return words.slice(0, wordsLimit).join(" ") + "...";
      }
      return text;
    },
  },
  created() {

  },

  setup() {
    const imagePreview = ref(null);
    const $q = useQuasar();
    const dialog = ref(false);
    const popupLabel = ref(null);

    const dialogUser = ref(false);

    // Chama o método listContents ao iniciar o componente
    onMounted(() => {
      // this.listContents();
    });

    return {
      options: ["reporter", "editor", "reviewer", "announcer"],
      dialog,
      dialogUser,
      maximizedToggle: ref(true),
      $q,
      drawer: ref(false),
      ilustre,
      logos,
      imagePreview,
      popupLabel,
    };
  },
  mounted() {
    this.getLoggedUser();

    this.listUsers();
    this.getlastContent();
  },
};
</script>

<style>
.preview-image {
  max-width: 200px;
  max-height: 200px;
  margin: 10px;
}
.preview-pdf,
.preview-doc {
  margin: 10px;
}
</style>
