# Block Variants Documentation

This document explains the different block variants used in the Maruti Suzuki Driving School EDS site.

## Cards Variants

The Cards block has **4 different variants** to support different content layouts:

### 1. **Cards (Default)** - `/blocks/cards/`
**Usage:** General-purpose cards with image, title, description, and call-to-action
**Syntax:** `| Cards |  |`

**Features:**
- Product/course cards with vertical layout
- Image at top (16:9 aspect ratio)
- Title (H3) in primary blue
- Description paragraph
- Pricing information
- CTA button
- Card shadows with hover effect
- Border radius: 6px

**Best for:** Course listings, product cards, detailed information cards

---

### 2. **Cards-stats** - `/blocks/cards-stats/`
**Usage:** Statistics showcase with icon, large number, label, and description
**Syntax:** `| Cards-stats |  |`

**Features:**
- Icon at top (60x60px)
- Very large number (36px, bold, primary blue)
- Uppercase label (12px, bold, primary blue)
- Description paragraph below
- No borders or shadows
- Center-aligned text
- Transparent background

**Content Structure:**
```markdown
| Cards-stats |  |
| --- | --- |
| ![Icon](/path/to/icon.png) | ### 22 00 000+<br>HAPPY STUDENTS<br>Description text here |
```

**Best for:** Statistics, achievements, key metrics display

---

### 3. **Cards-icon** - `/blocks/cards-icon/`
**Usage:** Simple icon cards with number and label (no description)
**Syntax:** `| Cards-icon |  |`

**Features:**
- Small icon at top (50x50px)
- Extra-large number (48px, bold, primary blue)
- Uppercase label (11px, bold)
- No borders or shadows
- No description paragraph
- Center-aligned text
- Transparent background
- 4-column grid on desktop

**Content Structure:**
```markdown
| Cards-icon |  |
| --- | --- |
| ![Icon](/path/to/icon.png) | ### 10<br>MINUTES TO FINISH |
```

**Best for:** Feature highlights, quiz stats, simple metrics, quick facts

---

### 4. **Cards-service** - `/blocks/cards-service/`
**Usage:** Service/feature cards with icon, title, and description
**Syntax:** `| Cards-service |  |`

**Features:**
- Large icon at top (80x80px)
- Title (H3, 18px, primary blue)
- Description paragraph
- White background card
- Border: 1px solid #e0e0e0
- Card shadows with hover effect
- Border radius: 6px
- Center-aligned content
- Extra padding (30px)

**Content Structure:**
```markdown
| Cards-service |  |
| --- | --- |
| ![Icon](/path/to/icon.png) | ### Service Title<br>Service description goes here |
```

**Best for:** Services, features, value propositions, benefits

---

## Carousel Variants

The Carousel block has **2 different variants** to support different content layouts:

### 1. **Carousel (Default)** - `/blocks/carousel/`
**Usage:** Homepage hero section with full-width background images
**Syntax:** `| Carousel |  |`

**Features:**
- Full-width background images
- Text overlay (white text on image)
- Slide indicators (white dots on blue bar)
- Navigation arrows
- Minimum height: 50vw
- Auto-play carousel functionality

**Content Structure:**
```markdown
| Carousel |  |
| --- | --- |
| ![Slide Image](/path/to/image.jpg) | ## Heading Text<br>Description<br>[CTA Link](/url) |
```

**Best for:** Hero sections, full-width image sliders with minimal text overlay

---

### 2. **Carousel-cards** - `/blocks/carousel-cards/`
**Usage:** Course/blog listings in horizontal card slider
**Syntax:** `| Carousel-cards |  |`

**Features:**
- Card-based carousel layout
- Image at top (16:9 aspect ratio)
- Title (H3) in primary blue
- Description paragraph
- CTA button at bottom
- Card shadows with hover effects
- Border radius: 6px
- Navigation arrows (left/right)
- Slide indicators at bottom (white dots on blue bar)
- Responsive: Shows 1 card on mobile, 2 on tablet, 3 on desktop
- Smooth scroll behavior

**Content Structure:**
```markdown
| Carousel-cards |  |
| --- | --- |
| ![Course Image](/path/to/image.jpg) | ### Course Title<br>Course description goes here.<br>**6 Modules** \| **31 Hours**<br>₹ 9 000*<br>[View Course](/url) |
```

