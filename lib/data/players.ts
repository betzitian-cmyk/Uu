export interface Player {
  id: number;
  name: string;
  number: string;
  position: string;
  positionGroup: "offense" | "defense" | "special";
  height: string;
  weight: string;
  age: number;
  college: string;
  experience: string;
  image: string;
  stats: Record<string, string>;
  bio: string;
}

export const players: Player[] = [
  {
    id: 1,
    name: "Marcus Johnson",
    number: "12",
    position: "Quarterback",
    positionGroup: "offense",
    height: "6'4\"",
    weight: "225 lbs",
    age: 28,
    college: "University of Texas",
    experience: "6 Years",
    image: "/images/players/player-1.jpg",
    stats: {
      "Passing Yards": "3,842",
      "Touchdowns": "32",
      "Passer Rating": "108.4",
      "Completion %": "67.2%",
    },
    bio: "Marcus Johnson is the heart and soul of the Thunder Hawks offense. A proven leader with a cannon arm, he's led the team to three consecutive playoff appearances.",
  },
  {
    id: 2,
    name: "DeAndre Williams",
    number: "84",
    position: "Wide Receiver",
    positionGroup: "offense",
    height: "6'2\"",
    weight: "205 lbs",
    age: 25,
    college: "Alabama",
    experience: "3 Years",
    image: "/images/players/player-2.jpg",
    stats: {
      "Receiving Yards": "1,456",
      "Touchdowns": "14",
      "Receptions": "98",
      "Yards/Reception": "14.9",
    },
    bio: "DeAndre Williams is one of the most explosive receivers in the league. His speed and route-running ability make him a constant deep threat.",
  },
  {
    id: 3,
    name: "Tyrone Jackson",
    number: "28",
    position: "Running Back",
    positionGroup: "offense",
    height: "5'11\"",
    weight: "215 lbs",
    age: 26,
    college: "Ohio State",
    experience: "4 Years",
    image: "/images/players/player-3.jpg",
    stats: {
      "Rushing Yards": "1,287",
      "Touchdowns": "12",
      "Yards/Carry": "5.2",
      "Receptions": "42",
    },
    bio: "Tyrone Jackson combines power and agility in a way few backs can match. He's equally dangerous running between the tackles or catching passes out of the backfield.",
  },
  {
    id: 4,
    name: "Mike Thompson",
    number: "55",
    position: "Linebacker",
    positionGroup: "defense",
    height: "6'3\"",
    weight: "245 lbs",
    age: 29,
    college: "Penn State",
    experience: "7 Years",
    image: "/images/players/player-4.jpg",
    stats: {
      "Total Tackles": "124",
      "Sacks": "8.5",
      "Interceptions": "3",
      "Forced Fumbles": "4",
    },
    bio: "The defensive captain and emotional leader. Mike Thompson's football IQ and physical prowess make him the cornerstone of our defense.",
  },
  {
    id: 5,
    name: "James Carter",
    number: "88",
    position: "Tight End",
    positionGroup: "offense",
    height: "6'5\"",
    weight: "255 lbs",
    age: 27,
    college: "Stanford",
    experience: "5 Years",
    image: "/images/players/player-5.jpg",
    stats: {
      "Receiving Yards": "892",
      "Touchdowns": "9",
      "Receptions": "68",
      "Yards/Reception": "13.1",
    },
    bio: "A matchup nightmare for defenses, James Carter excels as both a blocker and receiver. His size and athleticism create problems for any coverage scheme.",
  },
  {
    id: 6,
    name: "Chris Davis",
    number: "24",
    position: "Cornerback",
    positionGroup: "defense",
    height: "6'0\"",
    weight: "190 lbs",
    age: 24,
    college: "LSU",
    experience: "2 Years",
    image: "/images/players/player-6.jpg",
    stats: {
      "Interceptions": "6",
      "Pass Deflections": "18",
      "Tackles": "54",
      "Forced Fumbles": "2",
    },
    bio: "Rising star Chris Davis has quickly become one of the league's premier shutdown corners. His ball-hawking skills have transformed our secondary.",
  },
  {
    id: 7,
    name: "Robert Brown",
    number: "72",
    position: "Offensive Tackle",
    positionGroup: "offense",
    height: "6'7\"",
    weight: "315 lbs",
    age: 30,
    college: "Notre Dame",
    experience: "8 Years",
    image: "/images/players/player-1.jpg",
    stats: {
      "Games Started": "128",
      "Sacks Allowed": "2",
      "Penalties": "4",
      "Pro Bowls": "4",
    },
    bio: "The anchor of our offensive line. Robert Brown's consistency and technique have made him a perennial Pro Bowler and team MVP candidate.",
  },
  {
    id: 8,
    name: "Anthony Miller",
    number: "97",
    position: "Defensive End",
    positionGroup: "defense",
    height: "6'4\"",
    weight: "275 lbs",
    age: 26,
    college: "Clemson",
    experience: "4 Years",
    image: "/images/players/player-4.jpg",
    stats: {
      "Sacks": "12.5",
      "Tackles": "58",
      "Forced Fumbles": "3",
      "QB Hits": "28",
    },
    bio: "A relentless pass rusher with an explosive first step. Anthony Miller leads our defensive line in quarterback pressures and sacks.",
  },
  {
    id: 9,
    name: "Kevin Wilson",
    number: "5",
    position: "Kicker",
    positionGroup: "special",
    height: "5'10\"",
    weight: "185 lbs",
    age: 32,
    college: "Georgia",
    experience: "10 Years",
    image: "/images/players/player-2.jpg",
    stats: {
      "Field Goal %": "94.2%",
      "Long": "58 yds",
      "Points": "142",
      "XP %": "100%",
    },
    bio: "The most reliable kicker in franchise history. Kevin Wilson's clutch performances in pressure situations have won countless games for the Thunder Hawks.",
  },
  {
    id: 10,
    name: "David Lee",
    number: "31",
    position: "Safety",
    positionGroup: "defense",
    height: "6'1\"",
    weight: "205 lbs",
    age: 27,
    college: "Michigan",
    experience: "5 Years",
    image: "/images/players/player-6.jpg",
    stats: {
      "Interceptions": "4",
      "Tackles": "89",
      "Pass Deflections": "12",
      "Forced Fumbles": "2",
    },
    bio: "A versatile safety who can play in the box or deep coverage. David Lee's range and instincts make him invaluable to our defensive scheme.",
  },
];

export function getPlayerById(id: number): Player | undefined {
  return players.find((player) => player.id === id);
}

export function getPlayersByPosition(positionGroup: string): Player[] {
  return players.filter((player) => player.positionGroup === positionGroup);
}
