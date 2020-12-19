import '../../../../styles/tailwind.source.css'
import FormInputEmail from '@/components/Forms/FormInputEmail/FormInputEmail'

export default {
  title: 'FormInputEmail',
  component: FormInputEmail
}

const Template = (args, { argTypes }) => ({
  components: { FormInputEmail },
  props: Object.keys(argTypes),
  template: '<FormInputEmail :label="label" :placeholder="placeholder" />'
})

export const FormInputEmailDefault = Template.bind({})
FormInputEmailDefault.args = {
  label: 'Label',
  placeholder: 'Placeholder'
}
