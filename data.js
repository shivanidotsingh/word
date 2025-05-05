const wordsData = [
  {
    word: "Pareidolia",
    definition: "The tendency to perceive a specific, often meaningful image in a random or ambiguous visual pattern.",
  },
   {
    word: "Prescient",
    definition: "having or showing knowledge of events before they take place.",
  },
  {
    word: "Factotum",
    definition: "An employee who does all kinds of work.",
  },
  {
    word: "Brusque",
    definition: "Using very few words and sounding rude.",
  },
  {
    word: "Apocryphal",
    definition: "(of a story or statement) of doubtful authenticity, although widely circulated as being true.",
  },
  {
    word: "Garrulous",
    definition: "(of a person) Excessively talkative, especially on trivial matters.",
  },
  {
    word: "Discombobulated",
    definition: "Confused and disconcerted.",
  },
  {
    word: "Asymptote",
    definition: "A line that continually approaches a given curve but does not meet it at any finite distance.",
  },
  {
    word: "Phlegmatic",
    definition: "(of a person) having an unemotional and stolidly calm disposition.",
  },
  {
    word: "Unctuous",
    definition: "Excessively or ingratiatingly flattering; oily.",
  },
  {
    word: "Acquiesce",
    definition: "Accept something reluctantly but without protest.",
  },
  {
    word: "Conjecture",
    definition: "An opinion or conclusion formed on the basis of incomplete information.",
  },
  {
    word: "Taciturn",
    definition: "(of a person) reserved or uncommunicative in speech; saying little.",
  },
  {
    word: "Oafish",
    definition: "rough or clumsy and unintelligent.",
  },
  {
    word: "Empirical",
    definition: "Based on, concerned with, or verifiable by observation or experience rather than theory or pure logic.",
  },
  {
    word: "Stultifying",
    definition: "Tending to stifle enthusiasm, initiative, or freedom of action.",
  },
  {
    word: "Mottle",
    definition: "Mark with spots or smears of color.",
  },
  {
    word: "Equanimity",
    definition: "Mental calmness, composure, and evenness of temper, especially in a difficult situation.",
  },
  {
    word: "Indemnify",
    definition: "Compensate someone for loss or harm.",
  },
  {
    word: "Recalcitrance",
    definition: "Obstinately defiant of authority or restraint. (of a person) ungovernable.",
  },
  {
    word: "Clairvoyant",
    definition: "Having or exhibiting an ability to perceive events in the future or beyond normal sensory contact.",
  },
  {
    word: "Fetid",
    definition: "Smelling extremely unpleasant.",
  },
  {
    word: "Tacit",
    definition: "Understood or implied without being stated.",
  },
  {
    word: "Elfin",
    definition: "Small and delicate, typically with an attractively mischievous or strange charm.",
  },
  {
    word: "Oeuvre",
    definition: "(noun) The works of a painter, composer, or author regarded collectively.",
  },
  {
    word: "Spire",
    definition: "(noun) A tapering conical or pyramidal structure on the top of a building, typically a church tower.",
  },
  {
    word: "Altercation",
    definition: "(noun) A noisy argument or disagreement, especially in public.",
  },
  {
    word: "Filibuster",
    definition: "An action such as a prolonged speech that obstructs progress in a legislative assembly while not technically contravening the required procedures.",
  },
  {
    word: "Jauk",
    definition: "To dawdle or waste time.",
  },
  {
    word: "Impugn",
    definition: "Dispute the truth, validity, or honesty of (a statement or motive); call into question.",
  },
  {
    word: "Mellifluous",
    definition: "(of a voice or words) sweet or musical; pleasant to hear.",
  },
  {
    word: "Lackadaisical",
    definition: "Lacking enthusiasm and determination; (of a person) carelessly lazy.",
  },
  {
    word: "Cheugy",
    definition: "Opposite of trendy. once cool, but no more.",
  },
  {
    word: "Grok",
    definition: "To understand something profoundly and intuitively.",
  },
  {
    word: "Discombobulate",
    definition: "Confuse.",
  },
  {
    word: "Neologism",
    definition: "A newly coined word or expression.",
  },
  {
    word: "Apropos",
    definition: "With reference to; concerning.",
  },
  {
    word: "Suffragette",
    definition: "(noun) A woman seeking the right to vote through organized protest.",
  },
  {
    word: "Seance",
    definition: "(noun) A spiritualist meeting to receive spirit communications.",
  },
  {
    word: "Moot",
    definition: "Open to question / debatable; subjected to discussion / disputed; deprived of practical significance.",
  },
  {
    word: "Plutocrat",
    definition: "(noun) A person whose power derives from their wealth.",
  },
  {
    word: "Liminality",
    definition: "Liminal Space is an aesthetic that refers to the feeling of being in a transitional space that has been abandoned - a mall at 4 am or a school hallway in summer, for example. This makes it feel frozen and slightly unsettling.",
  },
  {
    word: "Coquettish",
    definition: "Behaving in such a way as to suggest a playful sexual attraction; (of a person) flirtatious.",
  },
  {
    word: "Atonic",
    definition: "Uttered without accent or stress.",
  },
  {
    word: "Mensch",
    definition: "(noun) A person of integrity and honor.",
  },
  {
    word: "Temerity",
    definition: "Audacity.",
  },
  {
    word: "Bucolic",
    definition: "Relating to the pleasant aspects of the countryside and country life.",
  },
  {
    word: "Buttress",
    definition: "(noun) A source of support.",
  },
  {
    word: "Redolence",
    definition: "Strongly reminiscent or suggestive of; also, strongly smelling of.",
  },
  {
    word: "Chockablock",
    definition: "Crowded; jammed.",
  },
  {
    word: "Faugh",
    definition: "Expressing disgust.",
  },
  {
    word: "Malaise",
    definition: "A general feeling of discomfort, illness, or uneasiness whose exact cause is difficult to identify.",
  },
  {
    word: "Deference",
    definition: "Humble submission and respect.",
  },
  {
    word: "Quash",
    definition: "Reject or void, especially by legal procedure.",
  },
  {
    word: "Parable",
    definition: "(noun) A simple story used to illustrate a moral or spiritual lesson, as told by Jesus in the Gospels.",
  },
  {
    word: "Pontificate",
    definition: "Express one's opinions in a way considered annoyingly pompous and dogmatic.",
  },
  {
    word: "Belligerent",
    definition: "Hostile and aggressive.",
  },
  {
    word: "Odious",
    definition: "Extremely unpleasant; repulsive.",
  },
  {
    word: "Impetuous",
    definition: "Moving forcefully or rapidly. acting quickly and without thought.",
  },
  {
    word: "Snafu",
    definition: "A confused or chaotic state; a mess.",
  },
  {
    word: "Shvitzing",
    definition: "Informal way of saying sweating.",
  },
  {
    word: "Shindig",
    definition: "A large, lively party, especially one celebrating something.",
  },
  {
    word: "Usurious",
    definition: "Usury is the practice of making unethical or immoral monetary loans that unfairly enrich the lender.",
  },
  {
    word: "Maudlin",
    definition: "Self-pityingly or tearfully sentimental, often through drunkenness.",
  },
  {
    word: "Vamoose",
    definition: "Depart hurriedly.",
  },
  {
    word: "Goad",
    definition: "Provoke or annoy (someone) so as to stimulate some action or reaction.",
  },
  {
    word: "Lothario",
    definition: "A man who behaves selfishly and irresponsibly in his sexual relationships with women.",
    usage: ""
  },
  {
    word: "Spry",
    definition: "(especially of an old person) active; lively.",
    usage: ""
  },
  {
    word: "Dastangoi",
    definition: "A 13th century Urdu oral storytelling art form, performed by either one or two people.",
    usage: ""
  },
  {
    word: "Anosmia",
    definition: "“without” + “smell.”",
    usage: ""
  },
  {
    word: "Ontological",
    definition: "Relating to the branch of metaphysics dealing with the nature of being.",
    usage: ""
  },
  {
    word: "Curandero",
    definition: "(in Spain and Latin America) a healer who uses folk remedies.",
  },
  {
    word: "Jerry-rig",
    definition: "Another word for jugaad.",
    usage: ""
  },
  {
    word: "Onomatopoeic",
    definition: "The formation of a word from a sound associated with what is named (e.g. cuckoo, sizzle).",
    usage: ""
  },
  {
    word: "Atemporal",
    definition: "Existing or considered without relation to time.",
    usage: ""
  },
  {
    word: "Anathema",
    definition: "Something or someone that one vehemently dislikes.",
    usage: ""
  },
  {
    word: "Highfalutin",
    definition: "Pompous or pretentious.",
    usage: ""
  },
  {
    word: "مطمئن",
    definition: "quiet, secure, tranquil, satisfied.",
    usage: ""
  },
  {
    word: "Imbroglio",
    definition: "An extremely confused, complicated, or embarrassing situation.",
    usage: ""
  },
  {
    word: "Ossify",
    definition: "To become hardened or conventional and opposed to change (also, to change into bone).",
    usage: ""
  },
  {
    word: "Pilfer",
    definition: "Steal (things of little value).",
    usage: ""
  },
  {
    word: "Effulgent",
    definition: "(of a person or their expression) emanating joy or goodness.",
  },
  {
    word: "Hoodlum",
    definition: "A person who engages in crime and violence; a hooligan or gangster.",
    usage: ""
  },
  {
    word: "Acquiescence",
    definition: "The reluctant acceptance of something without protest.",
    usage: ""
  },
  {
    word: "Avaunt",
    definition: "(दफा हो जाओ) go away.",
    usage: ""
  },
  {
    word: "Bifurcation",
    definition: "The division of something into two branches or parts.",
    usage: ""
  },
  {
    word: "Spoonerism",
    definition: "A verbal error in which a speaker accidentally transposes the initial sounds or letters of two or more words, often to humorous effect.",
    usage: ""
  },
  {
    word: "Menagerie",
    definition: "A strange or diverse collection of people or things.",
    usage: ""
  },
  {
    word: "Idée fixe",
    definition: "(eday fix) an idea or desire that dominates the mind; an obsession.",
    usage: ""
  },
  {
    word: "Dirge",
    definition: "a mournful song, piece of music, or sound.",
    usage: ""
  },
  {
    word: "वात्सल्य",
    definition: "Parental love/ affection.",
    usage: ""
  },
  {
    word: "Phenakistoscope",
    definition: "An early animation device consisting of a disc or drum which rotated, showing successive images through slits, often via a mirror, thus producing the illusion of motion.",
    usage: ""
  },
  {
    word: "Supine",
    definition: "(of a person) lying face upwards.",
    usage: ""
  },
  {
    word: "Splendiferous",
    definition: "Humorous way to say splendid.",
    usage: ""
  },
  {
    word: "Bardo",
    definition: "In some schools of Buddhism, it is an intermediate, transitional, or liminal state between death and rebirth.",
    usage: ""
  },
  {
    word: "Chindogu",
    definition: "\"un-useless.\" inventions that defy concise explanation. They aren't useful. But they aren't completely useless either.",
    usage: ""
  },
  {
    word: "Pentimento",
    definition: "A visible trace of earlier painting beneath a layer or layers of paint on a canvas.",
    usage: "pentimenti"
  },
  {
    word: "Smidge",
    definition: "A small amount of something.",
    usage: "smidgen"
  },
  {
    word: "Nous",
    definition: "Common sense; practical intelligence; the mind or intellect.",
    usage: ""
  },
  {
    word: "Anthropocentrism",
    definition: "The belief that human beings are the most important entity in the universe.",
    usage: ""
  },
  {
    word: "Apophenia",
    definition: "The tendency to mistakenly perceive connections and meaning between unrelated things.",
    usage: ""
  },
  {
    word: "Dilettante",
    definition: "A person who cultivates an area of interest, such as the arts, without real commitment or knowledge.",
    usage: ""
  },
  {
    word: "Querulous",
    definition: "Complaining in a rather petulant or whining manner.",
    usage: "/ˈkwer(y)ələs/"
  },
  {
    word: "Incredulity",
    definition: "The state of being unwilling or unable to believe something.",
    usage: ""
  },
  {
    word: "Heuristic",
    definition: "Rules of Thumb – a mental shortcut that helps us make decisions quickly.",
    usage: ""
  },
  {
    word: "Ingratiate",
    definition: "Bring oneself into favour with someone by flattering or trying to please them.",
    usage: ""
  },
  {
    word: "Clavicle",
    definition: "Collarbone.",
    usage: ""
  },
  {
    word: "Recidivism",
    definition: "The tendency of a convicted criminal to reoffend.",
    usage: ""
  },
  {
    word: "Stymie",
    definition: "Prevent or hinder the progress of.",
    usage: ""
  },
  {
    word: "Onerous",
    definition: "Involving a great deal of effort, trouble or difficulty.",
  }
];
