import json
import re
from collections import OrderedDict
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SOURCE_MD = ROOT / "data" / "mock-exam1.md"
EXTRA_SOURCE_MD = ROOT / "data" / "mock-exams-2-4.md"
UPDATED_SOURCE_MD = Path("/Users/liceline/Desktop/荷兰融入考试阅读/荷兰融入考试阅读 mock exams/荷兰融入考试阅读 mock exams.md")
SOURCE_FILES = [p for p in [UPDATED_SOURCE_MD, SOURCE_MD, EXTRA_SOURCE_MD] if p.exists()]
OLD_WORDS = Path("/Users/liceline/Desktop/荷兰语单词/dutch-app/words.json")
OUT_WORDS = ROOT / "words.json"
OUT_READINGS = ROOT / "readings.json"

AUTO_TITLE_PATTERNS = [
    "Welkom bij de tandartspraktijk Oud Zwaluwen",
    "Wat is een cv?",
    "Vakanties",
    "Ziekmelding",
    "Uitnodiging buurtbijeenkomst",
    "Het sportcentrum is geopend",
    "Dag Yvonne",
    "Informatie huisarts",
    "Woorden leren",
    "WERKROOSTER HOTEL",
    "Beste collega's",
    "Beste collega",
    "Beste cursist",
    "Gratis stadsbus",
    "Beste buurtbewoner",
    "VERKOPERS GEZOCHT",
    "Hoi Chang",
    "Beste Selina",
    "Cursus Houten Meubels Maken",
    "Geachte mevrouw",
    "Dag Lito",
    "Hallo allemaal",
    "Cursus Techniek",
    "Andere routes bus 14 en bus 323",
    "Verbouwing Kuijpergebouw",
    "Beste Yuri",
    "Kapper Style",
    "Hallo iedereen",
]

SUBHEADINGS = {
    "Onze openingstijden", "Afspraak maken", "Spoedbehandeling tijdens openingstijden",
    "Spoedbehandeling op vrijdag en in het weekend", "Hoe maakt u een cv?", "Op vakantie?",
    "Ziek?", "Open dagen", "De bedrijfsarts", "Programma", "Themagroepen", "Opgeven",
    "Openingstijden", "’s Avonds, in het weekend en tijdens de vakantie", "Noodgevallen",
    "Telefonisch spreekuur", "1. De kaartjesmethode", "2. De schuifmethode", "3. Het woordnet",
    "Let op:", "Waarom wordt de stadsbus gratis?", "Wanneer is de stadsbus gratis?",
    "Wanneer rijdt de stadsbus?", "Wat moet je doen?", "Wie zoeken wij?", "Interesse?",
    "De lessen", "Inschrijven", "Afmelden", "Voor wie?", "Startdata", "Meer informatie",
    "Nieuwe locatie cursus ‘Nederlands in de praktijk’", "Prijzen"
}


