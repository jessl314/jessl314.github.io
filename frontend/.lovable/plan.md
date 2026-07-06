Invert the dark theme tokens so the background and foreground swap with the light theme, while keeping the light theme and pastel accent chips unchanged.

1. Update `src/styles.css` dark theme tokens:
   - `--background` → use light theme `--foreground` value (very dark blue-gray from the light text)
   - `--foreground` → use light theme `--background` value (warm cream)
   - `--card`, `--popover`, `--secondary`, `--muted` → derived from the new dark background (lighter surface tones)
   - `--primary` → warm cream with dark primary-foreground
   - `--border`, `--hairline`, `--input`, `--ring` → subtle tones that keep the light theme contrast logic
   - Keep `--accent`, `--book`, `--music`, `--quote` as the same light pastel chips the user already liked.

2. No component or layout changes; the existing widget tokens will pick up the new dark theme automatically.

3. Verify the result:
   - Screenshot the dark theme to confirm the inverted background/text reads cleanly.
   - Run `tsgo` typecheck and the build to ensure no style or type regressions.

This gives a true "invert the page" dark mode: the dark page uses the light page's text color as its canvas and the light page's paper color as its ink, so the two themes feel like counterparts.