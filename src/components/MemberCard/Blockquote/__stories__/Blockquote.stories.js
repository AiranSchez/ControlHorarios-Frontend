import '../../../../styles/tailwind.source.css'
import Blockquote from '@/components/MemberCard/Blockquote/Blockquote'

export default {
  title: 'BlockQuote',
  component: Blockquote
}

const Template = (args, { argTypes }) => ({
  components: { Blockquote },
  props: Object.keys(argTypes),
  template: '<Blockquote :value="value" />'
})

export const BlockQuoteDefault = Template.bind({})
BlockQuoteDefault.args = {
  value: 'Puto amo'
}
