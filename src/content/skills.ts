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
    description: 'Building web applications and practical software solutions.',
    items: ['JavaScript', 'React', 'HTML/CSS', 'Python', 'Flask', 'IndexedDB'],
  },
  {
    id: 'cloud',
    label: 'Cloud & Backend',
    description: 'Service-based backends, APIs, and cloud-native data stores.',
    items: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'REST APIs', 'Serverless'],
  },
  {
    id: 'data',
    label: 'Data',
    description: 'Shaping datasets and turning them into readable visual stories.',
    items: ['Power BI', 'Power Query', 'DAX', 'Data Modeling'],
  },
  {
    id: 'tools',
    label: 'Tools',
    description: 'Version control, collaboration, and client-side persistence.',
    items: ['Git', 'GitHub', 'Figma'],
  },
]
