import React from 'react'


export default function Card({ title, subtitle, children }) {
    return (
        <div className="p-6 bg-white rounded shadow-sm">
            <h4 className="font-semibold">{title}</h4>
            <div className="text-sm text-gray-500 mt-1">{subtitle}</div>
            <p className="mt-3 text-gray-600 text-sm">{children}</p>
        </div>
    )
}