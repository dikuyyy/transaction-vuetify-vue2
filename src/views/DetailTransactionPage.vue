<template>
  <AppPage title="Detail Transaksi">
    <v-row
        align="start"
        no-gutters
        class="mb-2"
    >
      <v-col cols="2">Nomor Rekening</v-col>
      <v-col>
        {{ transaction?.accountNumber }}
      </v-col>
    </v-row>
    <v-row
        align="start"
        no-gutters
        class="mb-2"
    >
      <v-col cols="2">Tipe Transaksi</v-col>
      <v-col>
        {{ transaction?.transactionType }}
      </v-col>
    </v-row>
    <v-row
        align="start"
        no-gutters
        class="mb-2"
    >
      <v-col cols="2">Deskripsi</v-col>
      <v-col>
        {{ transaction?.description }}
      </v-col>
    </v-row>
    <v-row
        align="start"
        no-gutters
        class="mb-2"
    >
      <v-col cols="2">Bank Tujuan</v-col>
      <v-col>
        {{ transaction?.destinationBank }}
      </v-col>
    </v-row>
    <v-row
        align="start"
        no-gutters
        class="mb-2"
    >
      <v-col cols="2">Kode Bank Tujuan</v-col>
      <v-col>
        {{ transaction?.destinationBankCode }}
      </v-col>
    </v-row>
    <v-row
        align="start"
        no-gutters
        class="mb-2"
    >
      <v-col cols="2">Biaya Admin</v-col>
      <v-col>
        {{ transaction?.adminFee }}
      </v-col>
    </v-row>
    <v-row
        align="start"
        no-gutters
        class="mb-2"
    >
      <v-col cols="2">Jumlah Total</v-col>
      <v-col>
        {{ transaction?.totalAmount }}
      </v-col>
    </v-row>
    <v-row
        align="start"
        no-gutters
        class="mb-2"
    >
      <v-col cols="2">Tanggal</v-col>
      <v-col>
        {{ transaction?.date }}
      </v-col>
    </v-row>
    <v-row
        align="start"
        no-gutters
        class="mb-2"
    >
      <v-col cols="2">Status</v-col>
      <v-col>
        {{ transaction?.status }}
      </v-col>
    </v-row>
    <div class="d-flex justify-end">
      <v-btn :to="{ name: 'transaction-page' }">Kembali</v-btn>
    </div>
  </AppPage>
</template>

<script>
import { data } from "@/views/transaction";
import AppPage from '@/components/AppPage.vue';

export default {
  components: {
    AppPage
  },
  data() {
    return {
      transaction: null,
      transactionId: this.$route.params.id || null
    };
  },
  mounted() {
    this.transaction = data.transactions.find(
        (transaction) => Number(transaction.id) === Number(this.transactionId)
    );
  }
};
</script>
