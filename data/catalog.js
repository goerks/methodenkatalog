// Erzeugt von tools/build.mjs aus methoden/*/*.md. Nicht von Hand bearbeiten.
const M = [
 {
  "id": "interview",
  "n": "Interview",
  "c": "erm",
  "m": "beide",
  "ph": "ermitteln",
  "t": "Einzelgespräch",
  "k": "Strukturiertes Einzelgespräch, um Wünsche, Probleme und Rahmenbedingungen einer Person aus erster Hand zu erfahren.",
  "aufwand": "30 bis 60 Min. pro Gespräch",
  "ab": [
   "Ziel und Leitfragen festlegen, Gesprächspartner auswählen",
   "Termin vereinbaren, Kontext kurz erklären",
   "Offene Fragen stellen, nachfragen, Beispiele verlangen",
   "Gesagtes am Ende zusammenfassen und bestätigen lassen",
   "Protokoll innerhalb von 24 Stunden erstellen und auswerten"
  ],
  "re": [
   "Offene Fragen vor geschlossenen Fragen",
   "Keine Lösungen vorschlagen, bevor das Problem klar ist",
   "Eine Person führt, eine zweite protokolliert"
  ],
  "bsp": {
   "t": "Interview mit Disponentin",
   "x": "Frage: «Erzählen Sie mir von der letzten Tourenplanung, die schiefging.» Antwort liefert drei konkrete Anforderungen: Warnung bei doppelter Fahrzeugbelegung, Ersatzfahrer-Vorschlag, Änderungsprotokoll."
  },
  "li": [
   [
    "stakeholder",
    "vorher",
    "Wen interviewen? Die Stakeholder-Analyse liefert die Liste."
   ],
   [
    "workshop",
    "alternative",
    "Bei vielen Beteiligten und Konflikten ist ein Workshop effizienter."
   ],
   [
    "persona",
    "danach",
    "Aus mehreren Interviews lassen sich Personas verdichten."
   ],
   [
    "user-stories",
    "danach",
    "Erkenntnisse werden als User Stories festgehalten."
   ]
  ],
  "tools": [
   "Interviewleitfaden",
   "Aufnahmegerät (mit Einverständnis)",
   "Miro"
  ],
  "s": "entwurf"
 },
 {
  "id": "workshop",
  "n": "Anforderungsworkshop",
  "c": "erm",
  "m": "beide",
  "ph": "ermitteln",
  "t": "Gruppenarbeit",
  "k": "Moderierte Sitzung mit mehreren Beteiligten, in der Anforderungen gemeinsam gesammelt, geklärt und abgestimmt werden.",
  "aufwand": "2 bis 4 Stunden, Vorbereitung 1 Tag",
  "ab": [
   "Ziel, Agenda und Teilnehmer festlegen",
   "Einstieg: Ziel und Spielregeln klären",
   "Ideen sammeln (z. B. Brainwriting), dann clustern",
   "Cluster diskutieren und gemeinsam bewerten",
   "Ergebnisse fotografieren, Aktionen und Verantwortliche festhalten"
  ],
  "re": [
   "Moderator ist neutral und gehört nicht zum Entscheiderkreis",
   "Zeitboxen für jeden Block",
   "Entscheidungen sofort sichtbar festhalten"
  ],
  "bsp": {
   "t": "Workshop «Kundenportal»",
   "x": "Acht Personen aus Vertrieb, Support und IT sammeln in 15 Minuten 40 Karten. Nach dem Clustern bleiben 6 Themenblöcke, die direkt in Epics überführt werden."
  },
  "li": [
   [
    "stakeholder",
    "vorher",
    "Teilnehmerkreis aus der Stakeholder-Analyse ableiten."
   ],
   [
    "moscow",
    "danach",
    "Gesammelte Anforderungen im Workshop mit MoSCoW einordnen."
   ],
   [
    "story-mapping",
    "danach",
    "Ergebnisse als Story Map ordnen."
   ],
   [
    "interview",
    "alternative",
    "Für sensible Themen sind Einzelgespräche offener."
   ]
  ],
  "tools": [
   "Miro",
   "Mural",
   "Haftnotizen",
   "Flipchart"
  ],
  "s": "entwurf"
 },
 {
  "id": "beobachtung",
  "n": "Beobachtung (Contextual Inquiry)",
  "c": "erm",
  "m": "beide",
  "ph": "ermitteln",
  "t": "Feldstudie",
  "k": "Anwender bei der echten Arbeit beobachten und dabei Fragen stellen. Zeigt, was Menschen tun, nicht nur, was sie sagen.",
  "aufwand": "Halber bis ganzer Tag pro Person",
  "ab": [
   "Beobachtungsziel und Arbeitsumgebung klären",
   "Person bei der Arbeit begleiten, möglichst wenig stören",
   "Auffälligkeiten, Umwege und Workarounds notieren",
   "Kurze Nachfragen an passenden Stellen",
   "Beobachtungen in Probleme und Anforderungen übersetzen"
  ],
  "re": [
   "Beobachten, nicht bewerten",
   "Echte Arbeitssituation statt Vorführung",
   "Datenschutz und Einverständnis vorher klären"
  ],
  "bsp": {
   "t": "Lagerarbeiter",
   "x": "Beobachtung: Scanner wird zweimal pro Palette abgelegt, weil der Bildschirm im Sonnenlicht unlesbar ist. Anforderung: kontrastreicher Modus und grosse Schrift."
  },
  "li": [
   [
    "interview",
    "ergaenzt",
    "Im Anschluss ein Interview, um das Beobachtete zu klären."
   ],
   [
    "persona",
    "danach",
    "Beobachtungen fliessen in Personas ein."
   ],
   [
    "aktivitaetsdiagramm",
    "danach",
    "Den beobachteten Ablauf als Aktivitätsdiagramm modellieren."
   ]
  ],
  "tools": [
   "Notizen",
   "Foto (mit Einverständnis)",
   "Beobachtungsbogen"
  ],
  "s": "entwurf"
 },
 {
  "id": "stakeholder",
  "n": "Stakeholder-Analyse",
  "c": "erm",
  "m": "beide",
  "ph": "verstehen",
  "t": "Analyse",
  "k": "Identifiziert alle Personen und Gruppen mit Einfluss oder Interesse am Vorhaben und legt fest, wie man mit ihnen umgeht.",
  "aufwand": "1 bis 2 Stunden, laufend aktualisieren",
  "ab": [
   "Alle Betroffenen und Beteiligten sammeln",
   "Nach Einfluss und Interesse einordnen",
   "Erwartungen und mögliche Konflikte notieren",
   "Kommunikationsstrategie je Gruppe festlegen",
   "Regelmässig überprüfen"
  ],
  "re": [
   "Auch stille und indirekt Betroffene aufnehmen",
   "Liste ist nicht öffentlich, wenn sie Bewertungen enthält"
  ],
  "bsp": {
   "t": "Einfluss-Interesse-Matrix",
   "x": "Geschäftsleitung: hoher Einfluss, mittleres Interesse, eng informieren. Support-Team: geringer Einfluss, hohes Interesse, früh einbinden und Feedback holen."
  },
  "li": [
   [
    "kontextdiagramm",
    "ergaenzt",
    "Das Kontextdiagramm zeigt die externen Akteure."
   ],
   [
    "interview",
    "danach",
    "Schlüsselpersonen einzeln befragen."
   ],
   [
    "workshop",
    "danach",
    "Teilnehmer für Workshops auswählen."
   ],
   [
    "persona",
    "danach",
    "Nutzergruppen zu Personas verdichten."
   ]
  ],
  "tools": [
   "Matrix (Einfluss/Interesse)",
   "Miro",
   "Excel"
  ],
  "s": "entwurf"
 },
 {
  "id": "persona",
  "n": "Persona",
  "c": "erm",
  "m": "agil",
  "ph": "verstehen",
  "t": "Nutzerprofil",
  "k": "Fiktive, aber datenbasierte Beschreibung einer typischen Nutzerin mit Zielen, Frust und Kontext. Hilft dem Team, für echte Menschen zu entscheiden.",
  "aufwand": "2 bis 3 Stunden pro Persona",
  "ab": [
   "Interviews und Beobachtungen auswerten",
   "Muster in Zielen und Verhalten erkennen",
   "Typische Profile mit Name, Rolle, Zielen und Frust beschreiben",
   "Im Team teilen und aufhängen",
   "Mit neuen Erkenntnissen aktualisieren"
  ],
  "re": [
   "Auf Daten stützen, nicht auf Annahmen",
   "Wenige Personas (2 bis 4) statt viele",
   "Keine Stereotype, sondern Verhalten beschreiben"
  ],
  "bsp": {
   "t": "Persona «Rosa, Disponentin»",
   "x": "52 Jahre, plant täglich 30 Touren, will schnelle Übersicht. Frust: Änderungen kommen per Telefon und gehen verloren."
  },
  "li": [
   [
    "interview",
    "vorher",
    "Interviews liefern die Datengrundlage."
   ],
   [
    "beobachtung",
    "vorher",
    "Beobachtungen zeigen echtes Verhalten."
   ],
   [
    "user-stories",
    "danach",
    "Personas sind Rollen in User Stories («Als Disponentin ...»)."
   ]
  ],
  "tools": [
   "Persona-Vorlage",
   "Miro",
   "Figma"
  ],
  "s": "entwurf"
 },
 {
  "id": "user-stories",
  "n": "User Stories",
  "c": "dok",
  "m": "agil",
  "ph": "spezifizieren",
  "t": "Anforderungsformat",
  "k": "Kurze Anforderung aus Sicht des Nutzers im Format «Als ... möchte ich ..., damit ...». Dient als Gesprächsanlass, nicht als vollständige Spezifikation.",
  "aufwand": "5 bis 15 Min. pro Story",
  "ab": [
   "Rolle und Ziel aus Personas oder Interviews ableiten",
   "Story im Format «Als / möchte ich / damit» formulieren",
   "Mit INVEST prüfen: unabhängig, verhandelbar, wertvoll, schätzbar, klein, testbar",
   "Akzeptanzkriterien ergänzen",
   "Im Product Backlog ablegen und im Refinement klären"
  ],
  "re": [
   "Eine Story liefert Nutzen für eine Rolle",
   "Sie passt in einen Sprint",
   "Details entstehen im Gespräch, nicht im Text",
   "Ohne Akzeptanzkriterien ist sie nicht fertig beschrieben"
  ],
  "bsp": {
   "t": "Story für Tourenplanung",
   "x": "Als Disponentin möchte ich bei einer doppelten Fahrzeugbelegung gewarnt werden, damit ich keine unmöglichen Touren verschicke.\nAkzeptanz: Warnung erscheint vor dem Speichern. Warnung nennt das betroffene Fahrzeug."
  },
  "li": [
   [
    "persona",
    "vorher",
    "Personas liefern die Rollen für «Als ...»."
   ],
   [
    "akzeptanzkriterien",
    "danach",
    "Jede Story erhält Akzeptanzkriterien."
   ],
   [
    "story-points",
    "danach",
    "Stories werden in Story Points geschätzt."
   ],
   [
    "planning-poker",
    "danach",
    "Die Schätzung erfolgt im Planning Poker."
   ],
   [
    "product-backlog",
    "danach",
    "Stories wohnen im Product Backlog."
   ],
   [
    "use-cases",
    "alternative",
    "Für komplexe Abläufe mit Alternativen sind Use Cases ausführlicher."
   ],
   [
    "dor-dod",
    "ergaenzt",
    "Die Definition of Ready sagt, wann eine Story bereit ist."
   ]
  ],
  "tools": [
   "Jira",
   "Azure DevOps",
   "Trello",
   "Haftnotizen"
  ],
  "s": "entwurf",
  "vis": "story"
 },
 {
  "id": "use-cases",
  "n": "Use Cases",
  "c": "dok",
  "m": "klassisch",
  "ph": "spezifizieren",
  "t": "Anforderungsformat",
  "k": "Beschreibt die Interaktion zwischen Akteur und System zu einem Ziel, mit Hauptablauf, Alternativen und Fehlerfällen.",
  "aufwand": "30 bis 90 Min. pro Use Case",
  "ab": [
   "Akteur und Ziel benennen",
   "Vorbedingungen und Nachbedingungen festlegen",
   "Hauptablauf in nummerierten Schritten beschreiben",
   "Alternativ- und Fehlabläufe ergänzen",
   "Mit Stakeholdern reviewen"
  ],
  "re": [
   "Ein Use Case beschreibt ein Ziel eines Akteurs",
   "Name im Format Verb + Objekt",
   "Schritte sind Akteur-System-Dialog, ohne UI-Details"
  ],
  "bsp": {
   "t": "UC-04 Tour freigeben",
   "x": "Akteur: Disponentin. Vorbedingung: Tour ist vollständig. Ablauf: 1. Disponentin wählt «Freigeben». 2. System prüft Fahrzeug und Fahrer. 3. System sperrt Tour für Änderungen. Alternative 2a: Konflikt, System zeigt Details."
  },
  "li": [
   [
    "use-case-diagramm",
    "ergaenzt",
    "Das Diagramm gibt den Überblick, der Use Case die Details."
   ],
   [
    "aktivitaetsdiagramm",
    "ergaenzt",
    "Komplexe Abläufe als Aktivitätsdiagramm darstellen."
   ],
   [
    "user-stories",
    "alternative",
    "Für kleine, agile Einheiten sind User Stories leichter."
   ],
   [
    "akzeptanzkriterien",
    "danach",
    "Aus Abläufen entstehen Testfälle und Kriterien."
   ],
   [
    "pflichtenheft",
    "danach",
    "Use Cases sind Kern des Pflichtenhefts."
   ]
  ],
  "tools": [
   "Word-Vorlage",
   "Enterprise Architect",
   "Confluence"
  ],
  "s": "entwurf",
  "vis": "usecase-text"
 },
 {
  "id": "akzeptanzkriterien",
  "n": "Akzeptanzkriterien (Gherkin)",
  "c": "dok",
  "m": "agil",
  "ph": "spezifizieren",
  "t": "Testbare Bedingungen",
  "k": "Überprüfbare Bedingungen, unter denen eine Anforderung als erfüllt gilt. Häufig im Format Gegeben / Wenn / Dann (Gherkin).",
  "aufwand": "10 bis 20 Min. pro Story",
  "ab": [
   "Story im Team besprechen",
   "Konkrete Beispiele für erwartetes Verhalten sammeln",
   "In Gegeben / Wenn / Dann formulieren",
   "Randfälle ergänzen",
   "Als Abnahmetest verwenden oder automatisieren"
  ],
  "re": [
   "Jedes Kriterium ist eindeutig mit Ja oder Nein beantwortbar",
   "Kein technisches Vorgehen, sondern beobachtbares Verhalten",
   "Drei Amigos: Fachseite, Entwicklung, Test sprechen gemeinsam"
  ],
  "bsp": {
   "t": "Warnung bei Doppelbelegung",
   "x": "Gegeben: Fahrzeug 12 ist am Montag für Tour A eingeplant.\nWenn: die Disponentin Fahrzeug 12 für Tour B am Montag wählt.\nDann: zeigt das System eine Warnung mit dem Namen von Tour A."
  },
  "li": [
   [
    "user-stories",
    "vorher",
    "Kriterien gehören zu jeder Story."
   ],
   [
    "dor-dod",
    "ergaenzt",
    "Definition of Done verlangt, dass Kriterien erfüllt sind."
   ],
   [
    "review",
    "danach",
    "Kriterien in der Abnahme prüfen."
   ],
   [
    "use-cases",
    "vorher",
    "Kriterien lassen sich aus Use-Case-Abläufen ableiten."
   ]
  ],
  "tools": [
   "Cucumber",
   "SpecFlow",
   "Behave",
   "Jira"
  ],
  "s": "entwurf",
  "vis": "gherkin"
 },
 {
  "id": "dor-dod",
  "n": "Definition of Ready / Done",
  "c": "dok",
  "m": "agil",
  "ph": "spezifizieren",
  "t": "Qualitätsvereinbarung",
  "k": "Zwei Checklisten des Teams: Wann ist eine Story bereit für den Sprint (Ready) und wann gilt sie als fertig (Done).",
  "aufwand": "1 Stunde zur Einführung, danach laufend",
  "ab": [
   "Im Team die Kriterien sammeln",
   "Als kurze Checkliste formulieren",
   "Sichtbar aufhängen oder im Tool hinterlegen",
   "In Refinement und Review anwenden",
   "In der Retrospektive anpassen"
  ],
  "re": [
   "Vom ganzen Team gemeinsam beschlossen",
   "Kurz halten (5 bis 8 Punkte)",
   "Done gilt für jede Story, ohne Ausnahme"
  ],
  "bsp": {
   "t": "Beispiel DoR / DoD",
   "x": "Ready: Akzeptanzkriterien vorhanden, geschätzt, Abhängigkeiten geklärt, Mockup vorhanden.\nDone: Code reviewt, Tests grün, Doku aktualisiert, vom Product Owner abgenommen."
  },
  "li": [
   [
    "user-stories",
    "ergaenzt",
    "Gilt für jede Story im Backlog."
   ],
   [
    "refinement",
    "ergaenzt",
    "Im Refinement wird Ready hergestellt."
   ],
   [
    "akzeptanzkriterien",
    "ergaenzt",
    "Erfüllte Kriterien sind Teil von Done."
   ],
   [
    "review",
    "danach",
    "Prüfung im Sprint Review."
   ]
  ],
  "tools": [
   "Teamboard",
   "Jira-Workflow",
   "Wiki"
  ],
  "s": "entwurf"
 },
 {
  "id": "nfr",
  "n": "Qualitätsanforderungen (NFR)",
  "c": "dok",
  "m": "beide",
  "ph": "spezifizieren",
  "t": "Anforderungsart",
  "k": "Nichtfunktionale Anforderungen wie Performance, Sicherheit, Bedienbarkeit oder Verfügbarkeit, messbar formuliert.",
  "aufwand": "1 bis 3 Stunden je Themenfeld",
  "ab": [
   "Qualitätsmerkmale sammeln (z. B. ISO 25010)",
   "Relevante auswählen und priorisieren",
   "Mit konkreten Messwerten formulieren",
   "Mit Architektur und Test abstimmen",
   "Als Kriterien in Stories oder Spezifikation übernehmen"
  ],
  "re": [
   "Jede Anforderung ist messbar (Wert, Einheit, Bedingung)",
   "Keine Adjektive wie «schnell» oder «sicher» ohne Zahl",
   "Kritische NFR früh klären, da sie Architektur prägen"
  ],
  "bsp": {
   "t": "Performance und Verfügbarkeit",
   "x": "Die Tourenliste lädt bei 5000 Einträgen in unter 2 Sekunden (95. Perzentil). Verfügbarkeit werktags 06 bis 20 Uhr mindestens 99.5 %."
  },
  "li": [
   [
    "user-stories",
    "ergaenzt",
    "NFR als Akzeptanzkriterien oder Randbedingung an Stories."
   ],
   [
    "dor-dod",
    "ergaenzt",
    "Wichtige NFR in der Definition of Done verankern."
   ],
   [
    "pflichtenheft",
    "danach",
    "NFR haben ein eigenes Kapitel im Pflichtenheft."
   ],
   [
    "kano",
    "ergaenzt",
    "Basisfaktoren im Kano-Modell sind oft NFR."
   ]
  ],
  "tools": [
   "ISO 25010",
   "Planguage",
   "Quality Attribute Workshop"
  ],
  "s": "entwurf"
 },
 {
  "id": "pflichtenheft",
  "n": "Lastenheft / Pflichtenheft",
  "c": "dok",
  "m": "klassisch",
  "ph": "spezifizieren",
  "t": "Spezifikationsdokument",
  "k": "Klassische Dokumentation: Das Lastenheft beschreibt, was der Auftraggeber will, das Pflichtenheft, wie der Auftragnehmer es umsetzt.",
  "aufwand": "Tage bis Wochen",
  "ab": [
   "Lastenheft mit Zielen, Umfang und Anforderungen erstellen",
   "Anbieter prüft und erarbeitet das Pflichtenheft",
   "Lösungskonzept, Schnittstellen und NFR ergänzen",
   "Review mit Auftraggeber",
   "Freigabe als Vertragsgrundlage"
  ],
  "re": [
   "Jede Anforderung hat eine eindeutige ID",
   "Verbindliche Sprache (muss, soll, kann)",
   "Änderungen nur über Change Management"
  ],
  "bsp": {
   "t": "Gliederung (Auszug)",
   "x": "1 Ziele und Umfang · 2 Stakeholder · 3 Systemkontext · 4 Funktionale Anforderungen (Use Cases) · 5 Qualitätsanforderungen · 6 Randbedingungen · 7 Abnahme"
  },
  "li": [
   [
    "use-cases",
    "vorher",
    "Funktionale Anforderungen als Use Cases."
   ],
   [
    "nfr",
    "vorher",
    "Qualitätsanforderungen als eigenes Kapitel."
   ],
   [
    "kontextdiagramm",
    "ergaenzt",
    "Systemkontext als Diagramm einbinden."
   ],
   [
    "traceability",
    "ergaenzt",
    "Rückverfolgbarkeit der IDs sicherstellen."
   ],
   [
    "change-management",
    "danach",
    "Änderungen kontrolliert abwickeln."
   ],
   [
    "product-backlog",
    "alternative",
    "Agile Teams ersetzen das Dokument durch ein lebendes Backlog."
   ]
  ],
  "tools": [
   "Word",
   "Confluence",
   "Doors",
   "Polarion"
  ],
  "s": "entwurf"
 },
 {
  "id": "aktivitaetsdiagramm",
  "n": "Aktivitätsdiagramm (UML)",
  "c": "mod",
  "m": "beide",
  "ph": "spezifizieren",
  "t": "Modell",
  "k": "Zeigt einen Ablauf als Folge von Aktionen mit Entscheidungen, Verzweigungen und parallelen Strängen. Ideal für Prozesse und Use-Case-Abläufe.",
  "aufwand": "30 bis 60 Min.",
  "ab": [
   "Ablauf und Start/Ende festlegen",
   "Aktionen in Reihenfolge zeichnen",
   "Entscheidungen als Raute mit Bedingungen einfügen",
   "Parallele Abläufe mit Balken (Fork/Join) darstellen",
   "Optional: Swimlanes für Verantwortliche ergänzen"
  ],
  "re": [
   "Ein Startknoten, mindestens ein Endknoten",
   "Jede Raute hat Bedingungen an den ausgehenden Kanten",
   "Aktionen mit Verb benennen",
   "Pro Diagramm ein Ziel"
  ],
  "bsp": {
   "t": "Tour freigeben",
   "x": "Start → Tour prüfen → [Konflikt?] ja: Warnung anzeigen und zurück · nein: Tour sperren → Fahrer benachrichtigen → Ende."
  },
  "li": [
   [
    "use-cases",
    "ergaenzt",
    "Visualisiert den Ablauf eines Use Cases."
   ],
   [
    "bpmn",
    "alternative",
    "BPMN eignet sich besser für Geschäftsprozesse mit mehreren Beteiligten."
   ],
   [
    "zustandsdiagramm",
    "ergaenzt",
    "Zustandsdiagramm zeigt den Lebenszyklus eines Objekts."
   ],
   [
    "beobachtung",
    "vorher",
    "Beobachtete Abläufe modellieren."
   ]
  ],
  "tools": [
   "draw.io",
   "PlantUML",
   "Enterprise Architect",
   "Miro"
  ],
  "s": "entwurf",
  "vis": "activity"
 },
 {
  "id": "use-case-diagramm",
  "n": "Use-Case-Diagramm",
  "c": "mod",
  "m": "klassisch",
  "ph": "spezifizieren",
  "t": "Modell",
  "k": "Übersicht über Akteure und die Funktionen (Use Cases), die das System für sie bereitstellt. Zeigt den Umfang auf einer Seite.",
  "aufwand": "30 Min.",
  "ab": [
   "Systemgrenze festlegen",
   "Akteure ausserhalb des Systems zeichnen",
   "Use Cases als Ovale innerhalb der Grenze",
   "Akteure mit ihren Use Cases verbinden",
   "Include/Extend nur bei Bedarf einsetzen"
  ],
  "re": [
   "Akteure stehen ausserhalb der Systemgrenze",
   "Use Cases benennen mit Verb + Objekt",
   "Auf einer Seite lesbar bleiben"
  ],
  "bsp": {
   "t": "Tourenplanung",
   "x": "Akteure: Disponentin, Fahrer. Use Cases: Tour planen, Tour freigeben (Disponentin), Tour einsehen (Fahrer)."
  },
  "li": [
   [
    "use-cases",
    "danach",
    "Jeder Use Case wird einzeln beschrieben."
   ],
   [
    "kontextdiagramm",
    "ergaenzt",
    "Kontextdiagramm zeigt Nachbarsysteme."
   ],
   [
    "stakeholder",
    "vorher",
    "Akteure aus der Stakeholder-Analyse."
   ],
   [
    "story-mapping",
    "alternative",
    "Agile Teams nutzen oft die Story Map als Überblick."
   ]
  ],
  "tools": [
   "draw.io",
   "PlantUML",
   "Enterprise Architect"
  ],
  "s": "entwurf",
  "vis": "usecase"
 },
 {
  "id": "bpmn",
  "n": "BPMN-Prozessmodell",
  "c": "mod",
  "m": "klassisch",
  "ph": "spezifizieren",
  "t": "Modell",
  "k": "Standardnotation für Geschäftsprozesse mit Pools, Lanes, Ereignissen, Aufgaben und Gateways. Verständlich für Fachbereich und IT.",
  "aufwand": "1 bis 3 Stunden",
  "ab": [
   "Prozessziel und Auslöser bestimmen",
   "Beteiligte als Lanes anlegen",
   "Aufgaben, Gateways und Ereignisse modellieren",
   "Ausnahmen und Fehlerfälle ergänzen",
   "Mit Fachbereich durchsprechen"
  ],
  "re": [
   "Ein Prozess hat ein Start- und mindestens ein Endereignis",
   "Aufgaben mit Verb + Objekt benennen",
   "Gateways immer paarweise schliessen"
  ],
  "bsp": {
   "t": "Bestellung bearbeiten",
   "x": "Start: Bestellung eingegangen → Verfügbarkeit prüfen → [lieferbar?] → Rechnung erstellen → Versand → Ende."
  },
  "li": [
   [
    "aktivitaetsdiagramm",
    "alternative",
    "UML-Aktivitätsdiagramm ist leichter, wenn nur ein System im Fokus ist."
   ],
   [
    "workshop",
    "vorher",
    "Prozess im Workshop erheben."
   ],
   [
    "kontextdiagramm",
    "vorher",
    "Systemgrenze zuerst klären."
   ],
   [
    "user-stories",
    "danach",
    "Aus Prozessschritten Stories ableiten."
   ]
  ],
  "tools": [
   "Camunda Modeler",
   "Signavio",
   "draw.io",
   "Bizagi"
  ],
  "s": "entwurf"
 },
 {
  "id": "kontextdiagramm",
  "n": "Kontextdiagramm",
  "c": "mod",
  "m": "beide",
  "ph": "verstehen",
  "t": "Modell",
  "k": "Zeigt das System als Black Box mit seinen Nachbarn (Nutzer, Fremdsysteme) und den Datenflüssen. Klärt den Umfang früh.",
  "aufwand": "30 bis 60 Min.",
  "ab": [
   "System als Kasten in die Mitte setzen",
   "Externe Akteure und Systeme ringsum anordnen",
   "Datenflüsse mit Pfeilen und Beschriftung ergänzen",
   "Mit Stakeholdern auf Vollständigkeit prüfen",
   "Unklare Schnittstellen als offene Punkte vermerken"
  ],
  "re": [
   "Keine inneren Details des Systems",
   "Jeder Pfeil hat Richtung und Inhalt",
   "Alle Schnittstellen sind sichtbar"
  ],
  "bsp": {
   "t": "Tourenplanung",
   "x": "Mitte: Tourenplanung. Aussen: Disponentin, Fahrer-App, ERP (Aufträge), Fahrzeugverwaltung."
  },
  "li": [
   [
    "stakeholder",
    "ergaenzt",
    "Akteure und Stakeholder abgleichen."
   ],
   [
    "use-case-diagramm",
    "danach",
    "Funktionen pro Akteur aufschlüsseln."
   ],
   [
    "bpmn",
    "danach",
    "Prozesse innerhalb der Grenze modellieren."
   ],
   [
    "pflichtenheft",
    "danach",
    "Als Kapitel Systemkontext."
   ]
  ],
  "tools": [
   "draw.io",
   "Miro",
   "PlantUML"
  ],
  "s": "entwurf",
  "vis": "context"
 },
 {
  "id": "zustandsdiagramm",
  "n": "Zustandsdiagramm",
  "c": "mod",
  "m": "klassisch",
  "ph": "spezifizieren",
  "t": "Modell",
  "k": "Zeigt Zustände eines Objekts und die Ereignisse, die zwischen ihnen wechseln. Gut für Lebenszyklen wie Bestellungen oder Tickets.",
  "aufwand": "30 Min.",
  "ab": [
   "Objekt und Lebenszyklus festlegen",
   "Zustände sammeln",
   "Übergänge mit Ereignis [Bedingung] / Aktion beschriften",
   "Start- und Endzustand ergänzen",
   "Mit Fachbereich prüfen"
  ],
  "re": [
   "Zustände sind Adjektive oder Partizipien (offen, geprüft)",
   "Jeder Übergang hat ein auslösendes Ereignis",
   "Keine toten Zustände"
  ],
  "bsp": {
   "t": "Tour",
   "x": "Entwurf → (freigeben) → Freigegeben → (starten) → Unterwegs → (abschliessen) → Abgeschlossen. Aus Entwurf und Freigegeben: stornieren → Storniert."
  },
  "li": [
   [
    "aktivitaetsdiagramm",
    "ergaenzt",
    "Ablauf (Aktivität) und Zustand (Objekt) ergänzen sich."
   ],
   [
    "use-cases",
    "ergaenzt",
    "Vor-/Nachbedingungen entsprechen Zuständen."
   ],
   [
    "akzeptanzkriterien",
    "danach",
    "Zustandsübergänge als Testfälle."
   ]
  ],
  "tools": [
   "draw.io",
   "PlantUML",
   "Enterprise Architect"
  ],
  "s": "entwurf"
 },
 {
  "id": "moscow",
  "n": "MoSCoW-Priorisierung",
  "c": "prio",
  "m": "beide",
  "ph": "bewerten",
  "t": "Priorisierung",
  "k": "Einteilung von Anforderungen in Must, Should, Could und Won't (diesmal nicht). Einfach und im Workshop schnell anwendbar.",
  "aufwand": "1 bis 2 Stunden",
  "ab": [
   "Zeitrahmen und Ziel klären",
   "Jede Anforderung einer Klasse zuordnen",
   "Must-Haves auf Notwendigkeit prüfen",
   "Won't bewusst festhalten",
   "Ergebnis mit Stakeholdern abstimmen"
  ],
  "re": [
   "Must heisst: ohne geht das Release nicht live",
   "Must-Anteil bei höchstens 60 % des Aufwands halten",
   "Won't gilt nur für diesen Zeitraum"
  ],
  "bsp": {
   "t": "Release 1",
   "x": "Must: Tour anlegen, Fahrzeugkonflikt prüfen. Should: Ersatzfahrer-Vorschlag. Could: Karte. Won't: Mobile Offline-Modus."
  },
  "li": [
   [
    "workshop",
    "vorher",
    "Im Workshop gemeinsam einordnen."
   ],
   [
    "kano",
    "alternative",
    "Kano fragt direkt nach Nutzerzufriedenheit."
   ],
   [
    "wsjf",
    "alternative",
    "WSJF rechnet Wert gegen Aufwand."
   ],
   [
    "product-backlog",
    "danach",
    "Reihenfolge im Backlog übernehmen."
   ]
  ],
  "tools": [
   "Miro",
   "Excel",
   "Jira-Label"
  ],
  "s": "entwurf",
  "vis": "moscow"
 },
 {
  "id": "kano",
  "n": "Kano-Modell",
  "c": "prio",
  "m": "beide",
  "ph": "bewerten",
  "t": "Priorisierung",
  "k": "Ordnet Merkmale nach Wirkung auf die Zufriedenheit ein: Basis-, Leistungs- und Begeisterungsfaktoren.",
  "aufwand": "2 bis 4 Stunden mit Umfrage",
  "ab": [
   "Merkmale auswählen",
   "Je Merkmal zwei Fragen stellen (funktional / dysfunktional)",
   "Antworten in Kano-Tabelle auswerten",
   "Merkmale den Kategorien zuordnen",
   "Entscheidung ableiten"
  ],
  "re": [
   "Basisfaktoren sind Pflicht, sorgen aber nicht für Begeisterung",
   "Begeisterungsfaktoren werden mit der Zeit zu Basisfaktoren",
   "Befragung mit echten Nutzern"
  ],
  "bsp": {
   "t": "Kundenportal",
   "x": "Basis: Login. Leistung: Suchgeschwindigkeit. Begeisterung: automatische Terminvorschläge."
  },
  "li": [
   [
    "moscow",
    "alternative",
    "MoSCoW ist schneller, aber ohne Nutzerdaten."
   ],
   [
    "persona",
    "vorher",
    "Personas als Befragungsgruppe."
   ],
   [
    "nfr",
    "ergaenzt",
    "Basisfaktoren sind oft Qualitätsanforderungen."
   ],
   [
    "product-backlog",
    "danach",
    "Ergebnis fliesst in die Reihenfolge."
   ]
  ],
  "tools": [
   "Umfrage-Tool",
   "Excel"
  ],
  "s": "entwurf"
 },
 {
  "id": "wsjf",
  "n": "WSJF (Weighted Shortest Job First)",
  "c": "prio",
  "m": "agil",
  "ph": "bewerten",
  "t": "Priorisierung",
  "k": "Rechnet die Kosten der Verzögerung gegen die Dauer. Höchster Wert pro Aufwand kommt zuerst.",
  "aufwand": "1 Stunde",
  "ab": [
   "Kosten der Verzögerung bestimmen (Nutzerwert, Zeitkritikalität, Risikoreduktion)",
   "Aufwand schätzen",
   "WSJF = Kosten der Verzögerung / Aufwand",
   "Nach Ergebnis sortieren",
   "Regelmässig neu berechnen"
  ],
  "re": [
   "Alle Faktoren relativ bewerten (z. B. Fibonacci)",
   "Im Team bewerten, nicht allein",
   "Das Ergebnis ist Diskussionsgrundlage"
  ],
  "bsp": {
   "t": "Zwei Features",
   "x": "Feature A: Delay 13, Aufwand 5 → 2.6. Feature B: Delay 8, Aufwand 2 → 4.0. B kommt zuerst."
  },
  "li": [
   [
    "story-points",
    "vorher",
    "Aufwand in Story Points einsetzen."
   ],
   [
    "planning-poker",
    "vorher",
    "Aufwand per Planning Poker schätzen."
   ],
   [
    "moscow",
    "alternative",
    "Einfacher, aber ohne Rechnung."
   ],
   [
    "product-backlog",
    "danach",
    "Reihenfolge ins Backlog."
   ]
  ],
  "tools": [
   "Excel",
   "Jira (WSJF-Feld)"
  ],
  "s": "entwurf"
 },
 {
  "id": "planning-poker",
  "n": "Planning Poker",
  "c": "prio",
  "m": "agil",
  "ph": "bewerten",
  "t": "Schätzung",
  "k": "Teambasierte Schätzmethode: Alle zeigen gleichzeitig eine Karte mit ihrer Schätzung. Abweichungen werden besprochen.",
  "aufwand": "2 bis 5 Min. pro Story",
  "ab": [
   "Product Owner stellt die Story vor",
   "Fragen klären",
   "Alle wählen verdeckt eine Karte",
   "Gleichzeitig aufdecken",
   "Höchste und niedrigste Schätzung begründen, neu schätzen bis Einigung"
  ],
  "re": [
   "Skala: 1, 2, 3, 5, 8, 13, 21 (Fibonacci)",
   "Niemand beeinflusst vor dem Aufdecken",
   "Schätzen tut das Team, das umsetzt",
   "Kein Durchschnitt, sondern Einigung"
  ],
  "bsp": {
   "t": "Story «Warnung bei Doppelbelegung»",
   "x": "Schätzungen: 3, 5, 5, 13. Entwickler mit 13 verweist auf fehlende Fahrzeug-Schnittstelle. Nach Klärung: alle 5."
  },
  "li": [
   [
    "user-stories",
    "vorher",
    "Geschätzt werden Stories."
   ],
   [
    "story-points",
    "ergaenzt",
    "Das Ergebnis sind Story Points."
   ],
   [
    "refinement",
    "ergaenzt",
    "Findet oft im Refinement statt."
   ],
   [
    "product-backlog",
    "danach",
    "Schätzung im Backlog festhalten."
   ]
  ],
  "tools": [
   "Karten",
   "Planning-Poker-App",
   "Jira-Plugin"
  ],
  "s": "entwurf",
  "vis": "poker"
 },
 {
  "id": "story-points",
  "n": "Story Points",
  "c": "prio",
  "m": "agil",
  "ph": "bewerten",
  "t": "Schätzeinheit",
  "k": "Relative Einheit für Grösse und Komplexität einer Story, unabhängig von Stunden. Mit der Velocity wird planbar.",
  "aufwand": "Laufend",
  "ab": [
   "Referenzstory festlegen (z. B. 3 Punkte)",
   "Neue Stories relativ dazu schätzen",
   "Fertige Punkte pro Sprint zählen (Velocity)",
   "Velocity mitteln",
   "Release mit Velocity planen"
  ],
  "re": [
   "Punkte gelten nur innerhalb eines Teams",
   "Nicht in Stunden umrechnen",
   "Nur fertige Stories zählen",
   "Nicht als Leistungsmessung nutzen"
  ],
  "bsp": {
   "t": "Velocity",
   "x": "Letzte drei Sprints: 21, 24, 18 Punkte → Velocity 21. Backlog mit 84 Punkten braucht etwa 4 Sprints."
  },
  "li": [
   [
    "planning-poker",
    "vorher",
    "Punkte werden im Planning Poker bestimmt."
   ],
   [
    "user-stories",
    "vorher",
    "Punkte hängen an Stories."
   ],
   [
    "product-backlog",
    "danach",
    "Backlog mit Punkten bewerten."
   ],
   [
    "wsjf",
    "danach",
    "Aufwandsteil von WSJF."
   ]
  ],
  "tools": [
   "Jira",
   "Azure DevOps",
   "Burndown-Chart"
  ],
  "s": "entwurf"
 },
 {
  "id": "product-backlog",
  "n": "Product Backlog",
  "c": "plan",
  "m": "agil",
  "ph": "planen",
  "t": "Artefakt",
  "k": "Priorisierte, lebende Liste aller Anforderungen. Der Product Owner verantwortet sie, das Team schätzt.",
  "aufwand": "Laufend",
  "ab": [
   "Ideen und Anforderungen als Einträge sammeln",
   "Nach Wert und Dringlichkeit ordnen",
   "Obere Einträge verfeinern und schätzen",
   "Im Sprint Planning die obersten Einträge auswählen",
   "Neue Erkenntnisse jederzeit einordnen"
  ],
  "re": [
   "Ein Backlog pro Produkt",
   "Eine Person (Product Owner) bestimmt die Reihenfolge",
   "Oben fein, unten grob (DEEP)"
  ],
  "bsp": {
   "t": "Backlog-Auszug",
   "x": "1. Tour anlegen (5) · 2. Fahrzeugkonflikt warnen (5) · 3. Ersatzfahrer vorschlagen (8) · 4. Karte anzeigen (13)"
  },
  "li": [
   [
    "user-stories",
    "vorher",
    "Einträge sind meist User Stories."
   ],
   [
    "refinement",
    "ergaenzt",
    "Das Refinement pflegt das Backlog."
   ],
   [
    "story-mapping",
    "ergaenzt",
    "Story Map gibt dem Backlog Struktur."
   ],
   [
    "moscow",
    "vorher",
    "Priorisierung bestimmt die Reihenfolge."
   ],
   [
    "pflichtenheft",
    "alternative",
    "Ersetzt das Pflichtenheft im agilen Vorgehen."
   ]
  ],
  "tools": [
   "Jira",
   "Azure DevOps",
   "Trello"
  ],
  "s": "entwurf"
 },
 {
  "id": "refinement",
  "n": "Backlog Refinement",
  "c": "plan",
  "m": "agil",
  "ph": "planen",
  "t": "Meeting",
  "k": "Regelmässige Sitzung, in der das Team Backlog-Einträge klärt, aufteilt, schätzt und bereit für den Sprint macht.",
  "aufwand": "1 bis 2 Stunden pro Woche",
  "ab": [
   "Obersten Einträge durchgehen",
   "Offene Fragen klären",
   "Zu grosse Stories aufteilen",
   "Schätzen (z. B. Planning Poker)",
   "Akzeptanzkriterien ergänzen und Ready prüfen"
  ],
  "re": [
   "Höchstens 10 % der Sprintzeit",
   "Product Owner ist anwesend",
   "Ergebnis: Stories sind Ready"
  ],
  "bsp": {
   "t": "Story aufteilen",
   "x": "«Tour verwalten» (21 Punkte) wird in Anlegen (5), Ändern (5), Freigeben (8) und Stornieren (3) geteilt."
  },
  "li": [
   [
    "product-backlog",
    "ergaenzt",
    "Pflegt das Backlog."
   ],
   [
    "planning-poker",
    "ergaenzt",
    "Schätzung im Refinement."
   ],
   [
    "dor-dod",
    "ergaenzt",
    "Ziel ist Definition of Ready."
   ],
   [
    "user-stories",
    "ergaenzt",
    "Stories werden verfeinert."
   ]
  ],
  "tools": [
   "Jira",
   "Miro",
   "Planning-Poker-App"
  ],
  "s": "entwurf"
 },
 {
  "id": "story-mapping",
  "n": "User Story Mapping",
  "c": "plan",
  "m": "agil",
  "ph": "planen",
  "t": "Planungsmethode",
  "k": "Zeigt die Nutzerreise horizontal und Stories vertikal nach Priorität. Macht Umfang und Releases sichtbar.",
  "aufwand": "2 bis 4 Stunden",
  "ab": [
   "Nutzeraktivitäten als Rückgrat der Karte anordnen",
   "Schritte darunter ergänzen",
   "Stories pro Schritt sammeln",
   "Von oben nach unten priorisieren",
   "Releases als horizontale Schnitte ziehen"
  ],
  "re": [
   "Links nach rechts: zeitliche Abfolge",
   "Oben nach unten: Priorität",
   "Erstes Release ist ein durchgängiger, kleiner Weg (Walking Skeleton)"
  ],
  "bsp": {
   "t": "Tourenplanung",
   "x": "Aktivität «Planen»: Tour anlegen, Fahrzeug zuweisen. Aktivität «Freigeben»: prüfen, sperren. Release 1: die oberste Zeile durch alle Aktivitäten."
  },
  "li": [
   [
    "user-stories",
    "vorher",
    "Stories füllen die Karte."
   ],
   [
    "persona",
    "vorher",
    "Die Karte folgt der Nutzerreise der Persona."
   ],
   [
    "product-backlog",
    "danach",
    "Die Karte wird zum Backlog."
   ],
   [
    "workshop",
    "vorher",
    "Gemeinsam im Workshop erstellen."
   ],
   [
    "use-case-diagramm",
    "alternative",
    "Klassischer Überblick über Funktionen."
   ]
  ],
  "tools": [
   "Miro",
   "Mural",
   "StoriesOnBoard"
  ],
  "s": "entwurf",
  "vis": "storymap"
 },
 {
  "id": "review",
  "n": "Review / Inspektion",
  "c": "qs",
  "m": "beide",
  "ph": "absichern",
  "t": "Prüfung",
  "k": "Gemeinsame Prüfung von Anforderungen oder Ergebnissen auf Vollständigkeit, Verständlichkeit und Widerspruchsfreiheit.",
  "aufwand": "1 bis 2 Stunden",
  "ab": [
   "Prüfumfang und Rollen festlegen",
   "Dokument vorab lesen",
   "Befunde in der Sitzung sammeln",
   "Mängel einordnen und Verantwortliche bestimmen",
   "Nachprüfung der Korrekturen"
  ],
  "re": [
   "Prüfen, nicht Personen bewerten",
   "Checkliste für Qualitätskriterien",
   "Befunde schriftlich festhalten"
  ],
  "bsp": {
   "t": "Checkliste",
   "x": "Eindeutig? Testbar? Vollständig? Widerspruchsfrei? Machbar? Mit ID versehen?"
  },
  "li": [
   [
    "akzeptanzkriterien",
    "vorher",
    "Kriterien prüfen."
   ],
   [
    "pflichtenheft",
    "vorher",
    "Dokumente reviewen."
   ],
   [
    "dor-dod",
    "ergaenzt",
    "Done verlangt ein Review."
   ],
   [
    "prototyping",
    "alternative",
    "Prototypen erlauben praktische Prüfung."
   ]
  ],
  "tools": [
   "Checkliste",
   "Confluence",
   "Jira"
  ],
  "s": "entwurf"
 },
 {
  "id": "prototyping",
  "n": "Prototyping",
  "c": "qs",
  "m": "beide",
  "ph": "absichern",
  "t": "Validierung",
  "k": "Früh sichtbare oder klickbare Entwürfe, mit denen Anforderungen mit Nutzern getestet werden.",
  "aufwand": "Stunden bis Tage",
  "ab": [
   "Fragestellung festlegen",
   "Papierskizze oder Wireframe erstellen",
   "Mit echten Nutzern ausprobieren",
   "Beobachten und Feedback aufnehmen",
   "Anforderungen anpassen"
  ],
  "re": [
   "So einfach wie möglich",
   "Prototypen werden weggeworfen",
   "Mit Aufgaben testen, nicht nur zeigen"
  ],
  "bsp": {
   "t": "Klickprototyp",
   "x": "3 Disponentinnen lösen die Aufgabe «Tour freigeben» im Prototyp. 2 von 3 finden den Knopf nicht."
  },
  "li": [
   [
    "persona",
    "vorher",
    "Mit Personen aus Personas testen."
   ],
   [
    "review",
    "alternative",
    "Review für Dokumente, Prototyp für Bedienung."
   ],
   [
    "user-stories",
    "danach",
    "Erkenntnisse als neue Stories."
   ],
   [
    "aktivitaetsdiagramm",
    "ergaenzt",
    "Ablauf mit dem Prototyp abgleichen."
   ]
  ],
  "tools": [
   "Figma",
   "Balsamiq",
   "Papier"
  ],
  "s": "entwurf"
 },
 {
  "id": "traceability",
  "n": "Traceability-Matrix",
  "c": "qs",
  "m": "klassisch",
  "ph": "absichern",
  "t": "Verwaltung",
  "k": "Verbindet Anforderungen mit Quellen, Design, Code und Tests. Zeigt Abdeckung und Auswirkungen von Änderungen.",
  "aufwand": "Laufend",
  "ab": [
   "Eindeutige IDs vergeben",
   "Beziehungen festlegen (Quelle, Anforderung, Test)",
   "Verknüpfungen pflegen",
   "Abdeckung auswerten",
   "Bei Änderungen Auswirkungen ableiten"
  ],
  "re": [
   "IDs bleiben stabil",
   "Nur sinnvolle Beziehungen verfolgen",
   "Tool-gestützt pflegen"
  ],
  "bsp": {
   "t": "Ausschnitt",
   "x": "REQ-12 → UC-04 → TC-31, TC-32 → Build 1.4"
  },
  "li": [
   [
    "pflichtenheft",
    "ergaenzt",
    "Das Pflichtenheft liefert die IDs."
   ],
   [
    "change-management",
    "ergaenzt",
    "Auswirkungsanalyse bei Änderungen."
   ],
   [
    "akzeptanzkriterien",
    "ergaenzt",
    "Tests verlinken."
   ],
   [
    "use-cases",
    "ergaenzt",
    "Use Cases verlinken."
   ]
  ],
  "tools": [
   "Doors",
   "Polarion",
   "Jira",
   "Excel"
  ],
  "s": "entwurf"
 },
 {
  "id": "change-management",
  "n": "Änderungsmanagement",
  "c": "qs",
  "m": "klassisch",
  "ph": "absichern",
  "t": "Prozess",
  "k": "Geregelter Umgang mit Änderungswünschen: erfassen, bewerten, entscheiden, umsetzen.",
  "aufwand": "Je Antrag 30 Min. bis 2 Stunden",
  "ab": [
   "Änderungsantrag erfassen",
   "Auswirkungen auf Umfang, Kosten, Termin prüfen",
   "Entscheidung im Change Board",
   "Umsetzung planen",
   "Dokumente und Baseline aktualisieren"
  ],
  "re": [
   "Jede Änderung hat einen Antrag und eine Entscheidung",
   "Nachvollziehbare Historie",
   "Agile Teams: Änderung = neuer Backlog-Eintrag"
  ],
  "bsp": {
   "t": "Änderungsantrag CR-07",
   "x": "Wunsch: Export als Excel. Auswirkung: 5 Tage, kein Termineffekt. Entscheid: genehmigt für Release 2."
  },
  "li": [
   [
    "traceability",
    "vorher",
    "Auswirkungen zeigt die Matrix."
   ],
   [
    "pflichtenheft",
    "ergaenzt",
    "Verbindliche Basis."
   ],
   [
    "product-backlog",
    "alternative",
    "Agil: Änderungen laufen über das Backlog."
   ]
  ],
  "tools": [
   "Jira",
   "ServiceNow",
   "Excel"
  ],
  "s": "entwurf"
 }
];
