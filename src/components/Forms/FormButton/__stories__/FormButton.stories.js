import '../../../../styles/tailwind.css'
import FormButton from '@/components/Forms/FormButton/FormButton'

export default {
  title: 'FormButton',
  component: FormButton
}

const Template = (args, { argTypes }) => ({
  components: { FormButton },
  props: Object.keys(argTypes),
  template: '<FormButton :value="value"/>'
})

export const FormButtonDefault = Template.bind({})
FormButtonDefault.args = {
  value: 'Log In'
}
