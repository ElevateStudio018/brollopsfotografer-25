import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import nybyggnation from "@/assets/proj-nybyggnation.jpg";
import tillbyggnad from "@/assets/proj-tillbyggnad.jpg";
import renovering from "@/assets/proj-renovering.jpg";
import kok from "@/assets/proj-kok.jpg";
import badrum from "@/assets/proj-badrum.jpg";
import tak from "@/assets/proj-tak.jpg";
import mark from "@/assets/proj-mark.jpg";
import finsnickeri from "@/assets/proj-finsnickeri.jpg";

export const company = {
  name: "Flottsunds Bygg AB",
  city: "Uppsala",
  phoneDisplay: "+46 70 872 21 92",
  phoneHref: "tel:+46708722192",
  email: "info@flottsundsbygg.se",
  founded: 2006,
  employees: 10,
  yearsExperience: 35,
  description:
    "Flottsunds Bygg AB är ett byggföretag som utför byggnadsarbeten i Uppsala och i Uppsalas omnejd. Vi är ett byggföretag med stor kapacitet och vi samarbetar med duktiga och pålitliga underleverantörer. Detta gör att vi kan åta oss totalentreprenader.",
  aboutText:
    "Flottsunds Bygg AB är ett byggföretag med sitt säte i Uppsala. Vi arbetar med byggentreprenader och ROT-arbeten. Vi samarbetar med duktiga och pålitliga underleverantörer och kan på så vis utföra totalentreprenader. Flottsunds Bygg AB är ett byggföretag med över 35 års erfarenhet inom branschen. Vi strävar alltid för att uppnå högsta kvalité samtidigt som vi är flexibla och lyhörda för kundens önskemål. Flottsunds Bygg AB grundades 2006 och har idag cirka 10 anställda. Du är varmt välkommen att kontakta oss!",
  heroImage: heroImg,
  heroVideo: "/__l5e/assets-v1/3fcef296-6b4e-4b08-920f-8841da8f30fb/hero-loop.mp4",
  aboutImage: aboutImg,
  areas: ["Uppsala", "Uppsalas omnejd", "Flottsund", "Sävja", "Gottsunda", "Storvreta"],
  mapEmbed:
    "https://www.google.com/maps?q=Uppsala,Sverige&output=embed",
  mapLink: "https://www.google.com/maps/search/?api=1&query=Uppsala",
};

export type Service = {
  slug: string;
  name: string;
  image: string;
  short: string;
  intro: string;
  body: string[];
  benefits: string[];
};

