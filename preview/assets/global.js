/**
 * SEVOLF — GLOBAL JAVASCRIPT CONTROLLER
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initAccordions();
  initCartDrawer();
  initProductGallery();
  initVariantSelectors();
  initSizeGuideModal();
  initQuantitySteppers();
  initPDPDepthAnimations();
  initGlobalScrollAnimations();
  initMobileStickyBar();
  initProductDetailsScroll();
});

/* Mobile Menu Controller */
function initMobileMenu() {
  const toggleBtn = document.querySelector('[data-mobile-menu-toggle]');
  const closeBtn = document.querySelector('[data-mobile-menu-close]');
  const menu = document.querySelector('[data-mobile-menu]');
  const overlay = document.querySelector('[data-mobile-menu-overlay]');
  if (!menu) return;

  const openMenu = () => {
    menu.classList.add('is-active');
    if (overlay) overlay.classList.add('is-active');
    if (toggleBtn) {
      toggleBtn.setAttribute('aria-expanded', 'true');
    }
    menu.setAttribute('aria-hidden', 'false');
    document.body.classList.add('overflow-hidden');
  };

  const closeMenu = () => {
    menu.classList.remove('is-active');
    if (overlay) overlay.classList.remove('is-active');
    if (toggleBtn) {
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
    menu.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('overflow-hidden');
  };

  if (toggleBtn) {
    toggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (menu.classList.contains('is-active')) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeMenu();
    });
  }

  if (overlay) {
    overlay.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeMenu();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('is-active')) {
      closeMenu();
    }
  });

  // Mobile submenu accordion toggles
  const submenuToggles = menu.querySelectorAll('[data-mobile-submenu-toggle]');
  submenuToggles.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const parent = btn.closest('.mobile-nav-item');
      if (parent) {
        const isExpanded = parent.classList.toggle('is-expanded');
        btn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
      }
    });
  });
}

/* Accordions */
function initAccordions() {
  const headers = document.querySelectorAll('[data-accordion-header]');
  headers.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.accordion__item') || header.closest('[data-accordion-item]');
      if (item) {
        const isOpening = !item.classList.contains('is-open');
        item.classList.toggle('is-open', isOpening);
        header.setAttribute('aria-expanded', isOpening ? 'true' : 'false');
      }
    });
  });
}

/* Cart Drawer Controller */
function initCartDrawer() {
  const triggers = document.querySelectorAll('[data-cart-drawer-trigger]');
  const drawer = document.querySelector('[data-cart-drawer]');
  const overlay = document.querySelector('[data-cart-drawer-overlay]');
  const closeBtns = document.querySelectorAll('[data-cart-drawer-close]');

  if (!drawer) return;

  const openDrawer = () => {
    drawer.classList.add('is-active');
    if (overlay) overlay.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('is-active');
    if (overlay) overlay.classList.remove('is-active');
    document.body.style.overflow = '';
  };

  triggers.forEach(t => t.addEventListener('click', (e) => {
    e.preventDefault();
    openDrawer();
  }));

  closeBtns.forEach(c => c.addEventListener('click', closeDrawer));
  if (overlay) overlay.addEventListener('click', closeDrawer);

  window.SevolfCart = {
    open: openDrawer,
    close: closeDrawer,
    refresh: fetchCart
  };
}