ARTICLE_TRANSLATIONS = {
    "Tips om goed te leren": [
        ("Iedereen leert op zijn eigen manier.", "Everyone learns in their own way."),
        ("Toch geven we u een paar tips om beter te kunnen leren.", "Still, we give you a few tips so you can learn better."),
        ("Begin met het maken van een planning: wat gaat u wanneer doen?", "Start by making a plan: what are you going to do and when?"),
        ("Elke dag een beetje leren is beter dan alles op een dag leren.", "Learning a little every day is better than learning everything in one day."),
        ("Lees op verschillende dagen dezelfde bladzijdes een paar keer opnieuw.", "Read the same pages again a few times on different days."),
        ("U onthoudt de informatie dan beter.", "Then you remember the information better."),
        ("Zoek uit wanneer u het beste kan leren: 's morgens, 's middags of 's avonds.", "Find out when you can learn best: in the morning, afternoon, or evening."),
        ("Leer niet langer dan een half uur.", "Do not study for longer than half an hour."),
        ("Neem daarna een pauze of ga even iets heel anders doen.", "After that, take a break or do something completely different for a while."),
        ("Leer in een rustige omgeving.", "Study in a quiet environment."),
        ("Denk niet teveel aan andere dingen.", "Do not think too much about other things."),
        ("Lees eerst een stuk tekst.", "First read a piece of text."),
        ("Denk daarna even na over de inhoud.", "Then think briefly about the content."),
        ("Lees dan een nieuw stuk tekst en denk weer na over die inhoud.", "Then read a new piece of text and think again about that content."),
        ("Ga zo verder tot het einde van de tekst.", "Continue like this until the end of the text."),
        ("Leg aan iemand anders uit wat u hebt gelezen.", "Explain to someone else what you have read."),
        ("Als u dat kunt, weet u zeker dat u het hebt begrepen.", "If you can do that, you know for sure that you have understood it."),
        ("U onthoudt informatie beter als u het aan iemand hebt verteld.", "You remember information better if you have told it to someone."),
    ],
    "Jaarlijkse hardloopwedstrijd": [
        ("Aan de bewoners van het dorp.", "To the residents of the village."),
        ("Wij willen u met deze brief informatie geven over de jaarlijkse hardloopwedstrijd in ons dorp.", "With this letter, we want to give you information about the annual running race in our village."),
        ("Ook willen wij u vertellen wat er die dag anders is voor het verkeer.", "We also want to tell you what will be different for traffic that day."),
        ("We willen dat alles zo goed mogelijk gaat en we hopen dat u weinig last hebt van de wedstrijd.", "We want everything to go as well as possible, and we hope the race causes you little trouble."),
        ("Ongeveer 500 hardlopers doen mee aan de hardloopwedstrijd.", "About 500 runners take part in the running race."),
        ("De start en de finish zijn op het Dorpsplein.", "The start and finish are on the village square."),
        ("U kunt naar de hardlopers komen kijken, als u daar zin in heeft.", "You can come and watch the runners if you feel like it."),
        ("De route is Dorpsplein, Dorpsstraat, Bergsebaan, Flamingostraat, Dorpsplein.", "The route is Dorpsplein, Dorpsstraat, Bergsebaan, Flamingostraat, Dorpsplein."),
        ("We willen dat alles veilig is voor de hardlopers, het verkeer en het publiek.", "We want everything to be safe for the runners, traffic, and the public."),
        ("Daarom sluiten wij een aantal straten en wegen af.", "Therefore we are closing a number of streets and roads."),
        ("Op de route mogen tot 17.00 uur geen auto's staan.", "No cars may be parked on the route until 5 p.m."),
        ("Wij vragen u daarom uw auto voor zaterdagmorgen 13 juni 10.00 uur weg te halen.", "We therefore ask you to remove your car before Saturday morning, June 13, at 10 a.m."),
        ("Auto's die er daarna nog staan zal de politie wegslepen.", "Cars that are still there after that will be towed away by the police."),
        ("Wij bieden u onze excuses aan voor de overlast en wij danken u voor uw medewerking.", "We apologize for the inconvenience and thank you for your cooperation."),
    ],
    "Verzamel- en transportservice": [
        ("Hebt u meubels gezien die u wilt kopen?", "Have you seen furniture that you want to buy?"),
        ("En wilt u dat wij deze meubels bij u thuisbezorgen?", "And do you want us to deliver this furniture to your home?"),
        ("Dan kunt u gebruikmaken van onze transportservice.", "Then you can use our transport service."),
        ("U maakt een lijstje met de meubels, op internet of in onze winkel.", "You make a list of the furniture, online or in our store."),
        ("Wij verzamelen deze meubels en bezorgen alles bij u thuis.", "We collect this furniture and deliver everything to your home."),
        ("Dit alles voor een klein bedrag.", "All of this for a small amount of money."),
        ("De prijzen voor het bezorgen ziet u hieronder.", "You can see the delivery prices below."),
        ("Deze prijzen zijn geldig voor een adres.", "These prices are valid for one address."),
        ("Wilt u de meubels op meer adressen laten bezorgen?", "Do you want the furniture delivered to more addresses?"),
        ("Ga dan voor meer informatie naar de informatiebalie in onze winkel.", "Then go to the information desk in our store for more information."),
        ("De levertijd van de meubels is ten minste twee weken.", "The delivery time for the furniture is at least two weeks."),
        ("U kunt op onze website zien op welke dagen wij meubels thuisbezorgen.", "You can see on our website which days we deliver furniture to homes."),
        ("Wilt u weten hoe laat wij de meubels bezorgen?", "Do you want to know what time we will deliver the furniture?"),
        ("Bel dan naar onze klantenservice.", "Then call our customer service."),
        ("Dit kan alleen op de dag van de bezorging, vanaf 8 uur 's ochtends.", "This is only possible on the day of delivery, from 8 a.m."),
        ("Woont u op de vijfde verdieping of hoger?", "Do you live on the fifth floor or higher?"),
        ("Wij bezorgen alleen als er een lift is.", "We deliver only if there is an elevator."),
    ],
    "Personeelsuitje kanovaren": [
        ("Op vrijdag 9 mei gaan we met het bedrijf kanovaren.", "On Friday, May 9, we are going canoeing with the company."),
        ("Jan van Botenverhuur de Rijnstroom wacht op ons om half 11 in Utrecht.", "Jan from boat rental De Rijnstroom is waiting for us at 10:30 in Utrecht."),
        ("Om half 12 is er lunch met een kop koffie of thee.", "At 11:30 there is lunch with a cup of coffee or tea."),
        ("Om half 8 eten we een pannenkoek bij het pannenkoekenhuis.", "At 7:30 we will eat a pancake at the pancake restaurant."),
        ("Je hoeft zelf dus geen eten mee te nemen.", "So you do not have to bring food yourself."),
        ("Het programma eindigt om half 9.", "The program ends at 8:30."),
        ("We raden aan om extra kleding mee te nemen, voor als je kleding nat wordt op de boot.", "We recommend bringing extra clothes in case your clothes get wet on the boat."),
        ("Wij zullen handdoeken meenemen.", "We will bring towels."),
        ("Je hoeft geen zwemkleding mee te nemen, het water is nog te koud om in te zwemmen.", "You do not need to bring swimwear; the water is still too cold to swim in."),
        ("Je kunt je tot 2 mei bij Ingmar aanmelden.", "You can register with Ingmar until May 2."),
        ("Als je nog vragen hebt, kun je bellen met Charlotte.", "If you still have questions, you can call Charlotte."),
    ],
    "Tas vergeten": [
        ("Ik zit nu in de trein van mijn werk naar huis en merk dat ik mijn tas ben vergeten.", "I am now on the train from work to home and notice that I forgot my bag."),
        ("Hij staat nog op mijn bureau.", "It is still on my desk."),
        ("Wil jij hem misschien ophalen en naar de portier brengen?", "Could you maybe pick it up and bring it to the porter?"),
        ("Dan haal ik mijn tas daar morgen op.", "Then I will pick up my bag there tomorrow."),
        ("Het is een gele rugtas met een rits.", "It is a yellow backpack with a zipper."),
        ("In de tas zit mijn laptop.", "My laptop is in the bag."),
        ("Er zitten ook een boek en een bril in de tas.", "There is also a book and a pair of glasses in the bag."),
        ("Gelukkig heb ik mijn telefoon en portemonnee wel bij me.", "Luckily I do have my phone and wallet with me."),
        ("Wil je me een bericht sturen als je de tas gevonden hebt?", "Will you send me a message when you have found the bag?"),
    ],
    "Sportdag": [
        ("Op 9 juli is onze sportdag in het Sportpark in Amsterdam.", "On July 9, our sports day is at the Sportpark in Amsterdam."),
        ("Wilt u om 9 uur op het veld zijn?", "Would you be on the field at 9 o'clock?"),
        ("Dan kunnen we op tijd beginnen.", "Then we can start on time."),
        ("We beginnen om half 10 met een tennistoernooi.", "We start at 9:30 with a tennis tournament."),
        ("U kunt 's ochtends ook kiezen voor basketbal.", "In the morning you can also choose basketball."),
        ("Daarna hebben we lunchpauze.", "After that we have a lunch break."),
        ("U moet zelf uw brood meenemen, wij zorgen voor koffie en thee.", "You must bring your own bread; we provide coffee and tea."),
        ("Na de pauze is er een voetbaltoernooi.", "After the break there is a football tournament."),
        ("Voor de kinderen is er dan een volleybalwedstrijd.", "For the children there is then a volleyball match."),
        ("Om half 7 is de sportdag afgelopen.", "At 6:30 the sports day is over."),
        ("We gaan dan barbecueen.", "Then we will barbecue."),
        ("Als u geen vlees eet, wilt u dit dan doorgeven aan Marie?", "If you do not eat meat, would you pass this on to Marie?"),
        ("Zij doet samen met Mo de boodschappen.", "She does the shopping together with Mo."),
        ("Wij kunnen de kleedkamers van het Sportpark niet gebruiken.", "We cannot use the changing rooms of the Sportpark."),
        ("De kleedkamers worden verbouwd.", "The changing rooms are being renovated."),
        ("U moet dus thuis uw sportkleren aantrekken.", "So you must put on your sports clothes at home."),
        ("De sportdag met barbecue en drankjes kost 15 euro per persoon.", "The sports day with barbecue and drinks costs 15 euros per person."),
        ("Kinderen betalen 8,50 euro.", "Children pay 8.50 euros."),
        ("U moet betalen als u zich aanmeldt.", "You must pay when you register."),
        ("U kunt zich aanmelden tot 25 juni bij Jan.", "You can register with Jan until June 25."),
        ("Ook mensen die niet meedoen mogen mee barbecueen.", "People who do not take part may also join the barbecue."),
    ],
    "Bruiloft Nadia en Richard": [
        ("Volgende week vrijdag is de bruiloft van Nadia en Richard.", "Next Friday is Nadia and Richard's wedding."),
        ("Daarom hebben we een feestcommissie opgericht.", "That is why we have set up a party committee."),
        ("De feestcommissie bestaat uit William, David en Elise.", "The party committee consists of William, David, and Elise."),
        ("We hebben alle drie een taak, zodat we er een leuke dag van kunnen maken.", "All three of us have a task so that we can make it a nice day."),
        ("Wij willen een bus huren om samen met collega's naar de bruiloft te gaan.", "We want to rent a bus to go to the wedding together with colleagues."),
        ("Wil je mee met de bus?", "Do you want to come along on the bus?"),
        ("Geef je dan op bij David.", "Then sign up with David."),
        ("We willen met de collega's een cadeau geven aan het bruidspaar.", "We want to give the bridal couple a gift together with the colleagues."),
        ("Als je wilt, kun je ook meedoen.", "If you want, you can also participate."),
        ("Je kunt geld aan William geven.", "You can give money to William."),
        ("We weten nog niet precies wat we gaan geven.", "We do not yet know exactly what we are going to give."),
        ("Op het bureau van Elise ligt een lijstje met cadeaus.", "On Elise's desk there is a list of gifts."),
        ("Kruis op het lijstje aan wat je het leukste cadeau vindt.", "Tick on the list which gift you like best."),
        ("We gaan het cadeau geven dat het meest gekozen is door jullie.", "We are going to give the gift that you choose most often."),
        ("Nadia is deze week nog gewoon aan het werk.", "Nadia is still at work as usual this week."),
        ("Ons cadeau moet natuurlijk wel een verrassing blijven.", "Of course our gift must remain a surprise."),
        ("Let er dus op dat je niets zegt tegen Nadia.", "So make sure you do not say anything to Nadia."),
    ],
    "EHBO De Groene Cirkel": [
        ("EHBO betekent Eerste Hulp Bij Ongelukken.", "EHBO means first aid in accidents."),
        ("Als EHBO'er kunt u helpen als er een ongeluk gebeurt.", "As a first aider, you can help when an accident happens."),
        ("Bijvoorbeeld als uw buurjongen valt en zijn arm breekt.", "For example, if your neighbor boy falls and breaks his arm."),
        ("Of als iemand zich snijdt bij het eten maken.", "Or if someone cuts themselves while making food."),
        ("U kunt bij ons verschillende EHBO-cursussen volgen.", "You can take different first aid courses with us."),
        ("U haalt uw diploma bij ons altijd in korte tijd.", "With us, you always get your diploma in a short time."),
        ("Dit is de algemene cursus EHBO.", "This is the general first aid course."),
        ("U leert om te helpen bij allerlei ongelukken.", "You learn to help with all kinds of accidents."),
        ("De cursus bestaat uit zes bijeenkomsten.", "The course consists of six meetings."),
        ("Aan het einde van de cursus doet u examen in de praktijk.", "At the end of the course you take a practical exam."),
        ("Dit is de cursus Reanimeren.", "This is the resuscitation course."),
        ("Deze cursus kan u helpen om levens te redden.", "This course can help you save lives."),
        ("U leert mensen met een hartstilstand of ademstilstand te helpen.", "You learn to help people with cardiac arrest or respiratory arrest."),
        ("De cursus bestaat uit een bijeenkomst van drie uur.", "The course consists of one three-hour meeting."),
        ("Dit is de cursus EHBO voor ouders.", "This is the first aid course for parents."),
        ("Deze cursus is zeer geschikt voor ouders en verzorgers.", "This course is very suitable for parents and caregivers."),
        ("De cursus is ook erg handig als u in het onderwijs werkt.", "The course is also very useful if you work in education."),
        ("De cursus bestaat uit vier bijeenkomsten.", "The course consists of four meetings."),
    ],
    "Bartjes Kringloopcentrum": [
        ("In Bartjes Kringloopcentrum is veel te koop.", "There is a lot for sale at Bartjes thrift center."),
        ("Gebruikte spullen of nieuwe spullen, altijd goed en goedkoop.", "Used things or new things, always good and cheap."),
        ("Kom regelmatig kijken.", "Come and look regularly."),
        ("Er is altijd weer iets anders te koop.", "There is always something different for sale again."),
        ("U brengt uw spullen naar ons.", "You bring your things to us."),
        ("Wij kunnen ze ook gratis bij u thuis ophalen.", "We can also pick them up from your home for free."),
        ("We nemen niet alles mee, alleen wat we kunnen verkopen in onze winkel.", "We do not take everything, only what we can sell in our store."),
        ("Wij controleren en testen alle spullen.", "We check and test all items."),
        ("Wat kapot is, proberen we te maken.", "What is broken, we try to repair."),
        ("Ook maken we alles schoon.", "We also clean everything."),
        ("Daarna zetten we de spullen te koop in onze winkel.", "After that we put the items up for sale in our store."),
        ("Als u spullen bij ons koopt, kunnen we ze bij u thuis afleveren.", "If you buy things from us, we can deliver them to your home."),
        ("Daarvoor betaalt u 5 euro.", "For that you pay 5 euros."),
        ("U krijgt geen geld voor uw spullen.", "You do not receive money for your things."),
        ("De medewerkers van Bartjes zijn allemaal vrijwilligers.", "The employees of Bartjes are all volunteers."),
        ("Het geld dat we verdienen met de verkoop gaat naar een goed doel.", "The money we earn from sales goes to a charity."),
        ("Elk jaar kiezen we een ander goed doel.", "Every year we choose a different charity."),
        ("Het goede doel is dit jaar kinderboerderij Het bokje.", "The charity this year is children's farm Het bokje."),
        ("Gooi ze niet weg.", "Do not throw them away."),
        ("Geef de spullen aan ons.", "Give the things to us."),
        ("Koop het bij ons.", "Buy it from us."),
    ],
    "Ziekmelding": [
        ("U meldt u telefonisch ziek bij uw werkgever.", "You report sick to your employer by phone."),
        ("Dit doet u zo snel mogelijk, maar uiterlijk op het tijdstip dat uw werkdag begint.", "You do this as soon as possible, but no later than the time your workday begins."),
        ("Als uw werkdag normaal bijvoorbeeld om 9 uur begint, meldt u zich uiterlijk om 9 uur ziek.", "If your workday normally starts at 9 o'clock, for example, you report sick by 9 o'clock at the latest."),
        ("Wordt u onder werktijd ziek, dan meldt u dit meteen.", "If you become ill during working hours, you report this immediately."),
        ("In ieder geval voordat u naar huis gaat.", "In any case before you go home."),
        ("Waar hebt u last van?", "What symptoms do you have?"),
        ("Wat gaat u doen om zo snel mogelijk beter te worden?", "What are you going to do to get better as quickly as possible?"),
        ("Wanneer kunt u weer werken, denkt u?", "When do you think you can work again?"),
        ("Moeten uw collega's werk van u overnemen?", "Do your colleagues need to take over work from you?"),
        ("Dit zijn allemaal dingen die uw werkgever moet weten.", "These are all things your employer needs to know."),
        ("Ook is het belangrijk dat uw werkgever u kan bereiken.", "It is also important that your employer can reach you."),
        ("U spreekt tijdens het gesprek ook af wanneer u elkaar weer spreekt.", "During the conversation, you also agree when you will speak to each other again."),
        ("U hebt recht op uw privacy.", "You have a right to your privacy."),
        ("U hoeft geen medische gegevens te geven.", "You do not have to give medical information."),
        ("Als u priveproblemen hebt, hoeft u daar niets over te vertellen.", "If you have private problems, you do not have to say anything about them."),
        ("U moet wel vertellen waarom u niet kunt komen werken.", "You must say why you cannot come to work."),
        ("U kunt zeggen dat u om medische redenen of priveredenen niet kunt komen werken.", "You can say that you cannot come to work for medical or private reasons."),
        ("Meer hoeft u niet te zeggen.", "You do not have to say more."),
    ],
}

