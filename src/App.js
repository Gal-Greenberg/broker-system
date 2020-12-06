import './App.css';
import React from "react";
import { User } from './components/User';

import "./styles/styles.scss" 

const user = {
  "id": "5fbee816ec54006d58d7b245",
  "source": "simulated",
  "comment": "epf5n",
  "profile": {
    "age": {
      "value": "18-24",
      "bid": 65,
      "informedBid": 64
    },
    "children": {
      "value": "elementary school",
      "bid": 2,
      "informedBid": 68
    },
    "education": {
      "value": "doctorate degree",
      "bid": 83,
      "informedBid": 47
    },
    "marital": {
      "value": "single",
      "bid": 28,
      "informedBid": 9
    },
    "gender": {
      "value": "female",
      "bid": 71,
      "informedBid": 11
    },
    "interests": [{
      "value": "Jobs & Education",
      "bid": 45,
      "informedBid": 48
    }, {
      "value": "Real Estate",
      "bid": 78,
      "informedBid": 48
    }, {
      "value": "Business & Industrial",
      "bid": 50,
      "informedBid": 75
    }]
  },
  "createdAt": "2020-11-25T23:26:14.863Z",
  "updatedAt": "2020-11-25T23:26:14.863Z"
}

const App = () => (
  <User user={user} />
)

export default App;
