<!-- eslint-disable vue/valid-v-slot -->
<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="10" class="text-right">
        <v-btn color="primary" :to="{ name: 'invoice-create' }">
          <v-icon>mdi-plus</v-icon> Create Invoice
        </v-btn>
      </v-col>
      <v-col cols="10">
        <v-data-table
          :headers="headers"
          :items="invoiceList"
          class="elevation-1"
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
  computed: {
    ...mapState(useInvoiceStore, ["invoices"]),
    invoiceList() {
      return this.invoices.map((invoice) => ({
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
