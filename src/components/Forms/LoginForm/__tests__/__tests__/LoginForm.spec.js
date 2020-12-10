import { render, screen } from '@testing-library/vue'
import '@testing-library/jest-dom'
import LoginForm from '@/components/Forms/LoginForm/LoginForm'

describe('LoginForm', () => {
  test('should render component', () => {
    render(LoginForm)
    const paragraph = screen.getByText('Sign In ;)')
    expect(paragraph).toBeInTheDocument()
  })
})
