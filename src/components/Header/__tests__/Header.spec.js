import { render, screen } from '@testing-library/vue'
import '@testing-library/jest-dom'
import Header from '@/components/Header/Header'

describe('Header', () => {
  test('should render component', () => {
    render(Header)
    const paragraph = screen.getByText('Home')
    expect(paragraph).toBeInTheDocument()
  })
})
