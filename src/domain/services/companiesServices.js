import Client from '../../utils/axios'

export const registerCompany = async (dto) => {
  const client = new Client()
  return await client.registerCompany(dto)
}
