<template>
  <div>
    <div v-for="(item, index) in value" :key="index" data-testid="item">
      <v-row>
        <v-col cols="1" class="text-center py-8">
          <h6 class="text-h6 text--primary">{{ index + 1 }}</h6>
        </v-col>
        <v-col cols="10">
          <v-row>
            <v-col>
              <v-text-field
                v-model="item.description"
                label="Description"
                required
              />
            </v-col>
            <v-col>
              <v-text-field
                v-model="item.amount"
                suffix="€"
                label="Price"
                required
              />
            </v-col>
            <v-col>
              <v-text-field v-model="item.quantity" label="Quantity" required />
            </v-col>
            <v-col>
              <v-text-field
                v-model="item.tax"
                suffix="%"
                label="Unit Tax"
                required
              />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="1" class="text-center py-8">
          <v-btn icon @click="removeItem(index)" data-testid="remove-item">
            <v-icon>mdi-minus</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </div>
    <div class="text-right">
      <v-btn color="primary" @click="addItem" data-testid="add-item">
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
        { description: "", amount: null, quantity: null, tax: null },
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
