export interface Therapist {
  id: string;
  name: string;
  tags: string;
  languages?: string[];
  title: string | string[];
  specialties: string[];
  bio: string;
  education: string;
  phone: string;
  email: string;
  image: string;
  website?: string;
  bookingUrl?: string;

}

export const therapists: Therapist[] = [
  {
    id: "eerika-sippel",
    languages: ["fi", "gb"],
    name: "Eerika Sippel",
    tags: ["Lahti", "Seksuaaliterapeutti"],
    title: ["Psykoterapeutti: Pari-, perhe- ja yksilöterapia", "Erityistason seksuaaliterapeutti"],
    specialties: ["Parisuhde", "Seksuaalisuus", "Tunneyhteys", "Kommunikointi"],
    bio:"Tervetuloa pysähtymään parisuhteenne, perheenne tai itsesi äärelle.\n\nSaat minulta tukea ja tilaa pohtia asioita - rauhassa  uusia polkuja etsien. Kohtaan jokaisen asiakkaan lempeästi ja uteliaasti. Minulla on  30  vuoden kokemus perheiden parissa toimimisesta. Aluksi  työskentelin neuvolan terveydenhoitajana ja nykyään toimin dialogisena ja voimavarakeskeisenä pari- ja perhepsykoterapeuttina sekä erityistason seksuaaliterapeuttina.\n\nVastaanottoni sijaitsee Lahden keskustassa vain 10 min kävelymatkan päässä matkakeskuksesta, joten kulkuyhteydet ovat helpot kauempaakin tuleville. Palvelen myös englannin kielellä.\n\nLämpimästi tervetuloa!",
    education: "Dialogis-reflektiivinen pari- ja perhepsykoterapeutti, erityistason seksuaaliterapeutti (NACS), terveydenhoitajan erityispätevyys, seksuaalineuvoja",
    phone: "0407343078",
    email: "eerika.sippel@gmail.com",
    image: "/images/Eerika-Sippel_vari.jpg",
    website: "www.seksuaalineuvonta-Lahti.fi",
    bookingUrl: "http://vello.fi/tmi-eerika-sippel",
  },
  {
    id: "sasu-setala",
    languages: ["fi", "gb"],
    name: "Sasu Setälä",
    tags: ["Helsinki", "Etävastaanotto"],
    title: "Psykoterapeutti: Pari-, perhe- ja yksilöterapia",
    specialties: ["Elämän kriisit", "Addiktiot", "Paniikkihäiriö", "Uusperheen haasteet", "Seksuaalisuuden ongelmat", "Paniikkikohtaus", "Parisuhteen ongelmat", "Elämäntapamuutos"],
    bio: "Hei,\n\nEtsitkö apua kuormittavassa elämäntilanteessa? Tai oletko jäänyt ajatustesi haitalliseen kehään etkä löydä ulos?\n\nOtan vastaan yksilö-, pari- ja perheterapeuttisia psykoterapia-asiakkaita Helsingissä tai etävastaanottona.\n\nVoit tulla vastaanotolleni erilaisten elämänkriisien, esim. ihmissuhdeongelmien, vanhemmuuden tai/ja parisuhteen haasteiden, identiteettiongelmien, työuupumuksen, traumaattisten kokemusten, riippuvuuksien tai vaikkapa ahdistuneisuus- tai masennusoireiden takia.\n\nMinulla on vuosien kokemus mielenterveystyöstä mm. päihdeongelmaisten ja ammattiurheilijoiden kanssa, niin Suomessa kuin ulkomaillakin. Olen toiminut myös eroryhmäohjaajana. Itse olen monilapsisen uusperheen vanhempi.\n\nTyöni viitekehys on ammattikielellä yhdistelmä avoimeen dialogiin pohjaavaa, voimavara- ja ratkaisukeskeistä -, psykofyysistä psykoterapiaa. Viitekehystä tärkeämpää on kuitenkin toimiva yhteistyösuhde välillämme. Minulle on tärkeää kohdata kokemuksesi lämmöllä ja arvostavasti ja pyrin luomaan tilan, jossa on helppo olla oma itsensä. Ammattilaisen kanssa juttelemalla asiat harvemmin enemmän solmuun menevät, etkä jää kanssani yksin.\n\nTervetuloa.",
    education: "Dialogis-reflektiivinen pari- ja perhepsykoterapeutti (ei Kelan korvaamaa kuntoutusterapiaa), pari-ja perheterapeutti, ratkaisukeskeinen lyhytterapeutti, fysioterapeutti",
    phone: "050 5410 234",
    email: "sasu.setala@gmail.com",
    image: "/images/sasu_vari.jpg"
  },
  {
    id: "anne-christine-vikstrom",
    languages: ["fi", "se"],
    name: "Anne-Christine Vikström",
    tags: ["Porvoo", "Dialogi"],
    title: "Psykoterapeutti: Pari-, perhe- ja yksilöterapia",
    specialties: ["Läsnäolo", "Turva", "Dialogi"],
    bio: "Hei! Olet lämpimästi tervetullut ottamaan yhteyttä, jos etsit dialogista ja voimavarakeskeistä keskustelutilaa, jossa on turvaa ja mahdollisuus tutkia sitä, mikä on merkityksellistä juuri nyt. Työskentelen kuunnellen, läsnä ollen ja kunnioittaen sitä, mikä keskustelussa alkaa vähitellen tulla näkyväksi.\n\nTyöni kautta olen kohdannut ihmisiä monenlaisissa elämäntilanteissa, ja olen oppinut, että jokaisella ihmisellä ja jokaisella suhteella on oma tarinansa ja oma tapansa kulkea eteenpäin.\n\nVastaanottotilani sijaitsee Porvoon keskustassa. Palvelen sekä suomeksi että ruotsiksi.\n\nLämpimästi tervetuloa!\n\nHej!\n\nDu är varmt välkommen att ta kontakt om du söker ett dialogiskt och resursfokuserat samtalsutrymme där det finns trygghet och möjlighet att utforska det som känns betydelsefullt just nu. Jag arbetar genom att lyssna, vara närvarande och med respekt för det som gradvis börjar träda fram i samtalet.\n\nGenom mitt arbete har jag mött människor i många olika livssituationer, och jag har lärt mig att varje människa och varje relation har sin egen berättelse och sitt eget sätt att gå vidare.n\nMin mottagning finns i centrala Borgå. Jag erbjuder samtal både på svenska och finska.",
    education: "Perhe- ja paripsykoterapeutti, kognitiivinen lyhytterapeutti, sosiaalityöntekijä / Familje- och parpsykoterapeut,  Kognitiv korttidsterapeut, Socialarbetare",
    phone: "0442379869",
    email: "anci.vikstrom@gmail.com",
    image: "/images/anci1.jpg",
    website: "www.vikstrominterapia.com"

  },
  {
    id: "jenni-wiikla",
    languages: ["fi", "gb"],
    name: "Jenni Wiikla",
    tags: ["Helsinki", "Perheterapia"],
    title: "Psykoterapeutti: Pari-, perhe- ja yksilöterapia",
    specialties: ["Pariterapia", "Perheterapia", "Avoin dialogi"],
    bio: "Olen Jenni Wiikla, pari- ja perhepsykoterapeutti. Olen työskennellyt reilun 10 vuotta kasvatus- ja perheneuvonnassa vahvistaen paris- ja moniskuntien sekä kaikenlaisten perheiden keskinäisiä suhteita. Työskentelytavoiltani olen aktiivinen yhteisen keskustelun mahdollistaja. Tavoitteenani on luoda rauhallinen tila kuulluksi ja kohdatuksi tulemiselle ja etsiä yhdessä sanoja kokemuksille, toiveille ja tarpeille, jotta suhteessa koettu yhteys voisi vahvistua. Voit tulla tapaamiselle yksin tai yhdessä sinulle tärkeiden ihmisten kanssa.\n\nPari- ja perhepsykoterapiassa ei etsitä syyllisiä hankalaan tilanteeseen, vaan tutkitaan yhdessä suhteessa olemista ja etsitään keinoja sekä vahvistaa suhteen toimivia puolia ja katkaista riidan kehiä.",
    education: "Dialogis-reflektiivinen pari- ja perhepsykoterapeutti & valtiotieteen maisteri (sosiologia ja sosiaalityö)\n\nOlen sertifioitunut näissä terapeuttisissa menetelmissä: vuorovaikutushoidot (MIM, HoiLei), ahdistus- ja pelko-oireilun hoito (Coolkids), neuroerityisyys ja käytöksellään oireilevat lapset (ihmeelliset vuodet). Minulla on myös lisäkoulutusta tunnekeskeisestä pari- ja perheterapiasta ja vakauttavasta perhekeskeisestä hoidosta.",
    phone: "",
    email: "jenni.wiikla@gmail.com",
    image: "/images/jenni1.jpg"
  },
  {
    id: "henri-lepola",
    languages: ["fi", "gb"],
    name: "Henri Lepola",
    tags: ["Jämsä", "Tampere", "Seinäjoki", "Etävastaanotto"],
    title: "Psykoterapeutti: Pari-, perhe- ja yksilöterapia",
    specialties: ["Tietoisuustaidot", "Parantava dialogi", "Suhteen hoitaminen"],
    bio: "Hei Sinulle!\n\nTarjoan perhe- ja paripsykoterapiaa vastaanotolla Seinäjoella ja Jämsässä. Mahdollisuus myös etätapaamisiin ja kotikäynteihin myös Tampereen seudulla.\n\nOlen tehnyt työurani sosiaali- ja terveydenhuollon rajapinnoissa mielenterveys- ja päihdetyön, maahanmuuttajatyön sekä lapsiin liittyvien palveluiden ääressä. Nykyisin päivätyöni teen väkivaltatyössä. Koen monipuolisen työ- ja koulutustaustani olevan tärkeä eväs psykoterapiatyössäni.\n\nKäyntisisällöt rakentuvat asiakkaiden tarpeista käsin, mutta kuitenkin suhteessa ammatilliseen arvioon siitä mistä asiakkaat voisivat hyötyä. Työskentelytapani perustuu yhteistyösuhteen rakentumista tukevien ja narratiivisten menetelmien sekä tietoisuustaitoja kehittävien harjoitusten pohjalle.\n\nAsiakkailtani olen usein saanut palautetta rauhallisesta, arvokkaasta ja tasa-arvoisesta yhteistyötavasta. Olen myös usein kuullut käynneillä sanottujen tai koettujen asioiden seurauksena asiakkaan omien kokemusten tai ajatusten liikahtaneen myönteisellä tavalla elämässä eteenpäin.",
    education: "Dialogis-reflektiivinen perhe- ja paripsykoterapeutti, FM & YTM",
    phone: "+358 468037708",
    email: "terapiat@icloud.com",
    image: "/images/henri1.jpg",
    bookingUrl: "http://vello.fi/katkoviivoja"

  }
];