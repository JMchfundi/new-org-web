<template>

	<body>
		<!-- Header Start -->
		<div class="container-fluid bg-breadcrumb">
			<div class="container text-center py-5" style="max-width: 900px;">
				<h3 class="text-white display-3 mb-4">Kilifi Youth Assembly</h3>
				<ol class="breadcrumb justify-content-center mb-0">
					<li class="breadcrumb-item"><a href="index.html">Home</a></li>
					<li class="breadcrumb-item"><router-link to="/kiyahouseleaders">House Leadership</router-link></li>
					<li class="breadcrumb-item active text-white">Members of Parliament</li>
				</ol>
			</div>
		</div>
		<!-- Header End -->

		<!-- Travel Guide Start -->
		<div class="container-fluid guide py-5">
			<div class="container">
				<div class="mx-auto text-center mb-2" style="max-width: 900px;">
					<h5 class="section-title px-3">KiYA Parliament</h5>
					<!-- <h1 class="mb-0">Meet Our Guide</h1> -->
				</div>
			</div>
		</div>
		<!-- Travel Guide End -->

		<AboutUs></AboutUs>
		<!-- Subscribe Start -->
		<!-- <div class="container-fluid subscribe py-5">
            <div class="container text-center py-5">
                <div class="mx-auto text-center" style="max-width: 900px;">
                    <h5 class="subscribe-title px-3">Subscribe</h5>
                    <h1 class="text-white mb-4">Our Newsletter</h1>
                    <p class="text-white mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore
                        nam, architecto doloremque velit explicabo? Voluptate sunt eveniet fuga eligendi! Expedita
                        laudantium fugiat corrupti eum cum repellat a laborum quasi.
                    </p>
                    <div class="position-relative mx-auto">
                        <input class="form-control border-primary rounded-pill w-100 py-3 ps-4 pe-5" type="text"
                            placeholder="Your email">
                        <button type="button"
                            class="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 px-4 mt-2 me-2">Subscribe</button>
                    </div>
                </div>
            </div>
        </div> -->
		<!-- Subscribe End -->
	</body>

</template>

<script>
import AboutUs from '@/components/KiYAMPs2.vue';


// @ is an alias to /src

export default {
	name: 'AboutView',
	components: {
		AboutUs,
	}
}
</script>