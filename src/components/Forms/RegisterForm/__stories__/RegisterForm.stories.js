import '../../../../styles/tailwind.source.css'
import RegisterForm from '@/components/Forms/RegisterForm/RegisterForm'

export default {
  title: 'RegisterForm',
  component: RegisterForm
}

const Template = (args, { argTypes }) => ({
  components: { RegisterForm },
  props: Object.keys(argTypes),
  template: '<RegisterForm />'
})

export const RegisterFormDefault = Template.bind({})
