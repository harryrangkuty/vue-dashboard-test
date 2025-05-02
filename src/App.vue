<template>
  <component :is="layoutComponent" />
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

export default {
  components: {
    MainLayout,
    AuthLayout
  },
  computed: {
    layoutComponent() {
      return this.$route.path === '/login' ? 'AuthLayout' : 'MainLayout'
    }
  },
}
</script>
