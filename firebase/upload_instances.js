const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyCEKSSQzuifi0bLqT7u2Lqz3_xGJinv6BI",
    authDomain: "duration-interface-firebase.firebaseapp.com",
    projectId: "duration-interface-firebase"
  });
  
var db = firebase.firestore();

// COPY INSTANCES YOU WANT TO UPLOAD HERE
var menu =[  
    {"instance_id": "1240728065983959040", "location": "Pickerington", "image_link": "https://zhaomin.s3.us-east-2.amazonaws.com/display/display_1240728065983959040.png"},
    {"instance_id": "1240733998923550724", "location": "Towson", "image_link": "https://zhaomin.s3.us-east-2.amazonaws.com/display/display_1240733998923550724.png"},
    {"instance_id": "1240734107090456576", "location": "Santa Monica", "image_link": "https://zhaomin.s3.us-east-2.amazonaws.com/display/display_1240734107090456576.png"},
    {"instance_id": "1240735700716269572", "location": "Manhattan", "image_link": "https://zhaomin.s3.us-east-2.amazonaws.com/display/display_1240735700716269572.png"},
    {"instance_id": "1240737528526888963", "location": "San Diego", "image_link": "https://zhaomin.s3.us-east-2.amazonaws.com/display/display_1240737528526888963.png"},
    {"instance_id": "1240738072863617030", "location": "Lafayette", "image_link": "https://zhaomin.s3.us-east-2.amazonaws.com/display/display_1240738072863617030.png"},
    {"instance_id": "1240739183758659584", "location": "Torrance", "image_link": "https://zhaomin.s3.us-east-2.amazonaws.com/display/display_1240739183758659584.png"},
    {"instance_id": "1240739801168523278", "location": "Layton", "image_link": "https://zhaomin.s3.us-east-2.amazonaws.com/display/display_1240739801168523278.png"},
    {"instance_id": "1240741278989594632", "location": "Auburndale", "image_link": "https://zhaomin.s3.us-east-2.amazonaws.com/display/display_1240741278989594632.png"},
    {"instance_id": "1240743427307909127", "location": "Torrance", "image_link": "https://zhaomin.s3.us-east-2.amazonaws.com/display/display_1240743427307909127.png"},
    {"instance_id": "1240744731421880331", "location": "Phoenix", "image_link": "https://zhaomin.s3.us-east-2.amazonaws.com/display/display_1240744731421880331.png"},
    {"instance_id": "1240745453467119624", "location": "Dallas", "image_link": "https://zhaomin.s3.us-east-2.amazonaws.com/display/display_1240745453467119624.png"},
    {"instance_id": "1240746299596533760", "location": "Detroit", "image_link": "https://zhaomin.s3.us-east-2.amazonaws.com/display/display_1240746299596533760.png"},
    {"instance_id": "1240747231160008710", "location": "Melbourne Beach", "image_link": "https://zhaomin.s3.us-east-2.amazonaws.com/display/display_1240747231160008710.png"},
    {"instance_id": "1240754454237818880", "location": "Arlington", "image_link": "https://zhaomin.s3.us-east-2.amazonaws.com/display/display_1240754454237818880.png"},
    {"instance_id": "1240756307671556097", "location": "San Francisco", "image_link": "https://zhaomin.s3.us-east-2.amazonaws.com/display/display_1240756307671556097.png"},
    {"instance_id": "1240760266444414976", "location": "Bethesda", "image_link": "https://zhaomin.s3.us-east-2.amazonaws.com/display/display_1240760266444414976.png"},
    {"instance_id": "1240762736625270784", "location": "Minneapolis", "image_link": "https://zhaomin.s3.us-east-2.amazonaws.com/display/display_1240762736625270784.png"},
    {"instance_id": "1240762867747618817", "location": "Nashville", "image_link": "https://zhaomin.s3.us-east-2.amazonaws.com/display/display_1240762867747618817.png"},
    {"instance_id": "1240763934350729216", "location": "Reading", "image_link": "https://zhaomin.s3.us-east-2.amazonaws.com/display/display_1240763934350729216.png"},
    {"instance_id": "1240764029649510401", "location": "Beloit", "image_link": "https://zhaomin.s3.us-east-2.amazonaws.com/display/display_1240764029649510401.png"},
    {"instance_id": "1240764799115550722", "location": "Roswell", "image_link": "https://zhaomin.s3.us-east-2.amazonaws.com/display/display_1240764799115550722.png"},
    {"instance_id": "1240767655138799618", "location": "Lynchburg", "image_link": "https://zhaomin.s3.us-east-2.amazonaws.com/display/display_1240767655138799618.png"},
    {"instance_id": "1240781119135657986", "location": "Detroit", "image_link": "https://zhaomin.s3.us-east-2.amazonaws.com/display/display_1240781119135657986.png"},
    {"instance_id": "1240781214782574594", "location": "New Orleans", "image_link": "https://zhaomin.s3.us-east-2.amazonaws.com/display/display_1240781214782574594.png"}
 ]


menu.forEach(function(obj) {
    db.collection("data").doc(obj.instance_id).set({
        instance_id: obj.instance_id,
        location: obj.location,
        image_link: obj.image_link
    })
    .then(() => {
    console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
});