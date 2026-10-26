import { FaAws, FaMicrosoft } from 'react-icons/fa6'
import {
  SiApachespark,
  SiDatabricks,
  SiDocker,
  SiGit,
  SiGooglebigquery,
  SiHuggingface,
  SiMongodb,
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiQlik,
  SiR,
  SiRedis,
  SiScikitlearn,
  SiStreamlit,
} from 'react-icons/si'

// Mirrors the résumé's skills section. `icon` is optional; skills without one
// render as a plain pill.
export const skillGroups = [
  {
    title: 'Languages & databases',
    skills: [
      { name: 'Python', icon: SiPython },
      { name: 'SQL', icon: SiPostgresql },
      { name: 'R', icon: SiR },
      { name: 'pandas', icon: SiPandas },
      { name: 'NumPy', icon: SiNumpy },
      { name: 'Redis', icon: SiRedis },
      { name: 'MongoDB', icon: SiMongodb },
    ],
  },
  {
    title: 'LLM & NLP',
    skills: [
      { name: 'Prompt engineering' },
      { name: 'LLM fine-tuning', icon: SiHuggingface },
      { name: 'Multi-model consensus' },
      { name: 'Named entity recognition' },
      { name: 'Evaluation & accuracy labeling' },
    ],
  },
  {
    title: 'Machine learning',
    skills: [
      { name: 'scikit-learn', icon: SiScikitlearn },
      { name: 'PyTorch', icon: SiPytorch },
      { name: 'Gradient boosting' },
      { name: 'Credit-risk modeling' },
      { name: 'Anomaly detection' },
      { name: 'Time series' },
    ],
  },
  {
    title: 'Data & cloud engineering',
    skills: [
      { name: 'AWS', icon: FaAws },
      { name: 'Azure', icon: FaMicrosoft },
      { name: 'BigQuery', icon: SiGooglebigquery },
      { name: 'Databricks', icon: SiDatabricks },
      { name: 'PySpark', icon: SiApachespark },
      { name: 'Docker', icon: SiDocker },
      { name: 'Git', icon: SiGit },
    ],
  },
  {
    title: 'Visualization',
    skills: [
      { name: 'Power BI' },
      { name: 'Tableau' },
      { name: 'Qlik', icon: SiQlik },
      { name: 'Streamlit', icon: SiStreamlit },
    ],
  },
  {
    title: 'Certifications',
    skills: [{ name: 'Professional Scrum Master I' }, { name: 'NASM Certified Personal Trainer' }],
  },
]
