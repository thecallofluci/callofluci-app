## Current Project Structure

.
├── public 
│   ├── assets
│   ├── mockup
│   └── icon.svg
├── src
│   ├── app
│   │   ├── (routes)
│   │   │   └── XXXXX.tsx
│   │   ├── components
│   │   │   ├── forms
│   │   │   │   └── ObservationForm.tsx
│   │   │   ├── layout
│   │   │   │   ├── AppWrapper.tsx
│   │   │   │   ├── Body.tsx
│   │   │   │   ├── Footer.tsx
│   │   │   │   └── Header.tsx
│   │   │   ├── providers
│   │   │   │   └── providers.tsx
│   │   │   └── ui
│   │   │       ├── LuciButton.tsx
│   │   │       ├── LuciCard.tsx
│   │   │       ├── LuciIcons.tsx
│   │   │       ├── LuciImage.tsx
│   │   │       ├── LuciModal.tsx
│   │   │       ├── LuciNavbar.tsx
│   │   │       ├── LuciSpinner.tsx
│   │   │       ├── LuciTextArea.tsx
│   │   │       └── LuciThemeSwitch.tsx
│   │   ├── hooks
│   │   │   └── useObservationForm.ts
│   │   ├── lib
│   │   │   └── actions
│   │   │       └── submitObservation.ts
│   │   ├── styles
│   │   │   ├── colors
│   │   │   │   ├── luciColors.ts
│   │   │   │   └── luciSemantic.ts
│   │   │   ├── fonts
│   │   │   │   ├── fonts.ts
│   │   │   │   └── typewriter.css
│   │   │   ├── themes
│   │   │   │   ├── luciDarkTheme.ts
│   │   │   │   └── luciLightTheme.ts
│   │   │   ├── globals.css
│   │   │   └── primitives.ts
│   │   ├── utils
│   │   │   └── XXXXX.tsx
│   │   ├── working
│   │   │   └── XXXXX.tsx
│   │   ├── error.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── config
│   │   ├── constants.ts
│   │   ├── metadata.ts
│   │   └── site.ts
│   └── types
│       ├── interfaces.ts
│       └── types.ts
├── .env
├── .eslintrc.json
├── .gitignore
├── .prettierignore
├── .prettierrc
├── LICENSE
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── tsconfig.json