<template>
  <div>
    <HeaderLayer></HeaderLayer>
    <MngTeamLayer></MngTeamLayer>
    <FooterLayer></FooterLayer>
  </div>
</template>

<script>
import HeaderLayer from '@/components/HeaderLayer.vue';
import MngTeamLayer from "@/components/KiYAMPs.vue";
import FooterLayer from "@/components/FooterLayer.vue";


// @ is an alias to /src

export default {
  name: 'ExecTeamView',
  components: {
    HeaderLayer,
    MngTeamLayer,
    FooterLayer
}
}
</script>
