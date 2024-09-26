<template>
  <div>
    <HeaderLayer></HeaderLayer>
    <AdvTeamLayer></AdvTeamLayer>
    <FooterLayer></FooterLayer>
  </div>
</template>

<script>
import HeaderLayer from '@/components/HeaderLayer.vue';
import AdvTeamLayer from "@/components/AdvTeamLayer.vue";
import FooterLayer from "@/components/FooterLayer.vue";


// @ is an alias to /src

export default {
  name: 'ExecTeamView',
  components: {
    HeaderLayer,
    AdvTeamLayer,
    FooterLayer
}
}
</script>
