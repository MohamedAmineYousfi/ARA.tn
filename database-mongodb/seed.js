const db  = require('./index.js');
const Announce = require('./Announce.js');
const User = require('./Announce.js')
const samplePosts = [
  {
    username : 'John whick',
    title: 'BMW',
    price : 245000,
    imageUrl: 'https://www.largus.fr/images/images/bmw-x6-2020-26.jpg',
    createdAt: '2019-11-14T05:57:26.037Z',
    body: `The BMW X6 is a mid-size luxury crossover SUV by German automaker BMW. The BMW X6 is the originator of the sports activity coupé (SAC), referencing its sloping rear roof design. It combines the attributes of an SUV (high ground clearance, all-wheel drive and all-weather ability, large wheels and tires) with the stance of a coupé (styling featuring a sloping roof). It is built in BMW's North American plant in Greer, South Carolina alongside the BMW X5, whose platform it shares. Prior to the release of the X7, the X6 was considered a flagship SUV for BMW.

    The first generation (E71) was released for sale in April 2008 for the 2008 model year, while the second-generation X6 (F16) was launched at the Paris Motor Show in 2014. The third-generation X6 was revealed in July 2019.    
`,
    views: 0
  },
  {
    username: 'Leonardo Decaprio',
    title: 'Lamborghini Urus',
    price: 1070000 ,
    imageUrl: 'https://source.unsplash.com/1600x900/?corgi',
    createdAt : '2020-11-13T03:30:26.037Z',
    body:`The Lamborghini Urus[5] concept was unveiled at the 2012 Beijing Auto Show on 23 April 2012.[6] Later, the SUV was also shown at Pebble Beach in 2012. Powered by a 5.2 L V10 engine shared with the Gallardo, the engine generated a theoretical maximum power output of 600 PS (592 hp; 441 kW) and was accompanied with an all-wheel-drive system. The Urus was reported to have the lowest carbon emissions as compared to its stablemates (i.e. the Porsche Cayenne, Bentley Bentayga and the Audi Q7).[citation needed] The Urus was conceived as a perfect daily driver unlike the other offerings from the brand. The sharp-lined exterior design of the SUV takes heavy influence from the company's V12 flagship, the Aventador. The production version of the SUV was introduced in 2017 with major changes done to the exterior and featuring a different powertrain than that of the concept.[7]
`,
    views: 501
  },
  {
    username: 'Corgi Gifted At Sploots To Teach Yoga',
    title: 'Sandeep Gonnabathula',
    price: 500000,
    imageUrl: 'https://source.unsplash.com/1600x900/?corgi',
    createdAt :'2020-11-11T01:24:26.037Z',
    body: `A hot new trend has emerged in Berkeley, California; Local yoga instructor and wellness guru Yasmine Matterson, an avid yoga enthusiast and dog lover, has come up with the idea of a yoga class led by her two year old corgi named Stretch. The hour long session consists of following the movements of Stretch as he assumes various positions and poses, most notably, the sploot.

“It just came to me one day as I was doing my daily morning yoga routine in my living room,” said Yasmine in her North Berkeley home. “I looked over and saw Stretch stretched out in a sploot and I thought, hey, that looks promising. So I joined him and tried incorporating the sploot to my yoga routine and the rest is history.”

Already the class has been booked solid for the foreseeable future with intrigued yoga practitioners from all over flocking to the see Stretch in action. When asked if this would become a permanent fixture in Yasmine’s yoga studio she replied, “I believe that the sploot is the future of yoga. I won’t be surprised if I wake up tomorrow to find yoga studios across the country incorporating it into their classes. Stretch is a visionary and I think he’s taking yoga to new heights.”

When asked on his thoughts about his popular niche offering Stretch simply replied, “Bark bark, bark bark bark, *pant*...bark.”
`,
    views: 0
  },
  {
    username: 'Snoop Dog',
    title: 'Ferrari 812 Superfast',
    price: 944870 ,
    imageUrl: 'https://www.larevueautomobile.com/images/fiche-technique/2021/Ferrari/812-Superfast/V12-GTS/Ferrari_812-Superfast_V12_GTS_MD_1.jpg' ,
    createdAt :'2021-04-17T05:05:26.037Z',
    body: `The Ferrari 812 Superfast (Type F152M) is a front mid-engine, rear-wheel-drive grand tourer produced by Italian sports car manufacturer Ferrari that made its debut at the 2017 Geneva Motor Show. The 812 Superfast is the successor to the F12berlinetta.
`,
    views: 0
  },
  {
    username: 'Ali Samaoui',
    title: 'Citroen',
    price: 20000 ,
    imageUrl: 'https://www.auto-plus.tn/assets/modules/newcars/citroen/c3/couverture/citroen-c3.jpg',
    createdAt : '2018-11-10T05:05:26.037Z',
    body: `Car of a doctor , never been used , first hand , clean tear , new carbirater , new souiglace , emporte from italy
`,
    views: 1000
  }
];

const insertSampleBlogs = function() {
  Announce.create(samplePosts)
    .then(() => {
      console.log("Database seeded successfully");
    })
    .catch((error) => {
      console.log("error seeding the database: ", error);
    })
    .finally(() => {
      db.close();
    });
};
// const SampleUser = [{
//   username : 'Admin',
//   password : 'admin'

// },
// {
//   username : 'Amine',
//   password : 'amine'

// },
// {
//   username : 'Rima',
//   password : 'rima'

// }
// ]


insertSampleBlogs();