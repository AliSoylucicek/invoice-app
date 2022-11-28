<template>
  <div>
    <div v-for="(item, index) in value" :key="index">
      <v-row>
        <v-col cols="1" class="text-center py-8">
          <h6 class="text-h6 text--primary">{{ index + 1 }}</h6>
        </v-col>
        <v-col cols="3">
          <v-text-field
            v-model="item.amount"
            suffix="€"
            label="Price"
            required
          />
        </v-col>
        <v-col cols="3">
          <v-text-field v-model="item.quantity" label="Quantity" required />
        </v-col>
        <v-col cols="4">
          <v-text-field
            v-model="item.tax"
            suffix="%"
            label="Unit Tax"
            required
          />
        </v-col>
        <v-col cols="1" class="text-center py-8">
          <v-btn icon @click="removeItem(index)">
            <v-icon>mdi-minus</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </div>
    <div class="text-right">
      <v-btn color="primary" @click="addItem">
        <v-icon>mdi-plus</v-icon> Add Item
      </v-btn>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: Array,
  },
  methods: {
    addItem() {
      this.$emit("input", [
        ...this.value,
        { amount: null, quantity: null, tax: null },
      ]);
    },
    removeItem(itemIndex) {
      const filteredItems = this.value.filter((_, index) => {
        return index !== itemIndex;
      });
      this.$emit("input", filteredItems);
    },
  },
};
</script>
<style lang=""></style>
