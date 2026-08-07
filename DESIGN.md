---
name: Vidyadeep Classes
description: Academic Coaching & Practical Skill Lab Learning Institute
colors:
  primary: "#d98324"
  primary-ink: "#8a5312"
  primary-soft: "#fbe3cf"
  neutral-bg: "#faf6ee"
  neutral-surface: "#fffdf6"
  neutral-ink: "#26231c"
  neutral-ink-muted: "#6b6255"
  neutral-line: "#e7dfcc"
  accent-gold: "#f2c879"
  accent-sage: "#edf2e2"
typography:
  display:
    fontFamily: "Fraunces, ui-serif, Georgia, serif"
    fontSize: "clamp(44px, 6.2vw, 78px)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Fraunces, ui-serif, Georgia, serif"
    fontSize: "clamp(26px, 3.8vw, 46px)"
    fontWeight: 600
    lineHeight: 1.07
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Fraunces, ui-serif, Georgia, serif"
    fontSize: "clamp(20px, 2.4vw, 27px)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Instrument Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Instrument Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "10.5px"
    fontWeight: 600
    letterSpacing: "0.14em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
  pill: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.neutral-ink}"
    textColor: "{colors.neutral-bg}"
    rounded: "{rounded.md}"
    padding: "14px 20px"
  button-primary-hover:
    backgroundColor: "#3b3527"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.neutral-ink}"
    padding: "2px 0px"
---

# Design System: Vidyadeep Classes

## Overview

**Creative North Star: "The Warm Editorial Campus"**

Vidyadeep Classes adopts an editorial, warm paper visual identity designed to convey academic authority, clarity, and genuine mentorship without looking generic or corporate. The layout uses organic paper backgrounds (`#faf6ee`), rich dark charcoal typography (`#26231c`), crisp hairline dividers (`#e7dfcc`), and warm saffron accents (`#d98324`).

The interface combines high-contrast serif headlines (*Fraunces*) with clean, highly readable body typography (*Instrument Sans*). Micro-interactions maintain a grounded, tactile quality: cards rest flat with soft border lines, elevating with subtle warm ambient shadows only upon state hover or focus.

**Key Characteristics:**
- **Paper & Ink Foundation**: Organic warm cream paper background (`#faf6ee`) with dark charcoal ink typography (`#26231c`).
- **Editorial Serif Headlines**: Expressive Fraunces serif headlines paired with precise Instrument Sans body text.
- **Warm Saffron Accents**: Used purposefully for key actions, interactive states, and highlights without over-saturating the canvas.
- **Tactile Micro-Details**: Subtle SVG grain overlay (`opacity: 0.045`), fine line borders, and organic pill badges.

## Colors

The palette is built around paper neutrals, dark ink text, and warm saffron/gold accents.

### Primary
- **Warm Saffron** (`#d98324`): Primary brand accent used for key highlights, active hover states, focus rings, and action indicators.
- **Saffron Deep Ink** (`#8a5312`): High-contrast text color for badges and emphasis on soft saffron backgrounds.
- **Saffron Soft** (`#fbe3cf`): Tinted background for highlights, badges, and selection states.

### Neutral
- **Paper Neutral** (`#faf6ee`): Primary application background color giving an organic, tactile paper quality.
- **Paper Surface** (`#fffdf6`): Secondary surface color for card backgrounds and elevated containers.
- **Charcoal Ink** (`#26231c`): Primary high-contrast text color.
- **Ink Muted** (`#6b6255`): Secondary body text, subtitles, and metadata.
- **Line Soft** (`#e7dfcc`): Hairline border color for cards, dividers, and structural grids.

### Secondary & Accent
- **Warm Gold** (`#f2c879`): Secondary highlight accent for tags and visual decorations.
- **Sage Green** (`#edf2e2`): Soft natural background tint for success indicators and environmental features.

### Named Rules
**The One Voice Accent Rule.** The primary saffron accent is reserved for primary CTAs, active indicators, and focal highlights. It occupies ≤10% of any screen surface to preserve visual emphasis.

## Typography

**Display & Headline Font:** Fraunces (Variable Serif)
**Body Font:** Instrument Sans (Clean Sans-Serif)

**Character:** Fraunces brings traditional academic warmth and editorial weight, while Instrument Sans ensures effortless legibility across dense course details, schedules, and forms.

