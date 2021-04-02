import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    name: {type: String, default: ''},
    password: {type: String, default: ''},
    email: {type: String, default: ''}
});

export default mongoose.model('User', Schema);