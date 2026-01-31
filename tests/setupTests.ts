import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

// Limpa após cada teste (boa prática)
afterEach(() => {
  cleanup()
})