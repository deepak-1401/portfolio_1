/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#05060B',
        panel: '#0B0E17',
        panel2: '#10141F',
        edge: 'rgba(148, 163, 255, 0.14)',
        ink: '#E8ECFB',
        muted: '#8B93B0',
        'neon-blue': '#4F7CFF',
        'neon-purple': '#A45CFF',
        'neon-cyan': '#4FE3FF',
        'light-bg': '#F3F4FA',
        'light-panel': '#FFFFFF',
        'light-ink': '#12131C',
        'light-muted': '#5B5F73',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'grad-primary': 'linear-gradient(135deg, #4F7CFF 0%, #A45CFF 100%)',
        'grad-radial': 'radial-gradient(circle at 30% 20%, rgba(79,124,255,0.18), transparent 45%), radial-gradient(circle at 80% 70%, rgba(164,92,255,0.16), transparent 45%)',
      },
      boxShadow: {
        glow: '0 0 24px rgba(79,124,255,0.35), 0 0 48px rgba(164,92,255,0.15)',
        'glow-sm': '0 0 12px rgba(79,124,255,0.35)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        'border-flow': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        blink: 'blink 1s step-start infinite',
        'border-flow': 'border-flow 6s linear infinite',
      },
    },
  },
  plugins: [],
}
