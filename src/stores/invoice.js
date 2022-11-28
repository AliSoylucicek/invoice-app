import { defineStore } from "pinia";
import mockInvoices from "@/mocks/invoices.json";

export const useInvoiceStore = defineStore("invoice", {
  state: () => ({
    invoices: [...mockInvoices],
  }),
  actions: {
    addInvoice(payload) {
      this.invoices.push(payload);
    },
  },
});
