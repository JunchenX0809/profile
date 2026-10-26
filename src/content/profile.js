import graduation from '../assets/photos/graduation.jpg'
import headshot from '../assets/photos/headshot.jpg'

export const profile = {
  firstName: 'Junchen',
  lastName: 'Xiong',
  status: 'Data Scientist at Bankuity',
  location: 'New York City',
  // The hero cycles through these after the ">" prompt.
  roles: [
    'data scientist',
    'credit-risk modeler',
    'ML researcher',
    'strength coach',
    'speedcuber',
  ],
  intro:
    'I’m a data scientist who builds production ML for consumer lending, from credit-risk features and transaction labeling to the pipelines that keep models accurate for clients.',
  // Hero carousel, shown in this order. `position` sets which part of the photo
  // stays in frame (CSS object-position); `caption` appears on the photo.
  photos: [
    {
      src: headshot,
      alt: 'Portrait of Junchen Xiong in a navy suit',
      caption: 'New York City',
      position: 'center top',
    },
    {
      src: graduation,
      alt: 'Junchen Xiong at his Boston University graduation, wearing a red gown',
      caption: 'Boston University, 2023',
      position: 'center',
    },
  ],
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
    'Today I’m a data scientist at Concord Advice and Bankuity, building credit-risk features, NER-based transaction labeling, and the KPI pipelines behind them. Before that, I built PySpark forecasting pipelines and Power BI dashboards for NYSERDA’s energy-markets team, and machine-learning models for air-pollution and satellite-imagery research.',
    'Outside work I train and coach strength athletes (NASM-certified), swim, and solve Rubik’s cubes faster than is strictly necessary.',
  ],
  stats: [
    { value: '$200K+', label: 'per month recovered for a lending client with new credit features' },
    { value: '+30%', label: 'loan capture from the NER transaction-labeling upgrade' },
    { value: '3.98', label: 'GPA at Columbia QMSS, top 5%' },
    { value: '1st', label: 'Columbia Data Science Society Datathon, environmental track' },
  ],
}
