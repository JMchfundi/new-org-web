<template>

    <body>
        <!-- Topbar Start -->
        <div class="container-fluid topbar bg-light px-5 d-none d-lg-block">
            <div class="row gx-0">
                <div class="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                    <div class="d-inline-flex align-items-center" style="height: 45px">
                        <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i
                                class="fab fa-twitter fw-normal"></i></a>
                        <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i
                                class="fab fa-facebook-f fw-normal"></i></a>
                        <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i
                                class="fab fa-linkedin-in fw-normal"></i></a>
                        <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i
                                class="fab fa-instagram fw-normal"></i></a>
                        <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href=""><i
                                class="fab fa-youtube fw-normal"></i></a>
                    </div>
                </div>
                <div class="col-lg-4 text-center text-lg-end">
                    <div class="d-inline-flex align-items-center" style="height: 45px">
                        <a href="#"><small class="me-3 text-light"><i class="fa fa-envelope me-2"
                                    aria-hidden="true"></i>info@kyfa.or.ke</small></a>
                    </div>
                </div>
            </div>
        </div>
        <!-- Topbar End -->

        <!-- Navbar & Hero Start -->
        <div class="container-fluid position-relative p-0">
            <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <a href="" class="navbar-brand p-0">
                    <!-- <h1 class="m-0"><i class="fa fa-map-marker-alt me-3"></i>Travela</h1> -->
                    <img src="img/kyaflogo.png" alt="Logo" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="fa fa-bars"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto py-0">
                        <a :href="'/'" class="nav-item nav-link active">Home</a>
                        <a class="nav-item nav-link"><router-link to="/about">About Us</router-link></a>
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Management</a>
                            <div class="dropdown-menu m-0">
                                <router-link to="/advteam" class="dropdown-item">Advisory Board</router-link>
                                <router-link to="/mngteam" class="dropdown-item">Secretariat</router-link>
                            </div>
                        </div>
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Assemblies</a>
                            <div class="dropdown-menu m-0">
                                <router-link to="/policycycle" class="dropdown-item">How Youth Assemblies
                                    Operate</router-link>
                                <div class="dropdown-item">
                                    <button @click="refreshPage('mya')" class="kyafbtn">Mombasa &raquo;</button>
                                    <div class="dropdown-submenu m-0">
                                        <router-link to="/myacs" class="dropdown-item">Cabinet Secretaries</router-link>
                                        <router-link to="/myamps" class="dropdown-item">Members of
                                            parliament</router-link>
                                    </div>
                                </div>
                                <div class="dropdown-item">
                                    <button @click="refreshPage('kiya')" class="kyafbtn">Kilifi &raquo;</button>
                                    <div class="dropdown-submenu m-0">
                                        <router-link to="/kiyacs" class="dropdown-item">Cabinet
                                            Secretaries</router-link>
                                        <router-link to="/kiyamps" class="dropdown-item">Members of
                                            parliament</router-link>
                                    </div>
                                </div>
                                <!-- <router-link to="/kiyaexeccom" class="dropdown-item">Kilifi</router-link> -->
                            </div>
                        </div>
                        <button @click="refreshPage('whykyaf')" class="nav-item nav-link kyafbtn">Achievements</button>
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Our Programs</a>
                            <div class="dropdown-menu m-0">
                                <router-link to="/ourprograms" class="dropdown-item">Thematic Arears</router-link>
                                <router-link to="/ouractivities" class="dropdown-item">Activities</router-link>
                                <router-link to="/howtosupport" class="dropdown-item">How To Support</router-link>
                            </div>
                        </div>
                        <a class="nav-item nav-link"><router-link to="/contactus">Contact</router-link></a>
                    </div>
                    <!-- <a href="" class="btn btn-primary rounded-pill py-2 px-4 ms-lg-4">Book Now</a> -->
                </div>
            </nav>
        </div>
        <!-- Navbar & Hero End -->

    </body>
</template>

<script>
// import { useRouter } from 'vue-router';
// const router = useRouter();

export default {
    methods: {
        refreshPage(url) {
            window.location.replace('#/' + url);
            window.location.reload();
            // Reloads the current page
            // router.go(); // Reloads the current route
        }
    }
};
</script>
