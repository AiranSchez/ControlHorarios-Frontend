import Client from '../../utils/axios'

export const getEmployeeData = async () => {
  const client = new Client()
  const data = await client.getEmployeeData()
  return data.data.FirstName
}
