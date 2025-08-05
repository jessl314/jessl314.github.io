// should seed/default the about me, contact, hero
require('dotenv').config();
const mongoose = require('mongoose');
const About = require('./models/About')
const Contact = require('./models/Contact')
const Hero = require('./models/Hero')

async function seed() {
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useunifiedTopology: true
    });
    const aboutCount = await About.countDocuments();
    if (aboutCount === 0) {
        const newAbout = new About({
        content: '',
        profileImage: '',
        education: [
            {
            school: '',
            degree: '',
            minor: '',
            startDate: '',
            endDate: ''
            }
         ]
        });
        await newAbout.save();
        console.log('Default About document seeded');
    } else {
        console.log('About document already exists');
    }

    const contactCount = await Contact.countDocuments();
    if (contactCount === 0) {
        const newContact = new Contact({
            name: String,
            email: String,
            linkedin: String,
            githubLink: String
        })
        await newContact.save();
        console.log('Default Contact document seeded');
    } else {
        console.log('Contact document already exists')
    }

    

}

