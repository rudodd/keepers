const teams = [
  {
    name: 'Chris',
    players: [
      {
        name: "Justin Fields",
        round: null,
        position: "QB"
      },
      {
        name: "Justin Jefferson",
        round: "1",
        position: "WR"
      },
      {
        name: "Amon-Ra St. Brown",
        round: "7",
        position: "WR"
      },
      {
        name: "Jahan Dotson",
        round: "14",
        position: "WR"
      },
      {
        name: "Saquon Barkley",
        round: "3",
        position: "RB"
      },
      {
        name: "Kenneth Walker III",
        round: "12",
        position: "RB"
      },
      {
        name: "Taysom Hill",
        round: null,
        position: "TE"
      },
      {
        name: "Isiah Pacheco",
        round: null,
        position: "RB"
      },
      {
        name: "Darren Waller",
        round: "10",
        position: "TE"
      },
      {
        name: "Travis Etienne Jr.",
        round: "6",
        position: "RB"
      },
      {
        name: "Rachaad White",
        round: "13",
        position: "RB"
      },
      {
        name: "Antonio Gibson",
        round: "12",
        position: "RB"
      },
      {
        name: "Deon Jackson",
        round: null,
        position: "RB"
      },
      {
        name: "Kirk Cousins",
        round: null,
        position: "QB"
      },
      {
        name: "Dawson Knox",
        round: null,
        position: "TE"
      },
      {
        name: "Brandin Cooks",
        round: "4",
        position: "WR"
      },
      {
        name: "Tampa Bay",
        round: "18",
        position: "DEF"
      },
      {
        name: "Cleveland",
        round: null,
        position: "DEF"
      },
      {
        name: "Cooper Kupp",
        round: "5",
        position: "WR"
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
        name: "A.J. Brown",
        round: "3",
        position: "WR"
      },
      {
        name: "JuJu Smith-Schuster",
        round: "4",
        position: "WR"
      },
      {
        name: "Christian Watson",
        round: null,
        position: "WR"
      },
      {
        name: "Dalvin Cook",
        round: "1",
        position: "RB"
      },
      {
        name: "Aaron Jones",
        round: "2",
        position: "RB"
      },
      {
        name: "George Kittle",
        round: "8",
        position: "TE"
      },
      {
        name: "Zay Jones",
        round: "18",
        position: "WR"
      },
      {
        name: "Jamaal Williams",
        round: null,
        position: "RB"
      },
      {
        name: "George Pickens",
        round: "12",
        position: "WR"
      },
      {
        name: "Dameon Pierce",
        round: "10",
        position: "RB"
      },
      {
        name: "Michael Pittman Jr.",
        round: "11",
        position: "WR"
      },
      {
        name: "Alexander Mattison",
        round: null,
        position: "RB"
      },
      {
        name: "Ray-Ray McCloud III",
        round: null,
        position: "WR"
      },
      {
        name: "Samaje Perine",
        round: null,
        position: "RB"
      },
      {
        name: "Jameson Williams",
        round: null,
        position: "WR"
      },
      {
        name: "Las Vegas",
        round: null,
        position: "DEF"
      }
    ]
  },
  {
    name: 'Calvin',
    players: [
      {
        name: "Justin Herbert",
        round: "7",
        position: "QB"
      },
      {
        name: "CeeDee Lamb",
        round: "2",
        position: "WR"
      },
      {
        name: "Chris Godwin",
        round: "5",
        position: "WR"
      },
      {
        name: "Christian Kirk",
        round: "10",
        position: "WR"
      },
      {
        name: "Austin Ekeler",
        round: "1",
        position: "RB"
      },
      {
        name: "James Conner",
        round: "3",
        position: "RB"
      },
      {
        name: "Evan Engram",
        round: null,
        position: "TE"
      },
      {
        name: "Jerick McKinnon",
        round: "18",
        position: "RB"
      },
      {
        name: "David Njoku",
        round: null,
        position: "TE"
      },
      {
        name: "Rhamondre Stevenson",
        round: "11",
        position: "RB"
      },
      {
        name: "Isaiah McKenzie",
        round: null,
        position: "WR"
      },
      {
        name: "Tyler Higbee",
        round: null,
        position: "TE"
      },
      {
        name: "Courtland Sutton",
        round: "9",
        position: "WR"
      },
      {
        name: "Melvin Gordon",
        round: "16",
        position: "RB"
      },
      {
        name: "Aaron Rodgers",
        round: "17",
        position: "QB"
      },
      {
        name: "Drake London",
        round: "8",
        position: "WR"
      },
      {
        name: "Kenyan Drake",
        round: null,
        position: "RB"
      },
      {
        name: "Dallas",
        round: "16",
        position: "DEF"
      },
      {
        name: "Romeo Doubs",
        round: "14",
        position: "WR"
      }
    ]
  },
  {
    name: 'Jace',
    players: [
      {
        name: "Joe Burrow",
        round: "11",
        position: "QB"
      },
      {
        name: "Keenan Allen",
        round: "3",
        position: "WR"
      },
      {
        name: "Terry McLaurin",
        round: "5",
        position: "WR"
      },
      {
        name: "Garrett Wilson",
        round: "13",
        position: "WR"
      },
      {
        name: "Christian McCaffrey",
        round: "1",
        position: "RB"
      },
      {
        name: "D'Andre Swift",
        round: "4",
        position: "RB"
      },
      {
        name: "Travis Kelce",
        round: "2",
        position: "TE"
      },
      {
        name: "DJ Moore",
        round: "4",
        position: "WR"
      },
      {
        name: "Amari Cooper",
        round: "7",
        position: "WR"
      },
      {
        name: "Latavius Murray",
        round: null,
        position: "RB"
      },
      {
        name: "DeAndre Carter",
        round: null,
        position: "WR"
      },
      {
        name: "Tyler Boyd",
        round: "16",
        position: "WR"
      },
      {
        name: "Kareem Hunt",
        round: "9",
        position: "BRB"
      },
      {
        name: "Michael Gallup",
        round: "14",
        position: "WR"
      },
      {
        name: "Adam Thielen",
        round: "8",
        position: "WR"
      },
      {
        name: "Mack Hollins",
        round: null,
        position: "WR"
      },
      {
        name: "Baltimore",
        round: null,
        position: "DEF"
      },
      {
        name: "Tennessee",
        round: null,
        position: "DEF"
      }
    ]
  },
  {
    name: 'Cody',
    players: [
      {
        name: "Geno Smith",
        round: null,
        position: "QB"
      },
      {
        name: "Ja'Marr Chase",
        round: "9",
        position: "WR"
      },
      {
        name: "Tyreek Hill",
        round: "3",
        position: "WR"
      },
      {
        name: "Diontae Johnson",
        round: "5",
        position: "WR"
      },
      {
        name: "Nick Chubb",
        round: "2",
        position: "RB"
      },
      {
        name: "Miles Sanders",
        round: null,
        position: "RB"
      },
      {
        name: "Dallas Goedert",
        round: "11",
        position: "TE"
      },
      {
        name: "Najee Harris",
        round: "1",
        position: "RB"
      },
      {
        name: "Chigoziem Okonkwo",
        round: null,
        position: "TE"
      },
      {
        name: "Tyler Lockett",
        round: "10",
        position: "WR"
      },
      {
        name: "Lamar Jackson",
        round: "8",
        position: "QB"
      },
      {
        name: "Treylon Burks",
        round: "12",
        position: "WR"
      },
      {
        name: "Deebo Samuel",
        round: "10",
        position: "WR"
      },
      {
        name: "Gabe Davis",
        round: "7",
        position: "WR"
      },
      {
        name: "Rondale Moore",
        round: "14",
        position: "WR"
      },
      {
        name: "Brian Robinson",
        round: "12",
        position: "RB"
      },
      {
        name: "Leonard Fournette",
        round: "6",
        position: "RB"
      },
      {
        name: "Philadelphia",
        round: null,
        position: "DEF"
      },
    ]
  },
  {
    name: 'Hunter',
    players: [
      {
        name: "Daniel Jones",
        round: null,
        position: "QB"
      },
      {
        name: "Davante Adams",
        round: "2",
        position: "WR"
      },
      {
        name: "Mike Evans",
        round: "3",
        position: "WR"
      },
      {
        name: "Darius Slayton",
        round: null,
        position: "WR"
      },
      {
        name: "Derrick Henry",
        round: "1",
        position: "RB"
      },
      {
        name: "J.K. Dobbins",
        round: "9",
        position: "RB"
      },
      {
        name: "Mark Andrews",
        round: "7",
        position: "TE"
      },
      {
        name: "AJ Dillon",
        round: "9",
        position: "RB"
      },
      {
        name: "David Montgomery",
        round: "6",
        position: "RB"
      },
      {
        name: "Jalen Hurts",
        round: "11",
        position: "QB"
      },
      {
        name: "Zonovan Knight",
        round: null,
        position: "RB"
      },
      {
        name: "Brandon Aiyuk",
        round: "8",
        position: "WR"
      },
      {
        name: "James Cook",
        round: "13",
        position: "RB"
      },
      {
        name: "Pat Freiermuth",
        round: null,
        position: "TE"
      },
      {
        name: "Odell Beckham Jr.",
        round: null,
        position: "WR"
      },
      {
        name: "Terrace Marshall Jr.",
        round: null,
        position: "WR"
      },
      {
        name: "Trevor Lawrence",
        round: null,
        position: "QB"
      },
      {
        name: "San Francisco",
        round: "18",
        position: "DEF"
      },
      {
        name: "Chris Olave",
        round: "12",
        position: "WR"
      },
      {
        name: "Khalil Herbert",
        round: null,
        position: "RB"
      },
      {
        name: "Breece Hall",
        round: "5",
        position: "RB"
      }
    ]
  },
  {
    name: 'Rustin',
    players: [
      {
        name: "Tom Brady",
        round: "14",
        position: "QB"
      },
      {
        name: "DeAndre Hopkins",
        round: "11",
        position: "WR"
      },
      {
        name: "DK Metcalf",
        round: "6",
        position: "WR"
      },
      {
        name: "Joshua Palmer",
        round: null,
        position: "WR"
      },
      {
        name: "Devin Singletary",
        round: "13",
        position: "RB"
      },
      {
        name: "Raheem Mostert",
        round: null,
        position: "RB"
      },
      {
        name: "Dalton Schultz",
        round: "8",
        position: "TE"
      },
      {
        name: "DeVonta Smith",
        round: "10",
        position: "WR"
      },
      {
        name: "Mike Williams",
        round: "4",
        position: "WR"
      },
      {
        name: "Alvin Kamara",
        round: "1",
        position: "RB"
      },
      {
        name: "Joe Mixon",
        round: "2",
        position: "RB"
      },
      {
        name: "Josh Jacobs",
        round: "9",
        position: "RB"
      },
      {
        name: "Josh Allen",
        round: "3",
        position: "QB"
      },
      {
        name: "Tee Higgins",
        round: "4",
        position: "WR"
      },
      {
        name: "Jakobi Meyers",
        round: "13",
        position: "WR"
      },
      {
        name: "Gerald Everett",
        round: null,
        position: "TE"
      },
      {
        name: "Parris Campbell",
        round: null,
        position: "WR"
      },
      {
        name: "Buffalo",
        round: "16",
        position: "DEF"
      }
    ]
  },
  {
    name: 'Roger',
    players: [
      {
        name: "Tua Tagovailoa",
        round: null,
        position: "QB"
      },
      {
        name: "Stefon Diggs",
        round: "2",
        position: "WR"
      },
      {
        name: "Jaylen Waddle",
        round: "4",
        position: "WR"
      },
      {
        name: "Jerry Jeudy",
        round: "7",
        position: "WR"
      },
      {
        name: "Tony Pollard",
        round: "17",
        position: "RB"
      },
      {
        name: "Ezekiel Elliott",
        round: "5",
        position: "RB"
      },
      {
        name: "T.J. Hockenson",
        round: "18",
        position: "TE"
      },
      {
        name: "Marquise Goodwin",
        round: null,
        position: "WR"
      },
      {
        name: "Dak Prescott",
        round: "16",
        position: "QB"
      },
      {
        name: "Marquise Brown",
        round: "7",
        position: "WR"
      },
      {
        name: "DJ Chark",
        round: null,
        position: "WR"
      },
      {
        name: "D'Onta Foreman",
        round: null,
        position: "RB"
      },
      {
        name: "Calvin Ridley",
        round: null,
        position: "WR"
      },
      {
        name: "Zamir White",
        round: null,
        position: "RB"
      },
      {
        name: "Jeff Wilson Jr.",
        round: null,
        position: "RB"
      },
      {
        name: "Zack Moss",
        round: null,
        position: "RB"
      },
      {
        name: "Denver",
        round: null,
        position: "DEF"
      },
      {
        name: "Jonathan Taylor",
        round: "1",
        position: "RB"
      }
    ]
  }
]

export default teams;