export const services: Service[] = [
  {
    slug: "nybyggnation",
    name: "Nybyggnation",
    image: nybyggnation,
    short: "Nybyggnation av villor och fritidshus från grund till nyckelfärdigt hem.",
    intro:
      "Vi bygger villor och fritidshus i Uppsala med omnejd, från första spadtaget till nyckelfärdigt hus. Som totalentreprenör håller vi ihop hela projektet åt dig.",
    body: [
      "Att bygga nytt är för de flesta ett av livets största projekt. Vi tar ansvar för helheten så att du kan känna dig trygg genom hela byggtiden. Med över 35 års erfarenhet i branschen vet vi hur ett husbygge planeras, tidsätts och genomförs utan onödiga överraskningar.",
      "Arbetet börjar med ett kostnadsfritt hembesök där vi går igenom dina ritningar, önskemål och förutsättningar på tomten. Därefter lämnar vi en tydlig, fast offert som beskriver vad som ingår, vilka material vi använder och hur tidplanen ser ut.",
      "Vi samarbetar med duktiga och pålitliga underleverantörer inom el, VVS, plåt och ventilation. Det gör att vi kan åta oss totalentreprenader där du bara har en kontaktperson att vända dig till, oavsett vilket moment det gäller.",
      "Under byggtiden håller vi arbetsplatsen ren och säker, vi dokumenterar arbetet löpande och du får kontinuerliga avstämningar. Kvalitet handlar lika mycket om hantverket som om kommunikationen kring det.",
      "Vid slutbesiktning går vi igenom huset tillsammans med dig och åtgärdar eventuella anmärkningar innan vi lämnar över. Målet är alltid ett hus du är stolt över att flytta in i.",
    ],
    benefits: [
      "Totalentreprenad med en kontaktperson",
      "Fast offert innan arbetet startar",
      "Erfarna snickare och pålitliga underleverantörer",
      "Löpande avstämningar och tydlig tidplan",
    ],
  },
  {
    slug: "tillbyggnad-och-utbyggnad",
    name: "Tillbyggnad & Utbyggnad",
    image: tillbyggnad,
    short: "Fler kvadratmeter med en tillbyggnad som smälter ihop med ditt befintliga hus.",
    intro:
      "Behöver familjen mer utrymme? Med en genomtänkt tillbyggnad får du fler kvadratmeter utan att behöva flytta – och ett hus som fortfarande känns helt.",
    body: [
      "En tillbyggnad är ofta det mest kostnadseffektiva sättet att lösa platsbristen hemma. Vi hjälper dig att hitta en lösning som fungerar praktiskt i vardagen och som passar husets arkitektur, tak och fasad.",
      "Vi går igenom förutsättningarna på plats: grund, bärande konstruktioner, anslutningar och hur ljuset faller. Därefter får du en tydlig beskrivning av arbetet och en fast offert.",
      "Vi arbetar vana vid bygglovsprocessen och kan vägleda dig kring vad som krävs för just din tillbyggnad, samt samordna de handlingar och kontroller som behövs.",
      "Under arbetet skyddar vi den befintliga bostaden så att du kan bo kvar med så lite störning som möjligt. Vi håller rent, dammskyddar och planerar de mest ingripande momenten tillsammans med dig.",
      "Resultatet ska aldrig se påklistrat ut. Vi lägger stor omsorg på anslutningar, taklinjer och fasaddetaljer så att till- och utbyggnaden ser ut att alltid ha funnits där.",
    ],
    benefits: [
      "Fler kvadratmeter utan att flytta",
      "Anpassad efter husets uttryck",
      "Hjälp genom bygglovsprocessen",
      "Du kan bo kvar under arbetet",
    ],
  },
  {
    slug: "renovering-och-ombyggnation",
    name: "Renovering & Ombyggnation",
    image: renovering,
    short: "Invändig och utvändig renovering samt ombyggnation av hela bostaden.",
    intro:
      "Vi utför renovering och ombyggnation både invändigt och utvändigt – från enstaka rum till en genomgripande totalrenovering av hela bostaden.",
    body: [
      "En renovering handlar sällan bara om ytskikt. Vi börjar med att förstå hur du vill använda ditt hem och vilka problem du vill lösa, och tittar sedan på konstruktion, fukt, ventilation och planlösning.",
      "Vill du öppna upp mellan kök och vardagsrum, flytta en vägg eller inreda källare och vind? Vi bedömer vad som är bärande, vad som krävs i form av avväxlingar och vad det innebär för tidplanen.",
      "Utvändigt hjälper vi till med fasad, panelbyte, altaner, fönster och dörrar – arbeten som både lyfter husets utseende och skyddar det mot väder och vind under lång tid.",
      "Vi lämnar alltid en fast offert innan arbetet påbörjas så att du vet vad projektet kostar. Tillkommer något oförutsett stämmer vi av med dig innan vi går vidare.",
      "Som privatperson kan du använda rotavdrag på arbetskostnaden. Vi sköter ansökan till Skatteverket och gör avdraget direkt på din faktura.",
    ],
    benefits: [
      "Invändiga och utvändiga arbeten",
      "Fast offert innan start",
      "Rotavdrag hanteras av oss",
      "Erfarna hantverkare i alla moment",
    ],
  },
  {
    slug: "koksrenovering",
    name: "Köksrenovering",
    image: kok,
    short: "Ett nytt kök som fungerar i vardagen – från rivning till färdig snickeridetalj.",
    intro:
      "Köket är husets mest använda rum. Vi renoverar kök i Uppsala med omnejd och tar hand om hela kedjan, från rivning och stomme till färdigmonterad inredning.",
    body: [
      "Vi börjar med hur du lagar mat och lever i köket. Arbetsytor, förvaring, belysning och avstånd mellan diskho, spis och kyl avgör om köket känns skönt att använda varje dag.",
      "Vid en köksrenovering samordnar vi el, VVS och ventilation med våra underleverantörer så att du slipper hålla i flera olika kontakter.",
      "Vi river varsamt, kontrollerar underlag och åtgärdar det som behöver rättas till innan nya ytskikt sätts. Ett rakt och torrt underlag är förutsättningen för ett kök som håller.",
      "Montaget är där hantverket syns. Vi lägger tid på passbitar, socklar, lister och luckjustering så att linjer och fogar blir jämna hela vägen.",
      "Under arbetet håller vi rent och dammskyddar mot övriga rum. Vi planerar också med dig hur du löser matlagningen under de dagar köket är ur funktion.",
      "Rotavdrag gäller för arbetskostnaden och vi sköter ansökan åt dig.",
    ],
    benefits: [
      "Genomtänkt planlösning och förvaring",
      "El, VVS och ventilation samordnas",
      "Noggrant montage och finish",
      "Rotavdrag direkt på fakturan",
    ],
  },
  {
    slug: "badrumsrenovering",
    name: "Badrumsrenovering",
    image: badrum,
    short: "Badrum och tvättstugor renoverade fackmässigt med rätt tätskikt.",
    intro:
      "Ett badrum ska hålla i decennier. Vi renoverar badrum och tvättstugor fackmässigt, med rätt tätskikt, fall och dokumentation.",
    body: [
      "Badrummet är det mest tekniskt krävande rummet i bostaden. Fukt, fall mot brunn och tätskikt måste utföras rätt – annars blir konsekvenserna dyra långt senare.",
      "Vi går igenom rummets förutsättningar, bjälklag, befintliga stammar och ventilation innan vi lämnar offert, så att du får en realistisk bild av omfattningen.",
      "Arbetet utförs enligt gällande branschregler tillsammans med behöriga samarbetspartners inom VVS och el, och du får dokumentation när badrummet är klart.",
      "Vi hjälper dig gärna med val av kakel, klinker, kommod och blandare så att helheten hänger ihop och blir lätt att hålla ren.",
      "Med tydlig tidplan vet du hur länge badrummet är ur bruk, och vi håller övriga bostaden skyddad från damm under rivning.",
      "Rotavdraget gäller även badrumsrenovering och hanteras av oss mot Skatteverket.",
    ],
    benefits: [
      "Fackmässigt tätskikt och dokumentation",
      "Behöriga partners inom VVS och el",
      "Hjälp med material- och designval",
      "Tydlig tidplan för rummet",
    ],
  },
  {
    slug: "takrenovering",
    name: "Takrenovering",
    image: tak,
    short: "Takrenovering och taklyft som skyddar huset i många år framåt.",
    intro:
      "Taket är husets viktigaste skydd. Vi utför takarbeten som takrenovering och taklyft i Uppsala med omnejd.",
    body: [
      "Ett tak som börjat läcka eller tappa material bör åtgärdas innan skadan når konstruktionen. Vi inspekterar takets skick, läkt, underlagspapp och plåtdetaljer innan vi föreslår åtgärd.",
      "Ibland räcker en punktinsats, ibland är omläggning rätt beslut på sikt. Vi är ärliga med vad vi ser och rekommenderar den lösning som är mest hållbar ekonomiskt.",
      "Vid taklyft skapar vi mer takhöjd och ny yta i övervåningen – ett effektivt sätt att få mer boende utan att bygga ut i marknivå.",
      "Vi arbetar med säker ställning och fallskydd, och planerar arbetet efter väder så att huset aldrig står oskyddat i onödan.",
      "Plåtarbeten, hängrännor, stuprör och genomföringar samordnas i samma projekt så att helheten blir tät.",
      "Efter avslutat arbete städar vi tomten noggrant och går igenom resultatet med dig.",
    ],
    benefits: [
      "Inspektion och ärlig rekommendation",
      "Taklyft för mer boyta",
      "Plåt och avvattning i samma projekt",
      "Säkert utförande med ställning",
    ],
  },
  {
    slug: "markarbeten-och-grunder",
    name: "Markarbeten & grunder",
    image: mark,
    short: "Schakt, dränering och grundläggning som ger huset rätt förutsättningar.",
    intro:
      "Allt bygge börjar i marken. Vi utför markarbeten och grundläggning inför nybyggnation, tillbyggnad och dräneringsprojekt.",
    body: [
      "En korrekt utförd grund och dränering är avgörande för husets livslängd. Fel i marken märks först efter flera år, i form av fukt, sättningar och kalla golv.",
      "Vi projekterar utifrån tomtens förutsättningar: markens beskaffenhet, höjdskillnader, vattenavrinning och anslutningar för vatten och avlopp.",
      "Vi utför schakt, fyllning, dränering, isolering och gjutning av platta eller grundmur beroende på vad projektet kräver.",
      "Har du problem med fukt i källaren tittar vi på hela kedjan – dränering, dagvatten, markens lutning och isolering – i stället för att bara åtgärda symptomen.",
      "Vi samordnar maskiner och transporter så att arbetet går snabbt och att tomten återställs prydligt när vi är klara.",
    ],
    benefits: [
      "Schakt, dränering och gjutning",
      "Helhetsgrepp om fuktproblem",
      "Rätt förutsättningar inför bygget",
      "Prydligt återställd tomt",
    ],
  },
  {
    slug: "finsnickeri",
    name: "Finsnickeri",
    image: finsnickeri,
    short: "Platsbyggda lösningar och detaljer som gör hemmet personligt.",
    intro:
      "Platsbyggda bokhyllor, garderober, bänkar och lister – finsnickeri som utnyttjar varje kvadratmeter och lyfter hela rummet.",
    body: [
      "Standardmått passar sällan gamla hus med snedtak, nischer och ojämna väggar. Platsbyggt löser precis de ytor som annars blir outnyttjade.",
      "Vi ritar tillsammans med dig, väljer träslag och ytbehandling och tar fram en lösning som är både vacker och praktisk att använda.",
      "Våra snickare har lång erfarenhet av detaljarbete: fogar, passningar, lister och foder som sitter rakt och känns självklara.",
      "Finsnickeri passar lika bra som avslutning på en större renovering som ett fristående uppdrag i ett enskilt rum.",
      "Vi lämnar fast offert även på mindre snickeriuppdrag så att du vet vad detaljerna kostar.",
    ],
    benefits: [
      "Platsbyggt efter dina mått",
      "Val av träslag och ytbehandling",
      "Erfarna snickare med öga för detaljer",
      "Fast offert även på mindre uppdrag",
    ],
  },
];

