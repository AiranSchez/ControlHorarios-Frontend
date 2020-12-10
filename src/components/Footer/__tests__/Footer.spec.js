import { render, screen } from '@testing-library/vue'
import '@testing-library/jest-dom'
import Footer from '@/components/Footer/Footer'

describe('Footer', () => {
  test('should render component', () => {
    render(Footer)
    const paragraph = screen.getByText('©Copyright all rights reserved to Flipday Team')
    expect(paragraph).toBeInTheDocument()
  })
})
