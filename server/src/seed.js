// should seed/default the about me, contact, hero
require('dotenv').config();
const mongoose = require('mongoose');
const About = require('./models/About')
const Contact = require('./models/Contact')
const Hero = require('./models/Hero')



/*
this function seeds the about me page, contact page, and hero page with default information so that I don't need a separate POST route for one-time information creation. After this, the information will only need to be updated via PUT
*/
async function seed() {
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useunifiedTopology: true
    });
    // if there is no information in the About table create the default About object/row
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
            startYear: 0,
            endYear: ''
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
            name: '',
            email: '',
            linkedin: '',
            githubLink: ''
        })
        await newContact.save();
        console.log('Default Contact document seeded');
    } else {
        console.log('Contact document already exists')
    }


    const heroCount = await Hero.countDocuments();
    if (heroCount === 0) {
        const newHero = new Hero({
            animated: '',
            elevPitch: '',
        })
        await newHero.save();
        console.log('Default Hero document seeded');
    } else {
        console.log('Hero document already exists')
    }


    mongoose.disconnect();
}

seed();