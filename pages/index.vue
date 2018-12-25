<template>
  <section>
    <!-- <div>
      <app-logo/>
      <h1 class="title">
        oking
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
    </div> -->

    <!-- <con-menu /> -->
    <con-playlist />
    <con-emoji />

    <!-- <div>
      <h1>{{ person.fields.name }}</h1>
      
      <ul>
        <li v-for="(post, index) in posts" :key="index">
          {{ post.fields.title }}
        </li>
      </ul>
    </div> -->

  </section>
</template>

<script>
// https://loving-wright-d0eedb.netlify.com/blog/nuxt-js-x-contentful-x-netlify-static-blog-2
// https://www.contentful.com/developers/docs/javascript/tutorials/integrate-contentful-with-vue-and-nuxt/
// https://app.contentful.com/spaces/cewmlzfouixn

import AppLogo from '~/components/AppLogo.vue'
import ConEmoji from '~/components/ConEmoji.vue'
import ConMenu from '~/components/ConMenu.vue'
import ConPlaylist from '~/components/ConPlaylist.vue'
import { createClient } from '~/plugins/contentful.js'
// import { GetAA } from '~/plugins/axios.js'

const client = createClient()

export default {
  // `env` is available in the context object
  asyncData ({env}) {
    return Promise.all([
      client.getEntries({
        'sys.id': env.CTF_PERSON_ID
      }),
      client.getEntries({
        'content_type': env.CTF_BLOG_POST_TYPE_ID,
        order: '-sys.createdAt'
      })
    ]).then(([entries, posts]) => {
      // console.log('entries: ', entries);
      // console.log('posts: ', posts);
      return {
        person: entries.items[0],
        posts: posts.items
      }
    }).catch(console.error)
  },
  // created() {
  //   console.log('GetAA(): ' ,GetAA());
  // },
  components: {
    AppLogo,
    ConEmoji,
    ConMenu,
    ConPlaylist
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

body {
  background: #DFEFEF;
}
</style>

