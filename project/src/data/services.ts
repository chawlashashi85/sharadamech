export interface Service {
  title: string;
  description: string;
  benefits: string[];
  icon: string;
}

export const services = [
  {
    title: '3D Printing',
    description: 'Industrial-grade additive manufacturing with next-day delivery.',
    benefits: [
      'Complex geometries and internal features',
      'Low-volume production runs',
      'Multiple material options',
      'No tooling required'
    ],
    icon: 'Printer'
  },
  {
    title: 'CNC Machining',
    description: 'Precision-machined parts from 100+ engineering-grade materials.',
    benefits: [
      'Tight tolerances to +/- 0.05mm',
      'Parts up to 610mm x 610mm',
      'Surface finishing options',
      'Production-grade materials'
    ],
    icon: 'Cog'
  },
  {
    title: 'Injection Molding',
    description: 'Quick-turn molding with lifetime of 10,000+ parts per tool.',
    benefits: [
      'Bridge and low-volume production',
      'Over 100 thermoplastics',
      'Custom color matching',
      'Insert molding available'
    ],
    icon: 'Layers'
  },
  {
    title: 'Sheet Metal',
    description: 'Custom sheet metal parts in as fast as 3 days.',
    benefits: [
      'Up to 4mm thickness',
      'Multiple finish options',
      'Hardware insertion',
      'Complex bend geometries'
    ],
    icon: 'Box'
  }
];