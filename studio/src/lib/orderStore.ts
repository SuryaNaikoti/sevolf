import fs from 'fs';
import path from 'path';
import { Order } from '@/types/orders';

const DB_PATH = path.join(process.cwd(), 'private_storage', 'orders.json');

// Ensure database file exists
function initDb() {
  const dir = path.dirname(DB_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(DB_PATH)) {
    fs.writeFileSync(DB_PATH, JSON.stringify([], null, 2), 'utf-8');
  }
}

export function getAllOrders(): Order[] {
  initDb();
  try {
    const raw = fs.readFileSync(DB_PATH, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('Failed to read orders database:', err);
    return [];
  }
}

export function getOrderById(id: string): Order | undefined {
  const orders = getAllOrders();
  return orders.find((o) => o.id === id);
}

export function getOrderByRazorpayOrderId(rzpOrderId: string): Order | undefined {
  const orders = getAllOrders();
  return orders.find((o) => o.razorpayOrderId === rzpOrderId);
}

export function saveOrder(order: Order): Order {
  initDb();
  const orders = getAllOrders();
  const existingIdx = orders.findIndex((o) => o.id === order.id);
  if (existingIdx >= 0) {
    orders[existingIdx] = order;
  } else {
    orders.push(order);
  }
  fs.writeFileSync(DB_PATH, JSON.stringify(orders, null, 2), 'utf-8');
  return order;
}

export function incrementDownloadCount(orderId: string, format: 'a4' | 'letter'): Order | null {
  const order = getOrderById(orderId);
  if (!order) return null;
  
  if (!order.downloadCount) {
    order.downloadCount = { a4: 0, letter: 0, both: 0 };
  }
  
  order.downloadCount[format] = (order.downloadCount[format] || 0) + 1;
  order.lastDownloadedAt = new Date().toISOString();
  saveOrder(order);
  return order;
}