export type Project = {
  image: string;
  category: string;
  width: number;
  height: number;
};

export const projects: Project[] = [
  { image: nybyggnation, category: "Nybyggnation", width: 1200, height: 1500 },
  { image: kok, category: "Köksrenovering", width: 1200, height: 1000 },
  { image: badrum, category: "Badrumsrenovering", width: 1200, height: 1500 },
  { image: tillbyggnad, category: "Tillbyggnad", width: 1200, height: 900 },
  { image: renovering, category: "Renovering", width: 1200, height: 1300 },
  { image: tak, category: "Takrenovering", width: 1200, height: 850 },
  { image: mark, category: "Markarbeten", width: 1200, height: 1100 },
  { image: finsnickeri, category: "Finsnickeri", width: 1200, height: 1400 },
];

export const processSteps = [
  {
    title: "Kontakt",
    text: "Du hör av dig via telefon, mejl eller offertformuläret. Vi återkommer snabbt och ställer några frågor om projektet.",
  },
  {
    title: "Kostnadsfritt hembesök",
    text: "Vi kommer hem till dig, tittar på förutsättningarna och går igenom dina önskemål på plats – helt utan kostnad.",
  },
  {
    title: "Fast offert",
    text: "Du får en tydlig offert med fast pris, vad som ingår och en realistisk tidplan innan något arbete påbörjas.",
  },
  {
    title: "Renovering",
    text: "Vi genomför arbetet med egna snickare och pålitliga underleverantörer, håller rent och stämmer av löpande med dig.",
  },
];

