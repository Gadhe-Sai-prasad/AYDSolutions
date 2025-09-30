import React from 'react'


export default function Person({ name = '', title = '', bio = '' }) {
    const initials = name
        .split(' ')
        .filter(Boolean)
        .map((n) => n[0])
        .slice(0, 2)
        .join('')
        .toUpperCase()


    return (
        <div className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-semibold">{initials}</div>
            <div>
                <div className="font-semibold">{name}</div>
                <div className="text-xs text-gray-500">{title}</div>
                <div className="text-sm text-gray-600 mt-1">{bio}</div>
            </div>
        </div>
    )
}