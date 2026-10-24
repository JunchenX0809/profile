import portrait from '../assets/portrait.jpg'

export const profile = {
  firstName: 'Junchen',
  lastName: 'Xiong',
  status: 'GTM at Bankuity',
  location: 'New York City',
  // The hero cycles through these after the ">" prompt.
  roles: [
    'data scientist',
    'go-to-market at Bankuity',
    'energy-markets analyst',
    'strength coach',
    'speedcuber',
  ],
  intro:
    'I turn messy, real-world data into decisions people can act on — from forecasting New York’s grid load to taking a fintech product to market.',
  portrait,
  portraitAlt: 'Portrait of Junchen Xiong in a navy suit',
  email: 'jcxiong8956@gmail.com',
  // Files in public/ are served as-is; keep this name stable so old links keep working.
  resume: 'Junchen_Xiong_Resume.pdf',
  linkedin: 'https://www.linkedin.com/in/jcxiong0809/',
  github: 'https://github.com/JunchenX0809',
  sourceCode: 'https://github.com/JunchenX0809/profile',
}

export const about = {
  paragraphs: [
    'I’m a data scientist who enjoys the whole path from raw data to a decision. I studied business analytics and mathematics at Boston University, then quantitative methods and data science at Columbia.',
    'At NYSERDA I built PySpark pipelines, forecasting models, and Power BI dashboards for New York’s energy-markets team. Today I work on go-to-market at Bankuity, pairing analysis with building the tools the team actually uses.',
    'Outside work I train and coach strength athletes (NASM-certified), swim, and solve Rubik’s cubes faster than is strictly necessary.',
  ],
  stats: [
    { value: '3.98', label: 'GPA at Columbia QMSS, top 5%' },
    { value: '1st', label: 'Columbia Data Science Society Datathon, environmental track' },
    { value: '−20%', label: 'grid-load forecast error versus the prior model at NYSERDA' },
    { value: '10+', label: 'Power BI dashboards shipped for energy-market reporting' },
  ],
}
