<template>

    <body>
         <!-- Topbar Start -->
         <div class="container-fluid topbar bg-light px-5 d-none d-lg-block">
            <div class="row gx-0 align-items-center">
                <div class="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                    <div class="d-flex flex-wrap">
                        <a href="#" class="text-muted small me-4"><i class="fab fa-facebook-f text-primary me-2"></i>facebook</a>
                        <a href="#" class="text-muted small me-4"><i class="fab fa-twitter text-primary me-2"></i>twitter</a>
                        <a href="#" class="text-muted small me-0"><i class="fab fa-instagram text-primary me-2"></i>instagram</a>
                    </div>
                </div>
                <div class="col-lg-4 text-center text-lg-end">
                    <div class="d-inline-flex align-items-center" style="height: 45px;">
                        <a href="mailto:info@fmf.or.ke" class="text-muted small me-0"><i class="fas fa-envelope text-primary me-2"></i>info@fmf.or.ke</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- Topbar End -->

        <!-- Navbar & Hero Start -->
        <!-- <div class="container-fluid position-relative p-0">
            <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <a href="#" class="navbar-brand p-0">
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
                </div>
            </nav>
        </div> -->
        
        <div class="container-fluid position-relative p-0">
            <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <a href="#" class="navbar-brand p-0">
                    <h1 class="text-primary text-uppercase">fmf</h1>
                    <!-- <i class="fas fa-search-dollar me-3"></i> -->
                    <!-- <img src="img/logo.png" alt="Logo"> -->
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="fa fa-bars"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto py-0">
                        <a href="#" class="nav-item nav-link active">Home</a>
                        <a href="#" class="nav-item nav-link">About</a>
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link" data-bs-toggle="dropdown">
                                <span class="dropdown-toggle">Team</span>
                            </a>
                            <div class="dropdown-menu m-0">
                                <a href="#" class="dropdown-item">Advisory Board</a>
                                <a href="#" class="dropdown-item">Our Office</a>
                            </div>
                        </div>
                        <a href="#" class="nav-item nav-link">Our Success</a>
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link" data-bs-toggle="dropdown">
                                <span class="dropdown-toggle">Our Programs</span>
                            </a>
                            <div class="dropdown-menu m-0">
                                <a href="#" class="dropdown-item">Activities</a>
                                <a href="#" class="dropdown-item">Confined Areas</a>
                            </div>
                        </div>
                        <a href="#" class="nav-item nav-link">Contact Us</a>
                    </div>
                    <a href="#" class="btn btn-primary rounded-pill py-2 px-4 my-3 my-lg-0 flex-shrink-0">Get Started</a>
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
