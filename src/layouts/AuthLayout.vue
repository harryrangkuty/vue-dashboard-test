<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <router-view />
    </div>
</template>
<script>
  export default {
    data() {
      return {};
    },
  
    mounted() {
      this.$vuetify.theme.global.name = 'dark';
    },
}
</script>