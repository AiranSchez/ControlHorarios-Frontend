import '../../../../../styles/tailwind.source.css'
import EmployeesList from '@/components/CompanyProfile/Employees/EmployeesList/EmployeesList'

export default {
  title: 'EmployeesList',
  component: EmployeesList
}

const Template = () => ({
  components: { EmployeesList },
  template: '<EmployeesList/>'
})

export const EmployeesListDefault = Template.bind({})
