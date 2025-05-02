<template>
    <div>
      <div v-if="!user" class="text-center text-gray-400">404</div>
      <div v-else class="md:max-w-4xl mx-auto bg-background">
        <div class="border-b pb-4">
            <h2 class="text-2xl font-bold text-primary mb-1">{{ user.name }}</h2>
            <p class="text-gray-400">{{ user.email }}</p>
            <div class="mt-4 flex justify-between gap-8 text-gray-400">
                <div>
                    <p class="font-semibold mb-1">Address:</p>
                    <p>{{ user.address.street }}, {{ user.address.suite }}</p>
                    <p>{{ user.address.city }}, {{ user.address.zipcode }}</p>
                </div>
                <div>
                    <p class="font-semibold mb-1">Company:</p>
                    <p>{{ user.company.name }}</p>
                    <p><em>{{ user.company.catchPhrase }}</em></p>
                </div>
            </div>
        </div>
        <h3 class="mt-6 text-lg font-semibold text-primary">Postingan:</h3>
        <ul class="mt-4 space-y-4">
          <li
            v-for="post in posts"
            :key="post.id"
            class="p-4 border border-gray-700 rounded-lg bg-surface shadow"
          >
            <strong class="text-white">{{ post.title }}</strong>
            <p class="text-gray-300 mt-1">{{ post.body }}</p>
          </li>
        </ul>
      </div>
    </div>
  </template>
  

<script>
import axios from 'axios'

export default {
    data() {
        return {
            user: null,
            posts: []
        }
    },
    created() {
        const id = this.$route.params.id
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => this.user = res.data)
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then(res => this.posts = res.data)
    }
}
</script>