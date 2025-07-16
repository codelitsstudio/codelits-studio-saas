
'use client';

export function SVGPattern() {
    return (
        <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full fill-primary/10 stroke-primary/20"
        >
            <defs>
                <pattern
                    id="pattern"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                    patternContentUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                >
                    <path d="M0 38.5L40 38.5M0 1.5L40 1.5" strokeWidth={1}></path>
                    <path d="M38.5 0L38.5 40M1.5 0L1.5 40" strokeWidth={1}></path>
                </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth="0" fill="url(#pattern)"></rect>
        </svg>
    )
}
