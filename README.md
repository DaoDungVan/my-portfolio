# Dao Dung Van — Portfolio

Apple-style portfolio. React + Vite, split into components, data, assets, hooks and per-component CSS.

## Run
```bash
npm install
npm run dev
```

## Build / deploy
```bash
npm run build      # -> dist/
```
Deploy to Vercel: push to GitHub → import repo (Vite auto-detected). Or `npx vercel`.

## Structure
```
src/
  main.jsx                 entry, imports global.css
  App.jsx                  composes the sections
  styles/global.css        design tokens, reset, buttons, section scaffold, responsive
  components/
    Nav.jsx   / Nav.css
    Hero.jsx  / Hero.css
    About.jsx / About.css
    Skills.jsx/ Skills.css
    Work.jsx  / Work.css
    Contact.jsx / Contact.css
    Footer.jsx  / Footer.css
    Logo.jsx               skill logos (Simple Icons, CC0), custom glyphs, GitHub mark
  data/
    skills.js              SKILLS list
    stack.js               STACK list
    icons.js               BRAND icon paths
  assets/
    avatar.js              avatar image (base64)
    vivudee.js             Vivudee clip + poster (base64)
  hooks/
    useReveal.js           scroll-reveal observer
public/
  vivudee.mp4              HD clip (swap <video> src to "/vivudee.mp4" in Work.jsx to use it)
```

## Editing
- Text/data: `src/data/*` and the JSX in `src/components/*`.
- Colors/tokens: `:root` in `src/styles/global.css`.
- Replace the avatar or Vivudee clip: regenerate the base64 in `src/assets/*`,
  or switch the Work `<video>` to the file at `public/vivudee.mp4`.
