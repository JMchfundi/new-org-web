<template>
  <div class="card">
    <div class="card-body">
      <div class="row mt-4">
        <div class="col-sm-12 col-md-6">
          <div id="tickets-table_length" class="dataTables_length">
            <label class="d-inline-flex align-items-center">
              Show&nbsp;
              <b-form-select v-model="perPage" size="sm" :options="pageOptions"></b-form-select>&nbsp;entries
            </label>
          </div>
        </div>
        <!-- Search -->
        <div class="col-sm-12 col-md-6">
          <div id="tickets-table_filter" class="dataTables_filter text-md-right">
            <label class="d-inline-flex align-items-center">
              Search:
              <b-form-input v-model="filter" type="search" class="form-control form-control-sm ml-2"></b-form-input>
            </label>
          </div>
        </div>
        <!-- End search -->
      </div>
      <div class="table-responsive">
        <b-table :items="transactionData" :fields="fields" responsive="sm" :per-page="perPage"
          :current-page="currentPage" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" :filter="filter"
          :filter-included-fields="filterOn" @filtered="onFiltered">
          <!-- <template v-slot:cell(paymentstatus)="row">
            <div class="badge font-size-12" :class="{
              'badge-soft-danger': `${row.value}` === 'Chargeback',
              'badge-soft-success': `${row.value}` === 'Paid',
              'badge-soft-warning': `${row.value}` === 'Unpaid'
            }">{{ row.value }}</div>
          </template> -->

          <!-- <template v-slot:cell(projectUpload.srcurl)="row">
            <div><img :src="row.value" :width="50" :height="50" /></div>
          </template> -->

          <!-- <template v-slot:cell(projectUpload.image)>
              <div
              >
              <img :src="'data:image/png;base64,'"/>
              </div>
            </template> -->

          <template v-slot:cell(action)>
            <a href="javascript:void(0);" class="mr-3 text-primary" v-b-tooltip.hover data-toggle="tooltip"
              title="Change status">
              <i class="mdi mdi-pencil font-size-18"></i>
            </a>
            <a href="javascript:void(0);" class="text-danger" v-b-tooltip.hover title="Close">
              <i class="mdi mdi-trash-can font-size-18"></i>
            </a>
          </template>
        </b-table>
      </div>
      <div class="row">
        <div class="col">
          <div class="dataTables_paginate paging_simple_numbers float-right">
            <ul class="pagination pagination-rounded mb-0">
              <!-- pagination -->
              <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"></b-pagination>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { userInfo } from "os";
/**
 * Transactions component
 */
