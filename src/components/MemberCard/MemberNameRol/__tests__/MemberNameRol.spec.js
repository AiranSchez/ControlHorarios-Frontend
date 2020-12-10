import { render, screen } from '@testing-library/vue'
import '@testing-library/jest-dom'
import MemberNameRol from '@/components/MemberCard/MemberNameRol/MemberNameRol'

describe('Blockquote', () => {
  test('should render component', () => {
    render(MemberNameRol, { props: { name: 'Manu', rol: 'puto amo' } })
    const paragraph = screen.getByText('puto amo')
    expect(paragraph).toBeInTheDocument()
  })
})
