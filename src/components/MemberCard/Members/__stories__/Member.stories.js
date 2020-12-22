import '../../../../styles/tailwind.source.css'
import Member from '@/components/MemberCard/Member/Member'

export default {
  title: 'Member',
  component: Member
}

const Template = (args, { argTypes }) => ({
  components: { Member },
  template: '<Member/>'
})

export const MemberDefault = Template.bind({})
