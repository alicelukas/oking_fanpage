<template>
  <!-- <div> -->
    <div class="Emoji">
      <h2>트위치 이모티콘</h2>
      <ul class="emoji">
        <li><img src="https://static-cdn.jtvnw.net/emoticons/v1/1698475/3.0" /></li>
        <li><img src="https://static-cdn.jtvnw.net/emoticons/v1/1693002/3.0" /></li>
        <li><img src="https://static-cdn.jtvnw.net/emoticons/v1/1692998/3.0" /></li>
        <li><img src="https://static-cdn.jtvnw.net/emoticons/v1/1692995/3.0" /></li>
        <li><img src="https://static-cdn.jtvnw.net/emoticons/v1/1623632/3.0" /></li>
        <li><img src="https://static-cdn.jtvnw.net/emoticons/v1/1407229/3.0" /></li>
        <li><img src="https://static-cdn.jtvnw.net/emoticons/v1/1406211/3.0" /></li>
        <li><img src="https://static-cdn.jtvnw.net/emoticons/v1/1406210/3.0" /></li>
        <li><img src="https://static-cdn.jtvnw.net/emoticons/v1/1281529/3.0" /></li>
        <li><img src="https://static-cdn.jtvnw.net/emoticons/v1/1281528/3.0" /></li>
        <li><img src="https://static-cdn.jtvnw.net/emoticons/v1/1151404/3.0" /></li>
        <li><img src="https://static-cdn.jtvnw.net/emoticons/v1/1151402/3.0" /></li>
        <li><img src="https://static-cdn.jtvnw.net/emoticons/v1/1151401/3.0" /></li>
        <li><img src="https://static-cdn.jtvnw.net/emoticons/v1/1145381/3.0" /></li>
        <li><img src="https://static-cdn.jtvnw.net/emoticons/v1/925494/3.0" /></li>
      </ul>
    </div>
  <!-- </div> -->
</template>

<script>
// import { getRequest } from '~/plugins/axios.js'

export default {
  // created() {
  //   getRequest();
  // }
}
</script>

<style lang="scss">
@import '@/assets/fonts.scss';

.Emoji {
  position: relative;
  width: 100%;
  margin: 5% auto 5% auto;

  div, dt, dd, table, tr, td, ul, ol, li, h1, h2, h3 {
    padding: 0;
    font-family: 'BMJUA';
    font-size: 10px;
  }
  div {
    display: block;
  }
  a {
    color: #c30400;
    text-decoration: none;
  }
  h2 {
    color: #c30400;
    font-size: 3.3em;
    text-align: center;
    margin: 1%;
  }
  ul.emoji {
    margin: 0 auto 0 auto;
    text-align: center;
  }
  ul.emoji li {
    display: inline-block;
    margin: 1%;
    text-align: center;
  }
}
</style>