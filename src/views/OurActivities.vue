<template>
  <div>
    <HeaderLayer></HeaderLayer>
    <AboutUs></AboutUs>
    <FooterLayer></FooterLayer>
  </div>
</template>

<script>
import HeaderLayer from '@/components/HeaderLayer.vue';
import AboutUs from '@/components/OurActivities.vue';
import FooterLayer from "@/components/FooterLayer.vue";


// @ is an alias to /src

export default {
  name: 'AboutView',
  components: {
    HeaderLayer,
    AboutUs,
    FooterLayer
}
}
</script>
