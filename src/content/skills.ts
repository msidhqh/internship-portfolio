export type SkillGroup = {
  id: string
  label: string
  description: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'development',
    label: 'Development',
    description:
      'Building practical web applications and software solutions through hands-on projects.',
    items: [
      'JavaScript',
      'React',
      'HTML/CSS',
      'Python',
      'Flask',
      'REST APIs',
      'IndexedDB',
    ],
  },
  {
    id: 'cloud-databases',
    label: 'Cloud & Databases',
    description:
      'Working with cloud infrastructure and databases through hands-on projects and coursework.',
    items: ['AWS EC2', 'AWS S3', 'SQLite', 'Database Design', 'CRUD'],
  },
  {
    id: 'cybersecurity',
    label: 'Cybersecurity',
    description:
      'Currently learning: Application Security · Cybersecurity Attack & Defence · Cyber Forensic Technologies & Processes',
    items: ['Authentication', 'Access Control', 'Multi-Factor Authentication (MFA)'],
  },
  {
    id: 'data-analytics',
    label: 'Data & Analytics',
    description:
      'Cleaning, analysing and presenting data through interactive dashboards and visualisations.',
    items: ['Power BI', 'Power Query', 'DAX'],
  },
  {
    id: 'design-tools',
    label: 'Design & Tools',
    description:
      'Designing user interfaces and working with development and version-control tools.',
    items: ['Figma', 'Git', 'GitHub'],
  },
]
