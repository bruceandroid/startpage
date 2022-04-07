const FORM_TYPE = {
  'default': ['title', 'datetime', 'color', 'icon', 'tag']
}
const HOMEPAGE_LINKS = [
  {
    icon: 'youtube',
    text: 'YouTube',
    url: "https://www.youtube.com/",
    secret: false,
  },
  {
    icon: 'twitch',
    text: 'Twitch',
    url: "https://www.twitch.tv/",
    secret: false,
  },
  {
    icon: 'bitwarden',
    text: 'Bitwarden',
    url: "https://vault.bandrade.pt/",
    secret: true,
  },
  {
    icon: 'plex',
    text: 'Plex',
    url: "https://app.plex.tv/",
    secret: false,
  },
  {
    icon: 'pihole',
    text: 'Pi-hole',
    url: "http://pihole.bandrade.pt/",
    secret: true,
  },
  {
    icon: 'bazarr',
    text: 'Bazarr',
    url: "https://bazarr.bandrade.pt/",
    secret: true,
  },
  {
    icon: 'radarr',
    text: 'Radarr',
    url: "https://radarr.bandrade.pt/",
    secret: true,
  },
  {
    icon: 'sonarr',
    text: 'Sonarr',
    url: "https://sonarr.bandrade.pt/",
    secret: true,
  },
  {
    icon: 'jackett',
    text: 'Jackett',
    url: "https://jackett.bandrade.pt/",
    secret: true,
  },
  {
    icon: 'transmission',
    text: 'Transmission',
    url: "https://transmission.bandrade.pt/",
    secret: true,
  },
]

const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const WEATHER = {
  URL: "https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/hp-daily-forecast-day0.json",
  LISBON_CODE: 1110600,
  SAME: [4, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 21, 22, 23, 24, 26],
  DAY_TIME: { hours: 7, minutes: 0 },
  NIGHT_TIME: { hours: 19, minutes: 30 },
  CODES: {
    0: {
      text: 'no_info',
      same: true
    },
    1: {
      text: 'clear_sky',
      same: false
    },
    2: {
      text: 'partly_cloudy',
      same: false
    },
    3: {
      text: 'partly_cloudy',
      same: false
    },
    4: {
      text: 'cloudy',
      same: true
    },
    5: {
      text: 'fog',
      same: false
    },
    6: {
      text: 'drizzle',
      same: false
    },
    7: {
      text: 'drizzle',
      same: false
    },
    8: {
      text: 'rain',
      same: false
    },
    9: {
      text: 'drizzle',
      same: true
    },
    10: {
      text: 'drizzle',
      same: true
    },
    11: {
      text: 'rain',
      same: true
    },
    12: {
      text: 'drizzle',
      same: true
    },
    13: {
      text: 'drizzle',
      same: true
    },
    14: {
      text: 'rain',
      same: true
    },
    15: {
      text: 'drizzle',
      same: true
    },
    16: {
      text: 'fog',
      same: false
    },
    17: {
      text: 'fog',
      same: true
    },
    18: {
      text: 'snow',
      same: true
    },
    19: {
      text: 'thunder',
      same: true
    },
    20: {
      text: 'thunder_rain',
      same: false
    },
    21: {
      text: 'hail',
      same: true
    },
    22: {
      text: 'sleet',
      same: true
    },
    23: {
      text: 'thunder_rain',
      same: true
    },
    24: {
      text: 'very_cloudy',
      same: true
    },
    25: {
      text: 'very_cloudy',
      same: false
    },
    26: {
      text: 'fog',
      same: true
    },
    27: {
      text: 'partly_cloudy',
      same: false
    },
  }
}

export {
  FORM_TYPE,
  HOMEPAGE_LINKS,
  WEEKDAYS,
  MONTHS,
  WEATHER
}