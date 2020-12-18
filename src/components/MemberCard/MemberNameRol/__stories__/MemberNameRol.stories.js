import '../../../../styles/tailwind.source.css'
import MemberNameRol from '@/components/MemberCard/MemberNameRol/MemberNameRol'

export default {
  title: 'MemberNameRol',
  component: MemberNameRol
}

const Template = (args, { argTypes }) => ({
  components: { MemberNameRol },
  props: Object.keys(argTypes),
  template: '<MemberNameRol :name="name" :rol="rol"/>'
})

export const MemberNameRolDefault = Template.bind({})
MemberNameRolDefault.args = {
  name: 'Ari',
  rol: 'Admin'
}
