<template>
  <div class="Menu">
    <ul class="menu">
      <li><a href="https://www.twitch.tv/obm1025" target="_blank"><img class="img-resize" src="https://static-cdn.jtvnw.net/jtv_user_pictures/panel-166079347-image-b451806b-ded7-4c92-b712-e08ac7019f5f" alt="오킹트위치"></a></li>
      <li><a href="http://twip.kr/donate/obm1025" target="_blank"><img class="img-resize" src="https://static-cdn.jtvnw.net/jtv_user_pictures/panel-166079347-image-b451806b-ded7-4c92-b712-e08ac7019f5f" alt="오킹후원"></a></li>
      <li><a href="https://www.twitch.tv/products/obm1025" target="_blank"><img class="img-resize" src="https://static-cdn.jtvnw.net/jtv_user_pictures/panel-166079347-image-7496c12c-7c60-4e97-aa25-47b5d5842026" alt="구독하기"></a></li>
      <li><a href="https://www.youtube.com/channel/UCom6YhUY62jM52nIMjf5_dw?view_as=subscriber" target="_blank"><img class="img-resize" src="https://static-cdn.jtvnw.net/jtv_user_pictures/panel-166079347-image-58d2a9bd-ea64-4bff-a85e-d300e5caa788" alt="오킹유튜브"></a></li>
      <li><a href="https://tgd.kr/obm1025" target="_blank"><img class="img-resize" src="https://static-cdn.jtvnw.net/jtv_user_pictures/panel-166079347-image-fb5fb271-610c-4170-a80f-cd8f7bd899f0" alt="오킹트게더"></a></li>
      <li><a href="http://pf.kakao.com/_adZxexl" target="_blank"><img class="img-resize" src="https://static-cdn.jtvnw.net/jtv_user_pictures/panel-166079347-image-cfe7fe608cafdbec-320-320.png" alt="카카오플친"></a></li>
    </ul>
    
    <!-- <iframe src="https://www.youtube.com/channel/UCom6YhUY62jM52nIMjf5_dw/featured" onload="iframeLoad(this.document.body.innerHTML)"></iframe> -->
    <!-- <iframe src="https://www.w3schools.com"></iframe> -->
    <!-- <iframe width="560" height="315" src="https://www.youtube.com/channel/UCom6YhUY62jM52nIMjf5_dw/featured" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
    <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/kUMo8mxN04w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
  </div>
</template>

<script>
export default {
  methods: {
    iframeLoad(data){
      console.log('data: ', data);
    }
  },
}
</script>

<style lang="scss">
.Menu {
  position: relative;
  width: 100%;
  margin: 10% auto 5% auto;

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
  ul.menu {
    margin: 0 auto 0 auto;
    text-align: center;
    li {
        display: inline-block;
        margin: 1%;
        text-align: center;
        img.img-resize {
            width: 150px;
        }
    }
  }
}
</style>