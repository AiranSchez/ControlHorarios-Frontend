import { render, screen } from '@testing-library/vue'
import '@testing-library/jest-dom'
import FormInputEmail from '@/components/Forms/FormInputEmail/FormInputEmail'

describe('FormInputEmail', () => {
  test('should render component', () => {
    render(FormInputEmail, { props: { label: 'Email', placeholder: 'Email', id: 'forminput-email' } })
    const paragraph = screen.getByPlaceholderText('Email')
    expect(paragraph).toBeInTheDocument()
  })
/*
  test('should render if password is valid', async () => {
    render(FormInputEmail, { props: { label: 'Email', placeholder: 'Email', id: 'forminput-email' } })
    const input = screen.getByPlaceholderText('Email')
    await fireEvent.change(input, { target: { value: 'asdasd@asdasda.com' } })
    const test = screen.getByText('Valid email')
    expect(test).toBeInTheDocument()
  }) */
})
