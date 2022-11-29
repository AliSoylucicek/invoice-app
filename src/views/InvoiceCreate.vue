<template>
  <v-container class="py-6">
    <v-row justify="center">
      <v-col cols="12" sm="10">
        <v-btn text color="primary" :to="{ name: 'invoice-list' }" class="mb-4">
          <v-icon>mdi-arrow-left</v-icon> Back
        </v-btn>
        <h5 class="text-h5 mb-6">Create new invoice</h5>
        <v-card>
          <v-card-text>
            <InvoiceForm @submit="onSubmit" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import InvoiceForm from "@/components/forms/InvoiceForm.vue";
import { useInvoiceStore } from "@/stores/invoice";
import { mapActions, mapState } from "pinia";
export default {
  components: { InvoiceForm },
  methods: {
    ...mapActions(useInvoiceStore, ["addInvoice"]),
    onSubmit(data) {
      this.addInvoice({ ...data, id: this.lastInvoiceId + 1 });
      this.$router.push({ name: "invoice-list" });
    },
  },
  computed: {
    ...mapState(useInvoiceStore, ["lastInvoiceId"]),
  },
};
</script>
