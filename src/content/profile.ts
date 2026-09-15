/**
 * Personal details for the portfolio.
 * Replace every [PLACEHOLDER] value before sharing this site.
 * Do not invent missing information — leave a placeholder until you have the real one.
 */
export const profile = {
  name: 'Maahirah Sidhiqah',
  monogram: 'MS',
  role: 'Information Technology Student',
  location: 'Singapore',
  programme: 'Diploma in Information Technology',
  institution: 'Nanyang Polytechnic',
  expectedGraduation: '2028',
  seeking: 'IT Internship',
  email: '250399d@mymail.nyp.edu.sg',
  linkedin: 'https://www.linkedin.com/in/maahirah-sidhiqah-a45709370/',
  github: '',
  portfolioUrl: '',
  sitClubDates: 'April 2026 – Present',
  hackathonName: 'NYP x AWS Hackathon 2026',
  hackathonDate: '19 August 2026',
} as const

export const seo = {
  title: `${profile.name} — Information Technology Student`,
  description:
    `Portfolio of ${profile.name}, an Information Technology student showcasing projects across full-stack development, cloud technologies, databases and data visualisation.`,
}

export function isPlaceholder(value: string) {
  return /\[(YOUR NAME|YN|ADD |HACKATHON |SIT CLUB )/i.test(value)
}
