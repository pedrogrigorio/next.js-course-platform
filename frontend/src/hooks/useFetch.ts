import { api } from '@/lib/axios'
import { useEffect, useState } from 'react'

export function useFetch<T = unknown>(url: string) {
  const [data, setData] = useState<T | null>(null)

  const fetchData = async () => {
    const response = await api.get(url)
    setData(response.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { data }
}
