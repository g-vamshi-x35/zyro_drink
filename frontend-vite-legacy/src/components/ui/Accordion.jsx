import { useState } from 'react'
import clsx from 'clsx'

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="divide-y divide-zyro-border border-y border-zyro-border">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
            >
              <span className="font-display text-lg font-medium uppercase text-zyro-white sm:text-xl">
                {item.question}
              </span>
              <span
                className={clsx(
                  'shrink-0 font-mono text-xl text-zyro-green transition-transform duration-200',
                  isOpen && 'rotate-45',
                )}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <div
              className={clsx(
                'grid overflow-hidden transition-all duration-300 ease-in-out',
                isOpen ? 'grid-rows-[1fr] pb-6 opacity-100' : 'grid-rows-[0fr] opacity-0',
              )}
            >
              <p className="min-h-0 font-body text-sm leading-relaxed text-zyro-ink-dim">
                {item.answer}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
