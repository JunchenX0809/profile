import { useReducedMotion } from 'motion/react'
import { useEffect, useState } from 'react'

// Types each word, pauses, deletes it, and moves to the next.
export default function Typewriter({ words, typeMs = 70, deleteMs = 35, holdMs = 1800 }) {
  const reduceMotion = useReducedMotion()
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reduceMotion) return
    const word = words[wordIndex]
    const finishedTyping = !deleting && text === word
    const delay = finishedTyping ? holdMs : deleting ? deleteMs : typeMs

    const timer = setTimeout(() => {
      if (finishedTyping) {
        setDeleting(true)
      } else if (deleting && text === '') {
        setDeleting(false)
        setWordIndex((wordIndex + 1) % words.length)
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)))
      }
    }, delay)
    return () => clearTimeout(timer)
  }, [text, deleting, wordIndex, words, reduceMotion, typeMs, deleteMs, holdMs])

  return (
    <>
      {/* Screen readers get the full list once instead of every keystroke. */}
      <span className="sr-only">{words.join(', ')}</span>
      <span aria-hidden="true">
        {reduceMotion ? words[0] : text}
        <span className="ml-0.5 inline-block h-[1em] w-[0.55em] translate-y-[0.15em] animate-blink bg-accent motion-reduce:animate-none" />
      </span>
    </>
  )
}
