"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export function Lightbox({
  images,
  title,
  startIndex = 0,
  onClose,
}: {
  images: string[]
  title: string
  startIndex?: number
  onClose: () => void
}) {
  const [index, setIndex] = useState(startIndex)
  const touchStartX = useRef<number | null>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const multiple = images.length > 1

  const prev = useCallback(
    () => setIndex((p) => (p - 1 + images.length) % images.length),
    [images.length],
  )
  const next = useCallback(
    () => setIndex((p) => (p + 1) % images.length),
    [images.length],
  )

  // Keyboard controls + body scroll lock
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      else if (e.key === "ArrowLeft") prev()
      else if (e.key === "ArrowRight") next()
    }
    document.addEventListener("keydown", onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    closeRef.current?.focus()
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [onClose, prev, next])

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 40 && multiple) {
      if (delta > 0) prev()
      else next()
    }
    touchStartX.current = null
  }

  const round =
    "flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} image viewer`}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(29,29,38,0.92)] p-4 backdrop-blur-sm"
    >
      <button
        ref={closeRef}
        type="button"
        aria-label="Close"
        onClick={onClose}
        className={`absolute right-4 top-4 ${round}`}
      >
        <X size={20} />
      </button>

      {multiple && (
        <button
          type="button"
          aria-label="Previous image"
          onClick={(e) => {
            e.stopPropagation()
            prev()
          }}
          className={`absolute left-3 top-1/2 -translate-y-1/2 sm:left-6 ${round}`}
        >
          <ChevronLeft size={22} />
        </button>
      )}

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={images[index]}
        alt={`${title} screenshot ${index + 1} of ${images.length}`}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => {
          touchStartX.current = e.touches[0].clientX
        }}
        onTouchEnd={onTouchEnd}
        className="max-h-[85vh] max-w-[92vw] rounded-2xl object-contain shadow-2xl"
      />

      {multiple && (
        <button
          type="button"
          aria-label="Next image"
          onClick={(e) => {
            e.stopPropagation()
            next()
          }}
          className={`absolute right-3 top-1/2 -translate-y-1/2 sm:right-6 ${round}`}
        >
          <ChevronRight size={22} />
        </button>
      )}

      {multiple && (
        <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-xs text-white backdrop-blur">
          {index + 1} / {images.length}
        </span>
      )}
    </div>,
    document.body,
  )
}
