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
          "name": "INFORMATION AND INNOVATION",
          "ward": "HON. PAUL  AKWABI"
        },
        {
          "name": "CONSTITUTION AND LEGAL AFFAIRS",
          "ward": "HON. RONALD BARAZA"
        },
        {
          "name": "SECURITY",
          "ward": "HON. MOHAMED BAHERO"
        },
        {
          "name": "DEVELUTION AND GOVERNANCE",
          "ward": "HON. GEOFFERY ODUOR"
        },
        {
          "name": "HEALTH",
          "ward": "HON. MAUREEN MAGAK"
        },
        {
          "name": "ENVIRONMENT",
          "ward": "HON. EUNICE WANJIRU NJAU"
        },
        {
          "name": "SPORT AND CULTURE",
          "ward": "HON. SHADRACK MURUNGA"
        },
        {
          "name": "LABOUR AND WEALTH CREATION",
          "ward": "HON. ZIPPORAH NJOKI"
        },
        {
          "name": "EDUCATION",
          "ward": "HON. ESHA MOHAMMED"
        },
        {
          "name": "LANDS",
          "ward": "HON. JOYCE DAMA"
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
        { key: "name", sortable: true, label: "Position" },
        { key: "ward", sortable: true, label: "Name" },
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