**Best for:** Course listings, blog article previews, product carousels, any card-based content in a slider

---

## Columns Variants

The Columns block has **1 main style** with responsive behavior:

### **Columns (Default)** - `/blocks/columns/`
**Usage:** Image + content side-by-side layout or stat displays
**Syntax:** `| Columns |  |`

**Features:**
- Flexible 2-column layout (image + text)
- Can also display statistics in grid format
- Responsive: stacks vertically on mobile
- Center-aligned on mobile, left-aligned on desktop
- Supports icons (60px max width)

**Content Structure:**
```markdown
| Columns |  |
| --- | --- |
| ![Image](/path/to/image.jpg) | ### Title<br>Description<br>[CTA Link](/url) |
```

---

## Accordion Variants

The Accordion block has **1 main style**:

### **Accordion (Default)** - `/blocks/accordion/`
**Usage:** FAQ sections, collapsible Q&A
**Syntax:** `| Accordion |  |`

**Features:**
- Question in uppercase, primary blue, bold
- Plus/minus icon (right-aligned)
- Answer in regular text
- Light gray background when open
- Border radius: 4px
- 15px spacing between items

**Content Structure:**
```markdown
| Accordion |  |
| --- | --- |
| Question text here | Answer text goes here |
```

---

## Choosing the Right Variant

### Use **Cards (default)** when:
- You need detailed product/course cards in a static grid
- You want images with aspect ratio
- You need CTA buttons within cards
- You want hover effects and shadows
- Content should be visible all at once (not in a slider)

### Use **Cards-stats** when:
- Showing statistics or achievements
- Displaying large numbers with context
- Need icon + number + label + description
- Want a clean, centerpiece layout

### Use **Cards-icon** when:
- Showing simple metrics or features
- Displaying numbers without long descriptions
- Need a compact 4-column grid
- Want a minimalist icon + number layout

### Use **Cards-service** when:
- Highlighting services or features
- Need icon + title + short description
- Want boxed cards with shadows
- Need a clean, centered layout

### Use **Carousel (default)** when:
- Creating a hero section with full-width images
- Need text overlay on background images
- Want auto-rotating promotional banners
- Minimal text content with strong visual focus

### Use **Carousel-cards** when:
- Displaying multiple courses, products, or blog articles
- Content is card-based with image + text + CTA
- Want horizontal scrolling card layout
- Need to show multiple items in a slider format
- Space-efficient way to display many items

---

## Implementation Notes

1. **Block variant syntax in EDS:**
   - Default: `| BlockName |  |`
   - Variant: `| BlockName-variant |  |` (use hyphen, not parentheses)

2. **File structure:**
   - Default block: `/blocks/blockname/`
   - Variant: `/blocks/blockname-variant/`

3. **CSS naming:**
   - Use block name as prefix: `.cards-stats`, `.cards-icon`, `.cards-service`
   - Maintain consistent class names within variants

4. **JavaScript decoration:**
   - Each variant has its own JS file
   - Follows same decoration pattern as default block
   - Adds variant-specific class names

---

## Visual Examples

### Cards-stats - "Why Choose" Section (Line 27)
Large icons with big numbers and uppercase labels
Used for: Happy Students, Expert Trainers, Training Schools statistics

### Cards-icon - "Quiz Features" Section (Line 57)
Small icons with extra-large numbers in a 4-column grid
Used for: Quiz stats (10 minutes, 10 questions, 4 categories, winners)

### Cards-service - "Value-Added Services" Section (Line 99)
Boxed cards with medium icons and service descriptions
Used for: Assistance on own car, Training on upgraded car models, License assistance

### Carousel (default) - "Hero Section" (Line 9)
Full-width image slider with text overlay
Used for: Homepage hero slides with driving school images

### Carousel-cards - "Choose Your Course" Section (Line 78)
Course cards in horizontal slider with images, details, pricing, and CTA buttons
Used for: Learner courses, Advanced courses display

### Carousel-cards - "Essential Driving Tips" Section (Line 143)
Blog article cards in horizontal slider with featured images and excerpts
Used for: Blog post previews with read more links

---

Last updated: 2025-11-06
