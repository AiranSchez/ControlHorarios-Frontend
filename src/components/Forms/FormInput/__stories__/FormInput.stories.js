import '../../../../styles/tailwind.css'
import FormInput from '@/components/Forms/FormInput/FormInput'

export default {
  title: 'FormInput',
  component: FormInput
}

const Template = (args, { argTypes }) => ({
  components: { FormInput },
  props: Object.keys(argTypes),
  template: '<FormInput :label="label" :placeholder="placeholder" />'
})

export const FormInputDefault = Template.bind({})
FormInputDefault.args = {
  label: 'Your label',
  placeholder: 'Your placeholder'
}
