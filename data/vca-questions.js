// VCA-vragen (Basisveiligheid VCA), gebaseerd op de oefenvragen en antwoorden uit het e-book.
// Per vraag: q = vraag, a = juist antwoord, wrong = foute antwoorden, why = uitleg.
// De volgorde van de antwoorden wordt in de quiz telkens geschud.
const VCA_CHAPTERS = [
    {
        nr: 1, title: "Arbeidsomstandigheden en wetgeving", questions: [
            {
                q: "Wat is het algemene doel van de Arbowet?",
                a: "Een zo goed mogelijk arbobeleid (veiligheid, gezondheid, welzijn) en het voorkomen van ziekte door werk",
                wrong: ["Het vastleggen van de minimumlonen per sector", "Het regelen van de maximale werktijden per week", "Het beschermen van het milieu rondom bedrijven"],
                why: "De Arbowet draait om veiligheid, gezondheid en welzijn (VGW) op het werk en het voorkomen van ziekte door werk."
            },
            {
                q: "Waarom zijn goede arbeidsomstandigheden van belang?",
                a: "Om risico’s zoveel mogelijk te beperken en zo ongevallen en ziekte te voorkomen",
                wrong: ["Vooral om boetes van de overheid te vermijden", "Alleen om de productie te verhogen", "Omdat de verzekering anders niet uitbetaalt"],
                why: "Voor bedrijf én medewerker is het belangrijk dat het werk veilig, gezond en prettig is, zodat ongevallen en ziekte voorkomen worden."
            },
            {
                q: "Wie is eindverantwoordelijk voor de veiligheid in fabrieken?",
                a: "De werkgever (de directie van het bedrijf)",
                wrong: ["De preventieadviseur", "Elke werknemer voor zichzelf", "De overheidsdienst Veiligheid en Gezondheid"],
                why: "De eindverantwoordelijkheid ligt altijd bij de werkgever, dus bij de directie van het bedrijf waar men werkt."
            },
            {
                q: "Onder welke voorwaarden mag een werknemer het werk onderbreken?",
                a: "Bij ernstig en direct dreigend gevaar voor mensen, als dit meteen aan de werkgever gemeld wordt en de overheidsdienst niet tijdig kan optreden",
                wrong: ["Altijd wanneer de werknemer zich niet lekker voelt bij het werk", "Alleen na schriftelijke toestemming van de leidinggevende", "Alleen als er al iemand gewond is geraakt"],
                why: "Het moet gaan om ernstig gevaar dat direct dreigt, het moet onmiddellijk gemeld worden en de aangewezen ambtenaar kan niet tijdig optreden."
            },
            {
                q: "Wat is de functie van de overheidsdienst Veiligheid en Gezondheid?",
                a: "Controleren of de Arbowet en de Arbeidstijdenwet worden nageleefd",
                wrong: ["Deskundige bijstand geven bij preventie binnen het bedrijf", "Werkvergunningen uitschrijven voor gevaarlijk werk", "VCA-examens afnemen bij werknemers"],
                why: "Deze dienst ziet toe op de naleving van de Arbowet en de Arbeidstijdenwet."
            },
            {
                q: "Wat is de functie van de Arbo-dienst?",
                a: "Deskundige bijstand verlenen op het gebied van preventie en bescherming",
                wrong: ["Boetes uitdelen bij overtredingen", "Controleren of de Arbeidstijdenwet wordt nageleefd", "Ongevallen onderzoeken voor de politie"],
                why: "De Arbo-dienst adviseert en ondersteunt het bedrijf deskundig bij preventie en bescherming."
            }
        ]
    },
    {
        nr: 2, title: "Ongevallen en preventie", questions: [
            {
                q: "Hoe wordt risico berekend?",
                a: "Risico = kans × effect",
                wrong: ["Risico = kans × tijd", "Risico = gevaar × aantal werknemers", "Risico = effect × kosten"],
                why: "Het risico is de kans dat iets gebeurt vermenigvuldigd met het effect (de ernst van de gevolgen)."
            },
            {
                q: "Bestaat er absolute veiligheid?",
                a: "Nee, er bestaan altijd risico’s",
                wrong: ["Ja, als alle PBM gedragen worden", "Ja, als er een werkvergunning is", "Ja, in een VCA-gecertificeerd bedrijf"],
                why: "Risico’s kun je verkleinen maar nooit helemaal wegnemen."
            },
            {
                q: "Welke factoren bepalen het risico tijdens het werk?",
                a: "Bronnen van gevaar, risicoverhogende omstandigheden en risicoverhogende handelingen",
                wrong: ["Alleen de leeftijd en ervaring van de werknemer", "De grootte van het bedrijf en het aantal werknemers", "Het weer en het tijdstip van de dag"],
                why: "Het risico hangt af van de bronnen van gevaar, de omstandigheden en de handelingen die het risico verhogen."
            },
            {
                q: "Wat is een bijna-ongeval (incident)?",
                a: "Een ongewenste gebeurtenis zonder letsel of schade, bijvoorbeeld net op tijd zien dat een aanhanger niet goed vastzit",
                wrong: ["Een ongeval met alleen lichte verwondingen", "Een ongeval waarbij alleen materiële schade ontstaat", "Een ongeval dat niet gemeld hoeft te worden"],
                why: "Bij een bijna-ongeval gaat er iets mis, maar zonder letsel en/of schade. Toch is het belangrijk om het te melden."
            },
            {
                q: "Wat zijn de fasen uit de ongevaltheorie van Lateiner?",
                a: "Achtergrond – menselijk falen – onveilige handelingen/situaties – ongeval – letsel en/of schade",
                wrong: ["Gevaar – risico – ongeval – herstel – evaluatie", "Oorzaak – melding – onderzoek – maatregel – controle", "Achtergrond – ongeval – melding – letsel – verzekering"],
                why: "Lateiner beschrijft vijf fasen, van achtergrond tot letsel en/of schade, zoals dominostenen die elkaar omduwen."
            },
            {
                q: "Wat zijn de oorzaken van menselijk falen?",
                a: "Niet weten, niet kunnen of niet willen",
                wrong: ["Slecht weer, slechte verlichting en lawaai", "Te weinig loon, te veel werk en stress", "Defect gereedschap en slechte machines"],
                why: "Iemand weet het niet, kan het niet of wil het niet."
            },
            {
                q: "Hoe kan men optreden tegen onveilige situaties?",
                a: "De oorzaak wegnemen, afschermen/beveiligen en/of anderen waarschuwen en inschakelen",
                wrong: ["Gewoon doorwerken en het later aan de collega’s vertellen", "Het werk definitief stopzetten en naar huis gaan", "Alleen extra PBM dragen"],
                why: "Pak de oorzaak aan, scherm het gevaar af of waarschuw anderen en schakel hulp in."
            },
            {
                q: "Wat moet je doen als je bij een ander een onveilige handeling ziet?",
                a: "De handeling laten stoppen",
                wrong: ["Een foto maken als bewijs voor de leidinggevende", "Niets zeggen, het is zijn eigen verantwoordelijkheid", "Het na de werkdag melden bij de directie"],
                why: "Je laat de onveilige handeling meteen stoppen, zodat er geen ongeval kan gebeuren."
            },
            {
                q: "Wat is preventie?",
                a: "Het voorkomen van onveilige handelingen en onveilige situaties",
                wrong: ["Het afhandelen van een ongeval nadat het gebeurd is", "Het verzekeren van werknemers tegen ongevallen", "Het geven van eerste hulp bij een ongeval"],
                why: "Preventie betekent voorkomen: onveilige handelingen en situaties vermijden voordat er iets gebeurt."
            },
            {
                q: "Op welke aspecten kan preventie zich richten?",
                a: "Op de mens, de organisatie, de techniek en de omgeving",
                wrong: ["Alleen op de techniek van de machines", "Op de lonen, de werktijden en de vakantiedagen", "Alleen op persoonlijke beschermingsmiddelen"],
                why: "Preventie richt zich op vier aspecten: mens, organisatie, techniek en omgeving."
            },
            {
                q: "Wat is de negatieve invloed van alcohol- en/of drugsgebruik op veilig werken?",
                a: "Het geeft productie- en kwaliteitsverlies en vergroot het risico op bedrijfsongevallen",
                wrong: ["Het heeft alleen invloed bij werken op hoogte", "Een kleine hoeveelheid heeft geen invloed op het werk", "Het beïnvloedt alleen de werknemer zelf, niet zijn collega’s"],
                why: "Alcohol en drugs verminderen de alertheid, wat leidt tot fouten, minder kwaliteit en meer ongevallen."
            },
            {
                q: "Wat is de invloed van orde en netheid op veilig werken?",
                a: "Het helpt incidenten, vervuiling en milieuschade te voorkomen",
                wrong: ["Het heeft vooral een esthetisch effect", "Het is alleen belangrijk in kantoren", "Het vertraagt het werk en verhoogt zo het risico"],
                why: "Een opgeruimde werkplek voorkomt struikelen, brand, vervuiling en milieuschade."
            }
        ]
    },
    {
        nr: 3, title: "Werkvergunningen", questions: [
            {
                q: "Waarvoor dienen werkvergunningen?",
                a: "Om duidelijke afspraken over veiligheidsmaatregelen te maken en die schriftelijk vast te leggen",
                wrong: ["Om aan te tonen dat een werknemer een VCA-diploma heeft", "Om de werkuren van de aannemer te registreren", "Om de kosten van het werk vooraf goed te keuren"],
                why: "Een werkvergunning legt de afspraken over veiligheidsmaatregelen tussen alle partijen op papier vast."
            },
            {
                q: "Waarvoor tekent de vergunningverstrekker?",
                a: "Dat het werk veilig kan worden uitgevoerd en dat de beheersmaatregelen met de vergunninghouder zijn doorgesproken",
                wrong: ["Dat hij het werk zelf zal uitvoeren", "Dat hij zich houdt aan de voorwaarden op de vergunning tijdens het werk", "Dat de werknemers hun VCA-diploma hebben"],
                why: "De verstrekker verklaart dat het werk veilig uitgevoerd kan worden en dat de maatregelen besproken zijn."
            },
            {
                q: "Waarvoor tekent de vergunninghouder?",
                a: "Dat hij akkoord gaat met de opgelegde eisen en zorgt dat het werk volgens de afspraken wordt uitgevoerd",
                wrong: ["Dat de installatie veilig is vrijgegeven", "Dat hij de vergunning voor onbepaalde tijd mag gebruiken", "Dat hij alleen verantwoordelijk is voor zijn eigen veiligheid"],
                why: "De vergunninghouder (meestal de leidinggevende) gaat akkoord met de eisen en zorgt voor uitvoering volgens de afspraken."
            },
            {
                q: "Waarvoor tekent de operationele medewerker op een werkvergunning?",
                a: "Dat hij zich houdt aan de voorwaarden en maatregelen die op de vergunning staan",
                wrong: ["Dat de werkplek veilig is gemaakt door de installatie-eigenaar", "Dat hij de vergunning mag aanpassen als het nodig is", "Dat de metingen correct zijn uitgevoerd"],
                why: "De uitvoerende medewerker verklaart dat hij zich aan de vermelde voorwaarden en maatregelen houdt."
            }
        ]
    },
    {
        nr: 4, title: "Veilig met gereedschap en machines", questions: [
            {
                q: "Wat geldt voor goed gereedschap?",
                a: "Het moet op de juiste manier gebruikt worden en geregeld onderhouden worden",
                wrong: ["Het moet zo nieuw mogelijk zijn", "Duur gereedschap is altijd veilig", "Het mag voor elk soort klus gebruikt worden"],
                why: "Juist gebruik en regelmatig onderhoud maken gereedschap veilig."
            },
            {
                q: "Waarom moet een hamerkop geborgd zijn?",
                a: "Zodat de kop niet van de steel kan schieten tijdens het werk",
                wrong: ["Zodat de hamer minder zwaar wordt", "Om te voorkomen dat de hamer roest", "Zodat de hamer meer slagkracht heeft"],
                why: "Een losse hamerkop kan wegschieten en iemand ernstig verwonden."
            },
            {
                q: "Waarom mag je nooit een vijl zonder handvat gebruiken?",
                a: "Als de vijl wegglijdt, kan de punt in je hand of pols terechtkomen",
                wrong: ["Omdat de vijl dan sneller bot wordt", "Omdat het werkstuk dan beschadigd raakt", "Omdat de vijl dan elektrisch geladen kan worden"],
                why: "Zonder handvat kan de scherpe angel van de vijl in de hand of pols prikken."
            },
            {
                q: "Waarom is een ringsleutel beter dan een steeksleutel?",
                a: "Hij heeft aan alle kanten contact met de moer, brengt de kracht beter over en schiet minder makkelijk los",
                wrong: ["Hij is lichter en dus makkelijker te dragen", "Hij past op elke maat moer", "Hij is altijd elektrisch geïsoleerd"],
                why: "Door het volledige contact met de moer glijdt een ringsleutel niet snel weg, wat veiliger is."
            },
            {
                q: "Waarvoor wordt een haakse slijptol gebruikt?",
                a: "Met een doorslijpschijf om steen of metaal door te slijpen, met een afbraamschijf om materiaal af te bramen",
                wrong: ["Om hout in de lengte te zagen", "Om gaten te boren in beton", "Om schroeven vast te draaien"],
                why: "De haakse slijper werkt met een doorslijpschijf (doorslijpen) of een afbraamschijf (afbramen)."
            },
            {
                q: "Welke PBM moet je minstens gebruiken bij slijpen?",
                a: "Een veiligheidsbril en gehoorbescherming",
                wrong: ["Alleen werkhandschoenen", "Een helm en een veiligheidsharnas", "Een stofmasker en een schort"],
                why: "Bij slijpen vliegen er deeltjes rond en maakt de machine veel lawaai: bescherm dus je ogen en oren."
            },
            {
                q: "Op welke spanningen mag elektrisch handgereedschap werken?",
                a: "Op 50 V wisselspanning, 120 V gelijkspanning, of 220 V als het dubbel geïsoleerd is",
                wrong: ["Op elke spanning, als het gereedschap maar geaard is", "Alleen op 400 V krachtstroom", "Op 220 V, en dan moet het altijd geaard worden"],
                why: "Gereedschap op 220 V moet dubbel geïsoleerd zijn en mag niet geaard worden."
            },
            {
                q: "Welke algemene noodvoorzieningen vind je op machines?",
                a: "Dodemansknop, noodstop en nulschakelaar",
                wrong: ["Brandblusser, verbanddoos en noodverlichting", "Thermostaat, zekering en drukmeter", "Afzetlint, waarschuwingsbord en pion"],
                why: "Dit zijn de drie standaard noodvoorzieningen die een machine veilig stilzetten of onbedoeld starten voorkomen."
            },
            {
                q: "Waarvoor zorgt de noodstopinrichting?",
                a: "Dat de machine in één keer uitgeschakeld wordt en stopt",
                wrong: ["Dat de machine langzaam afremt tot de volgende werkcyclus", "Dat het alarm van het gebouw afgaat", "Dat de machine automatisch herstart na een storing"],
                why: "Met de noodstop zet je de machine in één handeling stil."
            }
        ]
    },
    {
        nr: 5, title: "Struikelen en vallen", questions: [
            {
                q: "Hoe kun je gevaren bij het lopen bij de bron wegnemen?",
                a: "Door de werkplek netjes en opgeruimd te houden en al bij het ontwerp rekening te houden met veilige situaties",
                wrong: ["Door altijd veiligheidsschoenen te dragen", "Door waarschuwingsborden op te hangen", "Door een afzetting rond de werkplek te plaatsen"],
                why: "Good housekeeping en een veilig ontwerp nemen het gevaar weg; schoenen en borden zijn pas latere maatregelen."
            },
            {
                q: "Wanneer moet je het gevaar scheiden van de mens, bijvoorbeeld met een afzetting?",
                a: "Wanneer het niet mogelijk is om het gevaar bij de bron weg te nemen",
                wrong: ["Altijd, ook als het gevaar eenvoudig weg te nemen is", "Alleen als de leidinggevende erom vraagt", "Alleen ’s nachts, wanneer het donker is"],
                why: "Kan een risico niet weggenomen worden, dan moet het zichtbaar gemaakt en afgeschermd worden."
            },
            {
                q: "Wat is een voorbeeld van een situatie die tot struikelen kan leiden, bijvoorbeeld in een magazijn?",
                a: "Verpakkingsmateriaal dat in de doorgangen blijft slingeren",
                wrong: ["Goed verlichte looppaden", "Gemarkeerde trappen met leuningen", "Opgeruimde stellingen"],
                why: "Rondslingerend materiaal in doorgangen is een klassieke oorzaak van struikelen."
            },
            {
                q: "Wat kun je zelf doen om het risico op struikelen te verkleinen?",
                a: "Goed opletten bij het lopen en niet rennen op de werkplek",
                wrong: ["Sneller lopen zodat je minder lang op de werkvloer bent", "Je handen in je zakken houden", "Alleen ’s ochtends door de werkplaats lopen"],
                why: "Opletten waar je loopt en niet rennen zijn eenvoudige maar belangrijke maatregelen."
            }
        ]
    },
    {
        nr: 6, title: "Werken op hoogte", questions: [
            {
                q: "Vanaf welke hoogte spreekt men volgens de Arbowet van valgevaar?",
                a: "Vanaf 2,5 meter",
                wrong: ["Vanaf 1 meter", "Vanaf 4 meter", "Vanaf 5 meter"],
                why: "Volgens de Arbowet is er sprake van valgevaar bij werken op 2,5 meter hoogte of hoger."
            },
            {
                q: "Waarom moet je de wielen van een rolsteiger blokkeren voor je hem beklimt?",
                a: "Om te voorkomen dat de steiger wegrolt terwijl je erop werkt",
                wrong: ["Om de wielen te beschermen tegen slijtage", "Omdat de steiger anders niet in te klappen is", "Om de steiger elektrisch te aarden"],
                why: "Een niet-geblokkeerde rolsteiger kan wegrollen en omvallen."
            },
            {
                q: "Waar dient een steigerkaart voor?",
                a: "Ze geeft aan of de steiger is goedgekeurd; is dat niet zo, dan mag je de steiger niet betreden",
                wrong: ["Ze toont de bouwtekening van de steiger", "Ze geeft aan wie de steiger heeft betaald", "Ze vermeldt hoeveel personen er die dag op de steiger hebben gewerkt"],
                why: "De steigerkaart vertelt of de steiger is goedgekeurd en gebruikt mag worden."
            },
            {
                q: "Wanneer wordt een hoogwerker ingezet voor werken op hoogte?",
                a: "Als het bouwen van een vaste steiger te duur of te tijdrovend is",
                wrong: ["Altijd, een hoogwerker is altijd de veiligste keuze", "Alleen als er geen ladder beschikbaar is", "Alleen bij werk binnen in gebouwen"],
                why: "Een hoogwerker is een alternatief wanneer een vaste steiger niet rendabel of te tijdrovend is."
            },
            {
                q: "Wie mag een hoogwerker bedienen?",
                a: "Alleen getraind personeel",
                wrong: ["Iedereen met een rijbewijs B", "Iedereen ouder dan 18 jaar", "Iedere werknemer met een VCA-diploma"],
                why: "Het bedienen van een hoogwerker vraagt een specifieke training."
            },
            {
                q: "Wanneer mag een werkbak (aan een kraan of heftruck) worden gebruikt?",
                a: "Wanneer de werkplek niet bereikbaar is met een ladder, hoogwerker, stelling of steiger",
                wrong: ["Altijd, omdat het de snelste oplossing is", "Wanneer er weinig tijd is voor het werk", "Alleen bij harde wind"],
                why: "Een werkbak is een laatste keuze, alleen als andere middelen niet mogelijk zijn."
            },
            {
                q: "Mag je een ladder gebruiken waar één sport van mist?",
                a: "Nee, je mag nooit een beschadigde ladder gebruiken en hem ook niet zelf repareren",
                wrong: ["Ja, als je de ontbrekende sport overslaat", "Ja, als je de sport eerst zelf vervangt", "Ja, als de ladder korter is dan 3 meter"],
                why: "Een beschadigde ladder mag nooit gebruikt worden en mag ook niet zelf gerepareerd worden."
            },
            {
                q: "Welke veiligheidsvoorzieningen zijn nodig bij wand- en vloeropeningen?",
                a: "Afdekken met stevig materiaal, duidelijk markeren en/of afzetten",
                wrong: ["Een bord ‘Let op’ ernaast zetten volstaat", "Alleen ’s avonds afdekken", "Niets, als iedereen weet dat de opening er is"],
                why: "Openingen moeten stevig afgedekt, gemarkeerd en/of afgezet worden."
            },
            {
                q: "Welke valbeveiligingen zijn er?",
                a: "Een veiligheidsharnas met vanglijn en vast hangpunt, een remchute, een non-chute en vangnetten",
                wrong: ["Een helm, een veiligheidsbril en handschoenen", "Een rolsteiger, een ladder en een trap", "Een afzetlint, pionnen en waarschuwingsborden"],
                why: "Valbeveiliging vangt een val op of voorkomt hem: harnas met vanglijn, remchute, non-chute en vangnetten."
            }
        ]
    },
    {
        nr: 7, title: "Fysieke belasting", questions: [
            {
                q: "Wat is fysieke belasting?",
                a: "Lichamelijke belasting, oftewel belasting van het bewegingsapparaat",
                wrong: ["Stress en werkdruk", "De belasting van machines door zwaar gebruik", "Het gewicht dat een steiger kan dragen"],
                why: "Fysieke belasting is de belasting van spieren, gewrichten en botten (het bewegingsapparaat)."
            },
            {
                q: "Wat is de beste maatregel om klachten door tillen te voorkomen?",
                a: "Tillen voorkomen, bijvoorbeeld door hulpmiddelen te gebruiken",
                wrong: ["Altijd met een rechte rug en gestrekte benen tillen", "Een rugsteunband dragen", "Zo snel mogelijk tillen zodat de belasting kort duurt"],
                why: "Het beste is niet te tillen: gebruik hulpmiddelen zoals een palletwagen of takel."
            },
            {
                q: "Waarom moet je regelmatig van werkhouding wisselen?",
                a: "Om de doorbloeding van de spieren te bevorderen",
                wrong: ["Om sneller te kunnen werken", "Om je collega’s ook eens te laten werken", "Omdat de Arbeidstijdenwet dat verplicht na elk uur"],
                why: "Afwisselen van houding houdt de spieren doorbloed en voorkomt klachten."
            }
        ]
    },
    {
        nr: 8, title: "Horizontaal en verticaal transport", questions: [
            {
                q: "Mag iedereen op een heftruck rijden?",
                a: "Nee, alleen medewerkers met aantoonbare, getoetste deskundigheid",
                wrong: ["Ja, iedereen met een rijbewijs B", "Ja, als de heftruck niet zwaarder beladen is dan 1 ton", "Ja, als er een collega naast loopt"],
                why: "Heftruckchauffeurs moeten aantoonbaar deskundig zijn (getoetst)."
            },
            {
                q: "Welke documenten horen bij een hijskraan?",
                a: "Het kraanboek, hijstabellen, hijsgrafieken en keuringscertificaten van lieren, takels, kettingen e.d.",
                wrong: ["Alleen het rijbewijs van de kraanmachinist", "De factuur en de garantiekaart van de kraan", "Een werkvergunning en een LMRA-formulier"],
                why: "Bij een kraan horen het kraanboek, de hijstabellen/-grafieken en de keuringscertificaten."
            },
            {
                q: "Welke van deze is een voorbeeld van hijsgereedschap?",
                a: "Kettingen, stroppen en hijsbanden",
                wrong: ["Een heftruck, een palletwagen en een steekwagen", "Een ladder, een trap en een rolsteiger", "Een veiligheidsharnas, een helm en handschoenen"],
                why: "Hijsgereedschap zijn o.a. kettingen, kabels, sluitingen, haken, stroppen, lengen, hijsbanden en hijsjukken."
            },
            {
                q: "Wanneer moet een hijsband worden afgekeurd?",
                a: "Bij zichtbare beschadigingen, scheuren, olie of chemicaliën, problemen met de metalen delen of een onleesbaar label",
                wrong: ["Alleen als hij helemaal doorgescheurd is", "Na precies één jaar gebruik, ongeacht de staat", "Alleen als hij nat geworden is"],
                why: "Elke zichtbare schade, vervuiling met olie/chemicaliën, defecte metalen delen of een onleesbaar label is reden tot afkeuren."
            },
            {
                q: "Welke maximale spreidhoek mag je toepassen bij een samenstel (meersprong)?",
                a: "120 graden",
                wrong: ["60 graden", "90 graden", "180 graden"],
                why: "De maximale spreidhoek is 120°. Hoe groter de hoek, hoe zwaarder de belasting op elke parte."
            }
        ]
    },
    {
        nr: 9, title: "Elektriciteit", questions: [
            {
                q: "Welke risico’s kan elektrische stroom voor de mens inhouden?",
                a: "Elektrocutie, brandwonden, een schrikeffect of een ander (secundair) ongeval",
                wrong: ["Alleen een schrikeffect, nooit echt letsel", "Alleen gevaar bij spanningen boven 1000 V", "Alleen brandgevaar, geen gevaar voor de mens zelf"],
                why: "Stroom door het lichaam kan dodelijk zijn, brandwonden veroorzaken, laten schrikken of tot een val of ander ongeval leiden."
            },
            {
                q: "Welke van deze is een veiligheidsmaatregel bij werken met elektriciteit?",
                a: "Aardlekbeveiliging, dubbele isolatie en het gebruik van zeer lage spanning",
                wrong: ["Met natte handen werken voor een betere grip", "Een zekering vervangen door een zwaardere", "Kabels samenknopen om ze korter te maken"],
                why: "Voorbeelden zijn fysieke afscherming, isolatie, dubbele isolatie, aardlekbeveiliging, zeer lage spanning en veiligheidsaarding."
            },
            {
                q: "Welke elektrische spanningen worden als ongevaarlijk gezien?",
                a: "Tot 50 V wisselspanning of 120 V gelijkspanning",
                wrong: ["Tot 230 V wisselspanning", "Tot 400 V wisselspanning", "Elke spanning onder 1000 V"],
                why: "50 V wisselspanning en 120 V gelijkspanning gelden als veilige spanningen."
            },
            {
                q: "Mag een medewerker die instructie heeft gehad (VOP) zonder toezicht aan een elektrische installatie werken?",
                a: "Nee, een Voldoende Onderricht Persoon mag alleen werken als er regelmatig toezicht is",
                wrong: ["Ja, de instructie is voldoende", "Ja, als de installatie onder 400 V werkt", "Ja, als hij isolerende handschoenen draagt"],
                why: "Een VOP mag alleen onder regelmatig toezicht aan elektrische installaties werken."
            }
        ]
    },
    {
        nr: 10, title: "Gevaarlijke stoffen", questions: [
            {
                q: "Welke factoren beïnvloeden een vergiftiging?",
                a: "De giftigheid van de stof, de opgenomen hoeveelheid, de duur van de blootstelling, de lichamelijke inspanning en de conditie, het gewicht en de leeftijd van het slachtoffer",
                wrong: ["Alleen de kleur en de geur van de stof", "Alleen de temperatuur in de werkruimte", "Alleen de prijs en de verpakking van de stof"],
                why: "Hoe erg een vergiftiging is, hangt af van de stof, de dosis, de duur, de inspanning en het slachtoffer zelf."
            },
            {
                q: "Als terpentine een van de bestanddelen van verf is, is die verf dan nog gevaarlijk?",
                a: "Ja, de terpentine verdampt uit de verf en de concentratie in de lucht is gevaarlijk",
                wrong: ["Nee, in verf is de terpentine onschadelijk gemaakt", "Nee, alleen pure terpentine is gevaarlijk", "Alleen als je de verf opdrinkt"],
                why: "Het oplosmiddel verdampt en kan zo ingeademd worden."
            },
            {
                q: "Wat is het doel van een veiligheidsinformatieblad of chemiekaart?",
                a: "Informatie geven over de gevaren van de stof en de te nemen maatregelen",
                wrong: ["Aangeven hoeveel de stof kost", "Vermelden wie de stof heeft besteld", "Uitleggen hoe je de stof zelf kunt maken"],
                why: "Het informatieblad beschrijft de gevaren van de stof en welke maatregelen je moet nemen."
            },
            {
                q: "Waarom mag je zeer licht ontvlambare gassen niet samen met zuurstof- of luchtcilinders bewaren?",
                a: "Omdat bij een lek samen met zuurstof een zeer explosief mengsel kan ontstaan",
                wrong: ["Omdat de cilinders dan sneller roesten", "Omdat de kleuren van de cilinders dan verward worden", "Omdat zuurstof het gas giftig maakt"],
                why: "Lekkend brandbaar gas plus zuurstof geeft een zeer explosief mengsel."
            },
            {
                q: "Hoe controleer je of je de juiste gascilinder hebt gekregen?",
                a: "Door de kleur van de cilinderschouder te bekijken en het etiket te lezen",
                wrong: ["Door aan het ventiel te ruiken", "Door de cilinder te wegen", "Door even een klein beetje gas te laten ontsnappen"],
                why: "Elk gas heeft een specifieke schouderkleur en de naam van het gas staat op het etiket."
            },
            {
                q: "Welke gevaren zijn er bij werken met biologische stoffen?",
                a: "Infecties, vergiftigingen, allergieën of schimmels",
                wrong: ["Elektrocutie en vlambogen", "Alleen brand- en explosiegevaar", "Gehoorschade door lawaai"],
                why: "Biologische stoffen (bacteriën, virussen, schimmels) kunnen infecties, vergiftiging en allergie veroorzaken."
            },
            {
                q: "Is het dragen van adembescherming bij schilderen een ‘maatregel aan de bron’?",
                a: "Nee, het is een PBM en dus de laatste maatregel die je neemt",
                wrong: ["Ja, het is de belangrijkste bronmaatregel", "Ja, omdat de verf dan niet meer verdampt", "Ja, als het masker een filter heeft"],
                why: "PBM beschermen alleen de drager en komen pas als laatste in de rij van maatregelen."
            },
            {
                q: "Is het gebruik van verf op waterbasis bij schilderen een ‘maatregel aan de bron’?",
                a: "Ja, want je vermijdt hiermee het gebruik van de gevaarlijke stof",
                wrong: ["Nee, het is een organisatorische maatregel", "Nee, het is een PBM", "Nee, het heeft geen invloed op het gevaar"],
                why: "Door een minder gevaarlijke stof te gebruiken, pak je het gevaar bij de bron aan."
            },
            {
                q: "Is het ventileren van de werkplek bij schilderen een ‘maatregel aan de bron’?",
                a: "Nee, maar ventilatie is wel een goed hulpmiddel om onder de grenswaarde te blijven",
                wrong: ["Ja, het is de beste bronmaatregel", "Ja, want de verf wordt er minder giftig door", "Nee, ventileren mag bij schilderen nooit"],
                why: "Ventilatie neemt de stof niet weg, maar verlaagt de concentratie in de lucht."
            }
        ]
    },
    {
        nr: 11, title: "Brand en explosies", questions: [
            {
                q: "Welke factoren zijn nodig voor het branden van vaste stoffen?",
                a: "Zuurstof, de brandbare (vaste) stof en de juiste temperatuur (ontstekingstemperatuur)",
                wrong: ["Water, wind en zonlicht", "Stikstof, brandbare stof en druk", "Zuurstof, koolstofdioxide en vonken"],
                why: "Dit zijn de drie factoren van de branddriehoek."
            },
            {
                q: "Welke extra factor is nodig voor het ontbranden van gassen en vloeistoffen?",
                a: "De juiste mengverhouding tussen zuurstof en de brandbare stof",
                wrong: ["Een extra hoeveelheid water", "Een hogere luchtvochtigheid", "Een lage omgevingstemperatuur"],
                why: "Bij gassen en dampen moet ook de mengverhouding met zuurstof kloppen (het explosiegebied)."
            },
            {
                q: "Wat verstaan we onder het vlampunt?",
                a: "De laagste temperatuur waarbij er genoeg damp boven een vloeistof is om met lucht een brandbaar mengsel te vormen",
                wrong: ["De temperatuur waarbij een stof vanzelf gaat branden zonder vonk", "De temperatuur van een vlam", "Het punt waarop een brand geblust is"],
                why: "Bij het vlampunt kan de damp boven de vloeistof ontsteken met een ontstekingsbron."
            },
            {
                q: "Wat wordt bedoeld met het explosiegebied?",
                a: "De gas- of dampconcentraties in de lucht waarbij een explosie mogelijk is",
                wrong: ["De plaats op het terrein waar explosieven worden opgeslagen", "De straal rond een explosie waarin schade ontstaat", "De temperatuur waarbij een gas ontploft"],
                why: "Tussen de onderste (LEL) en bovenste explosiegrens is het mengsel explosief."
            },
            {
                q: "Wat doet een katalysator?",
                a: "Hij helpt bij het ontstaan of verloop van een brand, zonder zelf te verbranden",
                wrong: ["Hij dooft een brand door zuurstof weg te nemen", "Hij verbrandt zelf als eerste", "Hij meet de concentratie van brandbare gassen"],
                why: "Een katalysator versnelt of bevordert de verbranding, maar verbrandt zelf niet."
            },
            {
                q: "Mag je bij een vloeistofbrand zand als blusmiddel gebruiken?",
                a: "Ja, zand verstikt het vuur en heeft een koelende werking bij een over de grond verspreide brandende vloeistof",
                wrong: ["Nee, zand maakt een vloeistofbrand groter", "Nee, alleen water mag gebruikt worden", "Nee, zand mag alleen bij elektrische branden"],
                why: "Zand is geschikt voor brandende vloeistof op de grond: het verstikt en koelt."
            },
            {
                q: "Hoe handel je bij een ongeval met ernstig letsel?",
                a: "Melden via het interne alarmnummer of 112, zorgen dat jij en anderen geen gevaar lopen, en de ambulance opwachten en de weg wijzen",
                wrong: ["Het slachtoffer zelf zo snel mogelijk naar het ziekenhuis brengen", "Eerst de leidinggevende zoeken en daarna pas bellen", "Het slachtoffer altijd meteen verplaatsen naar een andere ruimte"],
                why: "Alarmeer, let op je eigen veiligheid en die van anderen, en vang de hulpdiensten op."
            },
            {
                q: "Welke gegevens geef je door bij het melden van een ongeval?",
                a: "Je eigen naam en afdeling, de plaats van het ongeval, het aantal slachtoffers en hun verwondingen",
                wrong: ["Alleen de naam van het slachtoffer", "Je rijksregisternummer en geboortedatum", "De oorzaak van het ongeval en wie er schuld heeft"],
                why: "De hulpdiensten moeten weten wie belt, waar het is en hoeveel slachtoffers er zijn met welke verwondingen."
            }
        ]
    },
    {
        nr: 12, title: "Werken in besloten ruimten", questions: [
            {
                q: "Wanneer spreek je van een besloten ruimte?",
                a: "Een ruimte die normaal afgesloten is van de omgeving, vaak nauw, slecht verlicht en moeilijk toegankelijk, met weinig ventilatie en slechte vluchtmogelijkheden",
                wrong: ["Elke ruimte met een deur die op slot kan", "Een kantoor zonder ramen", "Elke ruimte waar meer dan vijf mensen werken"],
                why: "Typisch zijn: afgesloten, nauw, slecht verlicht, slecht geventileerd en moeilijk te ontvluchten (bv. tanks, putten, ketels)."
            },
            {
                q: "Wat zijn de belangrijkste gevaren bij werken in besloten ruimten?",
                a: "Brand- en explosiegevaar, verstikking, vergiftiging, beknelling en elektrocutie",
                wrong: ["Alleen gehoorschade en verblinding", "Alleen struikelen en uitglijden", "Alleen onderkoeling"],
                why: "In besloten ruimten kunnen gassen zich ophopen en is vluchten moeilijk, waardoor deze gevaren groter zijn."
            },
            {
                q: "Mag je zuurstof- en/of gasflessen in een besloten ruimte plaatsen?",
                a: "Nee",
                wrong: ["Ja, als ze rechtop staan", "Ja, als het er goed geventileerd is", "Ja, maar alleen zuurstofflessen"],
                why: "Lekkend gas of zuurstof hoopt zich op in de ruimte en veroorzaakt brand-, explosie- of verstikkingsgevaar."
            },
            {
                q: "Hoe stel je bewegende delen in een besloten ruimte buiten werking?",
                a: "Door ze door een deskundige buiten bedrijf te laten zetten en te laten vergrendelen",
                wrong: ["Door de machine zelf even uit te zetten met de schakelaar", "Door een collega te vragen niet op de startknop te drukken", "Door een bord ‘Niet aanzetten’ op te hangen"],
                why: "Een deskundige moet de delen buiten bedrijf stellen én vergrendelen, zodat ze niet onverwacht kunnen starten."
            },
            {
                q: "Welke maatregelen neem je voor je met las- of snijwerk begint in een besloten ruimte?",
                a: "Alle brandbare stoffen weghalen of afdekken en blusmiddelen binnen handbereik houden",
                wrong: ["De ruimte extra vullen met zuurstof", "Alle ventilatie uitschakelen om tocht te vermijden", "De ingang afsluiten zodat er geen vonken naar buiten komen"],
                why: "Brandbare stoffen weg, en blusmiddelen klaar voor gebruik."
            },
            {
                q: "Hoe los je een tekort aan zuurstof in een besloten ruimte op?",
                a: "Door te ventileren",
                wrong: ["Door zuivere zuurstof in de ruimte te blazen", "Door sneller te werken", "Door een stofmasker te dragen"],
                why: "Ventileren met lucht. Zuivere zuurstof toevoegen is gevaarlijk, want dat verhoogt het brandgevaar."
            },
            {
                q: "Welke algemene maatregel moet je nemen voor je in een besloten ruimte mag werken?",
                a: "Metingen doen naar zuurstof, explosieve gassen/dampen en giftige stoffen, en pas beginnen als de ruimte veilig verklaard is",
                wrong: ["Alleen kijken of het licht in de ruimte werkt", "Even snel binnenlopen om te ruiken of het veilig is", "Wachten tot er een collega klaar is met zijn pauze"],
                why: "Pas als alle meetresultaten bekend zijn en de situatie veilig verklaard is, mag het werk beginnen."
            },
            {
                q: "Bij welke meetwaarden mag je een besloten ruimte zonder adembescherming betreden?",
                a: "Zuurstof 20%, explosieve gassen onder 10% van de LEL en giftige stoffen onder de grenswaarde",
                wrong: ["Zuurstof 15%, explosieve gassen onder 50% van de LEL", "Zuurstof 25%, giftige stoffen maximaal het dubbele van de grenswaarde", "Zuurstof 10%, zolang er geen geur waarneembaar is"],
                why: "Volgens het boek: 20% zuurstof, minder dan 10% van de LEL en giftige stoffen onder de grenswaarde."
            },
            {
                q: "Welke PBM draag je standaard bij werk in een besloten ruimte?",
                a: "Helm, bril, overall, handschoenen en veiligheidsschoenen",
                wrong: ["Alleen een stofmasker", "Alleen een fluohesje", "Gewone werkkleding zonder extra bescherming"],
                why: "Dit is de standaarduitrusting; afhankelijk van de metingen komt er extra bescherming bij."
            },
            {
                q: "Welke maatregelen neem je als er verf wordt aangebracht in een besloten ruimte?",
                a: "Onafhankelijke adembescherming, ventileren om onder 10% LEL te blijven en alle apparatuur goed aarden",
                wrong: ["Een gewoon stofmasker en de ingang dichthouden", "De ruimte verwarmen zodat de verf sneller droogt", "Werken zonder ventilatie zodat de verf niet uitwaait"],
                why: "Verfdampen zijn giftig en brandbaar: onafhankelijke adembescherming, ventilatie en aarding tegen statische elektriciteit."
            }
        ]
    },
    {
        nr: 13, title: "Specifieke werkzaamheden", questions: [
            {
                q: "Welk gevaar is specifiek voor elektrisch lassen?",
                a: "Elektrocutie",
                wrong: ["Verstikking door zuurstoftekort in open lucht", "Explosie van de acetyleenfles", "Vergiftiging door asbest"],
                why: "Bij elektrisch lassen werk je met elektrische stroom, dus is elektrocutie het specifieke gevaar."
            },
            {
                q: "Welk gevaar is specifiek voor autogeen lassen?",
                a: "Brand- en explosiegevaar door het gebruik van zeer licht ontvlambare gassen en zuurstof uit flessen",
                wrong: ["Elektrocutie door de lasstroom", "Gehoorschade door de lastransformator", "Verblinding door de lichtboog van de elektrode"],
                why: "Autogeen lassen gebruikt brandbaar gas en zuurstof uit flessen."
            },
            {
                q: "Wat doet een terugstroombegrenzer in een autogene lasinstallatie?",
                a: "Ze voorkomt ongewenste vermenging en dus een brandbaar gasmengsel op een ongewenste plaats",
                wrong: ["Ze verhoogt de druk in de slangen", "Ze koelt de lasbrander af", "Ze meet hoeveel gas er nog in de fles zit"],
                why: "Ze verhindert dat gas terugstroomt in de verkeerde leiding of fles."
            },
            {
                q: "Welk sloopafval mag via stortkokers worden gestort?",
                a: "Al het afval dat geen asbest bevat",
                wrong: ["Alleen asbesthoudend afval", "Al het afval, inclusief asbest", "Alleen hout"],
                why: "Asbest mag nooit via stortkokers; ander sloopafval wel."
            },
            {
                q: "Welke gevaren komen voor bij sloopwerkzaamheden?",
                a: "Instorten, vallend sloopafval, struikelen en stoten, vallen van hoogte en vrijkomende gevaarlijke stoffen",
                wrong: ["Alleen lawaai", "Alleen stof op de kleding", "Er zijn geen bijzondere gevaren als je een helm draagt"],
                why: "Slopen combineert veel gevaren tegelijk, van instorting tot het vrijkomen van gevaarlijke stoffen."
            },
            {
                q: "Mogen delen die asbest bevatten gebroken of gezaagd worden tijdens het slopen?",
                a: "Nee, nooit",
                wrong: ["Ja, als je een stofmasker draagt", "Ja, als je het asbest eerst nat maakt", "Ja, maar alleen buiten"],
                why: "Breken of zagen laat asbestvezels vrijkomen, en die zijn zeer schadelijk."
            },
            {
                q: "Waarom graaf je eerst proefsleuven?",
                a: "Om de juiste ligging van kabels en leidingen te bepalen",
                wrong: ["Om te testen of de graafmachine goed werkt", "Om de grondsoort te bepalen voor de prijsofferte", "Om regenwater af te voeren"],
                why: "Met proefsleuven vind je de exacte ligging van kabels en leidingen, zodat je ze niet raakt."
            },
            {
                q: "Welke regels gelden voor diepe uitgravingen?",
                a: "De regels voor werken in besloten ruimten",
                wrong: ["Dezelfde regels als voor werken op kantoor", "De regels voor werken met elektriciteit", "Er gelden geen speciale regels"],
                why: "In een diepe uitgraving kunnen gassen zich ophopen en is vluchten lastig, net als in een besloten ruimte."
            },
            {
                q: "Waarom kan geluid schadelijk zijn?",
                a: "Het verstoort de communicatie, je hoort waarschuwingen niet, en het kan blijvende gehoorschade en lichamelijke klachten veroorzaken",
                wrong: ["Alleen omdat het vervelend is voor de buren", "Geluid is alleen schadelijk boven 140 dB", "Het is enkel schadelijk voor machines"],
                why: "Lawaai heeft zowel directe veiligheidsgevolgen (niet horen) als gezondheidsgevolgen (gehoorschade)."
            },
            {
                q: "Hoe merk je dat je gehoor beschadigd is?",
                a: "Je hoort hoge tonen of zachte geluiden moeilijk, gesprekken in lawaai zijn lastig te volgen, of je hoort fluit- of pieptonen",
                wrong: ["Je krijgt meteen pijn aan je ogen", "Je ruikt minder goed", "Je merkt het nooit, gehoorschade heeft geen symptomen"],
                why: "Typische signalen zijn slechter horen van hoge en zachte tonen en oorsuizen (tinnitus)."
            }
        ]
    },
    {
        nr: 14, title: "Persoonlijke beschermingsmiddelen (PBM)", questions: [
            {
                q: "Wanneer mag je PBM gebruiken (als maatregel)?",
                a: "Als gevaren niet bij de bron aangepakt kunnen worden",
                wrong: ["Altijd als eerste maatregel", "Alleen als de werknemer dat zelf wil", "Alleen bij bezoek van de inspectie"],
                why: "PBM zijn de laatste maatregel: eerst probeer je het gevaar bij de bron weg te nemen."
            },
            {
                q: "Hoe zie je dat een PBM aan de eisen voldoet?",
                a: "Er staat een CE-markering op en er zijn geen zichtbare beschadigingen",
                wrong: ["Het is duur gekocht", "Het heeft een felle kleur", "Het is minder dan een maand oud"],
                why: "De CE-markering toont dat het product aan de Europese eisen voldoet; beschadigingen maken het ongeschikt."
            },
            {
                q: "Welke PBM beschermen de ogen?",
                a: "Een veiligheidsbril, een gelaatscherm of een kap",
                wrong: ["Oorkappen en otoplastieken", "Een helm met kinriem", "Een overall met reflecterende strepen"],
                why: "Oogbescherming: veiligheidsbril, gelaatscherm of kap."
            },
            {
                q: "Welke PBM beschermen het gehoor?",
                a: "Oordopjes, pluggen, otoplastieken en oorkappen",
                wrong: ["Een veiligheidsbril en gelaatscherm", "Een helm", "Een stofmasker"],
                why: "Gehoorbescherming bestaat uit dopjes, pluggen, otoplastieken (op maat gemaakt) en oorkappen."
            },
            {
                q: "Wat moet de werkgever doen bij een geluidsniveau van 80 dB(A)?",
                a: "Gehoorbescherming beschikbaar stellen",
                wrong: ["Niets, pas vanaf 100 dB(A) is er een plicht", "Het werk onmiddellijk stilleggen", "De werknemers een hogere vergoeding geven"],
                why: "Vanaf 80 dB(A) moet de werkgever gehoorbescherming ter beschikking stellen."
            },
            {
                q: "Wat is het verschil tussen afhankelijke en onafhankelijke ademhalingsbescherming?",
                a: "Afhankelijke gebruikt gefilterde lucht uit de omgeving; onafhankelijke krijgt lucht van buiten de werkplek of uit een apart toestel (perslucht)",
                wrong: ["Afhankelijke is voor binnen, onafhankelijke voor buiten", "Afhankelijke werkt op batterijen, onafhankelijke niet", "Er is geen verschil, het zijn twee namen voor hetzelfde"],
                why: "Afhankelijk = afhankelijk van de omgevingslucht (filter). Onafhankelijk = eigen luchttoevoer."
            },
            {
                q: "Welke ademhalingsbescherming gebruik je in een besloten ruimte als de metingen dat nodig maken?",
                a: "Onafhankelijke ademhalingsbescherming",
                wrong: ["Een eenvoudig stofmasker", "Een filtermasker (afhankelijke bescherming)", "Geen, ventilatie is altijd voldoende"],
                why: "In een besloten ruimte kan de omgevingslucht te weinig zuurstof bevatten, dus heb je een eigen luchttoevoer nodig."
            },
            {
                q: "Een bezoeker die op de looppaden blijft, hoeft de voorgeschreven PBM niet te dragen. Klopt dat?",
                a: "Nee, iedereen die een gebied met gebodsborden betreedt, moet de vermelde PBM dragen",
                wrong: ["Ja, looppaden zijn altijd veilig", "Ja, bezoekers zijn altijd vrijgesteld", "Ja, als hij begeleid wordt door een werknemer"],
                why: "Gebodsborden gelden voor iedereen in dat gebied, ook voor bezoekers op de looppaden."
            }
        ]
    }
];