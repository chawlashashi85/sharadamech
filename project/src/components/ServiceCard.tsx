import React from 'react';
import * as Icons from 'lucide-react';
import { Service } from '../data/services';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = Icons[service.icon as keyof typeof Icons];

  return (
    <div className="relative group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-8 text-lg font-medium text-gray-900 group-hover:text-blue-600">
        {service.title}
      </h3>
      <p className="mt-2 text-base text-gray-500">
        {service.description}
      </p>
      <ul className="mt-4 space-y-2">
        {service.benefits.map((benefit, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <Icons.Check className="h-4 w-4 text-blue-600 mr-2" />
            {benefit}
          </li>
        ))}
      </ul>
      <a
        href="#"
        className="mt-6 inline-flex items-center text-blue-600 hover:text-blue-700"
      >
        Learn more →
      </a>
    </div>
  );
}