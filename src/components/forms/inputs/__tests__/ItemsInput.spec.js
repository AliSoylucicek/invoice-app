import { createLocalVue, shallowMount } from "@vue/test-utils";
import ItemsInput from "../ItemsInput.vue";

const localVue = createLocalVue();

let wrapper;
let propsData;
let items;

describe("ItemsInput", () => {
  propsData = {
    value: [
      { description: "", amount: 1, quantity: 1, tax: 10 },
      { description: "", amount: null, quantity: null, tax: null },
    ],
  };
  beforeEach(() => {
    wrapper = shallowMount(ItemsInput, {
      localVue,
      propsData,
    });

    items = wrapper.findAll("[data-testid=item]");
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("renders the items according to props", () => {
    expect(items.length).toBe(propsData.value.length);
  });

  it("renders the add item button", () => {
    const button = wrapper.find("[data-testid=add-item]");
    expect(button.exists()).toBe(true);
  });

  it("updates items list when add item button is clicked", async () => {
    const button = wrapper.find("[data-testid=add-item]");
    await button.vm.$emit("click");
    expect(wrapper.emitted("input")).toBeTruthy();
    expect(wrapper.emitted("input")[0][0]).toStrictEqual([
      ...propsData.value,
      { description: "", amount: null, quantity: null, tax: null },
    ]);
  });
  it("updates items list when remove item button is clicked", async () => {
    const button = wrapper.find("[data-testid=remove-item]");
    await button.vm.$emit("click");
    expect(wrapper.emitted("input")).toBeTruthy();
    expect(wrapper.emitted("input")[0][0]).toStrictEqual([propsData.value[1]]);
  });
});
