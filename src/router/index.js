import Vue from "vue";
import VueRouter from "vue-router";
import InvoiceCreate from "@/views/InvoiceCreate.vue";
import InvoiceList from "@/views/InvoiceList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/invoice",
    name: "invoice",
    component: InvoiceList,
  },
  {
    path: "/invoice/create",
    name: "invoice-create",
    component: InvoiceCreate,
  },
  {
    path: "*",
    redirect: { name: "invoice" },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
