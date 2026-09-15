export type Certification = {
  id: string
  number: string
  name: string
  issuer: string
  date: string
  credentialId?: string
  skills?: string[]
  verifyUrl?: string
  documentUrl?: string
}

export const certifications: Certification[] = [
  {
    id: 'aws-genai',
    number: '01',
    name: 'AWS Academy Graduate - Generative AI Foundations - Training Badge',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Sep 2026',
    credentialId: '99634f54-8913-4632-9e37-9f98377d79f9',
    verifyUrl: 'https://www.credly.com/earner/earned/badge/99634f54-8913-4632-9e37-9f98377d79f9',
    documentUrl: '/assets/AWSAcademy_GenAI.pdf',
  },
  {
    id: 'aws-cloud',
    number: '02',
    name: 'AWS Academy Graduate - Cloud Foundations - Training Badge',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Sep 2026',
    credentialId: 'ffcb60ac-f4de-4548-93bc-224be5069391',
    verifyUrl: 'https://www.credly.com/earner/earned/badge/ffcb60ac-f4de-4548-93bc-224be5069391',
    documentUrl: '/assets/AWSAcademy_CloudFoundations.pdf',
  },
  {
    id: 'anthropic-ai',
    number: '03',
    name: 'AI Fluency: Framework and Foundation',
    issuer: 'Anthropic',
    date: 'Dec 2025',
    verifyUrl: 'https://verify.skilljar.com/c/dotnxyan3o4y',
    documentUrl: '/assets/AnthropicAI.pdf',
  },
  {
    id: 'ibm-web',
    number: '04',
    name: 'Web Development Fundamentals',
    issuer: 'IBM',
    date: 'Aug 2025',
    credentialId: 'CREDLY-ce744ad1-ca21-498e-a9ea-8c01f792977d',
    verifyUrl: 'https://www.credly.com/org/ibm-skillsbuild-students/badge/web-development-fundamentals',
  },
  {
    id: 'ibm-ux',
    number: '05',
    name: 'User Experience Design Fundamentals',
    issuer: 'IBM',
    date: 'Aug 2025',
    credentialId: 'CREDLY-ae2e453d-5311-41a0-be95-b217e0c4670f',
    verifyUrl: 'https://www.credly.com/org/ibm-skillsbuild-students/badge/user-experience-design-fundamentals',
  },
]

