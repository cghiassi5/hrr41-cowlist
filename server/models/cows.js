const Model = require('./model');

class Cow extends Model {
  constructor() {
    super('cows')
  }
  create({name, description}){
    let newCow = {
      name,
      description
    };
    console.log('using cow create')
    return super.create.call(this,newCow)
  }
  getAll(){
    console.log('tablename', this.tablename);
    return super.getAll.call(this)
  }
}

module.exports = new Cow()