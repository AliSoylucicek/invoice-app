<template>
  <v-container class="py-6">
    <v-row justify="center">
      <v-col cols="12" sm="10">
        <v-btn text color="primary" :to="{ name: 'invoice-list' }">
          <v-icon>mdi-arrow-left</v-icon> Back
        </v-btn>
        <h5 class="text-h5 mb-6">Invoice #{{ currentInvoice.id }}</h5>
        <v-card>
          <v-card-text class="text--primary">
            <p>
              Identifier: {{ currentInvoice.identifier.id }} /
              {{ currentInvoice.identifier.year }}
            </p>
            <p>Date: {{ currentInvoice.date }}</p>
            <v-divider class="my-4" />
            <h6 class="text-h6">Provider</h6>
            <p>Name: {{ currentInvoice.provider.name }}</p>
            <p>Tax Code: {{ currentInvoice.provider.taxCode }}</p>
            <v-divider class="my-4" />
            <h6 class="text-h6">Purchaser</h6>
            <p>Name: {{ currentInvoice.purchaser.name }}</p>
            <p>Tax Code: {{ currentInvoice.purchaser.taxCode }}</p>
            <v-divider class="my-4" />
            <h6 class="text-h6">Items</h6>
            <v-row>
              <v-col
                cols="12"
                v-for="(item, index) in currentInvoice.items"
                :key="index"
              >
                <span class="pr-2">{{ index + 1 }}</span>
                <span class="pr-2">Description: {{ item.description }}</span>
                <span class="pr-2">Quantity: {{ item.quantity }}</span>
                <span class="pr-2">Amount: {{ item.amount }}€</span>
                <span class="pr-2">Tax: {{ item.tax }}%</span>
              </v-col>
            </v-row>
            <v-divider class="my-4" />
            <h6 class="text-h6">Payment</h6>
            <p>Method: {{ currentInvoice.payment.method }}</p>
            <p>IBAN: {{ currentInvoice.payment.detail }}</p>
            <p>Amount: {{ currentInvoice.payment.amount }}€</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { useInvoiceStore } from "@/stores/invoice";
import { mapState } from "pinia";
export default {
  computed: {
    ...mapState(useInvoiceStore, ["invoices"]),
    currentInvoice() {
      return this.invoices.find(
        (invoice) => invoice.id === +this.$route.params.id
      );
    },
  },
};
</script>
