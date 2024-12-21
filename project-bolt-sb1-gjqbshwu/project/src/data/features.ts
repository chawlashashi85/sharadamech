export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export const features = [
  {
    title: 'Same-Day Turnaround',
    description: 'Get parts in 24 hours with our automated manufacturing systems and digital-first approach. Real-time DFM feedback ensures first-time-right parts.',
    icon: 'Clock'
  },
  {
    title: 'Quality Assurance',
    description: 'ISO 9001:2015, AS9100, and IATF 16949 certified facilities. Full material traceability and inspection reports available.',
    icon: 'Shield'
  },
  {
    title: 'Instant Quoting',
    description: 'Upload your CAD files and receive instant pricing with our automated quoting engine. Design feedback in real-time, 24/7.',
    icon: 'Zap'
  },
  {
    title: 'Industry Expertise',
    description: 'Serving medical, aerospace, automotive, and consumer products industries for over 20 years. Expert application engineers available for consultation.',
    icon: 'Award'
  }
];