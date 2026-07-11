-- Seed the real ZYRO product range.
-- Note: image columns store filenames only — the frontend currently serves
-- these from its own bundled assets (src/assets/images). Point them at
-- Supabase Storage / a CDN URL once product photography is migrated there.

insert into products (
  slug, name, tagline, description, color_name, color_hex,
  price, case_price, case_size,
  hero_image, card_image, label_image,
  benefits, chips, supplement_facts, nutrition, sort_order
) values
(
  'green-apple', 'Green Apple', 'Crisp, tart, electric.',
  'Our flagship flavor — a bright, tart green apple snap that hits clean and never turns cloying, backed by 150mg of natural caffeine and zero sugar.',
  'zyro-green', '#B7FF4A',
  2.99, 34.99, 12,
  'hero-green-apple.webp', 'card-green-apple.webp', 'label-green-apple.webp',
  array['Calm Focus', 'Creative Flow', 'Mental Energy', 'Enhanced Mood'],
  array['Zero Sugar', 'Low Calorie', 'Made For Focus', 'Made For More'],
  '[
    {"name": "N-Acetyl L-Tyrosine", "amount": "1000 mg"},
    {"name": "Alpha-GPC (50%)", "amount": "400 mg"},
    {"name": "L-Theanine", "amount": "200 mg"},
    {"name": "Taurine", "amount": "1000 mg"},
    {"name": "Caffeine", "amount": "150 mg"}
  ]'::jsonb,
  '{"servingSize": "1 Can (250 mL / 8.45 fl oz)", "calories": 10, "totalFat": "0 g", "sodium": "20 mg", "totalCarbohydrate": "0 g", "totalSugars": "0 g", "addedSugars": "0 g", "protein": "0 g"}'::jsonb,
  1
),
(
  'raspberry', 'Raspberry', 'Bold, tart, unapologetic.',
  'Deep raspberry with a tart edge, built for late nights and long sessions — the same clean formula, wrapped in bold berry.',
  'zyro-pink', '#FF5C93',
  2.99, 34.99, 12,
  'card-raspberry.webp', 'card-raspberry.webp', 'label-raspberry.webp',
  array['Calm Focus', 'Creative Flow', 'Mental Energy', 'Enhanced Mood'],
  array['Zero Sugar', 'Low Calorie', 'Made For Focus', 'Made For More'],
  '[
    {"name": "N-Acetyl L-Tyrosine", "amount": "1000 mg"},
    {"name": "Alpha-GPC (50%)", "amount": "400 mg"},
    {"name": "L-Theanine", "amount": "200 mg"},
    {"name": "Taurine", "amount": "1000 mg"},
    {"name": "Caffeine", "amount": "150 mg"}
  ]'::jsonb,
  '{"servingSize": "1 Can (250 mL / 8.45 fl oz)", "calories": 10, "totalFat": "0 g", "sodium": "20 mg", "totalCarbohydrate": "0 g", "totalSugars": "0 g", "addedSugars": "0 g", "protein": "0 g"}'::jsonb,
  2
),
(
  'blueberry-lemon', 'Blueberry + Lemon', 'Cool, sharp, balanced.',
  'Sweet blueberry rounded out by a sharp lemon finish — the most balanced can in the range, formulated for calm, sustained focus.',
  'zyro-blue', '#69B9FF',
  2.99, 34.99, 12,
  'card-blueberry-lemon.webp', 'card-blueberry-lemon.webp', 'label-blueberry-lemon.webp',
  array['Calm Focus', 'Creative Flow', 'Mental Energy', 'Enhanced Mood'],
  array['Zero Sugar', 'Low Calorie', 'Made For Focus', 'Made For More'],
  '[
    {"name": "N-Acetyl L-Tyrosine", "amount": "1000 mg"},
    {"name": "Alpha-GPC (50%)", "amount": "400 mg"},
    {"name": "L-Theanine", "amount": "200 mg"},
    {"name": "Taurine", "amount": "1000 mg"},
    {"name": "Caffeine", "amount": "150 mg"}
  ]'::jsonb,
  '{"servingSize": "1 Can (250 mL / 8.45 fl oz)", "calories": 10, "totalFat": "0 g", "sodium": "20 mg", "totalCarbohydrate": "0 g", "totalSugars": "0 g", "addedSugars": "0 g", "protein": "0 g"}'::jsonb,
  3
),
(
  'lemon', 'Lemon', 'Bright, clean, direct.',
  'Straight-up lemon, no filler — the sharpest, most direct flavor in the range for when you need energy without ceremony.',
  'zyro-yellow', '#F6E94A',
  2.99, 34.99, 12,
  'hero-lemon.webp', 'card-lemon.webp', null,
  array['Calm Focus', 'Creative Flow', 'Mental Energy', 'Enhanced Mood'],
  array['Zero Sugar', 'Low Calorie', 'Made For Focus', 'Made For More'],
  '[
    {"name": "N-Acetyl L-Tyrosine", "amount": "1000 mg"},
    {"name": "Alpha-GPC (50%)", "amount": "400 mg"},
    {"name": "L-Theanine", "amount": "200 mg"},
    {"name": "Taurine", "amount": "1000 mg"},
    {"name": "Caffeine", "amount": "150 mg"}
  ]'::jsonb,
  '{"servingSize": "1 Can (250 mL / 8.45 fl oz)", "calories": 10, "totalFat": "0 g", "sodium": "20 mg", "totalCarbohydrate": "0 g", "totalSugars": "0 g", "addedSugars": "0 g", "protein": "0 g"}'::jsonb,
  4
)
on conflict (slug) do nothing;
