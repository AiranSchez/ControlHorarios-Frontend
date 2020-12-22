import { render, screen } from '@testing-library/vue'
import '@testing-library/jest-dom'
import Blockquote from '@/components/MemberCard/Blockquote/Blockquote'

describe('Blockquote', () => {
  test('should render component', () => {
    render(Blockquote, { props: { value: 'La salud es lo importante' } })
    const paragraph = screen.getByText('"La salud es lo importante"')
    expect(paragraph).toBeInTheDocument()
  })
})
