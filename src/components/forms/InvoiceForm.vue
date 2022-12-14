<template>
  <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="submit">
    <v-row>
      <v-col cols="12" md="6">
        <v-text-field
          v-model="identifier.id"
          label="Id"
          :rules="[rules.required]"
          required
        />
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field
          v-model="identifier.year"
          counter="4"
          label="Year"
          :rules="[rules.required]"
          required
        />
      </v-col>
      <v-col cols="12">
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              label="Date"
              prepend-icon="mdi-calendar"
              :rules="[rules.required]"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            :max="getMaxDate()"
            min="1950-01-01"
            @change="save"
          ></v-date-picker>
        </v-menu>
      </v-col>
      <v-col cols="12" class="py-0">
        <v-divider />
      </v-col>
      <v-col cols="12">
        <h6 class="text-h6 text--primary">Provider</h6>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field v-model="provider.name" label="Name" required />
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field
          counter="11"
          v-model="provider.taxCode"
          :rules="[rules.required, rules.alphaNum, rules.taxLength]"
          label="Tax Code"
          required
        />
      </v-col>
      <v-col cols="12" class="py-0">
        <v-divider />
      </v-col>
      <v-col cols="12">
        <h6 class="text-h6 text--primary">Purchaser</h6>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field v-model="purchaser.name" label="Name" required />
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field
          counter="11"
          v-model="purchaser.taxCode"
          :rules="[rules.required, rules.alphaNum, rules.taxLength]"
          label="Tax Code"
          required
        />
      </v-col>
      <v-col cols="12" class="py-0">
        <v-divider />
      </v-col>
      <v-col cols="12">
        <h6 class="text-h6 text--primary">Items</h6>
      </v-col>
      <v-col cols="12">
        <ItemsInput v-model="items" />
      </v-col>
      <v-col cols="12" class="py-0">
        <v-divider />
      </v-col>
      <v-col cols="12">
        <h6 class="text-h6 text--primary">Payment</h6>
      </v-col>

      <v-col cols="12" md="4">
        <v-select
          v-model="payment.method"
          :items="paymentMethods"
          label="Method"
        ></v-select>
      </v-col>
      <v-col cols="12" md="4">
        <v-text-field
          v-model="payment.detail"
          counter="34"
          label="IBAN"
          required
        />
      </v-col>
      <v-col cols="12" md="4">
        <v-text-field
          v-model="payment.amount"
          suffix="???"
          label="Total amount"
          required
        />
      </v-col>
    </v-row>
    <v-divider class="my-6" />
    <div class="text-right">
      <v-btn color="primary" type="submit"> Submit </v-btn>
    </div>
  </v-form>
</template>
<script>
import ItemsInput from "./inputs/ItemsInput.vue";
import mockInvoices from "@/mocks/invoices.json";
import validation from "@/mixins/validation.js";
export default {
  components: {
    ItemsInput,
  },
  data() {
    return {
      valid: true,
      menu: false,
      identifier: {
        id: null,
        year: null,
      },
      date: null,
      provider: {
        name: "",
        taxCode: "",
      },
      purchaser: {
        name: "",
        taxCode: "",
      },
      items: [],
      payment: {
        amount: 0,
        method: "",
        detail: "",
      },
      paymentMethods: [
        { text: "Bank Payment", value: "bank" },
        { text: "PagoPA", value: "pagopa" },
      ],
    };
  },
  mounted() {
    // Uncomment next line to prefill the form with mock data
    // this.loadMockFormData();
  },
  methods: {
    async submit() {
      await this.$refs.form.validate();
      if (this.valid) {
        const formData = {
          identifier: this.identifier,
          date: this.date,
          provider: this.provider,
          purchaser: this.purchaser,
          items: this.items,
          payment: this.payment,
        };
        this.$emit("submit", formData);
      }
    },
    addItem() {
      this.items.push({ amount: null, quantity: null, tax: null });
    },
    save(date) {
      this.$refs.menu.save(date);
    },
    getMaxDate() {
      // returns current date to be used as maximum limit for date selection
      return new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substring(0, 10);
    },
    loadMockFormData() {
      const mockInvoice = mockInvoices[0];
      this.identifier = mockInvoice.identifier;
      this.date = mockInvoice.date;
      this.provider = mockInvoice.provider;
      this.purchaser = mockInvoice.purchaser;
      this.items = mockInvoice.items;
      this.payment = mockInvoice.payment;
    },
  },
  mixins: [validation],
};
</script>
