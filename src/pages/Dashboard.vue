<template>
    <span class="font-bold text-xl">User Data</span>    
    <v-container>
      <v-card class="bg-background">
        <v-card-title>
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
            ></v-text-field>
            </v-card-title>
        <v-data-table
          :headers="headers"
          :items="users"
          :search="search"
          :loading="loading"
          loading-text="Loading users..."
          class="elevation-1 bg-background"
        >
          <template #item.actions="{ item }">
            <v-btn color="primary" size="small" @click="goToDetail(item.id)">
              <Icon icon="weui:eyes-on-outlined" style="font-size: 1rem;"/>
            </v-btn>
          </template>
        </v-data-table>
      </v-card>
    </v-container>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        loading: true,
        search: '',
        users: [],
        headers: [
          { key: 'actions', title: 'Actions', sortable: false },
          { key: 'name', title: 'Name' },
          { key: 'username', title: 'Username' },
          { key: 'email', title: 'Email' },
          { key: 'website', title: 'Website' },
        ],
      }
    },
    created() {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
          this.users = res.data
        })
        .catch(() => alert('Error fetching users'))
        .finally(() => {
          this.loading = false
        })
    },
    methods: {
      goToDetail(id) {
        this.$router.push(`/users/${id}`)
      },
    }
  }
  </script>
  