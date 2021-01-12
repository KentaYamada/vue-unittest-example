import { SampleService } from "@/services/sample-service.ts";

describe("Sample service class unit tests", () => {
  it("add method test", () => {
    expect(SampleService.add(1, 1)).toBe(2);
  });

  it("devide method raise zero devide exception", () => {
    expect(() => SampleService.devide(1, 0)).toThrow();
  });
});
