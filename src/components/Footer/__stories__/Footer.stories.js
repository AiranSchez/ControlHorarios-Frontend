import '../../../styles/tailwind.css'
import Footer from '@/components/Footer/Footer'
export default {
  title: 'Footer',
  component: Footer
}

const Template = () => ({
  components: { Footer },
  template: '<Footer/>'
})

export const FooterDefault = Template.bind({})
