class ViewApplication {
  constructor (data) {
    this.id = data ? data.id : ''
    this.mobilePhone = data ? data.mobilePhone : ''
    this.email = data ? data.email : ''
    this.firstName = data ? data.occupant[0] : ''
    this.lastName = data ? data.occupant[1] : ''
    this.age = data ? data.occupant[2] : ''
    this.created_at = data ? data.created_at : ''
  }
}

export default ViewApplication
