/**
 * Sample service
 */
export class SampleService {
  static add(x: number, y: number): number {
    return x + y;
  }

  static devide(x: number, y: number): number {
    if (!y) {
      throw new Error("Invalid devidend: " + y);
    }

    return x / y;
  }
}
