import { routes } from '@/lib/constants'
import Link from 'next/link'
import React from 'react'

type Props = {
    category: string
}

export default function HireCategoryCard({category}: Props) {
  return (
    <Link href={`${routes.hire_categories}/${category}`} className="border bg-primary-grey w-auto h-[100px]"></Link>
  )
}