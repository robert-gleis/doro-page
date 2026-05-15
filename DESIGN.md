---
name: Serene Practice
colors:
  surface: '#faf9f6'
  surface-dim: '#dbdad7'
  surface-bright: '#faf9f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f1'
  surface-container: '#efeeeb'
  surface-container-high: '#e9e8e5'
  surface-container-highest: '#e3e2e0'
  on-surface: '#1a1c1a'
  on-surface-variant: '#464740'
  inverse-surface: '#2f312f'
  inverse-on-surface: '#f2f1ee'
  outline: '#77786f'
  outline-variant: '#c7c7bd'
  surface-tint: '#5c614d'
  primary: '#535845'
  on-primary: '#ffffff'
  primary-container: '#6b705c'
  on-primary-container: '#eff4db'
  inverse-primary: '#c4c9b1'
  secondary: '#5f604b'
  on-secondary: '#ffffff'
  secondary-container: '#e2e1c7'
  on-secondary-container: '#63644f'
  tertiary: '#685140'
  on-tertiary: '#ffffff'
  tertiary-container: '#826957'
  on-tertiary-container: '#ffefe5'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e0e5cc'
  primary-fixed-dim: '#c4c9b1'
  on-primary-fixed: '#191d0e'
  on-primary-fixed-variant: '#444937'
  secondary-fixed: '#e5e4ca'
  secondary-fixed-dim: '#c8c8af'
  on-secondary-fixed: '#1c1d0c'
  on-secondary-fixed-variant: '#474835'
  tertiary-fixed: '#fddcc6'
  tertiary-fixed-dim: '#e0c1ab'
  on-tertiary-fixed: '#28180b'
  on-tertiary-fixed-variant: '#584232'
  background: '#faf9f6'
  on-background: '#1a1c1a'
  surface-variant: '#e3e2e0'
typography:
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: auto
  max-width: 1120px
---

## Brand & Style
The design system is centered on the principles of psychological safety, tranquility, and professional reliability. It evokes a sense of "digital breathing room," prioritizing clarity and calmness to reduce cognitive load for users who may be in a state of distress. 

The aesthetic leverages a **refined minimalism** combined with **organic warmth**. By avoiding stark whites and aggressive contrasts, the interface feels welcoming and human-centric. The visual language is intentional and sparse, ensuring that the path to care is unobstructed and the atmosphere remains empathetic and grounded.

## Colors
The palette is rooted in a biophilic philosophy, using desaturated, earthy tones to promote grounding. 

- **Primary (Muted Olive):** Used for key actions and brand presence. It conveys growth and stability.
- **Secondary (Sage):** Used for supporting elements and iconography, maintaining a monochromatic harmony.
- **Tertiary (Dusty Rose/Beige):** Used sparingly for highlights or soft notifications to provide warmth without urgency.
- **Neutrals:** The background is a soft "Paper" cream rather than pure white, reducing eye strain and creating a more "analog" and approachable feel.

## Typography
This design system utilizes **Plus Jakarta Sans** for its friendly yet modern geometric construction. The rounded terminals of the typeface complement the overall shape language.

Large headlines use a slightly tighter letter-spacing and heavier weight to provide a sturdy "anchor" for the page content. Body text is set with a generous line height (1.6) to ensure effortless readability, especially for long-form therapeutic content or session notes.

## Layout & Spacing
The layout follows a **Fixed Grid** model for desktop to provide a contained, safe feeling, while using a fluid 4-column system for mobile. 

The spacing rhythm is built on an 8px base, but the philosophy encourages "over-spacing" (using `lg` and `xl` units) to prevent the UI from feeling cluttered. This "airy" approach allows the user's eyes to rest between sections. Content should be centered with significant horizontal margins to create a focused, editorial reading experience.

## Elevation & Depth
Depth is created through **Tonal Layering** and soft, ambient shadows. In this design system, elevation is never aggressive; we avoid high-contrast drop shadows.

- **Level 0 (Base):** The neutral cream surface.
- **Level 1 (Cards):** Subsurface colors that are slightly lighter or darker than the base to define areas.
- **Floating Elements:** Use a very diffused shadow (Blur: 20px, Opacity: 4%) with a hint of the primary olive green mixed into the shadow color to maintain warmth.
- **Glassmorphism:** Use sparingly for navigation bars with a high-intensity backdrop blur (20px) to maintain a sense of context and lightness.

## Shapes
The shape language is defined by **Soft Roundedness**. All interactive components, such as buttons and input fields, use an 8px (`0.5rem`) corner radius. This removes the "sharpness" of the digital interface, making it feel more organic and less clinical. 

Larger containers like cards or image frames may scale up to 16px or 24px to emphasize a friendly, protective enclosure.

## Components
Consistent styling of components ensures the interface feels predictable and safe:

- **Buttons:** Primary buttons use a solid Olive Green with white text. Secondary buttons use a tonal Sage background with Olive text. They should have ample padding (16px vertical, 32px horizontal) to feel "sturdy."
- **Input Fields:** Use a subtle 1px border in a slightly darker beige than the background. Focus states should transition the border to Olive with a soft, low-opacity glow.
- **Cards:** Cards should not have heavy borders. Use a subtle tonal shift (Level 1 elevation) and a soft shadow to distinguish them from the background.
- **Chips:** Used for selecting mood or therapy tags. These should be pill-shaped with soft, desaturated colors that change slightly in saturation when active.
- **Lists:** Use generous vertical spacing between items, separated by very light, low-contrast dividers to maintain a clean flow.
- **Modals/Dialogs:** Center-aligned with significant backdrop blur to isolate the task and reduce background noise.