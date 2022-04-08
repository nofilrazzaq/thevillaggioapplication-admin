class Residence {
  constructor (data) {
    this.application_id = data ? data.application_id : ''
    this.landlordName = data ? data.landlordName : ''
    this.landlordAddress = data ? data.landlordAddress : ''
    this.landlordPhone = data ? data.landlordPhone : ''
    this.name = data ? data.name : ''
    this.address = data ? data.address : ''
    this.phone = data ? data.phone : ''
    this.ownOrRent = data ? data.ownOrRent : ''
    this.startDate = data ? data.startDate : ''
    this.endDate = data ? data.endDate : ''
  }
}

export default Residence
