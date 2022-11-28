<template>
  <v-container class="py-6">
    <v-row justify="center">
      <v-col cols="12" sm="10">
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
import { mapActions } from "pinia";
export default {
  components: { InvoiceForm },
  methods: {
    ...mapActions(useInvoiceStore, ["addInvoice"]),
    onSubmit(data) {
      this.addInvoice(data);
      this.$router.push({ name: "invoice" });
    },
  },
};
</script>
<style lang=""></style>
