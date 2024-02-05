/* 
typegraphy.ts
Centralizes all typography-related styles, including headings, paragraph text, etc.
Built using @tailwindcss/typography 


*/
const typography = {
    DEFAULT: {
      css: {
        color: 'var(--color-text-base)', // Base text color
        maxWidth: '65ch', // Max width for readability
        lineHeight: '1.75', // Line height for body text
        // Headings
        h1: {
          color: 'var(--color-heading)',
          fontWeight: '700',
          fontSize: '2.25rem',
          lineHeight: '2.5rem',
        },
        h2: {
          color: 'var(--color-heading)',
          fontWeight: '600',
          fontSize: '1.875rem',
          lineHeight: '2.25rem',
        },
        h3: {
          color: 'var(--color-heading)',
          fontWeight: '500',
          fontSize: '1.5rem',
          lineHeight: '2rem',
        },
        // Paragraphs
        p: {
          marginBottom: '1em',
        },
        // Links
        a: {
          color: 'var(--color-primary)',
          textDecoration: 'underline',
          '&:hover': {
            color: 'var(--color-primary-dark)',
          },
        },
        // Blockquotes
        blockquote: {
          fontStyle: 'italic',
          paddingLeft: '1em',
          borderLeftWidth: '4px',
          borderLeftColor: 'var(--color-primary)',
          marginLeft: '0',
          marginRight: '0',
        },
        // Lists
        ul: {
          listStyleType: 'disc',
          marginLeft: '1.5rem',
        },
        ol: {
          listStyleType: 'decimal',
          marginLeft: '1.5rem',
        },
        li: {
          marginBottom: '0.5em',
        },
        // Code
        code: {
          backgroundColor: 'var(--color-gray-200)',
          padding: '0.2em 0.4em',
          borderRadius: '0.375rem',
        },
        pre: {
          code: {
            backgroundColor: 'transparent',
            padding: '0',
          },
        },
      },
    },
    dark: {
      css: {
        color: 'var(--color-text-base-dark)', // Base text color for dark mode
        // Dark mode specific styles...
        a: {
          color: 'var(--color-primary-dark)',
          '&:hover': {
            color: 'var(--color-primary-light)',
          },
        },
        blockquote: {
          borderLeftColor: 'var(--color-primary-dark)',
        },
      },
    },
  };
  
  export default typography;