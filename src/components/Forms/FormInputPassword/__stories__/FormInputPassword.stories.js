import '../../../../styles/tailwind.source.css'
import FormInputPassword from '@/components/Forms/FormInputPassword/FormInputPassword'

export default {
  title: 'FormInputPassword',
  component: FormInputPassword
}

const Template = (args, { argTypes }) => ({
  components: { FormInputPassword },
  props: Object.keys(argTypes),
  template: '<FormInputPassword :label="label" :placeholder="placeholder"/>'
})

export const FormInputPasswordDefault = Template.bind({})
FormInputPasswordDefault.args = {
  label: 'Label',
  placeholder: 'Placeholder'
}
