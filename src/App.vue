<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <!-- <router-view  :key="$route.fullPath"></router-view> -->

  <router-view />
</template>

<script>
export default {
  mounted() {
    this.$loadScript(
      "https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"
    ).then(() => {
      this.$loadScript(
        "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
      ).then(() => {
        this.$loadScript("lib/wow/wow.min.js").then(() => {
          this.$loadScript("lib/easing/easing.min.js").then(() => {
            this.$loadScript("lib/waypoints/waypoints.min.js").then(() => {
              this.$loadScript("lib/counterup/counterup.min.js").then(() => {
                this.$loadScript("lib/lightbox/js/lightbox.min.js").then(() => {
                  this.$loadScript("lib/owlcarousel/owl.carousel.min.js").then(
                    () => {
                      this.$loadScript(
                        "lib/isotope-layout/isotope.pkgd.min.js"
                      ).then(() => {
                        this.$loadScript("lib/aos/aos.js").then(
                          () => {
                            this.$loadScript(
                              "lib/venobox/venobox.min.js"
                            ).then(() => {
                              this.$loadScript("js/main.js").then(() => {});
                            });
                          }
                        );
                      });
                    }
                  );
                });
              });
            });
          });
        });
      });
    });
  },
};
</script>
