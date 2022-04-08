class Occupant {
  constructor (data) {
    this.application_id = data ? data.application_id : ''
    this.firstName = data ? data.firstName : ''
    this.middleName = data ? data.middleName : ''
    this.lastName = data ? data.lastName : ''
    this.gender = data ? data.gender : ''
    this.ssn = data ? data.ssn : ''
    this.birthdate = data ? this.formatDate(data.birthdate) : ''
    this.street = data ? data.street : ''
    this.city = data ? data.city : ''
    this.state = data ? data.state : ''
    this.zip = data ? data.zip : ''
    this.relationship = data ? data.relationship : ''
  }

  formatDate (date) {
    const d = new Date(date)
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
    const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d)
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)
    return `${mo}-${da}-${ye}`
  }
}

export default Occupant
