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
    'Worked with a team to develop a website using AWS services and presented our solution to a panel on the event day.',
  themes: [
    'AWS services',
    'Team collaboration',
    'Rapid prototyping',
    'Solution pitching',
  ],
}

export const education = {
  institution: profile.institution,
  programme: profile.programme,
  expectedGraduation: profile.expectedGraduation,
  note: 'Focused on software development, cloud architectures, user-centric design, database systems, and data analytics.',
}
