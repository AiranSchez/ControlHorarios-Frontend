import '../../../../../styles/tailwind.source.css'
import CreateEmployee from '@/components/CompanyProfile/Employees/CreateEmployee/CreateEmployee'

export default {
  title: 'CreateEmployee',
  component: CreateEmployee
}

const Template = () => ({
  components: { CreateEmployee },
  template: '<CreateEmployee/>'
})

export const CreateEmployeeDefault = Template.bind({})

CreateEmployee.args = {}
