import '../../../../styles/tailwind.css'
import MemberAvatar from '@/components/MemberCard/MemberAvatar/MemberAvatar'

export default {
  title: 'MemberAvatar',
  component: MemberAvatar
}

const Template = (args, { argTypes }) => ({
  components: { MemberAvatar },
  props: Object.keys(argTypes),
  template: '<MemberAvatar :picture="picture" />'
})

export const MemberAvatarDefault = Template.bind({})
MemberAvatarDefault.args = {
  picture: 'Avatar-picture-1.jpg'
}