EXTRA_ITEMS = [
    ("hebben", "to have", "verb", 5, "Als je nog vragen hebt, kun je bellen met Charlotte."),
    ("zijn", "to be", "verb", 2, "De start en de finish zijn op het Dorpsplein."),
    ("kunnen", "can / to be able to", "verb", 3, "Dan kunt u gebruikmaken van onze transportservice."),
    ("moeten", "must / to have to", "verb", 6, "U moet zelf uw brood meenemen."),
    ("willen", "to want / would like", "verb", 3, "Hebt u meubels gezien die u wilt kopen?"),
    ("jij / je", "you (informal)", "pronoun", 4, "Je kunt je tot 2 mei bij Ingmar aanmelden."),
    ("u", "you (formal)", "pronoun", 2, "Wij willen u met deze brief informatie geven."),
    ("uw", "your (formal)", "pronoun", 2, "Wij vragen u daarom uw auto weg te halen."),
    ("wij / we", "we", "pronoun", 2, "Wij willen u met deze brief informatie geven."),
    ("hij", "he", "pronoun", 1, "Wat moet hij volgens de tekst het eerste doen?"),
    ("zij / ze", "she / they", "pronoun", 6, "Zij doet samen met Mo de boodschappen."),
    ("gebruikmaken van", "to make use of", "phrase", 3, "Dan kunt u gebruikmaken van onze transportservice."),
    ("zin hebben in", "to feel like / want to", "phrase", 2, "Als u daar zin in heeft."),
    ("op tijd", "on time", "phrase", 6, "Dan kunnen we op tijd beginnen."),
    ("aan iemand uitleggen", "to explain to someone", "phrase", 1, "Leg aan iemand anders uit wat u hebt gelezen."),
    ("last hebben van", "to be bothered by / suffer from", "phrase", 2, "We hopen dat u weinig last hebt van de wedstrijd."),
    ("mee doen aan", "to take part in", "phrase", 2, "Ongeveer 500 hardlopers doen mee aan de hardloopwedstrijd."),
    ("weg halen", "to remove / take away", "phrase", 2, "Wij vragen u uw auto weg te halen."),
    ("zich aanmelden", "to register / sign up", "phrase", 4, "Je kunt je tot 2 mei bij Ingmar aanmelden."),
    ("doorgeven aan", "to pass on to", "phrase", 6, "Wilt u dit dan doorgeven aan Marie?"),
    ("recht hebben op", "to have a right to", "phrase", 10, "U hebt recht op uw privacy."),
    ("Wat moet hij doen?", "What must he do?", "question", 1, "Wat moet hij volgens de tekst het eerste doen?"),
    ("Wanneer kan je ...?", "When can you ...?", "question", 1, "Wanneer kan je volgens de tekst het beste leren?"),
    ("Waarom krijgen ...?", "Why do ... receive ...?", "question", 2, "Waarom krijgen de dorpsbewoners deze brief?"),
    ("Aan wie moet ze dat vragen?", "Whom should she ask that?", "question", 4, "Aan wie moet ze dat vragen?"),
    ("Welke cursus is het meest geschikt?", "Which course is the most suitable?", "question", 8, "Welke cursus is het meest geschikt?"),
    ("modal verbs: moeten / kunnen / willen", "modal verbs: must / can / want", "grammar", 1, "Wat moet hij doen? U kunt kiezen. Wij willen u vertellen."),
    ("separable verbs", "separable verbs", "grammar", 2, "weghalen, aanmelden, ophalen, meenemen"),
    ("time with om / half", "telling time with om and half", "grammar", 4, "om half 11, om half 8, om 9 uur"),
    ("negation: niet / geen", "negation with not / no", "grammar", 6, "niet gebruiken, geen vlees, geen medische gegevens"),
    ("superlative: het beste / het meest", "superlative forms", "grammar", 1, "het beste leren, het meest geschikt"),
    ("hebben forms", "hebben: heb / hebt / heeft / had / gehad", "grammar", 5, "ik heb, jij/u hebt, hij heeft, verleden: had, voltooid deelwoord: gehad"),
    ("jij / je / u", "informal you / weak you / formal you", "grammar", 4, "jij is stressed, je is common/unstressed, u is polite/formal"),
]

