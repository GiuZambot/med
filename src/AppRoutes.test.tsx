import AppRoutes from './AppRoutes'
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

vi.mock('@shared', () => ({
  AuthProvider: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="auth-provider">{children}</div>
  ),
  useAuth: () => ({ userData: { firstName: 'test' } }),
}))

describe('App Component', () => {
  it('should render the Home component at the root path', () => {
    render(<AppRoutes />)

    expect(screen.getByText(/Welcome to Galaxy/i)).toBeInTheDocument()
  })
})