/* Variant Selectors */
function initVariantSelectors() {
  const forms = document.querySelectorAll('form[action*="/cart/add"]');

  forms.forEach(form => {
    const variantDataEl = form.querySelector('[data-variants-json]');
    if (!variantDataEl) return;

    let variants = [];
    try {
      variants = JSON.parse(variantDataEl.textContent);
    } catch (e) {
      console.error('Error parsing variants JSON:', e);
      return;
    }

    const optionInputs = form.querySelectorAll('.variant-radio-input');

    const updateVariantState = () => {
      // Gather currently selected option values ordered by position
      const groups = Array.from(form.querySelectorAll('.variant-selector-group'));
      const selectedValues = groups.map(group => {
        const checked = group.querySelector('.variant-radio-input:checked');
        return checked ? checked.value : null;
      });

      // Update displayed selected label in headers
      groups.forEach(group => {
        const checked = group.querySelector('.variant-radio-input:checked');
        const labelDisplay = group.querySelector('[data-option-selected-label]');
        if (labelDisplay && checked) {
          labelDisplay.textContent = checked.value;
        }
      });

      // Find matching variant
      const matched = variants.find(v => {
        return v.options.every((opt, idx) => opt === selectedValues[idx]);
      });

      const masterIdInput = form.querySelector('[data-master-variant-id]') || form.querySelector('input[name="id"]');
      const submitBtn = form.querySelector('[data-add-to-bag-btn]') || form.querySelector('[type="submit"]');
      const submitTextSpan = submitBtn ? (submitBtn.querySelector('[data-btn-text]') || submitBtn) : null;
      const priceRegularEl = document.querySelector('[data-price-display]');
      const priceCompareEl = document.querySelector('[data-price-compare-display]');
      const priceContainer = document.querySelector('[data-price-container]');

      if (matched) {
        if (masterIdInput) masterIdInput.value = matched.id;

        if (matched.available) {
          if (submitBtn) {
            submitBtn.disabled = false;
            if (submitTextSpan) {
              const defaultText = submitBtn.dataset.originalText || 'ADD TO BAG';
              submitTextSpan.textContent = defaultText;
            }
          }
        } else {
          if (submitBtn) {
            if (!submitBtn.dataset.originalText && submitTextSpan) {
              submitBtn.dataset.originalText = submitTextSpan.textContent.trim();
            }
            submitBtn.disabled = true;
            if (submitTextSpan) {
              submitTextSpan.textContent = 'SOLD OUT';
            }
          }
        }

        // Update price display
        if (priceRegularEl && matched.price != null) {
          priceRegularEl.innerHTML = formatMoney(matched.price);
        }

        // Update compare at price
        if (priceCompareEl) {
          if (matched.compare_at_price && matched.compare_at_price > matched.price) {
            priceCompareEl.innerHTML = '<span class="visually-hidden">Regular price:</span>' + formatMoney(matched.compare_at_price);
            priceCompareEl.classList.remove('visually-hidden');
            if (priceContainer) priceContainer.classList.add('price--on-sale');
          } else {
            priceCompareEl.innerHTML = '';
            priceCompareEl.classList.add('visually-hidden');
            if (priceContainer) priceContainer.classList.remove('price--on-sale');
          }
        }

        // Sync gallery image and filter by color if applicable
        const colorGroup = groups.find(g => {
          const lbl = g.querySelector('.variant-selector-group__label');
          return lbl && (lbl.textContent.includes('COLOUR') || lbl.textContent.includes('COLOR'));
        });
        const selectedColor = colorGroup ? (colorGroup.querySelector('.variant-radio-input:checked')?.value || '').trim() : '';

        if (window.SevolfGallery && typeof window.SevolfGallery.filterByColor === 'function') {
          window.SevolfGallery.filterByColor(selectedColor);
        }

        // Update technical spec strip color item if present
        const specColorEl = document.querySelector('[data-spec-color]');
        if (specColorEl && selectedColor) {
          specColorEl.textContent = selectedColor.toUpperCase();
        }

        if (matched.featured_image && matched.featured_image.src) {
          const gallery = document.querySelector('[data-product-gallery]');
          if (gallery) {
            const matchingImg = gallery.querySelector(`img[src*="${matched.featured_image.src.split('?')[0]}"]`) ||
                                gallery.querySelector(`.product-gallery__item[data-media-id="${matched.featured_image.id}"]`);
            if (matchingImg && !matchingImg.closest('.is-color-hidden')) {
              matchingImg.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
            }
          }
        }

        // Synchronize browser URL
        if (window.history && window.history.replaceState) {
          const newUrl = new URL(window.location.href);
          newUrl.searchParams.set('variant', matched.id);
          window.history.replaceState({ path: newUrl.href }, '', newUrl.href);
        }
      } else {
        // Variant combination unavailable
        if (masterIdInput) masterIdInput.value = '';
        if (submitBtn) {
          submitBtn.disabled = true;
          if (submitTextSpan) {
            submitTextSpan.textContent = 'UNAVAILABLE';
          }
        }
      }
    };

    optionInputs.forEach(input => {
      input.addEventListener('change', updateVariantState);
    });

    // Run initial variant sync
    updateVariantState();
  });
}

