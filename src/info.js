export const InfoList = [
    { _id: "5b21ca3eeb7f6fbccd471818",
     name: "Profile" ,
     img: '',
     text: 'View your profile',
     to:'feed'
},
    { _id: "5b21ca3eeb7f6fbccd471814", 
    name: "Account", 
    img: '',
    text: 'manage your account',
    to:'rentals'
  },
    { _id: "5b21ca3eeb7f6fbccd471820", 
    name: "Transactions", 
    img: '',
    text: 'Check and manage your transactions',
    to:'movies' 
  }, 
    { _id: "5b21ca3eeb7f6fbccd471443",
     name: "Updates",
    img: 'ImProfile',
    text: 'Update Your account',
    to:'customers'
  },
    { _id: "5b21ca3eeb7f6fbccd471456", 
    name: "Timetable",
    img: '',
    text: 'View schedule and upcoming events',
    to: 'News'
   },
    { _id: "5b21ca3eeb7f6fbccd471555", name: "Calendar",
    img: '',
    text: 'Manage upcoming events' }
  ];
  
  export function getInfoList() {
    return InfoList.filter(g => g);
  }