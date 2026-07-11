import heroGreenApple from '@/assets/images/hero-green-apple.webp'
import heroLemon from '@/assets/images/hero-lemon.webp'
import cardGreenApple from '@/assets/images/card-green-apple.webp'
import cardRaspberry from '@/assets/images/card-raspberry.webp'
import cardBlueberryLemon from '@/assets/images/card-blueberry-lemon.webp'
import cardLemon from '@/assets/images/card-lemon.webp'
import labelGreenApple from '@/assets/images/label-green-apple.webp'
import labelRaspberry from '@/assets/images/label-raspberry.webp'
import labelBlueberryLemon from '@/assets/images/label-blueberry-lemon.webp'

// Real supplement facts, identical across the range (from can label art)
export const SUPPLEMENT_FACTS = [
  { name: 'N-Acetyl L-Tyrosine', amount: '1000 mg' },
  { name: 'Alpha-GPC (50%)', amount: '400 mg' },
  { name: 'L-Theanine', amount: '200 mg' },
  { name: 'Taurine', amount: '1000 mg' },
  { name: 'Caffeine', amount: '150 mg' },
]

export const NUTRITION = {
  servingSize: '1 Can (250 mL / 8.45 fl oz)',
  calories: 10,
  totalFat: '0 g',
  sodium: '20 mg',
  totalCarbohydrate: '0 g',
  totalSugars: '0 g',
  addedSugars: '0 g',
  protein: '0 g',
}

export const BENEFITS = [
  { key: 'focus', label: 'Calm Focus' },
  { key: 'flow', label: 'Creative Flow' },
  { key: 'energy', label: 'Mental Energy' },
  { key: 'mood', label: 'Enhanced Mood' },
]

export const CHIPS = ['Zero Sugar', 'Low Calorie', 'Made For Focus', 'Made For More']

export const CASE_PRICE = 34.99
export const CASE_SIZE = 12
export const SINGLE_PRICE = 2.99

export const FLAVORS = [
  {
    slug: 'green-apple',
    name: 'Green Apple',
    color: 'zyro-green',
    colorHex: '#B7FF4A',
    tagline: 'Crisp, tart, electric.',
    description:
      'Our flagship flavor — a bright, tart green apple snap that hits clean and never turns cloying, backed by 150mg of natural caffeine and zero sugar.',
    hero: heroGreenApple,
    card: cardGreenApple,
    label: labelGreenApple,
  },
  {
    slug: 'raspberry',
    name: 'Raspberry',
    color: 'zyro-pink',
    colorHex: '#FF5C93',
    tagline: 'Bold, tart, unapologetic.',
    description:
      'Deep raspberry with a tart edge, built for late nights and long sessions — the same clean formula, wrapped in bold berry.',
    hero: cardRaspberry,
    card: cardRaspberry,
    label: labelRaspberry,
  },
  {
    slug: 'blueberry-lemon',
    name: 'Blueberry + Lemon',
    color: 'zyro-blue',
    colorHex: '#69B9FF',
    tagline: 'Cool, sharp, balanced.',
    description:
      'Sweet blueberry rounded out by a sharp lemon finish — the most balanced can in the range, formulated for calm, sustained focus.',
    hero: cardBlueberryLemon,
    card: cardBlueberryLemon,
    label: labelBlueberryLemon,
  },
  {
    slug: 'lemon',
    name: 'Lemon',
    color: 'zyro-yellow',
    colorHex: '#F6E94A',
    tagline: 'Bright, clean, direct.',
    description:
      'Straight-up lemon, no filler — the sharpest, most direct flavor in the range for when you need energy without ceremony.',
    hero: heroLemon,
    card: cardLemon,
    label: null,
  },
]

export const getFlavorBySlug = (slug) => FLAVORS.find((f) => f.slug === slug)
