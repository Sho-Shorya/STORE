const products = [
  {
    "id": 1,
    "name": "चीनी",
    "hinglishName": "Cheeni",
    "price": 45,
    "availability": "यह उपलब्ध है ✔️",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQggNTfqlKdBkYlbLGrL7Gyi7cZ8NaT36q8MQ&s",
    "companies": ["तुलसी शुगर", "धampur शुगर", "बलरामपुर चीनी"],
    "measurement": ["किलो", "बोरी"],
    "quantity": 0,
  },
  {
    "id": 2,
    "name": "नमकीन चिप्स",
    "hinglishName": "Namkeen Chips",
    "price": 20,
    "availability": "यह उपलब्ध है ✔️",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGhe28yowz72ogCiuKlcM1BeQXWbNf9x1Vdg&s",
    "companies": ["लेज़", "हल्दीराम", "बालाजी"],
    "measurement": ["लड़ी"],
    "quantity": 0,
  },
  {
    "id": 3,
    "name": "दूध",
    "hinglishName": "Doodh",
    "price": 30,
    "availability": "यह उपलब्ध है ✔️",
    "image": "https://www.shutterstock.com/image-photo/milk-packet-front-view-on-260nw-2623942015.jpg",
    "companies": ["अमूल", "मदर डेयरी", "सुद्दा"],
    "measurement": ["पैकेट", "पेटी"],
    "quantity": 0,
  },
  {
    "id": 4,
    "name": "आटा",
    "hinglishName": "Aata",
    "price": 280,
    "availability": "यह उपलब्ध है ✔️",
    "image": "https://www.samyaksupermart.com/cdn/shop/files/91Lj2AJXfOL._SL1500.jpg?v=1743765886",
    "companies": ["आशीर्वाद", "पतंजलि", "अन्नपूर्णा"],
    "measurement": ["किलो", "बोरी"],
    "quantity": 0,
  },
  {
    "id": 5,
    "name": "चावल",
    "hinglishName": "Chawal",
    "price": 650,
    "availability": "यह उपलब्ध है ✔️",
    "image": "https://5.imimg.com/data5/SELLER/Default/2024/2/383874449/JG/TJ/HB/58322213/basmati-rice-500x500.jpg",
    "companies": ["इंडिया गेट", "कोहिनूर", "दावत"],
    "measurement": ["किलो", "कट्टा"],
    "quantity": 0,
  },
  {
    "id": 6,
    "name": "दाल",
    "hinglishName": "Dal",
    "price": 120,
    "availability": "यह उपलब्ध  नही है ❌",
    "image": "https://thumbs.dreamstime.com/b/colorful-mix-different-beans-legumes-peas-lentils-top-view-flat-lay-square-142230133.jpg",
    "type": ["अरहर दाल", "मूंग दाल", "चना दाल", "उड़द दाल", "मसूर दाल"],
    "measurement": ["किलो", "पैकेट"],
    "quantity": 0,
  },
  {
    "id": 7,
    "name": "नमक",
    "hinglishName": "Namak",
    "price": 25,
    "availability": "यह उपलब्ध है ✔️",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_nct4wV3D3luwmXMTg6XATgGR-Za8T1m5nA&s",
    "companies": ["टाटा नमक", "अन्नपूर्णा", "पतंजलि"],
    "measurement": ["किलो"],
    "quantity": 0,
  },
  {
    "id": 8,
    "name": "तेल",
    "hinglishName": "Tel",
    "price": 160,
    "availability": "यह उपलब्ध है ✔️",
    "image": "https://m.media-amazon.com/images/I/71zmdYRcAyL._UF350,350_QL80_.jpg",
    "companies": ["फॉर्च्यून", "धारा", "गुड लाइफ"],
    "measurement": ["किलो", "पीपा"],
    "quantity": 0,
  },
  {
    "id": 9,
    "name": "बिस्कुट",
    "hinglishName": "Biscuit",
    "price": 15,
    "availability": "यह उपलब्ध है ✔️",
    "image": "https://tiimg.tistatic.com/fp/1/007/884/crispy-rich-butter-flavor-delicious-anmol-butter-bake-biscuits-28g-7g--853.jpg",
    "companies": ["पारले-जी", "ब्रिटानिया", "अनमोल"],
    "measurement": ["पैकेट", "डिब्बा"],
    "quantity": 0,
  },
  {
    "id": 10,
    "name": "चाय पत्ती",
    "hinglishName": "Chai Patti",
    "price": 95,
    "availability": "यह उपलब्ध  नही है ❌",
    "image": "https://m.media-amazon.com/images/I/41wH6Cqe-NS._UF1000,1000_QL80_.jpg",
    "companies": ["ताजमहल", "रेड लेबल", "ताता टी"],
    "measurement": ["पैकेट"],
    "quantity": 0,
  }
];

const users = [{
  "id": 1,
  "email": "new1@gmail.com",
  "password": "1234",
}, {
  "id": 2,
  "email": "new2@gmail.com",
  "password": "4321",
}
]


if (!localStorage.getItem('users')) {
    localStorage.setItem("users", JSON.stringify(users))
  }

// export const getUsers = () => {
//   try {
//     const users = JSON.parse(localStorage.getItem('users') || [])
//     return { users };
//   } catch {
//     return { users: [] };
//   }
// }
export const getProductLocally = () => {
  try {
    const products = JSON.parse(localStorage.getItem('products') || [])
    return { products };
  } catch {
    return { products: [] };
  }
}
export const setProductLocally = () => {
  if (!localStorage.getItem('products')) {
    localStorage.setItem("products", JSON.stringify(products))
  }

}
