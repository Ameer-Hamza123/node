

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://hamza:qwert159@cluster0.rznbe.mongodb.net/Revision');

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));

module.exports = {mongoose};
