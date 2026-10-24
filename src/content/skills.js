import { FaAws, FaMicrosoft } from 'react-icons/fa6'
import {
  SiApacheairflow,
  SiApachespark,
  SiDatabricks,
  SiGit,
  SiGooglebigquery,
  SiJira,
  SiJupyter,
  SiLooker,
  SiMongodb,
  SiPandas,
  SiPostgresql,
  SiPython,
  SiR,
  SiScikitlearn,
} from 'react-icons/si'

// `icon` is optional; skills without one render as a plain pill.
export const skillGroups = [
  {
    title: 'Analysis & modeling',
    skills: [
      { name: 'Python', icon: SiPython },
      { name: 'R', icon: SiR },
      { name: 'SQL', icon: SiPostgresql },
      { name: 'pandas', icon: SiPandas },
      { name: 'scikit-learn', icon: SiScikitlearn },
      { name: 'Jupyter', icon: SiJupyter },
    ],
  },
  {
    title: 'Data engineering & cloud',
    skills: [
      { name: 'Spark', icon: SiApachespark },
      { name: 'Databricks', icon: SiDatabricks },
      { name: 'Airflow', icon: SiApacheairflow },
      { name: 'BigQuery', icon: SiGooglebigquery },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'AWS', icon: FaAws },
      { name: 'Azure', icon: FaMicrosoft },
    ],
  },
  {
    title: 'Statistics & ML',
    skills: [
      { name: 'Regression' },
      { name: 'Gradient boosting' },
      { name: 'Tree models' },
      { name: 'Causal inference' },
      { name: 'Time series' },
      { name: 'NLP' },
    ],
  },
  {
    title: 'Reporting & delivery',
    skills: [
      { name: 'Power BI' },
      { name: 'Looker', icon: SiLooker },
      { name: 'Git', icon: SiGit },
      { name: 'Jira', icon: SiJira },
      { name: 'KPI reporting' },
      { name: 'Scrum (PSM I)' },
    ],
  },
]