export default {
  data() {
    return {
      transactionData: [
        {
          "name": "HON. ABEID SALIM MWAMBALAHE",
          "ward": "TIMBWANI"
        },
        {
          "name": "HON. ALICE MULUKI MUSYIMI",
          "ward": "KIPEVU"
        },
        {
          "name": "HON. ALFAN RAMA",
          "ward": "CHAANI"
        },
        {
          "name": "HON. AMANI IBRAHIM",
          "ward": "MIRITINI"
        },
        {
          "name": "HON. HARITH MOHAMED",
          "ward": "OLD TOWN"
        },
        {
          "name": "HON. ALBERT OFISI",
          "ward": "KONGOWEA"
        },
        {
          "name": "HON. ERIC OGUT",
          "ward": "CHANGAMWE"
        },
        {
          "name": "HON. ISAA MWIJAKA",
          "ward": "AIRPORT"
        },
        {
          "name": "HON. CHARITY MELODY",
          "ward": "GANJONI/SHIMANZI"
        },
        {
          "name": "HON. DORCUS YUGI",
          "ward": "ZIWA LA NG'OMBE"
        },
        {
          "name": "HON. MKASI MOHAMMED HAMISI",
          "ward": "MTONGWE"
        },
        {
          "name": "HON. FRANCINE KIHIU",
          "ward": "BOFU"
        },
        {
          "name": "HON. FATMA MBARAK",
          "ward": "SHANZU"
        },
        {
          "name": "HON. JUMA MBUI MWAKUPHA",
          "ward": "JOMVU KUU"
        },
        {
          "name": "HON. KOMBO JUMANNE",
          "ward": "MAGOGONI"
        },
        {
          "name": "HON. KULTHUM MOHAMED",
          "ward": "BAMBURI"
        },
        {
          "name": "HON. MWANASITI S MWACHIDZUGA",
          "ward": "TONONOKA"
        },
        {
          "name": "HON. NASSIR ALI FARANGA",
          "ward": "SHIKAADABU"
        },
        {
          "name": "HON. OMAR CHAI",
          "ward": "KADZANDANI"
        },
        {
          "name": "HON. ALPHAM NDUTA",
          "ward": "JUNDA"
        },
        {
          "name": "HON. RASHID MWAGONA",
          "ward": "MWAKIRUNGE"
        },
        {
          "name": "HON. RIZIKI MOHAMED SALIM",
          "ward": "LIKONI"
        },
        {
          "name": "HON. SAID SHABAN",
          "ward": "MJAMBERE"
        },
        {
          "name": "HON. ALI MUSA GAITAN",
          "ward": "PORTRIEZ"
        },
        {
          "name": "HON. SELINA SAFU PATRICK",
          "ward": "MIKINDANI"
        },
        {
          "name": "HON. DANIEL OCHIENG",
          "ward": "MKOMANI"
        },
        {
          "name": "HON. SUHEIL JAMAL",
          "ward": "MAJENGO/ MWEMBE"
        },
        {
          "name": "HON. TERESIA AKINYI",
          "ward": "TUDOR"
        },
        {
          "name": "HON. TOM KAZUNGU",
          "ward": "MTOPANGA"
        },
        {
          "name": "HON. OMAR RASHID",
          "ward": "LIKONI"
        },
        {
          "name": "HON. JAMES OCHIENG",
          "ward": "LIKONI"
        },
        {
          "name": "HON. ISMAIL SIMBA",
          "ward": "LIKONI"
        },
        {
          "name": "HON. FLORENCE MWANGOME",
          "ward": "KISAUNI"
        },
        {
          "name": "HON. MARIAM MUNGA",
          "ward": "KISAUNI"
        },
        {
          "name": "HON. DANIEL",
          "ward": "KISAUNI"
        },
        {
          "name": "HON. KIMM NAULI MASHA",
          "ward": "JOMVU"
        },
        {
          "name": "HON. RIZIKI ABDALLA KADZOYO",
          "ward": "JOMVU"
        },
        {
          "name": "HON. MWANAMGENI SULEIMAN",
          "ward": "CHANGAMWE"
        },
        {
          "name": "HON. LYNN WAGA",
          "ward": "CHANGAMWE"
        },
        {
          "name": "HON. DENIS KATANA",
          "ward": "CHANGAMWE"
        },
        {
          "name": "HON. WILFRED GAMBO",
          "ward": "NYALI"
        },
        {
          "name": "HON. CHARLENE MARAGA",
          "ward": "NYALI"
        },
        {
          "name": "HON. MWANAMU NDOGE HEMED",
          "ward": "NYALI"
        },
        {
          "name": "HON. MBARAK SALIM",
          "ward": "MVITA"
        },
        {
          "name": "HON. IBRAHIM MOHAMED",
          "ward": "MVITA"
        },
        {
          "name": "HON. AMIR ABDULAZIZ ABUD",
          "ward": "MVITA"
        }
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [5, 10, 25, 50],
      filter: null,
      filterOn: [],
      sortBy: "name",
      sortDesc: false,
      fields: [
        // { key: "id", sortable: true},
        { key: "name", sortable: true, label: "Member of Parliament" },
        { key: "ward", sortable: true, label: "Ward" },
        // { key: "next_Of_Kin", sortable: true, label: "Phone Number" },
        // { key: "projectUpload.image", label: "Image ", image: true},
        // { key: "paymentstatus", sortable: true, label: "Payment Status" },
        // { key: "action" }
      ],
      image: ""
    };
  },
  computed: {
    /**
     * Total no. of records
     */
    rows() {
      return this.transactionData.length;
    }
  },

  mounted() {
    // Set the initial number of items
    this.totalRows = this.transactionData.length;
  },
  methods: {
    /**
     * Search the table data with search input
     */
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }
  }
};
</script>