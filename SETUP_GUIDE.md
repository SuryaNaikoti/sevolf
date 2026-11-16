# Quickstart Setup Guide — Sevolf Shopify OS 2.0 Theme

Welcome to the **Sevolf Shopify Theme**. This theme was built from scratch as a modern, high-end D2C storefront supporting both **physical consumer merchandise** (apparel, drinkware, accessories, home goods) and **digital products** (ebooks, templates, digital planners, resource kits).

---

## 1. How to Upload the Theme to Shopify

1. Download or locate `sevolf-shopify-theme.zip` from your project folder.
2. Log into your **Shopify Admin** (`https://admin.shopify.com/store/YOUR-STORE-NAME`).
3. In the left sidebar, navigate to **Online Store** &rarr; **Themes**.
4. In the **Theme library** section, click **Add theme** &rarr; **Upload zip file**.
5. Select `sevolf-shopify-theme.zip` and click **Upload file**.
6. Once uploaded, click **Customize** to personalize your storefront or click **Publish** when ready to go live.

---

## 2. Configuring Brand & Theme Settings

From the Shopify Theme Customizer (**Customize** button):
- Click the **Theme settings** (gear icon) on the left sidebar:
  - **General**: Upload your custom Sevolf logo and 32x32px favicon.
  - **Colors**: Adjust background, surface, text, accents, buttons, and badge highlights.
  - **Typography**: Select heading and body fonts.
  - **Layout**: Configure max container width (default 1400px) and border-radius (default 0px for sharp editorial modernism).
  - **Cart**: Switch between slide-out AJAX **Drawer** and standard **Page**. Set a free shipping threshold (e.g. `1499` for ₹1,499).
  - **Social Media**: Enter your Instagram, X/Twitter, and Pinterest brand profiles.

---

## 3. Configuring Navigation & Dropdowns

1. In Shopify Admin, navigate to **Online Store** &rarr; **Navigation**.
2. Edit **Main menu**:
   - Create multi-level dropdowns matching your merchandising structure:
     - **Apparel** (T-Shirts, Oversized Tees, Hoodies, Sweatshirts)
     - **Accessories** (Caps, Bags, Phone Cases)
     - **Drinkware** (Mugs, Bottles)
     - **Home & Living** (Posters, Canvas, Framed Art)
     - **Stationery** (Notebooks, Planners)
     - **Digital** (Ebooks, Guides, Notion Templates, Workbooks, Bundles)
3. In Theme Customizer, ensure the **Header** section has `Menu` set to your `Main menu`.

---

## 4. Configuring Physical vs. Digital Products

### A. Physical Products (e.g., Oversized Tees, Caps, Mugs)
- **Product Type**: Set to `Apparel`, `Drinkware`, `Accessories`, etc.
- **Shipping**: Check **"This is a physical product"** and enter weight.
- **Inventory & SKUs**: Ensure each variant (e.g., Size `S, M, L, XL`) has a unique SKU matching your fulfillment specifications (such as Qikink catalog mapping).
- **Result on Storefront**: Automatically displays variant radio selectors, quantity picker, size guide accordion, materials info, and physical shipping policies.

### B. Digital Products (e.g., Notion Workspace, Digital Planners)
- **Product Type**: Set exactly to `Digital` OR add the tag `Digital`.
- **Shipping**: **UNCHECK** "This is a physical product" (Shopify will not charge shipping or ask for customer shipping addresses).
- **Digital Delivery**: Install the free **Shopify Digital Downloads** app (or SendOwl / Filemonk) to attach your downloadable zip, PDF, or Notion link to the product.
- **Result on Storefront**: The theme automatically:
  - Displays the green **"Instant Digital Asset"** badge.
  - Hides shipping fee messaging and physical quantity inputs.
  - Changes the CTA button to **"Get Instant Access &rarr;"**.
  - Injects instant delivery confirmation, file formats (PDF, Notion, Canva), and commercial licensing accordions.

### C. Bundles (Hybrid Physical + Digital)
- Tag with `Bundle` or set Product Type to `Bundle`.
- Mention in product descriptions what physical item ships and what digital download is automatically dispatched upon checkout.

---

## 5. Qikink Fulfillment Integration

Sevolf is presented strictly as an independent consumer label. Customer-facing POD or Qikink messaging is absent.

To connect physical products to Qikink:
1. Install the official **Qikink App** from the Shopify App Store.
2. Link your Qikink merchant account.
3. Map your Shopify product variants to Qikink's catalog items using SKUs.
4. When a physical order is placed on Sevolf, Shopify automatically dispatches an order webhook to Qikink for manufacturing, packing, and dispatch under your white-labeled brand.
5. If the order contains both physical and digital items, Qikink fulfills the apparel while the digital download app sends the electronic files immediately.

---

## 6. Payment Gateway Configuration (Cashfree / Razorpay / Stripe)

1. In Shopify Admin, navigate to **Settings** &rarr; **Payments**.
2. Select **Alternative payment methods** and choose **Cashfree Payments** (or your preferred processor).
3. Follow the standard Shopify-supported payment gateway instructions by entering your App ID and Secret Key.
4. The Sevolf theme automatically routes customers through Shopify's checkout engine.

---

## 7. Premium Editorial PDP Experience (Stone Island Interaction Architecture)

The Product Detail Page (PDP) features an editorial showroom architecture:
- **60/40 Split**: Large 2-column paired image gallery on desktop with technical numbering badges (`001` to `006`), paired with an anchored sticky purchase panel.
- **Subtle 3D Depth**: Multi-layer reveal animations (`scale`, `translateY`, `perspective`) and cursor hover response.
- **Narrative Teaser & Deep-Linking**: Lead quote with `PRODUCT DETAILS →` smooth-scrolling accordion opener.
- **Plain White Collar Requirement**: Inside neck collar is kept unbranded and clean across all depictions.
- **Technical Spec Strip**: Monochromatic specification bar (`180 GSM • 100% COTTON • OVERSIZED FIT • DTF GRAPHIC • WHITE`).
- **Cinematic Showroom Section & Choreography**: Dark story hero section (`ETERNAL MOTION // ALWAYS IN MOTION. FURTHER AHEAD.`) and staggered design language animation (`MOVEMENT`, `DIRECTION`, `SPACE`, `POSSIBILITY`).
- **Dynamic "YOU MAY ALSO LIKE" Carousel**: Editorial product cards with subtle `+` quick-add buttons and carousel arrow controls.
- **Mobile Sticky Purchase Bar**: Automatically slides into view from the bottom when primary purchase buttons scroll out of view.

