/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

export default {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        light: {
          background: '#F8F2E8', // بيج مائل للأبيض لمظهر ناعم
          text: '#5A4632', // بني دافئ للنصوص
          primary: '#A9825E', // بني فاخر مع لمسة ذهبية
          secondary: '#EACDA3', // بيج ذهبي مشرق
          accent: '#D4A373', // لون إبراز أنيق
          border: '#DDD2C6', // حدود بيج خفيفة مع تباين
          muted: '#B8A496', // بني باهت ومريح
          table: {
            background: '#F8F2E8', // خلفية ناعمة للجدول
            text: '#5A4632', // بني مريح للنصوص
            header: '#EFE6D9', // رأس الجدول ببيج مشبع
            row: '#FFFFFF', // صفوف ناصعة
            altRow: '#F3E9DC', // صفوف بديلة بلمسة بيج
            hover: '#E6D6C5', // لون التمرير بلمعة خفيفة
            border: '#CFC2B5', // حدود ناعمة للجدول
          },
        },
        dark: {
          background: '#2A1C13', // بني داكن للمظهر الفاخر
          text: '#E6E1D4', // بيج مائل للأبيض
          primary: '#C29B77', // بني ذهبي فاخر
          secondary: '#D8B591', // بيج ذهبي أنيق
          accent: '#B28462', // لون إبراز دافئ
          border: '#4D3A2C', // حدود بني غامق
          muted: '#8E7359', // بني فاتح للتفاصيل
          table: {
            background: '#2A1C13', // خلفية الجدول داكنة
            text: '#E6E1D4', // النصوص ببيج مريح
            header: '#3D2D21', // رأس الجدول بلون بني غني
            row: '#4B392E', // صفوف الجدول داكنة
            altRow: '#3A2B21', // صفوف بديلة أغمق قليلاً
            hover: '#5D4738', // تأثير تمرير مميز
            border: '#4D3A2C', // حدود واضحة للجدول
          },
        },
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem', // أبعاد إضافية للتصميم
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem', // حواف أكثر نعومة
      },
      boxShadow: {
        light: '0 4px 6px rgba(0, 0, 0, 0.1)', // ظل خفيف
        dark: '0 4px 6px rgba(0, 0, 0, 0.3)', // ظل داكن
      },
    },
  },
  plugins: [],
}
