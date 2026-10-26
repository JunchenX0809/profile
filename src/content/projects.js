// Proof of work. To add a screenshot, put the file in src/assets/projects/,
// import it at the top of this file, and set `image` (plus `imageAlt`).
// Projects without an image get a generated cover.
export const projects = [
  {
    title: 'NER transaction labeling for credit underwriting',
    kind: 'Work · Bankuity',
    year: '2026',
    summary:
      'Built the accuracy evaluation that cleared a new named-entity recognition model against an internal merchant-to-category knowledge base: +30% loan capture and −32.6% transfer noise. Two client loan books now underwrite on the upgraded labels.',
    tags: ['NER', 'Python', 'Redis', 'Model evaluation'],
    links: [],
    image: null,
    imageAlt: '',
  },
  {
    title: 'Urban greenspace ratings from satellite imagery',
    kind: 'Research · Mount Sinai',
    year: '2025',
    summary:
      'A PyTorch multi-head CNN that rates urban greenspace from 512×512 satellite tiles, with onboarding for an 8-member research group and a scalable path to 8M+ images.',
    tags: ['PyTorch', 'CNN', 'Computer vision'],
    links: [],
    image: null,
    imageAlt: '',
  },
  {
    title: 'Hybrid ML model of NO₂ and ozone data quality',
    kind: 'Research · Columbia',
    year: '2025',
    summary:
      'An interpretable, residual-explaining XGBoost model that predicts NO₂ at 200 m resolution (spatial R² 0.84), plus a hybrid Isolation Forest anomaly system that cut misclassification by 30% in the ozone data pipeline.',
    tags: ['XGBoost', 'Isolation Forest', 'Geospatial'],
    links: [{ label: 'Abstract (DOI)', href: 'https://doi.org/10.1289/isee.2023.MP-011' }],
    image: null,
    imageAlt: '',
  },
  {
    title: 'Grid-load forecasting',
    kind: 'Work · NYSERDA',
    year: '2024',
    summary:
      'Gradient-boosting load forecasts that cut error by 20% (under 100 MW) against OLS baselines, running on PySpark pipelines over AWS with schema validation and KNN imputation.',
    tags: ['scikit-learn', 'PySpark', 'AWS'],
    links: [],
    image: null,
    imageAlt: '',
  },
  {
    title: 'Solar-eclipse energy resilience study',
    kind: 'Policy analysis · NYSERDA',
    year: '2024',
    summary:
      'A regression model of gasoline-price drivers and a strategic memo that informed two policy changes and five annex amendments.',
    tags: ['Python', 'Regression', 'Power Query'],
    links: [],
    image: null,
    imageAlt: '',
  },
  {
    title: 'Bankuity digital business cards',
    kind: 'Side build',
    year: '2026',
    summary:
      'NFC- and QR-linked contact cards for the Bankuity team: one static site with a folder per person, deployed from GitHub to Cloudflare Pages.',
    tags: ['HTML & CSS', 'JavaScript', 'Cloudflare Pages'],
    links: [{ label: 'Live card', href: 'https://bankuity-cards.pages.dev/junchen-xiong/' }],
    image: null,
    imageAlt: '',
  },
]
