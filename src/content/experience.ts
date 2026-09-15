import { profile } from './profile'

export const leadership = {
  organisation: 'SIT Club',
  role: 'EXCO',
  institution: 'Nanyang Polytechnic',
  dates: profile.sitClubDates,
  summary:
    'As part of the SIT Club executive committee, I help plan school-wide events, manage team coordination, and mentor junior students.',
  focus: [
    'Event planning',
    'Team coordination',
    'Mentoring and supporting juniors',
  ],
  events: [
    {
      name: 'EAE Festival',
      role: 'ASSISTANT IN-CHARGE',
      note: 'Facilitated planning and on-the-ground volunteer coordination during the Early Admissions Exercise festival for the School of Information Technology.',
    },
    {
      name: 'Camp Eureka',
      role: 'ASSISTANT IN-CHARGE',
      note: 'A NYP-wide student engagement event bringing together students across all years and schools through interactive activities and team-based experiences.',
    },
  ],
}

export const hackathon = {
  title: 'Hackathon Participation',
  name: profile.hackathonName,
  date: profile.hackathonDate,
  summary:
    'Participated in a time-constrained team hackathon involving rapid ideation, collaborative development and solution pitching.',
  themes: [
    'Team collaboration',
    'Rapid ideation',
    'Problem solving',
    'Building under time constraints',
    'Solution pitching',
  ],
}

export const education = {
  institution: profile.institution,
  programme: profile.programme,
  expectedGraduation: profile.expectedGraduation,
  note: 'Focused on software development, cloud architectures, user-centric design, database systems, and data analytics.',
}
