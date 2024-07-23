<template>
  <AppPage title="Data Transaksi">
    <v-expansion-panels class="mb-2">
      <v-expansion-panel>
        <v-expansion-panel-header>
          <span>Filter</span>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row align="start" no-gutters class="mb-2">
            <v-col class="pr-2">
              <DatePicker v-model="filter.tanggal_awal" label="Tanggal Awal" />
            </v-col>
            <v-col class="pl-2">
              <DatePicker v-model="filter.tanggal_akhir" label="Tanggal Akhir" />
            </v-col>
          </v-row>
          <v-row align="start" no-gutters class="mb-2">
            <v-col class="pr-2">
              <v-select
                  v-model="filter.jenis"
                  :items="transactionTypes"
                  label="Jenis Transaksi"
                  hide-details
              ></v-select>
            </v-col>
            <v-col class="pl-2">
              <v-text-field
                  label="Nomor Rekening"
                  v-model="filter.nomor_rekening"
                  hide-details
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col>
              <v-select
                  v-model="filter.status"
                  :items="statusTypeOptions"
                  label="Status"
              ></v-select>
            </v-col>
          </v-row>
          <div class="d-flex justify-end mt-2">
            <v-btn @click="reset">Reset</v-btn>
            <v-btn @click="onFilter" color="primary" class="ml-2">Filter</v-btn>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-data-table
        :headers="headersTransactionHistory"
        :items="rows"
        :items-per-page="5"
        :rows-per-page-items="[5, 10, 25]"
    >
      <template v-slot:[`item.no`]="{ index }">
        {{ index + 1 }}
      </template>
      <template v-slot:[`item.action`]="{ item }">
        <v-icon
            class="mr-2"
            small
            @click="onDetail(item?.id)"
        >
          mdi-eye
        </v-icon>
      </template>
    </v-data-table>
  </AppPage>
</template>

<script>
import AppPage from '@/components/AppPage.vue';
import { headersTransactionHistory } from "@/views/_def";
import { data, statusTypeOptions, transactionTypes } from '@/views/transaction';
import DatePicker from "@/components/DatePicker.vue";
import router from "@/router";

export default {
  components: {
    AppPage,
    DatePicker
  },
  data() {
    return {
      rows: data.transactions,
      filter: {
        tanggal_awal: null,
        tanggal_akhir: null,
        jenis: '',
        nomor_rekening: '',
        status: ''
      }
    };
  },
  computed: {
    transactionTypes() {
      return transactionTypes;
    },
    statusTypeOptions() {
      return statusTypeOptions;
    },
    headersTransactionHistory() {
      return headersTransactionHistory;
    }
  },
  methods: {
    reset() {
      this.filter.tanggal_awal = null;
      this.filter.tanggal_akhir = null;
      this.filter.jenis = '';
      this.filter.nomor_rekening = '';
      this.filter.status = '';
      this.rows = data.transactions;
    },
    onFilter() {
      this.rows = data.transactions;
      const { tanggal_awal, tanggal_akhir, jenis, nomor_rekening, status } = this.filter;
      const startDate = tanggal_awal ? new Date(tanggal_awal) : null;
      const endDate = tanggal_akhir ? new Date(tanggal_akhir) : null;
      this.rows = this.rows.filter((transaction) => {
        const transactionDate = new Date(transaction.date);
        const isWithinDateRange = (!startDate || transactionDate >= startDate) &&
            (!endDate || transactionDate <= endDate);
        const matchesJenis = jenis ? transaction.transactionType.toLowerCase().includes(jenis.toLowerCase()) : true;
        const matchesNomorRekening = nomor_rekening ? transaction.accountNumber.includes(nomor_rekening) : true;
        const matchesStatus = status ? transaction.status.toLowerCase().includes(status.toLowerCase()) : true;

        return isWithinDateRange && matchesJenis && matchesNomorRekening && matchesStatus;
      });
    },
    onDetail(id) {
      router.push({
        name: 'detail-page',
        params: { id }
      });
    }
  }
};
</script>

<style>
/* Add your custom styles here */
</style>