/* Product Gallery (Thumbnails, Mobile Scroll & Lightbox) */
function initProductGallery() {
  const gallery = document.querySelector('[data-product-gallery]');
  if (!gallery) return;

  const thumbs = Array.from(gallery.querySelectorAll('[data-thumb-index]'));
  const items = Array.from(gallery.querySelectorAll('.product-gallery__item'));
  const grid = gallery.querySelector('.product-gallery__grid');
  const currentCountEl = gallery.querySelector('[data-gallery-current]');
  const totalCountEl = gallery.querySelector('[data-gallery-total]');
  const prevBtn = gallery.querySelector('[data-gallery-prev]');
  const nextBtn = gallery.querySelector('[data-gallery-next]');

  const getVisibleItems = () => items.filter(it => !it.classList.contains('is-color-hidden'));
  const getVisibleThumbs = () => thumbs.filter(th => !th.classList.contains('is-color-hidden'));

  const updateActiveIndex = (visibleIdx) => {
    const visibleThumbs = getVisibleThumbs();
    visibleThumbs.forEach((t, i) => t.classList.toggle('is-selected', i === visibleIdx));
    if (currentCountEl) {
      const num = visibleIdx + 1;
      currentCountEl.textContent = num < 10 ? '0' + num : num;
    }
  };

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      const visibleThumbs = getVisibleThumbs();
      const visibleItems = getVisibleItems();
      const vIdx = visibleThumbs.indexOf(thumb);
      if (vIdx !== -1 && visibleItems[vIdx]) {
        visibleItems[vIdx].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        updateActiveIndex(vIdx);
      }
    });
  });

  if (prevBtn && nextBtn && grid) {
    prevBtn.addEventListener('click', () => {
      const visibleItems = getVisibleItems();
      if (visibleItems.length === 0) return;
      const currentIdx = parseInt(currentCountEl ? currentCountEl.textContent : '1', 10) - 1;
      const targetIdx = Math.max(0, currentIdx - 1);
      if (visibleItems[targetIdx]) {
        visibleItems[targetIdx].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        updateActiveIndex(targetIdx);
      }
    });

    nextBtn.addEventListener('click', () => {
      const visibleItems = getVisibleItems();
      if (visibleItems.length === 0) return;
      const currentIdx = parseInt(currentCountEl ? currentCountEl.textContent : '1', 10) - 1;
      const targetIdx = Math.min(visibleItems.length - 1, currentIdx + 1);
      if (visibleItems[targetIdx]) {
        visibleItems[targetIdx].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        updateActiveIndex(targetIdx);
      }
    });

    // Mobile scroll spy
    let isScrolling;
    grid.addEventListener('scroll', () => {
      window.clearTimeout(isScrolling);
      isScrolling = setTimeout(() => {
        const visibleItems = getVisibleItems();
        if (visibleItems.length === 0) return;
        const scrollLeft = grid.scrollLeft;
        const itemWidth = visibleItems[0].offsetWidth || grid.offsetWidth;
        const newIdx = Math.max(0, Math.min(visibleItems.length - 1, Math.round(scrollLeft / itemWidth)));
        updateActiveIndex(newIdx);
      }, 60);
    }, { passive: true });
  }

  // Filter gallery items by color variant
  const filterByColor = (colorName) => {
    if (!colorName) return;
    const target = colorName.toLowerCase().trim();

    const hasTaggedItems = items.some(it => it.dataset.color);
    if (!hasTaggedItems) return;

    items.forEach(it => {
      const itemColor = (it.dataset.color || '').toLowerCase().trim();
      if (!itemColor || itemColor === target) {
        it.classList.remove('is-color-hidden');
      } else {
        it.classList.add('is-color-hidden');
      }
    });

    thumbs.forEach(th => {
      const thumbColor = (th.dataset.color || '').toLowerCase().trim();
      if (!thumbColor || thumbColor === target) {
        th.classList.remove('is-color-hidden');
      } else {
        th.classList.add('is-color-hidden');
      }
    });

    const visibleItems = getVisibleItems();
    if (totalCountEl) {
      const total = visibleItems.length;
      totalCountEl.textContent = total < 10 ? '0' + total : total;
    }

    if (visibleItems.length > 0) {
      grid.scrollLeft = 0;
      updateActiveIndex(0);
    }
  };

  window.SevolfGallery = {
    filterByColor,
    updateActiveIndex
  };

  // Lightbox Zoom
  const lightboxModal = document.querySelector('[data-gallery-lightbox]');
  const lightboxImg = lightboxModal ? lightboxModal.querySelector('[data-lightbox-img]') : null;
  const zoomTriggers = gallery.querySelectorAll('[data-gallery-lightbox-trigger]');
  const lightboxClose = lightboxModal ? lightboxModal.querySelectorAll('[data-lightbox-close]') : [];

  if (lightboxModal && lightboxImg) {
    zoomTriggers.forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.closest('.is-color-hidden')) return;
        const fullUrl = btn.dataset.fullImage;
        if (fullUrl) {
          lightboxImg.src = fullUrl;
          lightboxModal.removeAttribute('hidden');
          lightboxModal.classList.add('is-active');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    const closeLightbox = () => {
      lightboxModal.classList.remove('is-active');
      setTimeout(() => {
        lightboxModal.setAttribute('hidden', '');
        lightboxImg.src = '';
      }, 250);
      document.body.style.overflow = '';
    };

    lightboxClose.forEach(btn => btn.addEventListener('click', closeLightbox));
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightboxModal.classList.contains('is-active')) {
        closeLightbox();
      }
    });
  }
}

