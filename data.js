// =====================================================================
//  DATA.JS  —  Srinagar Tourism
//  Edit reviews, car prices, and destination about-panel content here.
// =====================================================================

// ── GOOGLE REVIEWS ────────────────────────────────────────────────────
const REVIEWS = [
  {name:"Karthik Gowdru", date:"1 month ago", text:"Amazing experience organised by Irfan Bhat. Everything was perfectly organised and hassle-free. The team was highly professional and very attentive to our needs throughout the trip."},
  {name:"Asad Moin", date:"2 months ago", text:"Best Tour Ever — Felt Like Family, Not Tourists. Our Kashmir trip was truly one of the most beautiful and memorable experiences of our lives. Every detail was taken care of."},
  {name:"Abul Kalam", date:"3 months ago", text:"We booked a 6-night, 5-day package coordinated by the wonderful Ms. Tehleel, and the entire experience was beyond incredible. Everything perfectly arranged from day one."},
  {name:"Robin Gray", date:"4 months ago", text:"The houseboat was beautiful and everyone was so gracious. There are many companies but none lives up to the service and care of Srinagar Tourism. Highly recommended."},
  {name:"Bhargav", date:"3 months ago", text:"A Once-in-a-Lifetime Kashmir Experience. Special thanks to Ms. Tehleel, Dal View Hotel, and our driver Irfan Bhaiyya for making this trip absolutely unforgettable."},
  {name:"Rajat Gupta", date:"1 month ago", text:"The tour company arranged everything perfectly. The driver was on time every single day and we did not face any difficulties during our visit. Great value for money."},
  {name:"Manoj Sahoo", date:"1 year ago", text:"Srinagar Tourism is the best travel agency in Srinagar. Very reasonable pricing, excellent hotel arrangement, and great cab service. I have booked with them three times."},
  {name:"Arpita Nag", date:"6 months ago", text:"Wonderful experience with Srinagar Tourism, especially Ms. Tehmeen who planned everything so perfectly. Kashmir was my dream destination and they made it even more special."},
  {name:"Philip G", date:"2 years ago", text:"Bisma was our coordinator and from our first enquiry she was excellent. All our queries were explained with ease. The package was exactly as promised. Highly recommended."},
  {name:"Rituparna Kheto", date:"1 year ago", text:"A Memorable 4-Night Stay in the Paradise of Kashmir. Our recent trip was an unforgettable experience. Every arrangement exceeded our expectations throughout the entire trip."}
];

// ── CAR RENTAL PRICES (INR per vehicle) ──────────────────────────────
// Order matches route cards: 0=Airport, 1=Local, 2=Gulmarg, 3=Pahalgam,
// 4=Sonamarg, 5=Yousmarg, 6=Doodhpathri, 7=Gurez, 8=Verinag, 9=Sinthan
const PRICES = {
  sedan: [2300, 1800, 2300, 2300, 2300, 2300, 2300, 17000, 2300, 7000],
  suv:   [3200, 2500, 3200, 3200, 3200, 3200, 3200, 19000, 3200, 8500],
  tempo: [6000, 5000, 6000, 6000, 6000, 6000, 6000, 27000, 7000, 11500]
};

