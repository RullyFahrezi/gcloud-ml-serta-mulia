const { Firestore } = require('@google-cloud/firestore');
const path = require('path');

async function storeData(id, data) {
    const db = new Firestore({
        keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS
    });
   
    const predictCollection = db.collection('prediction');
    return predictCollection.doc(id).set(data);
  }
   
  module.exports = storeData;