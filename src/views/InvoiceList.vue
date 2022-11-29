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
          @click:row="openDetail"
        />
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
        { text: "Total Amount", value: "amount" },
      ],
    };
  },
  methods: {
    openDetail(item) {
      this.$router.push({ name: "invoice-detail", params: { id: item.id } });
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
