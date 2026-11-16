# Technical Architecture & Standards — Sevolf Shopify OS 2.0 Theme

## 1. Directory Structure

```
c:\Users\HP\OneDrive\Desktop\Sevolf\theme\
├── assets/
│   ├── base.css              # Typography, CSS tokens, resets, utility classes
│   ├── theme.css             # Component styling, header, hero, cards, drawers, layout
│   └── global.js             # Vanilla JS: variant changes, accordions, AJAX cart drawer, mobile nav
├── config/
│   ├── settings_schema.json  # Shopify Theme Customizer configuration schema
│   └── settings_data.json    # Default theme preset values
├── layout/
│   └── theme.liquid          # Master HTML5 layout with OpenGraph, JSON-LD Schema & scripts
├── locales/
│   └── en.default.json       # Translation strings
├── sections/
│   ├── announcement-bar.liquid
│   ├── header.liquid
│   ├── footer.liquid
│   ├── hero-banner.liquid
│   ├── featured-collection.liquid
│   ├── collection-list.liquid
│   ├── digital-showcase.liquid
│   ├── brand-story.liquid
│   ├── testimonials.liquid
│   ├── main-collection.liquid
│   ├── main-product.liquid
│   ├── main-cart.liquid
│   ├── cart-drawer.liquid
│   ├── main-search.liquid
│   ├── main-page.liquid
│   ├── main-blog.liquid
│   ├── main-article.liquid
│   └── main-404.liquid
├── snippets/
│   ├── icon.liquid
│   ├── price.liquid
│   ├── badge.liquid
│   ├── digital-meta.liquid
│   ├── product-card.liquid
│   ├── pagination.liquid
│   ├── social-icons.liquid
│   └── seo-tags.liquid
└── templates/
    ├── index.json
    ├── product.json
    ├── collection.json
    ├── cart.json
    ├── search.json
    ├── 404.json
    ├── page.json
    ├── blog.json
    └── article.json
```

## 2. Key Architectural Decisions

- **Zero Heavy Frontend Dependencies**: 100% built on modern Vanilla CSS and native ES6 JavaScript for maximum performance and instant First Contentful Paint.
- **Shopify Online Store 2.0 Native**: Complete JSON templates allow merchants to reorder, add, or customize homepage and product sections via Shopify Theme Editor.
- **Physical vs. Digital Hybrid Logic**: Conditional Liquid inspections (`product.type == 'Digital'` or `product.tags contains 'Digital'`) tailor the purchasing experience dynamically without code branching or separate storefronts.
- **Fulfillment Decoupling**: Direct pass-through of standard Shopify variant IDs and SKUs, cleanly ready for Qikink or external 3PL apps.
