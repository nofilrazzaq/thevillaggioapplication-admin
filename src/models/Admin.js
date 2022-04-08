class Admin {
  constructor (data) {
    this.id = data ? data.id : ''
    this.name = data ? data.name : ''
    this.email = data ? data.email : ''
  }
}

export default Admin
