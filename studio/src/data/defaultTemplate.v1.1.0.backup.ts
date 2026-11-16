import { StudioProduct, StudioPage } from '@/types/studio';

export const homeResetKitTemplate: StudioProduct = {
  id: 'selvof-home-reset-kit-v1',
  title: 'The 14-Day Home Reset Kit',
  subtitle: 'A Guided 14-Day System for Intentional Space, Decluttering Clarity, and Everyday Calm',
  description: 'An editorial 22-page print-ready workbook and decluttering system engineered to bring practical, beginner-friendly home organization to busy individuals through manageable daily tasks.',
  category: 'Lifestyle & Living Systems',
  format: 'a4',
  version: '1.1.0',
  createdAt: '2026-11-14T00:00:00Z',
  updatedAt: '2026-11-14T13:30:00Z',
  versionsHistory: [
    {
      id: 'v1.1.0',
      version: '1.1.0',
      savedAt: '2026-11-14T13:30:00Z',
      note: 'V1.1 Content Refinement: Added quick-start rules, sorting supplies checklist, phase badges, structured reflection prompts, clothing culling filter, micro-zone boundaries, room sketch grid, needs vs wants table, and expanded writing spaces.'
    },
    {
      id: 'v1.0.0',
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
            subtitle: 'A Guided 14-Day System for Intentional Space, Decluttering Clarity, and Everyday Calm',
            author: 'STUDIO SELVOF • PRINT & DIGITAL EDITION',
            meta: 'Format: A4 / US Letter • Print-Ready • Interactive & Fillable'
          }
        }
      ]
    },
    // Page 2: Welcome & Philosophy + Rules of the Reset
    {
      id: 'p-2',
      pageNumber: 2,
      title: 'Quick-Start & Philosophy of Intentional Space',
      category: 'Foundation & Principles',
      headerText: 'SELVOF STUDIO • FOUNDATIONS',
      footerText: 'The 14-Day Home Reset Kit',
      blocks: [
        {
          id: 'b-2-1',
          type: 'section-title',
          data: {
            eyebrow: 'PART I: FOUNDATION & QUICK-START',
            title: 'A Home That Restores You',
            description: 'This program helps busy individuals organize their homes through realistic 30 to 60-minute daily steps without exhaustion or weekend overwhelm.'
          }
        },
        {
          id: 'b-2-2',
          type: 'two-column-list',
          data: {
            col1Title: 'THE 3 GOLDEN RULES OF THE RESET',
            col1Items: [
              '1. Set a Strict Timer: Work only for your allotted time (30–60m). Stop when the timer rings.',
              '2. Contain the Scope: Never pull out more items than you can sort and put away within your session.',
              '3. Respect Decision Limits: If you hesitate on an item for over 30 seconds, place it in the Pause Box.'
            ],
            col2Title: 'QUICK-START CHECKLIST',
            col2Items: [
              'Take a quick "Before" smartphone photo of your designated zone before starting each day.',
              'Keep zero guilt: your home serves your current life, not your past aspirations or unneeded gifts.',
              'Celebrate completing each day by checking off your progress log on Page 05.'
            ]
          }
        },
        {
          id: 'b-2-3',
          type: 'prompt-box',
          data: {
            title: 'Your Reset Intention',
            prompt: 'How do you want your home to feel at the end of these 14 days? (e.g. calm, easy to clean, welcoming):',
            lines: 3
          }
        }
      ]
    },
    // Page 3: The 4-Box Rule & Sorting Supplies Checklist
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
            description: 'Before touching a single drawer, designate four distinct stations using cardboard boxes, tote bags, or marked laundry hampers.'
          }
        },
        {
          id: 'b-3-2',
          type: 'two-column-list',
          data: {
            col1Title: '1. CHERISH & KEEP',
            col1Items: [
              'Actively used in the past 6 months.',
              'Brings true utility or genuine joy.',
              'Must have an assigned home location.'
            ],
            col2Title: '2. DONATE / REHOME',
            col2Items: [
              'Good condition, but no longer serving you.',
              'Duplicate items, unworn clothes, spare tools.',
              'Clean and ready for local community handoff.'
            ]
          }
        },
        {
          id: 'b-3-3',
          type: 'two-column-list',
          data: {
            col1Title: '3. RECYCLE & DISPOSE',
            col1Items: [
              'Broken beyond practical repair.',
              'Expired toiletries, food, and household chemicals.',
              'Outdated receipts past tax/warranty needs.'
            ],
            col2Title: '4. THE 30-DAY PAUSE BOX',
            col2Items: [
              'For sentimental or uncertain items.',
              'Tape box closed, label with date 30 days ahead.',
              'If untouched after 30 days, donate without reopening.'
            ]
          }
        },
        {
          id: 'b-3-4',
          type: 'checklist',
          data: {
            items: [
              { text: 'Preparation Checklist: 4 cardboard boxes / tote bags ready.', checked: false },
              { text: 'Permanent black marker & masking tape for quick labeling.', checked: false },
              { text: 'One heavy-duty trash bag and one paper recycling bag.', checked: false },
              { text: 'Microfiber cloth and natural all-purpose surface spray on hand.', checked: false }
            ]
          }
        },
        {
          id: 'b-3-5',
          type: 'prompt-box',
          data: {
            title: 'Donation Drop-off Commitment',
            prompt: 'Designated Donation Location: _______________________ | Drop-off Target Date: ___________________',
            lines: 1
          }
        }
      ]
    },
    // Page 4: 14-Day Master Roadmap with Phase Badges
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
            title: 'Program Sequence & Phases',
            description: '14 structured days divided across three progressive phases engineered to build confidence and prevent fatigue.'
          }
        },
        {
          id: 'b-4-2',
          type: 'table',
          data: {
            headers: ['Day', 'Phase', 'Zone / Focus Area', 'Duration', 'Milestone Check'],
            rows: [
              ['Day 01', 'Phase 1: Thresholds', 'Entryway & Drop Zones', '45 min', 'Effortless arrival home'],
              ['Day 02', 'Phase 1: Thresholds', 'Living Room Surfaces & Audio/Visual', '45 min', 'Visual calm on flat surfaces'],
              ['Day 03', 'Phase 1: Thresholds', 'Bookshelves, Magazines & Paper', '50 min', 'Sorted & recycled archive'],
              ['Day 04', 'Phase 2: Sustenance', 'Kitchen Countertops & Sink Zone', '45 min', 'Zero-clutter food prep area'],
              ['Day 05', 'Phase 2: Sustenance', 'Pantry & Dry Goods Inventory', '60 min', 'Grouped by meal categories'],
              ['Day 06', 'Phase 2: Sustenance', 'Refrigerator & Freezer Reset', '45 min', 'Visible food, zero waste'],
              ['Day 07', 'Phase 2: Sustenance', 'Kitchen Cookware & Under-Sink', '45 min', 'Week 1 Halfway Milestone!'],
              ['Day 08', 'Phase 3: Sanctuaries', 'Primary Wardrobe: Hang Section', '60 min', 'Closet breathing room'],
              ['Day 09', 'Phase 3: Sanctuaries', 'Wardrobe: Drawers & Folded Goods', '50 min', 'Vertical fold visibility'],
              ['Day 10', 'Phase 3: Sanctuaries', 'Nightstands & Bedside Surfaces', '30 min', 'Restful sleep perimeter'],
              ['Day 11', 'Phase 3: Sanctuaries', 'Bathroom Vanity & Medicine Cabinet', '45 min', 'Expired items safely culled'],
              ['Day 12', 'Phase 3: Sanctuaries', 'Shower, Towels & Linen Closet', '45 min', 'Hotel-grade linen sets'],
              ['Day 13', 'Phase 3: Sanctuaries', 'Home Office & Digital Cable Clutter', '50 min', 'Clear desk for deep focus'],
              ['Day 14', 'Phase 3: Sanctuaries', 'Whole-Home Final Polish & Walkthrough', '60 min', 'Full 14-Day Reset Complete!']
            ]
          }
        }
      ]
    },
    // Page 5: 14-Day Habit Tracker with Structured Reflection
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
            title: 'Habit Tracker & Daily Sign-off',
            description: 'Check off each daily session as you finish. Track items rehomed and celebrate small consistent wins.'
          }
        },
        {
          id: 'b-5-2',
          type: 'tracker-grid',
          data: {
            days: [
              { day: 1, title: 'Entryway', target: '45m' },
              { day: 2, title: 'Living Room', target: '45m' },
              { day: 3, title: 'Books/Paper', target: '50m' },
              { day: 4, title: 'Counters', target: '45m' },
              { day: 5, title: 'Pantry', target: '60m' },
              { day: 6, title: 'Fridge', target: '45m' },
              { day: 7, title: 'Cookware', target: '45m' },
              { day: 8, title: 'Closet Hang', target: '60m' },
              { day: 9, title: 'Drawers', target: '50m' },
              { day: 10, title: 'Nightstands', target: '30m' },
              { day: 11, title: 'Vanity', target: '45m' },
              { day: 12, title: 'Linens', target: '45m' },
              { day: 13, title: 'Workspace', target: '50m' },
              { day: 14, title: 'Final Polish', target: '60m' }
            ]
          }
        },
        {
          id: 'b-5-3',
          type: 'prompt-box',
          data: {
            title: 'Mid-Point Check-In (End of Day 7)',
            prompt: 'Week 1 Biggest Win: _____________________________________________________________________\nEstimated items rehomed so far: ________ | One habit I want to keep: ______________________',
            lines: 2
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
            description: 'Your entryway creates your first impression when arriving home. Clear transit bottlenecks so entering the house feels immediately calming.'
          }
        },
        {
          id: 'b-6-2',
          type: 'checklist',
          data: {
            items: [
              { text: 'Clear all coats, scarves, and bags from hooks; limit active hooks to max 2 items per person.', checked: false },
              { text: 'Audit shoes on the rack; place out-of-season footwear in secondary storage or closets.', checked: false },
              { text: 'Empty the key bowl/console: throw away expired receipts, loose scraps, and unassigned keys.', checked: false },
              { text: 'Designate one simple tray or basket strictly for incoming mail and packages.', checked: false },
              { text: 'Shake out or vacuum the entry mat and wipe down the interior door handle.', checked: false },
              { text: 'Micro-Zone Rule: If short on time, focus exclusively on the coat hooks and shoes today.', checked: false }
            ]
          }
        },
        {
          id: 'b-6-3',
          type: 'prompt-box',
          data: {
            title: 'Day 01 Reflection & Notes',
            prompt: 'What was creating the main pile-up by the front door? (e.g. junk mail, sports gear, shoes):',
            lines: 3
          }
        }
      ]
    },
    // Page 7: Day 2 - Living Room Surfaces (Clearing Before Styling)
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
            description: 'Horizontal surfaces attract stray items. Prioritize clearing every surface down to bare surfaces first; decorative styling is strictly secondary.'
          }
        },
        {
          id: 'b-7-2',
          type: 'checklist',
          data: {
            items: [
              { text: 'Clear coffee table and side consoles completely down to the surface and wipe clean.', checked: false },
              { text: 'Transit Basket: Gather items belonging to other rooms and return them to their home zones.', checked: false },
              { text: 'Consolidate remotes and controllers into one dedicated tray or shallow drawer.', checked: false },
              { text: 'Tame loose media cords behind the TV using simple velcro ties or twist ties.', checked: false },
              { text: 'Fluff sofa cushions, fold throws neatly, and vacuum obvious crumbs under cushions.', checked: false },
              { text: 'Optional Styling Only: Place max 1 candle or 1 book back on the coffee table if time permits.', checked: false }
            ]
          }
        },
        {
          id: 'b-7-3',
          type: 'prompt-box',
          data: {
            title: 'Surface Harmony Notes',
            prompt: 'Which living room surface tends to accumulate clutter fastest, and where do those items belong?',
            lines: 3
          }
        }
      ]
    },
    // Page 8: Day 3 - Bookshelves & Paper Archive (Time Boundary Rule)
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
            title: 'Curating Books & Paper Traps',
            description: 'Paper sorting easily becomes a time trap. Follow our strict paper rule: sort into categories today; do NOT stop to read old articles or nostalgic documents.'
          }
        },
        {
          id: 'b-8-2',
          type: 'checklist',
          data: {
            items: [
              { text: 'Cull unread books you genuinely have no plan to read; add them to your donation box.', checked: false },
              { text: 'Recycle expired magazines, promotional flyers, old catalogs, and outdated takeout menus.', checked: false },
              { text: 'Paper Boundary Rule: Sort loose paper strictly into two folders: "Action Needed" and "To File".', checked: false },
              { text: 'Wipe dust from bookshelf surfaces from top shelf downward with a microfiber cloth.', checked: false },
              { text: 'Align book spines forward to create a clean, intentional line with 10% breathing space on shelves.', checked: false },
              { text: 'Stop at 50 minutes: Do not delve into deep archives today. Protect your momentum.', checked: false }
            ]
          }
        },
        {
          id: 'b-8-3',
          type: 'prompt-box',
          data: {
            title: 'Books & Paper Triage Scorecard',
            prompt: 'Books ready to donate: _______ | Bags of paper recycled: _______ | Action items noted: ________',
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
            description: 'A clear countertop makes everyday cooking faster and less stressful. Keep only appliances you use every single day on the open counters.'
          }
        },
        {
          id: 'b-9-2',
          type: 'checklist',
          data: {
            items: [
              { text: 'Remove everything from the perimeter counters onto the table to see the bare space.', checked: false },
              { text: 'Stow secondary appliances (blenders, toasters, specialty gadgets) inside lower cupboards.', checked: false },
              { text: 'Wipe countertops and backsplash tile thoroughly with warm soapy water or surface cleaner.', checked: false },
              { text: 'Place daily cooking oil, salt, and pepper neatly together on one small ceramic plate or tray.', checked: false },
              { text: 'Toss worn kitchen sponges; replace with a clean sponge or washable cotton dishcloth.', checked: false },
              { text: 'Adopt the "Zero-Clutter Sink" evening closing rule: run dishes before going to sleep.', checked: false }
            ]
          }
        },
        {
          id: 'b-9-3',
          type: 'prompt-box',
          data: {
            title: 'Appliances Relocated to Cupboards',
            prompt: 'Appliances moved off the counter into storage: __________________________________________',
            lines: 2
          }
        }
      ]
    },
    // Page 10: Day 5 - Pantry (Containers Optional Guidance)
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
            description: 'Organize by category, not aesthetics. Matching glass canisters are completely optional; grouping like foods together in existing boxes or baskets delivers 90% of the benefit.'
          }
        },
        {
          id: 'b-10-2',
          type: 'checklist',
          data: {
            items: [
              { text: 'Empty one shelf at a time; check expiration dates and safely compost or discard expired items.', checked: false },
              { text: 'Group dry goods by category: Grains & Pasta, Canned Goods, Breakfast & Oats, Snacks, Baking.', checked: false },
              { text: 'Use any existing shoeboxes, plastic baskets, or bins to keep small pouches and snack bags upright.', checked: false },
              { text: 'Establish an "Eat Me First" bin or front row for opened items close to expiring.', checked: false },
              { text: 'Wipe shelves down with a damp cloth and vacuum stray crumbs from shelf corners.', checked: false },
              { text: 'Micro-Zone Option: If your pantry is large, reset just the top 2 shelves today and stop at 60m.', checked: false }
            ]
          }
        },
        {
          id: 'b-10-3',
          type: 'prompt-box',
          data: {
            title: 'Pantry Staples Restock Needs',
            prompt: 'Staples to replenish on your next grocery run: _________________________________________',
            lines: 2
          }
        }
      ]
    },
    // Page 11: Day 6 - Refrigerator & Freezer (Meal Planning Integration)
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
            title: 'Perishable Freshness & Inventory',
            description: 'A clean refrigerator eliminates food waste and makes weekday meal prep effortless. Use your inventory today to plan upcoming dinners.'
          }
        },
        {
          id: 'b-11-2',
          type: 'checklist',
          data: {
            items: [
              { text: 'Pull out door condiments: toss expired dressings and combine duplicate half-empty jars.', checked: false },
              { text: 'Empty crisper drawers; wash with warm dish soap, dry thoroughly, and line with a clean cloth.', checked: false },
              { text: 'Wipe glass shelves with a warm water and mild vinegar spray; sanitize the door handle.', checked: false },
              { text: 'Inspect freezer: discard freezer-burned packages; label mystery containers with contents and date.', checked: false },
              { text: 'Place an open small dish of baking soda on the middle shelf to neutralize odors naturally.', checked: false },
              { text: 'Group food intuitively: leftovers on top shelf, raw ingredients lower down, condiments in doors.', checked: false }
            ]
          }
        },
        {
          id: 'b-11-3',
          type: 'prompt-box',
          data: {
            title: 'Freeze & Use-First Meal Plan',
            prompt: '2 meals I will cook this week using ingredients discovered today in my fridge/freezer:\n1. ____________________________________________________________________________________\n2. ____________________________________________________________________________________',
            lines: 2
          }
        }
      ]
    },
    // Page 12: Day 7 - Cookware & Under-Sink (Week 1 Milestone)
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
            title: 'Culinary Tools & Week 1 Milestone',
            description: 'You only need a core set of reliable cookware. Match food storage containers and declutter cleaning bottles beneath the sink.'
          }
        },
        {
          id: 'b-12-2',
          type: 'checklist',
          data: {
            items: [
              { text: 'Container Match Challenge: Match every container with its lid; recycle orphan lids and warped tubs.', checked: false },
              { text: 'Audit cooking utensils: keep only 1–2 spatulas, wooden spoons, and tongs in your countertop crock.', checked: false },
              { text: 'Donate duplicate or scratched pans that you avoid using during daily meal prep.', checked: false },
              { text: 'Empty cabinet under the sink: toss dried sponges, empty bottles, and ragged cleaning cloths.', checked: false },
              { text: 'Group under-sink sprays into a simple caddy or plastic tub so you can slide them out easily.', checked: false },
              { text: 'Week 1 Complete: You have officially completed 50% of the Home Reset! Celebrate your win.', checked: false }
            ]
          }
        },
        {
          id: 'b-12-3',
          type: 'prompt-box',
          data: {
            title: 'Week 1 Milestone Celebration & Reward',
            prompt: 'How I will reward myself this evening for completing Week 1 (e.g. favorite tea, reading, relaxing bath):\n______________________________________________________________________________________',
            lines: 2
          }
        }
      ]
    },
    // Page 13: Day 8 - Closet (Three Quick Discards Filter)
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
            title: 'Curating the Hanging Wardrobe',
            description: 'Avoid decision fatigue by applying the "Three Quick Discards" filter first: cull damaged, ill-fitting, or scratchy clothes before debating favorites.'
          }
        },
        {
          id: 'b-13-2',
          type: 'two-column-list',
          data: {
            col1Title: 'THE 3 QUICK DISCARDS FILTER',
            col1Items: [
              '1. Damaged or Worn Out: Stained collars, pilled knitwear, broken zippers beyond worth of repair.',
              '2. Physical Discomfort: Scratchy fabrics, pants that pinch, or shirts that pull uncomfortably.',
              '3. Wrong Season / Size: Store out-of-season clothes away so only current wearable items hang here.'
            ],
            col2Title: 'WARDROBE ACTION STEPS',
            col2Items: [
              'Review garments left-to-right; keep only clothes you feel good wearing this week.',
              'Group hanging items by category: Sleeveless -> Shirts -> Knitwear -> Jackets -> Pants.',
              'Place all confirmed donations directly into a box or car trunk right now so they do not creep back.'
            ]
          }
        },
        {
          id: 'b-13-3',
          type: 'prompt-box',
          data: {
            title: 'Wardrobe Tally & Stopping Rule',
            prompt: 'Garments rehomed today: _______ | Hangers freed: _______ | (Stop when 60m rings; do drawers tomorrow!)',
            lines: 1
          }
        }
      ]
    },
    // Page 14: Day 9 - Wardrobe Drawers & Vertical Folding
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
            description: 'Stacking clothes vertically creates hidden items at the bottom. Fold garments into upright rectangles so every piece is visible at a single glance.'
          }
        },
        {
          id: 'b-14-2',
          type: 'checklist',
          data: {
            items: [
              { text: 'Empty dresser drawers completely; wipe down inside corners or vacuum loose lint.', checked: false },
              { text: 'Sock & Underwear Audit: Cull stretched elastics, thin socks, and single socks missing pairs.', checked: false },
              { text: 'Use simple shoe boxes or fabric dividers to separate socks, undergarments, and belts.', checked: false },
              { text: 'File-fold t-shirts, workout clothes, and loungewear upright like files in a filing cabinet.', checked: false },
              { text: 'Fold heavy knit sweaters loosely on open shelves rather than hanging to protect shoulder shape.', checked: false },
              { text: 'Micro-Zone Rule: If short on time, organize your top two everyday drawers and stop at 50 min.', checked: false }
            ]
          }
        },
        {
          id: 'b-14-3',
          type: 'prompt-box',
          data: {
            title: 'Drawer Maintenance Rule',
            prompt: 'My simple rule when putting away fresh laundry: _________________________________________',
            lines: 2
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
            description: 'A lighter 30-minute day. Your bedside is the last thing you see at night and the first upon waking. Remove work clutter, cords, and visual distraction.'
          }
        },
        {
          id: 'b-15-2',
          type: 'checklist',
          data: {
            items: [
              { text: 'Clear nightstand tabletop completely; wipe down with a soft damp microfiber cloth.', checked: false },
              { text: 'Keep tabletop strictly to 3 calming essentials: bedside lamp, current book, and water glass.', checked: false },
              { text: 'Empty nightstand drawer: discard dried lip balm, scrap receipts, old pens, and trash.', checked: false },
              { text: 'Phone Distance Rule: Set phone charger across the room or outside bedroom to promote restful sleep.', checked: false },
              { text: 'Check under the bed: remove any stray shoes, dust balls, or random items stored without purpose.', checked: false },
              { text: 'Put on fresh clean pillowcases for a rejuvenating night of rest.', checked: false }
            ]
          }
        },
        {
          id: 'b-15-3',
          type: 'prompt-box',
          data: {
            title: 'Evening Calm Reflection',
            prompt: 'One evening wind-down micro-habit I will adopt to protect my sleep sanctuary:\n______________________________________________________________________________________',
            lines: 2
          }
        }
      ]
    },
    // Page 16: Day 11 - Bathroom Vanity (Safe Medication Guidance)
    {
      id: 'p-16',
      pageNumber: 16,
      title: 'Day 11: Bathroom Vanity & Medicine Cabinet',
      category: 'Phase 3: Sanctuaries & Rest',
      headerText: 'DAY 11 • BATHROOM VANITY',
      footerText: 'The 14-Day Home Reset Kit',
      blocks: [
        {
          id: 'b-16-1',
          type: 'section-title',
          data: {
            eyebrow: 'DAY 11 OF 14 • 45 MINUTES',
            title: 'Personal Care & Wellness Audit',
            description: 'Cull expired products that take up valuable bathroom space. Always dispose of unused medications according to local environmental and pharmacy guidance.'
          }
        },
        {
          id: 'b-16-2',
          type: 'checklist',
          data: {
            items: [
              { text: 'Check the open-jar symbol on sunscreens, creams, and cosmetics; discard anything expired.', checked: false },
              { text: 'Medication Safety: Pull expired medications into a bag for return to your local pharmacy take-back drop.', checked: false },
              { text: 'Never flush leftover medications down the toilet or drain unless explicitly directed on packaging.', checked: false },
              { text: 'Cull half-used hotel bottles, dried mascara, and hair accessories that have lost elasticity.', checked: false },
              { text: 'Wash makeup organizers or toothbrush holder with warm water and soap; wipe mirror clear.', checked: false },
              { text: 'Clear vanity counter down to only daily hand soap and a fresh hand towel.', checked: false }
            ]
          }
        },
        {
          id: 'b-16-3',
          type: 'prompt-box',
          data: {
            title: 'Vanity Audit Tally',
            prompt: 'Expired products culled: _______ | Medications set aside for pharmacy drop-off: _______',
            lines: 1
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
            description: 'Streamline towels and bed sheets down to 2 quality, comfortable sets per bed. Rehome fraying, mismatched linens to local animal shelters.'
          }
        },
        {
          id: 'b-17-2',
          type: 'checklist',
          data: {
            items: [
              { text: 'Remove nearly empty shampoo and shower wash bottles; consolidate or recycle empties.', checked: false },
              { text: 'Quick scrub of shower floor, grout seams, and soap ledges with natural cleaner.', checked: false },
              { text: 'Audit bath towels: keep 2 bath towels per person; donate frayed or worn towels to animal rescue.', checked: false },
              { text: 'Fold bath towels using a uniform spa roll or clean hospital fold for neat stacking.', checked: false },
              { text: 'Pillowcase Trick: Store each bed sheet set tucked neatly inside one of its matching pillowcases.', checked: false },
              { text: 'Place a small bar of soap or scented card inside your linen shelves for subtle freshness.', checked: false }
            ]
          }
        },
        {
          id: 'b-17-3',
          type: 'prompt-box',
          data: {
            title: 'Linen Audit Inventory',
            prompt: 'Sheet sets retained: _______ | Towels set aside to donate to animal shelter: _______',
            lines: 1
          }
        }
      ]
    },
    // Page 18: Day 13 - Home Office (Safe Document Handling)
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
            title: 'The Focused Workspace',
            description: 'Physical desk clutter directly drains focus. Clear your workspace and follow safe document retention practices without risking important records.'
          }
        },
        {
          id: 'b-18-2',
          type: 'checklist',
          data: {
            items: [
              { text: 'Clear desktop surface completely: wipe screen, keyboard, and mousepad with safe electronics wipe.', checked: false },
              { text: 'Pen Test: Test every pen and highlighter; toss dried-out markers and excess promotional pens.', checked: false },
              { text: 'Cable Declutter: Untangle under-desk cord nest; bundle cords with velcro strips or simple twist ties.', checked: false },
              { text: 'Safely recycle outdated cables and mystery power bricks at a certified e-waste drop.', checked: false },
              { text: 'Safe Document Guidance: Shred sensitive personal junk mail; retain tax/legal papers per your local guidelines.', checked: false },
              { text: 'End-of-Day Shutdown Ritual: Commit to clearing your desk surface at the end of each workday.', checked: false }
            ]
          }
        },
        {
          id: 'b-18-3',
          type: 'prompt-box',
          data: {
            title: 'Workspace Clarity Benchmark',
            prompt: 'How does your focus improve when sitting down to a cleared, cable-managed desk?\n______________________________________________________________________________________',
            lines: 2
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
            description: 'Walk through your entire home with fresh eyes. Enjoy the reclaimed space, load donation items, and officially transition into your long-term maintenance system.'
          }
        },
        {
          id: 'b-19-2',
          type: 'checklist',
          data: {
            items: [
              { text: 'Load all accumulated donation boxes and bags into your car trunk for scheduled drop-off.', checked: false },
              { text: 'Empty household recycling bins and take all bagged rubbish out to disposal.', checked: false },
              { text: 'Open windows in each room for 20 minutes to exchange stale air with crisp fresh ventilation.', checked: false },
              { text: 'Take celebratory "After" photos of your reset zones (Entryway, Counters, Closets, Desk).', checked: false },
              { text: 'Turn to Page 20 to review your 30-Day Long-Term Maintenance System and monthly checklist.', checked: false },
              { text: 'Turn to Page 22 and proudly sign your official Certificate of Completion!', checked: false }
            ]
          }
        },
        {
          id: 'b-19-3',
          type: 'prompt-box',
          data: {
            title: 'Final Reset Reflections',
            prompt: 'Which area brought you the most immediate sense of relief?\n______________________________________________________________________________________\nWhat is the single best change you will protect moving forward?\n______________________________________________________________________________________',
            lines: 3
          }
        }
      ]
    },
    // Page 20: 30-Day Declutter Maintenance + Monthly Checklist
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
            title: 'Daily & Monthly Maintenance Protocol',
            description: 'Prevent clutter from creeping back through low-effort 5-minute morning and evening rituals, plus a simple monthly tune-up.'
          }
        },
        {
          id: 'b-20-2',
          type: 'two-column-list',
          data: {
            col1Title: '5-MINUTE MORNING RESET',
            col1Items: [
              'Make bed smoothly immediately upon waking.',
              'Empty dishwasher so clean sink receives daytime dishes.',
              'Quick hand-towel wipe of bathroom counter.'
            ],
            col2Title: '10-MINUTE EVENING RESET',
            col2Items: [
              'Clear kitchen countertops down to zero dishes.',
              'Return keys, bags, and mail to entryway station.',
              'Plug mobile devices outside the sleep sanctuary.'
            ]
          }
        },
        {
          id: 'b-20-3',
          type: 'checklist',
          data: {
            items: [
              { text: 'Monthly Tune-up (1st Saturday): Drop off accumulated donation items at local donation center.', checked: false },
              { text: 'Monthly Tune-up: Check the 30-Day Pause Box; if untouched, rehome items without opening.', checked: false },
              { text: 'Monthly Tune-up: Inspect refrigerator crispers and discard expired sauces or staples.', checked: false }
            ]
          }
        },
        {
          id: 'b-20-4',
          type: 'prompt-box',
          data: {
            title: 'Personal Household Rule',
            prompt: 'Our household golden rule to keep clutter from returning (e.g. One-In, One-Out):\n______________________________________________________________________________________',
            lines: 1
          }
        }
      ]
    },
    // Page 21: Room Layout Sketch & Needs vs Wants Table
    {
      id: 'p-21',
      pageNumber: 21,
      title: 'Room Layout Ideas & Intentional Wishlist',
      category: 'Design & Living Journal',
      headerText: 'HOME LIVING JOURNAL',
      footerText: 'The 14-Day Home Reset Kit',
      blocks: [
        {
          id: 'b-21-1',
          type: 'section-title',
          data: {
            eyebrow: 'FUTURE ENHANCEMENTS',
            title: 'Room Sketch Area & Needs vs. Wants',
            description: 'Now that your rooms are free of clutter, evaluate intentional additions. Sketch your ideal layout and filter potential purchases.'
          }
        },
        {
          id: 'b-21-2',
          type: 'table',
          data: {
            headers: ['Item / Improvement Idea', 'Zone', 'Need vs. Want', '30-Day Cooling Off Date'],
            rows: [
              ['Example: Slim shoe cabinet', 'Entryway', 'Need (functional)', 'Check in 30 days'],
              ['1. ____________________________', '____________', 'Need / Want', '____ / ____ / 2026'],
              ['2. ____________________________', '____________', 'Need / Want', '____ / ____ / 2026'],
              ['3. ____________________________', '____________', 'Need / Want', '____ / ____ / 2026']
            ]
          }
        },
        {
          id: 'b-21-3',
          type: 'note-lines',
          data: {
            title: 'Room Layout Notes & Dimensions Sketch Grid',
            count: 6
          }
        }
      ]
    },
    // Page 22: Certificate of Completion & Physical Writing Space
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
            description: 'This official document certifies that the household named below has successfully completed the 14-Day SELVOF Home Reset Kit.'
          }
        },
        {
          id: 'b-22-2',
          type: 'prompt-box',
          data: {
            title: 'Official Completion Record & Sign-off',
            prompt: 'Household / Name: _____________________________________________________________________\nCompletion Date: _________________________ | Total Items Rehomed: _____________________\nSignature: ________________________________ | Verified By: _____________________________',
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
            content: 'Congratulations on completing your 14-Day Home Reset. May your restored home provide everyday ease, mental calm, and a welcoming sanctuary for you and your family. — Studio SELVOF'
          }
        }
      ]
    }
  ]
};
