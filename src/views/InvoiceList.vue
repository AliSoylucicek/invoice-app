<!-- eslint-disable vue/valid-v-slot -->
<template>
  <v-container class="mt-6">
    <v-row justify="center">
      <v-col cols="12" md="10" class="text-right">
        <div class="d-flex justify-space-between mb-2">
          <h5 class="text-h5">Invoice List</h5>
          <v-btn color="primary" :to="{ name: 'invoice-create' }">
            <v-icon>mdi-plus</v-icon> Create Invoice
          </v-btn>
        </div>
      </v-col>
      <v-col cols="12" md="10">
        <v-data-table
          :headers="headers"
          :items="invoiceList"
          class="elevation-1"
        >
          <template #item.actions="{ item }">
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-icon class="mr-2" @click="openDetail(item)" v-on="on">
                  mdi-text-box-search-outline
                </v-icon>
              </template>
              <span> Open details</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-icon class="mr-2" @click="sendInvoice(item.id)" v-on="on">
                  mdi-file-send-outline
                </v-icon>
              </template>
              <span> Send Invoice</span>
            </v-tooltip>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapState } from "pinia";
import { useInvoiceStore } from "@/stores/invoice";

export default {
  data() {
    return {
      headers: [
        {
          text: "Identifier",
          value: "identifier",
        },
        { text: "Provider", value: "provider" },
        { text: "Purchaser", value: "purchaser" },
        { text: "Items", value: "items" },
        { text: "Total Amount (€)", value: "amount" },
        { text: "Actions", value: "actions", sortable: false },
      ],
    };
  },
  methods: {
    openDetail(item) {
      this.$router.push({ name: "invoice-detail", params: { id: item.id } });
    },
    sendInvoice(id) {
      // This is just to simulate a send action
      window.alert(`Invoice with id: ${id} sent!`);
    },
  },
  computed: {
    ...mapState(useInvoiceStore, ["invoices"]),
    invoiceList() {
      return this.invoices.map((invoice) => ({
        id: invoice.id,
        identifier: `${invoice.identifier.id}/${invoice.identifier.year}`,
        provider: invoice.provider.name,
        purchaser: invoice.purchaser.name,
        items: invoice.items.length,
        amount: invoice.payment.amount,
      }));
    },
  },
};
</script>