### Hierarchy
- **Display** (Fraunces 600, `clamp(44px, 6.2vw, 78px)`, line-height `1.02`, letter-spacing `-0.02em`): Hero headlines and major section titles.
- **Headline** (Fraunces 600, `clamp(26px, 3.8vw, 46px)`, line-height `1.07`, letter-spacing `-0.02em`): Primary section headings.
- **Title** (Fraunces 600, `clamp(20px, 2.4vw, 27px)`, line-height `1.2`, letter-spacing `-0.01em`): Card and sub-section titles.
- **Body** (Instrument Sans 400, `15px`, line-height `1.55`): Paragraph copy, list items, and general body text.
- **Label / Kicker** (Instrument Sans 600, `10.5px`–`11.5px`, letter-spacing `0.14em`–`0.2em`, uppercase): Eyebrows, tags, category kickers, and table headers.

### Named Rules
**The Editorial Contrast Rule.** Headlines always use the serif Fraunces font with tight leading, while operational copy always uses Instrument Sans with generous line height for effortless readability.

## Layout

- **Container Model**: Max-width content containers (`1280px` max width) centered with responsive padding (`px-4 sm:px-6 lg:px-8`).
- **Grid Models**: Asymmetric editorial grids for hero (`1.05fr : 0.95fr`), method (`390px : 1fr`), and FAQ (`340px : 1fr`).
- **Spacing Rhythm**: 8px baseline grid scale (`4px`, `8px`, `16px`, `24px`, `32px`, `48px`, `64px`).
- **Responsive Behavior**: Asymmetric multi-column desktop layouts stack into single-column vertical flows on mobile breakpoints (`<1024px`).

## Elevation & Depth

The system uses a **Flat-By-Default** depth model. Surfaces rest flat on paper with subtle line borders (`#e7dfcc`). Depth and elevation are conveyed through state changes—hovering or focusing an interactive element introduces a soft, warm ambient shadow (`0 18px 34px -14px rgba(38, 35, 28, 0.3)`).

### Shadow Vocabulary
- **Card Hover Shadow** (`0 18px 34px -14px rgb(38 35 28 / 0.3)`): Soft ambient drop shadow applied on card hover.
- **Form / Modal Shadow** (`0 24px 48px -28px rgb(38 35 28 / 0.35)`): Soft elevated shadow for floating forms or interactive dialogs.

### Named Rules
**The Flat-Rest Rule.** Containers and cards rest flat against the paper background with hairline borders (`#e7dfcc`). Shadows only activate upon user interaction (hover/focus).

## Shapes

- **Corner Radius Scale**:
  - Small (`4px`): Focus rings, badge corners.
  - Medium (`8px`): Buttons, input fields, mobile nav containers.
  - Large (`12px`): Program cards, course containers, section blocks.
  - Pill (`9999px`): Category badges, ticker items, pill buttons.
- **Borders**: 1px solid line (`#e7dfcc`) used as structural separator between cards and sections.

## Components

### Primary Button
- **Shape**: Rounded medium (`8px` radius).
- **Background & Color**: Charcoal ink background (`#26231c`) with cream text (`#faf6ee`), bold 14px text.
- **Hover / Focus**: Shifts background to `#3b3527`, translates `-2px` vertically with a 300ms cubic-bezier transition.

### Ghost / Text Button
- **Shape**: Borderless text with bottom border line (`1px solid #e7dfcc`).
- **Hover**: Border shifts to Warm Saffron (`#d98324`) with smooth color transition.

### Accordion / FAQ Item
- **Shape**: Hairline bottom border (`#e7dfcc`).
- **Background**: Transparent at rest, subtle warm paper fill (`#fffdf6`) on open/active.
- **Typography**: Fraunces title text for questions, Instrument Sans body for answers.

### Category Chip / Pill
- **Shape**: Full pill radius (`9999px`), 1px line border.
- **Background**: Soft cream or soft saffron (`#fbe3cf`) for active selection.
- **Typography**: Instrument Sans bold label (11px, tracking 0.14em).

## Do's and Don'ts

### Do:
- **Do** use Fraunces for editorial headlines and section titles, and Instrument Sans for body copy.
- **Do** keep card containers flat at rest with hairline `#e7dfcc` borders, adding shadows only on hover.
- **Do** maintain generous whitespace and warm paper background (`#faf6ee`) across all pages.
- **Do** restrict warm saffron accent (`#d98324`) to actionable controls and focal highlights.

### Don't:
- **Don't** use cold pure white (`#ffffff`) or pure black (`#000000`) for primary backgrounds or body text.
- **Don't** apply heavy static drop shadows to cards at rest.
- **Don't** mix unstyled sans-serif fonts in headlines; always preserve the Fraunces serif hierarchy.
- **Don't** crowd layout elements—keep 24px+ internal card padding and clear section spacing.
