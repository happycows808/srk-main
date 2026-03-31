'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 50000, display: '50,000', label: 'Lives Reached', suffix: '+', desc: 'People who have heard Lili speak' },
  { value: 3000, display: '3,000', label: 'Program Graduates', suffix: '+', desc: 'Drivers who completed RDI' },
  { value: 200, display: '200', label: 'Partner Organizations', suffix: '+', desc: 'Law enforcement, schools & civic groups' },
  { value: 10, display: '10', label: 'Years of Service', suffix: '+', desc: 'Fighting to end street racing since 2014' },
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
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    const duration = 2000
    const steps = 80
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
      {target >= 1000 ? count.toLocaleString() : count}
      <span className="text-red-600">{suffix}</span>
    </span>
  )
}

export default function ImpactStats() {
  return (
    <section className="bg-black py-24 px-6 border-y border-white/10">
      <div className="max-w-7xl mx-auto">
        <p className="font-bebas text-red-600 text-base tracking-[0.3em] uppercase mb-4 text-center">
          A Decade of Impact
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-black px-6 py-12 text-center group hover:bg-red-600/5 transition-colors">
              <p className="font-bebas text-5xl sm:text-6xl lg:text-7xl text-white mb-2 leading-none">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="font-bebas text-sm md:text-base tracking-widest text-white uppercase mb-3">
                {stat.label}
              </p>
              <p className="font-serif text-white/30 text-xs leading-relaxed hidden md:block">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
