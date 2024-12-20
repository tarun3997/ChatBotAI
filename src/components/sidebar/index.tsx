"use client"
import useSidebar from '@/context/use-sidebar'
import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
    domains: | {
        id: string
        name: string
        icon: string
    }[]
    | null
    | undefined
}

const SideBar = ({domains}: Props) => {
    const {expand, onExpand, page, onSignOut} = useSidebar()
  return (
    <div className={cn(
        'bg-cream h-full w-[60px] fill-mode-forwards fixed md:relative',
        expand == undefined && '',
        expand == true
        ? 'animate-open-sidebar'
        : expand == false && 'animate-close-sidebar'
    )}>
        {
            expand ? (
                <MaxMenu 
                 domains={domains}
                 current={page!}
                 onExpand={onExpand}
                 onSignOut={onSignOut}
                />
            ) : (
                <MinMenu 
                domains={domains}
                onShrink={onExpand}
                 current={page!}
                 onSignOut={onSignOut}
                />
            )
        }
    </div>
  )
}

export default SideBar