BEGINNER_ITEMS = [
    ("te", "to / too", "preposition", 1),
    ("aan", "to / at / on", "preposition", 1),
    ("op", "on / at", "preposition", 1),
    ("in", "in", "preposition", 1),
    ("naar", "to / toward", "preposition", 2),
    ("bij", "at / with / near", "preposition", 3),
    ("voor", "for / before", "preposition", 2),
    ("van", "of / from", "preposition", 2),
    ("met", "with", "preposition", 2),
    ("tot", "until / to", "preposition", 1),
    ("over", "about / over", "preposition", 2),
    ("door", "by / through", "preposition", 7),
    ("uit", "out / from", "preposition", 1),
    ("om", "at / around / in order to", "preposition", 4),
    ("als", "if / when / as", "conjunction", 1),
    ("dat", "that", "conjunction", 1),
    ("dan", "then / than", "adverb", 1),
    ("daarom", "therefore", "adverb", 2),
    ("daarna", "after that", "adverb", 1),
    ("eerst", "first", "adverb", 1),
    ("weer", "again", "adverb", 1),
    ("ook", "also / too", "adverb", 2),
    ("wel", "indeed / does", "adverb", 5),
    ("nog", "still / yet", "adverb", 2),
    ("niet", "not", "adverb", 1),
    ("geen", "no / not any", "adverb", 2),
    ("waar", "where", "question", 5),
    ("wat", "what", "question", 1),
    ("wanneer", "when", "question", 1),
    ("waarom", "why", "question", 2),
    ("welke", "which", "question", 8),
    ("hoe", "how", "question", 1),
    ("hoeveel", "how much / how many", "question", 3),
    ("wie", "who", "question", 4),
    ("goed", "good / well", "adjective", 1),
    ("beter", "better", "adjective", 1),
    ("beste", "best", "adjective", 1),
    ("belangrijk", "important", "adjective", 1),
    ("jaarlijkse", "annual", "adjective", 2),
    ("veilig", "safe", "adjective", 2),
    ("geldig", "valid", "adjective", 3),
    ("extra", "extra", "adjective", 4),
    ("nat", "wet", "adjective", 4),
    ("koud", "cold", "adjective", 4),
    ("gele", "yellow", "adjective", 5),
    ("zonnige", "sunny", "adjective", 6),
    ("geschikt", "suitable", "adjective", 8),
    ("kapot", "broken", "adjective", 9),
    ("gratis", "free", "adjective", 9),
    ("telefonisch", "by phone", "adjective", 10),
    ("medische", "medical", "adjective", 10),
    ("prive", "private", "adjective", 10),
    ("morgen", "tomorrow / morning", "time", 5),
    ("vandaag", "today", "time", 6),
    ("vrijdag", "Friday", "time", 4),
    ("zaterdag", "Saturday", "time", 2),
    ("juni", "June", "time", 2),
    ("juli", "July", "time", 6),
    ("mei", "May", "time", 4),
    ("uur", "hour / o'clock", "time", 3),
    ("half", "half", "time", 4),
    ("vanaf", "from / starting at", "time", 3),
    ("uiterlijk", "at the latest", "time", 10),
    ("een", "one / a", "number", 1),
    ("twee", "two", "number", 3),
    ("drie", "three", "number", 7),
    ("vier", "four", "number", 8),
    ("vijf", "five", "number", 3),
    ("zes", "six", "number", 8),
    ("persoon", "person", "noun", 6),
    ("manier", "way / manner", "noun", 1),
    ("tips", "tips", "noun", 1),
    ("planning", "planning / plan", "noun", 1),
    ("informatie", "information", "noun", 1),
    ("pauze", "break", "noun", 1),
    ("omgeving", "environment", "noun", 1),
    ("inhoud", "content", "noun", 1),
    ("bewoners", "residents", "noun", 2),
    ("hardloopwedstrijd", "running race", "noun", 2),
    ("verkeer", "traffic", "noun", 2),
    ("hardlopers", "runners", "noun", 2),
    ("overlast", "inconvenience", "noun", 2),
    ("medewerking", "cooperation", "noun", 2),
    ("meubels", "furniture", "noun", 3),
    ("bestelling", "order", "noun", 3),
    ("bezorging", "delivery", "noun", 3),
    ("begane grond", "ground floor", "noun", 3),
    ("verdieping", "floor", "noun", 3),
    ("klantenservice", "customer service", "noun", 3),
    ("kleding", "clothes", "noun", 4),
    ("handdoeken", "towels", "noun", 4),
    ("zwemkleding", "swimwear", "noun", 4),
    ("personeelsuitje", "company outing", "noun", 4),
    ("portier", "porter / doorman", "noun", 5),
    ("rugtas", "backpack", "noun", 5),
    ("rits", "zipper", "noun", 5),
    ("portemonnee", "wallet", "noun", 5),
    ("sportdag", "sports day", "noun", 6),
    ("veld", "field", "noun", 6),
    ("tennistoernooi", "tennis tournament", "noun", 6),
    ("voetbaltoernooi", "football tournament", "noun", 6),
    ("volleybalwedstrijd", "volleyball match", "noun", 6),
    ("kleedkamers", "changing rooms", "noun", 6),
    ("boodschappen", "shopping / groceries", "noun", 6),
    ("bruiloft", "wedding", "noun", 7),
    ("feestcommissie", "party committee", "noun", 7),
    ("bruidspaar", "bridal couple", "noun", 7),
    ("verrassing", "surprise", "noun", 7),
    ("ongeluk", "accident", "noun", 8),
    ("bloedneus", "nosebleed", "noun", 8),
    ("brandwond", "burn", "noun", 8),
    ("hartstilstand", "cardiac arrest", "noun", 8),
    ("ademstilstand", "respiratory arrest", "noun", 8),
    ("ouders", "parents", "noun", 8),
    ("verzorgers", "caregivers", "noun", 8),
    ("onderwijs", "education", "noun", 8),
    ("spullen", "things / items", "noun", 9),
    ("tijdschriften", "magazines", "noun", 9),
    ("apparaten", "appliances / devices", "noun", 9),
    ("vrijwilligers", "volunteers", "noun", 9),
    ("winst", "profit", "noun", 9),
    ("verkoop", "sale / sales", "noun", 9),
    ("ziekmelding", "sick report", "noun", 10),
    ("werkgever", "employer", "noun", 10),
    ("werkdag", "workday", "noun", 10),
    ("klachten", "complaints / symptoms", "noun", 10),
    ("privacy", "privacy", "noun", 10),
    ("gegevens", "data / information", "noun", 10),
    ("redenen", "reasons", "noun", 10),
    ("beginnen", "to begin / start", "verb", 1),
    ("onthouden", "to remember", "verb", 1),
    ("nadenken", "to think about", "verb", 1),
    ("uitleggen", "to explain", "verb", 1),
    ("begrijpen", "to understand", "verb", 1),
    ("meedoen", "to take part", "verb", 2),
    ("afsluiten", "to close off", "verb", 2),
    ("weghalen", "to remove / take away", "verb", 2),
    ("wegslepen", "to tow away", "verb", 2),
    ("bezorgen", "to deliver", "verb", 3),
    ("thuisbezorgen", "to deliver to the home", "verb", 3),
    ("aanmelden", "to register / sign up", "verb", 4),
    ("ophalen", "to pick up", "verb", 5),
    ("doorsturen", "to forward / send on", "verb", 5),
    ("doorgeven", "to pass on", "verb", 6),
    ("aantrekken", "to put on", "verb", 6),
    ("oprichten", "to set up / establish", "verb", 7),
    ("aankruisen", "to tick / check", "verb", 7),
    ("reanimeren", "to resuscitate", "verb", 8),
    ("redden", "to save", "verb", 8),
    ("snijden", "to cut", "verb", 8),
    ("controleren", "to check", "verb", 9),
    ("verkopen", "to sell", "verb", 9),
    ("afleveren", "to deliver", "verb", 9),
    ("verdienen", "to earn", "verb", 9),
    ("melden", "to report", "verb", 10),
    ("bereiken", "to reach", "verb", 10),
    ("overnemen", "to take over", "verb", 10),
]

