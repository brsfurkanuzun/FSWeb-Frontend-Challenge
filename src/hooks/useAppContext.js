import { useContext } from 'react'
import { AppStateContext } from '../context/AppStateContext'

export function useAppContext() {
  const context = useContext(AppStateContext)
  if (!context) {
    throw new Error('useAppContext must be used inside AppProvider')
  }
  return context
}
