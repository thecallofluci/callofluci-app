## Project Structure

| File or Folder                            | Description                                                                                                                                                         |
| :---------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `next.config.js`                          | This file is used for customizing the Next.js configuration. [Add more specific details here]                                                                       |
| `tailwind.config.js`                      | This file is used for customizing the Tailwind CSS configuration. [Add more specific details here]                                                                  |
| `src/app/_components/CustomComponent.tsx` | This is a custom React component used for... [Add more specific details here]                                                                                       |
| `src/app/layout.tsx`                      | This is the root layout of the application. It sets up the global styles, context providers, and the structure of the application. [Add more specific details here] |


---

## Current Working Structure

.
├── public 
│   ├── assets
│   ├── mockup
│   └── icon.svg
├── src
│   ├── app
│   │   ├── _components
│   │   │   ├── _forms
│   │   │   │   └── ObservationForm.tsx
│   │   │   ├── _layout
│   │   │   │   └── XXXXX.tsx
│   │   │   ├── _providers
│   │   │   │   └── providers.tsx
│   │   │   ├── _templates
│   │   │   │   └── XXXXX.tsx
│   │   │   ├── _ui
│   │   │   │   └── XXXXX.tsx
│   │   ├── _hooks
│   │   │   └── _useObservationForm.ts
│   │   ├── _lib
│   │   │   ├── _actions
│   │   │   │   └── submitObservation.ts
│   │   ├── _styles
│   │   ├── _utils
│   │   ├── _working
│   │   ├── (routes)
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