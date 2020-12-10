import { render, screen } from '@testing-library/vue'
import '@testing-library/jest-dom'
import MemberAvatar from '@/components/MemberCard/MemberAvatar/MemberAvatar'

describe('Blockquote', () => {
  test('should render component', () => {
    render(MemberAvatar, { props: { picture: 'Avatar-picture-1.jpg' } })
    const paragraph = screen.getAllByAltText('Member project avatar')
    expect(paragraph).toBeTruthy()
  })
})
