import { fireEvent, render, screen } from '@testing-library/vue'
import FormInput from '@/components/Forms/FormInput/FormInput'
import '@testing-library/jest-dom'

describe('FormInput', () => {
  test('should render component', () => {
    render(FormInput, { props: { label: 'Name', placeholder: 'Your name', id: 'forminput-name' } })
    const paragraph = screen.getByLabelText('Name')
    expect(paragraph).toBeInTheDocument()
  })

  test('Should be writteable', async () => {
    render(FormInput, { props: { label: 'Name', placeholder: 'Your name', id: 'forminput-name' } })
    const input = screen.getByPlaceholderText('Your name')
    await fireEvent.change(input, { target: { value: 'test' } })
    expect(input.value).toBe('test')
  })
})
