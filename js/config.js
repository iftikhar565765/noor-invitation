/* ═══════════════════════════════════════════════════════════════
   NOOR · config.js
   ---------------------------------------------------------------
   Main personalisation data for the site and visual editor.
   Longer copy, palette, and theme are editable here. Values
   marked SAMPLE are tasteful placeholders — replace them with
   your own before sending the link to your guests.
   ═══════════════════════════════════════════════════════════════ */

window.HEIRLOOM = {
  templateId: "noor",

  /* ── The couple — SAMPLE content, replace with your names ────── */
  couple: {
    partnerOne: "Amira",                    // SAMPLE
    partnerTwo: "Zaid",                      // SAMPLE
    initials:  "A · Z",                     // SAMPLE — used on seals & monograms
    namesLine: "Amira & Zaid"                // SAMPLE — used across the site
  },

  /* ── The wedding date & time ─────────────────────────────────
     iso : ISO 8601 date-time WITH an explicit UTC offset, so the
           countdown and the calendar files are correct on every
           guest's device, wherever they are in the world.
           Format: "YYYY-MM-DDTHH:MM:SS±HH:MM"
     display / words / numerals : how the date reads in the copy. */
  wedding: {
    iso: "2027-11-06T16:30:00+05:30",                                        // EDIT
    endIso: "2027-11-07T23:00:00+05:30",                                     // EDIT — end of the celebration
    display: "Saturday, 6 November 2027 · the Nikah begins at 4:30 PM, after Asr", // EDIT
    zoneLabel: "IST",                                                        // EDIT — optional note for guests abroad
    words: "Saturday · The Sixth of November · Two Thousand Twenty-Seven",   // EDIT
    numerals: "06 · 11 · 2027",                                              // EDIT
    weekday: "Saturday",                                                     // EDIT — the ornamental date row
    month: "November",                                                       // EDIT
    day: "06",                                                               // EDIT — the large numeral
    year: "2027",                                                            // EDIT
    muhuratLabel: "Nikah",                                                   // EDIT
    muhurat: "4:30 in the evening, after Asr",                               // EDIT
    eventTitle: "Amira & Zaid — Nikah"                                       // EDIT (calendar entry)
  },

  /* ── The venue ──────────────────────────────────────────────── */
  venue: {
    name: "The Noor Mahal",                               // SAMPLE
    address: "14 Crescent Road, Banjara Hills, Hyderabad, Telangana 500034", // SAMPLE
    mapsQuery: "Noor Mahal, Crescent Road, Banjara Hills, Hyderabad",
    /* A full URL here overrides the map link built above, e.g. an
       exact Google Maps place link or an Apple Maps URL.          */
    mapUrl: ""
  },

  /* ── Copy shown throughout the invitation ────────────────────
     The visual editor can change these values without editing HTML. */
  content: {
    pageTitle: "Amira & Zaid · 6 November 2027 — A Nikah Invitation in Emerald & Gold",
    pageDescription: "Amira and Zaid request the honour of your presence at The Noor Mahal, Hyderabad — three blessed days of mayun, mehndi and the Nikah at 4:30 on Saturday the sixth of November 2027. Open your invitation.",
    socialTitle: "Amira & Zaid — A Nikah Invitation · 06.11.2027",
    socialDescription: "An emerald envelope, a golden seal and a blessed union — you are cordially invited.",
    navStory: "Story",
    navDetails: "Events",
    navVenue: "Venue",
    navRsvp: "RSVP",
    menuInvitation: "The Invitation",
    menuStory: "Our Story",
    menuSaveDate: "Save the Date",
    menuDetails: "The Celebrations",
    menuPalette: "The Palette",
    menuWeddingDay: "The Festivities",
    menuVenue: "Venue & Location",
    menuRsvp: "Kindly Respond",
    menuCountdown: "The Countdown",
    menuClosing: "A Closing Dua",
    openingEyebrow: "With the blessings of Allah Almighty, you are invited to the wedding of",
    openingHint: "Touch the seal to break it",
    openButton: "Enter the Darbar",
    skipButton: "Skip straight to the invitation",
    envelopeAddress: "their honoured guests",
    bismillah: "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ",
    invitationEyebrow: "With the blessings of our families",
    invitationLead: "We joyfully invite you to celebrate the Nikah of",
    invitationAnd: "and",
    invitationClosing: "Your presence is our greatest blessing",
    heroVenueLabel: "Venue",
    sceneSignboard: "Written in the light of Noor",
    invitationVenueSuffix: "· Hyderabad",
    storyKicker: "The Chronicle",
    storyTitle: "Two hearts,",
    storyTitleScript: "one dua answered",
    storyParagraphOne: "Every blessed story begins with a dua whispered quietly, and ours was whispered one Jumma evening in the old mosque library, over a borrowed book of Rumi and a cup of cardamom chai neither of us drank. One conversation that outlasted the Adhan, one umbrella shared through the monsoon rain — and somehow, that evening decided the rest of our lives.",
    storyParagraphTwo: "Five years and two cities later, our families gathered beneath one roof to give their blessing, and the date was written with dates and water — the sunnah way. Nothing would mean more than to have you standing beside us as we say Qubool Hai, and begin a home built on sakinah, mawaddah and mercy.",
    storyQuote: "Lovers don't finally meet somewhere. They're in each other all along.",
    storyQuoteLabel: "— Rumi — the line we read to each other that first evening",
    storyNote: "chapter one, and every chapter after",
    storyNoteCredit: "— pencilled on the back of a wedding date card",
    storyCaptionOne: "the evening in the mosque library",
    storyCaptionTwo: "one umbrella through the monsoon",
    storyCaptionFour: "the Qubool Hai",
    storyAside: "and they lived",
    ayatKicker: "The Blessed Verse",
    ayatArabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ",
    ayatTranslation: "And one of His signs is that He created for you spouses from among yourselves so that you may find comfort in them. And He has placed between you compassion and mercy. Surely in this are signs for people who reflect.",
    ayatReference: "Surah Ar-Rūm · 30:21",
    saveDateTitle: "Save the Date",
    saveDateCrossing: "three blessed days of mehndi, Nikah & Walima",
    saveDateNote: "Add the date to your calendar and keep these particulars close.",
    calendarDownloadLabel: "Add to Calendar",
    calendarGoogleLabel: "Google Calendar",
    detailsKicker: "The Celebrations",
    detailsTitleFirst: "Wedding",
    detailsTitleSecond: "Events",
    detailsIntro: "Three blessed days with our families — at a glance.",
    eventOneLabel: "The Mayun",
    eventOneTime: "Friday, 5 November 2027 · eleven in the morning",
    eventOneNote: "The bride is showered in flowers and yellow silk — the first day of blessings at the family home.",
    eventTwoLabel: "The Mehndi",
    eventTwoTime: "Friday, 5 November 2027 · four in the afternoon",
    eventTwoNote: "Henna vines, dholki songs and rose sherbet in the courtyard — wear emerald and gold.",
    eventThreeLabel: "The Nikah",
    eventThreeTime: "Saturday, 6 November 2027 · 4:30 PM, after Asr",
    eventThreeNote: "The Nikah ceremony and the Qubool Hai, led by the Imam, followed by dinner in the courtyard.",
    eventFourLabel: "The Rukhsati",
    eventFourTime: "Saturday, 6 November 2027 · nine in the evening",
    eventFourNote: "The bride's farewell — dua, tears of joy, and the send-off under a canopy of lights.",
    eventFiveLabel: "The Walima",
    eventFiveTime: "Sunday, 7 November 2027 · half past seven in the evening",
    eventFiveNote: "The groom's family hosts the grand reception banquet — a feast of celebration and welcome.",
    kindlyReplyLabel: "Kindly Reply",
    kindlyReplyNote: "Kindly send your response using the reply card further below.",
    particularsEyebrow: "The Particulars",
    particularsDateLabel: "The Date",
    particularsPlaceLabel: "The Place",
    particularsAttireLabel: "The Attire",
    particularsAttire: "Emerald, gold & ivory",
    particularsAttireNote: "Shalwar kameez, saris and formal wear are most welcome — dress as though the darbar could blush.",
    particularsCarriagesLabel: "Kindly Reply",
    particularsCarriagesTime: "the sixth of October, 2027",
    particularsCarriagesNote: "So the banquet count is right and every seat is saved.",
    paletteKicker: "The Colours of the Day",
    paletteTitleFirst: "The emerald",
    paletteTitleSecond: "darbar",
    paletteIntro: "Deep emerald and antique gold, pearl ivory and soft celadon — the colours of the darbar, worn by our favourite people.",
    dressCodeLabel: "Attire · Emerald & Gold",
    dressCodeTitle: "Colours of the darbar",
    dressCodeNote: "Emerald silks, gold zari and pearl ivory are most welcome — dress as splendidly as you feel.",
    weddingDayKicker: "The Celebrations",
    weddingDayTitleFirst: "The wedding",
    weddingDayTitleSecond: "festivities",
    venueKicker: "The Place",
    venueDescription: "A private darbar estate of emerald courts and gilded arches — fanous lanterns at dusk, girih light at noon, the sweet Adhan of gratitude, and roses on every table.",
    venueCeremonyLabel: "Nikah",
    venueCeremonyText: "in the grand hall, after Asr, led by the Imam",
    venueReceptionLabel: "Walima",
    venueReceptionText: "a candlelit banquet in the emerald courtyard",
    mapButton: "View Location",
    rsvpKicker: "Your Reply",
    rsvpTitle: "Kindly Respond",
    rsvpLead: "Kindly reply by",
    rsvpNameLabel: "Your name",
    rsvpNamePlaceholder: "e.g. Fatima Khan",
    rsvpNameError: "May we have your name? Two letters or more will do.",
    rsvpAttendanceLabel: "Will you be joining us?",
    rsvpAcceptLabel: "Joyfully accepts",
    rsvpDeclineLabel: "Regretfully declines",
    rsvpAttendanceError: "Please let us know whether you can come.",
    rsvpGuestsLabel: "Seats in your party",
    rsvpGuestsError: "May we have a seat count between one and the party size allowed?",
    rsvpGuestSingular: "guest",
    rsvpGuestPlural: "guests",
    rsvpDietaryLabel: "Dietary requirements",
    rsvpDietaryPlaceholder: "Halal, vegetarian, allergies…",
    rsvpMessageLabel: "A note for the couple",
    rsvpMessagePlaceholder: "Duas, memories, blessings…",
    rsvpSubmitLabel: "Send Response",
    rsvpAmendLabel: "Amend the reply",
    countdownDaysLabel: "Days",
    countdownHoursLabel: "Hours",
    countdownMinutesLabel: "Minutes",
    countdownSecondsLabel: "Seconds",
    countdownKicker: "The Grand Countdown",
    countdownTitle: "counting the hours until",
    countdownPromise: "the Nikah begins",
    closingScript: "with all our love",
    closingMessage: "Thank you, from the depths of our hearts, for being part of our story. May our home be filled with sakinah, mawaddah and rahmah — tranquillity, love and mercy — and may every guest who walks through our door leave with a blessing. Your presence completes our celebration.",
    closingDua: "بَارَكَ اللهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
    closingDuaTranslation: "May Allah bless you both, and shower His blessings upon you, and unite you both in goodness.",
    footerTagline: "Emerald & gold — written in the light of Noor."
  },

  palette: [
    { name: "Pearl Ivory",    color: "#F4EFE2" },
    { name: "Antique Gold",   color: "#C0A052" },
    { name: "Deep Emerald",   color: "#0E4B3A" },
    { name: "Emerald Night",  color: "#0A2E24" },
    { name: "Garden Leaf",    color: "#5F7A5A" },
    { name: "Pearl Blush",    color: "#E7CDB4" }
  ],
  theme: "noor",
  themeColors: {},
  fonts: {
    editorial: "cormorant",
    display: "marcellus",
    script: "pinyon",
    hand: "laBelle",
    body: "ebGaramond"
  },

  /* ── Wedding festivities — SAMPLE words for the string of lights.
     Use one short phrase per entry; an empty list hides the section. */
  moments: ["The Mayun", "The Mehndi", "The Nikah", "The Rukhsati", "The Walima", "The Duas"],

  /* ── RSVP ─────────────────────────────────────────────────────
     endpoint : leave "" for the honest demonstration mode — the
                form validates and shows a preview of the reply and
                states clearly that nothing is sent or stored.
                Cloudflare's publishing service supplies the invitation-
                specific RSVP endpoint to public invitation pages.
     maxGuests: the number allowed by the invitation.
     deadline  : shown above the form.                                  */
  rsvp: {
    endpoint: "",
    maxGuests: 4,
    deadline: "the sixth of October, 2027"        // SAMPLE
  },

  /* ── Countdown wording (invalid or passed dates) ─────────────── */
  countdown: {
    invalidMessage: "The Nikah is still being finalised — see the celebrations below.",
    pastMessage: "The celebration has begun — thank you for being part of our story."
  },

  /* ── Optional ambient music ───────────────────────────────────
     Drop a small looping file at assets/audio/theme.mp3 and set
     src to enable the volume toggle in the navigation. Never
     autoplays; stays silent if the file is missing.                  */
  audio: {
    src: ""             // e.g. "assets/audio/theme.mp3"
  }
};
