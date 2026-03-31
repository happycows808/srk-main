'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 50000, label: 'Lives Reached', suffix: '+' },
  { value: 3000, label: 'Program Graduates', suffix: '+' },
  { value: 200, label: 'Partner Organizations', suffix: '+' },
  { value: 10, label: 'Years of Service', suffix: '+' },
]

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [started, target])

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      <span className="text-red-600">{suffix}</span>
    </span>
  )
}

export default function ImpactStats() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center border-t border-white/20 pt-8">
              <p className="font-bebas text-5xl md:text-6xl lg:text-7xl text-white mb-3">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="font-bebas text-sm md:text-base tracking-widest text-white/50 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
