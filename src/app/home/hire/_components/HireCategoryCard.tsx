import { routes } from '@/lib/constants'
import { RollerCoaster } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
    category: string
}

const roles = [
  { category: 'mobile', title: 'Mobile Developer', imageUrl: '' },
  { category: 'backend', title: 'Backend Developer', imageUrl: '' },
  { category: 'frontend', title: 'Frontend Developer', imageUrl: '' },
  { category: 'ui-ux', title: 'UI/UX Designer', imageUrl: '' },
]

export default function HireCategoryCard({category}: Props) {
  const role = roles.find((role) => role.category === category);

  if(!role) {
    return null;
  }

  return (
    <Link 
      href={`${routes.hire_categories}/${category}`} 
      className='bg-primary-grey rounded-lg hover:shadow-sm transition-shadow'
    >
      <div className="flex items-center w-auto h-[100px] flex-shrink-0">
      <Image
            src={role.imageUrl}
            alt={role.title}
            className="w-1/3 h-full rounded-l-md"
          />

      <div className='ml-4 flex-1'>
        <h2 className='text-lg font-semibold text-gray-800'>{role.title}</h2>
      </div>
      </div>
    </Link>
  )
}