VERB_GRAMMAR_OVERRIDES = {
    "hebben": [("ik", "heb"), ("jij/u", "hebt"), ("hij/zij/het", "heeft"), ("wij/jullie/zij", "hebben"), ("verleden", "had"), ("verleden mv", "hadden"), ("voltooid dw", "hebben gehad")],
    "zijn": [("ik", "ben"), ("jij/u", "bent"), ("hij/zij/het", "is"), ("wij/jullie/zij", "zijn"), ("verleden", "was"), ("verleden mv", "waren"), ("voltooid dw", "zijn geweest")],
    "kunnen": [("ik", "kan"), ("jij/u", "kunt / kan"), ("hij/zij/het", "kan"), ("wij/jullie/zij", "kunnen"), ("verleden", "kon"), ("verleden mv", "konden"), ("voltooid dw", "hebben gekund")],
    "moeten": [("ik", "moet"), ("jij/u", "moet"), ("hij/zij/het", "moet"), ("wij/jullie/zij", "moeten"), ("verleden", "moest"), ("verleden mv", "moesten"), ("voltooid dw", "hebben gemoeten")],
    "willen": [("ik", "wil"), ("jij/u", "wilt / wil"), ("hij/zij/het", "wil"), ("wij/jullie/zij", "willen"), ("verleden", "wilde / wou"), ("verleden mv", "wilden / wouden"), ("voltooid dw", "hebben gewild")],
    "leren": [("ik", "leer"), ("jij/u", "leert"), ("hij/zij/het", "leert"), ("wij/jullie/zij", "leren"), ("verleden", "leerde"), ("verleden mv", "leerden"), ("voltooid dw", "hebben geleerd")],
}

