import './App.css';
import React from "react";
import { UserTable } from './components/UserTable';
import { User } from './components/User';

import "./styles/styles.scss" 

const user = {
  "_id": "5fbee816ec54006d58d7b245",
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

const users = [
  {
      "_id": "5fbee7feec54006d58d7821e",
      "source": "simulated",
      "comment": "b5uol",
      "profile": {
          "age": {
              "value": "35-44",
              "bid": 5,
              "informedBid": 62
          },
          "children": {
              "value": "adults",
              "bid": 75,
              "informedBid": 14
          },
          "education": {
              "value": "college",
              "bid": 9,
              "informedBid": 57
          },
          "marital": {
              "value": "married",
              "bid": 29,
              "informedBid": 8
          },
          "gender": {
              "value": "male",
              "bid": 23,
              "informedBid": 22
          },
          "interests": [
              {
                  "value": "Sports",
                  "bid": 37,
                  "informedBid": 11
              },
              {
                  "value": "Jobs & Education",
                  "bid": 76,
                  "informedBid": 41
              }
          ]
      },
      "createdAt": "2020-11-25T23:25:51.221Z",
      "updatedAt": "2020-11-25T23:25:51.221Z"
  },
  {
      "_id": "5fbee84eec54006d58d82859",
      "source": "simulated",
      "comment": "09lp2",
      "profile": {
          "age": {
              "value": "18-24",
              "bid": 98,
              "informedBid": 70
          },
          "children": {
              "value": "toddlers",
              "bid": 43,
              "informedBid": 37
          },
          "education": {
              "value": "doctorate degree",
              "bid": 17,
              "informedBid": 85
          },
          "marital": {
              "value": "single",
              "bid": 2,
              "informedBid": 32
          },
          "gender": {
              "value": "female",
              "bid": 98,
              "informedBid": 40
          },
          "interests": [
              {
                  "value": "Travel & Transportation",
                  "bid": 59,
                  "informedBid": 32
              },
              {
                  "value": "Law & Government",
                  "bid": 95,
                  "informedBid": 5
              }
          ]
      },
      "createdAt": "2020-11-25T23:27:10.901Z",
      "updatedAt": "2020-11-25T23:27:10.901Z"
  },
  {
      "_id": "5fbee851ec54006d58d8304d",
      "source": "simulated",
      "comment": "te5ka",
      "profile": {
          "age": {
              "value": "55-64",
              "bid": 87,
              "informedBid": 57
          },
          "children": {
              "value": "teenagers",
              "bid": 74,
              "informedBid": 46
          },
          "education": {
              "value": "none",
              "bid": 33,
              "informedBid": 39
          },
          "marital": {
              "value": "married",
              "bid": 14,
              "informedBid": 48
          },
          "gender": {
              "value": "male",
              "bid": 37,
              "informedBid": 58
          },
          "interests": [
              {
                  "value": "World Localities",
                  "bid": 84,
                  "informedBid": 76
              },
              {
                  "value": "Health",
                  "bid": 24,
                  "informedBid": 94
              }
          ]
      },
      "createdAt": "2020-11-25T23:27:14.488Z",
      "updatedAt": "2020-11-25T23:27:14.488Z"
  },
  {
      "_id": "5fbee7e2ec54006d58d74840",
      "source": "simulated",
      "comment": "983sf",
      "profile": {
          "age": {
              "value": "25-34",
              "bid": 12,
              "informedBid": 69
          },
          "children": {
              "value": "none",
              "bid": 4,
              "informedBid": 18
          },
          "education": {
              "value": "none",
              "bid": 48,
              "informedBid": 88
          },
          "marital": {
              "value": "single",
              "bid": 55,
              "informedBid": 33
          },
          "gender": {
              "value": "male",
              "bid": 14,
              "informedBid": 92
          },
          "interests": [
              {
                  "value": "Real Estate",
                  "bid": 78,
                  "informedBid": 32
              },
              {
                  "value": "People & Society",
                  "bid": 70,
                  "informedBid": 83
              },
              {
                  "value": "Beauty & Fitness",
                  "bid": 5,
                  "informedBid": 31
              }
          ]
      },
      "createdAt": "2020-11-25T23:25:23.187Z",
      "updatedAt": "2020-11-25T23:25:23.187Z"
  },
  {
      "_id": "5fbee809ec54006d58d7990e",
      "source": "simulated",
      "comment": "bko1g",
      "profile": {
          "age": {
              "value": "18-24",
              "bid": 95,
              "informedBid": 77
          },
          "children": {
              "value": "toddlers",
              "bid": 23,
              "informedBid": 4
          },
          "education": {
              "value": "college",
              "bid": 67,
              "informedBid": 68
          },
          "marital": {
              "value": "married",
              "bid": 68,
              "informedBid": 25
          },
          "gender": {
              "value": "female",
              "bid": 17,
              "informedBid": 33
          },
          "interests": [
              {
                  "value": "Jobs & Education",
                  "bid": 94,
                  "informedBid": 99
              },
              {
                  "value": "Computers & Electronics",
                  "bid": 96,
                  "informedBid": 14
              },
              {
                  "value": "World Localities",
                  "bid": 43,
                  "informedBid": 27
              }
          ]
      },
      "createdAt": "2020-11-25T23:26:02.200Z",
      "updatedAt": "2020-11-25T23:26:02.200Z"
  },
  {
      "_id": "5fbee7efec54006d58d7600b",
      "source": "simulated",
      "comment": "yd3qc",
      "profile": {
          "age": {
              "value": "35-44",
              "bid": 3,
              "informedBid": 99
          },
          "children": {
              "value": "toddlers",
              "bid": 29,
              "informedBid": 79
          },
          "education": {
              "value": "none",
              "bid": 52,
              "informedBid": 58
          },
          "marital": {
              "value": "single",
              "bid": 5,
              "informedBid": 31
          },
          "gender": {
              "value": "male",
              "bid": 59,
              "informedBid": 44
          },
          "interests": [
              {
                  "value": "Games",
                  "bid": 31,
                  "informedBid": 8
              },
              {
                  "value": "Beauty & Fitness",
                  "bid": 15,
                  "informedBid": 80
              },
              {
                  "value": "Shopping",
                  "bid": 39,
                  "informedBid": 22
              }
          ]
      },
      "createdAt": "2020-11-25T23:25:36.188Z",
      "updatedAt": "2020-11-25T23:25:36.188Z"
  },
  {
      "_id": "5fbee893ec54006d58d8bcb2",
      "source": "simulated",
      "comment": "3me9b",
      "profile": {
          "age": {
              "value": "18-24",
              "bid": 67,
              "informedBid": 60
          },
          "children": {
              "value": "none",
              "bid": 60,
              "informedBid": 80
          },
          "education": {
              "value": "doctorate degree",
              "bid": 64,
              "informedBid": 54
          },
          "marital": {
              "value": "single",
              "bid": 14,
              "informedBid": 30
          },
          "gender": {
              "value": "female",
              "bid": 23,
              "informedBid": 42
          },
          "interests": [
              {
                  "value": "Autos & Vehicles",
                  "bid": 42,
                  "informedBid": 46
              },
              {
                  "value": "Hobbies & Leisure",
                  "bid": 51,
                  "informedBid": 14
              },
              {
                  "value": "Food & Drink",
                  "bid": 83,
                  "informedBid": 18
              },
              {
                  "value": "Games",
                  "bid": 36,
                  "informedBid": 66
              }
          ]
      },
      "createdAt": "2020-11-25T23:28:20.795Z",
      "updatedAt": "2020-11-25T23:28:20.795Z"
  },
  {
      "_id": "5fbee84cec54006d58d8243b",
      "source": "simulated",
      "comment": "6ovea",
      "profile": {
          "age": {
              "value": "65+",
              "bid": 69,
              "informedBid": 99
          },
          "children": {
              "value": "adults",
              "bid": 21,
              "informedBid": 27
          },
          "education": {
              "value": "doctorate degree",
              "bid": 29,
              "informedBid": 97
          },
          "marital": {
              "value": "in a relationship",
              "bid": 54,
              "informedBid": 89
          },
          "gender": {
              "value": "female",
              "bid": 39,
              "informedBid": 55
          },
          "interests": [
              {
                  "value": "Business & Industrial",
                  "bid": 67,
                  "informedBid": 91
              },
              {
                  "value": "Health",
                  "bid": 82,
                  "informedBid": 56
              },
              {
                  "value": "Games",
                  "bid": 14,
                  "informedBid": 89
              }
          ]
      },
      "createdAt": "2020-11-25T23:27:09.003Z",
      "updatedAt": "2020-11-25T23:27:09.003Z"
  },
  {
      "_id": "5fbee821ec54006d58d7c9e3",
      "source": "simulated",
      "comment": "auvad",
      "profile": {
          "age": {
              "value": "25-34",
              "bid": 19,
              "informedBid": 91
          },
          "children": {
              "value": "toddlers",
              "bid": 95,
              "informedBid": 62
          },
          "education": {
              "value": "high school",
              "bid": 20,
              "informedBid": 67
          },
          "marital": {
              "value": "in a relationship",
              "bid": 59,
              "informedBid": 19
          },
          "gender": {
              "value": "male",
              "bid": 19,
              "informedBid": 44
          },
          "interests": [
              {
                  "value": "Autos & Vehicles",
                  "bid": 57,
                  "informedBid": 6
              },
              {
                  "value": "Arts & Entertainment",
                  "bid": 55,
                  "informedBid": 76
              },
              {
                  "value": "Arts & Entertainment",
                  "bid": 1,
                  "informedBid": 36
              },
              {
                  "value": "People & Society",
                  "bid": 75,
                  "informedBid": 6
              },
              {
                  "value": "Jobs & Education",
                  "bid": 2,
                  "informedBid": 57
              }
          ]
      },
      "createdAt": "2020-11-25T23:26:26.159Z",
      "updatedAt": "2020-11-25T23:26:26.159Z"
  },
  {
      "_id": "5fbee84dec54006d58d827cc",
      "source": "simulated",
      "comment": "rogmh",
      "profile": {
          "age": {
              "value": "65+",
              "bid": 65,
              "informedBid": 69
          },
          "children": {
              "value": "adults",
              "bid": 15,
              "informedBid": 67
          },
          "education": {
              "value": "doctorate degree",
              "bid": 46,
              "informedBid": 5
          },
          "marital": {
              "value": "in a relationship",
              "bid": 41,
              "informedBid": 88
          },
          "gender": {
              "value": "male",
              "bid": 81,
              "informedBid": 23
          },
          "interests": [
              {
                  "value": "Hobbies & Leisure",
                  "bid": 35,
                  "informedBid": 12
              },
              {
                  "value": "Finance",
                  "bid": 64,
                  "informedBid": 39
              },
              {
                  "value": "Business & Industrial",
                  "bid": 2,
                  "informedBid": 35
              }
          ]
      },
      "createdAt": "2020-11-25T23:27:10.856Z",
      "updatedAt": "2020-11-25T23:27:10.856Z"
  },
  {
      "_id": "5fbee7efec54006d58d76041",
      "source": "simulated",
      "comment": "cxryg",
      "profile": {
          "age": {
              "value": "55-64",
              "bid": 24,
              "informedBid": 19
          },
          "children": {
              "value": "toddlers",
              "bid": 21,
              "informedBid": 42
          },
          "education": {
              "value": "doctorate degree",
              "bid": 63,
              "informedBid": 51
          },
          "marital": {
              "value": "married",
              "bid": 46,
              "informedBid": 45
          },
          "gender": {
              "value": "female",
              "bid": 30,
              "informedBid": 62
          },
          "interests": [
              {
                  "value": "Food & Drink",
                  "bid": 24,
                  "informedBid": 56
              },
              {
                  "value": "Law & Government",
                  "bid": 76,
                  "informedBid": 40
              },
              {
                  "value": "Finance",
                  "bid": 69,
                  "informedBid": 96
              }
          ]
      },
      "createdAt": "2020-11-25T23:25:36.207Z",
      "updatedAt": "2020-11-25T23:25:36.207Z"
  },
  {
      "_id": "5fbee82cec54006d58d7e27e",
      "source": "simulated",
      "comment": "u9r60",
      "profile": {
          "age": {
              "value": "25-34",
              "bid": 49,
              "informedBid": 40
          },
          "children": {
              "value": "toddlers",
              "bid": 23,
              "informedBid": 45
          },
          "education": {
              "value": "high school",
              "bid": 37,
              "informedBid": 63
          },
          "marital": {
              "value": "married",
              "bid": 57,
              "informedBid": 78
          },
          "gender": {
              "value": "male",
              "bid": 99,
              "informedBid": 45
          },
          "interests": [
              {
                  "value": "Arts & Entertainment",
                  "bid": 38,
                  "informedBid": 27
              },
              {
                  "value": "World Localities",
                  "bid": 56,
                  "informedBid": 33
              },
              {
                  "value": "Reference ",
                  "bid": 12,
                  "informedBid": 5
              }
          ]
      },
      "createdAt": "2020-11-25T23:26:37.332Z",
      "updatedAt": "2020-11-25T23:26:37.332Z"
  },
  {
      "_id": "5fbee801ec54006d58d7884a",
      "source": "simulated",
      "comment": "m8s54",
      "profile": {
          "age": {
              "value": "55-64",
              "bid": 37,
              "informedBid": 71
          },
          "children": {
              "value": "teenagers",
              "bid": 69,
              "informedBid": 70
          },
          "education": {
              "value": "doctorate degree",
              "bid": 58,
              "informedBid": 83
          },
          "marital": {
              "value": "single",
              "bid": 78,
              "informedBid": 92
          },
          "gender": {
              "value": "male",
              "bid": 8,
              "informedBid": 82
          },
          "interests": [
              {
                  "value": "Books & Literature",
                  "bid": 9,
                  "informedBid": 64
              },
              {
                  "value": "Games",
                  "bid": 70,
                  "informedBid": 25
              },
              {
                  "value": "Hobbies & Leisure",
                  "bid": 98,
                  "informedBid": 56
              }
          ]
      },
      "createdAt": "2020-11-25T23:25:54.693Z",
      "updatedAt": "2020-11-25T23:25:54.693Z"
  },
  {
      "_id": "5fbee864ec54006d58d85908",
      "source": "simulated",
      "comment": "8plbd",
      "profile": {
          "age": {
              "value": "18-24",
              "bid": 4,
              "informedBid": 39
          },
          "children": {
              "value": "none",
              "bid": 21,
              "informedBid": 7
          },
          "education": {
              "value": "college",
              "bid": 99,
              "informedBid": 55
          },
          "marital": {
              "value": "single",
              "bid": 5,
              "informedBid": 29
          },
          "gender": {
              "value": "female",
              "bid": 78,
              "informedBid": 75
          },
          "interests": [
              {
                  "value": "Finance",
                  "bid": 2,
                  "informedBid": 72
              },
              {
                  "value": "Autos & Vehicles",
                  "bid": 16,
                  "informedBid": 65
              },
              {
                  "value": "Business & Industrial",
                  "bid": 46,
                  "informedBid": 44
              }
          ]
      },
      "createdAt": "2020-11-25T23:27:33.432Z",
      "updatedAt": "2020-11-25T23:27:33.432Z"
  },
  {
      "_id": "5fbee7f3ec54006d58d76846",
      "source": "simulated",
      "comment": "77rur",
      "profile": {
          "age": {
              "value": "25-34",
              "bid": 49,
              "informedBid": 27
          },
          "children": {
              "value": "adults",
              "bid": 76,
              "informedBid": 30
          },
          "education": {
              "value": "none",
              "bid": 17,
              "informedBid": 11
          },
          "marital": {
              "value": "in a relationship",
              "bid": 27,
              "informedBid": 21
          },
          "gender": {
              "value": "male",
              "bid": 90,
              "informedBid": 97
          },
          "interests": [
              {
                  "value": "Home & Garden",
                  "bid": 54,
                  "informedBid": 33
              },
              {
                  "value": "Jobs & Education",
                  "bid": 15,
                  "informedBid": 93
              },
              {
                  "value": "Games",
                  "bid": 52,
                  "informedBid": 91
              }
          ]
      },
      "createdAt": "2020-11-25T23:25:39.990Z",
      "updatedAt": "2020-11-25T23:25:39.990Z"
  },
  {
      "_id": "5fbee855ec54006d58d8368e",
      "source": "simulated",
      "comment": "3ordo",
      "profile": {
          "age": {
              "value": "45-54",
              "bid": 86,
              "informedBid": 43
          },
          "children": {
              "value": "teenagers",
              "bid": 43,
              "informedBid": 92
          },
          "education": {
              "value": "doctorate degree",
              "bid": 20,
              "informedBid": 89
          },
          "marital": {
              "value": "married",
              "bid": 10,
              "informedBid": 43
          },
          "gender": {
              "value": "female",
              "bid": 43,
              "informedBid": 23
          },
          "interests": [
              {
                  "value": "Real Estate",
                  "bid": 32,
                  "informedBid": 25
              },
              {
                  "value": "Real Estate",
                  "bid": 25,
                  "informedBid": 15
              },
              {
                  "value": "Law & Government",
                  "bid": 4,
                  "informedBid": 95
              },
              {
                  "value": "Law & Government",
                  "bid": 54,
                  "informedBid": 51
              }
          ]
      },
      "createdAt": "2020-11-25T23:27:18.034Z",
      "updatedAt": "2020-11-25T23:27:18.034Z"
  },
  {
      "_id": "5fbee816ec54006d58d7b3b0",
      "source": "simulated",
      "comment": "l37ym",
      "profile": {
          "age": {
              "value": "65+",
              "bid": 12,
              "informedBid": 91
          },
          "children": {
              "value": "none",
              "bid": 85,
              "informedBid": 43
          },
          "education": {
              "value": "doctorate degree",
              "bid": 87,
              "informedBid": 42
          },
          "marital": {
              "value": "single",
              "bid": 84,
              "informedBid": 27
          },
          "gender": {
              "value": "female",
              "bid": 1,
              "informedBid": 37
          },
          "interests": [
              {
                  "value": "Beauty & Fitness",
                  "bid": 86,
                  "informedBid": 96
              },
              {
                  "value": "Law & Government",
                  "bid": 41,
                  "informedBid": 91
              },
              {
                  "value": "Science",
                  "bid": 88,
                  "informedBid": 51
              }
          ]
      },
      "createdAt": "2020-11-25T23:26:14.968Z",
      "updatedAt": "2020-11-25T23:26:14.968Z"
  },
  {
      "_id": "5fbee85dec54006d58d849ab",
      "source": "simulated",
      "comment": "a61zt",
      "profile": {
          "age": {
              "value": "18-24",
              "bid": 54,
              "informedBid": 40
          },
          "children": {
              "value": "toddlers",
              "bid": 63,
              "informedBid": 72
          },
          "education": {
              "value": "doctorate degree",
              "bid": 33,
              "informedBid": 18
          },
          "marital": {
              "value": "in a relationship",
              "bid": 39,
              "informedBid": 90
          },
          "gender": {
              "value": "female",
              "bid": 91,
              "informedBid": 94
          },
          "interests": [
              {
                  "value": "News",
                  "bid": 28,
                  "informedBid": 35
              },
              {
                  "value": "Reference ",
                  "bid": 90,
                  "informedBid": 57
              },
              {
                  "value": "Hobbies & Leisure",
                  "bid": 28,
                  "informedBid": 73
              },
              {
                  "value": "Home & Garden",
                  "bid": 50,
                  "informedBid": 88
              }
          ]
      },
      "createdAt": "2020-11-25T23:27:25.989Z",
      "updatedAt": "2020-11-25T23:27:25.989Z"
  },
  {
      "_id": "5fbee809ec54006d58d79a17",
      "source": "simulated",
      "comment": "f30vg",
      "profile": {
          "age": {
              "value": "45-54",
              "bid": 81,
              "informedBid": 60
          },
          "children": {
              "value": "elementary school",
              "bid": 89,
              "informedBid": 2
          },
          "education": {
              "value": "doctorate degree",
              "bid": 37,
              "informedBid": 11
          },
          "marital": {
              "value": "married",
              "bid": 64,
              "informedBid": 99
          },
          "gender": {
              "value": "female",
              "bid": 53,
              "informedBid": 60
          },
          "interests": [
              {
                  "value": "Travel & Transportation",
                  "bid": 27,
                  "informedBid": 52
              },
              {
                  "value": "Shopping",
                  "bid": 9,
                  "informedBid": 3
              },
              {
                  "value": "Books & Literature",
                  "bid": 19,
                  "informedBid": 85
              }
          ]
      },
      "createdAt": "2020-11-25T23:26:02.288Z",
      "updatedAt": "2020-11-25T23:26:02.288Z"
  },
  {
      "_id": "5fbee83bec54006d58d80340",
      "source": "simulated",
      "comment": "r60lm",
      "profile": {
          "age": {
              "value": "18-24",
              "bid": 26,
              "informedBid": 81
          },
          "children": {
              "value": "toddlers",
              "bid": 42,
              "informedBid": 98
          },
          "education": {
              "value": "college",
              "bid": 68,
              "informedBid": 46
          },
          "marital": {
              "value": "single",
              "bid": 93,
              "informedBid": 57
          },
          "gender": {
              "value": "female",
              "bid": 82,
              "informedBid": 77
          },
          "interests": [
              {
                  "value": "World Localities",
                  "bid": 80,
                  "informedBid": 53
              },
              {
                  "value": "Reference ",
                  "bid": 15,
                  "informedBid": 5
              }
          ]
      },
      "createdAt": "2020-11-25T23:26:52.283Z",
      "updatedAt": "2020-11-25T23:26:52.283Z"
  },
  {
      "_id": "5fbee895ec54006d58d8c226",
      "source": "simulated",
      "comment": "dli40",
      "profile": {
          "age": {
              "value": "25-34",
              "bid": 69,
              "informedBid": 5
          },
          "children": {
              "value": "elementary school",
              "bid": 97,
              "informedBid": 65
          },
          "education": {
              "value": "none",
              "bid": 74,
              "informedBid": 49
          },
          "marital": {
              "value": "married",
              "bid": 8,
              "informedBid": 33
          },
          "gender": {
              "value": "female",
              "bid": 55,
              "informedBid": 54
          },
          "interests": [
              {
                  "value": "Books & Literature",
                  "bid": 4,
                  "informedBid": 78
              },
              {
                  "value": "Home & Garden",
                  "bid": 93,
                  "informedBid": 76
              }
          ]
      },
      "createdAt": "2020-11-25T23:28:22.703Z",
      "updatedAt": "2020-11-25T23:28:22.703Z"
  },
  {
      "_id": "5fbee880ec54006d58d89291",
      "source": "simulated",
      "comment": "gkj1q",
      "profile": {
          "age": {
              "value": "25-34",
              "bid": 5,
              "informedBid": 28
          },
          "children": {
              "value": "elementary school",
              "bid": 3,
              "informedBid": 82
          },
          "education": {
              "value": "none",
              "bid": 12,
              "informedBid": 93
          },
          "marital": {
              "value": "married",
              "bid": 55,
              "informedBid": 17
          },
          "gender": {
              "value": "female",
              "bid": 94,
              "informedBid": 35
          },
          "interests": [
              {
                  "value": "Pets & Animals",
                  "bid": 15,
                  "informedBid": 52
              },
              {
                  "value": "Science",
                  "bid": 4,
                  "informedBid": 56
              },
              {
                  "value": "Health",
                  "bid": 75,
                  "informedBid": 90
              }
          ]
      },
      "createdAt": "2020-11-25T23:28:00.896Z",
      "updatedAt": "2020-11-25T23:28:00.896Z"
  },
  {
      "_id": "5fbee835ec54006d58d7f422",
      "source": "simulated",
      "comment": "js4tc",
      "profile": {
          "age": {
              "value": "25-34",
              "bid": 10,
              "informedBid": 17
          },
          "children": {
              "value": "none",
              "bid": 92,
              "informedBid": 93
          },
          "education": {
              "value": "college",
              "bid": 60,
              "informedBid": 57
          },
          "marital": {
              "value": "single",
              "bid": 16,
              "informedBid": 35
          },
          "gender": {
              "value": "female",
              "bid": 47,
              "informedBid": 89
          },
          "interests": [
              {
                  "value": "Food & Drink",
                  "bid": 78,
                  "informedBid": 44
              },
              {
                  "value": "Pets & Animals",
                  "bid": 72,
                  "informedBid": 96
              },
              {
                  "value": "Science",
                  "bid": 66,
                  "informedBid": 19
              },
              {
                  "value": "People & Society",
                  "bid": 57,
                  "informedBid": 85
              },
              {
                  "value": "World Localities",
                  "bid": 58,
                  "informedBid": 78
              }
          ]
      },
      "createdAt": "2020-11-25T23:26:46.468Z",
      "updatedAt": "2020-11-25T23:26:46.468Z"
  },
  {
      "_id": "5fbee819ec54006d58d7bcea",
      "source": "simulated",
      "comment": "u6blj",
      "profile": {
          "age": {
              "value": "18-24",
              "bid": 97,
              "informedBid": 94
          },
          "children": {
              "value": "adults",
              "bid": 73,
              "informedBid": 95
          },
          "education": {
              "value": "high school",
              "bid": 31,
              "informedBid": 85
          },
          "marital": {
              "value": "married",
              "bid": 33,
              "informedBid": 28
          },
          "gender": {
              "value": "male",
              "bid": 77,
              "informedBid": 40
          },
          "interests": [
              {
                  "value": "Home & Garden",
                  "bid": 55,
                  "informedBid": 63
              },
              {
                  "value": "Travel & Transportation",
                  "bid": 91,
                  "informedBid": 4
              }
          ]
      },
      "createdAt": "2020-11-25T23:26:18.926Z",
      "updatedAt": "2020-11-25T23:26:18.926Z"
  },
  {
      "_id": "5fbee855ec54006d58d839de",
      "source": "simulated",
      "comment": "vx7a3",
      "profile": {
          "age": {
              "value": "55-64",
              "bid": 70,
              "informedBid": 74
          },
          "children": {
              "value": "none",
              "bid": 16,
              "informedBid": 58
          },
          "education": {
              "value": "none",
              "bid": 6,
              "informedBid": 32
          },
          "marital": {
              "value": "in a relationship",
              "bid": 34,
              "informedBid": 18
          },
          "gender": {
              "value": "male",
              "bid": 10,
              "informedBid": 59
          },
          "interests": [
              {
                  "value": "Online Communities",
                  "bid": 97,
                  "informedBid": 52
              },
              {
                  "value": "Online Communities",
                  "bid": 59,
                  "informedBid": 40
              }
          ]
      },
      "createdAt": "2020-11-25T23:27:18.293Z",
      "updatedAt": "2020-11-25T23:27:18.293Z"
  },
  {
      "_id": "5fbee800ec54006d58d7848b",
      "source": "simulated",
      "comment": "4qla8",
      "profile": {
          "age": {
              "value": "55-64",
              "bid": 6,
              "informedBid": 80
          },
          "children": {
              "value": "adults",
              "bid": 58,
              "informedBid": 20
          },
          "education": {
              "value": "high school",
              "bid": 34,
              "informedBid": 94
          },
          "marital": {
              "value": "married",
              "bid": 81,
              "informedBid": 32
          },
          "gender": {
              "value": "female",
              "bid": 76,
              "informedBid": 68
          },
          "interests": [
              {
                  "value": "Science",
                  "bid": 88,
                  "informedBid": 8
              },
              {
                  "value": "Autos & Vehicles",
                  "bid": 70,
                  "informedBid": 17
              },
              {
                  "value": "Finance",
                  "bid": 90,
                  "informedBid": 47
              }
          ]
      },
      "createdAt": "2020-11-25T23:25:52.915Z",
      "updatedAt": "2020-11-25T23:25:52.915Z"
  },
  {
      "_id": "5fbee831ec54006d58d7ec95",
      "source": "simulated",
      "comment": "tsnpx",
      "profile": {
          "age": {
              "value": "55-64",
              "bid": 22,
              "informedBid": 39
          },
          "children": {
              "value": "none",
              "bid": 74,
              "informedBid": 74
          },
          "education": {
              "value": "college",
              "bid": 25,
              "informedBid": 50
          },
          "marital": {
              "value": "married",
              "bid": 83,
              "informedBid": 32
          },
          "gender": {
              "value": "female",
              "bid": 71,
              "informedBid": 77
          },
          "interests": [
              {
                  "value": "Pets & Animals",
                  "bid": 91,
                  "informedBid": 66
              },
              {
                  "value": "Home & Garden",
                  "bid": 45,
                  "informedBid": 51
              }
          ]
      },
      "createdAt": "2020-11-25T23:26:42.794Z",
      "updatedAt": "2020-11-25T23:26:42.794Z"
  },
  {
      "_id": "5fbee889ec54006d58d8a778",
      "source": "simulated",
      "comment": "kjzhh",
      "profile": {
          "age": {
              "value": "55-64",
              "bid": 72,
              "informedBid": 15
          },
          "children": {
              "value": "none",
              "bid": 84,
              "informedBid": 68
          },
          "education": {
              "value": "doctorate degree",
              "bid": 25,
              "informedBid": 7
          },
          "marital": {
              "value": "single",
              "bid": 80,
              "informedBid": 36
          },
          "gender": {
              "value": "male",
              "bid": 9,
              "informedBid": 69
          },
          "interests": [
              {
                  "value": "Beauty & Fitness",
                  "bid": 79,
                  "informedBid": 98
              },
              {
                  "value": "Shopping",
                  "bid": 9,
                  "informedBid": 12
              },
              {
                  "value": "Games",
                  "bid": 95,
                  "informedBid": 54
              },
              {
                  "value": "Jobs & Education",
                  "bid": 5,
                  "informedBid": 5
              },
              {
                  "value": "Online Communities",
                  "bid": 24,
                  "informedBid": 40
              }
          ]
      },
      "createdAt": "2020-11-25T23:28:09.969Z",
      "updatedAt": "2020-11-25T23:28:09.969Z"
  },
  {
      "_id": "5fbee88aec54006d58d8ab7c",
      "source": "simulated",
      "comment": "rg031",
      "profile": {
          "age": {
              "value": "35-44",
              "bid": 11,
              "informedBid": 82
          },
          "children": {
              "value": "toddlers",
              "bid": 63,
              "informedBid": 5
          },
          "education": {
              "value": "none",
              "bid": 53,
              "informedBid": 88
          },
          "marital": {
              "value": "in a relationship",
              "bid": 30,
              "informedBid": 49
          },
          "gender": {
              "value": "male",
              "bid": 62,
              "informedBid": 78
          },
          "interests": [
              {
                  "value": "Law & Government",
                  "bid": 58,
                  "informedBid": 91
              },
              {
                  "value": "Autos & Vehicles",
                  "bid": 54,
                  "informedBid": 39
              }
          ]
      },
      "createdAt": "2020-11-25T23:28:11.786Z",
      "updatedAt": "2020-11-25T23:28:11.786Z"
  },
  {
      "_id": "5fbee802ec54006d58d78a40",
      "source": "simulated",
      "comment": "8r2xa",
      "profile": {
          "age": {
              "value": "18-24",
              "bid": 45,
              "informedBid": 71
          },
          "children": {
              "value": "teenagers",
              "bid": 69,
              "informedBid": 91
          },
          "education": {
              "value": "none",
              "bid": 46,
              "informedBid": 63
          },
          "marital": {
              "value": "married",
              "bid": 48,
              "informedBid": 45
          },
          "gender": {
              "value": "female",
              "bid": 43,
              "informedBid": 57
          },
          "interests": [
              {
                  "value": "Internet & Telecom",
                  "bid": 44,
                  "informedBid": 20
              },
              {
                  "value": "Games",
                  "bid": 69,
                  "informedBid": 76
              },
              {
                  "value": "Online Communities",
                  "bid": 61,
                  "informedBid": 5
              }
          ]
      },
      "createdAt": "2020-11-25T23:25:54.851Z",
      "updatedAt": "2020-11-25T23:25:54.851Z"
  },
  {
      "_id": "5fbee825ec54006d58d7d23a",
      "source": "simulated",
      "comment": "waf1z",
      "profile": {
          "age": {
              "value": "35-44",
              "bid": 18,
              "informedBid": 23
          },
          "children": {
              "value": "teenagers",
              "bid": 64,
              "informedBid": 93
          },
          "education": {
              "value": "none",
              "bid": 54,
              "informedBid": 52
          },
          "marital": {
              "value": "single",
              "bid": 68,
              "informedBid": 85
          },
          "gender": {
              "value": "female",
              "bid": 40,
              "informedBid": 80
          },
          "interests": [
              {
                  "value": "Law & Government",
                  "bid": 4,
                  "informedBid": 5
              },
              {
                  "value": "Pets & Animals",
                  "bid": 42,
                  "informedBid": 50
              },
              {
                  "value": "Jobs & Education",
                  "bid": 69,
                  "informedBid": 2
              }
          ]
      },
      "createdAt": "2020-11-25T23:26:29.856Z",
      "updatedAt": "2020-11-25T23:26:29.856Z"
  },
  {
      "_id": "5fbee867ec54006d58d85da1",
      "source": "simulated",
      "comment": "a388v",
      "profile": {
          "age": {
              "value": "65+",
              "bid": 66,
              "informedBid": 75
          },
          "children": {
              "value": "elementary school",
              "bid": 95,
              "informedBid": 67
          },
          "education": {
              "value": "doctorate degree",
              "bid": 1,
              "informedBid": 91
          },
          "marital": {
              "value": "single",
              "bid": 11,
              "informedBid": 94
          },
          "gender": {
              "value": "male",
              "bid": 87,
              "informedBid": 11
          },
          "interests": [
              {
                  "value": "Business & Industrial",
                  "bid": 2,
                  "informedBid": 50
              },
              {
                  "value": "Books & Literature",
                  "bid": 78,
                  "informedBid": 13
              },
              {
                  "value": "Finance",
                  "bid": 74,
                  "informedBid": 62
              }
          ]
      },
      "createdAt": "2020-11-25T23:27:36.803Z",
      "updatedAt": "2020-11-25T23:27:36.803Z"
  },
  {
      "_id": "5fbee7e0ec54006d58d74647",
      "source": "simulated",
      "comment": "b433d",
      "profile": {
          "age": {
              "value": "45-54",
              "bid": 50,
              "informedBid": 68
          },
          "children": {
              "value": "none",
              "bid": 96,
              "informedBid": 84
          },
          "education": {
              "value": "college",
              "bid": 14,
              "informedBid": 64
          },
          "marital": {
              "value": "in a relationship",
              "bid": 21,
              "informedBid": 41
          },
          "gender": {
              "value": "female",
              "bid": 69,
              "informedBid": 33
          },
          "interests": [
              {
                  "value": "Health",
                  "bid": 1,
                  "informedBid": 14
              },
              {
                  "value": "Food & Drink",
                  "bid": 67,
                  "informedBid": 68
              },
              {
                  "value": "Shopping",
                  "bid": 97,
                  "informedBid": 23
              }
          ]
      },
      "createdAt": "2020-11-25T23:25:21.449Z",
      "updatedAt": "2020-11-25T23:25:21.449Z"
  },
  {
      "_id": "5fbee893ec54006d58d8bea6",
      "source": "simulated",
      "comment": "kf9ku",
      "profile": {
          "age": {
              "value": "45-54",
              "bid": 13,
              "informedBid": 13
          },
          "children": {
              "value": "none",
              "bid": 36,
              "informedBid": 28
          },
          "education": {
              "value": "college",
              "bid": 98,
              "informedBid": 35
          },
          "marital": {
              "value": "married",
              "bid": 72,
              "informedBid": 93
          },
          "gender": {
              "value": "female",
              "bid": 58,
              "informedBid": 68
          },
          "interests": [
              {
                  "value": "Hobbies & Leisure",
                  "bid": 53,
                  "informedBid": 81
              },
              {
                  "value": "Games",
                  "bid": 62,
                  "informedBid": 30
              }
          ]
      },
      "createdAt": "2020-11-25T23:28:20.974Z",
      "updatedAt": "2020-11-25T23:28:20.974Z"
  },
  {
      "_id": "5fbee82aec54006d58d7dd0e",
      "source": "simulated",
      "comment": "cf464",
      "profile": {
          "age": {
              "value": "25-34",
              "bid": 56,
              "informedBid": 34
          },
          "children": {
              "value": "elementary school",
              "bid": 87,
              "informedBid": 27
          },
          "education": {
              "value": "doctorate degree",
              "bid": 70,
              "informedBid": 38
          },
          "marital": {
              "value": "married",
              "bid": 23,
              "informedBid": 25
          },
          "gender": {
              "value": "male",
              "bid": 1,
              "informedBid": 27
          },
          "interests": [
              {
                  "value": "Books & Literature",
                  "bid": 36,
                  "informedBid": 74
              },
              {
                  "value": "Autos & Vehicles",
                  "bid": 5,
                  "informedBid": 78
              },
              {
                  "value": "Arts & Entertainment",
                  "bid": 24,
                  "informedBid": 14
              },
              {
                  "value": "Pets & Animals",
                  "bid": 36,
                  "informedBid": 98
              }
          ]
      },
      "createdAt": "2020-11-25T23:26:35.253Z",
      "updatedAt": "2020-11-25T23:26:35.253Z"
  },
  {
      "_id": "5fbee839ec54006d58d7fde4",
      "source": "simulated",
      "comment": "ge31e",
      "profile": {
          "age": {
              "value": "18-24",
              "bid": 53,
              "informedBid": 50
          },
          "children": {
              "value": "none",
              "bid": 17,
              "informedBid": 2
          },
          "education": {
              "value": "high school",
              "bid": 37,
              "informedBid": 97
          },
          "marital": {
              "value": "married",
              "bid": 39,
              "informedBid": 53
          },
          "gender": {
              "value": "male",
              "bid": 84,
              "informedBid": 51
          },
          "interests": [
              {
                  "value": "News",
                  "bid": 24,
                  "informedBid": 80
              },
              {
                  "value": "World Localities",
                  "bid": 94,
                  "informedBid": 79
              },
              {
                  "value": "Sports",
                  "bid": 38,
                  "informedBid": 11
              },
              {
                  "value": "Hobbies & Leisure",
                  "bid": 51,
                  "informedBid": 45
              },
              {
                  "value": "Books & Literature",
                  "bid": 74,
                  "informedBid": 68
              }
          ]
      },
      "createdAt": "2020-11-25T23:26:50.247Z",
      "updatedAt": "2020-11-25T23:26:50.247Z"
  },
  {
      "_id": "5fbee84fec54006d58d82b1b",
      "source": "simulated",
      "comment": "g9jmv",
      "profile": {
          "age": {
              "value": "18-24",
              "bid": 13,
              "informedBid": 70
          },
          "children": {
              "value": "none",
              "bid": 90,
              "informedBid": 76
          },
          "education": {
              "value": "college",
              "bid": 40,
              "informedBid": 56
          },
          "marital": {
              "value": "in a relationship",
              "bid": 32,
              "informedBid": 99
          },
          "gender": {
              "value": "male",
              "bid": 86,
              "informedBid": 72
          },
          "interests": [
              {
                  "value": "Online Communities",
                  "bid": 32,
                  "informedBid": 90
              },
              {
                  "value": "Beauty & Fitness",
                  "bid": 72,
                  "informedBid": 35
              },
              {
                  "value": "People & Society",
                  "bid": 97,
                  "informedBid": 40
              }
          ]
      },
      "createdAt": "2020-11-25T23:27:12.597Z",
      "updatedAt": "2020-11-25T23:27:12.597Z"
  },
  {
      "_id": "5fbee88cec54006d58d8aebe",
      "source": "simulated",
      "comment": "1tvgg",
      "profile": {
          "age": {
              "value": "45-54",
              "bid": 20,
              "informedBid": 29
          },
          "children": {
              "value": "teenagers",
              "bid": 82,
              "informedBid": 68
          },
          "education": {
              "value": "doctorate degree",
              "bid": 75,
              "informedBid": 66
          },
          "marital": {
              "value": "in a relationship",
              "bid": 76,
              "informedBid": 47
          },
          "gender": {
              "value": "male",
              "bid": 43,
              "informedBid": 29
          },
          "interests": [
              {
                  "value": "Travel & Transportation",
                  "bid": 62,
                  "informedBid": 63
              },
              {
                  "value": "Finance",
                  "bid": 10,
                  "informedBid": 87
              },
              {
                  "value": "Online Communities",
                  "bid": 85,
                  "informedBid": 97
              }
          ]
      },
      "createdAt": "2020-11-25T23:28:13.517Z",
      "updatedAt": "2020-11-25T23:28:13.517Z"
  },
  {
      "_id": "5fbee7feec54006d58d78193",
      "source": "simulated",
      "comment": "hoch0",
      "profile": {
          "age": {
              "value": "55-64",
              "bid": 16,
              "informedBid": 89
          },
          "children": {
              "value": "toddlers",
              "bid": 46,
              "informedBid": 3
          },
          "education": {
              "value": "none",
              "bid": 83,
              "informedBid": 39
          },
          "marital": {
              "value": "single",
              "bid": 30,
              "informedBid": 89
          },
          "gender": {
              "value": "male",
              "bid": 27,
              "informedBid": 80
          },
          "interests": [
              {
                  "value": "Science",
                  "bid": 76,
                  "informedBid": 18
              },
              {
                  "value": "Sports",
                  "bid": 92,
                  "informedBid": 16
              },
              {
                  "value": "Online Communities",
                  "bid": 3,
                  "informedBid": 88
              },
              {
                  "value": "Shopping",
                  "bid": 64,
                  "informedBid": 79
              },
              {
                  "value": "Autos & Vehicles",
                  "bid": 11,
                  "informedBid": 60
              }
          ]
      },
      "createdAt": "2020-11-25T23:25:51.177Z",
      "updatedAt": "2020-11-25T23:25:51.177Z"
  },
  {
      "_id": "5fbee871ec54006d58d8727b",
      "source": "simulated",
      "comment": "fn7vo",
      "profile": {
          "age": {
              "value": "55-64",
              "bid": 72,
              "informedBid": 60
          },
          "children": {
              "value": "toddlers",
              "bid": 39,
              "informedBid": 63
          },
          "education": {
              "value": "college",
              "bid": 87,
              "informedBid": 28
          },
          "marital": {
              "value": "in a relationship",
              "bid": 57,
              "informedBid": 5
          },
          "gender": {
              "value": "male",
              "bid": 38,
              "informedBid": 42
          },
          "interests": [
              {
                  "value": "People & Society",
                  "bid": 37,
                  "informedBid": 94
              },
              {
                  "value": "Internet & Telecom",
                  "bid": 71,
                  "informedBid": 88
              }
          ]
      },
      "createdAt": "2020-11-25T23:27:46.113Z",
      "updatedAt": "2020-11-25T23:27:46.113Z"
  },
  {
      "_id": "5fbee897ec54006d58d8c397",
      "source": "simulated",
      "comment": "ztpwo",
      "profile": {
          "age": {
              "value": "65+",
              "bid": 11,
              "informedBid": 67
          },
          "children": {
              "value": "elementary school",
              "bid": 92,
              "informedBid": 83
          },
          "education": {
              "value": "college",
              "bid": 19,
              "informedBid": 39
          },
          "marital": {
              "value": "single",
              "bid": 7,
              "informedBid": 79
          },
          "gender": {
              "value": "female",
              "bid": 93,
              "informedBid": 67
          },
          "interests": [
              {
                  "value": "Home & Garden",
                  "bid": 40,
                  "informedBid": 35
              },
              {
                  "value": "Reference ",
                  "bid": 87,
                  "informedBid": 90
              }
          ]
      },
      "createdAt": "2020-11-25T23:28:24.318Z",
      "updatedAt": "2020-11-25T23:28:24.318Z"
  },
  {
      "_id": "5fbee864ec54006d58d85646",
      "source": "simulated",
      "comment": "ho30a",
      "profile": {
          "age": {
              "value": "35-44",
              "bid": 92,
              "informedBid": 68
          },
          "children": {
              "value": "elementary school",
              "bid": 56,
              "informedBid": 45
          },
          "education": {
              "value": "high school",
              "bid": 47,
              "informedBid": 43
          },
          "marital": {
              "value": "married",
              "bid": 40,
              "informedBid": 56
          },
          "gender": {
              "value": "male",
              "bid": 73,
              "informedBid": 61
          },
          "interests": [
              {
                  "value": "Sports",
                  "bid": 36,
                  "informedBid": 48
              },
              {
                  "value": "Internet & Telecom",
                  "bid": 82,
                  "informedBid": 4
              }
          ]
      },
      "createdAt": "2020-11-25T23:27:33.205Z",
      "updatedAt": "2020-11-25T23:27:33.205Z"
  },
  {
      "_id": "5fbee809ec54006d58d79668",
      "source": "simulated",
      "comment": "zlvsd",
      "profile": {
          "age": {
              "value": "18-24",
              "bid": 68,
              "informedBid": 85
          },
          "children": {
              "value": "elementary school",
              "bid": 78,
              "informedBid": 42
          },
          "education": {
              "value": "none",
              "bid": 12,
              "informedBid": 57
          },
          "marital": {
              "value": "in a relationship",
              "bid": 86,
              "informedBid": 92
          },
          "gender": {
              "value": "female",
              "bid": 78,
              "informedBid": 50
          },
          "interests": [
              {
                  "value": "Food & Drink",
                  "bid": 7,
                  "informedBid": 83
              },
              {
                  "value": "Games",
                  "bid": 30,
                  "informedBid": 79
              },
              {
                  "value": "Law & Government",
                  "bid": 65,
                  "informedBid": 42
              }
          ]
      },
      "createdAt": "2020-11-25T23:26:01.964Z",
      "updatedAt": "2020-11-25T23:26:01.964Z"
  },
  {
      "_id": "5fbee805ec54006d58d790cb",
      "source": "simulated",
      "comment": "qgk1c",
      "profile": {
          "age": {
              "value": "45-54",
              "bid": 47,
              "informedBid": 30
          },
          "children": {
              "value": "toddlers",
              "bid": 79,
              "informedBid": 26
          },
          "education": {
              "value": "high school",
              "bid": 99,
              "informedBid": 3
          },
          "marital": {
              "value": "single",
              "bid": 77,
              "informedBid": 11
          },
          "gender": {
              "value": "male",
              "bid": 23,
              "informedBid": 3
          },
          "interests": [
              {
                  "value": "Pets & Animals",
                  "bid": 84,
                  "informedBid": 75
              },
              {
                  "value": "Finance",
                  "bid": 70,
                  "informedBid": 40
              },
              {
                  "value": "Food & Drink",
                  "bid": 69,
                  "informedBid": 22
              },
              {
                  "value": "Business & Industrial",
                  "bid": 66,
                  "informedBid": 31
              }
          ]
      },
      "createdAt": "2020-11-25T23:25:58.376Z",
      "updatedAt": "2020-11-25T23:25:58.376Z"
  },
  {
      "_id": "5fbee857ec54006d58d83d04",
      "source": "simulated",
      "comment": "zfine",
      "profile": {
          "age": {
              "value": "45-54",
              "bid": 94,
              "informedBid": 6
          },
          "children": {
              "value": "elementary school",
              "bid": 76,
              "informedBid": 33
          },
          "education": {
              "value": "doctorate degree",
              "bid": 40,
              "informedBid": 28
          },
          "marital": {
              "value": "single",
              "bid": 67,
              "informedBid": 39
          },
          "gender": {
              "value": "female",
              "bid": 72,
              "informedBid": 18
          },
          "interests": [
              {
                  "value": "Internet & Telecom",
                  "bid": 61,
                  "informedBid": 64
              },
              {
                  "value": "Computers & Electronics",
                  "bid": 62,
                  "informedBid": 32
              },
              {
                  "value": "Health",
                  "bid": 51,
                  "informedBid": 27
              },
              {
                  "value": "Online Communities",
                  "bid": 4,
                  "informedBid": 63
              }
          ]
      },
      "createdAt": "2020-11-25T23:27:20.026Z",
      "updatedAt": "2020-11-25T23:27:20.026Z"
  },
  {
      "_id": "5fbee803ec54006d58d78e02",
      "source": "simulated",
      "comment": "sv5yz",
      "profile": {
          "age": {
              "value": "65+",
              "bid": 51,
              "informedBid": 88
          },
          "children": {
              "value": "toddlers",
              "bid": 55,
              "informedBid": 72
          },
          "education": {
              "value": "high school",
              "bid": 7,
              "informedBid": 22
          },
          "marital": {
              "value": "in a relationship",
              "bid": 19,
              "informedBid": 84
          },
          "gender": {
              "value": "female",
              "bid": 94,
              "informedBid": 88
          },
          "interests": [
              {
                  "value": "Business & Industrial",
                  "bid": 57,
                  "informedBid": 17
              },
              {
                  "value": "Finance",
                  "bid": 44,
                  "informedBid": 22
              }
          ]
      },
      "createdAt": "2020-11-25T23:25:56.673Z",
      "updatedAt": "2020-11-25T23:25:56.673Z"
  },
  {
      "_id": "5fbee85cec54006d58d84619",
      "source": "simulated",
      "comment": "v8eus",
      "profile": {
          "age": {
              "value": "65+",
              "bid": 60,
              "informedBid": 28
          },
          "children": {
              "value": "teenagers",
              "bid": 14,
              "informedBid": 13
          },
          "education": {
              "value": "high school",
              "bid": 93,
              "informedBid": 37
          },
          "marital": {
              "value": "single",
              "bid": 26,
              "informedBid": 11
          },
          "gender": {
              "value": "female",
              "bid": 16,
              "informedBid": 83
          },
          "interests": [
              {
                  "value": "Autos & Vehicles",
                  "bid": 79,
                  "informedBid": 23
              },
              {
                  "value": "Finance",
                  "bid": 68,
                  "informedBid": 99
              }
          ]
      },
      "createdAt": "2020-11-25T23:27:25.691Z",
      "updatedAt": "2020-11-25T23:27:25.691Z"
  },
  {
      "_id": "5fbee828ec54006d58d7d8d9",
      "source": "simulated",
      "comment": "otq3m",
      "profile": {
          "age": {
              "value": "25-34",
              "bid": 13,
              "informedBid": 87
          },
          "children": {
              "value": "none",
              "bid": 93,
              "informedBid": 31
          },
          "education": {
              "value": "college",
              "bid": 62,
              "informedBid": 61
          },
          "marital": {
              "value": "married",
              "bid": 43,
              "informedBid": 49
          },
          "gender": {
              "value": "male",
              "bid": 15,
              "informedBid": 61
          },
          "interests": [
              {
                  "value": "Beauty & Fitness",
                  "bid": 55,
                  "informedBid": 54
              },
              {
                  "value": "Shopping",
                  "bid": 85,
                  "informedBid": 94
              }
          ]
      },
      "createdAt": "2020-11-25T23:26:33.430Z",
      "updatedAt": "2020-11-25T23:26:33.430Z"
  },
  {
      "_id": "5fbee83bec54006d58d8011e",
      "source": "simulated",
      "comment": "pwpd4",
      "profile": {
          "age": {
              "value": "45-54",
              "bid": 61,
              "informedBid": 4
          },
          "children": {
              "value": "adults",
              "bid": 29,
              "informedBid": 80
          },
          "education": {
              "value": "doctorate degree",
              "bid": 95,
              "informedBid": 2
          },
          "marital": {
              "value": "in a relationship",
              "bid": 62,
              "informedBid": 57
          },
          "gender": {
              "value": "male",
              "bid": 2,
              "informedBid": 55
          },
          "interests": [
              {
                  "value": "World Localities",
                  "bid": 33,
                  "informedBid": 21
              },
              {
                  "value": "Online Communities",
                  "bid": 58,
                  "informedBid": 37
              },
              {
                  "value": "Pets & Animals",
                  "bid": 45,
                  "informedBid": 26
              }
          ]
      },
      "createdAt": "2020-11-25T23:26:52.109Z",
      "updatedAt": "2020-11-25T23:26:52.109Z"
  },
  {
      "_id": "5fbee837ec54006d58d7f9e2",
      "source": "simulated",
      "comment": "ifmug",
      "profile": {
          "age": {
              "value": "45-54",
              "bid": 24,
              "informedBid": 73
          },
          "children": {
              "value": "elementary school",
              "bid": 58,
              "informedBid": 96
          },
          "education": {
              "value": "none",
              "bid": 6,
              "informedBid": 89
          },
          "marital": {
              "value": "single",
              "bid": 27,
              "informedBid": 80
          },
          "gender": {
              "value": "male",
              "bid": 18,
              "informedBid": 54
          },
          "interests": [
              {
                  "value": "Business & Industrial",
                  "bid": 61,
                  "informedBid": 38
              },
              {
                  "value": "Sports",
                  "bid": 81,
                  "informedBid": 55
              },
              {
                  "value": "Jobs & Education",
                  "bid": 10,
                  "informedBid": 62
              }
          ]
      },
      "createdAt": "2020-11-25T23:26:48.421Z",
      "updatedAt": "2020-11-25T23:26:48.421Z"
  },
  {
      "_id": "5fbee7f3ec54006d58d7692c",
      "source": "simulated",
      "comment": "6sa1y",
      "profile": {
          "age": {
              "value": "18-24",
              "bid": 6,
              "informedBid": 59
          },
          "children": {
              "value": "adults",
              "bid": 88,
              "informedBid": 88
          },
          "education": {
              "value": "doctorate degree",
              "bid": 68,
              "informedBid": 65
          },
          "marital": {
              "value": "in a relationship",
              "bid": 89,
              "informedBid": 19
          },
          "gender": {
              "value": "male",
              "bid": 9,
              "informedBid": 64
          },
          "interests": [
              {
                  "value": "Books & Literature",
                  "bid": 70,
                  "informedBid": 94
              },
              {
                  "value": "Travel & Transportation",
                  "bid": 11,
                  "informedBid": 3
              },
              {
                  "value": "Law & Government",
                  "bid": 71,
                  "informedBid": 45
              },
              {
                  "value": "Pets & Animals",
                  "bid": 8,
                  "informedBid": 17
              }
          ]
      },
      "createdAt": "2020-11-25T23:25:40.067Z",
      "updatedAt": "2020-11-25T23:25:40.067Z"
  },
  {
      "_id": "5fbee878ec54006d58d88339",
      "source": "simulated",
      "comment": "cq481",
      "profile": {
          "age": {
              "value": "25-34",
              "bid": 41,
              "informedBid": 69
          },
          "children": {
              "value": "teenagers",
              "bid": 32,
              "informedBid": 55
          },
          "education": {
              "value": "college",
              "bid": 60,
              "informedBid": 84
          },
          "marital": {
              "value": "single",
              "bid": 32,
              "informedBid": 59
          },
          "gender": {
              "value": "male",
              "bid": 9,
              "informedBid": 36
          },
          "interests": [
              {
                  "value": "Law & Government",
                  "bid": 68,
                  "informedBid": 17
              },
              {
                  "value": "Autos & Vehicles",
                  "bid": 66,
                  "informedBid": 25
              },
              {
                  "value": "Shopping",
                  "bid": 28,
                  "informedBid": 71
              }
          ]
      },
      "createdAt": "2020-11-25T23:27:53.620Z",
      "updatedAt": "2020-11-25T23:27:53.620Z"
  },
  {
      "_id": "5fbee801ec54006d58d7870d",
      "source": "simulated",
      "comment": "fhw4s",
      "profile": {
          "age": {
              "value": "35-44",
              "bid": 64,
              "informedBid": 94
          },
          "children": {
              "value": "toddlers",
              "bid": 21,
              "informedBid": 15
          },
          "education": {
              "value": "none",
              "bid": 29,
              "informedBid": 25
          },
          "marital": {
              "value": "single",
              "bid": 76,
              "informedBid": 15
          },
          "gender": {
              "value": "male",
              "bid": 86,
              "informedBid": 54
          },
          "interests": [
              {
                  "value": "Food & Drink",
                  "bid": 19,
                  "informedBid": 23
              },
              {
                  "value": "Science",
                  "bid": 71,
                  "informedBid": 21
              }
          ]
      },
      "createdAt": "2020-11-25T23:25:54.590Z",
      "updatedAt": "2020-11-25T23:25:54.590Z"
  },
  {
      "_id": "5fbee80bec54006d58d79be5",
      "source": "simulated",
      "comment": "ojcry",
      "profile": {
          "age": {
              "value": "18-24",
              "bid": 12,
              "informedBid": 37
          },
          "children": {
              "value": "elementary school",
              "bid": 23,
              "informedBid": 52
          },
          "education": {
              "value": "none",
              "bid": 28,
              "informedBid": 90
          },
          "marital": {
              "value": "single",
              "bid": 2,
              "informedBid": 38
          },
          "gender": {
              "value": "female",
              "bid": 47,
              "informedBid": 3
          },
          "interests": [
              {
                  "value": "Health",
                  "bid": 66,
                  "informedBid": 82
              },
              {
                  "value": "Science",
                  "bid": 68,
                  "informedBid": 6
              },
              {
                  "value": "Internet & Telecom",
                  "bid": 8,
                  "informedBid": 90
              }
          ]
      },
      "createdAt": "2020-11-25T23:26:03.949Z",
      "updatedAt": "2020-11-25T23:26:03.949Z"
  },
  {
      "_id": "5fbee85cec54006d58d846b7",
      "source": "simulated",
      "comment": "l9hwk",
      "profile": {
          "age": {
              "value": "35-44",
              "bid": 46,
              "informedBid": 52
          },
          "children": {
              "value": "elementary school",
              "bid": 43,
              "informedBid": 22
          },
          "education": {
              "value": "college",
              "bid": 64,
              "informedBid": 89
          },
          "marital": {
              "value": "married",
              "bid": 11,
              "informedBid": 91
          },
          "gender": {
              "value": "female",
              "bid": 12,
              "informedBid": 47
          },
          "interests": [
              {
                  "value": "News",
                  "bid": 67,
                  "informedBid": 17
              },
              {
                  "value": "Jobs & Education",
                  "bid": 95,
                  "informedBid": 54
              },
              {
                  "value": "Shopping",
                  "bid": 40,
                  "informedBid": 17
              }
          ]
      },
      "createdAt": "2020-11-25T23:27:25.742Z",
      "updatedAt": "2020-11-25T23:27:25.742Z"
  },
  {
      "_id": "5fbee82aec54006d58d7dfde",
      "source": "simulated",
      "comment": "0dpy3",
      "profile": {
          "age": {
              "value": "18-24",
              "bid": 50,
              "informedBid": 79
          },
          "children": {
              "value": "none",
              "bid": 12,
              "informedBid": 27
          },
          "education": {
              "value": "doctorate degree",
              "bid": 22,
              "informedBid": 73
          },
          "marital": {
              "value": "married",
              "bid": 8,
              "informedBid": 9
          },
          "gender": {
              "value": "female",
              "bid": 49,
              "informedBid": 1
          },
          "interests": [
              {
                  "value": "People & Society",
                  "bid": 32,
                  "informedBid": 6
              },
              {
                  "value": "Jobs & Education",
                  "bid": 50,
                  "informedBid": 39
              },
              {
                  "value": "News",
                  "bid": 27,
                  "informedBid": 72
              },
              {
                  "value": "Beauty & Fitness",
                  "bid": 67,
                  "informedBid": 86
              }
          ]
      },
      "createdAt": "2020-11-25T23:26:35.493Z",
      "updatedAt": "2020-11-25T23:26:35.493Z"
  },
  {
      "_id": "5fbee860ec54006d58d850b7",
      "source": "simulated",
      "comment": "2dskf",
      "profile": {
          "age": {
              "value": "65+",
              "bid": 25,
              "informedBid": 74
          },
          "children": {
              "value": "teenagers",
              "bid": 56,
              "informedBid": 24
          },
          "education": {
              "value": "none",
              "bid": 93,
              "informedBid": 78
          },
          "marital": {
              "value": "married",
              "bid": 47,
              "informedBid": 64
          },
          "gender": {
              "value": "male",
              "bid": 70,
              "informedBid": 54
          },
          "interests": [
              {
                  "value": "Online Communities",
                  "bid": 92,
                  "informedBid": 41
              },
              {
                  "value": "Pets & Animals",
                  "bid": 76,
                  "informedBid": 11
              },
              {
                  "value": "Business & Industrial",
                  "bid": 17,
                  "informedBid": 2
              },
              {
                  "value": "Science",
                  "bid": 40,
                  "informedBid": 44
              }
          ]
      },
      "createdAt": "2020-11-25T23:27:29.687Z",
      "updatedAt": "2020-11-25T23:27:29.687Z"
  },
  {
      "_id": "5fbee837ec54006d58d7f9c7",
      "source": "simulated",
      "comment": "gsxll",
      "profile": {
          "age": {
              "value": "18-24",
              "bid": 88,
              "informedBid": 46
          },
          "children": {
              "value": "toddlers",
              "bid": 82,
              "informedBid": 13
          },
          "education": {
              "value": "college",
              "bid": 89,
              "informedBid": 42
          },
          "marital": {
              "value": "married",
              "bid": 86,
              "informedBid": 59
          },
          "gender": {
              "value": "female",
              "bid": 63,
              "informedBid": 63
          },
          "interests": [
              {
                  "value": "World Localities",
                  "bid": 68,
                  "informedBid": 15
              },
              {
                  "value": "Computers & Electronics",
                  "bid": 86,
                  "informedBid": 45
              }
          ]
      },
      "createdAt": "2020-11-25T23:26:48.412Z",
      "updatedAt": "2020-11-25T23:26:48.412Z"
  },
  {
      "_id": "5fbee862ec54006d58d85348",
      "source": "simulated",
      "comment": "766ax",
      "profile": {
          "age": {
              "value": "55-64",
              "bid": 34,
              "informedBid": 41
          },
          "children": {
              "value": "none",
              "bid": 96,
              "informedBid": 11
          },
          "education": {
              "value": "college",
              "bid": 24,
              "informedBid": 57
          },
          "marital": {
              "value": "married",
              "bid": 91,
              "informedBid": 45
          },
          "gender": {
              "value": "male",
              "bid": 88,
              "informedBid": 2
          },
          "interests": [
              {
                  "value": "Hobbies & Leisure",
                  "bid": 35,
                  "informedBid": 66
              },
              {
                  "value": "Games",
                  "bid": 97,
                  "informedBid": 3
              },
              {
                  "value": "Health",
                  "bid": 80,
                  "informedBid": 30
              }
          ]
      },
      "createdAt": "2020-11-25T23:27:31.421Z",
      "updatedAt": "2020-11-25T23:27:31.421Z"
  },
  {
      "_id": "5fbee864ec54006d58d857fe",
      "source": "simulated",
      "comment": "mp3lx",
      "profile": {
          "age": {
              "value": "25-34",
              "bid": 79,
              "informedBid": 35
          },
          "children": {
              "value": "toddlers",
              "bid": 17,
              "informedBid": 99
          },
          "education": {
              "value": "none",
              "bid": 67,
              "informedBid": 68
          },
          "marital": {
              "value": "single",
              "bid": 51,
              "informedBid": 4
          },
          "gender": {
              "value": "female",
              "bid": 42,
              "informedBid": 50
          },
          "interests": [
              {
                  "value": "Online Communities",
                  "bid": 68,
                  "informedBid": 19
              },
              {
                  "value": "Internet & Telecom",
                  "bid": 98,
                  "informedBid": 93
              },
              {
                  "value": "Hobbies & Leisure",
                  "bid": 56,
                  "informedBid": 22
              },
              {
                  "value": "News",
                  "bid": 68,
                  "informedBid": 62
              }
          ]
      },
      "createdAt": "2020-11-25T23:27:33.349Z",
      "updatedAt": "2020-11-25T23:27:33.349Z"
  },
  {
      "_id": "5fbee851ec54006d58d83239",
      "source": "simulated",
      "comment": "j4k29",
      "profile": {
          "age": {
              "value": "65+",
              "bid": 38,
              "informedBid": 29
          },
          "children": {
              "value": "none",
              "bid": 5,
              "informedBid": 69
          },
          "education": {
              "value": "doctorate degree",
              "bid": 76,
              "informedBid": 50
          },
          "marital": {
              "value": "in a relationship",
              "bid": 9,
              "informedBid": 26
          },
          "gender": {
              "value": "female",
              "bid": 79,
              "informedBid": 32
          },
          "interests": [
              {
                  "value": "World Localities",
                  "bid": 47,
                  "informedBid": 11
              },
              {
                  "value": "Food & Drink",
                  "bid": 78,
                  "informedBid": 32
              },
              {
                  "value": "Hobbies & Leisure",
                  "bid": 90,
                  "informedBid": 93
              }
          ]
      },
      "createdAt": "2020-11-25T23:27:14.642Z",
      "updatedAt": "2020-11-25T23:27:14.642Z"
  },
  {
      "_id": "5fbee862ec54006d58d853ae",
      "source": "simulated",
      "comment": "nn252",
      "profile": {
          "age": {
              "value": "45-54",
              "bid": 55,
              "informedBid": 28
          },
          "children": {
              "value": "teenagers",
              "bid": 59,
              "informedBid": 88
          },
          "education": {
              "value": "none",
              "bid": 45,
              "informedBid": 29
          },
          "marital": {
              "value": "in a relationship",
              "bid": 49,
              "informedBid": 32
          },
          "gender": {
              "value": "female",
              "bid": 23,
              "informedBid": 49
          },
          "interests": [
              {
                  "value": "Hobbies & Leisure",
                  "bid": 30,
                  "informedBid": 40
              },
              {
                  "value": "Autos & Vehicles",
                  "bid": 45,
                  "informedBid": 62
              },
              {
                  "value": "Law & Government",
                  "bid": 36,
                  "informedBid": 75
              },
              {
                  "value": "Real Estate",
                  "bid": 12,
                  "informedBid": 45
              }
          ]
      },
      "createdAt": "2020-11-25T23:27:31.454Z",
      "updatedAt": "2020-11-25T23:27:31.454Z"
  },
  {
      "_id": "5fbee7edec54006d58d75d74",
      "source": "simulated",
      "comment": "6lehp",
      "profile": {
          "age": {
              "value": "35-44",
              "bid": 64,
              "informedBid": 93
          },
          "children": {
              "value": "teenagers",
              "bid": 89,
              "informedBid": 80
          },
          "education": {
              "value": "doctorate degree",
              "bid": 33,
              "informedBid": 26
          },
          "marital": {
              "value": "single",
              "bid": 6,
              "informedBid": 36
          },
          "gender": {
              "value": "female",
              "bid": 31,
              "informedBid": 95
          },
          "interests": [
              {
                  "value": "Reference ",
                  "bid": 36,
                  "informedBid": 23
              },
              {
                  "value": "Health",
                  "bid": 74,
                  "informedBid": 88
              },
              {
                  "value": "Books & Literature",
                  "bid": 71,
                  "informedBid": 11
              }
          ]
      },
      "createdAt": "2020-11-25T23:25:34.384Z",
      "updatedAt": "2020-11-25T23:25:34.384Z"
  },
  {
      "_id": "5fbee84aec54006d58d82219",
      "source": "simulated",
      "comment": "pfsvw",
      "profile": {
          "age": {
              "value": "55-64",
              "bid": 84,
              "informedBid": 90
          },
          "children": {
              "value": "none",
              "bid": 49,
              "informedBid": 62
          },
          "education": {
              "value": "none",
              "bid": 39,
              "informedBid": 76
          },
          "marital": {
              "value": "married",
              "bid": 5,
              "informedBid": 70
          },
          "gender": {
              "value": "male",
              "bid": 51,
              "informedBid": 54
          },
          "interests": [
              {
                  "value": "Finance",
                  "bid": 87,
                  "informedBid": 40
              },
              {
                  "value": "News",
                  "bid": 44,
                  "informedBid": 75
              },
              {
                  "value": "Real Estate",
                  "bid": 99,
                  "informedBid": 30
              }
          ]
      },
      "createdAt": "2020-11-25T23:27:07.330Z",
      "updatedAt": "2020-11-25T23:27:07.330Z"
  },
  {
      "_id": "5fbee7faec54006d58d777a4",
      "source": "simulated",
      "comment": "mrw19",
      "profile": {
          "age": {
              "value": "18-24",
              "bid": 96,
              "informedBid": 14
          },
          "children": {
              "value": "teenagers",
              "bid": 43,
              "informedBid": 80
          },
          "education": {
              "value": "doctorate degree",
              "bid": 87,
              "informedBid": 10
          },
          "marital": {
              "value": "single",
              "bid": 50,
              "informedBid": 68
          },
          "gender": {
              "value": "female",
              "bid": 27,
              "informedBid": 25
          },
          "interests": [
              {
                  "value": "Health",
                  "bid": 27,
                  "informedBid": 61
              },
              {
                  "value": "Computers & Electronics",
                  "bid": 90,
                  "informedBid": 84
              },
              {
                  "value": "Computers & Electronics",
                  "bid": 15,
                  "informedBid": 96
              },
              {
                  "value": "Reference ",
                  "bid": 31,
                  "informedBid": 1
              }
          ]
      },
      "createdAt": "2020-11-25T23:25:47.212Z",
      "updatedAt": "2020-11-25T23:25:47.212Z"
  },
  {
      "_id": "5fbee87cec54006d58d88a12",
      "source": "simulated",
      "comment": "18338",
      "profile": {
          "age": {
              "value": "45-54",
              "bid": 13,
              "informedBid": 92
          },
          "children": {
              "value": "adults",
              "bid": 36,
              "informedBid": 22
          },
          "education": {
              "value": "none",
              "bid": 66,
              "informedBid": 98
          },
          "marital": {
              "value": "single",
              "bid": 73,
              "informedBid": 87
          },
          "gender": {
              "value": "male",
              "bid": 8,
              "informedBid": 16
          },
          "interests": [
              {
                  "value": "Internet & Telecom",
                  "bid": 1,
                  "informedBid": 28
              },
              {
                  "value": "Sports",
                  "bid": 61,
                  "informedBid": 61
              },
              {
                  "value": "Beauty & Fitness",
                  "bid": 94,
                  "informedBid": 69
              }
          ]
      },
      "createdAt": "2020-11-25T23:27:57.199Z",
      "updatedAt": "2020-11-25T23:27:57.199Z"
  },
  {
      "_id": "5fbee7ebec54006d58d75b3e",
      "source": "simulated",
      "comment": "yedd4",
      "profile": {
          "age": {
              "value": "45-54",
              "bid": 87,
              "informedBid": 24
          },
          "children": {
              "value": "toddlers",
              "bid": 22,
              "informedBid": 18
          },
          "education": {
              "value": "college",
              "bid": 81,
              "informedBid": 79
          },
          "marital": {
              "value": "married",
              "bid": 1,
              "informedBid": 23
          },
          "gender": {
              "value": "male",
              "bid": 11,
              "informedBid": 14
          },
          "interests": [
              {
                  "value": "Shopping",
                  "bid": 76,
                  "informedBid": 88
              },
              {
                  "value": "Hobbies & Leisure",
                  "bid": 16,
                  "informedBid": 36
              }
          ]
      },
      "createdAt": "2020-11-25T23:25:32.503Z",
      "updatedAt": "2020-11-25T23:25:32.503Z"
  },
  {
      "_id": "5fbee885ec54006d58d89eb2",
      "source": "simulated",
      "comment": "xwea0",
      "profile": {
          "age": {
              "value": "65+",
              "bid": 13,
              "informedBid": 46
          },
          "children": {
              "value": "teenagers",
              "bid": 15,
              "informedBid": 97
          },
          "education": {
              "value": "none",
              "bid": 88,
              "informedBid": 63
          },
          "marital": {
              "value": "in a relationship",
              "bid": 5,
              "informedBid": 29
          },
          "gender": {
              "value": "female",
              "bid": 3,
              "informedBid": 27
          },
          "interests": [
              {
                  "value": "Jobs & Education",
                  "bid": 24,
                  "informedBid": 21
              },
              {
                  "value": "Reference ",
                  "bid": 36,
                  "informedBid": 84
              },
              {
                  "value": "Beauty & Fitness",
                  "bid": 9,
                  "informedBid": 55
              }
          ]
      },
      "createdAt": "2020-11-25T23:28:06.381Z",
      "updatedAt": "2020-11-25T23:28:06.381Z"
  },
  {
      "_id": "5fbee7efec54006d58d761d5",
      "source": "simulated",
      "comment": "zwl12",
      "profile": {
          "age": {
              "value": "45-54",
              "bid": 71,
              "informedBid": 17
          },
          "children": {
              "value": "adults",
              "bid": 81,
              "informedBid": 45
          },
          "education": {
              "value": "doctorate degree",
              "bid": 80,
              "informedBid": 53
          },
          "marital": {
              "value": "married",
              "bid": 12,
              "informedBid": 12
          },
          "gender": {
              "value": "male",
              "bid": 86,
              "informedBid": 27
          },
          "interests": [
              {
                  "value": "Home & Garden",
                  "bid": 38,
                  "informedBid": 30
              },
              {
                  "value": "Business & Industrial",
                  "bid": 41,
                  "informedBid": 38
              }
          ]
      },
      "createdAt": "2020-11-25T23:25:36.335Z",
      "updatedAt": "2020-11-25T23:25:36.335Z"
  },
  {
      "_id": "5fbee881ec54006d58d89727",
      "source": "simulated",
      "comment": "t21yb",
      "profile": {
          "age": {
              "value": "35-44",
              "bid": 39,
              "informedBid": 96
          },
          "children": {
              "value": "teenagers",
              "bid": 80,
              "informedBid": 10
          },
          "education": {
              "value": "high school",
              "bid": 9,
              "informedBid": 5
          },
          "marital": {
              "value": "in a relationship",
              "bid": 89,
              "informedBid": 71
          },
          "gender": {
              "value": "male",
              "bid": 6,
              "informedBid": 36
          },
          "interests": [
              {
                  "value": "Books & Literature",
                  "bid": 29,
                  "informedBid": 74
              },
              {
                  "value": "Autos & Vehicles",
                  "bid": 50,
                  "informedBid": 64
              },
              {
                  "value": "People & Society",
                  "bid": 49,
                  "informedBid": 29
              },
              {
                  "value": "Autos & Vehicles",
                  "bid": 61,
                  "informedBid": 35
              }
          ]
      },
      "createdAt": "2020-11-25T23:28:02.755Z",
      "updatedAt": "2020-11-25T23:28:02.755Z"
  },
  {
      "_id": "5fbee85eec54006d58d84b70",
      "source": "simulated",
      "comment": "v3w6z",
      "profile": {
          "age": {
              "value": "45-54",
              "bid": 32,
              "informedBid": 59
          },
          "children": {
              "value": "teenagers",
              "bid": 32,
              "informedBid": 46
          },
          "education": {
              "value": "high school",
              "bid": 84,
              "informedBid": 51
          },
          "marital": {
              "value": "single",
              "bid": 41,
              "informedBid": 92
          },
          "gender": {
              "value": "female",
              "bid": 97,
              "informedBid": 85
          },
          "interests": [
              {
                  "value": "Finance",
                  "bid": 70,
                  "informedBid": 93
              },
              {
                  "value": "Autos & Vehicles",
                  "bid": 42,
                  "informedBid": 22
              },
              {
                  "value": "Sports",
                  "bid": 96,
                  "informedBid": 61
              },
              {
                  "value": "Pets & Animals",
                  "bid": 49,
                  "informedBid": 61
              }
          ]
      },
      "createdAt": "2020-11-25T23:27:27.652Z",
      "updatedAt": "2020-11-25T23:27:27.652Z"
  },
  {
      "_id": "5fbee7edec54006d58d75bba",
      "source": "simulated",
      "comment": "fgvaf",
      "profile": {
          "age": {
              "value": "25-34",
              "bid": 94,
              "informedBid": 18
          },
          "children": {
              "value": "adults",
              "bid": 3,
              "informedBid": 92
          },
          "education": {
              "value": "none",
              "bid": 37,
              "informedBid": 74
          },
          "marital": {
              "value": "married",
              "bid": 31,
              "informedBid": 10
          },
          "gender": {
              "value": "male",
              "bid": 73,
              "informedBid": 64
          },
          "interests": [
              {
                  "value": "Food & Drink",
                  "bid": 50,
                  "informedBid": 82
              },
              {
                  "value": "Travel & Transportation",
                  "bid": 24,
                  "informedBid": 56
              }
          ]
      },
      "createdAt": "2020-11-25T23:25:34.209Z",
      "updatedAt": "2020-11-25T23:25:34.209Z"
  },
  {
      "_id": "5fbee85bec54006d58d84357",
      "source": "simulated",
      "comment": "w5dyr",
      "profile": {
          "age": {
              "value": "55-64",
              "bid": 26,
              "informedBid": 75
          },
          "children": {
              "value": "toddlers",
              "bid": 57,
              "informedBid": 2
          },
          "education": {
              "value": "doctorate degree",
              "bid": 91,
              "informedBid": 46
          },
          "marital": {
              "value": "in a relationship",
              "bid": 41,
              "informedBid": 78
          },
          "gender": {
              "value": "male",
              "bid": 67,
              "informedBid": 27
          },
          "interests": [
              {
                  "value": "Internet & Telecom",
                  "bid": 93,
                  "informedBid": 26
              },
              {
                  "value": "Games",
                  "bid": 68,
                  "informedBid": 14
              },
              {
                  "value": "Jobs & Education",
                  "bid": 25,
                  "informedBid": 32
              }
          ]
      },
      "createdAt": "2020-11-25T23:27:23.951Z",
      "updatedAt": "2020-11-25T23:27:23.951Z"
  },
  {
      "_id": "5fbee893ec54006d58d8bd38",
      "source": "simulated",
      "comment": "r7waw",
      "profile": {
          "age": {
              "value": "65+",
              "bid": 64,
              "informedBid": 54
          },
          "children": {
              "value": "teenagers",
              "bid": 90,
              "informedBid": 14
          },
          "education": {
              "value": "high school",
              "bid": 91,
              "informedBid": 94
          },
          "marital": {
              "value": "in a relationship",
              "bid": 93,
              "informedBid": 37
          },
          "gender": {
              "value": "female",
              "bid": 97,
              "informedBid": 80
          },
          "interests": [
              {
                  "value": "Sports",
                  "bid": 14,
                  "informedBid": 2
              },
              {
                  "value": "Computers & Electronics",
                  "bid": 14,
                  "informedBid": 88
              }
          ]
      },
      "createdAt": "2020-11-25T23:28:20.841Z",
      "updatedAt": "2020-11-25T23:28:20.841Z"
  },
  {
      "_id": "5fbee883ec54006d58d89a17",
      "source": "simulated",
      "comment": "s092d",
      "profile": {
          "age": {
              "value": "25-34",
              "bid": 10,
              "informedBid": 89
          },
          "children": {
              "value": "none",
              "bid": 13,
              "informedBid": 82
          },
          "education": {
              "value": "college",
              "bid": 5,
              "informedBid": 91
          },
          "marital": {
              "value": "single",
              "bid": 39,
              "informedBid": 49
          },
          "gender": {
              "value": "female",
              "bid": 94,
              "informedBid": 37
          },
          "interests": [
              {
                  "value": "Internet & Telecom",
                  "bid": 32,
                  "informedBid": 47
              },
              {
                  "value": "Beauty & Fitness",
                  "bid": 6,
                  "informedBid": 65
              },
              {
                  "value": "Law & Government",
                  "bid": 29,
                  "informedBid": 7
              }
          ]
      },
      "createdAt": "2020-11-25T23:28:04.462Z",
      "updatedAt": "2020-11-25T23:28:04.462Z"
  },
  {
      "_id": "5fbee842ec54006d58d81062",
      "source": "simulated",
      "comment": "w2byv",
      "profile": {
          "age": {
              "value": "25-34",
              "bid": 46,
              "informedBid": 8
          },
          "children": {
              "value": "elementary school",
              "bid": 3,
              "informedBid": 49
          },
          "education": {
              "value": "college",
              "bid": 32,
              "informedBid": 15
          },
          "marital": {
              "value": "married",
              "bid": 45,
              "informedBid": 68
          },
          "gender": {
              "value": "male",
              "bid": 80,
              "informedBid": 43
          },
          "interests": [
              {
                  "value": "Sports",
                  "bid": 17,
                  "informedBid": 3
              },
              {
                  "value": "Beauty & Fitness",
                  "bid": 63,
                  "informedBid": 81
              },
              {
                  "value": "Books & Literature",
                  "bid": 25,
                  "informedBid": 36
              },
              {
                  "value": "Jobs & Education",
                  "bid": 71,
                  "informedBid": 5
              }
          ]
      },
      "createdAt": "2020-11-25T23:26:59.488Z",
      "updatedAt": "2020-11-25T23:26:59.488Z"
  },
  {
      "_id": "5fbee82aec54006d58d7ddf5",
      "source": "simulated",
      "comment": "lf0hm",
      "profile": {
          "age": {
              "value": "18-24",
              "bid": 48,
              "informedBid": 41
          },
          "children": {
              "value": "none",
              "bid": 56,
              "informedBid": 75
          },
          "education": {
              "value": "doctorate degree",
              "bid": 98,
              "informedBid": 14
          },
          "marital": {
              "value": "married",
              "bid": 5,
              "informedBid": 52
          },
          "gender": {
              "value": "female",
              "bid": 18,
              "informedBid": 14
          },
          "interests": [
              {
                  "value": "Finance",
                  "bid": 17,
                  "informedBid": 68
              },
              {
                  "value": "Autos & Vehicles",
                  "bid": 59,
                  "informedBid": 3
              },
              {
                  "value": "Food & Drink",
                  "bid": 61,
                  "informedBid": 53
              },
              {
                  "value": "Finance",
                  "bid": 87,
                  "informedBid": 47
              }
          ]
      },
      "createdAt": "2020-11-25T23:26:35.329Z",
      "updatedAt": "2020-11-25T23:26:35.329Z"
  },
  {
      "_id": "5fbee828ec54006d58d7daa0",
      "source": "simulated",
      "comment": "06lv4",
      "profile": {
          "age": {
              "value": "55-64",
              "bid": 29,
              "informedBid": 39
          },
          "children": {
              "value": "toddlers",
              "bid": 46,
              "informedBid": 70
          },
          "education": {
              "value": "high school",
              "bid": 46,
              "informedBid": 45
          },
          "marital": {
              "value": "single",
              "bid": 4,
              "informedBid": 50
          },
          "gender": {
              "value": "male",
              "bid": 11,
              "informedBid": 5
          },
          "interests": [
              {
                  "value": "Books & Literature",
                  "bid": 10,
                  "informedBid": 96
              },
              {
                  "value": "Business & Industrial",
                  "bid": 16,
                  "informedBid": 5
              },
              {
                  "value": "Arts & Entertainment",
                  "bid": 84,
                  "informedBid": 42
              },
              {
                  "value": "Hobbies & Leisure",
                  "bid": 43,
                  "informedBid": 40
              }
          ]
      },
      "createdAt": "2020-11-25T23:26:33.566Z",
      "updatedAt": "2020-11-25T23:26:33.566Z"
  },
  {
      "_id": "5fbee859ec54006d58d840d3",
      "source": "simulated",
      "comment": "g0fkv",
      "profile": {
          "age": {
              "value": "25-34",
              "bid": 37,
              "informedBid": 64
          },
          "children": {
              "value": "none",
              "bid": 84,
              "informedBid": 71
          },
          "education": {
              "value": "college",
              "bid": 60,
              "informedBid": 72
          },
          "marital": {
              "value": "single",
              "bid": 10,
              "informedBid": 52
          },
          "gender": {
              "value": "male",
              "bid": 54,
              "informedBid": 67
          },
          "interests": [
              {
                  "value": "Food & Drink",
                  "bid": 92,
                  "informedBid": 11
              },
              {
                  "value": "Autos & Vehicles",
                  "bid": 80,
                  "informedBid": 58
              },
              {
                  "value": "Real Estate",
                  "bid": 55,
                  "informedBid": 63
              },
              {
                  "value": "Law & Government",
                  "bid": 24,
                  "informedBid": 1
              },
              {
                  "value": "Home & Garden",
                  "bid": 3,
                  "informedBid": 18
              }
          ]
      },
      "createdAt": "2020-11-25T23:27:22.197Z",
      "updatedAt": "2020-11-25T23:27:22.197Z"
  },
  {
      "_id": "5fbee895ec54006d58d8c2ea",
      "source": "simulated",
      "comment": "teb0e",
      "profile": {
          "age": {
              "value": "55-64",
              "bid": 58,
              "informedBid": 59
          },
          "children": {
              "value": "teenagers",
              "bid": 53,
              "informedBid": 84
          },
          "education": {
              "value": "high school",
              "bid": 53,
              "informedBid": 54
          },
          "marital": {
              "value": "married",
              "bid": 22,
              "informedBid": 58
          },
          "gender": {
              "value": "female",
              "bid": 37,
              "informedBid": 49
          },
          "interests": [
              {
                  "value": "Real Estate",
                  "bid": 53,
                  "informedBid": 15
              },
              {
                  "value": "Autos & Vehicles",
                  "bid": 74,
                  "informedBid": 99
              },
              {
                  "value": "Books & Literature",
                  "bid": 72,
                  "informedBid": 69
              }
          ]
      },
      "createdAt": "2020-11-25T23:28:22.764Z",
      "updatedAt": "2020-11-25T23:28:22.764Z"
  },
  {
      "_id": "5fbee86fec54006d58d86e0f",
      "source": "simulated",
      "comment": "gedrf",
      "profile": {
          "age": {
              "value": "25-34",
              "bid": 92,
              "informedBid": 27
          },
          "children": {
              "value": "teenagers",
              "bid": 5,
              "informedBid": 53
          },
          "education": {
              "value": "high school",
              "bid": 89,
              "informedBid": 81
          },
          "marital": {
              "value": "in a relationship",
              "bid": 78,
              "informedBid": 4
          },
          "gender": {
              "value": "male",
              "bid": 39,
              "informedBid": 52
          },
          "interests": [
              {
                  "value": "Books & Literature",
                  "bid": 42,
                  "informedBid": 43
              },
              {
                  "value": "Arts & Entertainment",
                  "bid": 55,
                  "informedBid": 4
              }
          ]
      },
      "createdAt": "2020-11-25T23:27:44.220Z",
      "updatedAt": "2020-11-25T23:27:44.220Z"
  },
  {
      "_id": "5fbee826ec54006d58d7d4fb",
      "source": "simulated",
      "comment": "ag9ga",
      "profile": {
          "age": {
              "value": "45-54",
              "bid": 52,
              "informedBid": 76
          },
          "children": {
              "value": "elementary school",
              "bid": 26,
              "informedBid": 55
          },
          "education": {
              "value": "none",
              "bid": 53,
              "informedBid": 87
          },
          "marital": {
              "value": "married",
              "bid": 29,
              "informedBid": 75
          },
          "gender": {
              "value": "female",
              "bid": 92,
              "informedBid": 78
          },
          "interests": [
              {
                  "value": "World Localities",
                  "bid": 39,
                  "informedBid": 32
              },
              {
                  "value": "Hobbies & Leisure",
                  "bid": 73,
                  "informedBid": 20
              },
              {
                  "value": "Finance",
                  "bid": 23,
                  "informedBid": 85
              },
              {
                  "value": "News",
                  "bid": 74,
                  "informedBid": 71
              }
          ]
      },
      "createdAt": "2020-11-25T23:26:31.604Z",
      "updatedAt": "2020-11-25T23:26:31.604Z"
  },
  {
      "_id": "5fbee801ec54006d58d7882f",
      "source": "simulated",
      "comment": "ljib0",
      "profile": {
          "age": {
              "value": "18-24",
              "bid": 65,
              "informedBid": 91
          },
          "children": {
              "value": "none",
              "bid": 86,
              "informedBid": 33
          },
          "education": {
              "value": "high school",
              "bid": 97,
              "informedBid": 8
          },
          "marital": {
              "value": "married",
              "bid": 24,
              "informedBid": 11
          },
          "gender": {
              "value": "male",
              "bid": 68,
              "informedBid": 66
          },
          "interests": [
              {
                  "value": "Hobbies & Leisure",
                  "bid": 78,
                  "informedBid": 67
              },
              {
                  "value": "Home & Garden",
                  "bid": 36,
                  "informedBid": 4
              },
              {
                  "value": "People & Society",
                  "bid": 76,
                  "informedBid": 21
              },
              {
                  "value": "Sports",
                  "bid": 89,
                  "informedBid": 59
              },
              {
                  "value": "Shopping",
                  "bid": 28,
                  "informedBid": 40
              }
          ]
      },
      "createdAt": "2020-11-25T23:25:54.684Z",
      "updatedAt": "2020-11-25T23:25:54.684Z"
  },
  {
      "_id": "5fbee871ec54006d58d873a3",
      "source": "simulated",
      "comment": "nxydi",
      "profile": {
          "age": {
              "value": "25-34",
              "bid": 43,
              "informedBid": 5
          },
          "children": {
              "value": "none",
              "bid": 86,
              "informedBid": 34
          },
          "education": {
              "value": "high school",
              "bid": 13,
              "informedBid": 26
          },
          "marital": {
              "value": "married",
              "bid": 41,
              "informedBid": 2
          },
          "gender": {
              "value": "male",
              "bid": 78,
              "informedBid": 63
          },
          "interests": [
              {
                  "value": "Arts & Entertainment",
                  "bid": 54,
                  "informedBid": 73
              },
              {
                  "value": "Autos & Vehicles",
                  "bid": 66,
                  "informedBid": 63
              },
              {
                  "value": "Real Estate",
                  "bid": 23,
                  "informedBid": 17
              }
          ]
      },
      "createdAt": "2020-11-25T23:27:46.204Z",
      "updatedAt": "2020-11-25T23:27:46.204Z"
  },
  {
      "_id": "5fbee80eec54006d58d7a403",
      "source": "simulated",
      "comment": "dkmv7",
      "profile": {
          "age": {
              "value": "35-44",
              "bid": 56,
              "informedBid": 53
          },
          "children": {
              "value": "adults",
              "bid": 41,
              "informedBid": 69
          },
          "education": {
              "value": "college",
              "bid": 42,
              "informedBid": 14
          },
          "marital": {
              "value": "single",
              "bid": 23,
              "informedBid": 83
          },
          "gender": {
              "value": "female",
              "bid": 76,
              "informedBid": 48
          },
          "interests": [
              {
                  "value": "Games",
                  "bid": 54,
                  "informedBid": 97
              },
              {
                  "value": "Internet & Telecom",
                  "bid": 20,
                  "informedBid": 43
              },
              {
                  "value": "Online Communities",
                  "bid": 65,
                  "informedBid": 89
              }
          ]
      },
      "createdAt": "2020-11-25T23:26:07.674Z",
      "updatedAt": "2020-11-25T23:26:07.674Z"
  },
  {
      "_id": "5fbee833ec54006d58d7f1f2",
      "source": "simulated",
      "comment": "0e6vt",
      "profile": {
          "age": {
              "value": "18-24",
              "bid": 83,
              "informedBid": 70
          },
          "children": {
              "value": "adults",
              "bid": 82,
              "informedBid": 22
          },
          "education": {
              "value": "college",
              "bid": 45,
              "informedBid": 10
          },
          "marital": {
              "value": "single",
              "bid": 39,
              "informedBid": 46
          },
          "gender": {
              "value": "female",
              "bid": 57,
              "informedBid": 7
          },
          "interests": [
              {
                  "value": "People & Society",
                  "bid": 24,
                  "informedBid": 1
              },
              {
                  "value": "Law & Government",
                  "bid": 90,
                  "informedBid": 78
              },
              {
                  "value": "Autos & Vehicles",
                  "bid": 36,
                  "informedBid": 67
              }
          ]
      },
      "createdAt": "2020-11-25T23:26:44.846Z",
      "updatedAt": "2020-11-25T23:26:44.846Z"
  },
  {
      "_id": "5fbee839ec54006d58d7fc37",
      "source": "simulated",
      "comment": "02nyj",
      "profile": {
          "age": {
              "value": "55-64",
              "bid": 70,
              "informedBid": 36
          },
          "children": {
              "value": "elementary school",
              "bid": 8,
              "informedBid": 1
          },
          "education": {
              "value": "doctorate degree",
              "bid": 33,
              "informedBid": 68
          },
          "marital": {
              "value": "married",
              "bid": 69,
              "informedBid": 89
          },
          "gender": {
              "value": "female",
              "bid": 65,
              "informedBid": 55
          },
          "interests": [
              {
                  "value": "Online Communities",
                  "bid": 41,
                  "informedBid": 30
              },
              {
                  "value": "Arts & Entertainment",
                  "bid": 29,
                  "informedBid": 53
              },
              {
                  "value": "Law & Government",
                  "bid": 88,
                  "informedBid": 45
              }
          ]
      },
      "createdAt": "2020-11-25T23:26:50.080Z",
      "updatedAt": "2020-11-25T23:26:50.080Z"
  },
  {
      "_id": "5fbee862ec54006d58d853e1",
      "source": "simulated",
      "comment": "1gah6",
      "profile": {
          "age": {
              "value": "18-24",
              "bid": 84,
              "informedBid": 46
          },
          "children": {
              "value": "toddlers",
              "bid": 6,
              "informedBid": 55
          },
          "education": {
              "value": "high school",
              "bid": 2,
              "informedBid": 15
          },
          "marital": {
              "value": "in a relationship",
              "bid": 84,
              "informedBid": 54
          },
          "gender": {
              "value": "male",
              "bid": 38,
              "informedBid": 55
          },
          "interests": [
              {
                  "value": "World Localities",
                  "bid": 17,
                  "informedBid": 18
              },
              {
                  "value": "Shopping",
                  "bid": 57,
                  "informedBid": 35
              },
              {
                  "value": "Beauty & Fitness",
                  "bid": 4,
                  "informedBid": 5
              }
          ]
      },
      "createdAt": "2020-11-25T23:27:31.470Z",
      "updatedAt": "2020-11-25T23:27:31.470Z"
  },
  {
      "_id": "5fbee893ec54006d58d8bd9a",
      "source": "simulated",
      "comment": "yag9c",
      "profile": {
          "age": {
              "value": "25-34",
              "bid": 4,
              "informedBid": 13
          },
          "children": {
              "value": "elementary school",
              "bid": 82,
              "informedBid": 12
          },
          "education": {
              "value": "none",
              "bid": 1,
              "informedBid": 85
          },
          "marital": {
              "value": "single",
              "bid": 71,
              "informedBid": 35
          },
          "gender": {
              "value": "female",
              "bid": 59,
              "informedBid": 96
          },
          "interests": [
              {
                  "value": "Food & Drink",
                  "bid": 62,
                  "informedBid": 33
              },
              {
                  "value": "Books & Literature",
                  "bid": 21,
                  "informedBid": 54
              }
          ]
      },
      "createdAt": "2020-11-25T23:28:20.874Z",
      "updatedAt": "2020-11-25T23:28:20.874Z"
  },
  {
      "_id": "5fbee878ec54006d58d883f1",
      "source": "simulated",
      "comment": "fyjvh",
      "profile": {
          "age": {
              "value": "25-34",
              "bid": 18,
              "informedBid": 2
          },
          "children": {
              "value": "toddlers",
              "bid": 2,
              "informedBid": 67
          },
          "education": {
              "value": "none",
              "bid": 12,
              "informedBid": 23
          },
          "marital": {
              "value": "in a relationship",
              "bid": 88,
              "informedBid": 47
          },
          "gender": {
              "value": "male",
              "bid": 25,
              "informedBid": 4
          },
          "interests": [
              {
                  "value": "Hobbies & Leisure",
                  "bid": 65,
                  "informedBid": 28
              },
              {
                  "value": "Finance",
                  "bid": 90,
                  "informedBid": 94
              },
              {
                  "value": "World Localities",
                  "bid": 92,
                  "informedBid": 75
              },
              {
                  "value": "Business & Industrial",
                  "bid": 37,
                  "informedBid": 33
              }
          ]
      },
      "createdAt": "2020-11-25T23:27:53.680Z",
      "updatedAt": "2020-11-25T23:27:53.680Z"
  },
  {
      "_id": "5fbee7e2ec54006d58d74bf5",
      "source": "simulated",
      "comment": "vdrwc",
      "profile": {
          "age": {
              "value": "18-24",
              "bid": 97,
              "informedBid": 55
          },
          "children": {
              "value": "none",
              "bid": 59,
              "informedBid": 43
          },
          "education": {
              "value": "none",
              "bid": 76,
              "informedBid": 2
          },
          "marital": {
              "value": "in a relationship",
              "bid": 4,
              "informedBid": 88
          },
          "gender": {
              "value": "female",
              "bid": 91,
              "informedBid": 55
          },
          "interests": [
              {
                  "value": "Home & Garden",
                  "bid": 86,
                  "informedBid": 64
              },
              {
                  "value": "Finance",
                  "bid": 97,
                  "informedBid": 90
              },
              {
                  "value": "Sports",
                  "bid": 80,
                  "informedBid": 58
              }
          ]
      },
      "createdAt": "2020-11-25T23:25:23.555Z",
      "updatedAt": "2020-11-25T23:25:23.555Z"
  },
  {
      "_id": "5fbee85dec54006d58d84877",
      "source": "simulated",
      "comment": "arbsl",
      "profile": {
          "age": {
              "value": "18-24",
              "bid": 18,
              "informedBid": 57
          },
          "children": {
              "value": "adults",
              "bid": 20,
              "informedBid": 72
          },
          "education": {
              "value": "none",
              "bid": 68,
              "informedBid": 58
          },
          "marital": {
              "value": "married",
              "bid": 61,
              "informedBid": 39
          },
          "gender": {
              "value": "female",
              "bid": 53,
              "informedBid": 60
          },
          "interests": [
              {
                  "value": "Jobs & Education",
                  "bid": 86,
                  "informedBid": 23
              },
              {
                  "value": "Finance",
                  "bid": 23,
                  "informedBid": 38
              }
          ]
      },
      "createdAt": "2020-11-25T23:27:25.887Z",
      "updatedAt": "2020-11-25T23:27:25.887Z"
  },
  {
      "_id": "5fbee84aec54006d58d81fd3",
      "source": "simulated",
      "comment": "ea22l",
      "profile": {
          "age": {
              "value": "45-54",
              "bid": 41,
              "informedBid": 11
          },
          "children": {
              "value": "elementary school",
              "bid": 98,
              "informedBid": 98
          },
          "education": {
              "value": "high school",
              "bid": 28,
              "informedBid": 83
          },
          "marital": {
              "value": "married",
              "bid": 14,
              "informedBid": 46
          },
          "gender": {
              "value": "female",
              "bid": 28,
              "informedBid": 5
          },
          "interests": [
              {
                  "value": "Science",
                  "bid": 68,
                  "informedBid": 45
              },
              {
                  "value": "Home & Garden",
                  "bid": 15,
                  "informedBid": 94
              }
          ]
      },
      "createdAt": "2020-11-25T23:27:07.143Z",
      "updatedAt": "2020-11-25T23:27:07.143Z"
  },
  {
      "_id": "5fbee828ec54006d58d7db7c",
      "source": "simulated",
      "comment": "mh9it",
      "profile": {
          "age": {
              "value": "45-54",
              "bid": 68,
              "informedBid": 62
          },
          "children": {
              "value": "none",
              "bid": 56,
              "informedBid": 79
          },
          "education": {
              "value": "college",
              "bid": 4,
              "informedBid": 29
          },
          "marital": {
              "value": "in a relationship",
              "bid": 55,
              "informedBid": 38
          },
          "gender": {
              "value": "male",
              "bid": 94,
              "informedBid": 6
          },
          "interests": [
              {
                  "value": "Jobs & Education",
                  "bid": 3,
                  "informedBid": 70
              },
              {
                  "value": "Sports",
                  "bid": 36,
                  "informedBid": 32
              },
              {
                  "value": "Arts & Entertainment",
                  "bid": 76,
                  "informedBid": 97
              }
          ]
      },
      "createdAt": "2020-11-25T23:26:33.631Z",
      "updatedAt": "2020-11-25T23:26:33.631Z"
  },
  {
      "_id": "5fbee832ec54006d58d7ef18",
      "source": "simulated",
      "comment": "mt4m1",
      "profile": {
          "age": {
              "value": "45-54",
              "bid": 84,
              "informedBid": 40
          },
          "children": {
              "value": "toddlers",
              "bid": 18,
              "informedBid": 76
          },
          "education": {
              "value": "high school",
              "bid": 86,
              "informedBid": 46
          },
          "marital": {
              "value": "in a relationship",
              "bid": 41,
              "informedBid": 10
          },
          "gender": {
              "value": "male",
              "bid": 55,
              "informedBid": 59
          },
          "interests": [
              {
                  "value": "Reference ",
                  "bid": 99,
                  "informedBid": 85
              },
              {
                  "value": "Health",
                  "bid": 30,
                  "informedBid": 84
              }
          ]
      },
      "createdAt": "2020-11-25T23:26:43.000Z",
      "updatedAt": "2020-11-25T23:26:43.000Z"
  },
  {
      "_id": "5fbee821ec54006d58d7ca27",
      "source": "simulated",
      "comment": "eejx5",
      "profile": {
          "age": {
              "value": "18-24",
              "bid": 65,
              "informedBid": 54
          },
          "children": {
              "value": "none",
              "bid": 84,
              "informedBid": 7
          },
          "education": {
              "value": "doctorate degree",
              "bid": 22,
              "informedBid": 58
          },
          "marital": {
              "value": "single",
              "bid": 65,
              "informedBid": 2
          },
          "gender": {
              "value": "female",
              "bid": 14,
              "informedBid": 78
          },
          "interests": [
              {
                  "value": "Beauty & Fitness",
                  "bid": 67,
                  "informedBid": 93
              },
              {
                  "value": "Shopping",
                  "bid": 25,
                  "informedBid": 40
              },
              {
                  "value": "People & Society",
                  "bid": 88,
                  "informedBid": 46
              },
              {
                  "value": "Pets & Animals",
                  "bid": 48,
                  "informedBid": 28
              },
              {
                  "value": "Health",
                  "bid": 26,
                  "informedBid": 11
              }
          ]
      },
      "createdAt": "2020-11-25T23:26:26.181Z",
      "updatedAt": "2020-11-25T23:26:26.181Z"
  },
  {
      "_id": "5fbee809ec54006d58d799d5",
      "source": "simulated",
      "comment": "nazpt",
      "profile": {
          "age": {
              "value": "65+",
              "bid": 74,
              "informedBid": 20
          },
          "children": {
              "value": "teenagers",
              "bid": 25,
              "informedBid": 24
          },
          "education": {
              "value": "none",
              "bid": 96,
              "informedBid": 37
          },
          "marital": {
              "value": "in a relationship",
              "bid": 58,
              "informedBid": 37
          },
          "gender": {
              "value": "male",
              "bid": 34,
              "informedBid": 18
          },
          "interests": [
              {
                  "value": "Health",
                  "bid": 63,
                  "informedBid": 83
              },
              {
                  "value": "Finance",
                  "bid": 59,
                  "informedBid": 49
              },
              {
                  "value": "Online Communities",
                  "bid": 59,
                  "informedBid": 24
              }
          ]
      },
      "createdAt": "2020-11-25T23:26:02.266Z",
      "updatedAt": "2020-11-25T23:26:02.266Z"
  },
  {
      "_id": "5fbee814ec54006d58d7b002",
      "source": "simulated",
      "comment": "iyn3z",
      "profile": {
          "age": {
              "value": "65+",
              "bid": 70,
              "informedBid": 12
          },
          "children": {
              "value": "adults",
              "bid": 21,
              "informedBid": 31
          },
          "education": {
              "value": "college",
              "bid": 90,
              "informedBid": 70
          },
          "marital": {
              "value": "in a relationship",
              "bid": 95,
              "informedBid": 3
          },
          "gender": {
              "value": "female",
              "bid": 42,
              "informedBid": 17
          },
          "interests": [
              {
                  "value": "Food & Drink",
                  "bid": 12,
                  "informedBid": 12
              },
              {
                  "value": "Hobbies & Leisure",
                  "bid": 11,
                  "informedBid": 3
              },
              {
                  "value": "Sports",
                  "bid": 91,
                  "informedBid": 61
              }
          ]
      },
      "createdAt": "2020-11-25T23:26:13.166Z",
      "updatedAt": "2020-11-25T23:26:13.166Z"
  },
  {
      "_id": "5fbee859ec54006d58d840f9",
      "source": "simulated",
      "comment": "ixrfz",
      "profile": {
          "age": {
              "value": "25-34",
              "bid": 79,
              "informedBid": 70
          },
          "children": {
              "value": "teenagers",
              "bid": 24,
              "informedBid": 72
          },
          "education": {
              "value": "college",
              "bid": 6,
              "informedBid": 88
          },
          "marital": {
              "value": "single",
              "bid": 90,
              "informedBid": 92
          },
          "gender": {
              "value": "female",
              "bid": 79,
              "informedBid": 94
          },
          "interests": [
              {
                  "value": "Jobs & Education",
                  "bid": 95,
                  "informedBid": 36
              },
              {
                  "value": "Food & Drink",
                  "bid": 32,
                  "informedBid": 96
              },
              {
                  "value": "Travel & Transportation",
                  "bid": 34,
                  "informedBid": 57
              },
              {
                  "value": "Pets & Animals",
                  "bid": 25,
                  "informedBid": 70
              }
          ]
      },
      "createdAt": "2020-11-25T23:27:22.209Z",
      "updatedAt": "2020-11-25T23:27:22.209Z"
  },
  {
      "_id": "5fbee899ec54006d58d8c763",
      "source": "simulated",
      "comment": "26vc1",
      "profile": {
          "age": {
              "value": "55-64",
              "bid": 7,
              "informedBid": 4
          },
          "children": {
              "value": "elementary school",
              "bid": 96,
              "informedBid": 27
          },
          "education": {
              "value": "college",
              "bid": 63,
              "informedBid": 23
          },
          "marital": {
              "value": "married",
              "bid": 67,
              "informedBid": 25
          },
          "gender": {
              "value": "female",
              "bid": 46,
              "informedBid": 36
          },
          "interests": [
              {
                  "value": "Reference ",
                  "bid": 66,
                  "informedBid": 50
              },
              {
                  "value": "Arts & Entertainment",
                  "bid": 12,
                  "informedBid": 49
              }
          ]
      },
      "createdAt": "2020-11-25T23:28:26.122Z",
      "updatedAt": "2020-11-25T23:28:26.122Z"
  }
]

const App = () => (
  <div className="grid_2columns" style={{ gridTemplateColumns: "45% 55%", height: "95vh" }}>
    <UserTable users={users} />
    <User user={user} />
  </div>
)

export default App;
