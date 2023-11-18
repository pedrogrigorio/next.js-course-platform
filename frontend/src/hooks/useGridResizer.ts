import { useRef, useState, useEffect } from 'react'

function useGridResizer<T extends HTMLElement>(
  colMinWidth: number,
): [number, React.RefObject<T>] {
  const [cols, setCols] = useState(0)
  const gridRef = useRef<T>(null)

  useEffect(() => {
    const grid = gridRef.current
    const updateVisibleItems = () => {
      if (grid) {
        const containerWidth = grid.getBoundingClientRect().width
        const itemsPerPage = Math.floor(containerWidth / colMinWidth)
        setCols(itemsPerPage)
      }
    }

    updateVisibleItems()
    window.addEventListener('resize', updateVisibleItems)
    return () => {
      window.removeEventListener('resize', updateVisibleItems)
    }
  }, [])

  return [cols, gridRef]
}

export default useGridResizer