/* Size Guide Modal */
function initSizeGuideModal() {
  const modal = document.querySelector('[data-size-guide-modal]');
  const openBtns = document.querySelectorAll('[data-size-guide-open]');
  const closeBtns = document.querySelectorAll('[data-size-guide-close]');

  if (!modal) return;

  const openModal = () => {
    modal.removeAttribute('hidden');
    modal.classList.add('is-active');
    document.body.style.overflow = 'hidden';
    const closeBtn = modal.querySelector('.modal-close-btn');
    if (closeBtn) closeBtn.focus();
  };

  const closeModal = () => {
    modal.classList.remove('is-active');
    setTimeout(() => modal.setAttribute('hidden', ''), 250);
    document.body.style.overflow = '';
  };

  openBtns.forEach(btn => btn.addEventListener('click', openModal));
  closeBtns.forEach(btn => btn.addEventListener('click', closeModal));

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-active')) {
      closeModal();
    }
  });
}

/* Quantity Stepper Buttons */
function initQuantitySteppers() {
  const selectors = document.querySelectorAll('[data-quantity-selector]');

  selectors.forEach(wrapper => {
    const input = wrapper.querySelector('input[type="number"]');
    const minusBtn = wrapper.querySelector('[data-quantity-change="-1"]');
    const plusBtn = wrapper.querySelector('[data-quantity-change="1"]');

    if (!input) return;

    if (minusBtn) {
      minusBtn.addEventListener('click', () => {
        const val = parseInt(input.value, 10) || 1;
        if (val > 1) {
          input.value = val - 1;
          input.dispatchEvent(new Event('change'));
        }
      });
    }

    if (plusBtn) {
      plusBtn.addEventListener('click', () => {
        const val = parseInt(input.value, 10) || 1;
        input.value = val + 1;
        input.dispatchEvent(new Event('change'));
      });
    }
  });
}

