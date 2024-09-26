<template>

    <body>
        <!-- Header Start -->
        <div class="container-fluid bg-breadcrumb">
            <div class="container text-center py-5" style="max-width: 900px;">
                <h3 class="text-white display-3 mb-4">Kilifi Youth Assembly</h3>
                <ol class="breadcrumb justify-content-center mb-0">
                    <!-- <li class="breadcrumb-item"><a href="index.html"></a></li> -->
                    <!-- <li class="breadcrumb-item"><router-link to="/myahouseleaders">House Leadership</router-link></li> -->
                    <li class="breadcrumb-item active text-white">Cabinet Secretaries</li>
                </ol>
            </div>
        </div>
        <!-- Header End -->

		<!-- Travel Guide Start -->
		<div class="container-fluid guide py-5">
			<div class="container">
				<div class="mx-auto text-center mb-2" style="max-width: 900px;">
					<h5 class="section-title px-3">KiYA Cabinet Secretaries</h5>
					<!-- <h1 class="mb-0">Meet Our Guide</h1> -->
				</div>
			</div>
		</div>
		<!-- Travel Guide End -->

		<AboutUs></AboutUs>

    </body>

</template>

<script>
import AboutUs from '@/components/KiYACS2.vue';


// @ is an alias to /src

export default {
	name: 'AboutView',
	components: {
		AboutUs,
	}
}
</script>