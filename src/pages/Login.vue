<template>
  <v-layout
    class="h-screen w-full flex items-center justify-center bg-[url('/bg-blur-1.webp')] lg:bg-contain bg-background" />
  <v-dialog v-model="dialog" persistent max-width="500">
    <v-card class="!bg-digicoach-dark-blue rounded-lg !bg-opacity-50 text-white">
      <div class="w-full p-5 flex flex-col items-center justify-center">
        <img src="/vite.svg" class="w-28"/>
        <h5 class="h5">Sign in to your HarryApp Account</h5>
        <div class="flex gap-x-2 lg:flex-row flex-col">
          <v-btn class="mt-4" @click="redirectToSocialite('google')">
            <div class="flex items-center gap-x-2">
              <Icon icon="flat-color-icons:google" class="text-lg" />
              <span class="text-black text-xs font-semibold">Login with Google</span>
            </div>
          </v-btn>
        </div>
      </div>
      <v-card-text>
        <v-form ref="loginForm" v-model="valid" lazy-validation>
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="form.username" label="Username"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="form.password" :rules="[rules.required, rules.min]"
                :type="showPassword ? 'text' : 'password'" label="Password" hint="At least 8 characters" counter
                @click:append="showPassword = !showPassword">
                <template v-slot:append-inner>
                  <div @click.stop="showPassword = !showPassword" style="cursor: pointer;">
                    <Icon :icon="showPassword ? 'mdi:eye' : 'mdi:eye-off'" class="white-icon" style="color: white;" />
                  </div>
                </template>
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="flex justify-end gap-x-2">
              <v-btn color="primary" variant="outlined">
                Register
              </v-btn>
              <v-btn :disabled="!valid" color="primary" @click="validate" large>
                Login
              </v-btn>
            </v-col>
          </v-row>
          <v-row>
            <small>username: testuser</small>
          </v-row>
          <v-row>
            <small>password: testpass</small>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: true,
      valid: true,
      showPassword: false,
      form: {
        username: null,
        password: null,
      },
      rules: {
        required: (value) => !!value || "Password is Required.",
        min: (v) => (v && v.length >= 8) || "Min 8 characters",
      },
    };
  },

  methods: {
    validate() {
      if (this.$refs.loginForm.validate()) {
        this.login();
      }
    },
    login() {
        if (this.form.username === 'testuser' && this.form.password === 'testpass') {
                localStorage.setItem('token', 'mock-jwt-token')
                this.$router.push('/')
            } else {
                alert('Invalid credentials')
            }
        }
    },
    redirectToSocialite(provider) {
      window.location.href = `/auth/${provider}`;
    },
};
</script>