FORCE_KEEP = {
    "leren", "planning", "pauze", "omgeving", "inhoud", "tekst", "informatie", "examen",
    "bewoners", "dorp", "brief", "wedstrijd", "verkeer", "hardlopers", "route",
    "meubels", "bestelling", "bezorging", "verdieping", "lift", "klantenservice",
    "bedrijf", "kleding", "boot", "eten", "vragen", "tas", "bureau", "rugtas", "rits",
    "laptop", "telefoon", "portemonnee", "sportdag", "veld", "lunchpauze", "kinderen",
    "kleedkamers", "barbecue", "bruiloft", "feestcommissie", "cadeau", "bruidspaar",
    "verrassing", "ongeluk", "cursus", "bijeenkomst", "diploma", "ouders", "onderwijs",
    "spullen", "winkel", "winst", "vrijwilligers", "verkoop", "ziekmelding",
    "werkgever", "werkdag", "privacy", "redenen", "collega's",
    "beginnen", "maken", "lezen", "onthouden", "zoeken", "nemen", "denken", "uitleggen",
    "begrijpen", "geven", "vertellen", "hopen", "komen", "kijken", "sluiten", "vragen",
    "betalen", "weten", "bellen", "wonen", "gaan", "wachten", "meenemen", "aanmelden",
    "ophalen", "brengen", "vinden", "kiezen", "zorgen", "gebruiken", "aantrekken",
    "oprichten", "huren", "meedoen", "redden", "helpen", "volgen", "verkopen",
    "controleren", "testen", "proberen", "verdienen", "melden", "werken", "bereiken",
}

COMMON_SKIP = {
    "mock", "exam",
}

TOKEN_SKIP = {
    "jamie", "noa", "piet", "jansen", "gaston", "modibo", "thérèse", "sabrina",
    "ingmar", "charlotte", "suzanne", "halima", "nadia", "richard", "william",
    "david", "elise", "myra", "aylin", "ronald", "bartjes", "john", "felicity",
    "jaime", "utrecht", "amsterdam", "dorpsplein", "dorpsstraat", "bergsebaan",
    "flamingostraat", "rhijnauwen", "rijnstroom", "vissersplein", "abrahamslaan",
    "groene", "cirkel", "bokje",
}


def clean_text(text):
    text = text.replace("\u2028", "\n").replace("\xa0", " ")
    text = text.replace("’", "'").replace("‘", "'").replace("–", "-")
    text = re.sub(r"\+\+([^+]+)\+\+", r"\1", text)
    text = re.sub(r"\*\*([^*]+)\*\*", r"\1", text)
    text = re.sub(r"\s+", " ", text)
    return text.strip()


def strip_md(line):
    line = line.replace("\u2028", " ").replace("\xa0", " ")
    line = re.sub(r"!\[[^\]]*\]\([^)]+\)", " ", line)
    line = re.sub(r"\+\+([^+]+)\+\+", r"\1", line)
    line = re.sub(r"\*\*([^*]+)\*\*", r"\1", line)
    line = re.sub(r"#+\s*", "", line)
    line = re.sub(r"\|", " ", line)
    line = re.sub(r"\s+", " ", line)
    return line.strip()


def sentence_gloss(sentence):
    mini = {
        "u": "you (formal)", "je": "you", "jij": "you", "wij": "we", "we": "we",
        "moet": "must", "moeten": "must", "kunt": "can", "kan": "can", "wil": "want",
        "wilt": "want", "willen": "want", "hebt": "have", "heeft": "has", "zijn": "are",
        "is": "is", "naar": "to", "bij": "at/with", "voor": "for/before", "van": "of/from",
        "met": "with", "op": "on/at", "aan": "to/at", "in": "in", "om": "at/in order to",
        "tot": "until", "vanaf": "from", "als": "if/when", "dan": "then", "waar": "where",
        "wanneer": "when", "waarom": "why", "wat": "what", "welke": "which", "hoe": "how",
        "niet": "not", "geen": "no/not any", "ook": "also", "weer": "again", "daarom": "therefore",
        "afspraak": "appointment", "cursus": "course", "werk": "work", "winkel": "store",
        "les": "lesson", "lessen": "lessons", "brief": "letter", "e-mail": "email",
        "vragen": "questions/ask", "bellen": "call", "werken": "work", "leren": "learn",
        "helpen": "help", "informatie": "information", "gratis": "free", "ziek": "sick",
        "harry": "Harry", "krijgt": "gets", "krijgen": "get", "mooi": "beautiful",
        "cadeau": "gift", "ons": "us", "allemaal": "all", "ze": "she/they",
        "was": "was", "handboek": "manual", "tuinieren": "gardening", "lezen": "reading",
        "snijden": "cut", "vlees": "meat", "eten": "eat", "beter": "better",
    }
    try:
        if not hasattr(sentence_gloss, "_old_words"):
            sentence_gloss._old_words = json.loads(OLD_WORDS.read_text())
        for item in sentence_gloss._old_words:
            key = normalize_term(item.get("nl", ""))
            en = re.sub(r"^(the|a|an)\s+", "", item.get("en", "").strip(), flags=re.I)
            if key and en and key not in mini:
                mini[key] = en
    except Exception:
        pass

    pieces = []
    for raw in re.findall(r"[A-Za-zÀ-ÿ']+|[0-9]+(?:[.:,][0-9]+)?|[.!?]", sentence):
        low = raw.lower().strip("'")
        if low in {".", "!", "?"}:
            if pieces and not pieces[-1].endswith((".", "!", "?")):
                pieces[-1] += low
            continue
        if low in {"de", "het"}:
            pieces.append("the")
        elif low == "een":
            pieces.append("a")
        elif low in mini:
            pieces.append(mini[low])
        elif raw[:1].isupper():
            pieces.append(raw)
    # Do not emit guessed translations into learner-facing data. If a sentence
    # is not present in the reviewed translation source, leave English blank.
    return ""


def looks_like_question_or_instruction(line):
    if not line:
        return True
    if line in {"Lees eerst de vraag.", "Lees daarna de tekst."}:
        return True
    return False


def auto_exam_rows(start_les=11):
    if not EXTRA_SOURCE_MD.exists():
        return []
    rows = []
    current_exam = 2
    current = None

    def flush():
        nonlocal current
        if not current:
            return
        sentences = []
        seen = set()
        for raw in current["lines"]:
            line = strip_md(raw)
            if not line or re.match(r"^-+$", line) or re.match(r"^[| :.-]+$", line):
                continue
            if looks_like_question_or_instruction(line):
                continue
            chunks = re.split(r"(?<=[.!?])\s+", line)
            for chunk in chunks:
                chunk = clean_text(chunk)
                if len(chunk) < 10 or looks_like_question_or_instruction(chunk):
                    continue
                if chunk.lower() in seen:
                    continue
                seen.add(chunk.lower())
                sentences.append({"nl": chunk, "en": sentence_gloss(chunk)})
        if sentences:
            idx = start_les + len(rows)
            rows.append({
                "id": f"exam{current['exam']}-{len(rows)+1}",
                "les": idx,
                "exam": current["exam"],
                "title": current["title"],
                "sentences": sentences,
            })
        current = None

    for raw in EXTRA_SOURCE_MD.read_text().splitlines():
        line = strip_md(raw)
        line_match = line.replace("’", "'").replace("‘", "'")
        m_exam = re.match(r"exam\s+(\d+)", line, re.I)
        if m_exam:
            flush()
            current_exam = int(m_exam.group(1))
            continue
        is_title = False
        title = line
        for pat in AUTO_TITLE_PATTERNS:
            if line_match.startswith(pat):
                is_title = True
                title = pat.replace("WERKROOSTER HOTEL", "Werkrooster hotel")
                if pat == "Beste collega":
                    title = "Beste collega's"
                break
        if is_title and title not in SUBHEADINGS:
            flush()
            current = {"exam": current_exam, "title": title[:64], "lines": []}
            if line != title:
                current["lines"].append(line)
            continue
        if current:
            current["lines"].append(raw)
    flush()
    return rows


