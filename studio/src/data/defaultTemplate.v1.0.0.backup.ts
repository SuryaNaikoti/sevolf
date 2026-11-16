import { StudioProduct, StudioPage } from '@/types/studio';

export const homeResetKitTemplate: StudioProduct = {
  id: 'selvof-home-reset-kit-v1',
  title: 'The 14-Day Home Reset Kit',
  subtitle: 'A Guided Mindful Declutter & Aesthetic Living System',
  description: 'An editorial 22-page print-ready workbook and decluttering system engineered to bring intentional calm, space clarity, and restorative harmony to your living environment.',
  category: 'Lifestyle & Living Systems',
  format: 'a4',
  version: '1.0.0',
  createdAt: '2026-11-14T00:00:00Z',
  updatedAt: '2026-11-14T00:00:00Z',
  versionsHistory: [
    {
      id: 'v1',
      version: '1.0.0',
      savedAt: '2026-11-14T00:00:00Z',
      note: 'Initial official 22-page release conforming to SELVOF studio standards.'
    }
  ],
  pages: [
    // Page 1: Cover Page
    {
      id: 'p-1',
      pageNumber: 1,
      title: 'Cover: The 14-Day Home Reset Kit',
      isCover: true,
      blocks: [
        {
          id: 'b-1-1',
          type: 'cover',
          data: {
            edition: 'SELVOF LIVING SYSTEMS • EDITION NO. 04',
            title: 'THE 14-DAY\nHOME RESET KIT',
            subtitle: 'A Guided Method for Creating Intentional Space, Visual Serenity, and Everyday Ease',
            author: 'STUDIO SELVOF • PRINT & DIGITAL EDITION',
            meta: 'Format: A4 / US Letter • Print-Ready • Fillable Guide'
          }
        }
      ]
    },
    // Page 2: Welcome & Philosophy
    {
      id: 'p-2',
      pageNumber: 2,
      title: 'The Philosophy of Intentional Space',
      category: 'Foundation & Principles',
      headerText: 'SELVOF STUDIO • FOUNDATIONS',
      footerText: 'The 14-Day Home Reset Kit',
      blocks: [
        {
          id: 'b-2-1',
          type: 'section-title',
          data: {
            eyebrow: 'PART I: INTENTIONALITY',
            title: 'A Home That Restores You',
            description: 'Decluttering is not merely discarding objects; it is an act of curating your nervous system’s primary habitat.'
          }
        },
        {
          id: 'b-2-2',
          type: 'quote',
          data: {
            quote: '“Clutter is not just physical stuff. It is postponed decisions, visual static, and unmade choices competing for your attention.”',
            author: 'SELVOF Living Principles'
          }
        },
        {
          id: 'b-2-3',
          type: 'paragraph',
          data: {
            content: 'The 14-Day Home Reset is designed to be gentle, systematic, and lasting. Rather than tearing your house apart in an exhausting weekend frenzy, this program uses targeted 45-minute daily interventions that respect your energy and establish sustainable habits.'
          }
        },
        {
          id: 'b-2-4',
          type: 'prompt-box',
          data: {
            title: 'Your Reset Intention',
            prompt: 'How do you want your home to feel at the end of these 14 days? Describe the emotional state and physical atmosphere you are inviting into your space.',
            lines: 4
          }
        }
      ]
    },
    // Page 3: The 4-Box Rule & Protocol
    {
      id: 'p-3',
      pageNumber: 3,
      title: 'The SELVOF 4-Category Sort Protocol',
      category: 'Core Methodology',
      headerText: 'METHODOLOGY & SORTING SYSTEM',
      footerText: 'The 14-Day Home Reset Kit',
      blocks: [
        {
          id: 'b-3-1',
          type: 'section-title',
          data: {
            eyebrow: 'DECISION ARCHITECTURE',
            title: 'The 4-Category Sort Protocol',
            description: 'Prepare four designated containers or zones before beginning any zone session.'
          }
        },
        {
          id: 'b-3-2',
          type: 'two-column-list',
          data: {
            col1Title: '1. CHERISH & KEEP',
            col1Items: [
              'Items actively used within the past 6 months.',
              'Items that possess true craftsmanship or emotional resonance.',
              'Items with a defined, permanent home location.'
            ],
            col2Title: '2. DONATE / REHOME',
            col2Items: [
              'High quality objects no longer serving your current life phase.',
              'Duplicate kitchenware, unworn linens, duplicate tools.',
              'Clean, boxed and ready for transfer immediately.'
            ]
          }
        },
        {
          id: 'b-3-3',
          type: 'two-column-list',
          data: {
            col1Title: '3. RECYCLE & DISPOSE',
            col1Items: [
              'Expired toiletries, medicines, and stale pantry staples.',
              'Broken electronics beyond reasonable repair.',
              'Outdated paper records past statutory retention periods.'
            ],
            col2Title: '4. THE 30-DAY PAUSE BOX',
            col2Items: [
              'For items you are indecisive or hesitant about.',
              'Box, label with date, and place in storage.',
              'If unopened after 30 days, rehome without reopening.'
            ]
          }
        },
        {
          id: 'b-3-4',
          type: 'prompt-box',
          data: {
            title: 'Donation Drop-off Plan',
            prompt: 'Name your designated donation center and the exact date/time you will drop off accumulated items:',
            lines: 2
          }
        }
      ]
    },
    // Page 4: 14-Day Master Roadmap Overview
    {
      id: 'p-4',
      pageNumber: 4,
      title: 'The 14-Day Master Roadmap',
      category: 'Overview',
      headerText: 'ROADMAP & MASTER SCHEDULE',
      footerText: 'The 14-Day Home Reset Kit',
      blocks: [
        {
          id: 'b-4-1',
          type: 'section-title',
          data: {
            eyebrow: 'DAILY AT-A-GLANCE',
            title: 'Program Sequence & Milestones',
            description: '14 structured days divided across three rhythmic phases: Thresholds, Sustenance, and Sanctuaries.'
          }
        },
        {
          id: 'b-4-2',
          type: 'table',
          data: {
            headers: ['Day', 'Zone / Focus Area', 'Duration', 'Milestone Check'],
            rows: [
              ['Day 01', 'Entryway & Drop Zones', '45 min', 'Clear first impression'],
              ['Day 02', 'Living Room Surfaces & Audio/Visual', '45 min', 'Visual calm achieved'],
              ['Day 03', 'Bookshelves, Magazines & Paper', '50 min', 'Sorted & recycled'],
              ['Day 04', 'Kitchen Countertops & Sink Zone', '45 min', 'Zero clutter counters'],
              ['Day 05', 'Pantry & Dry Goods Inventory', '60 min', 'Dated & grouped'],
              ['Day 06', 'Refrigerator & Freezer Reset', '45 min', 'Wiped & organized'],
              ['Day 07', 'Kitchen Cookware & Under-Sink', '45 min', 'Phase I completion'],
              ['Day 08', 'Primary Wardrobe: Hang Section', '60 min', 'Breathing room in closet'],
              ['Day 09', 'Wardrobe: Drawers & Folded Goods', '50 min', 'Uniform fold system'],
              ['Day 10', 'Nightstands & Bedside Surfaces', '30 min', 'Restful sleep perimeter'],
              ['Day 11', 'Bathroom Vanities & Medicine Cabinet', '45 min', 'Expired items culled'],
              ['Day 12', 'Shower, Towels & Linen Closet', '45 min', 'Hotel-grade ordering'],
              ['Day 13', 'Home Office & Digital Cable Clutter', '50 min', 'Desk cleared for focus'],
              ['Day 14', 'Whole-Home Final Walkthrough & Polish', '60 min', 'Full Reset Complete']
            ]
          }
        }
      ]
    },
    // Page 5: 14-Day Habit Tracker & Daily Check-In
    {
      id: 'p-5',
      pageNumber: 5,
      title: '14-Day Habit Tracker & Check-in',
      category: 'Tracking & Accountability',
      headerText: 'ACCOUNTABILITY SYSTEM',
      footerText: 'The 14-Day Home Reset Kit',
      blocks: [
        {
          id: 'b-5-1',
          type: 'section-title',
          data: {
            eyebrow: 'DAILY PROGRESS LOG',
            title: 'Ritual Tracker & Daily Sign-off',
            description: 'Check off each 45-minute daily block, mark items rehomed, and score your mental lightness.'
          }
        },
        {
          id: 'b-5-2',
          type: 'tracker-grid',
          data: {
            days: [
              { day: 1, title: 'Entryway', target: '45m' },
              { day: 2, title: 'Living Surfaces', target: '45m' },
              { day: 3, title: 'Media & Books', target: '50m' },
              { day: 4, title: 'Counters', target: '45m' },
              { day: 5, title: 'Pantry', target: '60m' },
              { day: 6, title: 'Fridge', target: '45m' },
              { day: 7, title: 'Cookware', target: '45m' },
              { day: 8, title: 'Wardrobe Hang', target: '60m' },
              { day: 9, title: 'Drawers', target: '50m' },
              { day: 10, title: 'Nightstands', target: '30m' },
              { day: 11, title: 'Bath Vanity', target: '45m' },
              { day: 12, title: 'Linens', target: '45m' },
              { day: 13, title: 'Workspace', target: '50m' },
              { day: 14, title: 'Final Polish', target: '60m' }
            ]
          }
        },
        {
          id: 'b-5-3',
          type: 'note-lines',
          data: {
            title: 'Mid-Point Energy & Observations (Days 1–7)',
            count: 5
          }
        }
      ]
    },
    // Page 6: Day 1 - Entryway & Landing Strip
    {
      id: 'p-6',
      pageNumber: 6,
      title: 'Day 01: The Entryway & Landing Strip',
      category: 'Phase 1: Thresholds',
      headerText: 'DAY 01 • ENTRYWAY RESET',
      footerText: 'The 14-Day Home Reset Kit',
      blocks: [
        {
          id: 'b-6-1',
          type: 'section-title',
          data: {
            eyebrow: 'DAY 01 OF 14 • 45 MINUTES',
            title: 'The Threshold of the Home',
            description: 'Your entryway sets the neurological tone the instant you walk through the door. Create an effortless drop-zone that absorbs daily transit without spilling clutter into the rest of the home.'
          }
        },
        {
          id: 'b-6-2',
          type: 'checklist',
          data: {
            items: [
              { text: 'Clear all coats, scarves, and bags from hooks; keep only current-season essentials (max 2 coats per person).', checked: false },
              { text: 'Audit shoes on the rack; store out-of-season footwear in secondary storage boxes.', checked: false },
              { text: 'Empty the console bowl or key tray: eliminate expired receipts, random coins, and unassigned keys.', checked: false },
              { text: 'Establish a designated inbox tray for incoming physical mail and packages.', checked: false },
              { text: 'Wipe baseboards, clean the front door handle, and shake out or vacuum the entry mat.', checked: false },
              { text: 'Add an intentional sensory anchor: a ceramic catchall, scented reed diffuser, or small framed print.', checked: false }
            ]
          }
        },
        {
          id: 'b-6-3',
          type: 'prompt-box',
          data: {
            title: 'Day 01 Reflection & Notes',
            prompt: 'What was causing the biggest bottleneck in your entryway? What new entry ritual will you adopt?',
            lines: 3
          }
        }
      ]
    },
    // Page 7: Day 2 - Living Room Surfaces & Media
    {
      id: 'p-7',
      pageNumber: 7,
      title: 'Day 02: Living Room Surfaces & Media',
      category: 'Phase 1: Thresholds',
      headerText: 'DAY 02 • LIVING SPACES',
      footerText: 'The 14-Day Home Reset Kit',
      blocks: [
        {
          id: 'b-7-1',
          type: 'section-title',
          data: {
            eyebrow: 'DAY 02 OF 14 • 45 MINUTES',
            title: 'Visual Horizon Reset',
            description: 'Flat surfaces are magnets for transient objects. Clear coffee tables, side consoles, and media units to restore restful sightlines.'
          }
        },
        {
          id: 'b-7-2',
          type: 'checklist',
          data: {
            items: [
              { text: 'Clear coffee table down to bare wood; wipe clean with appropriate wood or stone treatment.', checked: false },
              { text: 'Consolidate remotes and game controllers into a discrete tray or covered felt box.', checked: false },
              { text: 'Tame exposed television and media cables using velcro cable ties or cord management channels.', checked: false },
              { text: 'Inspect sofa cushions: vacuum underneath, fluff pillow inserts, fold throws uniformly.', checked: false },
              { text: 'Curate tabletop styling: apply the “Rule of Threes” (one art book, one ceramic vessel, one candle).', checked: false },
              { text: 'Relocate all items belonging to other rooms into a transit basket for redistribution.', checked: false }
            ]
          }
        },
        {
          id: 'b-7-3',
          type: 'prompt-box',
          data: {
            title: 'Surface Harmony Notes',
            prompt: 'Record items removed that consistently accumulate here. How can their true home be made more accessible?',
            lines: 3
          }
        }
      ]
    },
    // Page 8: Day 3 - Bookshelves, Magazines & Paper
    {
      id: 'p-8',
      pageNumber: 8,
      title: 'Day 03: Bookshelves & Paper Archive',
      category: 'Phase 1: Thresholds',
      headerText: 'DAY 03 • BOOKS & MEDIA',
      footerText: 'The 14-Day Home Reset Kit',
      blocks: [
        {
          id: 'b-8-1',
          type: 'section-title',
          data: {
            eyebrow: 'DAY 03 OF 14 • 50 MINUTES',
            title: 'Curating the Library',
            description: 'Books carry mental weight. Only keep books that inform your current curiosity, hold deep sentiment, or inspire your future.'
          }
        },
        {
          id: 'b-8-2',
          type: 'checklist',
          data: {
            items: [
              { text: 'Cull unread books you no longer realistically intend to read; place in the donation box.', checked: false },
              { text: 'Recycle old magazines, catalogs, travel brochures, and outdated event programs.', checked: false },
              { text: 'Dust each shelf systematically from top to bottom using a microfiber cloth.', checked: false },
              { text: 'Align book spines forward to the front edge of each shelf for an architectural, shadow-free look.', checked: false },
              { text: 'Introduce 15% negative space: leave breathing room on shelves rather than cramming spine-to-spine.', checked: false },
              { text: 'Digitize or file essential paper documents (manuals, warranties, insurance papers).', checked: false }
            ]
          }
        },
        {
          id: 'b-8-3',
          type: 'prompt-box',
          data: {
            title: 'Books Donated / Rehomed Count',
            prompt: 'Estimated books to donate: _______ | Space reclaimed on shelves: ________________________________',
            lines: 2
          }
        }
      ]
    },
    // Page 9: Day 4 - Kitchen Countertops & Prep Zones
    {
      id: 'p-9',
      pageNumber: 9,
      title: 'Day 04: Kitchen Countertops & Prep Zones',
      category: 'Phase 2: Nourishment & Sustenance',
      headerText: 'DAY 04 • KITCHEN COUNTERTOPS',
      footerText: 'The 14-Day Home Reset Kit',
      blocks: [
        {
          id: 'b-9-1',
          type: 'section-title',
          data: {
            eyebrow: 'DAY 04 OF 14 • 45 MINUTES',
            title: 'Zero-Clutter Countertops',
            description: 'A clear kitchen counter invites healthy, calm cooking. Every appliance kept on the counter must justify its daily footprint.'
          }
        },
        {
          id: 'b-9-2',
          type: 'checklist',
          data: {
            items: [
              { text: 'Remove everything from kitchen perimeter counters onto the dining table for objective evaluation.', checked: false },
              { text: 'Retain only daily essential appliances (e.g. espresso maker, electric kettle); stash specialty gadgets in cabinets.', checked: false },
              { text: 'Deep clean backsplash tile, grout lines, and countertop seams with natural degreaser.', checked: false },
              { text: 'Set up an oiled wood or ceramic tray next to cooktop for daily cooking oils, salt cellar, and pepper mill.', checked: false },
              { text: 'Replace worn sponges with minimalist aesthetic brush or neutral Swedish dishcloth.', checked: false },
              { text: 'Establish the “Zero Counter Clutter” evening closing rule for the household.', checked: false }
            ]
          }
        },
        {
          id: 'b-9-3',
          type: 'prompt-box',
          data: {
            title: 'Appliances Rehomed / Stored Away',
            prompt: 'List appliances moved off the counter into cupboards:',
            lines: 3
          }
        }
      ]
    },
    // Page 10: Day 5 - Pantry & Dry Goods Inventory
    {
      id: 'p-10',
      pageNumber: 10,
      title: 'Day 05: Pantry & Dry Goods Inventory',
      category: 'Phase 2: Nourishment & Sustenance',
      headerText: 'DAY 05 • PANTRY SYSTEM',
      footerText: 'The 14-Day Home Reset Kit',
      blocks: [
        {
          id: 'b-10-1',
          type: 'section-title',
          data: {
            eyebrow: 'DAY 05 OF 14 • 60 MINUTES',
            title: 'Pantry Categorization System',
            description: 'Group ingredients by culinary zone rather than random shelving: grains, baking, snacks, canned goods, and condiments.'
          }
        },
        {
          id: 'b-10-2',
          type: 'checklist',
          data: {
            items: [
              { text: 'Empty pantry shelves completely; check expiration dates and compost/recycle all expired foods.', checked: false },
              { text: 'Consolidate multiple opened bags of rice, pasta, or flour into airtight glass or acrylic canisters.', checked: false },
              { text: 'Wipe all shelf liners and vacuum crumb residue from corners.', checked: false },
              { text: 'Group items using uniform storage bins (Grains & Legumes, Baking & Sugars, Savory Snacks, Canned Goods).', checked: false },
              { text: 'Designate an “Eat Me First” basket for opened dry goods approaching shelf life.', checked: false },
              { text: 'Label bin fronts with minimalist waterproof labels or grease pencil.', checked: false }
            ]
          }
        },
        {
          id: 'b-10-3',
          type: 'prompt-box',
          data: {
            title: 'Pantry Restock & Shopping Needs',
            prompt: 'Essential pantry staples needed to restock your baseline supply:',
            lines: 3
          }
        }
      ]
    },
    // Page 11: Day 6 - Refrigerator & Freezer Deep Reset
    {
      id: 'p-11',
      pageNumber: 11,
      title: 'Day 06: Refrigerator & Freezer Reset',
      category: 'Phase 2: Nourishment & Sustenance',
      headerText: 'DAY 06 • REFRIGERATOR SYSTEM',
      footerText: 'The 14-Day Home Reset Kit',
      blocks: [
        {
          id: 'b-11-1',
          type: 'section-title',
          data: {
            eyebrow: 'DAY 06 OF 14 • 45 MINUTES',
            title: 'Perishable Freshness & Flow',
            description: 'A clean, visible refrigerator reduces food waste, prevents forgotten leftovers, and makes cooking an intuitive pleasure.'
          }
        },
        {
          id: 'b-11-2',
          type: 'checklist',
          data: {
            items: [
              { text: 'Remove all condiments from the door; check bottle necks and discard half-empty duplicates.', checked: false },
              { text: 'Wash vegetable and fruit crisper drawers with warm soapy water; line with fresh paper towels.', checked: false },
              { text: 'Wipe glass shelves with vinegar-water solution; sanitize door seals and handles.', checked: false },
              { text: 'Audit freezer: discard items with freezer burn and label mystery frozen containers with date and contents.', checked: false },
              { text: 'Place an open box of baking soda or activated charcoal filter on the middle shelf to absorb odors.', checked: false },
              { text: 'Organize by temperature zone: dairy on cold middle/bottom shelves, condiments in door pockets.', checked: false }
            ]
          }
        },
        {
          id: 'b-11-3',
          type: 'prompt-box',
          data: {
            title: 'Weekly Meal Prep System',
            prompt: 'What simple prep habit will keep your fridge organized every Sunday evening?',
            lines: 3
          }
        }
      ]
    },
    // Page 12: Day 7 - Cookware, Utensils & Under-Sink
    {
      id: 'p-12',
      pageNumber: 12,
      title: 'Day 07: Cookware & Under-Sink Cabinet',
      category: 'Phase 2: Nourishment & Sustenance',
      headerText: 'DAY 07 • COOKWARE & SINK',
      footerText: 'The 14-Day Home Reset Kit',
      blocks: [
        {
          id: 'b-12-1',
          type: 'section-title',
          data: {
            eyebrow: 'DAY 07 OF 14 • 45 MINUTES',
            title: 'The Tools of the Hearth',
            description: 'You only need a few versatile, high-grade pots and pans. Eliminate warped baking sheets, missing-lid containers, and chemical clutter.'
          }
        },
        {
          id: 'b-12-2',
          type: 'checklist',
          data: {
            items: [
              { text: 'Pair every food storage container with its matching lid; recycle all orphan lids and warped bottoms.', checked: false },
              { text: 'Audit cooking utensils: keep maximum 2 spatulas, 2 wooden spoons, 1 whisk, 1 tongs in crock.', checked: false },
              { text: 'Donate duplicate frying pans or dull specialty slicers rarely used in daily cooking.', checked: false },
              { text: 'Empty cabinet beneath the kitchen sink; toss dried-out rags and half-empty cleaning bottles.', checked: false },
              { text: 'Organize cleaning sprays into a two-tier pull-out caddy or unified wire basket.', checked: false },
              { text: 'Phase I Complete: Celebrate clearing all culinary and entry thresholds!', checked: false }
            ]
          }
        },
        {
          id: 'b-12-3',
          type: 'prompt-box',
          data: {
            title: 'Week 1 Milestone Celebration',
            prompt: 'How has the general flow of your kitchen and home felt after 7 consecutive days?',
            lines: 3
          }
        }
      ]
    },
    // Page 13: Day 8 - Primary Wardrobe: The Edit
    {
      id: 'p-13',
      pageNumber: 13,
      title: 'Day 08: Primary Wardrobe: The Edit',
      category: 'Phase 3: Sanctuaries & Rest',
      headerText: 'DAY 08 • WARDROBE EDIT',
      footerText: 'The 14-Day Home Reset Kit',
      blocks: [
        {
          id: 'b-13-1',
          type: 'section-title',
          data: {
            eyebrow: 'DAY 08 OF 14 • 60 MINUTES',
            title: 'Curating the Capsule Closet',
            description: 'Your closet should only contain clothing that fits your current body comfortably, flatters your silhouette, and makes getting dressed a calm joy.'
          }
        },
        {
          id: 'b-13-2',
          type: 'checklist',
          data: {
            items: [
              { text: 'Remove all wire and mismatched plastic hangers; standardize on slim velvet or uniform natural wood hangers.', checked: false },
              { text: 'Review hanging garments: apply the “Would I buy this today?” test to every piece.', checked: false },
              { text: 'Group items by category and color gradient: sleeveless -> short sleeve -> button-ups -> knitwear -> coats.', checked: false },
              { text: 'Move off-season clothing (heavy parkas or resort wear) into breathable canvas under-bed storage.', checked: false },
              { text: 'Pull items needing tailoring, hemming, or dry cleaning into a designated action bag.', checked: false },
              { text: 'Place all confirmed donation garments straight into car boot or donation box.', checked: false }
            ]
          }
        },
        {
          id: 'b-13-3',
          type: 'prompt-box',
          data: {
            title: 'Wardrobe Culling Scorecard',
            prompt: 'Number of hangers freed: _______ | Bags to donate: _______ | Tailoring actions needed: _______',
            lines: 2
          }
        }
      ]
    },
    // Page 14: Day 9 - Wardrobe Drawers & Folded Goods
    {
      id: 'p-14',
      pageNumber: 14,
      title: 'Day 09: Drawers, Knitwear & Undergarments',
      category: 'Phase 3: Sanctuaries & Rest',
      headerText: 'DAY 09 • DRESSER DRAWERS',
      footerText: 'The 14-Day Home Reset Kit',
      blocks: [
        {
          id: 'b-14-1',
          type: 'section-title',
          data: {
            eyebrow: 'DAY 09 OF 14 • 50 MINUTES',
            title: 'The Vertical Fold System',
            description: 'Stacking clothes vertically in stacks causes bottom garments to vanish. File-fold garments vertically so every piece is visible at a glance.'
          }
        },
        {
          id: 'b-14-2',
          type: 'checklist',
          data: {
            items: [
              { text: 'Empty dresser drawers completely; vacuum dust and lint from drawer bottoms.', checked: false },
              { text: 'Cull worn-out socks, stretched elastics, and orphan socks without pairs.', checked: false },
              { text: 'Install drawer dividers or fabric bins to create distinct micro-compartments for undergarments.', checked: false },
              { text: 'Refold t-shirts, loungewear, and activewear using the compact vertical file-fold technique.', checked: false },
              { text: 'Fold delicate sweaters into breathable shelf boxes rather than hanging to avoid shoulder bumps.', checked: false },
              { text: 'Place cedar blocks or lavender sachets inside drawer corners for subtle scent.', checked: false }
            ]
          }
        },
        {
          id: 'b-14-3',
          type: 'prompt-box',
          data: {
            title: 'Dresser Maintenance Commitment',
            prompt: 'What folding rule will you maintain when putting clean laundry away?',
            lines: 3
          }
        }
      ]
    },
    // Page 15: Day 10 - Nightstands & Bedside Horizon
    {
      id: 'p-15',
      pageNumber: 15,
      title: 'Day 10: Nightstands & Sleep Perimeter',
      category: 'Phase 3: Sanctuaries & Rest',
      headerText: 'DAY 10 • SLEEP SANCTUARY',
      footerText: 'The 14-Day Home Reset Kit',
      blocks: [
        {
          id: 'b-15-1',
          type: 'section-title',
          data: {
            eyebrow: 'DAY 10 OF 14 • 30 MINUTES',
            title: 'Nightstand Sanctuary',
            description: 'Your bedside is the last thing you see before sleep and the first upon waking. Keep it free of work papers, device tangle, and clutter.'
          }
        },
        {
          id: 'b-15-2',
          type: 'checklist',
          data: {
            items: [
              { text: 'Strip nightstand tabletop completely; wipe down with soft damp cloth.', checked: false },
              { text: 'Relocate phone charging station at least 5 feet away from your pillows or to an external room.', checked: false },
              { text: 'Restrict tabletop to 3 serene items: bedside lamp, current reading book, and carafe of water.', checked: false },
              { text: 'Clean inside nightstand drawer: remove empty lip balms, loose tissues, and old receipts.', checked: false },
              { text: 'Ensure under-bed zone is completely empty or strictly limited to matching lidded boxes.', checked: false },
              { text: 'Wash pillow protectors and pillowcases in relaxing natural lavender or eucalyptus wash.', checked: false }
            ]
          }
        },
        {
          id: 'b-15-3',
          type: 'prompt-box',
          data: {
            title: 'Sleep Hygiene Checklist',
            prompt: 'List 2 evening micro-habits you will practice to preserve your bedroom tranquility:',
            lines: 3
          }
        }
      ]
    },
    // Page 16: Day 11 - Bathroom Vanity & Medicine Cabinet
    {
      id: 'p-16',
      pageNumber: 16,
      title: 'Day 11: Bathroom Vanity & Medicine Chest',
      category: 'Phase 3: Sanctuaries & Rest',
      headerText: 'DAY 11 • BATHROOM VANITY',
      footerText: 'The 14-Day Home Reset Kit',
      blocks: [
        {
          id: 'b-16-1',
          type: 'section-title',
          data: {
            eyebrow: 'DAY 11 OF 14 • 45 MINUTES',
            title: 'Wellness & Skincare Audit',
            description: 'Expired skincare loses efficacy, and cluttered vanity counters induce morning rush. Curate only what actively benefits your health.'
          }
        },
        {
          id: 'b-16-2',
          type: 'checklist',
          data: {
            items: [
              { text: 'Check the PAO (Period After Opening) symbol on all creams, sunscreens, and serums; discard expired bottles.', checked: false },
              { text: 'Safely dispose of expired prescription and over-the-counter pharmaceuticals per local guidelines.', checked: false },
              { text: 'Cull hotel miniatures, dried-up nail polishes, and duplicate cosmetic brushes.', checked: false },
              { text: 'Wash makeup brushes and cosmetic organizers in lukewarm soapy water; air dry flat.', checked: false },
              { text: 'Wipe vanity mirrors, polished chrome fixtures, and inside shelf corners.', checked: false },
              { text: 'Clear bathroom counter down to only hand soap dispenser and a fresh folded guest towel.', checked: false }
            ]
          }
        },
        {
          id: 'b-16-3',
          type: 'prompt-box',
          data: {
            title: 'Vanity Audit Notes',
            prompt: 'Skincare products culled: _______ | Baseline daily ritual products retained: __________________',
            lines: 2
          }
        }
      ]
    },
    // Page 17: Day 12 - Shower, Towels & Linen Closet
    {
      id: 'p-17',
      pageNumber: 17,
      title: 'Day 12: Shower, Towels & Linen Closet',
      category: 'Phase 3: Sanctuaries & Rest',
      headerText: 'DAY 12 • LINENS & SHOWER',
      footerText: 'The 14-Day Home Reset Kit',
      blocks: [
        {
          id: 'b-17-1',
          type: 'section-title',
          data: {
            eyebrow: 'DAY 12 OF 14 • 45 MINUTES',
            title: 'Hotel-Grade Linen Standard',
            description: 'Streamline your towels and bed sheets down to 2 complete, exceptional sets per bed. Rehome fraying, mismatched linens to animal shelters.'
          }
        },
        {
          id: 'b-17-2',
          type: 'checklist',
          data: {
            items: [
              { text: 'Remove nearly empty shampoo and body wash bottles from the shower ledge; consolidate or discard.', checked: false },
              { text: 'Scrub shower tile grout, descale shower head in warm vinegar bag, and clean glass screen.', checked: false },
              { text: 'Sort all bath sheets and hand towels: discard stained or fraying towels or donate to local shelters.', checked: false },
              { text: 'Fold remaining towel sets using a uniform spa roll or folded hospital edge.', checked: false },
              { text: 'Store sheet sets tucked neatly inside one of their own pillowcases for compact, self-contained storage.', checked: false },
              { text: 'Place a block of natural cedar or scented linen card between clean sheet stacks.', checked: false }
            ]
          }
        },
        {
          id: 'b-17-3',
          type: 'prompt-box',
          data: {
            title: 'Linen Audit Inventory',
            prompt: 'Sets retained per bed: _______ | Towels donated to animal rescue: _______',
            lines: 2
          }
        }
      ]
    },
    // Page 18: Day 13 - Home Office & Digital Cable Clutter
    {
      id: 'p-18',
      pageNumber: 18,
      title: 'Day 13: Home Office & Digital Tech Clutter',
      category: 'Phase 3: Sanctuaries & Rest',
      headerText: 'DAY 13 • WORKSPACE RESET',
      footerText: 'The 14-Day Home Reset Kit',
      blocks: [
        {
          id: 'b-18-1',
          type: 'section-title',
          data: {
            eyebrow: 'DAY 13 OF 14 • 50 MINUTES',
            title: 'The Deep Focus Workspace',
            description: 'Physical desk clutter directly competes for working memory. Create an unencumbered environment that encourages deep, creative flow.'
          }
        },
        {
          id: 'b-18-2',
          type: 'checklist',
          data: {
            items: [
              { text: 'Clear entire desk surface: wipe desktop, clean keyboard, and sanitize monitor screen.', checked: false },
              { text: 'Test every pen and marker; toss all dried-out pens and excess branded promotional pens.', checked: false },
              { text: 'Untangle cable nest under desk: secure cords using an under-desk cable tray or velcro ties.', checked: false },
              { text: 'Recycle mysterious outdated cables, ancient chargers, and disconnected adapter dongles.', checked: false },
              { text: 'Shred obsolete physical financial papers past 7 years and scan necessary active receipts.', checked: false },
              { text: 'Establish the “End-of-Workday Desk Clear” ritual to signal the transition to personal evening time.', checked: false }
            ]
          }
        },
        {
          id: 'b-18-3',
          type: 'prompt-box',
          data: {
            title: 'Workspace Clarity Benchmark',
            prompt: 'How does your focus change when sitting down to a cleared, cable-managed desk?',
            lines: 3
          }
        }
      ]
    },
    // Page 19: Day 14 - Whole-Home Polish & Walkthrough
    {
      id: 'p-19',
      pageNumber: 19,
      title: 'Day 14: Whole-Home Polish & Walkthrough',
      category: 'Phase 3: Sanctuaries & Rest',
      headerText: 'DAY 14 • WHOLE-HOME COMPLETION',
      footerText: 'The 14-Day Home Reset Kit',
      blocks: [
        {
          id: 'b-19-1',
          type: 'section-title',
          data: {
            eyebrow: 'DAY 14 OF 14 • 60 MINUTES',
            title: 'The Final Walkthrough & Polish',
            description: 'Walk through your entire home with fresh eyes. Notice how energy moves, admire reclaimed corners, and finalize the transition.'
          }
        },
        {
          id: 'b-19-2',
          type: 'checklist',
          data: {
            items: [
              { text: 'Load all collected donation boxes and bags into your car for scheduled delivery.', checked: false },
              { text: 'Take out all recycling bins and empty household waste baskets.', checked: false },
              { text: 'Open all windows for 20 minutes to exchange stale indoor air with fresh outdoor circulation.', checked: false },
              { text: 'Light a natural beeswax candle or diffuse grounding essential oils (cedarwood, bergamot, frankincense).', checked: false },
              { text: 'Take celebratory "After" photographs of your key reset zones (Entryway, Counters, Closets).', checked: false },
              { text: 'Sign off your 14-day journey in the Completion Certificate on Page 22!', checked: false }
            ]
          }
        },
        {
          id: 'b-19-3',
          type: 'prompt-box',
          data: {
            title: 'Final Reset Reflections',
            prompt: 'What was your biggest discovery during these 14 days? Which area brought you the most immediate relief?',
            lines: 4
          }
        }
      ]
    },
    // Page 20: 30-Day Declutter Maintenance Tracker
    {
      id: 'p-20',
      pageNumber: 20,
      title: '30-Day Declutter Maintenance System',
      category: 'Long-Term Maintenance',
      headerText: 'MAINTENANCE & SUSTAINABILITY',
      footerText: 'The 14-Day Home Reset Kit',
      blocks: [
        {
          id: 'b-20-1',
          type: 'section-title',
          data: {
            eyebrow: 'LONG-TERM SUSTAINABILITY',
            title: 'The 30-Day Reset Protocol',
            description: 'Keep clutter from slowly creeping back into your home through simple 5-minute morning and evening reset rituals.'
          }
        },
        {
          id: 'b-20-2',
          type: 'two-column-list',
          data: {
            col1Title: 'THE 5-MINUTE MORNING RESET',
            col1Items: [
              'Make bed smoothly immediately upon rising.',
              'Empty dishwasher or dish rack so sink remains empty.',
              'Wipe down bathroom vanity counter with hand towel.',
              'Open bedroom blinds to welcome natural morning light.'
            ],
            col2Title: 'THE 10-MINUTE EVENING RESET',
            col2Items: [
              'Zero-countertop kitchen check before turning off lights.',
              '5-minute family “tidy basket” run through living room.',
              'Return keys, mail, and work bags to entryway stations.',
              'Plug in devices outside of the bedroom sanctuary.'
            ]
          }
        },
        {
          id: 'b-20-3',
          type: 'note-lines',
          data: {
            title: 'Personalized Maintenance Rules for My Household',
            count: 5
          }
        }
      ]
    },
    // Page 21: Notes, Observations & Ideas Journal
    {
      id: 'p-21',
      pageNumber: 21,
      title: 'Notes, Layout Ideas & Project Queue',
      category: 'Design & Living Journal',
      headerText: 'HOME LIVING JOURNAL',
      footerText: 'The 14-Day Home Reset Kit',
      blocks: [
        {
          id: 'b-21-1',
          type: 'section-title',
          data: {
            eyebrow: 'FUTURE ENHANCEMENTS',
            title: 'Curated Home Wishlist & Projects',
            description: 'Now that extraneous clutter has been removed, record intentional upgrades, paint colors, or artisan pieces you wish to integrate over time.'
          }
        },
        {
          id: 'b-21-2',
          type: 'note-lines',
          data: {
            title: 'Space Layout Notes & Architectural Observations',
            count: 7
          }
        },
        {
          id: 'b-21-3',
          type: 'prompt-box',
          data: {
            title: 'The "One-In, One-Out" Rule Agreement',
            prompt: 'Before bringing any new home accessory, clothing piece, or appliance into this space, I commit to: __________________________________________________________________________________',
            lines: 2
          }
        }
      ]
    },
    // Page 22: Certificate of Completion & Closing Manifesto
    {
      id: 'p-22',
      pageNumber: 22,
      title: 'Certificate of Reset Completion',
      category: 'Milestone & Sign-off',
      headerText: 'SELVOF LIVING SYSTEMS • COMPLETION',
      footerText: 'The 14-Day Home Reset Kit • Official Studio Certificate',
      blocks: [
        {
          id: 'b-22-1',
          type: 'section-title',
          data: {
            eyebrow: 'SELVOF LIVING CERTIFICATION',
            title: 'Certificate of Space Restoration',
            description: 'This document certifies that the household listed below has successfully completed the 14-Day SELVOF Home Reset Kit.'
          }
        },
        {
          id: 'b-22-2',
          type: 'prompt-box',
          data: {
            title: 'Official Completion Record',
            prompt: 'Home Residence / Household Name: _____________________________________________________\nDate of Completion: _________________________ | Verified By: ________________________________\nTotal Estimated Items Rehomed / Recycled: _____________________________________________',
            lines: 4
          }
        },
        {
          id: 'b-22-3',
          type: 'quote',
          data: {
            quote: '“Have nothing in your houses that you do not know to be useful or believe to be beautiful.”',
            author: 'William Morris • Curated by SELVOF'
          }
        },
        {
          id: 'b-22-4',
          type: 'paragraph',
          data: {
            content: 'Thank you for investing your time and intention into restoring your home. May your renewed spaces continue to nourish your peace, creativity, and daily life. — Studio SELVOF'
          }
        }
      ]
    }
  ]
};
