<template>
  <v-container class="py-6" fluid>
    <v-row justify="center">
      <v-col cols="12" sm="10">
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
    },
  },
};
</script>
<style lang=""></style>
