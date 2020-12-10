import { render, screen } from '@testing-library/vue'
import '@testing-library/jest-dom'
import RegisterForm from '@/components/Forms/RegisterForm/RegisterForm'

describe('LoginForm', () => {
  test('should render component', () => {
    render(RegisterForm)
    const paragraph = screen.getByText('Sign Up ;)')
    expect(paragraph).toBeInTheDocument()
  })
})
