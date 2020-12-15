<template>
  <div>
    <vc-calendar :attributes="attributes" @dayclick="onDayClick" />
    <div v-for="(day,index) in days" :key="index">
      {{ day }}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      days: []
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
    onDayClick (day) {
      console.log(this.days)
      const idx = this.days.findIndex(d => d.id === day.id)
      if (idx >= 0) {
        this.days.splice(idx, 1)
      } else {
        this.days.push({
          id: day.id,
          date: day.date
        })
      }
    }
  }
}
</script>

<style lang="postcss" scoped>

</style>
