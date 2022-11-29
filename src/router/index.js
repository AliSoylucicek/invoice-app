import Vue from "vue";
import VueRouter from "vue-router";
import InvoiceCreate from "@/views/InvoiceCreate.vue";
import InvoiceList from "@/views/InvoiceList.vue";
import InvoiceDetail from "@/views/InvoiceDetail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/invoice",
    name: "invoice-list",
    component: InvoiceList,
  },
  {
    path: "/invoice/create",
    name: "invoice-create",
    component: InvoiceCreate,
  },
  {
    path: "/invoice/:id",
    name: "invoice-detail",
    component: InvoiceDetail,
  },
  {
    path: "*",
    redirect: { name: "invoice-list" },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
