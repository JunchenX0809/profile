// Proof of work. To add a screenshot, put the file in src/assets/projects/,
// import it at the top of this file, and set `image` (plus `imageAlt`).
// Projects without an image get a generated cover.
export const projects = [
  {
    title: 'Bankuity digital business cards',
    kind: 'Shipped product',
    year: '2026',
    summary:
      'NFC- and QR-linked contact cards for the Bankuity team: one static site with a folder per person, deployed from GitHub to Cloudflare Pages, with saved-contact downloads and a HubSpot lead form.',
    tags: ['HTML & CSS', 'JavaScript', 'Cloudflare Pages', 'NFC'],
    links: [{ label: 'Live card', href: 'https://bankuity-cards.pages.dev/junchen-xiong/' }],
    image: null,
    imageAlt: '',
  },
  {
    title: 'Hybrid ML model of NO₂ concentrations in Israel',
    kind: 'Research · Columbia',
    year: '2025',
    summary:
      'An interpretable, residual-explaining XGBoost model that predicts NO₂ at 200 m resolution (spatial R² 0.84), built as a research assistant to Professor Mike Z. He.',
    tags: ['XGBoost', 'Python', 'Geospatial'],
    links: [{ label: 'Abstract (DOI)', href: 'https://doi.org/10.1289/isee.2023.MP-011' }],
    image: null,
    imageAlt: '',
  },
  {
    title: 'Grid-load forecasting and anomaly detection',
    kind: 'Work · NYSERDA',
    year: '2024',
    summary:
      'Gradient-boosting load forecasts that cut error by 20% against the prior OLS approach, plus a rules-and-Isolation-Forest system that reduced anomaly misclassification by 30%.',
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
]
