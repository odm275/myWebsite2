import { useState, useEffect } from "react"

export default function useWindowScrollY() {
  const [windowScrollY, setWindowScrollY] = useState(window.scrollY)
  useEffect(() => {
    function handleScrollY() {
      setWindowScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScrollY)
    return () => window.removeEventListener("scroll", handleScrollY)
  }, [])

  return windowScrollY
}
