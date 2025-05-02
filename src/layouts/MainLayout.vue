<template>
    <v-layout class="rounded rounded-md">
      <v-navigation-drawer elevation="0" color="surface" v-model="drawer" class="border-none">
        <v-list>
          <v-list-item>
            <template #title>
              <div class="flex justify-center">
                <a @click.prevent="() => (drawer = !drawer)" class="cursor-pointer">
                  <img src="/vite.svg" class="h-20 w-20 mt-6" />
                </a>
              </div>
            </template>
          </v-list-item>
          <v-list-item class="mt-12">
            <div class="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wide">
              Menu
            </div>
            <RouterLink to="/" class="flex items-center gap-x-2 py-2 px-4 rounded font-medium" :class="{
              'bg-primary text-white font-semibold': $route.path === '/',
              'hover:bg-gray-700 text-gray-300': $route.path !== '/'
            }">
              <Icon icon="iconamoon:category-fill" style="font-size: 1.5rem" />
              <small>Dashboard</small>
            </RouterLink>
            <RouterLink to="/presensi" class="flex items-center gap-x-2 py-2 px-4 rounded font-medium" :class="{
              'bg-primary text-white font-semibold': $route.path === '/presensi',
              'hover:bg-gray-700 text-gray-300': $route.path !== '/presensi'
            }">
              <Icon icon="game-icons:time-bomb" style="font-size: 1.5rem" />
              <small>Presensi</small>
            </RouterLink>
            <RouterLink to="/laporan" class="flex items-center gap-x-2 py-2 px-4 rounded font-medium" :class="{
              'bg-primary text-white font-semibold': $route.path === '/laporan',
              'hover:bg-gray-700 text-gray-300': $route.path !== '/laporan'
            }">
              <Icon icon="carbon:report" style="font-size: 1.5rem" />
              <small>Laporan</small>
            </RouterLink>
            <div class="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wide">
              Administrator
            </div>
            <RouterLink to="/manajemen-user" class="flex items-center gap-x-2 py-2 px-4 rounded font-medium" :class="{
              'bg-primary text-white font-semibold': $route.path === '/user',
              'hover:bg-gray-700 text-gray-300': $route.path !== '/user'
            }">
              <Icon icon="uim:user-md" style="font-size: 1.5rem" />
              <small>Manajemen User</small>
            </RouterLink>
            <RouterLink to="/manajemen-role" class="flex items-center gap-x-2 py-2 px-4 rounded font-medium" :class="{
              'bg-primary text-white font-semibold': $route.path === '/role',
              'hover:bg-gray-700 text-gray-300': $route.path !== '/role'
            }">
              <Icon icon="oui:app-users-roles" style="font-size: 1.5rem" />
              <small>Manajemen Role</small>
            </RouterLink>
            <RouterLink to="/manajemen-permission" class="flex items-center gap-x-2 py-2 px-4 rounded font-medium" :class="{
              'bg-primary text-white font-semibold': $route.path === '/permission',
              'hover:bg-gray-700 text-gray-300': $route.path !== '/permission'
            }">
              <Icon icon="fluent-mdl2:permissions" style="font-size: 1.5rem" />
              <small>Manajemen Permission</small>
            </RouterLink>
          </v-list-item>
          <v-list-item v-if="drawer" class="mt-10">
            <div class="w-full flex justify-start gap-x-1.5 items-center bg-background rounded-lg p-3">
              <img src="https://simsdm.usu.ac.id/photos/MTMyMjctMTcyNTYxNDg0MQ==.png"
                class="h-12 w-12 rounded-full mr-2.5 object-cover object-center" />
              <div class="flex flex-col">
                <span class="text-sm">Harry Rahman Rangkuti</span>
                <small class="text-[#757575]">Administrator</small>
              </div>
              <Icon icon="ri:logout-circle-r-line" class="cursor-pointer text-red-500 text-2xl ml-2" @click="logout" />
            </div>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar color="surface">
        <div class="w-full flex items-center px-4">
          <div>
            <Icon :icon="drawer ? 'line-md:menu-fold-right' : 'line-md:menu-fold-left'"
              @click.prevent="() => (drawer = !drawer)" class="cursor-pointer " style="font-size: 1.5rem" />
          </div>
          <div class="w-full flex justify-end gap-x-1.5 items-center">
            <div>
              <Icon :icon="$vuetify.theme.global.name === 'dark' ? 'mdi:weather-sunny' : 'mdi:weather-night'"
                class="cursor-pointer ml-4 mr-3 border-2 rounded-full p-1 text-[2.2rem]" @click="toggleTheme" />
            </div>
            <div v-if="drawer" class="flex justify-end">
              <v-btn class="pointer-events-none normal-case rounded-full" variant="outlined">
                {{ idDate(new Date()) }}
              </v-btn>
            </div>
            <div v-else class="flex">
              <span class="text-xs lg:text-base font-normal">Harry Rahman Rangkuti</span>
              <Icon icon="ri:logout-circle-r-line" class="cursor-pointer text-2xl ml-2 text-red-500" @click="logout" />
            </div>
          </div>
        </div>
      </v-app-bar>
      <v-main class="min-h-screen bg-surface">
        <div :class="[
          'bg-background shadow-md p-10 min-h-full border',
          { 'md:rounded-tl-2xl': drawer }
        ]">
          <router-view />
        </div>
      </v-main>
    </v-layout>
  </template>
  
  <script>
  import dayjs from 'dayjs';
  import 'dayjs/locale/id';
  
  dayjs.locale('id');
  
  export default {
    data() {
      return {
        dayjs,
        drawer: true,
      };
    },
  
    mounted() {
      this.$vuetify.theme.global.name = localStorage.getItem('theme') || 'dark';
    },
  
    methods: {
  
      toggleTheme() {
        const newTheme = this.$vuetify.theme.global.name === 'light' ? 'dark' : 'light';
        this.$vuetify.theme.global.name = newTheme;
        localStorage.setItem('theme', newTheme);
      },
  
      async logout() {
        localStorage.removeItem('token')
        window.location.href = '/login'
      },
  
      idDate(date) {
        return dayjs(date).format('dddd, DD MMMM YYYY');
      },
    },
  };
  </script>