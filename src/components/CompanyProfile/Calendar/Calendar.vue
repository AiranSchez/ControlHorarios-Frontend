<template>
  <div class="flex flex-col">
    <vc-calendar ref="calendar" :attributes="attributes" @dayclick="onDayClick" :popover="{ visibility: 'click' }"/>
    <FormInput label="Holiday title" placeholder="Your holiday title" id="holiday-input" v-on:fieldValue="receivedValue" />
    <FormButton @isClicked="addHoliday" value="Add holiday"/>
  </div>
</template>

<script>
import FormButton from '@/components/Forms/FormButton/FormButton'
import FormInput from '@/components/Forms/FormInput/FormInput'
import { setHolidays } from '@/domain/services/companiesServices'

export default {
  components: {
    FormInput,
    FormButton
  },
  data () {
    return {
      days: [],
      title: ''
    }
  },
  computed: {
    dates () {
      return this.days.map(day => day.date)
    },
    attributes () {
      return this.dates.map(date => ({
        highlight: true,
        dates: date
      }))
    }
  },
  methods: {
    receivedValue (field) {
      this.title = field
    },
    onDayClick (day) {
      const idx = this.days.findIndex(d => d.id === day.id)
      if (idx >= 0) {
        this.days.splice(idx, 1)
      } else {
        this.days.push({
          id: day.id,
          date: day.date
        })
      }
    },
    addHoliday () {
      this.days.forEach(day => {
        const companyID = localStorage.getItem('CompanyID')
        const dto = {
          Title: this.title,
          Date: day.id
        }
        setHolidays(companyID, dto).then(resp => console.log(resp))

        this.$emit('addedHoliday')
      })
    }
  }
}
</script>

<style lang="postcss" scoped>

</style>
