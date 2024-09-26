<template>
  <div>
    <HeaderLayer></HeaderLayer>
    <HomeLayer></HomeLayer>
    <FooterLayer></FooterLayer>
  </div>
</template>

<script>
import HomeLayer from '@/components/MYAHomeLayer.vue';
import HeaderLayer from '@/components/HeaderLayer.vue';
import FooterLayer from "@/components/FooterLayer.vue";


// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    HeaderLayer,
    HomeLayer,
    FooterLayer
}
}
</script>