/* Quick Add to Cart with Shopify AJAX API */
function initQuickAdd() {
  document.addEventListener('submit', async (e) => {
    const form = e.target.closest('form[action*="/cart/add"]');
    if (!form) return;

    e.preventDefault();
    const submitBtn = form.querySelector('[type="submit"]');
    const submitTextSpan = submitBtn ? (submitBtn.querySelector('[data-btn-text]') || submitBtn) : null;
    const originalText = submitTextSpan ? submitTextSpan.textContent : (submitBtn ? submitBtn.innerHTML : '');

    if (submitBtn) {
      submitBtn.disabled = true;
      if (submitTextSpan) {
        submitTextSpan.textContent = 'ADDING...';
      }
    }

    try {
      const formData = new FormData(form);
      const res = await fetch('/cart/add.js', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (!res.ok) throw new Error('Add to cart failed');

      await fetchCart();
      if (window.SevolfCart) {
        window.SevolfCart.open();
      }
    } catch (err) {
      console.error(err);
      alert('Unable to add item to bag. Please try again.');
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        if (submitTextSpan) {
          submitTextSpan.textContent = originalText;
        }
      }
    }
  });
}

/* Fetch & Render Cart Drawer */
async function fetchCart() {
  try {
    const res = await fetch('/cart.js');
    const cart = await res.json();

    // Update cart counter badges
    const counters = document.querySelectorAll('[data-cart-count]');
    counters.forEach(c => {
      c.textContent = cart.item_count;
      c.style.display = cart.item_count > 0 ? 'flex' : 'none';
    });

    const itemsContainer = document.querySelector('[data-cart-drawer-items]');
    const subtotalEl = document.querySelector('[data-cart-drawer-subtotal]');

    if (subtotalEl) {
      subtotalEl.innerHTML = formatMoney(cart.total_price);
    }

    if (itemsContainer) {
      if (cart.item_count === 0) {
        itemsContainer.innerHTML = '<p style="text-align:center; padding: 2rem 0; color: var(--color-text-muted);">Your bag is currently empty.</p>';
      } else {
        itemsContainer.innerHTML = cart.items.map(item => `
          <div class="cart-drawer__item" data-line-item-key="${item.key}">
            <img class="cart-drawer__item-img" src="${item.featured_image ? item.featured_image.url : ''}" alt="${item.title}" />
            <div class="cart-drawer__item-info">
              <h4>${item.product_title}</h4>
              ${item.variant_title ? `<p class="cart-drawer__item-variant">${item.variant_title}</p>` : ''}
              <div style="display:flex; justify-content:space-between; align-items:center; margin-top: 0.5rem;">
                <div class="cart-drawer__quantity">
                  <button type="button" class="cart-drawer__qty-btn" onclick="updateCartLine('${item.key}', ${item.quantity - 1})">-</button>
                  <span class="cart-drawer__qty-num">${item.quantity}</span>
                  <button type="button" class="cart-drawer__qty-btn" onclick="updateCartLine('${item.key}', ${item.quantity + 1})">+</button>
                </div>
                <strong>${formatMoney(item.final_line_price)}</strong>
              </div>
            </div>
          </div>
        `).join('');
      }
    }
  } catch (err) {
    console.error('Fetch cart error:', err);
  }
}

window.updateCartLine = async function(key, quantity) {
  try {
    await fetch('/cart/change.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ id: key, quantity })
    });
    fetchCart();
  } catch (err) {
    console.error('Update line error:', err);
  }
};

