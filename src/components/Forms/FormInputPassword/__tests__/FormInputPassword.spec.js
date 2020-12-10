import { fireEvent, render, screen } from '@testing-library/vue'
import '@testing-library/jest-dom'
import FormInputPassword from '@/components/Forms/FormInputPassword/FormInputPassword'
import userEvent from '@testing-library/user-event'

describe('FormInputPassword', () => {
  test('should render component', () => {
    render(FormInputPassword, { props: { label: 'Password', placeholder: 'Your password', id: 'forminput-password' } })
    const paragraph = screen.getByPlaceholderText('Your password')
    expect(paragraph).toBeInTheDocument()
  })

  test('should render if password is valid', async () => {
    render(FormInputPassword, { props: { label: 'Password', placeholder: 'Your password', id: 'forminput-password' } })
    const input = screen.getByPlaceholderText('Your password')
    userEvent.type(input, '123abc123')
    expect(screen.getByText('Valid password')).toBeInTheDocument()
  })
})