export const faq = [
  {
    q: "Vad kostar en renovering?",
    a: "Priset beror på omfattning, materialval och husets förutsättningar. Därför gör vi alltid ett kostnadsfritt hembesök innan vi lämnar en fast offert, så att du vet exakt vad projektet kostar innan vi börjar.",
  },
  {
    q: "Hur fungerar rotavdrag?",
    a: "Som privatperson kan ni vid renovering och tillbyggnad få göra ett avdrag på 30% av arbetskostnaden upp till max 50 000 kr per person. Vi sköter ansökan till Skatteverket och avdraget gör vi direkt på er faktura.",
  },
  {
    q: "Kan ni ta hela projektet som totalentreprenad?",
    a: "Ja. Vi samarbetar med duktiga och pålitliga underleverantörer inom bland annat el, VVS och plåt, vilket gör att vi kan åta oss totalentreprenader. Du har då bara en kontaktperson genom hela projektet.",
  },
  {
    q: "Hur lång tid tar ett projekt?",
    a: "Ett badrum tar oftast några veckor medan en nybyggnation sträcker sig över flera månader. Du får en realistisk tidplan i offerten, och vi säger till i god tid om något påverkar den.",
  },
  {
    q: "Kan vi bo kvar under arbetet?",
    a: "I de flesta renoverings- och tillbyggnadsprojekt går det bra att bo kvar. Vi dammskyddar, håller rent och planerar de mest störande momenten tillsammans med dig.",
  },
  {
    q: "Vilka områden arbetar ni i?",
    a: "Vi utför bygg- och snickeriarbeten i Uppsala och i Uppsalas omnejd.",
  },
  {
    q: "Vad ingår i en fast offert?",
    a: "Offerten beskriver arbetets omfattning, vilka material som ingår, tidplan och pris. Skulle något oförutsett dyka upp under arbetets gång stämmer vi alltid av med dig innan vi går vidare.",
  },
];
