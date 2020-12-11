import '../../../../styles/tailwind.css'
import LoginForm from '@/components/Forms/LoginForm/LoginForm'

export default {
  title: 'LoginForm',
  component: LoginForm
}

const Template = (args, { argTypes }) => ({
  components: { LoginForm },
  props: Object.keys(argTypes),
  template: '<LoginForm />'
})

export const LoginFormDefault = Template.bind({})
