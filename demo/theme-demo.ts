// Welcome to Mocha Mousse Theme
// This is a demonstration of the theme's colors

interface CoffeeOrder {
  type: string;
  size: "small" | "medium" | "large";
  extras?: string[];
}

/**
 * A class to manage coffee orders
 * Demonstrates various syntax elements
 */
class CoffeeShop {
  private readonly name: string = "Mocha Mousse Café";
  private orders: Map<number, CoffeeOrder> = new Map();

  constructor() {
    console.log(`Welcome to ${this.name}!`);
  }

  public createOrder(order: CoffeeOrder): number {
    const orderId = Math.floor(Math.random() * 1000);
    this.orders.set(orderId, order);

    // Template string showing string interpolation
    const message = `New order #${orderId}: ${order.size} ${order.type}`;

    // Array with different types
    const orderDetails = [orderId, order.type, order.size, order.extras || []];

    return orderId;
  }

  public async prepareOrder(orderId: number): Promise<string> {
    const order = this.orders.get(orderId);
    if (!order) {
      throw new Error("Order not found!");
    }

    // String concatenation
    const preparation = "Preparing: " + order.type;
    await this.delay(2000); // Simulate preparation time

    return `Your ${order.size} ${order.type} is ready!`;
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

// Create an instance and use it
const shop = new CoffeeShop();
const myOrder: CoffeeOrder = {
  type: "Mocha Mousse Latte",
  size: "large",
  extras: ["whipped cream", "chocolate sprinkles"],
};

// Async/await usage
async function orderCoffee() {
  try {
    const orderId = shop.createOrder(myOrder);
    const result = await shop.prepareOrder(orderId);
    console.log(result);
  } catch (error) {
    console.error("Failed to process order:", error);
  }
}

// Call the function
orderCoffee();
