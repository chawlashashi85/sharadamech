import React from 'react';
import * as Icons from 'lucide-react';
import { Feature } from '../data/features';

interface FeatureCardProps {
  feature: Feature;
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  const Icon = Icons[feature.icon as keyof typeof Icons];

  return (
    <div className="flex">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
          <Icon className="h-6 w-6" />
        </div>
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
        <p className="mt-2 text-base text-gray-500">{feature.description}</p>
      </div>
    </div>
  );
}