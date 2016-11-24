import {Injectable} from '@angular/core';

import 'firebase';
// import {initializeApp, database } from 'firebase';

@Injectable()
export class FirebaseService {

  constructor() {
    // this.initFirebase();
  }

  initFirebase() {
    let config = {
      apiKey: "AIzaSyBmfrG4J1EgGdjStSX7qiZb2wzFEv_56XE",
      authDomain: "denkwelten.firebaseapp.com",
      databaseURL: "https://denkwelten.firebaseio.com",
      storageBucket: "denkwelten.appspot.com",
      messagingSenderId: "684226708322"
    };

    firebase.initializeApp(config);
  }

  public consoleTestFirebase() {
    let root = firebase.database().ref('franz/xxx');
    root.on('value', function(snap) {
      console.log('snap', snap.key, snap.val());
    });

    root.push({
        created: 'adfadf',
        'text': 'adfjaldfjasdklfjaslkfjdkl'
      }, err => {
        if (err) {
          alert('errornpm start' + err);
        } else {
          root.once('value', snap => {
              let ref = snap.val();
              console.log(ref);
              console.log(snap.key);
            }
          )
        }
    });

    // console.log('firebase', database);
  }
}
