import graduation from '../assets/photos/graduation.jpg'
import headshot from '../assets/photos/headshot.jpg'

export const profile = {
  firstName: 'Junchen',
  lastName: 'Xiong',
  status: 'Data Scientist',
  location: 'New York City',
  // The hero cycles through these after the ">" prompt.
  roles: [
    'data scientist',
    'energy-markets analyst',
    'go-to-market at Bankuity',
    'strength coach',
    'speedcuber',
  ],
  intro:
    'I’m a data scientist who turns messy, real-world data into decisions people can act on, from forecasting New York’s grid load to modeling air pollution at 200-meter resolution.',
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
    'At NYSERDA I built PySpark pipelines, forecasting models, and Power BI dashboards for New York’s energy-markets team. Alongside my data work, I help Bankuity with go-to-market, pairing analysis with the tools the team actually uses.',
    'Outside work I train and coach strength athletes (NASM-certified), swim, and solve Rubik’s cubes faster than is strictly necessary.',
  ],
  stats: [
    { value: '3.98', label: 'GPA at Columbia QMSS, top 5%' },
    { value: '1st', label: 'Columbia Data Science Society Datathon, environmental track' },
    { value: '−20%', label: 'grid-load forecast error versus the prior model at NYSERDA' },
    { value: '10+', label: 'Power BI dashboards shipped for energy-market reporting' },
  ],
}
