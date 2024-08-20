const teams = [
  {
    name: 'Chris',
    players: [
      {
        name: "Amon-Ra St. Brown",
        round: "7",
        position: "WR"
      },
      {
        name: "Stefon Diggs",
        round: "1",
        position: "WR"
      },
      {
        name: "A.J. Brown",
        round: "2",
        position: "WR"
      },
      {
        name: "Lamar Jackson",
        round: "6",
        position: "QB"
      },
      {
        name: "Zack Moss",
        round: null,
        position: "RB"
      },
      {
        name: "Keaton Mitchell",
        round: null,
        position: "RB"
      },
      {
        name: "Saquon Barkley",
        round: "2",
        position: "RB"
      },
      {
        name: "Dalton Kincaid",
        round: 15,
        position: "TE"
      },
      {
        name: "Zay Flowers",
        round: "11",
        position: "WR"
      },
      {
        name: "Diontae Johnson",
        round: "8",
        position: "WR"
      },
      {
        name: "Javonte Williams",
        round: "10",
        position: "RB"
      },
      {
        name: "Tyjae Spears",
        round: "16",
        position: "RB"
      },
      {
        name: "Roschon Johnson",
        round: "15",
        position: "RB"
      },
      {
        name: "Jaleel McLaughlin",
        round: null,
        position: "RB"
      },
      {
        name: "Aaron Jones",
        round: 5,
        position: "RB"
      },
      {
        name: "Justin Fields",
        round: "13",
        position: "QB"
      },
      {
        name: "Christian Watson",
        round: "4",
        position: "WR"
      },
      {
        name: "New Orleans",
        round: null,
        position: "DEF"
      },
      {
        name: "Darren Waller",
        round: "6",
        position: "TE"
      }
    ]
  },
  {
    name: 'Taylor',
    players: [
      {
        name: "Patrick Mahomes",
        round: "7",
        position: "QB"
      },
      {
        name: "Calvin Ridley",
        round: "3",
        position: "WR"
      },
      {
        name: "Elijah Moore",
        round: "12",
        position: "WR"
      },
      {
        name: "Josh Downs",
        round: null,
        position: "WR"
      },
      {
        name: "Alvin Kamara",
        round: "10",
        position: "RB"
      },
      {
        name: "James Cook",
        round: "6",
        position: "RB"
      },
      {
        name: "Sam LaPorta",
        round: "17",
        position: "TE"
      },
      {
        name: "Joe Mixon",
        round: "4",
        position: "RB"
      },
      {
        name: "Curtis Samuel",
        round: null,
        position: "WR"
      },
      {
        name: "Jayden Reed",
        round: null,
        position: "WR"
      },
      {
        name: "K.J. Osborn",
        round: null,
        position: "WR"
      },
      {
        name: "Zach Charbonnet",
        round: "10",
        position: "RB"
      },
      {
        name: "Kareem Hunt",
        round: null,
        position: "RB"
      },
      {
        name: "Atlanta",
        round: null,
        position: "DEF"
      }
    ]
  },
  {
    name: 'Calvin',
    players: [
      {
        name: "Brock Purdy",
        round: null,
        position: "QB"
      },
      {
        name: "Davante Adams",
        round: "2",
        position: "WR"
      },
      {
        name: "Chris Olave",
        round: "3",
        position: "WR"
      },
      {
        name: "Drake London",
        round: "5",
        position: "WR"
      },
      {
        name: "Rachaad White",
        round: "7",
        position: "RB"
      },
      {
        name: "David Montgomery",
        round: "10",
        position: "RB"
      },
      {
        name: "Travis Kelce",
        round: "1",
        position: "TE"
      },
      {
        name: "Ezekiel Elliott",
        round: "18",
        position: "RB"
      },
      {
        name: "Hollywood Brown",
        round: "9",
        position: "WR"
      },
      {
        name: "Romeo Doubs",
        round: "17",
        position: "WR"
      },
      {
        name: "David Njoku",
        round: null,
        position: "TE"
      },
      {
        name: "Dameon Pierce",
        round: "8",
        position: "RB"
      },
      {
        name: "Tee Higgins",
        round: "4",
        position: "WR"
      },
      {
        name: "Pittsburgh",
        round: "16",
        position: "DEF"
      },
      {
        name: "Nico Collins",
        round: "14",
        position: "WR"
      },
      {
        name: "Rhamondre Stevenson",
        round: "11",
        position: "RB"
      },
      {
        name: "Alexander Mattison",
        round: "6",
        position: "RB"
      }
    ]
  },
  {
    name: 'Jace',
    players: [
      {
        name: "Tua Tagovailoa",
        round: null,
        position: "QB"
      },
      {
        name: "CeeDee Lamb",
        round: "2",
        position: "WR"
      },
      {
        name: "Jaylen Waddle",
        round: "2",
        position: "WR"
      },
      {
        name: "Garrett Wilson",
        round: "13",
        position: "WR"
      },
      {
        name: "Jahmyr Gibbs",
        round: "3",
        position: "RB"
      },
      {
        name: "Bijan Robinson",
        round: "1",
        position: "RB"
      },
      {
        name: "T.J. Hockenson",
        round: "7",
        position: "TE"
      },
      {
        name: "Terry McLaurin",
        round: "6",
        position: "WR"
      },
      {
        name: "Jaxon Smith-Njigba",
        round: "10",
        position: "WR"
      },
      {
        name: "Adam Thielen",
        round: null,
        position: "WR"
      },
      {
        name: "De'Von Achane",
        round: "15",
        position: "RB"
      },
      {
        name: "George Kittle",
        round: "5",
        position: "TE"
      },
      {
        name: "Najee Harris",
        round: "4",
        position: "RB"
      },
      {
        name: "Gus Edwards",
        round: "18",
        position: "WR"
      },
      {
        name: "Geno Smith",
        round: null,
        position: "QB"
      },
      {
        name: "Jameson Williams",
        round: "17",
        position: "WR"
      },
      {
        name: "Chuba Hubbard",
        round: null,
        position: "RB"
      },
      {
        name: "Dallas",
        round: "16",
        position: "DEF"
      }
    ]
  },
  {
    name: 'Cody',
    players: [
      {
        name: "Travis Etienne Jr.",
        round: "5",
        position: "RB"
      },
      {
        name: "Jake Ferguson",
        round: null,
        position: "TE"
      },
      {
        name: "Derrick Henry",
        round: "2",
        position: "RB"
      },
      {
        name: "D'Andre Swift",
        round: "10",
        position: "RB"
      },
      {
        name: "Tyler Lockett",
        round: "8",
        position: "WR"
      },
      {
        name: "Deebo Samuel Sr.",
        round: "4",
        position: "WR"
      },
      {
        name: "Ja'Marr Chase",
        round: "1",
        position: "WR"
      },
      {
        name: "Matthew Stafford",
        round: null,
        position: "QB"
      },
      {
        name: "Tyreek Hill",
        round: "3",
        position: "WR"
      },
      {
        name: "Jared Goff",
        round: null,
        position: "WB"
      },
      {
        name: "Trevor Lawrence",
        round: "14",
        position: "QB"
      },
      {
        name: "Courtland Sutton",
        round: "12",
        position: "WR"
      },
      {
        name: "D'Onta Foreman",
        round: null,
        position: "RB"
      },
      {
        name: "George Pickens",
        round: "9",
        position: "WR"
      },
      {
        name: "Jordan Addison",
        round: "11",
        position: "WR"
      },
      {
        name: "Dallas Goedert",
        round: "7",
        position: "TE"
      },
      {
        name: "New York",
        round: null,
        position: "DEF"
      },
      {
        name: "San Francisco",
        round: "18",
        position: "DEF"
      },
    ]
  },
  {
    name: 'Hunter',
    players: [
      {
        name: "Jalen Hurts",
        round: "11",
        position: "QB"
      },
      {
        name: "Amari Cooper",
        round: "5",
        position: "WR"
      },
      {
        name: "Brandon Aiyuk",
        round: "9",
        position: "WR"
      },
      {
        name: "Chris Godwin",
        round: "4",
        position: "WR"
      },
      {
        name: "Kyren Williams",
        round: null,
        position: "RB"
      },
      {
        name: "Ty Chandler",
        round: null,
        position: "RB"
      },
      {
        name: "Trey McBride",
        round: null,
        position: "TE"
      },
      {
        name: "Christian McCaffrey",
        round: "1",
        position: "RB"
      },
      {
        name: "James Conner",
        round: "6",
        position: "RB"
      },
      {
        name: "Devin Singletary",
        round: null,
        position: "RB"
      },
      {
        name: "Jakobi Meyers",
        round: "17",
        position: "WR"
      },
      {
        name: "Evan Engram",
        round: "16",
        position: "TE"
      },
      {
        name: "Kyler Murray",
        round: null,
        position: "QB"
      },
      {
        name: "Noah Brown",
        round: null,
        position: "WR"
      },
      {
        name: "Buffalo",
        round: "16",
        position: "DEF"
      },
      {
        name: "New York",
        round: null,
        position: "DEF"
      },
      {
        name: "Josh Jacobs",
        round: "2",
        position: "BB"
      },
      {
        name: "Michael Pittman Jr.",
        round: "13",
        position: "WR"
      },
      {
        name: "Keenan Allen",
        round: "3",
        position: "WR"
      }
    ]
  },
  {
    name: 'Rustin',
    players: [
      {
        name: "Josh Allen",
        round: "3",
        position: "QB"
      },
      {
        name: "DeAndre Hopkins",
        round: "5",
        position: "WR"
      },
      {
        name: "DK Metcalf",
        round: "4",
        position: "WR"
      },
      {
        name: "Puka Nacua",
        round: null,
        position: "WR"
      },
      {
        name: "Jonathan Taylor",
        round: "3",
        position: "RB"
      },
      {
        name: "Kenneth Walker III",
        round: "7",
        position: "RB"
      },
      {
        name: "Dalton Schultz",
        round: null,
        position: "TE"
      },
      {
        name: "DeVonta Smith",
        round: "10",
        position: "WR"
      },
      {
        name: "Antonio Gibson",
        round: "13",
        position: "WR"
      },
      {
        name: "Austin Ekeler",
        round: "1",
        position: "RB"
      },
      {
        name: "Logan Thomas",
        round: null,
        position: "TE"
      },
      {
        name: "Brandin Cooks",
        round: "8",
        position: "WR"
      },
      {
        name: "C.J. Stroud",
        round: null,
        position: "QB"
      },
      {
        name: "Odell Beckham Jr.",
        round: "14",
        position: "WR"
      },
      {
        name: "Gerald Everett",
        round: null,
        position: "TE"
      },
      {
        name: "Gerald Everett",
        round: null,
        position: "TE"
      },
      {
        name: "Leonard Fournette",
        round: null,
        position: "RB"
      },
      {
        name: "AJ Dillon",
        round: "13",
        position: "RB"
      },
      {
        name: "Philadelphia",
        round: "15",
        position: "DEF"
      },
      {
        name: "Christian Kirk",
        round: "11",
        position: "WR"
      }
    ]
  },
  {
    name: 'Roger',
    players: [
      {
        name: "Dak Prescott",
        round: "12",
        position: "QB"
      },
      {
        name: "Justin Jefferson",
        round: "1",
        position: "WR"
      },
      {
        name: "Cooper Kupp",
        round: "1",
        position: "WR"
      },
      {
        name: "Mike Evans",
        round: "9",
        position: "WR"
      },
      {
        name: "Raheem Mostert",
        round: "14",
        position: "RB"
      },
      {
        name: "Isiah Pacheco",
        round: "12",
        position: "RB"
      },
      {
        name: "Isaiah Likely",
        round: null,
        position: "TE"
      },
      {
        name: "DJ Moore",
        round: "4",
        position: "WR"
      },
      {
        name: "Jerome Ford",
        round: null,
        position: "BB"
      },
      {
        name: "Breece Hall",
        round: "5",
        position: "RB"
      },
      {
        name: "Rashee Rice",
        round: "16",
        position: "WR"
      },
      {
        name: "Tony Pollard",
        round: "11",
        position: "RB"
      },
      {
        name: "Joshua Palmer",
        round: null,
        position: "WR"
      },
      {
        name: "Denver",
        round: null,
        position: "DEF"
      },
      {
        name: "Kansas City",
        round: null,
        position: "DEF"
      },
      {
        name: "Cleveland",
        round: null,
        position: "DEF"
      },
      {
        name: "Jerick McKinnon",
        round: "14",
        position: "RB"
      },
      {
        name: "Tank Dell",
        round: null,
        position: "WR"
      }
    ]
  }
]

export default teams;