function formatMoney(cents) {
  return '₹' + (cents / 100).toFixed(2);
}

/* ==========================================================================
   SEVOLF EDITORIAL PDP CONTROLLERS
   ========================================================================== */

/**
 * Depth and reveal animations using IntersectionObserver
 */
function initPDPDepthAnimations() {
  const depthItems = document.querySelectorAll('[data-depth-item]');
  const choreoWords = document.querySelectorAll('[data-choreo-word]');

  if (!('IntersectionObserver' in window)) {
    depthItems.forEach(el => el.classList.add('is-revealed'));
    choreoWords.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const depthObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        depthObserver.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.15
  });

  depthItems.forEach(el => depthObserver.observe(el));

  const choreoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        choreoObserver.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.25
  });

  choreoWords.forEach(el => choreoObserver.observe(el));
}

/**
 * Universal Scroll Reveal Animations for all pages & sections
 */
function initGlobalScrollAnimations() {
  const elements = document.querySelectorAll(
    '[data-scroll-reveal], .reveal-on-scroll, .product-card, .collection-card, .brand-tile, .hero-banner__content, .testimonials-header, .testimonial-card, .editorial-quote-block, .spec-grid, .spec-strip__item'
  );

  if (!elements.length) return;

  if (!('IntersectionObserver' in window)) {
    elements.forEach(el => el.classList.add('is-revealed'));
    return;
  }

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.1
  });

  elements.forEach((el, index) => {
    // Add base class if not present
    if (!el.hasAttribute('data-scroll-reveal') && !el.classList.contains('reveal-on-scroll')) {
      el.classList.add('reveal-on-scroll');
    }
    // Subtle staggered delay on sibling cards
    if (el.parentElement && (el.parentElement.classList.contains('product-grid') || el.parentElement.classList.contains('recommendations-carousel') || el.parentElement.classList.contains('brand-world-grid'))) {
      const childIndex = Array.from(el.parentElement.children).indexOf(el);
      if (childIndex > 0) {
        el.style.transitionDelay = `${(childIndex % 4) * 80}ms`;
      }
    }
    revealObserver.observe(el);
  });
}

/**
 * Mobile Sticky Purchase Bar visibility controller
 */
function initMobileStickyBar() {
  const stickyBar = document.querySelector('[data-mobile-sticky-bar]');
  const mainPurchaseBtn = document.querySelector('[data-add-to-cart-button]');
  if (!stickyBar || !mainPurchaseBtn) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // If the main buy button is NOT intersecting (scrolled out of view), show sticky bar
      if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
        stickyBar.classList.add('is-visible');
      } else {
        stickyBar.classList.remove('is-visible');
      }
    });
  }, {
    threshold: 0
  });

  observer.observe(mainPurchaseBtn);

  // Sync click on mobile sticky bar "ADD TO BAG" with main form submit
  const stickyAddBtn = stickyBar.querySelector('.mobile-sticky-bar__btn');
  if (stickyAddBtn) {
    stickyAddBtn.addEventListener('click', (e) => {
      e.preventDefault();
      mainPurchaseBtn.click();
    });
  }
}

/**
 * Smooth scroll to Accordion / Details when clicking 'PRODUCT DETAILS →'
 */
function initProductDetailsScroll() {
  const link = document.querySelector('[data-scroll-to-details]');
  if (!link) return;

  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.getElementById('ProductDetailsAccordion') || document.querySelector('.editorial-accordions');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // If the first accordion is closed, open it
      const firstAccordion = target.querySelector('.accordion__item');
      if (firstAccordion && !firstAccordion.classList.contains('is-open')) {
        firstAccordion.classList.add('is-open');
        const header = firstAccordion.querySelector('[data-accordion-header]');
        if (header) header.setAttribute('aria-expanded', 'true');
      }
    }
  });
}
