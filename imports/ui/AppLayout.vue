<template>
<div>
  <router-link :to="{name: 'App'}">案例页面</router-link>
  <router-link :to="{name: 'Home'}">主页</router-link>
  app
  <!--<router-view></router-view>-->
  <router-view></router-view>

</div>
</template>

<script>
export default {
  name: 'App'
}
</script>