def updated_exam_rows():
    if not UPDATED_SOURCE_MD.exists():
        return []
    rows = []
    current_exam = None
    block = None

    def clean_title(line):
        line = strip_md(line).strip("| ")
        line = re.sub(r"^(Onderwerp|Betreft|Aan):\s*", "", line, flags=re.I)
        line = re.sub(r"^#+\s*", "", line)
        return clean_text(line).strip(" .")

    def title_from(lines, exam, index):
        cleaned = [clean_title(x) for x in lines]
        cleaned = [x for x in cleaned if x]
        for raw in cleaned:
            for pat in AUTO_TITLE_PATTERNS:
                if raw.replace("’", "'").replace("‘", "'").startswith(pat):
                    return pat.title() if pat.isupper() else pat
        for raw in cleaned:
            if raw.lower().startswith("onderwerp:"):
                return clean_title(raw)
        for raw in cleaned[:10]:
            low = raw.lower()
            if low in {"lees eerst de vraag.", "lees daarna de tekst."}:
                continue
            if raw in SUBHEADINGS:
                continue
            if low.startswith(("beste ", "hoi ", "dag ", "geachte ", "met vriendelijke", "groetjes", "namens")):
                continue
            if 3 <= len(raw) <= 80 and not raw.endswith("?") and not re.match(r"^\d+\.?$", raw):
                return raw
        return f"Exam {exam} article {index}"

    def flush():
        nonlocal block
        if not block or not block.get("lines"):
            block = None
            return
        exam = block["exam"]
        exam_index = sum(1 for r in rows if r["exam"] == exam) + 1
        title = title_from(block["lines"], exam, exam_index)
        label = f"{exam}.{exam_index}"
        sentences = []
        seen = set()
        for raw in block["lines"]:
            line = strip_md(raw)
            if not line or re.match(r"^-+$", line) or re.match(r"^[| :.-]+$", line):
                continue
            if line in {"Lees eerst de vraag.", "Lees daarna de tekst."}:
                continue
            if line in SUBHEADINGS and len(line) < 32:
                continue
            line = re.sub(r"^\d+\.\s*", "", line)
            chunks = re.split(r"(?<=[.!?])\s+", line)
            for chunk in chunks:
                chunk = clean_text(chunk)
                chunk = re.sub(r"^\d+\.\s*", "", chunk).strip()
                if len(chunk) < 8:
                    continue
                key = chunk.lower()
                if key in seen:
                    continue
                seen.add(key)
                sentences.append({"nl": chunk, "en": translated_sentence_map().get(chunk) or sentence_gloss(chunk)})
        if sentences:
            rows.append({
                "id": f"exam{exam}-{exam_index}",
                "les": len(rows) + 1,
                "exam": exam,
                "examIndex": exam_index,
                "label": label,
                "title": f"{label} {title}",
                "rawTitle": title,
                "sentences": sentences,
            })
        block = None

    lines = UPDATED_SOURCE_MD.read_text().splitlines()
    after_prompt = False
    for raw in lines:
        line = strip_md(raw)
        m_exam = re.match(r"#?\s*exam\s+(\d+)\s*$", line, re.I)
        if m_exam:
            flush()
            current_exam = int(m_exam.group(1))
            after_prompt = False
            continue
        if current_exam is None:
            continue
        if current_exam == 2:
            title_candidate = clean_title(line)
            title_match = any(title_candidate.replace("’", "'").replace("‘", "'").startswith(pat) for pat in AUTO_TITLE_PATTERNS)
            if title_match and title_candidate not in SUBHEADINGS:
                flush()
                block = {"exam": current_exam, "lines": [raw]}
                after_prompt = False
                continue
        if line == "Lees eerst de vraag.":
            flush()
            after_prompt = True
            continue
        if after_prompt and line == "Lees daarna de tekst.":
            block = {"exam": current_exam, "lines": []}
            after_prompt = False
            continue
        if block is not None:
            block["lines"].append(raw)
    flush()
    return rows


def word_key(word):
    return re.sub(r"^(de|het|een)\s+", "", word["nl"].lower()).strip()


def load_old_words():
    old = json.loads(OLD_WORDS.read_text())
    by = {}
    for item in old:
        key = word_key(item)
        if key and key not in by:
            by[key] = item
        if item.get("nl"):
            by[item["nl"].lower()] = item
    return by


def article_rows():
    return [
        {
            "id": f"exam1-{i + 1}",
            "les": i + 1,
            "title": title,
            "sentences": [
                {"nl": nl, "en": en}
                for nl, en in pairs
            ],
        }
        for i, (title, pairs) in enumerate(ARTICLE_TRANSLATIONS.items())
    ]


def exam1_question_rows(start_les):
    if not SOURCE_MD.exists():
        return []
    questions = []
    seen = set()
    for raw in SOURCE_MD.read_text().splitlines():
        line = strip_md(raw)
        if not line or looks_like_question_or_instruction(line):
            continue
        chunks = re.split(r"(?<=[.!?])\s+", line)
        for chunk in chunks:
            chunk = clean_text(chunk)
            if len(chunk) < 10 or not chunk.endswith("?"):
                continue
            key = chunk.lower()
            if key in seen:
                continue
            seen.add(key)
            questions.append({"nl": chunk, "en": sentence_gloss(chunk)})
    if not questions:
        return []
    return [{
        "id": "exam1-questions",
        "les": start_les,
        "exam": 1,
        "title": "Exam 1 questions",
        "sentences": questions,
    }]


def source_tokens():
    text = clean_text("\n".join(p.read_text() for p in SOURCE_FILES))
    words = re.findall(r"[A-Za-zÀ-ÿ']+", text.lower())
    out = OrderedDict()
    for w in words:
        w = w.strip("'")
        if len(w) < 2 or w in COMMON_SKIP or w in TOKEN_SKIP:
            continue
        out[w] = True
    return list(out.keys())


def source_sentences():
    sentences = []
    source = "\n".join(p.read_text() for p in SOURCE_FILES)
    source = source.replace("\u2028", "\n").replace("\xa0", " ")
    source = re.sub(r"[|]", " ", source)
    source = re.sub(r"[*_`#>+-]", " ", source)
    source = re.sub(r"\+\+([^+]+)\+\+", r"\1", source)
    for line in source.splitlines():
        line = clean_text(line)
        if not line or re.fullmatch(r"\d+\.?", line) or re.match(r"^[|:-]+$", line):
            continue
        for sent in re.split(r"(?<=[.!?])\s+", line):
            sent = clean_text(sent)
            if len(sent) < 2:
                continue
            sentences.append(sent)
    return sentences


def translated_sentence_map():
    translations = {}
    for pairs in ARTICLE_TRANSLATIONS.values():
        for nl, en in pairs:
            translations[clean_text(nl)] = en
    return translations


def source_sentence_examples():
    examples = {}
    translations = translated_sentence_map()
    for sent in source_sentences():
        fallback_en = translations.get(sent) or sentence_gloss(sent)
        for token in re.findall(r"[A-Za-zÀ-ÿ']+", sent.lower()):
            token = token.strip("'")
            if len(token) >= 2 and token not in COMMON_SKIP and token not in examples:
                examples[token] = {"nl": sent, "en": fallback_en}
    return examples


