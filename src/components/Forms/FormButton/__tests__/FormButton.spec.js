import { render, screen } from '@testing-library/vue'
import '@testing-library/jest-dom'
import FormButton from '@/components/Forms/FormButton/FormButton'

describe('FormButton', () => {
  test('should render component', () => {
    render(FormButton, { props: { value: 'Sign up' } })
    const paragraph = screen.getByText('Sign up')
    expect(paragraph).toBeInTheDocument()
  })
})
