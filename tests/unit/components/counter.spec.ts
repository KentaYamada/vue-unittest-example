import { mount } from "@vue/test-utils";
import Counter from "@/components/counter/Counter.vue";

describe("Counter.vue", () => {
  const wrapper = mount(Counter);

  it("Counter component is VueInstance", () => {
    // isVueInstance method will be duplicated
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("Counter is 0", () => {
    expect((wrapper.vm as any).counter).toBe(0);
  });

  it("Trigger click increment event", () => {
    const button = wrapper.find("button");
    button.trigger("click");
    expect((wrapper.vm as any).counter).toBe(1);
  });
});
