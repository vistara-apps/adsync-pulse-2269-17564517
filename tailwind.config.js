
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(210, 90%, 50%)',
        accent: 'hsl(160, 70%, 45%)',
        bg: 'hsl(210, 20%, 95%)',
        surface: 'hsl(210, 15%, 98%)',
        text: 'hsl(210, 10%, 20%)',
        border: 'hsl(210, 15%, 85%)',
      },
      spacing: {
        sm: '8px',
        md: '16px',
        lg: '24px',
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
      },
      boxShadow: {
        card: '0 4px 12px hsla(210, 15%, 75%, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.25s cubic-bezier(0.22,1,0.36,1)',
        'slide-up': 'slideUp 0.25s cubic-bezier(0.22,1,0.36,1)',
      },
    },
  },
  plugins: [],
}