def normalize_term(text):
    return re.sub(r"^(de|het|een)\s+", "", (text or "").lower()).strip(" .,!?:;()[]'\"")


def find_source_example(nl, source_examples, source_sents):
    normalized = normalize_term(nl)
    candidates = [normalized]
    candidates.extend(normalize_term(part) for part in re.split(r"\s*/\s*", nl))
    candidates = [c for c in candidates if c and "..." not in c and not c.endswith("?")]

    translations = translated_sentence_map()
    for candidate in candidates:
        if candidate in source_examples:
            return source_examples[candidate]

    for candidate in candidates:
        words = [w for w in re.findall(r"[a-zà-ÿ']+", candidate.lower()) if len(w) >= 2]
        if not words:
            continue
        pattern = re.compile(r"\b" + r"\b.*\b".join(re.escape(w) for w in words[:3]) + r"\b", re.I)
        for sent in source_sents:
            if pattern.search(sent):
                return {"nl": sent, "en": translations.get(sent) or sentence_gloss(sent)}
    return None


def clone_word(item, les, token=None, source_examples=None):
    ex = (source_examples or {}).get(token or "") or {}
    nl = item.get("nl", "")
    grammar = item.get("grammar")
    normalized = word_key({"nl": nl}) if nl else ""
    if normalized in VERB_GRAMMAR_OVERRIDES:
        grammar = {
            "kind": "verb",
            "forms": [{"label": label, "nl": form} for label, form in VERB_GRAMMAR_OVERRIDES[normalized]]
        }
    return {
        "nl": item.get("nl", ""),
        "en": item.get("en", ""),
        "ipa": item.get("ipa", ""),
        "pos": item.get("pos") or "other",
        "les": les,
        "examples": {
            "a0": ex or {"nl": item.get("nl", ""), "en": item.get("en", "")},
            "a1": ex or {"nl": item.get("nl", ""), "en": item.get("en", "")},
            "a2": ex or {"nl": item.get("nl", ""), "en": item.get("en", "")},
        },
        "grammar": grammar,
        "source": "mock exams",
        "deck": "ar",
    }


def make_extra(nl, en, pos, les, example):
    grammar = None
    if pos == "grammar":
        grammar = {"kind": "grammar", "forms": [{"label": "pattern", "nl": example}]}
    elif nl in VERB_GRAMMAR_OVERRIDES:
        grammar = {
            "kind": "verb",
            "forms": [{"label": label, "nl": form} for label, form in VERB_GRAMMAR_OVERRIDES[nl]]
        }
    return {
        "nl": nl,
        "en": en,
        "ipa": "",
        "pos": pos,
        "les": les,
        "examples": {
            "a0": {"nl": example, "en": en},
            "a1": {"nl": example, "en": en},
            "a2": {"nl": example, "en": en},
        },
        "grammar": grammar,
        "source": "automatic pattern extraction",
        "deck": "ar",
    }


def common_words():
    words = json.loads(OLD_WORDS.read_text())
    examples = source_sentence_examples()
    source_sents = source_sentences()
    out = []
    for i, item in enumerate(words):
        cloned = dict(item)
        exam_ex = find_source_example(cloned.get("nl", ""), examples, source_sents)
        if exam_ex:
            cloned["examExamples"] = {
                "a0": exam_ex,
                "a1": exam_ex,
                "a2": exam_ex,
            }
        cloned["beginnerExamples"] = cloned.get("examples") or {}
        cloned["deck"] = "common"
        cloned["source"] = "1000 common words"
        cloned["_sourceIndex"] = i
        out.append(cloned)
    return out


def build_ar_words():
    old = load_old_words()
    examples = source_sentence_examples()
    source_sents = source_sentences()
    tokens = source_tokens()
    selected = OrderedDict()

    for token in tokens:
        if token not in FORCE_KEEP and token not in old and token not in {x[0] for x in BEGINNER_ITEMS}:
            continue
        item = old.get(token)
        if not item:
            continue
        key = item.get("nl", token).lower()
        if key not in selected:
            selected[key] = clone_word(item, min(10, max(1, len(selected) // 18 + 1)), token, examples)

    for nl, en, pos, les in BEGINNER_ITEMS:
        key = nl.lower()
        if key in selected:
            selected[key]["pos"] = pos
            if selected[key].get("en") in {"", key}:
                selected[key]["en"] = en
            continue
        item = old.get(nl.lower())
        if item:
            cloned = clone_word(item, les, nl.lower(), examples)
            cloned["pos"] = pos if pos else cloned.get("pos", "other")
            if en:
                cloned["en"] = en
            selected[key] = cloned
        else:
            ex = find_source_example(nl, examples, source_sents) or {"nl": nl, "en": en}
            selected[key] = make_extra(nl, en, pos, les, ex["nl"])

    for nl, en, pos, les, example in EXTRA_ITEMS:
        ex = find_source_example(nl, examples, source_sents) or {"nl": example, "en": en}
        selected[nl.lower()] = make_extra(nl, en, pos, les, ex["nl"])

    words = list(selected.values())
    source_articles = updated_exam_rows() or article_rows()
    sent_to_les = {}
    for article in source_articles:
        for sentence in article.get("sentences", []):
            sent_to_les[clean_text(sentence.get("nl", ""))] = article["les"]
    for i, w in enumerate(words):
        example = clean_text(((w.get("examples") or {}).get("a0") or {}).get("nl", ""))
        w["les"] = int(sent_to_les.get(example) or w.get("les") or (i // 18 + 1))
        terms = [normalize_term(w.get("nl", ""))]
        terms.extend(normalize_term(part) for part in re.split(r"\s*/\s*", w.get("nl", "")))
        terms = [t for t in terms if t and "..." not in t and not t.endswith("?")]
        article_les = set()
        for article in source_articles:
            text = " ".join(sentence.get("nl", "") for sentence in article.get("sentences", [])).lower()
            for term in terms:
                parts = [p for p in re.findall(r"[a-zà-ÿ']+", term.lower()) if len(p) >= 2]
                if not parts:
                    continue
                if len(parts) == 1:
                    if re.search(r"\b" + re.escape(parts[0]) + r"\b", text):
                        article_les.add(article["les"])
                        break
                elif all(re.search(r"\b" + re.escape(part) + r"\b", text) for part in parts[:3]):
                    article_les.add(article["les"])
                    break
        w["articleLes"] = sorted(article_les or {w["les"]})
        w["deck"] = "ar"
    return words


def build_words():
    return common_words() + build_ar_words()


def main():
    words = build_words()
    readings = updated_exam_rows()
    if not readings:
        readings = article_rows()
        readings.extend(auto_exam_rows(start_les=len(readings) + 1))
        readings.extend(exam1_question_rows(start_les=len(readings) + 1))
    OUT_WORDS.write_text(json.dumps(words, ensure_ascii=False, indent=2) + "\n")
    OUT_READINGS.write_text(json.dumps(readings, ensure_ascii=False, indent=2) + "\n")
    print(f"wrote {len(words)} cards to {OUT_WORDS}")
    print(f"wrote {len(readings)} readings to {OUT_READINGS}")


if __name__ == "__main__":
    main()
