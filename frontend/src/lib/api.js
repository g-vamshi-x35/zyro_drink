import axios from 'axios'

const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api'

export const api = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
})

api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = window.localStorage.getItem('zyro_admin_token')
    if (token) config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export const subscribeNewsletter = (email) => api.post('/newsletter', { email })

export const sendContactMessage = (payload) => api.post('/contact', payload)

export const fetchProducts = () => api.get('/products')

export const fetchProduct = (slug) => api.get(`/products/${slug}`)