// ── DESTINATION ABOUT MODAL CONTENT ──────────────────────────────────
const DEST_DATA = {
  srinagar: {
    title: 'Dal Lake & Srinagar',
    tag: "Kashmir's Summer Capital",
    img: 'https://images.unsplash.com/photo-1586375300773-8384e3e4916f?w=1400&q=85&auto=format&fit=crop',
    about: [
      'Srinagar is the summer capital of Jammu and Kashmir, sitting on the banks of the Jhelum River at 1,585 metres. At its heart is Dal Lake — one of the most iconic bodies of water in India. The city blends centuries-old wooden architecture, Mughal gardens, and some of the most peaceful waterscapes you will find anywhere in the subcontinent.',
      'Dal Lake comes alive every morning before most tourists are awake. Vegetable vendors paddle wooden boats from garden to garden, flower sellers drift through narrow channels, and Shikara rides begin as the mist clears. The floating gardens grow tomatoes and cucumbers in a system that has worked for centuries. A Shikara ride at sunrise is the single best way to experience the city.',
      'The Mughal Gardens — Shalimar Bagh (built 1616), Nishat Bagh (1633), and Chashma Shahi — are three of the finest formal gardens in India. Shankaracharya Temple perches 1,000 feet above the city with panoramic views of the lake and mountains. The old city around Nowhatta is where you find genuine Pashmina shawls, walnut wood carvings, and papier-mache craftsmen.'
    ],
    facts: [
      {icon:'fa-mountain', label:'Altitude', val:'1,585 m (5,200 ft)'},
      {icon:'fa-location-dot', label:'From Delhi', val:'~876 km by air'},
      {icon:'fa-sun', label:'Best Season', val:'April to October'},
      {icon:'fa-plane', label:'Airport', val:'Sheikh ul-Alam International'},
      {icon:'fa-star', label:"Don't Miss", val:'Shikara ride at sunrise'},
      {icon:'fa-tag', label:'Starting Price', val:'Rs.6,500 per person'}
    ],
    waKey: 'Srinagar Tour Package', waPrice: 'Rs.6,500/pp', destKey: 'srinagar'
  },
  gulmarg: {
    title: 'Gulmarg',
    tag: 'Meadow of Flowers - 2,650m',
    img: 'https://images.unsplash.com/photo-1518560636955-e0b3aca3e6b9?w=1400&q=85&auto=format&fit=crop',
    about: [
      'Gulmarg sits 50 km west of Srinagar at 2,650 metres. The name means Meadow of Flowers in Persian and it earns that name every summer when wildflowers blanket the slopes. In winter the same meadow is buried under metres of snow and draws India\'s best skiers along with thousands of first-timers from across the country.',
      'The Gulmarg Gondola is one of the highest cable cars in the world. Phase 1 reaches Kongdoori at 3,050 metres. Phase 2 climbs to Apharwat Peak at 4,200 metres with views of glaciers, snowfields, and mountain ranges stretching in every direction. Gulmarg has the highest skiable terrain in India with some of the longest runs in Asia, making it the premier ski destination from December to March.',
      'Beyond the Gondola, Khilanmarg is a smaller meadow 6 km from town with superb views of the full Kashmir Valley below. On clear days you can see from Nanga Parbat to the twin peaks of Nun and Kun. Alpather Lake stays frozen until mid-June and sits at the foot of Apharwat peaks — best reached on horseback.'
    ],
    facts: [
      {icon:'fa-mountain', label:'Altitude', val:'2,650 m (8,694 ft)'},
      {icon:'fa-location-dot', label:'From Srinagar', val:'50 km (~1.5 hrs)'},
      {icon:'fa-snowflake', label:'Ski Season', val:'December to March'},
      {icon:'fa-sun', label:'Summer Season', val:'May to September'},
      {icon:'fa-cable-car', label:'Gondola', val:'Phase 2 reaches 4,200m'},
      {icon:'fa-tag', label:'Starting Price', val:'Rs.7,000 per person'}
    ],
    waKey: 'Sonamarg & Gulmarg Tour', waPrice: 'Rs.7,000/pp', destKey: 'gulmarg'
  },
  pahalgam: {
    title: 'Pahalgam',
    tag: 'Valley of Shepherds - Lidder River',
    img: 'https://images.unsplash.com/photo-1592425989956-3db7cd40ade2?w=1400&q=85&auto=format&fit=crop',
    about: [
      'Pahalgam sits at 2,130 metres in the Anantnag district, about 90 km from Srinagar. The Lidder River runs cold and fast through a pine-covered valley here, and Bollywood directors have been filming on its banks since the 1950s. Every July it also serves as the base camp for the Amarnath Yatra pilgrimage.',
      'Baisaran, 5 km from town and reachable by pony, is a grassy meadow ringed by dense pine trees with snow peaks above — routinely called Mini Switzerland. Aru Valley, 11 km upstream, is a traditional village great for a half-day trip. Betaab Valley, 15 km out and named after a 1983 Bollywood film, offers crystal streams, pine forests, and wide meadows backed by snowy peaks.',
      'Chandanwari, 16 km from Pahalgam, marks the start of the Amarnath Yatra. The Amarnath Cave at 3,888 metres contains a naturally formed ice Shivling that waxes and wanes with the lunar cycle and draws hundreds of thousands of pilgrims every July and August.'
    ],
    facts: [
      {icon:'fa-mountain', label:'Altitude', val:'2,130 m (6,990 ft)'},
      {icon:'fa-location-dot', label:'From Srinagar', val:'~90 km (~2.5 hrs)'},
      {icon:'fa-sun', label:'Best Season', val:'April to June, Sep-Oct'},
      {icon:'fa-om', label:'Amarnath Yatra', val:'July to August'},
      {icon:'fa-star', label:"Don't Miss", val:'Baisaran & Betaab Valley'},
      {icon:'fa-tag', label:'Starting Price', val:'Rs.7,000 per person'}
    ],
    waKey: 'Pahalgam Tour Package', waPrice: 'Rs.7,000/pp', destKey: 'pahalgam'
  },
  sonamarg: {
    title: 'Sonamarg',
    tag: 'Meadow of Gold - Gateway to Ladakh',
    img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1400&q=85&auto=format&fit=crop',
    about: [
      'Sonamarg — Meadow of Gold — sits at 2,740 metres and is the last significant stop in the Kashmir Valley before the Zoji La pass. Beyond Zoji La the landscape transforms from lush green forest to the dramatic barren terrain of Ladakh. The drive from Srinagar along the Sindh River is itself one of the great drives in J&K.',
      'The main excursion is to the Thajiwas Glacier, about 4 km from the main stand. The path goes through forest before opening into a valley with the glacier at the far end. Snow is present even in July and August at glacier level — a big draw for families with children. Ponies are available for those who prefer not to walk the full distance.',
      'Sonamarg is also the starting point of the Kashmir Great Lakes Trek — a 7 to 9-day circuit passing six high-altitude lakes including Vishansar, Gadsar, Satsar, and Gangabal. This is one of the finest treks in India and requires no technical climbing skills.'
    ],
    facts: [
      {icon:'fa-mountain', label:'Altitude', val:'2,740 m (8,990 ft)'},
      {icon:'fa-location-dot', label:'From Srinagar', val:'~80 km (~2 hrs)'},
      {icon:'fa-sun', label:'Best Season', val:'May to September'},
      {icon:'fa-route', label:'Gateway to', val:'Zoji La & Ladakh'},
      {icon:'fa-person-hiking', label:'Famous Trek', val:'Kashmir Great Lakes (7-9 days)'},
      {icon:'fa-tag', label:'Starting Price', val:'Rs.7,000 per person'}
    ],
    waKey: 'Sonamarg & Gulmarg Tour', waPrice: 'Rs.7,000/pp', destKey: 'sonamarg'
  },
  doodhpathri: {
    title: 'Doodhpathri',
    tag: 'Valley of Milk - 2,730m',
    img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1400&q=85&auto=format&fit=crop',
    about: [
      'Doodhpathri — Valley of Milk — is named after the Shaliganga River that runs through it, milky white from glacial rock flour. The valley sits at 2,730 metres in the Budgam district, about 42 km from Srinagar. While Gulmarg, Pahalgam, and Sonamarg fill with tourists every season, Doodhpathri receives only a fraction of that traffic.',
      'The central draw is a wide, flat, grassy meadow surrounded by dense deodar and pine forest, with the river running along one edge and mountains in every direction. In May and June wildflowers cover the ground in purples, yellows, and whites. This is the kind of place where you can sit for an hour and hear nothing except wind, water, and birds.',
      'The route passes through Tangnar, a small settlement good for photography. Mujhpathri is a hamlet with traditional Gujjar shepherd houses. Palmaidan, just beyond the meadow, is a rougher landscape of large boulders across a plateau with streams between them.'
    ],
    facts: [
      {icon:'fa-mountain', label:'Altitude', val:'2,730 m (8,957 ft)'},
      {icon:'fa-location-dot', label:'From Srinagar', val:'~42 km (~1.5 hrs)'},
      {icon:'fa-sun', label:'Best Season', val:'May to September'},
      {icon:'fa-leaf', label:'Known For', val:'Wildflowers & total quiet'},
      {icon:'fa-star', label:"Don't Miss", val:'Palmaidan plateau walk'},
      {icon:'fa-tag', label:'Included In', val:'Kashmir Valley Tour'}
    ],
    waKey: 'Kashmir Valley Tour', waPrice: 'Rs.14,500/pp', destKey: 'doodhpathri'
  },
  gurez: {
    title: 'Gurez Valley',
    tag: 'Hidden Gem - Near Line of Control',
    img: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=1400&q=85&auto=format&fit=crop',
    about: [
      'Gurez Valley sits in the Bandipora district of northern J&K near the Line of Control. The Dards who live here speak Shina and follow a culture largely unchanged for centuries. Their carved wooden houses with lattice balconies line the Kishanganga River. The main town is Dawar. The road crosses the Razdan Pass at around 11,500 feet and takes 4 to 5 hours from Srinagar. A Protected Area Permit is required for non-local visitors.',
      'The most iconic image from Gurez is Habba Khatoon Peak — a pyramid-shaped mountain rising directly behind Dawar, named after a 16th-century Kashmiri poetess whose work is still sung throughout the Valley. The Kishanganga River runs the full length of Gurez before crossing into Pakistan and its banks are excellent for brown trout angling.',
      'Beyond Dawar, a rough road continues into Tulail Valley — even less visited, with traditional Dard villages surrounded by meadows and forest. Historically, Gurez was part of the ancient Silk Route connecting Central Asia to the subcontinent, a heritage visible in its architecture and culture.'
    ],
    facts: [
      {icon:'fa-mountain', label:'Altitude', val:'~2,400 m (8,000 ft)'},
      {icon:'fa-location-dot', label:'From Srinagar', val:'~125 km (4-5 hrs)'},
      {icon:'fa-sun', label:'Best Season', val:'Late May to October'},
      {icon:'fa-id-card', label:'Permit', val:'Required for non-residents'},
      {icon:'fa-car', label:'Car Rental', val:'Sedan Rs.17,000 / Innova Rs.19,000'},
      {icon:'fa-fish', label:'Activity', val:'Brown trout angling'}
    ],
    waKey: 'Gurez Valley Tour', waPrice: '', destKey: 'gurez'
  }
};
