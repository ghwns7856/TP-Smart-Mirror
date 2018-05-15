var config = {
    // Language for the mirror (currently not implemented)
    language : "ko",
    greeting : [""], // An array of greetings to randomly choose from
    // Calendar (An array of iCals)
    calendar: {
      icals : ["https://calendar.google.com/calendar/ical/23qhvs69jv65l22ou4e6030ls%40group.calendar.google.com/public/basic.ics"],
      maxResults: 9, // Number of calender events to display (Defaults is 9)
      maxDays: 365 // Number of days to display (Default is one year)
    },
    traffic: {
      key : "AkyuLJcJYvRQOSXtF2t2XHf05Tsq3TgfGDm2raf6eID5Kz5ravbARoOLeI6GOsIq", // Bing Maps API Key
      mode : "Transit", // Possibilities: Driving / Transit / Walking
      origin : "Seoul", // Start of your trip. Human readable address.
      destination : "Uiwang", // Destination of your trip. Human readable address.
      name : "", // Name of your destination ex: "work"
      reload_interval : 5 // Number of minutes the information is refreshed
    },

    youtube: {
      key:"AIzaSyDtKqzgEbgjcZaMsfmYIudmXcq6zUlXoYg"
    },

    subway: {
      key:"6a63616d55776c71313036626a64736a"
    }
}
