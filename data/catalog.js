// Erzeugt von tools/build.mjs aus methoden/*/*.md und methoden/sets.json. Nicht von Hand bearbeiten.
const M = [
 {
  "id": "interview",
  "n": "Interview",
  "c": "erm",
  "f": "methode",
  "m": "beide",
  "ph": "ermitteln",
  "t": "Einzelgespräch",
  "kz": "Interview",
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
  "zw": "Das Interview holt Wissen, Erwartungen und Probleme direkt von einzelnen Personen. Es eignet sich besonders für Dinge, die in Dokumenten fehlen: unausgesprochene Annahmen, informelle Abläufe und persönliche Prioritäten. Ziel ist ein belastbares Bild der Bedürfnisse einer Person, nicht eine fertige Anforderungsliste.",
  "wa": [
   "Zu Beginn, wenn der Bereich noch fremd ist und Hintergrundwissen fehlt",
   "Bei Personen mit Schlüsselwissen, die in der Gruppe wenig sagen würden",
   "Bei heiklen Themen, die man nicht vor Kolleginnen und Kollegen bespricht"
  ],
  "wn": [
   "Wenn viele Personen dieselben Fragen beantworten sollen: dann Fragebogen",
   "Wenn Beteiligte sich erst untereinander einigen müssen: dann Workshop",
   "Wenn jemand sein Tun nicht in Worte fassen kann: dann Beobachtung"
  ],
  "vb": [
   "Ziel des Gesprächs und gewünschte Erkenntnisse in einem Satz festhalten",
   "Leitfaden mit offenen Fragen vorbereiten, grob nach Themen gegliedert",
   "Gesprächspartner und Rolle vorab recherchieren",
   "30 bis 60 Minuten in ruhigem Raum oder Videocall einplanen",
   "Notizbuch oder Aufnahme, bei Aufnahme vorab das Einverständnis einholen"
  ],
  "nr": "E-01",
  "kt": "Gespräch mit einer Person: was sie braucht, tut und stört.",
  "ks": [
   "Ziel und Leitfaden festlegen",
   "Offene Fragen stellen, zuhören",
   "Zu zweit: fragen und mitschreiben",
   "Notizen gleich ergänzen",
   "Protokoll bestätigen lassen"
  ],
  "gw": [
   "Der Bereich ist neu, Hintergrund fehlt",
   "Heikle Themen, die nicht in die Gruppe gehören",
   "Mit Schlüsselpersonen, die in Gruppen schweigen"
  ],
  "rg": [
   "Offene Fragen vor geschlossenen Fragen",
   "Keine Lösungen vorschlagen, bevor das Problem klar ist",
   "Eine Person führt, eine zweite protokolliert"
  ],
  "vk": [
   "Ziel in einem Satz festhalten",
   "Leitfaden mit offenen Fragen"
  ],
  "bn": "Viele gleiche Fragen: besser Fragebogen",
  "pr": "Offene Fragen («Erzählen Sie, wie der letzte Auftrag ablief») liefern mehr als Ja-Nein-Fragen. Wer Lösungen vorschlägt, lenkt das Gespräch: erst das Problem verstehen, dann über Lösungen reden. Bewährt hat sich, zu zweit zu gehen, eine Person fragt, die andere schreibt mit. Direkt nach dem Gespräch die Notizen ergänzen, solange die Erinnerung frisch ist, und der Person das Protokoll zur Bestätigung schicken.",
  "em": "Vorher sollten Sie wissen, wer die Beteiligten sind und wen Sie zuerst sprechen (Stakeholder-Analyse). Danach lohnt es sich, die Aussagen mehrerer Interviews zu Personas zu verdichten oder offene Streitpunkte in einem Workshop zu klären. Interviews allein bilden selten ein vollständiges Bild, kombinieren Sie sie mit Beobachtung oder Dokumentenanalyse.",
  "qu": [
   "Wiegers, K., Beatty, J.: Software Requirements, 3. Auflage (Microsoft Press, 2013), Kapitel zu Interviews",
   "IIBA: BABOK Guide, Version 3 (2015), Technik «Interviews»",
   "Pohl, K., Rupp, C.: Basiswissen Requirements Engineering (dpunkt.verlag), Ermittlungstechniken"
  ],
  "io": {
   "lf": [
    "Fachanwender und Schlüsselpersonen",
    "Auftraggeber",
    "Fachbereichsleitung"
   ],
   "in": [
    {
     "t": "Stakeholderliste mit Ansprechpersonen",
     "to": "stakeholder",
     "v": "geliefert von"
    },
    {
     "t": "Interviewleitfaden"
    },
    {
     "t": "Hintergrunddokumente zum Fachbereich",
     "to": "dokumentenanalyse",
     "v": "aufbereitet durch"
    }
   ],
   "out": [
    {
     "t": "Gesprächsprotokoll mit bestätigten Aussagen"
    },
    {
     "t": "Rohe Anforderungen und Probleme",
     "to": "user-stories",
     "v": "formuliert als"
    },
    {
     "t": "Erkenntnisse für Zielgruppenprofile",
     "to": "persona",
     "v": "verdichtet zu"
    }
   ],
   "ko": [
    "Requirements Engineer und Business Analyst",
    "Produktverantwortliche",
    "Das Entwicklungsteam"
   ]
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
  "f": "meeting",
  "m": "beide",
  "ph": "ermitteln",
  "t": "Gruppenarbeit",
  "kz": "Workshop",
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
  "zw": "Der Anforderungsworkshop bringt Beteiligte mit unterschiedlichen Sichten für eine begrenzte Zeit zusammen, um gemeinsam Anforderungen zu erarbeiten, Konflikte zu klären und Entscheidungen zu treffen. Sein Vorteil gegenüber Einzelgesprächen: Widersprüche kommen sofort auf den Tisch und werden vor Ort aufgelöst.",
  "wa": [
   "Wenn mehrere Bereiche betroffen sind und sich einigen müssen",
   "Wenn ein gemeinsames Verständnis wichtiger ist als Detailtiefe",
   "Zum Priorisieren, Modellieren oder Planen mit mehreren Beteiligten"
  ],
  "wn": [
   "Wenn keine Entscheidungsträger teilnehmen können",
   "Wenn Beteiligte stark hierarchisch zueinander stehen und offene Aussagen nicht zu erwarten sind",
   "Wenn das Ziel unklar ist: ohne Ziel wird es eine lange Besprechung"
  ],
  "vb": [
   "Ziel, erwartetes Ergebnis und Agenda schriftlich festlegen",
   "Teilnehmende gezielt einladen, mit Entscheidungsbefugnis, nicht mehr als 8 bis 10",
   "Moderation und Protokollführung trennen",
   "Raum mit Wänden oder digitales Whiteboard, Haftnotizen, Stifte, Flipchart, Timer",
   "Pausen und Zeitboxen je Agendapunkt planen",
   "Vorab kurze Einführung oder Unterlagen an alle senden"
  ],
  "nr": "E-02",
  "kt": "Moderierte Sitzung, in der Beteiligte Anforderungen gemeinsam klären und entscheiden.",
  "ks": [
   "Ziel und Agenda festlegen",
   "Richtige Leute einladen",
   "Ideen sammeln, Zeitboxen setzen",
   "Ergebnisse sofort sichtbar machen",
   "Protokoll mit Entscheiden senden"
  ],
  "gw": [
   "Mehrere Bereiche müssen sich einigen",
   "Gemeinsames Bild zählt mehr als Detail",
   "Zum Priorisieren und Modellieren im Team"
  ],
  "rg": [
   "Moderator ist neutral und gehört nicht zum Entscheiderkreis",
   "Zeitboxen für jeden Block",
   "Entscheidungen sofort sichtbar festhalten"
  ],
  "vk": [
   "Ziel und Agenda schriftlich festlegen",
   "Moderation und Protokoll trennen"
  ],
  "bn": "Entscheider können nicht teilnehmen",
  "pr": "Ein guter Workshop hat eine klare Regel: Alle Beiträge zählen, Diskussionen werden zeitlich begrenzt, offene Punkte kommen auf einen Themenspeicher. Die Moderation steuert den Prozess, nicht den Inhalt. Visualisieren Sie Zwischenergebnisse sofort (Clustern, Punkte kleben), das macht Einigkeit sichtbar. Typische Fehler sind zu viele Themen, fehlende Entscheider und ein Ergebnis, das niemand nachträglich zusammenträgt.",
  "em": "Vorher sollten die Stakeholder bekannt sein und möglichst einige Einzelinterviews stattgefunden haben, damit nicht alle bei null starten. Direkt danach das Protokoll mit Entscheidungen und offenen Punkten verschicken. Meist folgen Priorisierung (MoSCoW) oder Story Mapping, je nachdem ob agil oder klassisch gearbeitet wird.",
  "qu": [
   "Gottesdiener, E.: Requirements by Collaboration (Addison-Wesley, 2002)",
   "IIBA: BABOK Guide, Version 3 (2015), Technik «Workshops»",
   "Wiegers, K., Beatty, J.: Software Requirements, 3. Auflage (2013)"
  ],
  "io": {
   "lf": [
    "Stakeholder und Fachexperten",
    "Auftraggeber",
    "Moderation"
   ],
   "in": [
    {
     "t": "Teilnehmerliste mit Rollen",
     "to": "stakeholder",
     "v": "geliefert von"
    },
    {
     "t": "Agenda und Ziel des Workshops"
    },
    {
     "t": "Vorgängige Interviewergebnisse",
     "to": "interview",
     "v": "geliefert von"
    }
   ],
   "out": [
    {
     "t": "Gemeinsame Anforderungsliste",
     "to": "moscow",
     "v": "priorisiert durch"
    },
    {
     "t": "Story Map als Ausgangspunkt",
     "to": "story-mapping",
     "v": "weitergeführt in"
    },
    {
     "t": "Entscheidungsprotokoll und offene Punkte"
    }
   ],
   "ko": [
    "Product Owner und Requirements Engineer",
    "Entwicklungsteam",
    "Auftraggeber"
   ]
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
  "f": "methode",
  "m": "beide",
  "ph": "ermitteln",
  "t": "Feldstudie",
  "kz": "Beobachtung",
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
  "zw": "Bei der Beobachtung schauen Sie Menschen bei ihrer Arbeit zu, in ihrer echten Umgebung. Dadurch erfahren Sie, was Menschen tun, nicht nur, was sie sagen, dass sie tun. Besonders wertvoll ist sie für eingeübte Abläufe, Umgehungslösungen und Medienbrüche, die im Interview kaum zur Sprache kommen.",
  "wa": [
   "Bei Abläufen, die sich schwer beschreiben lassen",
   "Wenn Sie vermuten, dass Menschen anders arbeiten als dokumentiert",
   "Vor dem Entwurf einer neuen Lösung, um echte Probleme zu finden"
  ],
  "wn": [
   "Wenn die Arbeit vertraulich ist und keine Beobachtung erlaubt wird",
   "Wenn der Ablauf selten oder über Wochen verteilt stattfindet",
   "Wenn die Beobachtung die Arbeit stark stört"
  ],
  "vb": [
   "Beobachtungsziel und Fokus festlegen, etwa «Auftragserfassung»",
   "Genehmigung von Führung und Betroffenen einholen",
   "Beobachtungsbogen mit Spalten für Zeit, Handlung, Auffälligkeit",
   "Notizblock, bei Fotos vorher Einverständnis",
   "Mindestens einen halben Arbeitstag pro Person einplanen"
  ],
  "nr": "E-03",
  "kt": "Menschen bei der echten Arbeit zusehen: Was sie tun, nicht was sie sagen.",
  "ks": [
   "Fokus und Erlaubnis klären",
   "Ruhig mitgehen, nichts erklären",
   "Handlung und Deutung trennen",
   "Auffälligkeiten festhalten",
   "Eindrücke im Gespräch prüfen"
  ],
  "gw": [
   "Abläufe lassen sich schwer beschreiben",
   "Verdacht: Alltag weicht von Doku ab",
   "Vor dem Lösungsentwurf, um echte Probleme zu sehen"
  ],
  "rg": [
   "Beobachten, nicht bewerten",
   "Echte Arbeitssituation statt Vorführung",
   "Datenschutz und Einverständnis vorher klären"
  ],
  "vk": [
   "Fokus und Ziel festlegen",
   "Erlaubnis der Betroffenen holen"
  ],
  "bn": "Arbeit ist vertraulich, kein Zutritt",
  "pr": "Ankommen und zurückhalten: Sie sind Gast, nicht Prüfer. Notieren Sie Beobachtungen und Deutungen getrennt. Fragen stellen Sie am besten in Pausen oder in der Variante «Meister und Lehrling», bei der die Person erklärt, was sie tut. Achten Sie auf Medienbrüche, Zettel am Bildschirm, doppelte Eingaben und Wartezeiten. Das sind meist die besten Hinweise auf Verbesserungen.",
  "em": "Vorher helfen ein erstes Interview und eine Stakeholder-Analyse, um die richtigen Personen zu wählen. Nachher werden die Beobachtungen zu Aktivitätsdiagrammen und Personas verdichtet. Gleichen Sie Ihre Eindrücke in einem Folgeinterview ab, um Fehldeutungen zu vermeiden.",
  "qu": [
   "Beyer, H., Holtzblatt, K.: Contextual Design (Morgan Kaufmann, 1998)",
   "IIBA: BABOK Guide, Version 3 (2015), Technik «Beobachtung»",
   "Pohl, K., Rupp, C.: Basiswissen Requirements Engineering (dpunkt.verlag)"
  ],
  "io": {
   "lf": [
    "Fachanwender am Arbeitsplatz",
    "Teamleitungen"
   ],
   "in": [
    {
     "t": "Beobachtungsfokus und Zielgruppe"
    },
    {
     "t": "Beobachtungsbogen"
    },
    {
     "t": "Gespräche zur Vorbereitung",
     "to": "interview",
     "v": "ergänzt durch"
    }
   ],
   "out": [
    {
     "t": "Beobachtungsnotizen mit Fotos"
    },
    {
     "t": "Ist-Ablauf der Tätigkeit",
     "to": "aktivitaetsdiagramm",
     "v": "dargestellt als"
    },
    {
     "t": "Hinweise für Zielgruppenprofile",
     "to": "persona",
     "v": "einfliessend in"
    }
   ],
   "ko": [
    "Business Analyst",
    "UX-Design",
    "Entwicklungsteam"
   ]
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
  "f": "methode",
  "m": "beide",
  "ph": "verstehen",
  "t": "Analyse",
  "kz": "Stakeholder",
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
  "zw": "Die Stakeholder-Analyse klärt, wer vom Vorhaben betroffen ist oder es beeinflusst, was diese Personen erwarten und wie stark sie einbezogen werden sollten. Sie verhindert, dass wichtige Stimmen vergessen werden und dass Anforderungen nur aus der Sicht der lautesten Person entstehen.",
  "wa": [
   "Ganz am Anfang, bevor Anforderungen erhoben werden",
   "Wenn das Vorhaben viele Bereiche oder externe Parteien betrifft",
   "Bei Konflikten über Ziele oder Prioritäten, um Positionen zu verstehen"
  ],
  "wn": [
   "Bei sehr kleinen Vorhaben mit einem klaren Nutzerkreis genügt eine kurze Liste",
   "Wenn die Analyse zum Selbstzweck wird und nie aktualisiert wird"
  ],
  "vb": [
   "Erste Liste durch Brainstorming mit Auftraggeber und Team sammeln",
   "Matrix mit Einfluss und Interesse vorbereiten (Whiteboard oder Tabelle)",
   "Vertrauliche Behandlung klären, denn die Bewertung einzelner Personen ist sensibel",
   "30 bis 90 Minuten mit zwei bis vier Personen einplanen"
  ],
  "nr": "V-01",
  "kt": "Wer ist betroffen, wer entscheidet, wer kann blockieren? Einfluss und Interesse sichtbar machen.",
  "ks": [
   "Betroffene sammeln",
   "Einfluss und Interesse bewerten",
   "Einbindung je Gruppe festlegen",
   "Vertraulich dokumentieren",
   "Bei Meilensteinen aktualisieren"
  ],
  "gw": [
   "Ganz am Anfang, vor der Erhebung",
   "Viele Bereiche oder externe Parteien",
   "Bei Konflikten über Ziele oder Prioritäten"
  ],
  "rg": [
   "Liste regelmässig aktualisieren",
   "Einfluss und Interesse getrennt bewerten",
   "Bewertung vertraulich behandeln"
  ],
  "vk": [
   "Erste Liste im Team sammeln",
   "Vertraulichkeit der Bewertung klären"
  ],
  "bn": "Sehr kleines Vorhaben: Liste genügt",
  "pr": "Fragen Sie sich je Gruppe: Wer nutzt, wer bezahlt, wer entscheidet, wer wird betroffen, wer kann blockieren? Bewerten Sie nach Einfluss und Interesse und leiten Sie daraus die Strategie ab: eng einbinden, informieren, zufriedenstellen oder beobachten. Die Analyse ist ein lebendes Dokument. Prüfen Sie sie bei jedem Meilenstein und gehen Sie vertraulich damit um.",
  "em": "Vorher ist ein Kontextdiagramm nützlich, weil es externe Parteien sichtbar macht. Danach folgen Interviews mit den Schlüsselpersonen und der Anforderungsworkshop. Aus den Gruppen entstehen später Personas, wenn Nutzer im Zentrum stehen.",
  "qu": [
   "Mendelow, A.: Environmental Scanning – The Impact of the Stakeholder Concept (1981)",
   "IIBA: BABOK Guide, Version 3 (2015), Techniken «Stakeholder-Liste, Map und Personas»",
   "Pohl, K., Rupp, C.: Basiswissen Requirements Engineering (dpunkt.verlag)"
  ],
  "io": {
   "lf": [
    "Auftraggeber",
    "Projektleitung",
    "Fachbereiche"
   ],
   "in": [
    {
     "t": "Projektauftrag und Ziele"
    },
    {
     "t": "Organigramm"
    },
    {
     "t": "Systemgrenzen und externe Parteien",
     "to": "kontextdiagramm",
     "v": "ergänzt durch"
    }
   ],
   "out": [
    {
     "t": "Stakeholderliste mit Rolle, Interessen und Einfluss"
    },
    {
     "t": "Einbindungsplan je Gruppe"
    },
    {
     "t": "Reihenfolge der Gespräche",
     "to": "interview",
     "v": "genutzt für"
    }
   ],
   "ko": [
    "Requirements Engineer",
    "Projektleitung",
    "Product Owner"
   ]
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
  "s": "entwurf",
  "vis": "stakeholder"
 },
 {
  "id": "persona",
  "n": "Persona",
  "c": "erm",
  "f": "artefakt",
  "m": "agil",
  "ph": "verstehen",
  "t": "Nutzerprofil",
  "kz": "Persona",
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
  "zw": "Eine Persona ist ein erfundenes, aber aus echten Daten abgeleitetes Profil einer typischen Nutzergruppe mit Namen, Zielen, Frustrationen und Kontext. Sie gibt dem Team ein gemeinsames Bild, für wen es baut, und ersetzt die vage Aussage «der Benutzer».",
  "wa": [
   "Wenn das Team unterschiedliche Vorstellungen von den Nutzern hat",
   "Vor dem Schreiben von User Stories oder Entwerfen von Oberflächen",
   "Wenn mehrere sehr verschiedene Nutzergruppen bedient werden"
  ],
  "wn": [
   "Wenn keine echten Daten vorliegen: dann zuerst Interviews oder Beobachtung",
   "Wenn nur ein sehr kleiner, bekannter Nutzerkreis existiert",
   "Wenn die Persona als Dekoration dient und nie verwendet wird"
  ],
  "vb": [
   "Interviews, Beobachtungen oder Nutzungsdaten sammeln",
   "Muster in Zielen, Aufgaben und Hindernissen suchen (Affinitätsdiagramm)",
   "Vorlage vorbereiten: Name, Foto, Rolle, Ziele, Frust, Zitat, Kontext",
   "1 bis 2 Stunden Workshop mit dem Team einplanen"
  ],
  "nr": "V-02",
  "kt": "Ein erfundenes, datenbasiertes Profil einer typischen Nutzergruppe mit Zielen und Frust.",
  "ks": [
   "Interviews und Daten sammeln",
   "Muster in Zielen suchen",
   "3 bis 5 Profile ausarbeiten",
   "Zitate aus Gesprächen nutzen",
   "Sichtbar aufhängen, verwenden"
  ],
  "gw": [
   "Das Team sieht die Nutzer verschieden",
   "Vor User Stories und Oberflächen",
   "Bei mehreren sehr verschiedenen Nutzergruppen"
  ],
  "rg": [
   "Auf Daten stützen, nicht auf Annahmen",
   "Wenige Personas (2 bis 4) statt viele",
   "Keine Stereotype, sondern Verhalten beschreiben"
  ],
  "vk": [
   "Interviews und Nutzungsdaten sammeln",
   "Muster in Zielen und Frust suchen"
  ],
  "bn": "Ohne echte Daten: erst Interviews führen",
  "pr": "Drei bis fünf Personas reichen. Eine Persona pro Nutzergruppe, mit klarer primärer Persona, die Entscheidungen leitet. Verwenden Sie Zitate und Details aus echten Gesprächen, erfundene Eigenschaften ohne Datenbasis führen in die Irre. Hängen Sie die Personas sichtbar auf und beziehen Sie sich in Diskussionen darauf («Würde Frau Keller das so tun?»).",
  "em": "Vorher müssen Interviews oder Beobachtungen vorliegen, sonst entsteht ein Wunschbild. Danach schreiben Sie User Stories aus der Sicht der Persona und prüfen Entwürfe an Prototypen mit echten Vertretern der Gruppe.",
  "qu": [
   "Cooper, A.: The Inmates Are Running the Asylum (Sams, 1999)",
   "Pruitt, J., Adlin, T.: The Persona Lifecycle (Morgan Kaufmann, 2006)",
   "IIBA: BABOK Guide, Version 3 (2015), Technik «Personas»"
  ],
  "io": {
   "lf": [
    "Interviewpartner und beobachtete Nutzer",
    "UX-Research",
    "Support und Vertrieb als Datenquellen"
   ],
   "in": [
    {
     "t": "Interviewnotizen",
     "to": "interview",
     "v": "geliefert von"
    },
    {
     "t": "Beobachtungsnotizen",
     "to": "beobachtung",
     "v": "geliefert von"
    },
    {
     "t": "Nutzungsdaten und Umfragen"
    }
   ],
   "out": [
    {
     "t": "Personenprofile mit Zielen und Frust"
    },
    {
     "t": "Rolle in User Stories («Als …»)",
     "to": "user-stories",
     "v": "verwendet in"
    },
    {
     "t": "Testpersonen für Prototypen",
     "to": "prototyping",
     "v": "genutzt in"
    }
   ],
   "ko": [
    "Das ganze Team",
    "Product Owner",
    "UX-Design"
   ]
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
  "id": "fragebogen",
  "n": "Fragebogen und Umfrage",
  "c": "erm",
  "f": "methode",
  "m": "beide",
  "ph": "ermitteln",
  "t": "Befragung",
  "kz": "Fragebogen",
  "k": "Standardisierte Fragen an viele Personen, um Bedürfnisse, Häufigkeiten und Meinungen zahlenmässig zu erfassen.",
  "aufwand": "1 bis 3 Tage",
  "ab": [
   "Ziel und Zielgruppe festlegen",
   "Fragen formulieren (kurz, eindeutig, eine Aussage je Frage)",
   "Mit wenigen Personen testen",
   "Versenden und Rücklauf verfolgen",
   "Auswerten und Ergebnisse mit Interviews absichern"
  ],
  "re": [
   "Höchstens 10 Minuten Bearbeitungszeit",
   "Keine Suggestivfragen",
   "Offene Fragen sparsam einsetzen"
  ],
  "bsp": {
   "t": "Befragung Disponenten",
   "x": "«Wie oft müssen Sie eine Tour nach dem Versand ändern?» täglich, wöchentlich, selten. 62 % antworten täglich. Folge: Änderungsfunktion bekommt hohe Priorität."
  },
  "zw": "Ein Fragebogen oder eine Umfrage erhebt Einschätzungen und Fakten bei vielen Personen gleichzeitig und vergleichbar. Er zeigt, wie verbreitet ein Bedarf oder Problem ist, und liefert Zahlen, wo Interviews nur Einzelstimmen bieten.",
  "wa": [
   "Wenn viele Personen oder verteilte Standorte befragt werden müssen",
   "Um eine Aussage aus Interviews auf ihre Verbreitung zu prüfen",
   "Für Bewertungen wie Kano oder Prioritäten"
  ],
  "wn": [
   "Wenn die Fragen noch unklar sind: zuerst Interviews, sonst fragen Sie das Falsche",
   "Wenn Sie Gründe und Hintergründe brauchen",
   "Bei sehr kleinen Gruppen, dort ist ein Gespräch besser"
  ],
  "vb": [
   "Forschungsfrage und Zielgruppe festlegen",
   "Fragen formulieren, überwiegend geschlossen, wenige offene Felder",
   "Pilot mit 3 bis 5 Personen durchführen",
   "Werkzeug wählen, Datenschutz und Anonymität klären",
   "Rücklaufziel und Frist setzen"
  ],
  "nr": "E-04",
  "kt": "Viele Personen vergleichbar befragen, um Bedarf und Verbreitung zu messen.",
  "ks": [
   "Frage und Zielgruppe festlegen",
   "Fragen neutral formulieren",
   "Mit 3 bis 5 Personen testen",
   "Verschicken, Rücklauf verfolgen",
   "Auswerten, Verzerrung prüfen"
  ],
  "gw": [
   "Viele Personen an mehreren Standorten",
   "Aussagen aus Interviews überprüfen",
   "Als Grundlage für Kano oder Prioritäten"
  ],
  "rg": [
   "Höchstens 10 Minuten Bearbeitungszeit",
   "Keine Suggestivfragen",
   "Offene Fragen sparsam einsetzen"
  ],
  "vk": [
   "Zielgruppe und Frage festlegen",
   "Pilot mit 3 bis 5 Personen"
  ],
  "bn": "Fragen noch unklar: erst Interviews",
  "pr": "Kurz halten: Unter zehn Minuten sinkt die Abbruchquote deutlich. Formulieren Sie neutral und eindeutig, vermeiden Sie doppelte Fragen («schnell und günstig?») und Suggestivfragen. Schliessen Sie mit einem offenen Feld für Anmerkungen. Werten Sie ehrlich aus: Ein kleiner Rücklauf von nur engagierten Personen ist verzerrt.",
  "em": "Vorher klären Interviews, welche Fragen überhaupt relevant sind, und die Stakeholder-Analyse, wen Sie befragen. Danach fliessen die Ergebnisse in Personas, oder in Kano und Priorisierung. Auffällige Antworten besprechen Sie anschliessend im Gespräch nach.",
  "qu": [
   "Dillman, D., Smyth, J., Christian, L.: Internet, Phone, Mail, and Mixed-Mode Surveys (Wiley, 2014)",
   "IIBA: BABOK Guide, Version 3 (2015), Technik «Umfragen und Fragebögen»",
   "Wiegers, K., Beatty, J.: Software Requirements, 3. Auflage (2013)"
  ],
  "io": {
   "lf": [
    "Befragte Nutzer und Mitarbeitende",
    "Fachbereiche für Verteiler",
    "Datenschutz"
   ],
   "in": [
    {
     "t": "Zielgruppe und Verteiler",
     "to": "stakeholder",
     "v": "geliefert von"
    },
    {
     "t": "Offene Fragen aus Gesprächen",
     "to": "interview",
     "v": "geliefert von"
    },
    {
     "t": "Fragenkatalog"
    }
   ],
   "out": [
    {
     "t": "Auswertung mit Zahlen und Kommentaren"
    },
    {
     "t": "Rohdaten für Zielgruppenprofile",
     "to": "persona",
     "v": "verdichtet zu"
    },
    {
     "t": "Antworten zur Zufriedenheit",
     "to": "kano",
     "v": "genutzt in"
    }
   ],
   "ko": [
    "Business Analyst",
    "Product Owner",
    "Auftraggeber"
   ]
  },
  "li": [
   [
    "stakeholder",
    "vorher",
    "Zielgruppe bestimmen."
   ],
   [
    "interview",
    "alternative",
    "Interview bei wenigen, Fragebogen bei vielen Personen."
   ],
   [
    "kano",
    "ergaenzt",
    "Die Kano-Befragung ist ein spezieller Fragebogen."
   ],
   [
    "persona",
    "danach",
    "Daten zu Personas verdichten."
   ],
   [
    "dokumentenanalyse",
    "ergaenzt",
    "Dokumente und Befragung ergänzen sich."
   ]
  ],
  "tools": [
   "Umfrage-Tool",
   "Excel"
  ],
  "s": "entwurf"
 },
 {
  "id": "swot",
  "n": "SWOT-Analyse",
  "c": "erm",
  "f": "methode",
  "m": "beide",
  "ph": "verstehen",
  "t": "Analyse",
  "kz": "SWOT",
  "k": "Stellt Stärken, Schwächen, Chancen und Risiken eines Vorhabens, Produkts oder Bereichs in vier Feldern gegenüber und zeigt, wo Handlungsbedarf besteht.",
  "aufwand": "1 bis 2 Stunden",
  "ab": [
   "Untersuchungsgegenstand und Zeithorizont festlegen",
   "Stärken und Schwächen (intern) sammeln",
   "Chancen und Risiken (extern) sammeln",
   "Punkte gewichten und die wichtigsten je Feld auswählen",
   "Daraus Massnahmen und offene Fragen ableiten"
  ],
  "re": [
   "Intern und extern sauber trennen",
   "Pro Feld höchstens fünf Punkte",
   "Aussagen mit Beobachtung oder Zahl belegen"
  ],
  "bsp": {
   "t": "SWOT für ein Kundenportal",
   "x": "Stärke: eigene Kundendaten. Schwäche: veraltete Schnittstellen. Chance: Selbstbedienung senkt Supportkosten. Risiko: Wettbewerber startet früher."
  },
  "zw": "Die SWOT-Analyse stellt Stärken und Schwächen (innen) sowie Chancen und Risiken (aussen) einer Organisation, eines Produkts oder eines Vorhabens gegenüber. Sie schafft in kurzer Zeit eine strategische Ausgangslage und hilft, Ziele und Prioritäten zu begründen.",
  "wa": [
   "Zu Beginn eines Vorhabens, um Ausgangslage und Ziel zu klären",
   "Vor der Produktvision oder einer Strategiediskussion",
   "Wenn die Beteiligten unterschiedliche Lagebilder haben"
  ],
  "wn": [
   "Wenn Sie Details für die Umsetzung suchen: sie bleibt auf Strategieebene",
   "Wenn Aussagen nur Meinungen ohne Belege sind",
   "Als Alibi ohne Konsequenzen für Entscheidungen"
  ],
  "vb": [
   "Untersuchungsgegenstand klar abgrenzen",
   "Vier Felder auf Whiteboard oder Miro vorbereiten",
   "Teilnehmende mit unterschiedlichen Sichten einladen",
   "Daten zu Markt und Wettbewerb bereithalten",
   "Rund 90 Minuten einplanen"
  ],
  "nr": "V-03",
  "kt": "Stärken, Schwächen, Chancen, Risiken in vier Feldern: die Ausgangslage klären.",
  "ks": [
   "Gegenstand abgrenzen",
   "Punkte still sammeln",
   "In vier Felder ordnen",
   "Stärken und Chancen kombinieren",
   "3 bis 5 Folgerungen ableiten"
  ],
  "gw": [
   "Zu Beginn, um die Lage zu klären",
   "Die Lagebilder gehen auseinander",
   "Vor Vision oder Strategiediskussion"
  ],
  "rg": [
   "Intern und extern sauber trennen",
   "Pro Feld höchstens fünf Punkte",
   "Aussagen mit Beobachtung oder Zahl belegen"
  ],
  "vk": [
   "Gegenstand klar abgrenzen",
   "Teilnehmende mit unterschiedlichen Sichten"
  ],
  "bn": "Für Details der Umsetzung zu grob",
  "pr": "Erst sammeln, dann ordnen: Jeder schreibt still Punkte auf Zettel, danach gruppieren. Trennen Sie strikt zwischen innen (Stärken, Schwächen) und aussen (Chancen, Risiken). Die Analyse wird erst nützlich, wenn Sie Kombinationen betrachten: Welche Stärke nutzt welche Chance? Welche Schwäche verstärkt welches Risiko? Leiten Sie daraus drei bis fünf konkrete Folgerungen ab.",
  "em": "Vorher helfen Stakeholder-Analyse und Business Model Canvas für ein gemeinsames Bild der Lage. Danach schärfen Sie die Produktvision und vertiefen die wichtigsten Risiken in der Risikoanalyse.",
  "qu": [
   "Gürel, E.: SWOT Analysis: A Theoretical Review, Journal of International Social Research 10 (2017)",
   "IIBA: BABOK Guide, Version 3 (2015), Technik «SWOT-Analyse»",
   "Pichler, R.: Agile Product Management with Scrum (Addison-Wesley, 2010)"
  ],
  "io": {
   "lf": [
    "Management und Fachbereiche",
    "Marketing und Vertrieb",
    "Externe Marktdaten"
   ],
   "in": [
    {
     "t": "Marktdaten und Wettbewerbsanalyse"
    },
    {
     "t": "Selbsteinschätzung des Teams"
    },
    {
     "t": "Geschäftsmodell",
     "to": "business-model-canvas",
     "v": "ergänzt durch"
    }
   ],
   "out": [
    {
     "t": "Ausgefülltes Vier-Felder-Raster"
    },
    {
     "t": "Strategische Folgerungen",
     "to": "produktvision",
     "v": "genutzt in"
    },
    {
     "t": "Wichtige Risiken",
     "to": "risikoanalyse",
     "v": "vertieft in"
    }
   ],
   "ko": [
    "Product Owner",
    "Management",
    "Projektleitung"
   ]
  },
  "li": [
   [
    "stakeholder",
    "ergaenzt",
    "Einfluss der Stakeholder fliesst in Chancen und Risiken ein."
   ],
   [
    "workshop",
    "ergaenzt",
    "Im Workshop gemeinsam erarbeiten."
   ],
   [
    "business-model-canvas",
    "ergaenzt",
    "Das Geschäftsmodell zeigt, wo Stärken wirken."
   ],
   [
    "produktvision",
    "danach",
    "Aus der Lage ergibt sich die Vision."
   ],
   [
    "risikoanalyse",
    "danach",
    "Bedrohungen werden als Risiken weiterverfolgt."
   ]
  ],
  "tools": [
   "Miro",
   "Excel"
  ],
  "s": "entwurf",
  "vis": "swot"
 },
 {
  "id": "five-whys",
  "n": "5 Whys",
  "c": "erm",
  "f": "methode",
  "m": "beide",
  "ph": "verstehen",
  "t": "Ursachenanalyse",
  "kz": "5 Whys",
  "k": "Fragt fünfmal nacheinander nach dem Warum, um von einem Symptom zur eigentlichen Ursache eines Problems zu kommen.",
  "aufwand": "15 bis 30 Min.",
  "ab": [
   "Problem in einem Satz beschreiben",
   "Fragen: Warum ist das passiert?",
   "Zur Antwort erneut Warum fragen",
   "Wiederholen, bis eine beeinflussbare Ursache erreicht ist",
   "Massnahme gegen die Ursache festlegen und prüfen"
  ],
  "re": [
   "Von Fakten ausgehen, nicht von Vermutungen",
   "Nach Prozessen fragen, nicht nach Schuldigen",
   "Bei mehreren Ursachen mehrere Ketten bilden"
  ],
  "bsp": {
   "t": "Falsch zugewiesene Touren",
   "x": "1 Fahrzeug doppelt vergeben. 2 Excel-Liste war nicht aktuell. 3 Änderungen kamen per Telefon. 4 Es gibt keinen gemeinsamen Stand. 5 Kein System für Tourenänderungen. Ursache: fehlendes zentrales System."
  },
  "zw": "Die 5-Whys-Technik fragt mehrfach «Warum?», um von einem Symptom zur Ursache vorzudringen. Sie verhindert, dass ein Problem mit einer Lösung beantwortet wird, die an der eigentlichen Ursache vorbeigeht, und deckt oft den wahren Bedarf hinter einer Forderung auf.",
  "wa": [
   "Wenn jemand eine Lösung fordert, das Problem aber unklar ist",
   "Bei wiederkehrenden Fehlern oder Störungen",
   "Bei der Frage, warum eine Anforderung wichtig ist"
  ],
  "wn": [
   "Bei komplexen Problemen mit mehreren gleichzeitigen Ursachen reicht eine Kette nicht",
   "Wenn Schuldzuweisung statt Ursachenforschung droht",
   "Wenn die Frage in zeitlichen Druck gerät"
  ],
  "vb": [
   "Problem oder Forderung in einem klaren Satz formulieren",
   "Teilnehmende, die das Problem kennen, einladen",
   "Whiteboard oder Haftnotizen bereitlegen",
   "15 bis 30 Minuten einplanen"
  ],
  "nr": "V-04",
  "kt": "Mehrmals «Warum?» fragen, bis die beeinflussbare Ursache sichtbar wird.",
  "ks": [
   "Problem in einem Satz nennen",
   "Warum? Antwort aufschreiben",
   "Wiederholen bis zur Ursache",
   "Kette rückwärts prüfen",
   "Gegenmassnahme ableiten"
  ],
  "gw": [
   "Eine Lösung wird gefordert, Problem unklar",
   "Fehler oder Störungen kehren wieder",
   "Wenn die Frage lautet: Warum ist das wichtig?"
  ],
  "rg": [
   "Von Fakten ausgehen, nicht von Vermutungen",
   "Nach Prozessen fragen, nicht nach Schuldigen",
   "Bei mehreren Ursachen mehrere Ketten bilden"
  ],
  "vk": [
   "Problem in einem Satz formulieren",
   "Leute einladen, die es kennen"
  ],
  "bn": "Mehrere Ursachen: eine Kette reicht nicht",
  "pr": "Fünf ist ein Richtwert, nicht eine Pflicht: Hören Sie auf, wenn eine beeinflussbare Ursache erreicht ist. Fragen Sie nach Prozess und System, nicht nach Personen («Warum konnte das passieren?» statt «Wer war es?»). Prüfen Sie die Kette rückwärts: Würde die Ursache das Problem wirklich erklären? Bei verzweigten Ursachen verfolgen Sie mehrere Ketten.",
  "em": "Vorher steht meist eine Beobachtung oder ein Interview, das ein Problem sichtbar gemacht hat. Danach formulieren Sie User Stories, die die Ursache beheben, und bewerten verbleibende Risiken in der Risikoanalyse.",
  "qu": [
   "Ohno, T.: Toyota Production System (Productivity Press, 1988)",
   "Liker, J.: The Toyota Way (McGraw-Hill, 2004)",
   "IIBA: BABOK Guide, Version 3 (2015), Technik «Ursachenanalyse»"
  ],
  "io": {
   "lf": [
    "Fachanwender mit dem Problem",
    "Betrieb und Support"
   ],
   "in": [
    {
     "t": "Beobachtetes Problem oder Forderung",
     "to": "beobachtung",
     "v": "geliefert von"
    },
    {
     "t": "Konkrete Vorfälle und Daten"
    },
    {
     "t": "Hintergrund aus Gesprächen",
     "to": "interview",
     "v": "geliefert von"
    }
   ],
   "out": [
    {
     "t": "Ursachenkette bis zur beeinflussbaren Ursache"
    },
    {
     "t": "Neu formulierte Anforderung",
     "to": "user-stories",
     "v": "formuliert als"
    },
    {
     "t": "Verbleibende Unsicherheiten",
     "to": "risikoanalyse",
     "v": "bewertet in"
    }
   ],
   "ko": [
    "Requirements Engineer",
    "Product Owner",
    "Entwicklungsteam"
   ]
  },
  "li": [
   [
    "beobachtung",
    "vorher",
    "Beobachtete Probleme hinterfragen."
   ],
   [
    "interview",
    "ergaenzt",
    "Im Interview nachfragen."
   ],
   [
    "workshop",
    "ergaenzt",
    "Im Workshop gemeinsam durchführen."
   ],
   [
    "risikoanalyse",
    "danach",
    "Ursachen fliessen in die Risiken ein."
   ],
   [
    "user-stories",
    "danach",
    "Ursachen führen zu besseren Stories."
   ]
  ],
  "tools": [
   "Miro"
  ],
  "s": "entwurf",
  "vis": "fivewhys"
 },
 {
  "id": "dokumentenanalyse",
  "n": "Dokumentenanalyse",
  "c": "erm",
  "f": "methode",
  "m": "klassisch",
  "ph": "ermitteln",
  "t": "Analyse",
  "kz": "Dokumenten-analyse",
  "k": "Wertet vorhandene Unterlagen wie Handbücher, Verträge, Berichte und Altsysteme aus, um Anforderungen, Regeln und Begriffe zu finden.",
  "aufwand": "Stunden bis Tage",
  "ab": [
   "Relevante Dokumente sammeln und nach Aktualität ordnen",
   "Dokumente sichten und Auszüge markieren",
   "Anforderungen, Regeln und Begriffe herausschreiben",
   "Widersprüche und Lücken als Fragen notieren",
   "Offene Fragen in Interviews klären"
  ],
  "re": [
   "Quelle jeder Aussage festhalten",
   "Alte Dokumente nicht ungeprüft übernehmen",
   "Lücken sichtbar machen"
  ],
  "bsp": {
   "t": "Altes Bedienhandbuch",
   "x": "Das Handbuch nennt eine Regel: Eine Tour darf höchstens 9 Stunden dauern. Das Interview zeigt, dass heute 10 Stunden gelten. Regel wird angepasst und mit Datum vermerkt."
  },
  "zw": "Die Dokumentenanalyse wertet bestehende Unterlagen aus: Handbücher, Prozessbeschreibungen, Verträge, Gesetze, Altsystem-Dokumentation und Auswertungen. Sie liefert Fakten und Fachbegriffe, bevor Sie Zeit der Beteiligten beanspruchen, und bereitet gezielte Fragen vor.",
  "wa": [
   "Zu Beginn, um Fachgebiet und Begriffe zu verstehen",
   "Bei regulierten Bereichen mit gesetzlichen Vorgaben",
   "Bei der Ablösung eines Altsystems mit vorhandener Dokumentation"
  ],
  "wn": [
   "Wenn Dokumente veraltet oder unzuverlässig sind und niemand es merkt",
   "Wenn der tatsächliche Ablauf bekanntermassen vom Papier abweicht: Beobachtung ergänzen"
  ],
  "vb": [
   "Relevante Dokumente mit den Fachbereichen identifizieren",
   "Zugriff und Vertraulichkeit klären",
   "Version und Aktualität je Dokument notieren",
   "Leitfragen festlegen, was Sie herausfinden wollen"
  ],
  "nr": "E-05",
  "kt": "Bestehende Unterlagen auswerten: Regeln, Begriffe, Zahlen, Widersprüche.",
  "ks": [
   "Dokumente und Aktualität klären",
   "Gezielt lesen, markieren",
   "Fundstellen notieren",
   "Widersprüche klären",
   "Begriffe ins Glossar"
  ],
  "gw": [
   "Fachgebiet und Begriffe verstehen",
   "Gesetzliche Vorgaben oder Altsystem",
   "Bei der Ablösung eines Altsystems"
  ],
  "rg": [
   "Quelle jeder Aussage festhalten",
   "Alte Dokumente nicht ungeprüft übernehmen",
   "Lücken sichtbar machen"
  ],
  "vk": [
   "Relevante Dokumente finden",
   "Zugriff und Vertraulichkeit klären"
  ],
  "bn": "Dokumente sind veraltet und niemand merkt es",
  "pr": "Lesen Sie gezielt, nicht vollständig: Markieren Sie Regeln, Begriffe, Zahlen und Widersprüche. Führen Sie eine Quellenliste mit Fundstelle, damit sich später jede Anforderung belegen lässt. Fragen Sie bei Widersprüchen nach, bevor Sie sich entscheiden. Begriffe sammeln Sie direkt für das Glossar.",
  "em": "Vorher klären Sie mit den Stakeholdern, welche Dokumente gelten. Danach gehen Sie mit konkreten Fragen in Interviews und übernehmen Begriffe ins Glossar und Regeln in die Geschäftsregeln.",
  "qu": [
   "IIBA: BABOK Guide, Version 3 (2015), Technik «Dokumentenanalyse»",
   "Pohl, K., Rupp, C.: Basiswissen Requirements Engineering (dpunkt.verlag)",
   "Wiegers, K., Beatty, J.: Software Requirements, 3. Auflage (2013)"
  ],
  "io": {
   "lf": [
    "Fachbereiche und Archiv",
    "Compliance und Recht",
    "Betrieb des Altsystems"
   ],
   "in": [
    {
     "t": "Dokumentenliste von den Beteiligten",
     "to": "stakeholder",
     "v": "geliefert von"
    },
    {
     "t": "Vorhandene Prozess- und Systemunterlagen"
    },
    {
     "t": "Gesetzliche und interne Vorgaben"
    }
   ],
   "out": [
    {
     "t": "Fundstellenliste mit Auszügen"
    },
    {
     "t": "Begriffssammlung",
     "to": "glossar",
     "v": "weiterverwendet in"
    },
    {
     "t": "Regelkandidaten",
     "to": "geschaeftsregeln",
     "v": "geprüft in"
    }
   ],
   "ko": [
    "Requirements Engineer",
    "Fachbereich",
    "Entwicklungsteam"
   ]
  },
  "li": [
   [
    "stakeholder",
    "vorher",
    "Dokumentenbesitzer finden."
   ],
   [
    "interview",
    "danach",
    "Offene Fragen im Interview klären."
   ],
   [
    "glossar",
    "danach",
    "Begriffe sammeln."
   ],
   [
    "geschaeftsregeln",
    "danach",
    "Regeln aus Dokumenten ableiten."
   ],
   [
    "fragebogen",
    "ergaenzt",
    "Dokumente und Befragung ergänzen sich."
   ]
  ],
  "tools": [
   "Confluence",
   "Excel"
  ],
  "s": "entwurf"
 },
 {
  "id": "event-storming",
  "n": "Event Storming",
  "c": "erm",
  "f": "meeting",
  "m": "agil",
  "ph": "ermitteln",
  "t": "Workshop",
  "kz": "Event Storming",
  "k": "Ein Workshop, in dem Fachleute und Entwicklung alle Ereignisse eines Geschäftsbereichs auf einer langen Zeitachse sammeln und daraus Zusammenhänge ableiten.",
  "aufwand": "2 bis 4 Stunden",
  "ab": [
   "Grosse Fläche und orange Haftnotizen bereitstellen",
   "Ereignisse in der Vergangenheitsform sammeln («Tour freigegeben»)",
   "Ereignisse auf der Zeitachse ordnen",
   "Befehle, Akteure und Regeln ergänzen",
   "Offene Fragen und Bereichsgrenzen markieren"
  ],
  "re": [
   "Ereignisse in der Vergangenheit formulieren",
   "Fachleute und Entwicklung arbeiten gemeinsam",
   "Unklarheiten sofort als Frage festhalten"
  ],
  "bsp": {
   "t": "Ereignisse der Tourenplanung",
   "x": "Tour angelegt → Fahrzeug zugewiesen → Konflikt erkannt → Tour freigegeben → Fahrer benachrichtigt."
  },
  "zw": "Event Storming ist ein Workshop, in dem Fachleute und Entwickelnde gemeinsam auf einer langen Wand die Ereignisse eines Geschäftsprozesses sammeln und in zeitliche Reihenfolge bringen. Es macht Wissen sichtbar, deckt Lücken und Missverständnisse auf und liefert eine Grundlage für Domänenmodelle.",
  "wa": [
   "Beim Einstieg in einen komplexen oder unbekannten Geschäftsbereich",
   "Wenn Fachleute und Technik verschiedene Sprachen sprechen",
   "Vor dem Entwurf von Systemgrenzen oder Services"
  ],
  "wn": [
   "Wenn nicht alle Schlüsselpersonen teilnehmen können",
   "Bei trivialen Abläufen",
   "Wenn der Prozess schon gut modelliert und allen bekannt ist"
  ],
  "vb": [
   "Raum mit einer langen freien Wand von 8 bis 10 Metern Papierrolle oder unbegrenztes digitales Whiteboard",
   "Sehr viele orange Haftnotizen für Ereignisse, dazu andere Farben für Befehle, Akteure und Fragen",
   "Dicke Filzstifte für jede Person",
   "Fachleute, Entwickelnde, Product Owner und Moderation einladen, 6 bis 15 Personen",
   "Halben bis ganzen Tag einplanen, Stehtische statt Stühle"
  ],
  "nr": "E-06",
  "kt": "Fachleute kleben Ereignisse auf eine lange Wand. So wird Prozesswissen sichtbar.",
  "ks": [
   "Grosse Wand, orange Zettel",
   "Ereignisse chaotisch sammeln",
   "Zeitlich ordnen, Doppelte streichen",
   "Befehle, Akteure, Regeln ergänzen",
   "Offene Fragen markieren"
  ],
  "gw": [
   "Komplexer, unbekannter Geschäftsbereich",
   "Fachleute und Technik reden aneinander vorbei",
   "Vor dem Entwurf von Systemgrenzen"
  ],
  "rg": [
   "Ereignisse in der Vergangenheit formulieren",
   "Fachleute und Entwicklung arbeiten gemeinsam",
   "Unklarheiten sofort als Frage festhalten"
  ],
  "vk": [
   "Lange freie Wand oder digitales Board",
   "Orange Zettel und dicke Stifte"
  ],
  "bn": "Schlüsselpersonen können nicht kommen",
  "pr": "Beginnen Sie mit dem «Chaos»: Alle schreiben Ereignisse in der Vergangenheitsform («Auftrag erfasst») und kleben sie ohne viel Reden an die Wand. Danach sortieren Sie nach Zeit, entfernen Doppelte und markieren offene Fragen mit lila Zetteln. Ergänzen Sie Befehle, Akteure und Regeln erst, wenn die Ereignislinie steht. Offene Fragen sind kein Fehler, sondern das wertvollste Ergebnis.",
  "em": "Vorher klären Workshop-Grundlagen und Stakeholder-Analyse, wer dabei sein muss. Nachher überführen Sie die Ergebnisse in Domänenmodell, Glossar und Aktivitätsdiagramme und leiten User Stories ab.",
  "qu": [
   "Brandolini, A.: Introducing EventStorming (Leanpub, 2021)",
   "Evans, E.: Domain-Driven Design (Addison-Wesley, 2003)",
   "Vernon, V.: Domain-Driven Design Distilled (Addison-Wesley, 2016)"
  ],
  "io": {
   "lf": [
    "Fachleute aus allen beteiligten Bereichen",
    "Entwickelnde",
    "Moderation"
   ],
   "in": [
    {
     "t": "Teilnehmerliste",
     "to": "stakeholder",
     "v": "geliefert von"
    },
    {
     "t": "Grobe Prozessbeschreibung",
     "to": "workshop",
     "v": "vorbereitet in"
    },
    {
     "t": "Fachbegriffe",
     "to": "dokumentenanalyse",
     "v": "gesammelt in"
    }
   ],
   "out": [
    {
     "t": "Ereigniszeitlinie auf der Wand"
    },
    {
     "t": "Fachbegriffe und Aggregate",
     "to": "domaenenmodell",
     "v": "weiterentwickelt zu"
    },
    {
     "t": "Offene Fragen und Hotspots"
    },
    {
     "t": "Kandidaten für Stories",
     "to": "user-stories",
     "v": "formuliert als"
    }
   ],
   "ko": [
    "Das gesamte Team",
    "Software-Architektur",
    "Product Owner"
   ]
  },
  "li": [
   [
    "workshop",
    "ergaenzt",
    "Ein besonderer Workshop-Typ."
   ],
   [
    "domaenenmodell",
    "danach",
    "Begriffe und Zusammenhänge als Modell darstellen."
   ],
   [
    "aktivitaetsdiagramm",
    "danach",
    "Ablauf als Diagramm darstellen."
   ],
   [
    "user-stories",
    "danach",
    "Ereignisse werden zu Stories."
   ],
   [
    "bpmn",
    "alternative",
    "BPMN ist formaler, Event Storming schneller."
   ],
   [
    "glossar",
    "danach",
    "Gemeinsame Begriffe festhalten."
   ]
  ],
  "tools": [
   "Miro",
   "Haftnotizen"
  ],
  "s": "entwurf",
  "vis": "event"
 },
 {
  "id": "user-stories",
  "n": "User Stories",
  "c": "dok",
  "f": "artefakt",
  "m": "agil",
  "ph": "spezifizieren",
  "t": "Anforderungsformat",
  "kz": "User Stories",
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
  "zw": "Eine User Story beschreibt eine Anforderung aus Sicht der Nutzerin oder des Nutzers in einem Satz: Wer will was und wozu. Sie ist bewusst kurz und dient als Anlass für ein Gespräch, nicht als vollständige Spezifikation. Der Nutzen steht im Zentrum, die Lösung bleibt offen.",
  "wa": [
   "In agilen Vorhaben mit laufender Verfeinerung",
   "Wenn Fachbereich und Team eng zusammenarbeiten",
   "Wenn Anforderungen sich noch ändern"
  ],
  "wn": [
   "Wenn Verträge eine detaillierte Spezifikation verlangen: dann zusätzlich Use Cases oder Pflichtenheft",
   "Bei technischen Aufgaben ohne Nutzerbezug",
   "Wenn Fachleute für Rückfragen fehlen"
  ],
  "vb": [
   "Personas oder Rollen bereithalten",
   "Product Backlog und Vorlage («Als … möchte ich … damit …») bereitstellen",
   "Zeitfenster im Refinement reservieren",
   "Gemeinsames Verständnis der INVEST-Kriterien herstellen"
  ],
  "nr": "S-01",
  "kt": "Eine Anforderung aus Nutzersicht: Wer will was, wozu. Anlass für ein Gespräch.",
  "ks": [
   "Rolle, Wunsch, Nutzen nennen",
   "INVEST prüfen",
   "Akzeptanzkriterien ergänzen",
   "Im Team schätzen",
   "Zu grosse Stories teilen"
  ],
  "gw": [
   "Agil, mit laufender Verfeinerung",
   "Fachbereich und Team arbeiten eng zusammen",
   "Wenn sich Anforderungen noch ändern"
  ],
  "rg": [
   "Eine Story liefert Nutzen für eine Rolle",
   "Sie passt in einen Sprint",
   "Details entstehen im Gespräch, nicht im Text"
  ],
  "vk": [
   "Personas oder Rollen bereithalten",
   "Zeit im Refinement einplanen"
  ],
  "bn": "Vertrag verlangt Detail: zusätzlich Use Cases",
  "pr": "Gute Stories folgen INVEST: unabhängig, verhandelbar, wertvoll, schätzbar, klein, testbar. Die drei C nach Ron Jeffries gelten bis heute: Card (Karte), Conversation (Gespräch), Confirmation (Akzeptanzkriterien). Schreiben Sie zuerst den Nutzen, formulieren Sie Rolle und Wunsch danach. Sind Stories zu gross, teilen Sie sie vertikal, so dass jede Teilstory einen sichtbaren Nutzen liefert.",
  "em": "Vorher klären Personas, für wen geschrieben wird. Direkt danach ergänzen Sie Akzeptanzkriterien und schätzen im Team. Zu grosse Stories teilen Sie mit Story Splitting, bevor sie in den Sprint kommen.",
  "qu": [
   "Cohn, M.: User Stories Applied (Addison-Wesley, 2004)",
   "Wake, B.: INVEST in Good Stories, and SMART Tasks (2003), xp123.com",
   "Jeffries, R., Anderson, A., Hendrickson, C.: Extreme Programming Installed (Addison-Wesley, 2000)"
  ],
  "io": {
   "lf": [
    "Fachbereich und Nutzer",
    "Product Owner",
    "Requirements Engineer"
   ],
   "in": [
    {
     "t": "Rollen aus Nutzergruppen",
     "to": "persona",
     "v": "geliefert von"
    },
    {
     "t": "Rohe Anforderungen aus Gesprächen",
     "to": "interview",
     "v": "geliefert von"
    },
    {
     "t": "Wirkungsziele",
     "to": "impact-mapping",
     "v": "geliefert von"
    }
   ],
   "out": [
    {
     "t": "Story-Karten mit Rolle, Wunsch und Nutzen"
    },
    {
     "t": "Prüfbare Kriterien",
     "to": "akzeptanzkriterien",
     "v": "ergänzt durch"
    },
    {
     "t": "Schätzbare Einheiten",
     "to": "story-points",
     "v": "bewertet in"
    },
    {
     "t": "Einträge im Backlog",
     "to": "product-backlog",
     "v": "aufgenommen in"
    }
   ],
   "ko": [
    "Entwicklungsteam",
    "Test",
    "Product Owner"
   ]
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
  "f": "artefakt",
  "m": "klassisch",
  "ph": "spezifizieren",
  "t": "Anforderungsformat",
  "kz": "Use Cases",
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
  "zw": "Ein Use Case beschreibt, wie ein Akteur mit dem System ein Ziel erreicht, in Schritten mit Hauptablauf und Alternativen. Er liefert eine vollständigere, nachvollziehbare Beschreibung als eine Story und eignet sich für fachlich oder rechtlich anspruchsvolle Abläufe.",
  "wa": [
   "Bei komplexen Abläufen mit vielen Ausnahmen",
   "In klassischen Vorhaben oder bei formalen Vorgaben",
   "Als Grundlage für Test und Abnahme"
  ],
  "wn": [
   "Wenn sich Anforderungen schnell ändern und Pflege teuer wird",
   "Bei einfachen, selbsterklärenden Funktionen",
   "Wenn nur Oberflächenabläufe gemeint sind und keine Fachlichkeit"
  ],
  "vb": [
   "Akteure und Ziele aus Kontext- oder Use-Case-Diagramm sammeln",
   "Vorlage wählen (Name, Akteur, Vorbedingung, Hauptablauf, Alternativen, Nachbedingung)",
   "Fachexperten für Rückfragen einplanen",
   "Detailtiefe vorab festlegen: Ziel- oder Funktionsebene"
  ],
  "nr": "S-02",
  "kt": "Ein Akteur erreicht ein Ziel in Schritten mit Haupt- und Alternativablauf.",
  "ks": [
   "Akteur und Ziel bestimmen",
   "Hauptablauf in Schritten",
   "Alternativen und Fehler",
   "Vor- und Nachbedingung",
   "Mit Fachleuten prüfen"
  ],
  "gw": [
   "Komplexe Abläufe mit vielen Ausnahmen",
   "Formale Vorgaben, Basis für Abnahme",
   "Wenn Details und Ausnahmen zählen"
  ],
  "rg": [
   "Ein Use Case beschreibt ein Ziel eines Akteurs",
   "Name im Format Verb + Objekt",
   "Schritte sind Akteur-System-Dialog, ohne UI-Details"
  ],
  "vk": [
   "Akteure und Ziele sammeln",
   "Vorlage wählen, Fachleute einplanen"
  ],
  "bn": "Anforderungen ändern sich schnell",
  "pr": "Ein Use Case hat ein Ziel eines Akteurs, nicht eine Funktion des Systems. Schreiben Sie in kurzen Sätzen der Form Akteur-Verb-Objekt. Der Hauptablauf läuft ohne Fehler durch, Alternativen und Fehlerfälle folgen separat. Typische Fehler sind zu feine Schritte («Knopf klicken») und die Vermischung mit Oberflächen- und Datenbankdetails.",
  "em": "Vorher klären das Use-Case-Diagramm und das Kontextdiagramm, welche Akteure und Ziele es gibt. Danach leiten Sie Akzeptanzkriterien und Testfälle ab und nehmen den Use Case ins Pflichtenheft auf.",
  "qu": [
   "Cockburn, A.: Writing Effective Use Cases (Addison-Wesley, 2001)",
   "Jacobson, I.: Object-Oriented Software Engineering (Addison-Wesley, 1992)",
   "IIBA: BABOK Guide, Version 3 (2015), Technik «Use Cases und Szenarien»"
  ],
  "io": {
   "lf": [
    "Fachbereich und Nutzer",
    "Business Analyst"
   ],
   "in": [
    {
     "t": "Akteure und Ziele",
     "to": "use-case-diagramm",
     "v": "geliefert von"
    },
    {
     "t": "Systemgrenze",
     "to": "kontextdiagramm",
     "v": "geliefert von"
    },
    {
     "t": "Ablaufskizzen",
     "to": "aktivitaetsdiagramm",
     "v": "ergänzt durch"
    }
   ],
   "out": [
    {
     "t": "Use-Case-Beschreibung mit Haupt- und Alternativabläufen"
    },
    {
     "t": "Testgrundlage",
     "to": "akzeptanzkriterien",
     "v": "abgeleitet in"
    },
    {
     "t": "Funktionale Anforderungen",
     "to": "pflichtenheft",
     "v": "übernommen in"
    }
   ],
   "ko": [
    "Entwicklung",
    "Test",
    "Auftraggeber"
   ]
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
  "f": "artefakt",
  "m": "agil",
  "ph": "spezifizieren",
  "t": "Testbare Bedingungen",
  "kz": "Akzeptanzkriterien",
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
  "zw": "Akzeptanzkriterien legen fest, wann eine Anforderung als erfüllt gilt. Im Format Gegeben-Wenn-Dann (Gherkin) beschreiben sie konkrete Beispiele und lassen sich zugleich als Test automatisieren. Sie verhindern Missverständnisse zwischen Fachbereich und Team.",
  "wa": [
   "Für jede Story, bevor sie in den Sprint kommt",
   "Wenn Fachlichkeit und Team unterschiedlich verstehen, was «fertig» heisst",
   "Wenn automatisierte Tests gewünscht sind"
  ],
  "wn": [
   "Bei rein technischen Aufgaben ohne Verhalten",
   "Wenn Kriterien zu Skripten für jeden Klick werden: Nutzen sinkt, Pflegeaufwand steigt"
  ],
  "vb": [
   "Story mit Nutzen und Rolle vorliegen haben",
   "Product Owner, Entwicklung und Test zu einem kurzen Gespräch zusammenbringen (Drei Amigos)",
   "Konkrete Beispiele aus dem Fachbereich sammeln",
   "Vorlage Gegeben-Wenn-Dann bereitstellen"
  ],
  "nr": "S-03",
  "kt": "Wann ist eine Anforderung erfüllt? Beispiele im Format Gegeben-Wenn-Dann.",
  "ks": [
   "Story und Beispiele sammeln",
   "Gegeben: Ausgangslage",
   "Wenn: Aktion",
   "Dann: erwartetes Ergebnis",
   "Grenz- und Fehlerfälle ergänzen"
  ],
  "gw": [
   "Für jede Story vor dem Sprint",
   "Alle verstehen «fertig» gleich",
   "Wenn automatisierte Tests gewünscht sind"
  ],
  "rg": [
   "Jedes Kriterium ist eindeutig mit Ja oder Nein beantwortbar",
   "Kein technisches Vorgehen, sondern beobachtbares Verhalten",
   "Drei Amigos: Fachseite, Entwicklung, Test sprechen gemeinsam"
  ],
  "vk": [
   "Story mit Rolle und Nutzen",
   "Product Owner, Entwicklung, Test im Gespräch"
  ],
  "bn": "Rein technische Aufgaben ohne Verhalten",
  "pr": "Arbeiten Sie mit Beispielen: Ein konkreter Fall verrät mehr als eine allgemeine Regel. Ein Szenario testet eine Sache. Verwenden Sie die Sprache des Fachbereichs, keine Technik. Besonders wertvoll sind Grenz- und Fehlerfälle: «Was passiert bei Betrag null?». Halten Sie Kriterien so kurz, dass sie lesbar bleiben, meist drei bis sieben je Story.",
  "em": "Vorher steht die Story oder der Use Case, aus dem sie abgeleitet werden. Danach prüft das Team die Kriterien im Review, ergänzt sie in der Definition of Ready und nutzt sie für den Abnahmetest.",
  "qu": [
   "North, D.: Introducing BDD (2006), dannorth.net",
   "Adzic, G.: Specification by Example (Manning, 2011)",
   "Wynne, M., Hellesøy, A.: The Cucumber Book (Pragmatic Bookshelf, 2012)"
  ],
  "io": {
   "lf": [
    "Product Owner",
    "Fachbereich",
    "Test"
   ],
   "in": [
    {
     "t": "Story",
     "to": "user-stories",
     "v": "geliefert von"
    },
    {
     "t": "Ablaufbeschreibung",
     "to": "use-cases",
     "v": "geliefert von"
    },
    {
     "t": "Geschäftsregeln",
     "to": "geschaeftsregeln",
     "v": "geliefert von"
    }
   ],
   "out": [
    {
     "t": "Szenarien in Gegeben-Wenn-Dann"
    },
    {
     "t": "Teststoff für die Abnahme",
     "to": "abnahmetest",
     "v": "genutzt in"
    },
    {
     "t": "Prüfgrundlage",
     "to": "review",
     "v": "genutzt in"
    },
    {
     "t": "Zustandsübergänge",
     "to": "zustandsdiagramm",
     "v": "verdeutlicht in"
    }
   ],
   "ko": [
    "Entwicklungsteam",
    "Test",
    "Product Owner"
   ]
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
  "f": "artefakt",
  "m": "agil",
  "ph": "spezifizieren",
  "t": "Qualitätsvereinbarung",
  "kz": "DoR / DoD",
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
  "zw": "Die Definition of Ready (DoR) legt fest, wann eine Story bereit für den Sprint ist. Die Definition of Done (DoD) legt fest, wann sie wirklich fertig ist. Beide sind gemeinsame Qualitätsvereinbarungen des Teams und verhindern endlose Diskussionen über «fast fertig».",
  "wa": [
   "Wenn Stories unfertig in den Sprint kommen oder halbfertig bleiben",
   "Beim Aufbau eines neuen Teams",
   "Wenn mehrere Teams auf ein Produkt hinarbeiten"
  ],
  "wn": [
   "Wenn die DoR zur starren Hürde wird, die Zusammenarbeit blockiert",
   "Wenn die Liste so lang ist, dass niemand sie liest"
  ],
  "vb": [
   "Aktuelle Probleme im Ablauf sammeln (Retrospektive)",
   "Das ganze Team einladen",
   "Beispiele aus anderen Teams oder dem Scrum Guide ansehen",
   "Sichtbaren Aushang oder Wikiseite vorsehen"
  ],
  "nr": "S-04",
  "kt": "Zwei Checklisten: wann ist eine Story bereit (DoR), wann ist sie fertig (DoD).",
  "ks": [
   "Probleme im Ablauf sammeln",
   "Kurze Liste gemeinsam festlegen",
   "Sichtbar aushängen",
   "Bei Fehlern erweitern",
   "Regelmässig überprüfen"
  ],
  "gw": [
   "Stories bleiben halbfertig liegen",
   "Neues Team oder mehrere Teams",
   "Wenn mehrere Teams ein Produkt bauen"
  ],
  "rg": [
   "Vom ganzen Team gemeinsam beschlossen",
   "Kurz halten (5 bis 8 Punkte)",
   "Done gilt für jede Story, ohne Ausnahme"
  ],
  "vk": [
   "Probleme im Ablauf sammeln",
   "Ganzes Team einladen"
  ],
  "bn": "Die DoR wird zur starren Hürde",
  "pr": "Starten Sie klein mit fünf bis acht Punkten und erweitern Sie nur, wenn Fehler auftreten. DoD-Beispiele: Code geprüft, Tests grün, Dokumentation aktualisiert, vom Product Owner angeschaut. DoR-Beispiele: Nutzen klar, Akzeptanzkriterien vorhanden, geschätzt, Abhängigkeiten bekannt. Behandeln Sie die DoD als verbindlich und die DoR als Leitplanke.",
  "em": "Vorher helfen Stories und Akzeptanzkriterien, damit die Kriterien konkret werden. Danach prüfen Sie im Refinement gegen die DoR und im Review gegen die DoD.",
  "qu": [
   "Schwaber, K., Sutherland, J.: The Scrum Guide (2020), scrumguides.org",
   "Rubin, K.: Essential Scrum (Addison-Wesley, 2012)",
   "Cohn, M.: Succeeding with Agile (Addison-Wesley, 2009)"
  ],
  "io": {
   "lf": [
    "Das Team",
    "Product Owner",
    "Qualitätssicherung"
   ],
   "in": [
    {
     "t": "Stories und Kriterien",
     "to": "user-stories",
     "v": "geliefert von"
    },
    {
     "t": "Erfahrungen aus der Retrospektive"
    },
    {
     "t": "Qualitätsanforderungen",
     "to": "nfr",
     "v": "geliefert von"
    }
   ],
   "out": [
    {
     "t": "Checkliste DoR"
    },
    {
     "t": "Checkliste DoD"
    },
    {
     "t": "Prüfmassstab für Reviews",
     "to": "review",
     "v": "genutzt in"
    },
    {
     "t": "Bereitschaftsprüfung",
     "to": "refinement",
     "v": "genutzt in"
    }
   ],
   "ko": [
    "Entwicklungsteam",
    "Product Owner",
    "Scrum Master"
   ]
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
  "f": "artefakt",
  "m": "beide",
  "ph": "spezifizieren",
  "t": "Anforderungsart",
  "kz": "Qualität (NFR)",
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
  "zw": "Qualitätsanforderungen (nichtfunktionale Anforderungen) beschreiben, wie gut ein System etwas tun muss: schnell, sicher, bedienbar, zuverlässig, wartbar. Sie werden oft vergessen und sind später teuer. Messbar formuliert werden sie testbar und entscheidungsfähig.",
  "wa": [
   "Bei jedem Vorhaben, früh genug für die Architektur",
   "Wenn Lastspitzen, Sicherheit oder Regulierung eine Rolle spielen",
   "Wenn Anforderungen wie «schnell» im Raum stehen"
  ],
  "wn": [
   "Wenn Zahlen nur geraten sind: dann messen oder Ziele zunächst als Hypothese kennzeichnen",
   "Bei Wegwerf-Prototypen"
  ],
  "vb": [
   "Qualitätsmodell wie ISO 25010 als Checkliste bereitlegen",
   "Stakeholder mit Betriebs-, Sicherheits- und Nutzersicht einladen",
   "Vorhandene Messwerte des Altsystems sammeln",
   "Vorlage mit Messgrösse, Zielwert und Messmethode"
  ],
  "nr": "S-05",
  "kt": "Wie gut muss das System sein? Schnell, sicher, bedienbar: messbar formuliert.",
  "ks": [
   "Qualitätsmerkmale durchgehen",
   "Je Merkmal Zielwert festlegen",
   "Messmethode festhalten",
   "Konflikte gewichten",
   "Annahmen notieren"
  ],
  "gw": [
   "Früh, bevor die Architektur steht",
   "«Schnell» und «sicher» bleiben vage",
   "Bei Lastspitzen, Sicherheit oder Regulierung"
  ],
  "rg": [
   "Jede Anforderung ist messbar (Wert, Einheit, Bedingung)",
   "Keine Adjektive wie «schnell» oder «sicher» ohne Zahl",
   "Kritische NFR früh klären, da sie Architektur prägen"
  ],
  "vk": [
   "ISO 25010 als Checkliste",
   "Betrieb, Sicherheit, Nutzer einladen"
  ],
  "bn": "Zahlen sind nur geraten: erst messen",
  "pr": "Gehen Sie die Qualitätsmerkmale durch und fragen Sie je Merkmal: Wie viel genügt, woran messen wir es? «Antwortzeit unter zwei Sekunden bei 200 gleichzeitigen Nutzern» ist prüfbar, «schnell» nicht. Priorisieren Sie, denn Qualitäten stehen im Konflikt (Sicherheit gegen Bedienbarkeit). Halten Sie Annahmen fest.",
  "em": "Vorher sind die wichtigsten Stories und Nutzer bekannt. Danach nehmen Sie die Kriterien in die Definition of Done auf und ins Pflichtenheft. Kano hilft, Qualitätsmerkmale nach Wirkung auf die Zufriedenheit zu sortieren.",
  "qu": [
   "ISO/IEC 25010:2011 – Systems and software quality models",
   "Gilb, T.: Competitive Engineering (Elsevier, 2005), Planguage",
   "Chung, L. u.a.: Non-Functional Requirements in Software Engineering (Springer, 2000)"
  ],
  "io": {
   "lf": [
    "Betrieb und Sicherheit",
    "Fachbereich",
    "Architektur"
   ],
   "in": [
    {
     "t": "Nutzungskontext",
     "to": "user-stories",
     "v": "geliefert von"
    },
    {
     "t": "Betriebs- und Sicherheitsvorgaben"
    },
    {
     "t": "Wirkung auf Zufriedenheit",
     "to": "kano",
     "v": "ergänzt durch"
    }
   ],
   "out": [
    {
     "t": "Messbare Qualitätsanforderungen"
    },
    {
     "t": "Aufnahme in den Fertigstellungsmassstab",
     "to": "dor-dod",
     "v": "genutzt in"
    },
    {
     "t": "Anforderungskatalog",
     "to": "pflichtenheft",
     "v": "übernommen in"
    }
   ],
   "ko": [
    "Architektur",
    "Test",
    "Betrieb"
   ]
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
  "f": "artefakt",
  "m": "klassisch",
  "ph": "spezifizieren",
  "t": "Spezifikationsdokument",
  "kz": "Pflichtenheft",
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
  "zw": "Das Lastenheft beschreibt, was der Auftraggeber braucht, das Pflichtenheft, wie der Auftragnehmer es umsetzen wird. Zusammen sind sie die vertragliche Grundlage in klassischen Projekten und machen Umfang, Leistung und Abnahme nachvollziehbar.",
  "wa": [
   "Bei Festpreis- oder Ausschreibungsprojekten",
   "Bei hohen regulatorischen Anforderungen",
   "Wenn Auftraggeber und Auftragnehmer verschiedenen Organisationen angehören"
  ],
  "wn": [
   "Bei unklaren Zielen und schnellem Lernen: dann agil mit Backlog",
   "Wenn niemand das Dokument pflegt: es veraltet schnell"
  ],
  "vb": [
   "Struktur festlegen, etwa nach ISO 29148 oder Rupp",
   "Anforderungen aus Use Cases und Qualitätsvorgaben zusammenstellen",
   "Glossar und Kontextdiagramm bereitlegen",
   "Prüf- und Freigabeprozess mit den Beteiligten vereinbaren"
  ],
  "nr": "S-06",
  "kt": "Vertragliche Beschreibung, wie die Anforderungen umgesetzt werden. Klassisch.",
  "ks": [
   "Struktur festlegen",
   "Anforderungen nummerieren",
   "Muss und Kann trennen",
   "Im Review prüfen",
   "Änderungen geregelt führen"
  ],
  "gw": [
   "Festpreis oder Ausschreibung",
   "Hohe regulatorische Anforderungen",
   "Auftraggeber und Auftragnehmer sind getrennt"
  ],
  "rg": [
   "Jede Anforderung hat eine eindeutige ID",
   "Verbindliche Sprache (muss, soll, kann)",
   "Änderungen nur über Change Management"
  ],
  "vk": [
   "Struktur festlegen (ISO 29148)",
   "Glossar und Kontextdiagramm bereit"
  ],
  "bn": "Ziele unklar, schnelles Lernen: agil",
  "pr": "Jede Anforderung sollte eindeutig nummeriert, einzeln prüfbar und widerspruchsfrei sein. Trennen Sie Muss- und Kann-Anforderungen. Halten Sie den Umfang schlank: Was nicht gelesen wird, wird nicht geprüft. Pflegen Sie Änderungen über ein geregeltes Verfahren, sonst weichen Dokument und Realität auseinander.",
  "em": "Vorher müssen Use Cases, Qualitätsanforderungen und Kontext vorliegen. Danach prüfen Sie das Dokument im Review, halten Rückverfolgbarkeit zu Tests fest und steuern Änderungen im Änderungsmanagement.",
  "qu": [
   "ISO/IEC/IEEE 29148:2018 – Requirements engineering",
   "Rupp, C.: Requirements-Engineering und -Management (Hanser)",
   "DIN 69901-5: Projektmanagement (Begriffe Lastenheft und Pflichtenheft)"
  ],
  "io": {
   "lf": [
    "Auftraggeber",
    "Fachbereiche",
    "Architektur"
   ],
   "in": [
    {
     "t": "Use Cases",
     "to": "use-cases",
     "v": "geliefert von"
    },
    {
     "t": "Qualitätsanforderungen",
     "to": "nfr",
     "v": "geliefert von"
    },
    {
     "t": "Systemgrenze",
     "to": "kontextdiagramm",
     "v": "geliefert von"
    }
   ],
   "out": [
    {
     "t": "Freigegebenes Dokument"
    },
    {
     "t": "Prüfgrundlage",
     "to": "review",
     "v": "geprüft in"
    },
    {
     "t": "Verfolgbare Anforderungen",
     "to": "traceability",
     "v": "verknüpft in"
    },
    {
     "t": "Änderungsbasis",
     "to": "change-management",
     "v": "gesteuert durch"
    }
   ],
   "ko": [
    "Entwicklung",
    "Test",
    "Auftraggeber und Einkauf"
   ]
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
  "id": "produktvision",
  "n": "Produktvision",
  "c": "dok",
  "f": "artefakt",
  "m": "agil",
  "ph": "verstehen",
  "t": "Artefakt",
  "kz": "Vision",
  "k": "Kurze, überprüfbare Beschreibung, für wen das Produkt welchen Nutzen schafft und was es von Alternativen abhebt. Gibt dem Team Richtung.",
  "aufwand": "1 bis 2 Stunden",
  "ab": [
   "Zielgruppe und ihr Problem benennen",
   "Kernnutzen und Alleinstellung formulieren",
   "Erfolgsmasse festlegen",
   "Vision in ein bis zwei Sätzen aufschreiben (z. B. mit dem Product Vision Board)",
   "Im Team teilen und bei neuen Erkenntnissen schärfen"
  ],
  "re": [
   "Höchstens zwei Sätze",
   "Sie nennt eine Zielgruppe und einen Nutzen",
   "Sie ist so konkret, dass man Ideen dagegen prüfen kann"
  ],
  "bsp": {
   "t": "Vision Tourenplanung",
   "x": "Für Disponentinnen kleiner Transportfirmen, die täglich mehr als 20 Touren planen, ist die Tourenplanung ein Werkzeug, das Konflikte vor dem Versand findet. Anders als Excel prüft es Fahrzeuge und Fahrer automatisch."
  },
  "zw": "Die Produktvision beschreibt in wenigen Sätzen, für wen das Produkt welches Problem löst und warum es sich lohnt. Sie ist der gemeinsame Zielpunkt, an dem das Team Entscheidungen misst, und ein Filter für Anforderungen.",
  "wa": [
   "Zu Beginn eines Produkts oder grösseren Vorhabens",
   "Wenn das Team unterschiedliche Ziele verfolgt",
   "Als Leitplanke bei Streit über Prioritäten"
  ],
  "wn": [
   "Wenn die Vision nur ein Slogan ohne Zielgruppe und Nutzen ist",
   "Wenn Zielgruppe und Problem noch ganz unbekannt sind: zuerst Verstehen"
  ],
  "vb": [
   "Zielgruppe und Problem aus Analysen und Gesprächen bereitlegen",
   "Vorlage wählen, zum Beispiel die Vorlage von Geoffrey Moore oder das Produkt-Vision-Board",
   "Entscheidende Personen im Raum haben",
   "60 bis 120 Minuten einplanen"
  ],
  "nr": "V-05",
  "kt": "In wenigen Sätzen: für wen, welches Problem, welcher Nutzen. Zielpunkt des Teams.",
  "ks": [
   "Zielgruppe und Problem klären",
   "Vorlage ausfüllen",
   "Auf eine Karte kürzen",
   "Sichtbar aufhängen",
   "Grosse Wünsche daran messen"
  ],
  "gw": [
   "Zu Beginn eines Produkts",
   "Streit über Ziele oder Prioritäten",
   "Als Leitplanke im Priorisierungsstreit"
  ],
  "rg": [
   "Höchstens zwei Sätze",
   "Sie nennt eine Zielgruppe und einen Nutzen",
   "Sie ist so konkret, dass man Ideen dagegen prüfen kann"
  ],
  "vk": [
   "Zielgruppe und Problem klären",
   "Entscheider im Raum haben"
  ],
  "bn": "Nur ein Slogan ohne Zielgruppe",
  "pr": "Eine gute Vision passt auf eine Karteikarte und ist so konkret, dass sie auch Nein sagen lässt. Vorlage nach Moore: Für [Zielgruppe], die [Bedürfnis] hat, ist [Produkt] ein [Kategorie], das [Nutzen]. Anders als [Alternative] bietet es [Unterscheidung]. Hängen Sie die Vision sichtbar auf und prüfen Sie jede grosse Anforderung daran.",
  "em": "Vorher helfen SWOT oder Business Model Canvas für die Ausgangslage. Danach brechen Sie die Vision im Impact Mapping auf Ziele und Wirkungen herunter und planen Etappen in der Roadmap.",
  "qu": [
   "Moore, G.: Crossing the Chasm (HarperBusiness, 1991)",
   "Pichler, R.: Agile Product Management with Scrum (Addison-Wesley, 2010)",
   "Cagan, M.: Inspired (Wiley, 2017)"
  ],
  "io": {
   "lf": [
    "Auftraggeber und Management",
    "Nutzer und Kunden",
    "Strategie"
   ],
   "in": [
    {
     "t": "Lagebild",
     "to": "swot",
     "v": "geliefert von"
    },
    {
     "t": "Geschäftsmodell",
     "to": "business-model-canvas",
     "v": "geliefert von"
    },
    {
     "t": "Stakeholdererwartungen",
     "to": "stakeholder",
     "v": "geliefert von"
    }
   ],
   "out": [
    {
     "t": "Visionssatz und Vision-Board"
    },
    {
     "t": "Wirkungsziele",
     "to": "impact-mapping",
     "v": "aufgeschlüsselt in"
    },
    {
     "t": "Zielbild für Etappen",
     "to": "roadmap",
     "v": "genutzt in"
    },
    {
     "t": "Wertmassstab für Einträge",
     "to": "product-backlog",
     "v": "genutzt in"
    }
   ],
   "ko": [
    "Das gesamte Team",
    "Management",
    "Product Owner"
   ]
  },
  "li": [
   [
    "swot",
    "vorher",
    "Die Lage liefert die Grundlage."
   ],
   [
    "business-model-canvas",
    "vorher",
    "Das Geschäftsmodell definiert Zielgruppe und Nutzen."
   ],
   [
    "impact-mapping",
    "danach",
    "Die Vision wird zu einem messbaren Ziel."
   ],
   [
    "roadmap",
    "danach",
    "Die Roadmap setzt die Vision in Etappen um."
   ],
   [
    "product-backlog",
    "danach",
    "Backlog-Einträge dienen der Vision."
   ],
   [
    "stakeholder",
    "ergaenzt",
    "Stakeholder prüfen die Vision."
   ]
  ],
  "tools": [
   "Miro",
   "Confluence"
  ],
  "s": "entwurf"
 },
 {
  "id": "glossar",
  "n": "Glossar",
  "c": "dok",
  "f": "artefakt",
  "m": "beide",
  "ph": "spezifizieren",
  "t": "Artefakt",
  "kz": "Glossar",
  "k": "Sammlung der Fachbegriffe des Vorhabens mit einheitlicher Definition. Verhindert Missverständnisse zwischen Fachbereich und Entwicklung.",
  "aufwand": "Laufend",
  "ab": [
   "Begriffe aus Interviews, Dokumenten und Workshops sammeln",
   "Je Begriff eine kurze Definition schreiben",
   "Synonyme und verbotene Wörter vermerken",
   "Mit dem Fachbereich abstimmen",
   "Laufend ergänzen und verlinken"
  ],
  "re": [
   "Ein Begriff hat genau eine Bedeutung",
   "Definitionen sind kurz und verständlich",
   "Das Glossar liegt dort, wo alle es sehen"
  ],
  "bsp": {
   "t": "Glossareintrag",
   "x": "Tour: Fahrt eines Fahrzeugs mit einem Fahrer an einem Tag, bestehend aus mehreren Stopps. Nicht: Auftrag."
  },
  "zw": "Das Glossar sammelt Fachbegriffe mit klaren, abgestimmten Definitionen. Es schafft eine gemeinsame Sprache zwischen Fachbereich, Analyse und Entwicklung und verhindert, dass dasselbe Wort Verschiedenes bedeutet.",
  "wa": [
   "Ab dem Projektstart, laufend",
   "Wenn Missverständnisse über Begriffe auftreten",
   "Wenn neue Teammitglieder schnell einsteigen sollen"
  ],
  "wn": [
   "Wenn Begriffe nur geschrieben und nie verwendet werden",
   "Wenn niemand für Pflege zuständig ist"
  ],
  "vb": [
   "Verantwortliche Person bestimmen",
   "Ablageort wählen, der für alle erreichbar ist",
   "Vorlage festlegen: Begriff, Definition, Synonyme, Abgrenzung, Quelle",
   "Erste Begriffe aus Dokumenten und Workshops übernehmen"
  ],
  "nr": "S-07",
  "kt": "Fachbegriffe mit abgestimmten Definitionen: eine gemeinsame Sprache.",
  "ks": [
   "Verantwortliche bestimmen",
   "Begriffe sammeln",
   "Definition, Synonym, Quelle",
   "Streit bis zur Einigung",
   "Aus Stories darauf verweisen"
  ],
  "gw": [
   "Ab Projektstart, laufend",
   "Begriffe führen zu Missverständnissen",
   "Neue Teammitglieder sollen schnell einsteigen"
  ],
  "rg": [
   "Ein Begriff hat genau eine Bedeutung",
   "Definitionen sind kurz und verständlich",
   "Das Glossar liegt dort, wo alle es sehen"
  ],
  "vk": [
   "Verantwortliche Person bestimmen",
   "Ablageort für alle wählen"
  ],
  "bn": "Begriffe werden nie benutzt",
  "pr": "Fachbegriffe in der Sprache des Fachbereichs definieren, nicht der IT. Ein Begriff, eine Bedeutung: Streiten Sie bei Mehrdeutigkeit, bis eine Definition gilt. Verlinken Sie das Glossar aus Stories und Spezifikationen. Ein kurzes Glossar, das gelesen wird, ist besser als ein vollständiges, das niemand kennt.",
  "em": "Vorher liefern Dokumentenanalyse und Event Storming die Begriffe. Danach hilft es dem Domänenmodell und den Geschäftsregeln, und es gehört ins Pflichtenheft.",
  "qu": [
   "IIBA: BABOK Guide, Version 3 (2015), Technik «Glossar»",
   "Evans, E.: Domain-Driven Design (Addison-Wesley, 2003), Kapitel «Ubiquitous Language»",
   "Pohl, K., Rupp, C.: Basiswissen Requirements Engineering (dpunkt.verlag)"
  ],
  "io": {
   "lf": [
    "Fachbereich",
    "Recht und Compliance"
   ],
   "in": [
    {
     "t": "Begriffe aus Unterlagen",
     "to": "dokumentenanalyse",
     "v": "geliefert von"
    },
    {
     "t": "Begriffe aus Workshops",
     "to": "event-storming",
     "v": "geliefert von"
    },
    {
     "t": "Bestehende Definitionen"
    }
   ],
   "out": [
    {
     "t": "Abgestimmte Begriffsliste"
    },
    {
     "t": "Fachliche Begriffe",
     "to": "domaenenmodell",
     "v": "genutzt in"
    },
    {
     "t": "Einheitliche Sprache",
     "to": "user-stories",
     "v": "verwendet in"
    },
    {
     "t": "Anhang",
     "to": "pflichtenheft",
     "v": "übernommen in"
    }
   ],
   "ko": [
    "Das ganze Team",
    "Neue Mitarbeitende",
    "Test"
   ]
  },
  "li": [
   [
    "dokumentenanalyse",
    "vorher",
    "Begriffe stammen aus Dokumenten."
   ],
   [
    "event-storming",
    "vorher",
    "Begriffe entstehen im Workshop."
   ],
   [
    "domaenenmodell",
    "ergaenzt",
    "Modell und Glossar nutzen dieselben Begriffe."
   ],
   [
    "user-stories",
    "ergaenzt",
    "Stories verwenden die Begriffe."
   ],
   [
    "pflichtenheft",
    "danach",
    "Als Anhang im Pflichtenheft."
   ],
   [
    "geschaeftsregeln",
    "ergaenzt",
    "Regeln stützen sich auf Begriffe."
   ]
  ],
  "tools": [
   "Confluence",
   "Wiki"
  ],
  "s": "entwurf"
 },
 {
  "id": "geschaeftsregeln",
  "n": "Geschäftsregeln",
  "c": "dok",
  "f": "artefakt",
  "m": "klassisch",
  "ph": "spezifizieren",
  "t": "Artefakt",
  "kz": "Regeln",
  "k": "Verbindliche Regeln der Fachseite, etwa Berechnungen, Fristen und Bedingungen. Werden getrennt von Funktionen beschrieben und eindeutig nummeriert.",
  "aufwand": "Stunden bis Tage",
  "ab": [
   "Regeln aus Dokumenten, Gesprächen und Altsystemen sammeln",
   "Je Regel eine Zeile mit eindeutiger Nummer anlegen",
   "Als «Wenn ... dann ...» formulieren",
   "Mit dem Fachbereich bestätigen lassen",
   "Regeln mit Anforderungen und Tests verknüpfen"
  ],
  "re": [
   "Eine Regel pro Zeile",
   "Jede Regel hat eine verantwortliche Stelle",
   "Regeln sind prüfbar, mit konkreten Werten"
  ],
  "bsp": {
   "t": "Regel BR-07",
   "x": "Wenn eine Tour länger als 10 Stunden dauert, dann muss ein zweiter Fahrer eingeplant werden."
  },
  "zw": "Geschäftsregeln halten fest, was in der Organisation gilt: Vorgaben, Bedingungen und Berechnungen wie «Rabatt ab 10 Stück». Sie werden getrennt von Prozessen und Funktionen gepflegt, damit sie sich ändern lassen, ohne das System neu zu entwerfen.",
  "wa": [
   "Bei regelreichen Bereichen wie Versicherung, Bank oder Verwaltung",
   "Wenn dieselbe Regel an mehreren Stellen gilt",
   "Wenn Regeln sich häufig ändern"
  ],
  "wn": [
   "Bei wenigen, stabilen Regeln genügen Akzeptanzkriterien",
   "Wenn Regeln nur als Gewohnheit existieren und niemand sie begründen kann"
  ],
  "vb": [
   "Regelquellen identifizieren: Gesetz, Verträge, Fachbereich",
   "Verantwortliche je Regel klären",
   "Vorlage: Nummer, Regeltext, Quelle, Gültigkeit, Verantwortliche",
   "Glossar bereitlegen"
  ],
  "nr": "S-08",
  "kt": "Was in der Organisation gilt, getrennt von Prozess und Funktion gepflegt.",
  "ks": [
   "Regelquellen finden",
   "Regeln atomar formulieren",
   "Eigner und Quelle nennen",
   "Auf Widersprüche prüfen",
   "In Tests übernehmen"
  ],
  "gw": [
   "Regelreiche Bereiche wie Bank, Versicherung",
   "Eine Regel gilt an mehreren Stellen",
   "Regeln ändern sich häufig"
  ],
  "rg": [
   "Eine Regel pro Zeile",
   "Jede Regel hat eine verantwortliche Stelle",
   "Regeln sind prüfbar, mit konkreten Werten"
  ],
  "vk": [
   "Regelquellen und Verantwortliche klären",
   "Vorlage: Nummer, Text, Quelle, Gültigkeit"
  ],
  "bn": "Wenige stabile Regeln: Kriterien genügen",
  "pr": "Formulieren Sie Regeln atomar und im Aktiv («Eine Bestellung über 500 Franken braucht eine Freigabe»). Unterscheiden Sie Bedingungen, Berechnungen und Ableitungen. Nennen Sie je Regel die Quelle und den Eigner. Entscheidungstabellen helfen bei Kombinationen. Prüfen Sie Regeln auf Widersprüche.",
  "em": "Vorher liefern Dokumentenanalyse und Glossar die Grundlage. Danach werden Regeln in Akzeptanzkriterien umgesetzt und ins Pflichtenheft übernommen. Das Domänenmodell und BPMN zeigen, wo Regeln im Ablauf greifen.",
  "qu": [
   "Ross, R.: Business Rule Concepts (Business Rule Solutions, 2013)",
   "Business Rules Group: The Business Rules Manifesto (2003)",
   "IIBA: BABOK Guide, Version 3 (2015), Technik «Geschäftsregelanalyse»"
  ],
  "io": {
   "lf": [
    "Fachbereich und Regeleigner",
    "Recht und Compliance"
   ],
   "in": [
    {
     "t": "Gesetze und Vorgaben",
     "to": "dokumentenanalyse",
     "v": "geliefert von"
    },
    {
     "t": "Fachbegriffe",
     "to": "glossar",
     "v": "geliefert von"
    },
    {
     "t": "Begriffsmodell",
     "to": "domaenenmodell",
     "v": "ergänzt durch"
    }
   ],
   "out": [
    {
     "t": "Regelkatalog mit Quelle und Eigner"
    },
    {
     "t": "Testbare Beispiele",
     "to": "akzeptanzkriterien",
     "v": "abgeleitet in"
    },
    {
     "t": "Verbindliche Vorgaben",
     "to": "pflichtenheft",
     "v": "übernommen in"
    }
   ],
   "ko": [
    "Entwicklung",
    "Test",
    "Fachbereich"
   ]
  },
  "li": [
   [
    "dokumentenanalyse",
    "vorher",
    "Regeln stehen oft in Dokumenten."
   ],
   [
    "domaenenmodell",
    "ergaenzt",
    "Regeln verbinden die Begriffe des Modells."
   ],
   [
    "glossar",
    "ergaenzt",
    "Regeln stützen sich auf Begriffe."
   ],
   [
    "akzeptanzkriterien",
    "danach",
    "Regeln werden zu testbaren Kriterien."
   ],
   [
    "pflichtenheft",
    "danach",
    "Regeln stehen im Pflichtenheft."
   ],
   [
    "bpmn",
    "ergaenzt",
    "Gateways im Prozess folgen den Regeln."
   ]
  ],
  "tools": [
   "Confluence",
   "Excel"
  ],
  "s": "entwurf"
 },
 {
  "id": "story-splitting",
  "n": "Story Splitting",
  "c": "dok",
  "f": "methode",
  "m": "agil",
  "ph": "spezifizieren",
  "t": "Technik",
  "kz": "Story Splitting",
  "k": "Teilt zu grosse User Stories in kleinere auf, die jeweils für sich Nutzen bringen und in einen Sprint passen.",
  "aufwand": "10 bis 20 Min. pro Story",
  "ab": [
   "Zu grosse Story erkennen (z. B. mehr als die Hälfte eines Sprints)",
   "Möglichen Schnitt wählen (Ablauf, Regel, Daten, Rolle)",
   "Jede Teilstory so formulieren, dass sie einzeln Nutzen bringt",
   "Teilstories prüfen (unabhängig, testbar, schätzbar)",
   "Neu schätzen und priorisieren"
  ],
  "re": [
   "Vertikal schneiden (durch alle Schichten), nicht nach Technik",
   "Jede Teilstory ist für sich nutzbar",
   "Den einfachsten durchgängigen Weg zuerst"
  ],
  "bsp": {
   "t": "Tour verwalten (21 Punkte)",
   "x": "Geteilt in: Tour anlegen, Tour ändern, Tour freigeben, Tour stornieren. Jede Teilstory ist einzeln ausführbar."
  },
  "zw": "Story Splitting teilt eine zu grosse Story in kleinere, die je für sich Nutzen liefern. Kleine Stories lassen sich besser schätzen, in einem Sprint abschliessen und früher testen. Entscheidend ist, vertikal zu schneiden, nicht nach technischen Schichten.",
  "wa": [
   "Wenn eine Story nicht in einen Sprint passt",
   "Wenn das Team sie nicht schätzen kann",
   "Wenn Schätzungen weit auseinanderliegen"
  ],
  "wn": [
   "Wenn die Story schon klein und klar ist",
   "Wenn die Teile ohne die anderen keinen Nutzen hätten (dann ist der Schnitt falsch)"
  ],
  "vb": [
   "Story und ihre Akzeptanzkriterien im Blick haben",
   "Muster zum Teilen bereithalten (Workflow-Schritte, Regeln, Daten, Varianten)",
   "Team mit Entwicklung und Test beteiligen",
   "Platz im Refinement einplanen"
  ],
  "nr": "S-09",
  "kt": "Eine grosse Story so teilen, dass jeder Teil Nutzen liefert. Senkrecht schneiden.",
  "ks": [
   "Kleinsten nützlichen Teil suchen",
   "Nach Ablauf, Regel, Daten teilen",
   "Nie nach Technikschichten",
   "Teile gegen INVEST prüfen",
   "Neu schätzen"
  ],
  "gw": [
   "Die Story passt nicht in einen Sprint",
   "Das Team kann sie nicht schätzen",
   "Schätzungen liegen weit auseinander"
  ],
  "rg": [
   "Vertikal schneiden (durch alle Schichten), nicht nach Technik",
   "Jede Teilstory ist für sich nutzbar",
   "Den einfachsten durchgängigen Weg zuerst"
  ],
  "vk": [
   "Story und Kriterien im Blick",
   "Teilungsmuster bereithalten"
  ],
  "bn": "Die Story ist schon klein und klar",
  "pr": "Fragen Sie: Welcher kleinste Teil bringt schon Nutzen? Bewährte Schnitte: nach Workflow-Schritten, nach Geschäftsregeln, nach Datenvarianten, nach einfachem und kompliziertem Fall, nach Nutzerrolle. Schneiden Sie nie nach Schichten («Datenbank», «Oberfläche»). Neue Teile prüfen Sie wieder gegen INVEST.",
  "em": "Vorher steht die grosse Story im Backlog. Danach schätzen Sie die Teile mit Planning Poker. Die Story Map zeigt die Reihenfolge der Teile, und die Definition of Ready prüft, ob sie bereit sind.",
  "qu": [
   "Lawrence, R., Green, P.: The Humanizing Work Guide to Splitting User Stories (humanizingwork.com)",
   "Cohn, M.: User Stories Applied (Addison-Wesley, 2004)",
   "Wake, B.: Twenty Ways to Split Stories (2005), xp123.com"
  ],
  "io": {
   "lf": [
    "Product Owner",
    "Entwicklungsteam"
   ],
   "in": [
    {
     "t": "Zu grosse Story",
     "to": "user-stories",
     "v": "geliefert von"
    },
    {
     "t": "Akzeptanzkriterien",
     "to": "akzeptanzkriterien",
     "v": "ergänzt durch"
    },
    {
     "t": "Rückfragen aus dem Refinement",
     "to": "refinement",
     "v": "angestossen in"
    }
   ],
   "out": [
    {
     "t": "Mehrere kleine Stories"
    },
    {
     "t": "Schätzbare Teile",
     "to": "planning-poker",
     "v": "bewertet in"
    },
    {
     "t": "Reihenfolge der Teile",
     "to": "story-mapping",
     "v": "angeordnet in"
    }
   ],
   "ko": [
    "Entwicklungsteam",
    "Product Owner"
   ]
  },
  "li": [
   [
    "user-stories",
    "vorher",
    "Zu grosse Stories werden geteilt."
   ],
   [
    "refinement",
    "ergaenzt",
    "Das Teilen geschieht im Refinement."
   ],
   [
    "story-mapping",
    "ergaenzt",
    "Schnitte entlang der Nutzerreise."
   ],
   [
    "dor-dod",
    "ergaenzt",
    "Ready verlangt kleine Stories."
   ],
   [
    "planning-poker",
    "danach",
    "Danach neu schätzen."
   ]
  ],
  "tools": [
   "Jira",
   "Miro"
  ],
  "s": "entwurf"
 },
 {
  "id": "aktivitaetsdiagramm",
  "n": "Aktivitätsdiagramm (UML)",
  "c": "mod",
  "f": "modell",
  "m": "beide",
  "ph": "spezifizieren",
  "t": "Modell",
  "kz": "Aktivitätsdiagramm",
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
  "zw": "Das Aktivitätsdiagramm der UML zeigt einen Ablauf als Folge von Aktionen mit Verzweigungen, Parallelität und Zuständigkeiten. Es macht Prozesse und Logik sichtbar und deckt Lücken wie fehlende Alternativen und tote Enden auf.",
  "wa": [
   "Zum Verstehen und Klären eines Ablaufs",
   "Um Use Cases oder Stories mit Logik zu veranschaulichen",
   "Bei Entscheidungen und parallelen Schritten"
  ],
  "wn": [
   "Wenn der Prozess über Organisationen reicht und Zuständigkeiten im Vordergrund stehen: dann BPMN",
   "Wenn niemand das Diagramm lesen kann, hilft eine Liste besser"
  ],
  "vb": [
   "Ablauf und Ziel abgrenzen",
   "Beobachtungsnotizen oder Interviewergebnisse bereitlegen",
   "Notation klären, die alle verstehen",
   "Werkzeug wählen: Whiteboard, draw.io oder PlantUML"
  ],
  "nr": "S-10",
  "kt": "Ein Ablauf mit Aktionen, Verzweigungen und Zuständigkeiten (UML).",
  "ks": [
   "Start und Ende festlegen",
   "Aktionen mit Verb und Objekt",
   "Verzweigungen mit Bedingung",
   "Schwimmbahnen für Rollen",
   "Mit Beteiligten prüfen"
  ],
  "gw": [
   "Ablauf verstehen und klären",
   "Entscheidungen und parallele Schritte",
   "Um Use Cases mit Logik zu zeigen"
  ],
  "rg": [
   "Ein Startknoten, mindestens ein Endknoten",
   "Jede Raute hat Bedingungen an den ausgehenden Kanten",
   "Aktionen mit Verb benennen"
  ],
  "vk": [
   "Ablauf und Ziel abgrenzen",
   "Notation klären, die alle kennen"
  ],
  "bn": "Zuständigkeiten im Vordergrund: BPMN",
  "pr": "Ein Start, mindestens ein Ende. Jede Verzweigung hat Bedingungen an allen ausgehenden Pfeilen. Benennen Sie Aktionen mit Verb und Objekt («Antrag prüfen»). Halten Sie eine Seite lesbar, grössere Abläufe zerlegen Sie. Mit Schwimmbahnen zeigen Sie, wer was tut.",
  "em": "Vorher liefern Beobachtung oder Interviews den Ablauf. Danach beschreiben Use Cases Details, und das Zustandsdiagramm hilft, wenn Objekte ihren Zustand wechseln. Bei organisationsübergreifenden Prozessen wechseln Sie zu BPMN.",
  "qu": [
   "OMG: Unified Modeling Language (UML), Version 2.5.1 (2017)",
   "Fowler, M.: UML Distilled, 3. Auflage (Addison-Wesley, 2003)",
   "Rupp, C.: Requirements-Engineering und -Management (Hanser)"
  ],
  "io": {
   "lf": [
    "Fachanwender",
    "Business Analyst"
   ],
   "in": [
    {
     "t": "Ist-Ablauf",
     "to": "beobachtung",
     "v": "geliefert von"
    },
    {
     "t": "Ereignisse",
     "to": "event-storming",
     "v": "geliefert von"
    },
    {
     "t": "Szenarien",
     "to": "use-cases",
     "v": "ergänzt durch"
    }
   ],
   "out": [
    {
     "t": "Diagramm des Ablaufs"
    },
    {
     "t": "Details zum Szenario",
     "to": "use-cases",
     "v": "verfeinert in"
    },
    {
     "t": "Prozesssicht",
     "to": "bpmn",
     "v": "überführt in"
    }
   ],
   "ko": [
    "Entwicklung",
    "Test",
    "Fachbereich"
   ]
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
  "f": "modell",
  "m": "klassisch",
  "ph": "spezifizieren",
  "t": "Modell",
  "kz": "Use-Case-Diagr.",
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
  "zw": "Das Use-Case-Diagramm zeigt auf einer Seite, welche Akteure welche Funktionen eines Systems nutzen. Es gibt einen schnellen Überblick über den Funktionsumfang und dient als Inhaltsverzeichnis für die Use-Case-Beschreibungen.",
  "wa": [
   "Zur Klärung des Funktionsumfangs",
   "Als Einstieg in die Use-Case-Beschreibung",
   "In Gesprächen mit Fachleuten, die einen Überblick brauchen"
  ],
  "wn": [
   "Wenn Details gefragt sind: dort sind Beschreibungen besser",
   "Bei sehr grossen Systemen ohne Gruppierung wird es unlesbar"
  ],
  "vb": [
   "Akteure aus der Stakeholder-Analyse und dem Kontext sammeln",
   "Funktionen als Ziele der Akteure formulieren",
   "Systemgrenze festlegen",
   "Zeichenwerkzeug bereitstellen"
  ],
  "nr": "S-11",
  "kt": "Welche Akteure nutzen welche Funktionen? Überblick auf einer Seite.",
  "ks": [
   "Systemgrenze zeichnen",
   "Akteure ausserhalb ergänzen",
   "Use Cases als Ziele benennen",
   "Verbindungen ziehen",
   "Beschreibungen ankündigen"
  ],
  "gw": [
   "Funktionsumfang klären",
   "Überblick für Fachleute",
   "Als Einstieg in Use-Case-Beschreibungen"
  ],
  "rg": [
   "Akteure stehen ausserhalb der Systemgrenze",
   "Use Cases benennen mit Verb + Objekt",
   "Auf einer Seite lesbar bleiben"
  ],
  "vk": [
   "Akteure und Ziele sammeln",
   "Systemgrenze festlegen"
  ],
  "bn": "Details gefragt: besser Beschreibungen",
  "pr": "Benennen Sie Use Cases mit Verb und Objekt. Zeichnen Sie nur, was Gegenstand des Systems ist, nicht Abläufe. Zu viele «include» und «extend» verwirren, nutzen Sie sie sparsam. Das Diagramm ist ein Überblick, die Substanz liegt in den Beschreibungen.",
  "em": "Vorher helfen Stakeholder-Analyse und Kontextdiagramm. Danach beschreiben Sie jeden Use Case im Detail.",
  "qu": [
   "OMG: Unified Modeling Language (UML), Version 2.5.1 (2017)",
   "Cockburn, A.: Writing Effective Use Cases (Addison-Wesley, 2001)",
   "Fowler, M.: UML Distilled, 3. Auflage (2003)"
  ],
  "io": {
   "lf": [
    "Fachbereich",
    "Business Analyst"
   ],
   "in": [
    {
     "t": "Akteure",
     "to": "stakeholder",
     "v": "geliefert von"
    },
    {
     "t": "Systemgrenze",
     "to": "kontextdiagramm",
     "v": "geliefert von"
    }
   ],
   "out": [
    {
     "t": "Diagramm mit Akteuren und Use Cases"
    },
    {
     "t": "Liste der zu beschreibenden Funktionen",
     "to": "use-cases",
     "v": "ausgearbeitet in"
    }
   ],
   "ko": [
    "Auftraggeber",
    "Entwicklung",
    "Test"
   ]
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
  "f": "modell",
  "m": "klassisch",
  "ph": "spezifizieren",
  "t": "Modell",
  "kz": "BPMN",
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
  "zw": "BPMN ist die Standardnotation für Geschäftsprozesse. Sie zeigt Abläufe mit Ereignissen, Aufgaben, Entscheidungen und den beteiligten Rollen oder Organisationen. Sie eignet sich zur Dokumentation und Diskussion, auch zwischen Fachbereich und IT.",
  "wa": [
   "Bei Prozessen über mehrere Rollen oder Bereiche",
   "Bei Prozessverbesserung und Automatisierung",
   "Wenn eine Prozessengine eingesetzt wird"
  ],
  "wn": [
   "Bei kleinen, einfachen Abläufen: eine Liste genügt",
   "Wenn die Beteiligten die Notation nicht kennen und keine Zeit für Einführung ist"
  ],
  "vb": [
   "Prozessgrenzen und Ziel festlegen",
   "Beteiligte Rollen kennen",
   "Notation auf den Kern beschränken",
   "Werkzeug wählen, zum Beispiel Camunda Modeler oder draw.io"
  ],
  "nr": "S-12",
  "kt": "Standardnotation für Geschäftsprozesse mit Ereignissen, Aufgaben und Rollen.",
  "ks": [
   "Prozessgrenzen festlegen",
   "Rollen als Bahnen",
   "Ereignisse und Aufgaben setzen",
   "Entscheidungen ergänzen",
   "Mit Beteiligten prüfen"
  ],
  "gw": [
   "Prozesse über mehrere Rollen",
   "Verbessern oder automatisieren",
   "Wenn eine Prozessengine im Einsatz ist"
  ],
  "rg": [
   "Ein Prozess hat ein Start- und mindestens ein Endereignis",
   "Aufgaben mit Verb + Objekt benennen",
   "Gateways immer paarweise schliessen"
  ],
  "vk": [
   "Prozessgrenzen und Ziel festlegen",
   "Notation auf den Kern beschränken"
  ],
  "bn": "Kleiner Ablauf: eine Liste genügt",
  "pr": "Starten Sie auf hoher Ebene und verfeinern Sie nur das Wichtige. Benennen Sie Aufgaben mit Verb und Objekt und Ereignisse im Partizip («Antrag eingegangen»). Nutzen Sie wenige Symbole, das macht das Modell verständlich. Prüfen Sie jedes Modell im Gespräch mit den Beteiligten, nicht nur am Schreibtisch.",
  "em": "Vorher klären Kontextdiagramm und Workshop den Umfang. Danach leiten Sie aus den Aufgaben User Stories ab und klären Regeln in den Geschäftsregeln. Bei einfacheren Abläufen reicht ein Aktivitätsdiagramm.",
  "qu": [
   "OMG: Business Process Model and Notation (BPMN), Version 2.0 (2011)",
   "Freund, J., Rücker, B.: Praxishandbuch BPMN (Hanser)",
   "Silver, B.: BPMN Method and Style (Cody-Cassidy Press, 2011)"
  ],
  "io": {
   "lf": [
    "Prozessverantwortliche",
    "Fachbereich"
   ],
   "in": [
    {
     "t": "Systemgrenze",
     "to": "kontextdiagramm",
     "v": "geliefert von"
    },
    {
     "t": "Prozesswissen",
     "to": "workshop",
     "v": "erhoben in"
    },
    {
     "t": "Ablaufskizzen",
     "to": "aktivitaetsdiagramm",
     "v": "ergänzt durch"
    }
   ],
   "out": [
    {
     "t": "Prozessmodell"
    },
    {
     "t": "Aufgaben als Stories",
     "to": "user-stories",
     "v": "formuliert als"
    },
    {
     "t": "Entscheidungspunkte",
     "to": "geschaeftsregeln",
     "v": "geklärt in"
    }
   ],
   "ko": [
    "Prozessverantwortliche",
    "Entwicklung",
    "Fachbereich"
   ]
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
  "s": "entwurf",
  "vis": "bpmn"
 },
 {
  "id": "impact-mapping",
  "n": "Impact Mapping",
  "c": "mod",
  "f": "modell",
  "m": "agil",
  "ph": "verstehen",
  "t": "Modell",
  "kz": "Impact Mapping",
  "k": "Verbindet ein Ziel über Akteure und deren gewünschtes Verhalten mit den Lieferobjekten, die dazu beitragen. Zeigt, warum etwas gebaut wird.",
  "aufwand": "2 bis 3 Stunden",
  "ab": [
   "Ziel messbar formulieren (Warum?)",
   "Akteure sammeln, die das Ziel beeinflussen (Wer?)",
   "Gewünschte Verhaltensänderung je Akteur beschreiben (Wie?)",
   "Mögliche Lieferobjekte sammeln (Was?)",
   "Lieferobjekte nach Wirkung wählen und als Hypothese testen"
  ],
  "re": [
   "Das Ziel steht in der Mitte und ist messbar",
   "Jedes Lieferobjekt führt über einen Akteur zum Ziel",
   "Lieferobjekte ohne Wirkungskette entfallen"
  ],
  "bsp": {
   "t": "Ziel: Leerfahrten halbieren",
   "x": "Akteur Disponentin, Verhalten: plant Touren mit Rückfracht. Lieferobjekt: Vorschlag für Rückfracht."
  },
  "zw": "Impact Mapping ist eine Mind-Map-Technik, die vier Fragen beantwortet: Warum (Ziel), Wer (Akteure), Wie (Wirkung auf das Verhalten) und Was (Lieferungen). Sie verbindet Ziele mit Lieferungen und verhindert, dass Funktionen ohne erkennbaren Nutzen gebaut werden.",
  "wa": [
   "Wenn eine Liste von Wünschen ohne Ziel vorliegt",
   "Zum Start einer agilen Produktentwicklung",
   "Wenn Stakeholder verschiedene Ziele verfolgen"
  ],
  "wn": [
   "Wenn das Ziel nicht messbar sein kann oder gar nicht diskutiert werden darf",
   "Bei kleinen, klar umrissenen Aufträgen"
  ],
  "vb": [
   "Messbares Ziel als Ausgangsfrage vorbereiten",
   "Grosse Wand oder digitales Whiteboard",
   "Haftnotizen in vier Farben: Ziel, Akteure, Wirkungen, Lieferungen",
   "Fachliche Entscheider und das Team einladen",
   "Zwei bis drei Stunden einplanen"
  ],
  "nr": "V-06",
  "kt": "Ziel, Akteure, Wirkungen, Lieferungen: Funktionen mit Nutzen verbinden.",
  "ks": [
   "Messbares Ziel in die Mitte",
   "Wer beeinflusst es?",
   "Wie ändert sich ihr Verhalten?",
   "Was liefern wir dafür?",
   "Wirksamste Pfade wählen"
  ],
  "gw": [
   "Wunschliste ohne erkennbares Ziel",
   "Start einer agilen Entwicklung",
   "Wenn Stakeholder verschiedene Ziele verfolgen"
  ],
  "rg": [
   "Das Ziel steht in der Mitte und ist messbar",
   "Jedes Lieferobjekt führt über einen Akteur zum Ziel",
   "Lieferobjekte ohne Wirkungskette entfallen"
  ],
  "vk": [
   "Messbares Ziel als Startfrage",
   "Wand und Zettel in vier Farben"
  ],
  "bn": "Das Ziel darf nicht diskutiert werden",
  "pr": "Gehen Sie von der Mitte nach aussen: Ziel, dann Akteure, dann Wirkungen auf deren Verhalten, zuletzt Lieferungen. Resultate sollten messbar sein («Anteil Neukunden steigt von 5 auf 8 Prozent»). Prüfen Sie jede Lieferung: Welche Wirkung erzeugt sie? Zweige ohne Antwort streichen Sie. Wählen Sie die erfolgversprechendsten Pfade als nächste Schritte.",
  "em": "Vorher sollten Vision oder Geschäftsmodell vorliegen. Danach entwickeln Sie aus den Lieferungen User Stories oder legen sie auf die Story Map.",
  "qu": [
   "Adzic, G.: Impact Mapping (Provoking Thoughts, 2012)",
   "impactmapping.org: Website zur Methode mit Vorlagen und Beispielen"
  ],
  "io": {
   "lf": [
    "Auftraggeber und Fachbereiche",
    "Product Owner"
   ],
   "in": [
    {
     "t": "Produktvision und Ziel",
     "to": "produktvision",
     "v": "geliefert von"
    },
    {
     "t": "Geschäftsziele",
     "to": "business-model-canvas",
     "v": "geliefert von"
    },
    {
     "t": "Workshop mit Beteiligten",
     "to": "workshop",
     "v": "durchgeführt in"
    }
   ],
   "out": [
    {
     "t": "Impact Map von Ziel bis Lieferung"
    },
    {
     "t": "Ausgewählte Lieferungen",
     "to": "user-stories",
     "v": "formuliert als"
    },
    {
     "t": "Messgrössen für den Erfolg"
    }
   ],
   "ko": [
    "Product Owner",
    "Entwicklungsteam",
    "Auftraggeber"
   ]
  },
  "li": [
   [
    "produktvision",
    "vorher",
    "Die Vision liefert das Ziel."
   ],
   [
    "workshop",
    "vorher",
    "Im Workshop entwickeln."
   ],
   [
    "stakeholder",
    "ergaenzt",
    "Akteure der Map sind Stakeholder."
   ],
   [
    "user-stories",
    "danach",
    "Lieferobjekte werden zu User Stories."
   ],
   [
    "story-mapping",
    "alternative",
    "Story Map ordnet Stories, Impact Map begründet sie."
   ]
  ],
  "tools": [
   "Miro",
   "draw.io"
  ],
  "s": "entwurf",
  "vis": "impact"
 },
 {
  "id": "kontextdiagramm",
  "n": "Kontextdiagramm",
  "c": "mod",
  "f": "modell",
  "m": "beide",
  "ph": "verstehen",
  "t": "Modell",
  "kz": "Kontextdiagramm",
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
  "zw": "Das Kontextdiagramm zeigt das System als einen Kasten in der Mitte und alle Akteure, Fremdsysteme und Datenflüsse, die es umgeben. Es legt die Systemgrenze fest und beantwortet, was dazugehört und was nicht.",
  "wa": [
   "Zu Beginn, um Umfang und Schnittstellen zu klären",
   "Wenn der Projektumfang diskutiert wird",
   "Bei Vorhaben mit vielen Nachbarsystemen"
  ],
  "wn": [
   "Wenn Details des Systems gesucht werden: dort sind Prozess- und Datenmodelle besser",
   "Bei reinen Prozessänderungen ohne Systemgrenze"
  ],
  "vb": [
   "Grobe Beschreibung des Vorhabens bereitlegen",
   "Liste bekannter Akteure und Nachbarsysteme",
   "Whiteboard oder Zeichenwerkzeug",
   "Zwei bis vier Beteiligte aus Fachlichkeit und Technik",
   "45 bis 90 Minuten einplanen"
  ],
  "nr": "V-07",
  "kt": "Das System als ein Kasten, umgeben von Akteuren und Fremdsystemen.",
  "ks": [
   "System als einen Kasten zeichnen",
   "Akteure und Systeme ergänzen",
   "Datenflüsse benennen",
   "Grenze mit allen klären",
   "In die Spezifikation"
  ],
  "gw": [
   "Zu Beginn: Umfang und Schnittstellen",
   "Viele Nachbarsysteme",
   "Wenn der Umfang diskutiert wird"
  ],
  "rg": [
   "Keine inneren Details des Systems",
   "Jeder Pfeil hat Richtung und Inhalt",
   "Alle Schnittstellen sind sichtbar"
  ],
  "vk": [
   "Vorhaben grob beschreiben",
   "Akteure und Nachbarsysteme auflisten"
  ],
  "bn": "Für Details: Prozess- und Datenmodelle",
  "pr": "Das System ist genau ein Kasten, Details bleiben drinnen. Benennen Sie jeden Pfeil mit dem, was fliesst (Auftrag, Rechnung, Statusmeldung). Alles, was Sie nicht kontrollieren, liegt ausserhalb. Wenn die Grenze strittig ist, zeichnen Sie sie zweimal und diskutieren Sie die Differenz. Das ist oft der klärendste Teil.",
  "em": "Vorher sollten die Stakeholder bekannt sein. Danach folgt das Use-Case-Diagramm für die Funktionen aus Sicht der Akteure und eine BPMN-Sicht auf die Prozesse. Das Diagramm gehört später ins Pflichtenheft.",
  "qu": [
   "Pohl, K., Rupp, C.: Basiswissen Requirements Engineering (dpunkt.verlag)",
   "IIBA: BABOK Guide, Version 3 (2015), Technik «Scope Modelling»",
   "DeMarco, T.: Structured Analysis and System Specification (Yourdon Press, 1978)"
  ],
  "io": {
   "lf": [
    "Fachbereich und Architektur",
    "Betrieb der Nachbarsysteme"
   ],
   "in": [
    {
     "t": "Beteiligte und Rollen",
     "to": "stakeholder",
     "v": "geliefert von"
    },
    {
     "t": "Systemlandschaft und Schnittstellenliste"
    },
    {
     "t": "Projektauftrag"
    }
   ],
   "out": [
    {
     "t": "Kontextdiagramm mit benannten Datenflüssen"
    },
    {
     "t": "Akteure für Funktionssicht",
     "to": "use-case-diagramm",
     "v": "verfeinert in"
    },
    {
     "t": "Systemgrenze für Prozesse",
     "to": "bpmn",
     "v": "genutzt in"
    },
    {
     "t": "Abschnitt zum Systemkontext",
     "to": "pflichtenheft",
     "v": "übernommen in"
    }
   ],
   "ko": [
    "Requirements Engineer",
    "Software-Architektur",
    "Auftraggeber"
   ]
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
  "id": "business-model-canvas",
  "n": "Business Model Canvas",
  "c": "mod",
  "f": "modell",
  "m": "beide",
  "ph": "verstehen",
  "t": "Modell",
  "kz": "Business Canvas",
  "k": "Beschreibt ein Geschäftsmodell auf einer Seite mit neun Bausteinen, von Kundensegmenten über Nutzenversprechen bis zu Kosten und Erlösen.",
  "aufwand": "2 bis 3 Stunden",
  "ab": [
   "Kundensegmente und Nutzenversprechen klären",
   "Kanäle und Kundenbeziehungen festhalten",
   "Schlüsselressourcen, -aktivitäten und -partner ergänzen",
   "Kostenstruktur und Einnahmequellen ergänzen",
   "Auf Widersprüche prüfen und Hypothesen markieren"
  ],
  "re": [
   "Bei Kundensegment und Nutzenversprechen beginnen",
   "Jeder Baustein ist kurz und konkret",
   "Unsichere Annahmen sichtbar machen und prüfen"
  ],
  "bsp": {
   "t": "Tourenplanung als Dienst",
   "x": "Kundensegment: Transportfirmen mit 20 bis 200 Fahrzeugen. Nutzen: weniger Leerfahrten. Erlös: monatliche Lizenz pro Fahrzeug."
  },
  "zw": "Das Business Model Canvas beschreibt auf einer Seite in neun Bausteinen, wie eine Organisation Wert schafft, liefert und einnimmt: Kundensegmente, Wertangebot, Kanäle, Kundenbeziehungen, Einnahmen, Ressourcen, Aktivitäten, Partner und Kosten. Es liefert Kontext, bevor Details diskutiert werden.",
  "wa": [
   "Wenn der geschäftliche Zusammenhang eines Vorhabens unklar ist",
   "Bei neuen Produkten oder Geschäftsfeldern",
   "Um ein gemeinsames Bild zwischen Fachbereichen und Technik zu schaffen"
  ],
  "wn": [
   "Bei rein internen Systemen ohne eigene Erlösmodelle",
   "Wenn Sie Details der Umsetzung suchen"
  ],
  "vb": [
   "Poster oder digitales Canvas bereitstellen",
   "Haftnotizen in mehreren Farben, je eine für Ist und Ziel",
   "Teilnehmende mit Geschäfts- und Fachsicht einladen",
   "90 Minuten bis 2 Stunden einplanen"
  ],
  "nr": "V-08",
  "kt": "Neun Bausteine: wie eine Organisation Wert schafft, liefert und einnimmt.",
  "ks": [
   "Kunden und Wertangebot zuerst",
   "Kanäle und Beziehungen",
   "Einnahmen und Kosten",
   "Ressourcen, Aktivitäten, Partner",
   "Ist und Ziel vergleichen"
  ],
  "gw": [
   "Geschäftlicher Zusammenhang ist unklar",
   "Neue Produkte oder Geschäftsfelder",
   "Gemeinsames Bild für Fachbereich und Technik"
  ],
  "rg": [
   "Bei Kundensegment und Nutzenversprechen beginnen",
   "Jeder Baustein ist kurz und konkret",
   "Unsichere Annahmen sichtbar machen und prüfen"
  ],
  "vk": [
   "Canvas und Zettel bereitstellen",
   "Geschäfts- und Fachsicht einladen"
  ],
  "bn": "Interne Systeme ohne Erlösmodell",
  "pr": "Starten Sie rechts mit den Kunden und dem Wertangebot, erst dann die linke Seite. Nutzen Sie je Baustein wenige knappe Stichworte. Vergleichen Sie Ist und Ziel mit zwei Farben. Mit der Frage «Was wäre, wenn sich dieser Baustein ändert?» entstehen die interessantesten Diskussionen.",
  "em": "Vorher klären Sie Beteiligte und, wenn nötig, die Lage mit einer SWOT-Analyse. Danach schärfen Sie die Produktvision und leiten im Impact Mapping Ziele ab.",
  "qu": [
   "Osterwalder, A., Pigneur, Y.: Business Model Generation (Wiley, 2010)",
   "IIBA: BABOK Guide, Version 3 (2015), Technik «Business Model Canvas»"
  ],
  "io": {
   "lf": [
    "Management und Geschäftsleitung",
    "Vertrieb und Marketing",
    "Controlling"
   ],
   "in": [
    {
     "t": "Beteiligte aus dem Geschäft",
     "to": "stakeholder",
     "v": "geliefert von"
    },
    {
     "t": "Lagebild",
     "to": "swot",
     "v": "ergänzt durch"
    },
    {
     "t": "Workshopformat",
     "to": "workshop",
     "v": "durchgeführt in"
    }
   ],
   "out": [
    {
     "t": "Ausgefülltes Canvas für Ist und Ziel"
    },
    {
     "t": "Wertangebot und Zielgruppen",
     "to": "produktvision",
     "v": "genutzt in"
    },
    {
     "t": "Geschäftsziele",
     "to": "impact-mapping",
     "v": "vertieft in"
    }
   ],
   "ko": [
    "Product Owner",
    "Management",
    "Requirements Engineer"
   ]
  },
  "li": [
   [
    "swot",
    "ergaenzt",
    "Zeigt Stärken und Risiken des Modells."
   ],
   [
    "stakeholder",
    "ergaenzt",
    "Kunden und Partner sind Stakeholder."
   ],
   [
    "workshop",
    "vorher",
    "Im Workshop gemeinsam füllen."
   ],
   [
    "produktvision",
    "danach",
    "Das Modell schärft die Vision."
   ],
   [
    "impact-mapping",
    "danach",
    "Ziele des Modells in eine Impact Map überführen."
   ]
  ],
  "tools": [
   "Miro",
   "Confluence"
  ],
  "s": "entwurf",
  "vis": "bmc"
 },
 {
  "id": "zustandsdiagramm",
  "n": "Zustandsdiagramm",
  "c": "mod",
  "f": "modell",
  "m": "klassisch",
  "ph": "spezifizieren",
  "t": "Modell",
  "kz": "Zustandsdiagramm",
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
  "zw": "Das Zustandsdiagramm zeigt, welche Zustände ein Objekt wie Bestellung oder Antrag annehmen kann und welche Ereignisse zwischen ihnen wechseln. Es macht zulässige und unzulässige Übergänge sichtbar und klärt den Lebenszyklus.",
  "wa": [
   "Bei Objekten mit einem Lebenszyklus (Antrag, Bestellung, Vertrag)",
   "Wenn unklar ist, was in welchem Zustand erlaubt ist",
   "Zur Vorbereitung von Tests der Übergänge"
  ],
  "wn": [
   "Bei Objekten ohne relevante Zustände",
   "Wenn es um Abläufe mit mehreren Akteuren geht: dann Aktivitätsdiagramm oder BPMN"
  ],
  "vb": [
   "Das Objekt und seine Lebensphasen benennen",
   "Ereignisse sammeln, die Zustände ändern",
   "Fachexperten, die den Lebenszyklus kennen",
   "Whiteboard oder Zeichenwerkzeug"
  ],
  "nr": "S-13",
  "kt": "Zustände eines Objekts und die Ereignisse, die sie wechseln.",
  "ks": [
   "Objekt und Lebensphasen nennen",
   "Zustände benennen",
   "Übergänge mit Ereignis",
   "Sackgassen prüfen",
   "Tests je Übergang ableiten"
  ],
  "gw": [
   "Objekt mit Lebenszyklus (Antrag, Vertrag)",
   "Unklar, was in welchem Zustand gilt",
   "Zur Vorbereitung von Übergangstests"
  ],
  "rg": [
   "Zustände sind Adjektive oder Partizipien (offen, geprüft)",
   "Jeder Übergang hat ein auslösendes Ereignis",
   "Keine toten Zustände"
  ],
  "vk": [
   "Objekt und Lebensphasen benennen",
   "Ereignisse der Übergänge sammeln"
  ],
  "bn": "Objekt hat keine relevanten Zustände",
  "pr": "Zustände sind Substantive oder Adjektive («offen», «geprüft»), Übergänge benennen Sie mit Ereignis und Bedingung. Prüfen Sie: Gibt es Zustände ohne Ausgang? Sind Endzustände erreichbar? Gibt es unzulässige Übergänge? Gerade diese Fragen decken Fachlücken auf.",
  "em": "Vorher helfen Aktivitätsdiagramm und Use Cases, um Ereignisse zu finden. Danach leiten Sie Akzeptanzkriterien für jeden Übergang ab.",
  "qu": [
   "Harel, D.: Statecharts: A Visual Formalism for Complex Systems (1987)",
   "OMG: Unified Modeling Language (UML), Version 2.5.1 (2017)",
   "Fowler, M.: UML Distilled, 3. Auflage (2003)"
  ],
  "io": {
   "lf": [
    "Fachbereich",
    "Business Analyst"
   ],
   "in": [
    {
     "t": "Abläufe",
     "to": "aktivitaetsdiagramm",
     "v": "geliefert von"
    },
    {
     "t": "Szenarien",
     "to": "use-cases",
     "v": "geliefert von"
    }
   ],
   "out": [
    {
     "t": "Zustandsdiagramm"
    },
    {
     "t": "Testbare Übergänge",
     "to": "akzeptanzkriterien",
     "v": "abgeleitet in"
    }
   ],
   "ko": [
    "Entwicklung",
    "Test",
    "Fachbereich"
   ]
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
  "s": "entwurf",
  "vis": "zustand"
 },
 {
  "id": "domaenenmodell",
  "n": "Domänenmodell",
  "c": "mod",
  "f": "modell",
  "m": "beide",
  "ph": "spezifizieren",
  "t": "Modell",
  "kz": "Domänenmodell",
  "k": "Zeigt die wichtigen Fachbegriffe eines Bereichs als Klassen mit ihren Beziehungen, ohne technische Details. Schafft ein gemeinsames Bild der Fachwelt.",
  "aufwand": "1 bis 3 Stunden",
  "ab": [
   "Zentrale Begriffe aus Glossar und Workshops sammeln",
   "Begriffe als Kästchen zeichnen",
   "Beziehungen mit Kardinalität verbinden (1, n)",
   "Wichtige Attribute ergänzen",
   "Mit dem Fachbereich auf Stimmigkeit prüfen"
  ],
  "re": [
   "Fachbegriffe verwenden, keine Tabellen- oder Klassennamen der Technik",
   "Nur das Wichtige zeigen",
   "Jede Beziehung hat einen Namen und eine Kardinalität"
  ],
  "bsp": {
   "t": "Tourenplanung",
   "x": "Tour (1) enthält Stopps (n). Eine Tour hat genau ein Fahrzeug und einen Fahrer. Ein Stopp gehört zu einem Auftrag."
  },
  "zw": "Das Domänenmodell stellt die zentralen Begriffe eines Fachgebiets und ihre Beziehungen dar, zum Beispiel Kunde, Auftrag und Rechnung. Es ist ein fachliches Modell, kein Datenbankentwurf, und dient als gemeinsames Verständnis.",
  "wa": [
   "Bei komplexer Fachlichkeit",
   "Wenn Technik und Fachbereich sich über Begriffe uneinig sind",
   "Vor dem Entwurf der Systemstruktur"
  ],
  "wn": [
   "Wenn die Domäne einfach ist",
   "Wenn es nur um Abläufe geht",
   "Wenn daraus vorschnell eine Datenbank gebaut wird"
  ],
  "vb": [
   "Glossar und Begriffssammlung bereitlegen",
   "Fachleute und Architektur einladen",
   "Notation einfach halten (Klassen mit Beziehungen)",
   "Whiteboard oder Zeichenwerkzeug"
  ],
  "nr": "S-14",
  "kt": "Fachliche Begriffe und ihre Beziehungen, kein Datenbankentwurf.",
  "ks": [
   "Begriffe aus dem Glossar",
   "Als Klassen zeichnen",
   "Beziehungen mit Verb benennen",
   "Kardinalitäten ergänzen",
   "Fachleute lesen laut vor"
  ],
  "gw": [
   "Komplexe Fachlichkeit",
   "Technik und Fachbereich uneins über Begriffe",
   "Vor dem Entwurf der Systemstruktur"
  ],
  "rg": [
   "Begriffe der Fachsprache verwenden",
   "Nur Fachliches, keine Technik",
   "Wenige Klassen, klare Beziehungen"
  ],
  "vk": [
   "Glossar bereitlegen",
   "Fachleute und Architektur einladen"
  ],
  "bn": "Die Domäne ist einfach",
  "pr": "Zeichnen Sie nur fachlich relevante Begriffe und benennen Sie Beziehungen mit Verben («Kunde erteilt Auftrag»), mit Kardinalitäten. Verzichten Sie auf technische Felder. Lassen Sie Fachleute das Modell laut vorlesen: Wenn der Satz falsch klingt, stimmt das Modell nicht.",
  "em": "Vorher liefern Glossar und Event Storming die Begriffe. Danach ergänzen Geschäftsregeln und Zustandsdiagramm das Modell. Es gehört ins Pflichtenheft.",
  "qu": [
   "Evans, E.: Domain-Driven Design (Addison-Wesley, 2003)",
   "Larman, C.: Applying UML and Patterns, 3. Auflage (Prentice Hall, 2004)",
   "Fowler, M.: Analysis Patterns (Addison-Wesley, 1996)"
  ],
  "io": {
   "lf": [
    "Fachexperten",
    "Architektur"
   ],
   "in": [
    {
     "t": "Begriffe",
     "to": "glossar",
     "v": "geliefert von"
    },
    {
     "t": "Ereignisse und Aggregate",
     "to": "event-storming",
     "v": "geliefert von"
    },
    {
     "t": "Regeln",
     "to": "geschaeftsregeln",
     "v": "ergänzt durch"
    }
   ],
   "out": [
    {
     "t": "Klassendiagramm der Fachbegriffe"
    },
    {
     "t": "Lebenszyklen",
     "to": "zustandsdiagramm",
     "v": "verfeinert in"
    },
    {
     "t": "Beschreibung der Fachstruktur",
     "to": "pflichtenheft",
     "v": "übernommen in"
    }
   ],
   "ko": [
    "Architektur",
    "Entwicklung",
    "Fachbereich"
   ]
  },
  "li": [
   [
    "glossar",
    "ergaenzt",
    "Modell und Glossar nutzen dieselben Begriffe."
   ],
   [
    "event-storming",
    "vorher",
    "Ereignisse zeigen die Begriffe."
   ],
   [
    "geschaeftsregeln",
    "ergaenzt",
    "Regeln verbinden Begriffe."
   ],
   [
    "zustandsdiagramm",
    "ergaenzt",
    "Zustände der Objekte darstellen."
   ],
   [
    "pflichtenheft",
    "danach",
    "Als Kapitel Datenmodell einbinden."
   ]
  ],
  "tools": [
   "draw.io",
   "PlantUML",
   "Enterprise Architect"
  ],
  "s": "entwurf",
  "vis": "domaene"
 },
 {
  "id": "moscow",
  "n": "MoSCoW-Priorisierung",
  "c": "prio",
  "f": "methode",
  "m": "beide",
  "ph": "bewerten",
  "t": "Priorisierung",
  "kz": "MoSCoW",
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
  "zw": "MoSCoW teilt Anforderungen in vier Klassen: Must (muss), Should (soll), Could (kann), Won't (diesmal nicht). Die Technik schafft ohne Rechnen eine gemeinsame Sicht auf das Wichtige und macht sichtbar, was bewusst nicht Teil des Releases ist.",
  "wa": [
   "Bei fester Frist oder festem Budget und mehr Wünschen als Kapazität",
   "Im Workshop mit Beteiligten, die schnell entscheiden müssen",
   "Zur Umfangsabgrenzung eines Releases"
  ],
  "wn": [
   "Wenn fast alles als Must gilt: dann feiner mit WSJF",
   "Wenn Wert und Aufwand genau verglichen werden sollen",
   "Bei sehr vielen Einträgen ohne Vorsortierung"
  ],
  "vb": [
   "Anforderungsliste mit kurzer Beschreibung bereitlegen",
   "Zeitrahmen und Ziel des Releases klären",
   "Entscheider und Fachvertreter einladen",
   "Karten oder digitale Tafel mit vier Spalten",
   "1 bis 2 Stunden einplanen"
  ],
  "nr": "B-01",
  "kt": "Anforderungen in Must, Should, Could, Won't einteilen: Wichtiges zuerst.",
  "ks": [
   "Zeitrahmen und Ziel klären",
   "Jede Anforderung einordnen",
   "Must auf Notwendigkeit prüfen",
   "Won't bewusst festhalten",
   "Mit Stakeholdern abstimmen"
  ],
  "gw": [
   "Feste Frist, mehr Wünsche als Platz",
   "Schnelle Entscheide im Workshop",
   "Zur Umfangsabgrenzung eines Releases"
  ],
  "rg": [
   "Must heisst: ohne geht das Release nicht live",
   "Must-Anteil bei höchstens 60 % des Aufwands halten",
   "Won't gilt nur für diesen Zeitraum"
  ],
  "vk": [
   "Anforderungsliste bereitlegen",
   "Zeitrahmen und Ziel klären"
  ],
  "bn": "Fast alles ist Must: dann WSJF",
  "pr": "Streiten Sie zuerst über die Definition von Must: Ohne dieses Merkmal geht das Release nicht live, ist rechtswidrig oder unsicher. Als Faustregel höchstens 60 Prozent des Aufwands als Must, der Rest ist Puffer. Won't ist eine Entscheidung, keine Ablage: Halten Sie fest, dass es nur für diesen Zeitraum gilt. Ein Gespräch über Grenzfälle ist wertvoller als die Einteilung selbst.",
  "em": "Vorher sammelt ein Workshop die Anforderungen. Danach übernehmen Sie die Reihenfolge ins Backlog. Bei Zweifeln kann Kano oder WSJF eine zweite Meinung liefern.",
  "qu": [
   "Clegg, D., Barker, R.: Case Method Fast-Track: A RAD Approach (Addison-Wesley, 1994)",
   "DSDM Consortium: The DSDM Agile Project Framework (Agile Business Consortium)",
   "IIBA: BABOK Guide, Version 3 (2015), Technik «MoSCoW-Analyse»"
  ],
  "io": {
   "lf": [
    "Fachbereich und Stakeholder",
    "Product Owner"
   ],
   "in": [
    {
     "t": "Anforderungsliste",
     "to": "workshop",
     "v": "geliefert von"
    },
    {
     "t": "Ziel und Zeitrahmen des Releases"
    },
    {
     "t": "Aufwandsschätzung",
     "to": "story-points",
     "v": "ergänzt durch"
    }
   ],
   "out": [
    {
     "t": "Einteilung in Must, Should, Could, Won't"
    },
    {
     "t": "Reihenfolge",
     "to": "product-backlog",
     "v": "übernommen in"
    },
    {
     "t": "Umfang des Releases",
     "to": "roadmap",
     "v": "genutzt in"
    }
   ],
   "ko": [
    "Product Owner",
    "Entwicklungsteam",
    "Auftraggeber"
   ]
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
  "f": "methode",
  "m": "beide",
  "ph": "bewerten",
  "t": "Priorisierung",
  "kz": "Kano",
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
  "zw": "Das Kano-Modell ordnet Merkmale danach, wie sie die Zufriedenheit beeinflussen: Basismerkmale werden erwartet, Leistungsmerkmale steigern linear, Begeisterungsmerkmale überraschen. Es zeigt, wo Aufwand sich lohnt und was nur Pflicht ist.",
  "wa": [
   "Bei Produkten für viele Nutzer mit freier Wahl",
   "Wenn Features nach Wirkung auf Zufriedenheit sortiert werden sollen",
   "Wenn der Verdacht besteht, dass Teile zu viel Aufmerksamkeit bekommen"
  ],
  "wn": [
   "Bei internen Pflichtsystemen ohne Wahlmöglichkeit",
   "Wenn keine Befragung möglich ist",
   "Wenn Merkmale technisch gebunden sind"
  ],
  "vb": [
   "Liste der Merkmale zusammenstellen",
   "Fragenpaar je Merkmal formulieren: funktional (wenn vorhanden) und dysfunktional (wenn nicht vorhanden)",
   "Stichprobe der Zielgruppe befragen",
   "Auswertungstabelle vorbereiten"
  ],
  "nr": "B-02",
  "kt": "Merkmale nach Wirkung auf die Zufriedenheit ordnen: Basis, Leistung, Begeisterung.",
  "ks": [
   "Merkmale auflisten",
   "Pro Merkmal zwei Fragen stellen",
   "Zielgruppe befragen",
   "Antworten auswerten",
   "Einordnen, später wiederholen"
  ],
  "gw": [
   "Viele Nutzer mit freier Wahl",
   "Features nach Wirkung sortieren",
   "Wenn Teile zu viel Aufmerksamkeit bekommen"
  ],
  "rg": [
   "Basisfaktoren sind Pflicht, sorgen aber nicht für Begeisterung",
   "Begeisterungsfaktoren werden mit der Zeit zu Basisfaktoren",
   "Befragung mit echten Nutzern"
  ],
  "vk": [
   "Fragenpaare je Merkmal formulieren",
   "Stichprobe der Zielgruppe befragen"
  ],
  "bn": "Interne Pflichtsysteme ohne Wahl",
  "pr": "Je Merkmal stellen Sie zwei Fragen und lassen aus den Antworten ablesen, ob es erwartet, linear oder begeisternd ist. Begeisterungsmerkmale von heute sind morgen Basis. Wiederholen Sie die Erhebung deshalb von Zeit zu Zeit. Mit mindestens 15 bis 20 Befragten je Zielgruppe sind Muster erkennbar.",
  "em": "Vorher helfen Personas, die richtigen Befragten zu wählen. Danach ordnen Sie die Merkmale im Backlog ein. Basismerkmale sind Pflicht und gehören zu den Qualitätsanforderungen.",
  "qu": [
   "Kano, N., Seraku, N., Takahashi, F., Tsuji, S.: Attractive Quality and Must-be Quality (1984), Journal of the Japanese Society for Quality Control",
   "Berger, C. u.a.: Kano's Methods for Understanding Customer-defined Quality (1993)",
   "Pichler, R.: Agile Product Management with Scrum (2010)"
  ],
  "io": {
   "lf": [
    "Zielgruppe der Befragung",
    "Product Owner"
   ],
   "in": [
    {
     "t": "Zielgruppenprofile",
     "to": "persona",
     "v": "geliefert von"
    },
    {
     "t": "Merkmalsliste"
    },
    {
     "t": "Befragungsdaten",
     "to": "fragebogen",
     "v": "geliefert von"
    }
   ],
   "out": [
    {
     "t": "Einteilung in Basis-, Leistungs- und Begeisterungsmerkmale"
    },
    {
     "t": "Qualitätsmerkmale",
     "to": "nfr",
     "v": "genutzt in"
    },
    {
     "t": "Reihenfolge der Merkmale",
     "to": "product-backlog",
     "v": "übernommen in"
    }
   ],
   "ko": [
    "Product Owner",
    "UX-Design",
    "Management"
   ]
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
  "s": "entwurf",
  "vis": "kano"
 },
 {
  "id": "wsjf",
  "n": "WSJF (Weighted Shortest Job First)",
  "c": "prio",
  "f": "methode",
  "m": "agil",
  "ph": "bewerten",
  "t": "Priorisierung",
  "kz": "WSJF",
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
  "zw": "WSJF (Weighted Shortest Job First) priorisiert nach dem Verhältnis von Verzögerungskosten zu Aufwand: Was pro Aufwand am meisten Wert bringt und am dringendsten ist, kommt zuerst. Die Zahl macht Entscheidungen vergleichbar und nachvollziehbar.",
  "wa": [
   "Wenn viele Anfragen um knappe Kapazität konkurrieren",
   "Wenn Dringlichkeit und Wert transparent begründet werden sollen",
   "In skalierten agilen Umgebungen"
  ],
  "wn": [
   "Wenn die Zahlen nur Scheingenauigkeit liefern: nehmen Sie relative Schätzungen ernst, aber nicht wörtlich",
   "Bei sehr wenigen Einträgen",
   "Wenn Schätzungen fehlen"
  ],
  "vb": [
   "Liste der Kandidaten mit Aufwandsschätzung",
   "Skala für relative Bewertung wählen (zum Beispiel Fibonacci)",
   "Beteiligte aus Fachbereich und Entwicklung",
   "Tabelle mit den Spalten Geschäftswert, Zeitkritikalität, Risikominderung, Aufwand"
  ],
  "nr": "B-03",
  "kt": "Priorisieren nach Verzögerungskosten geteilt durch Aufwand. Was zuerst?",
  "ks": [
   "Kandidaten und Aufwand sammeln",
   "Wert, Dringlichkeit, Risiko bewerten",
   "Summe durch Aufwand teilen",
   "Rangliste bilden",
   "Ausreisser besprechen"
  ],
  "gw": [
   "Viele Anfragen, knappe Kapazität",
   "Wert und Dringlichkeit begründen",
   "In skalierten agilen Umgebungen"
  ],
  "rg": [
   "Alle Faktoren relativ bewerten (z. B. Fibonacci)",
   "Im Team bewerten, nicht allein",
   "Das Ergebnis ist Diskussionsgrundlage"
  ],
  "vk": [
   "Kandidaten mit Aufwand schätzen",
   "Relative Skala wählen"
  ],
  "bn": "Die Zahlen liefern nur Scheingenauigkeit",
  "pr": "Verzögerungskosten setzen sich zusammen aus Geschäftswert, Zeitkritikalität und Risikominderung. Teilen Sie die Summe durch den Aufwand. Bewerten Sie relativ: Zuerst den kleinsten Eintrag je Spalte bestimmen und alle anderen dagegen. Diskutieren Sie Ausreisser, das Gespräch ist wichtiger als die Nachkommastelle.",
  "em": "Vorher brauchen Sie Aufwandsschätzungen aus Planning Poker oder Story Points. Danach fliesst die Reihenfolge ins Backlog und die Roadmap. Als Alternative zu MoSCoW, wenn feinere Unterscheidung nötig ist.",
  "qu": [
   "Reinertsen, D.: The Principles of Product Development Flow (Celeritas, 2009)",
   "Scaled Agile, Inc.: SAFe – WSJF (scaledagileframework.com)",
   "Leffingwell, D.: Agile Software Requirements (Addison-Wesley, 2011)"
  ],
  "io": {
   "lf": [
    "Product Owner",
    "Fachbereich",
    "Entwicklungsteam"
   ],
   "in": [
    {
     "t": "Aufwandsschätzungen",
     "to": "story-points",
     "v": "geliefert von"
    },
    {
     "t": "Relative Schätzung",
     "to": "planning-poker",
     "v": "geliefert von"
    },
    {
     "t": "Risikoeinschätzung",
     "to": "risikoanalyse",
     "v": "ergänzt durch"
    }
   ],
   "out": [
    {
     "t": "Rangliste mit Kennzahl"
    },
    {
     "t": "Reihenfolge",
     "to": "product-backlog",
     "v": "übernommen in"
    },
    {
     "t": "Planungsgrundlage",
     "to": "roadmap",
     "v": "genutzt in"
    }
   ],
   "ko": [
    "Product Owner",
    "Management",
    "Entwicklungsteam"
   ]
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
  "f": "methode",
  "m": "agil",
  "ph": "bewerten",
  "t": "Schätzung",
  "kz": "Planning Poker",
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
  "zw": "Beim Planning Poker schätzt das Team den Aufwand von Stories, indem alle gleichzeitig eine Karte mit einer Schätzung aufdecken. Abweichungen werden besprochen, bis ein gemeinsames Verständnis besteht. Das verhindert Ankereffekte und bindet das ganze Team ein.",
  "wa": [
   "Im Refinement, bevor Stories in den Sprint kommen",
   "Wenn das Team seine Kapazität einschätzen soll",
   "Wenn Meinungen über den Aufwand auseinandergehen"
  ],
  "wn": [
   "Wenn Stories noch unklar sind: zuerst klären",
   "Bei sehr vielen kleinen Einträgen: Gruppieren oder Kleidergrössen verwenden",
   "Wenn Schätzungen für Leistungsbeurteilung missbraucht werden"
  ],
  "vb": [
   "Stories mit Beschreibung und Kriterien vorbereiten",
   "Referenzstory festlegen, an der verglichen wird",
   "Karten (Fibonacci: 1, 2, 3, 5, 8, 13) oder App bereitstellen",
   "Team komplett versammeln, Moderation bestimmen"
  ],
  "nr": "B-04",
  "kt": "Das Team schätzt gleichzeitig mit Karten, Abweichungen werden besprochen.",
  "ks": [
   "Story kurz erklären",
   "Alle legen verdeckt eine Karte",
   "Gleichzeitig aufdecken",
   "Höchste und tiefste begründen",
   "Neu schätzen bis Einigung"
  ],
  "gw": [
   "Im Refinement, vor dem Sprint",
   "Meinungen zum Aufwand gehen auseinander",
   "Wenn das Team Kapazität einschätzen soll"
  ],
  "rg": [
   "Skala: 1, 2, 3, 5, 8, 13, 21 (Fibonacci)",
   "Niemand beeinflusst vor dem Aufdecken",
   "Schätzen tut das Team, das umsetzt"
  ],
  "vk": [
   "Stories mit Kriterien vorbereiten",
   "Referenzstory und Karten bereit"
  ],
  "bn": "Stories sind unklar: erst klären",
  "pr": "Die Story wird kurz erklärt, dann legen alle verdeckt eine Karte und decken gleichzeitig auf. Die höchste und die niedrigste Schätzung begründen ihre Sicht, danach wird neu geschätzt. Meist genügen zwei bis drei Runden. Geht es nicht, ist die Story nicht verstanden oder zu gross: Zurück ins Splitting.",
  "em": "Vorher müssen Stories verstanden und annähernd gleich gross sein, etwa nach Story Splitting. Danach sind die Schätzungen Story Points und fliessen ins Backlog. Sie sind Grundlage für WSJF und für die Sprintplanung.",
  "qu": [
   "Grenning, J.: Planning Poker or How to Avoid Analysis Paralysis while Release Planning (2002)",
   "Cohn, M.: Agile Estimating and Planning (Prentice Hall, 2005)",
   "Schwaber, K., Sutherland, J.: The Scrum Guide (2020)"
  ],
  "io": {
   "lf": [
    "Entwicklungsteam",
    "Product Owner für Rückfragen"
   ],
   "in": [
    {
     "t": "Stories mit Kriterien",
     "to": "user-stories",
     "v": "geliefert von"
    },
    {
     "t": "Kleine Teile",
     "to": "story-splitting",
     "v": "geliefert von"
    },
    {
     "t": "Referenzstory"
    }
   ],
   "out": [
    {
     "t": "Schätzwerte je Story",
     "to": "story-points",
     "v": "festgehalten als"
    },
    {
     "t": "Gemeinsames Verständnis"
    },
    {
     "t": "Unklare Stories zur Klärung",
     "to": "refinement",
     "v": "zurückgegeben an"
    }
   ],
   "ko": [
    "Product Owner",
    "Scrum Master",
    "Entwicklungsteam"
   ]
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
  "f": "methode",
  "m": "agil",
  "ph": "bewerten",
  "t": "Schätzeinheit",
  "kz": "Story Points",
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
  "zw": "Story Points messen den relativen Aufwand einer Story, einschliesslich Umfang, Komplexität und Unsicherheit, nicht Stunden. Mit der Zeit zeigt die Velocity, wie viele Punkte das Team pro Sprint schafft, und erlaubt Prognosen.",
  "wa": [
   "Wenn das Team in Sprints arbeitet und Prognosen braucht",
   "Wenn Stundenschätzungen trügerisch genau wirken",
   "Wenn die Planung auf Erfahrung des Teams beruhen soll"
  ],
  "wn": [
   "Wenn Kunden Festpreis nach Stunden verlangen",
   "Bei sehr wenigen Daten zu Beginn, die Prognose bleibt dann grob",
   "Wenn Punkte zwischen Teams verglichen werden: sie sind teamspezifisch"
  ],
  "vb": [
   "Referenzstories festlegen, zum Beispiel eine kleine mit 2 und eine mittlere mit 5 Punkten",
   "Skala vereinbaren (Fibonacci)",
   "Werkzeug für Velocity und Burndown wählen",
   "Team in die Bedeutung der Punkte einführen"
  ],
  "nr": "B-05",
  "kt": "Relativer Aufwand einer Story statt Stunden. Die Velocity zeigt die Teamleistung.",
  "ks": [
   "Referenzstories festlegen",
   "Skala vereinbaren",
   "Stories relativ vergleichen",
   "Velocity der letzten Sprints",
   "Nie in Stunden umrechnen"
  ],
  "gw": [
   "Sprints und Prognosen sind nötig",
   "Stundenschätzungen täuschen Genauigkeit vor",
   "Wenn Planung auf Teamerfahrung beruhen soll"
  ],
  "rg": [
   "Punkte gelten nur innerhalb eines Teams",
   "Nicht in Stunden umrechnen",
   "Nur fertige Stories zählen"
  ],
  "vk": [
   "Referenzstories festlegen",
   "Skala vereinbaren, Velocity führen"
  ],
  "bn": "Kunde verlangt Festpreis nach Stunden",
  "pr": "Punkte sind relativ: Eine 8 ist ungefähr viermal so viel wie eine 2. Sie gehören dem Team, andere nutzen sie nicht als Leistungsmass. Die Velocity ist der Durchschnitt der letzten drei bis fünf Sprints. Rechnen Sie nicht auf Stunden um, das zerstört den Nutzen.",
  "em": "Vorher schätzt das Team mit Planning Poker. Danach nutzen Sie die Punkte im Backlog und in der Sprintplanung und als Aufwand für WSJF.",
  "qu": [
   "Cohn, M.: Agile Estimating and Planning (Prentice Hall, 2005)",
   "Beck, K., Fowler, M.: Planning Extreme Programming (Addison-Wesley, 2000)",
   "Schwaber, K., Sutherland, J.: The Scrum Guide (2020)"
  ],
  "io": {
   "lf": [
    "Entwicklungsteam",
    "Product Owner"
   ],
   "in": [
    {
     "t": "Schätzrunde",
     "to": "planning-poker",
     "v": "geliefert von"
    },
    {
     "t": "Stories",
     "to": "user-stories",
     "v": "geliefert von"
    },
    {
     "t": "Referenzstories"
    }
   ],
   "out": [
    {
     "t": "Punkte je Story"
    },
    {
     "t": "Velocity des Teams"
    },
    {
     "t": "Aufwand im Backlog",
     "to": "product-backlog",
     "v": "hinterlegt in"
    },
    {
     "t": "Aufwandsnenner",
     "to": "wsjf",
     "v": "genutzt in"
    }
   ],
   "ko": [
    "Product Owner",
    "Sprint Planning",
    "Management"
   ]
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
  "id": "risikoanalyse",
  "n": "Risikoanalyse",
  "c": "prio",
  "f": "methode",
  "m": "beide",
  "ph": "bewerten",
  "t": "Analyse",
  "kz": "Risiken",
  "k": "Erfasst mögliche Risiken, bewertet Eintrittswahrscheinlichkeit und Auswirkung und legt Gegenmassnahmen fest.",
  "aufwand": "1 bis 2 Stunden",
  "ab": [
   "Risiken sammeln (Workshop, Checkliste)",
   "Wahrscheinlichkeit und Auswirkung bewerten (z. B. 1 bis 3)",
   "In der Risikomatrix einordnen",
   "Gegenmassnahmen und Verantwortliche festlegen",
   "Regelmässig überprüfen"
  ],
  "re": [
   "Jedes Risiko hat eine verantwortliche Person",
   "Gegenmassnahme oder bewusste Akzeptanz festhalten",
   "Hohe Risiken früh angehen"
  ],
  "bsp": {
   "t": "Risiko Schnittstelle ERP",
   "x": "Wahrscheinlichkeit 3, Auswirkung 3 → hohes Risiko. Massnahme: früh einen Prototyp der Schnittstelle bauen."
  },
  "zw": "Die Risikoanalyse identifiziert mögliche Ereignisse, die dem Vorhaben schaden, und bewertet sie nach Eintrittswahrscheinlichkeit und Auswirkung. Sie legt fest, welche Risiken zuerst behandelt werden, und macht Annahmen sichtbar.",
  "wa": [
   "Zu Beginn und bei grossen Änderungen",
   "Wenn das Vorhaben von Technik, Terminen oder Dritten abhängt",
   "Bei regulierten Bereichen"
  ],
  "wn": [
   "Wenn die Liste nie angeschaut wird",
   "Wenn Zahlen nur geraten sind und keine Entscheidung folgt"
  ],
  "vb": [
   "Risikokategorien festlegen: Fachlich, technisch, organisatorisch, rechtlich",
   "Teilnehmende mit unterschiedlichen Sichten einladen",
   "Bewertungsskalen für Wahrscheinlichkeit und Auswirkung vereinbaren",
   "Vorlage mit Risiko, Ursache, Wirkung, Massnahme, Verantwortliche"
  ],
  "nr": "B-06",
  "kt": "Mögliche Schäden finden, nach Wahrscheinlichkeit und Wirkung bewerten.",
  "ks": [
   "Risiken sammeln",
   "Als Wenn-dann-Satz formulieren",
   "Wahrscheinlichkeit und Wirkung",
   "Massnahme und Eigner",
   "Regelmässig überprüfen"
  ],
  "gw": [
   "Zu Beginn und bei grossen Änderungen",
   "Abhängig von Technik, Terminen, Dritten",
   "In regulierten Bereichen"
  ],
  "rg": [
   "Jedes Risiko hat eine verantwortliche Person",
   "Gegenmassnahme oder bewusste Akzeptanz festhalten",
   "Hohe Risiken früh angehen"
  ],
  "vk": [
   "Kategorien und Skalen vereinbaren",
   "Verschiedene Sichten einladen"
  ],
  "bn": "Die Liste wird nie angeschaut",
  "pr": "Formulieren Sie Risiken als Ursache-Wirkung-Satz («Wenn der Partner spät liefert, verschiebt sich der Start»). Bewerten Sie in einer Matrix und konzentrieren Sie sich auf die obersten. Jede Massnahme hat eine verantwortliche Person und ein Datum. Prüfen Sie die Liste regelmässig, zum Beispiel in jedem Sprint.",
  "em": "Vorher liefern SWOT oder die 5-Whys-Analyse Kandidaten. Danach fliessen die Risiken in die Priorisierung (WSJF) und das Backlog, etwa als Spike-Stories.",
  "qu": [
   "ISO 31000:2018 – Risk management guidelines",
   "PMI: A Guide to the Project Management Body of Knowledge (PMBOK Guide), Risikomanagement",
   "IIBA: BABOK Guide, Version 3 (2015), Technik «Risikoanalyse und -management»"
  ],
  "io": {
   "lf": [
    "Projektleitung",
    "Fachbereich",
    "Technik"
   ],
   "in": [
    {
     "t": "Lagebild",
     "to": "swot",
     "v": "geliefert von"
    },
    {
     "t": "Ursachen",
     "to": "five-whys",
     "v": "geliefert von"
    },
    {
     "t": "Erfahrungen aus ähnlichen Vorhaben"
    }
   ],
   "out": [
    {
     "t": "Risikoliste mit Bewertung und Massnahmen"
    },
    {
     "t": "Risikominderung als Wert",
     "to": "wsjf",
     "v": "genutzt in"
    },
    {
     "t": "Massnahmen als Einträge",
     "to": "product-backlog",
     "v": "aufgenommen in"
    }
   ],
   "ko": [
    "Projektleitung",
    "Product Owner",
    "Management"
   ]
  },
  "li": [
   [
    "swot",
    "vorher",
    "Bedrohungen aus der SWOT-Analyse aufnehmen."
   ],
   [
    "five-whys",
    "vorher",
    "Ursachen als Risiken erfassen."
   ],
   [
    "wsjf",
    "ergaenzt",
    "Risikoreduktion ist Teil von WSJF."
   ],
   [
    "product-backlog",
    "danach",
    "Risikoreiche Einträge früh einplanen."
   ],
   [
    "nfr",
    "ergaenzt",
    "Viele Risiken betreffen Qualität."
   ],
   [
    "change-management",
    "ergaenzt",
    "Änderungen verändern Risiken."
   ]
  ],
  "tools": [
   "Excel",
   "Miro"
  ],
  "s": "entwurf",
  "vis": "risiko"
 },
 {
  "id": "product-backlog",
  "n": "Product Backlog",
  "c": "plan",
  "f": "artefakt",
  "m": "agil",
  "ph": "planen",
  "t": "Artefakt",
  "kz": "Backlog",
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
  "zw": "Das Product Backlog ist die geordnete Liste von allem, was für das Produkt gebraucht wird: Stories, Fehler, technische Aufgaben. Es hat eine verantwortliche Person und zeigt die Reihenfolge der Arbeit. Es ist nie fertig, sondern wächst und ändert sich mit dem Lernen.",
  "wa": [
   "In jedem agilen Vorhaben",
   "Wenn Arbeit transparent und priorisiert sein soll",
   "Als einzige Quelle der Wahrheit für kommende Arbeit"
  ],
  "wn": [
   "Bei Vorhaben mit festem Vertrag und Pflichtenheft ist es nicht ausreichend, dort dient es als Ergänzung",
   "Wenn es zur Müllhalde mit hunderten Einträgen wird: regelmässig ausmisten"
  ],
  "vb": [
   "Verantwortliche Person (Product Owner) bestimmen",
   "Werkzeug wählen, zum Beispiel Jira oder ein Board",
   "Einheitliches Format der Einträge festlegen",
   "Regelmässigen Termin für Pflege einplanen"
  ],
  "nr": "P-01",
  "kt": "Die geordnete Liste von allem, was das Produkt braucht. Nie fertig.",
  "ks": [
   "Verantwortliche bestimmen",
   "Einträge einheitlich schreiben",
   "Nach Wert und Risiko ordnen",
   "Oben klein, unten grob",
   "Regelmässig ausmisten"
  ],
  "gw": [
   "In jedem agilen Vorhaben",
   "Arbeit soll transparent und geordnet sein",
   "Als einzige Quelle für kommende Arbeit"
  ],
  "rg": [
   "Ein Backlog pro Produkt",
   "Eine Person (Product Owner) bestimmt die Reihenfolge",
   "Oben fein, unten grob (DEEP)"
  ],
  "vk": [
   "Product Owner bestimmen",
   "Werkzeug und Eintragsformat wählen"
  ],
  "bn": "Fester Vertrag: nur als Ergänzung",
  "pr": "Oben stehen kleine, klare, bereite Einträge, unten grobe Ideen. Der Product Owner ordnet nach Wert, Risiko und Abhängigkeiten. Halten Sie die Liste schlank: Einträge, die Sie in einem halben Jahr nicht angehen, löschen Sie. Das Backlog ist ein Gesprächsmittel, kein Vertrag.",
  "em": "Vorher liefern Stories, Priorisierung und Story Map den Inhalt. Danach pflegen Sie es im Refinement und entnehmen die Sprint-Einträge in der Sprintplanung. Die Roadmap zeigt den grossen Bogen.",
  "qu": [
   "Schwaber, K., Sutherland, J.: The Scrum Guide (2020)",
   "Pichler, R.: Agile Product Management with Scrum (Addison-Wesley, 2010)",
   "Cohn, M.: Succeeding with Agile (Addison-Wesley, 2009)"
  ],
  "io": {
   "lf": [
    "Product Owner",
    "Stakeholder",
    "Entwicklungsteam"
   ],
   "in": [
    {
     "t": "Stories",
     "to": "user-stories",
     "v": "geliefert von"
    },
    {
     "t": "Priorisierung",
     "to": "moscow",
     "v": "geliefert von"
    },
    {
     "t": "Story Map",
     "to": "story-mapping",
     "v": "geliefert von"
    }
   ],
   "out": [
    {
     "t": "Geordnete Arbeitsliste"
    },
    {
     "t": "Bereite Einträge für den Sprint",
     "to": "sprint-planning",
     "v": "genutzt in"
    },
    {
     "t": "Verfeinerungsbedarf",
     "to": "refinement",
     "v": "bearbeitet in"
    },
    {
     "t": "Grundlage für die Etappen",
     "to": "roadmap",
     "v": "genutzt in"
    }
   ],
   "ko": [
    "Entwicklungsteam",
    "Stakeholder",
    "Product Owner"
   ]
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
  "f": "meeting",
  "m": "agil",
  "ph": "planen",
  "t": "Meeting",
  "kz": "Refinement",
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
  "zw": "Beim Backlog Refinement bereitet das Team kommende Einträge für den Sprint vor: Es klärt Fragen, ergänzt Akzeptanzkriterien, teilt grosse Stories und schätzt. Ziel ist, dass die Sprintplanung nicht mit offenen Fragen belastet wird.",
  "wa": [
   "Laufend in jedem Sprint, zum Beispiel einmal pro Woche",
   "Wenn Stories unklar oder zu gross sind",
   "Vor der Sprintplanung"
  ],
  "wn": [
   "Wenn es zu einem langen Meeting ohne Ergebnis wird: kürzere Zeitbox",
   "Wenn der Product Owner nicht anwesend sein kann"
  ],
  "vb": [
   "Termin und Zeitbox festlegen, zum Beispiel 60 Minuten pro Woche",
   "Product Owner wählt obere Einträge vor",
   "Team komplett, plus gelegentlich Fachexperten",
   "Definition of Ready sichtbar bereithalten",
   "Karten oder Werkzeug für Schätzungen"
  ],
  "nr": "P-02",
  "kt": "Das Team bereitet kommende Einträge für den Sprint vor.",
  "ks": [
   "Obere Einträge vorwählen",
   "Nutzen verstehen",
   "Kriterien ergänzen, teilen",
   "Schätzen",
   "Gegen DoR prüfen"
  ],
  "gw": [
   "Laufend, einmal pro Sprint-Woche",
   "Stories sind unklar oder zu gross",
   "Vor der Sprintplanung"
  ],
  "rg": [
   "Höchstens 10 % der Sprintzeit",
   "Product Owner ist anwesend",
   "Ergebnis: Stories sind Ready"
  ],
  "vk": [
   "Zeitbox festlegen (z. B. 60 Min.)",
   "Obere Einträge vorsortieren"
  ],
  "bn": "Das Treffen wird endlos: Zeitbox kürzen",
  "pr": "Nehmen Sie sich so viele Einträge vor, wie in zwei Sprints gebraucht werden, nicht mehr. Je Eintrag: Nutzen verstehen, Kriterien ergänzen, grosse Teile teilen, schätzen. Was nicht klar wird, geht mit einer Frage an Fachleute zurück. Prüfen Sie am Ende gegen die Definition of Ready.",
  "em": "Vorher hat der Product Owner das Backlog vorsortiert. Danach ist das Team bereit für die Sprintplanung. Bei Bedarf hilft Story Splitting.",
  "qu": [
   "Schwaber, K., Sutherland, J.: The Scrum Guide (2020)",
   "Rubin, K.: Essential Scrum (Addison-Wesley, 2012)",
   "Pichler, R.: Agile Product Management with Scrum (2010)"
  ],
  "io": {
   "lf": [
    "Product Owner",
    "Fachexperten",
    "Entwicklungsteam"
   ],
   "in": [
    {
     "t": "Vorsortiertes Backlog",
     "to": "product-backlog",
     "v": "geliefert von"
    },
    {
     "t": "Bereitschaftskriterien",
     "to": "dor-dod",
     "v": "geliefert von"
    },
    {
     "t": "Stories",
     "to": "user-stories",
     "v": "geliefert von"
    }
   ],
   "out": [
    {
     "t": "Bereite, geschätzte Stories"
    },
    {
     "t": "Neu geschnittene Einträge",
     "to": "story-splitting",
     "v": "erzeugt durch"
    },
    {
     "t": "Schätzungen",
     "to": "planning-poker",
     "v": "erzeugt in"
    },
    {
     "t": "Offene Fragen"
    }
   ],
   "ko": [
    "Sprint Planning",
    "Product Owner",
    "Entwicklungsteam"
   ]
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
  "f": "modell",
  "m": "agil",
  "ph": "planen",
  "t": "Planungsmethode",
  "kz": "Story Mapping",
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
  "zw": "Das Story Mapping ordnet Stories entlang der Nutzerreise: oben die Aktivitäten von links nach rechts, darunter die Stories nach Wichtigkeit. Es zeigt das Ganze statt einer flachen Liste und erlaubt, Releases als horizontale Schnitte zu planen.",
  "wa": [
   "Wenn das Backlog unübersichtlich und flach geworden ist",
   "Beim Planen eines ersten Releases mit minimalem Umfang",
   "Wenn das Team den Gesamtzusammenhang verlieren könnte"
  ],
  "wn": [
   "Bei kleinen Vorhaben mit wenigen Stories",
   "Wenn die Nutzerreise nicht bekannt ist: zuerst Personas und Interviews"
  ],
  "vb": [
   "Personas und Ziele bereitlegen",
   "Grosse Wand oder digitales Whiteboard",
   "Haftnotizen in zwei Farben für Aktivitäten und Stories",
   "Fachleute und Team einladen",
   "Halben Tag einplanen"
  ],
  "nr": "P-03",
  "kt": "Stories entlang der Nutzerreise ordnen: Überblick statt flacher Liste.",
  "ks": [
   "Persona und Ziel wählen",
   "Aktivitäten links nach rechts",
   "Stories darunter ordnen",
   "Release-Linie ziehen",
   "Ins Backlog übernehmen"
  ],
  "gw": [
   "Das Backlog ist flach und unübersichtlich",
   "Erstes Release mit minimalem Umfang",
   "Beim Planen eines ersten Releases"
  ],
  "rg": [
   "Von links nach rechts erzählen",
   "Wichtiges oben, Details unten",
   "Release-Linie quer ziehen"
  ],
  "vk": [
   "Personas und Ziele bereithalten",
   "Wand, zwei Zettelfarben"
  ],
  "bn": "Kleines Vorhaben mit wenigen Stories",
  "pr": "Erzählen Sie die Geschichte aus Sicht der Persona von links nach rechts. Die oberste Ebene bilden Aktivitäten, darunter Schritte, ganz unten Stories. Ziehen Sie eine Linie quer: alles darüber ist das erste Release («Walking Skeleton»). So entsteht eine Liefersequenz, die den Nutzen früh zeigt.",
  "em": "Vorher liefern Stories, Personas und Workshop die Zutaten. Danach übernehmen Sie die geschnittene Liste ins Backlog und planen Releases.",
  "qu": [
   "Patton, J.: User Story Mapping (O'Reilly, 2014)",
   "Patton, J.: The New User Story Backlog is a Map (2008), agileproductdesign.com",
   "Cohn, M.: User Stories Applied (2004)"
  ],
  "io": {
   "lf": [
    "Fachbereich und Nutzervertretung",
    "Product Owner"
   ],
   "in": [
    {
     "t": "Stories",
     "to": "user-stories",
     "v": "geliefert von"
    },
    {
     "t": "Nutzerprofile",
     "to": "persona",
     "v": "geliefert von"
    },
    {
     "t": "Workshop",
     "to": "workshop",
     "v": "durchgeführt in"
    }
   ],
   "out": [
    {
     "t": "Story Map mit Release-Schnitten"
    },
    {
     "t": "Geordneter Inhalt",
     "to": "product-backlog",
     "v": "übernommen in"
    },
    {
     "t": "Teilbare Stories",
     "to": "story-splitting",
     "v": "weiterverarbeitet in"
    }
   ],
   "ko": [
    "Das ganze Team",
    "Product Owner",
    "Management"
   ]
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
  "id": "roadmap",
  "n": "Produkt-Roadmap",
  "c": "plan",
  "f": "artefakt",
  "m": "agil",
  "ph": "planen",
  "t": "Artefakt",
  "kz": "Roadmap",
  "k": "Zeigt in groben Etappen, welche Ziele und Themen das Produkt in welcher Reihenfolge erreichen soll, ohne feste Termine für Details.",
  "aufwand": "2 bis 3 Stunden",
  "ab": [
   "Vision und Ziele zusammentragen",
   "Themen oder Ziele je Etappe festlegen (Jetzt, Als Nächstes, Später)",
   "Abhängigkeiten und Risiken prüfen",
   "Mit Stakeholdern abstimmen",
   "Regelmässig überarbeiten"
  ],
  "re": [
   "Ziele statt Funktionslisten",
   "Je weiter weg, desto grober",
   "Roadmap ist keine Terminzusage"
  ],
  "bsp": {
   "t": "Roadmap in drei Etappen",
   "x": "Jetzt: Touren anlegen und prüfen. Als Nächstes: Fahrer-App und Benachrichtigung. Später: Auswertungen und Rückfrachtvorschläge."
  },
  "zw": "Die Produkt-Roadmap zeigt in grossen Etappen, wohin sich das Produkt entwickelt, und welche Ziele wann angestrebt werden. Sie ist ein Kommunikationsmittel für Orientierung, keine feste Zusage von Funktionen und Terminen.",
  "wa": [
   "Wenn Management und Kunden Orientierung brauchen",
   "Wenn mehrere Teams abgestimmt werden müssen",
   "Wenn die Vision in Etappen übersetzt werden soll"
  ],
  "wn": [
   "Wenn sie als Terminversprechen missverstanden wird",
   "Wenn niemand sie nach drei Monaten noch anschaut"
  ],
  "vb": [
   "Produktvision und Ziele bereitlegen",
   "Grobes Backlog und Priorisierung kennen",
   "Zeithorizont und Granularität festlegen: Quartale statt Tage",
   "Zielgruppe der Roadmap klären"
  ],
  "nr": "P-04",
  "kt": "Grobe Etappen und Ziele über die Zeit: Orientierung, kein Terminversprechen.",
  "ks": [
   "Vision und Ziele klären",
   "Horizont wählen",
   "Nach Zielen gliedern",
   "Jetzt, Nächstes, Später",
   "Änderungen begründen"
  ],
  "gw": [
   "Management braucht Orientierung",
   "Mehrere Teams abstimmen",
   "Wenn die Vision in Etappen gehört"
  ],
  "rg": [
   "Ziele statt Funktionslisten",
   "Je weiter weg, desto grober",
   "Roadmap ist keine Terminzusage"
  ],
  "vk": [
   "Vision und Ziele bereitlegen",
   "Zeithorizont: Quartale statt Tage"
  ],
  "bn": "Sie wird als Terminversprechen gelesen",
  "pr": "Gliedern Sie nach Zielen und Zeiträumen (jetzt, als Nächstes, später) statt nach Funktionen und Daten. Für das nahe Quartal sind Details bekannt, für später nur Themen. Überprüfen Sie die Roadmap regelmässig und kommunizieren Sie Änderungen mit Begründung. So bleibt Vertrauen.",
  "em": "Vorher klären Vision und Priorisierung die Richtung. Danach plant das Team im Sprint die Umsetzung kleinster Teile. Risiken sollten Sie in der Roadmap sichtbar machen.",
  "qu": [
   "Lombardo, C. T., McCarthy, B., Ryan, E., Connors, M.: Product Roadmaps Relaunched (O'Reilly, 2017)",
   "Pichler, R.: Agile Product Management with Scrum (2010)",
   "Cagan, M.: Inspired (Wiley, 2017)"
  ],
  "io": {
   "lf": [
    "Product Owner",
    "Management",
    "Stakeholder"
   ],
   "in": [
    {
     "t": "Vision",
     "to": "produktvision",
     "v": "geliefert von"
    },
    {
     "t": "Backlog",
     "to": "product-backlog",
     "v": "geliefert von"
    },
    {
     "t": "Priorisierung",
     "to": "wsjf",
     "v": "geliefert von"
    }
   ],
   "out": [
    {
     "t": "Roadmap nach Zielen und Zeiträumen"
    },
    {
     "t": "Orientierung für das Sprintziel",
     "to": "sprint-planning",
     "v": "genutzt in"
    },
    {
     "t": "Abstimmung mit Stakeholdern"
    }
   ],
   "ko": [
    "Management",
    "Stakeholder",
    "Entwicklungsteam"
   ]
  },
  "li": [
   [
    "produktvision",
    "vorher",
    "Die Vision liefert die Richtung."
   ],
   [
    "product-backlog",
    "vorher",
    "Das Backlog liefert die Inhalte."
   ],
   [
    "wsjf",
    "vorher",
    "Reihenfolge nach Wert pro Aufwand."
   ],
   [
    "story-mapping",
    "ergaenzt",
    "Releases der Story Map."
   ],
   [
    "sprint-planning",
    "danach",
    "Etappen werden in Sprints umgesetzt."
   ],
   [
    "risikoanalyse",
    "ergaenzt",
    "Risiken beeinflussen die Reihenfolge."
   ]
  ],
  "tools": [
   "Jira",
   "Confluence"
  ],
  "s": "entwurf",
  "vis": "roadmap"
 },
 {
  "id": "sprint-planning",
  "n": "Sprint Planning",
  "c": "plan",
  "f": "meeting",
  "m": "agil",
  "ph": "planen",
  "t": "Meeting",
  "kz": "Sprint Planning",
  "k": "Meeting zu Beginn eines Sprints: Das Team wählt Einträge aus dem Backlog, legt das Sprintziel fest und plant, wie es sie umsetzt.",
  "aufwand": "1 bis 2 Stunden",
  "ab": [
   "Product Owner stellt das Sprintziel und die obersten Einträge vor",
   "Team schätzt Kapazität anhand der Velocity",
   "Team wählt Einträge, die es schaffen kann",
   "Aufgaben zu den Einträgen ableiten",
   "Sprintziel gemeinsam bestätigen"
  ],
  "re": [
   "Nur Einträge, die Ready sind",
   "Das Team entscheidet über den Umfang",
   "Es gibt ein Sprintziel in einem Satz"
  ],
  "bsp": {
   "t": "Sprintziel",
   "x": "Disponentinnen können Touren anlegen und Fahrzeugkonflikte sehen. Gewählt: 5 Stories mit 21 Punkten, Velocity 21."
  },
  "zw": "In der Sprint Planning legt das Team fest, was im kommenden Sprint erreicht werden soll: das Sprintziel, die ausgewählten Backlog-Einträge und den Plan für die Umsetzung. Sie schafft Verbindlichkeit für einen kurzen Zeitraum.",
  "wa": [
   "Zu Beginn jedes Sprints",
   "Wenn Backlog und Kapazität bekannt sind",
   "Als feste Zeremonie im Scrum-Rhythmus"
  ],
  "wn": [
   "Wenn das Backlog nicht vorbereitet ist: zuerst Refinement",
   "Wenn sie zur Pflichtübung ohne Ziel wird"
  ],
  "vb": [
   "Backlog vorsortiert und verfeinert",
   "Velocity der letzten Sprints und Verfügbarkeiten",
   "Product Owner mit Ziel für den Sprint",
   "Zeitbox: bis zu zwei Stunden je Sprintwoche",
   "Board oder Werkzeug öffnen"
  ],
  "nr": "P-05",
  "kt": "Das Team legt fest, was im Sprint erreicht wird: Ziel, Auswahl, Plan.",
  "ks": [
   "Sprintziel formulieren",
   "Einträge auswählen",
   "Kapazität prüfen",
   "Aufgaben herunterbrechen",
   "Sprint-Backlog festhalten"
  ],
  "gw": [
   "Zu Beginn jedes Sprints",
   "Backlog und Kapazität sind bekannt",
   "Als feste Zeremonie im Scrum-Rhythmus"
  ],
  "rg": [
   "Nur Einträge, die Ready sind",
   "Das Team entscheidet über den Umfang",
   "Es gibt ein Sprintziel in einem Satz"
  ],
  "vk": [
   "Backlog vorsortiert und verfeinert",
   "Velocity und Verfügbarkeit kennen"
  ],
  "bn": "Backlog nicht vorbereitet: erst Refinement",
  "pr": "Drei Fragen strukturieren das Treffen: Warum ist der Sprint wertvoll (Sprintziel)? Was kann fertig werden (Auswahl)? Wie wird die Arbeit erledigt (Plan)? Wählen Sie so viel aus, wie das Team nach eigener Einschätzung schafft, nicht mehr. Das Sprintziel gibt Orientierung, wenn sich Details ändern.",
  "em": "Vorher steht ein verfeinertes Backlog mit geschätzten Stories. Danach arbeitet das Team im Sprint, und das Review am Ende prüft das Ergebnis.",
  "qu": [
   "Schwaber, K., Sutherland, J.: The Scrum Guide (2020)",
   "Rubin, K.: Essential Scrum (Addison-Wesley, 2012)",
   "Cohn, M.: Agile Estimating and Planning (2005)"
  ],
  "io": {
   "lf": [
    "Product Owner",
    "Entwicklungsteam"
   ],
   "in": [
    {
     "t": "Geordnetes Backlog",
     "to": "product-backlog",
     "v": "geliefert von"
    },
    {
     "t": "Bereite Stories",
     "to": "refinement",
     "v": "geliefert von"
    },
    {
     "t": "Velocity",
     "to": "story-points",
     "v": "geliefert von"
    },
    {
     "t": "Orientierung",
     "to": "roadmap",
     "v": "geliefert von"
    }
   ],
   "out": [
    {
     "t": "Sprintziel"
    },
    {
     "t": "Sprint-Backlog"
    },
    {
     "t": "Plan für die ersten Aufgaben"
    }
   ],
   "ko": [
    "Entwicklungsteam",
    "Scrum Master",
    "Stakeholder"
   ]
  },
  "li": [
   [
    "product-backlog",
    "vorher",
    "Das Backlog liefert die Auswahl."
   ],
   [
    "refinement",
    "vorher",
    "Das Refinement macht die Einträge bereit."
   ],
   [
    "story-points",
    "vorher",
    "Die Velocity bestimmt den Umfang."
   ],
   [
    "roadmap",
    "vorher",
    "Die Etappe gibt das Ziel."
   ],
   [
    "dor-dod",
    "ergaenzt",
    "Ready und Done leiten die Auswahl."
   ]
  ],
  "tools": [
   "Jira"
  ],
  "s": "entwurf"
 },
 {
  "id": "review",
  "n": "Review / Inspektion",
  "c": "qs",
  "f": "meeting",
  "m": "beide",
  "ph": "absichern",
  "t": "Prüfung",
  "kz": "Review",
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
  "zw": "Ein Review prüft Arbeitsergebnisse wie Anforderungen, Modelle oder Dokumente gemeinsam auf Fehler, Lücken und Widersprüche. Je früher Fehler gefunden werden, desto billiger sind sie zu beheben. Im agilen Kontext gibt es zudem das Sprint Review, in dem das Ergebnis den Stakeholdern gezeigt wird.",
  "wa": [
   "Bevor Anforderungen in die Umsetzung gehen",
   "Bei kritischen Dokumenten wie Pflichtenheft oder Spezifikation",
   "Am Ende eines Sprints mit den Stakeholdern"
  ],
  "wn": [
   "Wenn das Dokument noch in grossen Teilen fehlt",
   "Wenn niemand Zeit zur Vorbereitung hat: oberflächliche Reviews kosten Zeit und finden wenig"
  ],
  "vb": [
   "Prüfgegenstand und Ziel festlegen",
   "Prüfkriterien oder Checkliste vorbereiten (vollständig, eindeutig, prüfbar, widerspruchsfrei)",
   "Rollen verteilen: Autor, Moderation, Prüfende, Protokoll",
   "Unterlagen vorab verteilen und Zeit zum Lesen einplanen",
   "Treffen von 60 bis 90 Minuten"
  ],
  "nr": "A-01",
  "kt": "Arbeitsergebnisse gemeinsam auf Fehler, Lücken und Widersprüche prüfen.",
  "ks": [
   "Gegenstand und Kriterien klären",
   "Rollen verteilen",
   "Vorab lesen",
   "Befunde sammeln, bewerten",
   "Entscheiden, nachprüfen"
  ],
  "gw": [
   "Vor der Umsetzung",
   "Kritische Dokumente prüfen",
   "Am Sprintende mit den Stakeholdern"
  ],
  "rg": [
   "Prüfen, nicht Personen bewerten",
   "Checkliste für Qualitätskriterien",
   "Befunde schriftlich festhalten"
  ],
  "vk": [
   "Prüfgegenstand und Ziel festlegen",
   "Checkliste und Rollen verteilen"
  ],
  "bn": "Das Dokument fehlt noch grösstenteils",
  "pr": "Prüfende lesen vorab und notieren Befunde. Im Treffen werden Befunde gesammelt, nicht diskutiert, wie sie zu beheben sind. Bewerten Sie die Schwere und legen Sie Verantwortliche fest. Prüfen Sie Personen nicht, sondern das Dokument. Bei Mängeln folgt ein Nachreview.",
  "em": "Vorher müssen Akzeptanzkriterien oder ein Pflichtenheft vorliegen. Nachher fliessen Befunde in Änderungen, und die Definition of Done benennt, welche Reviews nötig sind. Prototypen sind eine Alternative, wenn Nutzer das Ergebnis erleben sollen.",
  "qu": [
   "Fagan, M.: Design and code inspections to reduce errors in program development (1976), IBM Systems Journal 15(3)",
   "Gilb, T., Graham, D.: Software Inspection (Addison-Wesley, 1993)",
   "ISO/IEC 20246:2017 – Work product reviews"
  ],
  "io": {
   "lf": [
    "Autor des Prüfgegenstands",
    "Fachbereich",
    "Qualitätssicherung"
   ],
   "in": [
    {
     "t": "Kriterien",
     "to": "akzeptanzkriterien",
     "v": "geliefert von"
    },
    {
     "t": "Dokument",
     "to": "pflichtenheft",
     "v": "geliefert von"
    },
    {
     "t": "Prüfmassstab",
     "to": "dor-dod",
     "v": "geliefert von"
    }
   ],
   "out": [
    {
     "t": "Befundliste mit Schwere"
    },
    {
     "t": "Entscheidung: freigegeben, überarbeiten, abgelehnt"
    },
    {
     "t": "Verbesserte Dokumente"
    }
   ],
   "ko": [
    "Autor",
    "Projektleitung",
    "Entwicklungsteam"
   ]
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
  "f": "methode",
  "m": "beide",
  "ph": "absichern",
  "t": "Validierung",
  "kz": "Prototyping",
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
  "zw": "Prototyping macht Anforderungen früh erlebbar: Nutzer klicken sich durch eine einfache Version und sagen, was passt und was nicht. So werden Missverständnisse entdeckt, bevor teurer Code entsteht. Prototypen reichen von Papierskizzen bis zu klickbaren Entwürfen.",
  "wa": [
   "Wenn Oberfläche und Ablauf noch unklar sind",
   "Wenn Beschreibungen in Worten Missverständnisse erzeugen",
   "Wenn Nutzer Ideen leichter am Bild beurteilen"
  ],
  "wn": [
   "Bei reinen Hintergrundverarbeitungen ohne Oberfläche",
   "Wenn der Prototyp als fertiges Produkt missverstanden wird",
   "Wenn keine Zeit für Rückmeldungen besteht"
  ],
  "vb": [
   "Ziel des Tests und Hypothesen festlegen",
   "Wichtige Abläufe und Aufgaben auswählen",
   "Werkzeug bereitstellen, zum Beispiel Papier, Balsamiq oder Figma",
   "Testpersonen aus der Zielgruppe einladen",
   "Beobachtung und Protokoll organisieren"
  ],
  "nr": "A-02",
  "kt": "Anforderungen erlebbar machen: Nutzer testen eine einfache Version.",
  "ks": [
   "Ziel und Fragen festlegen",
   "Kleinsten Prototyp bauen",
   "Aufgaben testen lassen",
   "Still beobachten",
   "Erkenntnisse festhalten"
  ],
  "gw": [
   "Oberfläche und Ablauf sind unklar",
   "Worte erzeugen Missverständnisse",
   "Wenn Nutzer am Bild besser urteilen"
  ],
  "rg": [
   "So einfach wie möglich",
   "Prototypen werden weggeworfen",
   "Mit Aufgaben testen, nicht nur zeigen"
  ],
  "vk": [
   "Ziel und Hypothesen festlegen",
   "Wichtige Abläufe auswählen"
  ],
  "bn": "Nur Hintergrundverarbeitung ohne Oberfläche",
  "pr": "Bauen Sie so wenig wie nötig, um die Frage zu beantworten. Lassen Sie Testpersonen Aufgaben lösen und beobachten Sie still, anstatt zu erklären. Notieren Sie, wo sie stocken. Fünf Personen decken die meisten Probleme auf. Machen Sie deutlich, dass der Prototyp getestet wird, nicht die Person.",
  "em": "Vorher helfen Personas bei der Auswahl der Testpersonen. Danach schreiben Sie User Stories mit den gelernten Details, und Aktivitätsdiagramme klären Abläufe dahinter.",
  "qu": [
   "Rubin, J., Chisnell, D.: Handbook of Usability Testing, 2. Auflage (Wiley, 2008)",
   "Nielsen, J.: Why You Only Need to Test with 5 Users (2000), nngroup.com",
   "IIBA: BABOK Guide, Version 3 (2015), Technik «Prototyping»"
  ],
  "io": {
   "lf": [
    "Testpersonen aus der Zielgruppe",
    "UX-Design"
   ],
   "in": [
    {
     "t": "Zielgruppenprofile",
     "to": "persona",
     "v": "geliefert von"
    },
    {
     "t": "Hypothesen und Aufgaben"
    },
    {
     "t": "Erste Abläufe",
     "to": "aktivitaetsdiagramm",
     "v": "ergänzt durch"
    }
   ],
   "out": [
    {
     "t": "Rückmeldungen und Beobachtungen"
    },
    {
     "t": "Konkretisierte Anforderungen",
     "to": "user-stories",
     "v": "formuliert als"
    },
    {
     "t": "Validierte Oberflächenentwürfe"
    }
   ],
   "ko": [
    "Entwicklung",
    "UX-Design",
    "Product Owner"
   ]
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
  "f": "artefakt",
  "m": "klassisch",
  "ph": "absichern",
  "t": "Verwaltung",
  "kz": "Traceability",
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
  "zw": "Die Traceability-Matrix verknüpft Anforderungen mit ihrer Herkunft und mit allem, was daraus folgt: Entwurf, Code, Tests. Damit lässt sich prüfen, ob alles umgesetzt und getestet ist, und welche Folgen eine Änderung hat.",
  "wa": [
   "In regulierten Bereichen mit Nachweispflicht",
   "Bei grossen Vorhaben mit vielen Anforderungen und Änderungen",
   "Wenn Auswirkungen von Änderungen abgeschätzt werden müssen"
  ],
  "wn": [
   "Bei kleinen Vorhaben, wo der Pflegeaufwand den Nutzen übersteigt",
   "Wenn Verknüpfungen von Hand gepflegt werden und veralten"
  ],
  "vb": [
   "Festlegen, was verknüpft wird: Quelle, Anforderung, Test",
   "Eindeutige IDs für alle Anforderungen",
   "Werkzeug wählen: Tabelle, Jira-Links oder Anforderungswerkzeug",
   "Verantwortliche für die Pflege bestimmen"
  ],
  "nr": "A-03",
  "kt": "Anforderungen mit Herkunft, Entwurf und Tests verknüpfen. Folgen sichtbar.",
  "ks": [
   "Verknüpfungsziele festlegen",
   "Eindeutige IDs vergeben",
   "Beim Entstehen verknüpfen",
   "Lücken berichten",
   "Bei Änderungen nutzen"
  ],
  "gw": [
   "Nachweispflicht, regulierte Bereiche",
   "Viele Anforderungen und Änderungen",
   "Wenn Auswirkungen von Änderungen zählen"
  ],
  "rg": [
   "IDs bleiben stabil",
   "Nur sinnvolle Beziehungen verfolgen",
   "Tool-gestützt pflegen"
  ],
  "vk": [
   "Festlegen, was verknüpft wird",
   "Eindeutige IDs vergeben"
  ],
  "bn": "Kleines Vorhaben: Pflege lohnt nicht",
  "pr": "Weniger ist mehr: Verknüpfen Sie nur, was Sie später brauchen. Pflegen Sie Verknüpfungen bei der Entstehung, nicht nachträglich. Mit Werkzeugunterstützung erzeugen Sie Berichte wie «Anforderungen ohne Test». Prüfen Sie diese Lücken regelmässig.",
  "em": "Vorher brauchen Sie ein Pflichtenheft oder Stories mit eindeutigen IDs. Danach bildet die Matrix die Grundlage für die Änderungsbewertung und den Abnahmetest.",
  "qu": [
   "Gotel, O., Finkelstein, A.: An Analysis of the Requirements Traceability Problem (1994), ICRE",
   "ISO/IEC/IEEE 29148:2018 – Requirements engineering",
   "Pohl, K., Rupp, C.: Basiswissen Requirements Engineering (dpunkt.verlag)"
  ],
  "io": {
   "lf": [
    "Requirements Engineer",
    "Test",
    "Entwicklung"
   ],
   "in": [
    {
     "t": "Anforderungen mit IDs",
     "to": "pflichtenheft",
     "v": "geliefert von"
    },
    {
     "t": "Testfälle",
     "to": "akzeptanzkriterien",
     "v": "geliefert von"
    },
    {
     "t": "Szenarien",
     "to": "use-cases",
     "v": "geliefert von"
    }
   ],
   "out": [
    {
     "t": "Matrix oder Verknüpfungen im Werkzeug"
    },
    {
     "t": "Auswirkungen von Änderungen",
     "to": "change-management",
     "v": "genutzt in"
    },
    {
     "t": "Nachweis der Abdeckung für die Abnahme",
     "to": "abnahmetest",
     "v": "genutzt in"
    }
   ],
   "ko": [
    "Qualitätssicherung",
    "Auditoren",
    "Projektleitung"
   ]
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
  "s": "entwurf",
  "vis": "trace"
 },
 {
  "id": "change-management",
  "n": "Änderungsmanagement",
  "c": "qs",
  "f": "methode",
  "m": "klassisch",
  "ph": "absichern",
  "t": "Prozess",
  "kz": "Änderungen",
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
  "zw": "Das Änderungsmanagement regelt, wie Änderungswünsche erfasst, bewertet, entschieden und umgesetzt werden. So entsteht keine Anforderungsflut ohne Kontrolle, und Auswirkungen auf Aufwand, Termin und Qualität werden vor der Entscheidung sichtbar.",
  "wa": [
   "Sobald Anforderungen freigegeben sind",
   "Bei Festpreisverträgen und formalen Abnahmen",
   "Wenn mehrere Parteien Änderungen verlangen"
  ],
  "wn": [
   "In rein agilen Teams mit offenem Backlog genügt dessen laufende Pflege",
   "Wenn der Prozess so schwer ist, dass er umgangen wird"
  ],
  "vb": [
   "Verfahren festlegen: Antrag, Bewertung, Entscheid, Umsetzung",
   "Gremium und Entscheidungsrechte klären (Change Control Board)",
   "Vorlage für Änderungsanträge",
   "Werkzeug zur Verfolgung, etwa Jira",
   "Schwellenwerte für die Entscheidungsebene"
  ],
  "nr": "A-04",
  "kt": "Änderungswünsche erfassen, bewerten, entscheiden und umsetzen.",
  "ks": [
   "Antrag mit Begründung erfassen",
   "Auswirkungen prüfen",
   "Gremium entscheidet",
   "Umsetzen und nachführen",
   "Alle informieren"
  ],
  "gw": [
   "Anforderungen sind freigegeben",
   "Festpreis und formale Abnahme",
   "Wenn mehrere Parteien Änderungen verlangen"
  ],
  "rg": [
   "Jede Änderung hat einen Antrag und eine Entscheidung",
   "Nachvollziehbare Historie",
   "Agile Teams: Änderung = neuer Backlog-Eintrag"
  ],
  "vk": [
   "Verfahren und Gremium klären",
   "Vorlage für Änderungsanträge"
  ],
  "bn": "Rein agil: das Backlog genügt",
  "pr": "Jeder Antrag enthält Begründung, Nutzen, betroffene Anforderungen und Aufwandsschätzung. Die Auswirkungsanalyse nutzt die Rückverfolgbarkeit. Entscheiden Sie zeitnah, lange Wartezeiten fördern Umgehung. Halten Sie Entscheidungen fest und informieren Sie alle Betroffenen.",
  "em": "Vorher braucht es ein freigegebenes Pflichtenheft und eine Traceability-Matrix. Im agilen Umfeld übernimmt die Pflege des Backlogs diese Aufgabe.",
  "qu": [
   "IIBA: BABOK Guide, Version 3 (2015), Wissensgebiet «Requirements Life Cycle Management»",
   "Wiegers, K., Beatty, J.: Software Requirements, 3. Auflage (2013), Kapitel «Managing change»",
   "ISO/IEC/IEEE 29148:2018 – Requirements engineering"
  ],
  "io": {
   "lf": [
    "Antragsteller aus dem Fachbereich",
    "Projektleitung"
   ],
   "in": [
    {
     "t": "Auswirkungen",
     "to": "traceability",
     "v": "geliefert von"
    },
    {
     "t": "Freigegebene Anforderungen",
     "to": "pflichtenheft",
     "v": "geliefert von"
    },
    {
     "t": "Änderungsantrag"
    }
   ],
   "out": [
    {
     "t": "Entscheidung mit Begründung"
    },
    {
     "t": "Aktualisierte Anforderungsbasis",
     "to": "pflichtenheft",
     "v": "fortgeschrieben in"
    },
    {
     "t": "Änderungsprotokoll"
    }
   ],
   "ko": [
    "Projektleitung",
    "Entwicklung",
    "Auftraggeber"
   ]
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
 },
 {
  "id": "abnahmetest",
  "n": "Abnahmetest (UAT)",
  "c": "qs",
  "f": "methode",
  "m": "beide",
  "ph": "absichern",
  "t": "Test",
  "kz": "Abnahmetest",
  "k": "Der Fachbereich prüft das fertige System anhand echter Abläufe und entscheidet, ob es die Anforderungen erfüllt und produktiv gehen darf.",
  "aufwand": "Stunden bis Tage",
  "ab": [
   "Testfälle aus Akzeptanzkriterien und Use Cases ableiten",
   "Testdaten und Umgebung vorbereiten",
   "Fachbereich führt die Testfälle aus",
   "Abweichungen erfassen und bewerten",
   "Abnahme entscheiden und festhalten"
  ],
  "re": [
   "Fachseite testet, nicht die Entwicklung",
   "Abnahmekriterien vorher vereinbart",
   "Jede Abweichung wird mit Entscheid dokumentiert"
  ],
  "bsp": {
   "t": "Testfall zur Tourenfreigabe",
   "x": "Disponentin gibt Tour mit Fahrzeugkonflikt frei. Erwartet: Warnung mit Name der Konflikttour. Ergebnis: bestanden."
  },
  "zw": "Der Abnahmetest (User Acceptance Test) prüft, ob das Ergebnis die Erwartungen der Anwender und des Auftraggebers erfüllt und für den Betrieb geeignet ist. Er ist der letzte Schritt vor der Freigabe und gibt dem Fachbereich das Wort.",
  "wa": [
   "Vor jeder Freigabe, auch bei agilen Releases",
   "Wenn der Fachbereich formal abnehmen muss",
   "Bei Verträgen mit Abnahmekriterien"
  ],
  "wn": [
   "Als Ersatz für frühere Tests: er findet Fehler spät und teuer",
   "Wenn Kriterien nicht vorab vereinbart wurden"
  ],
  "vb": [
   "Abnahmekriterien und Testfälle aus Akzeptanzkriterien und Use Cases ableiten",
   "Testumgebung mit realistischen Daten bereitstellen",
   "Testpersonen aus dem Fachbereich einplanen und schulen",
   "Ablauf, Zeitraum und Fehlerklassen festlegen",
   "Meldeweg für Fehler, zum Beispiel Jira"
  ],
  "nr": "A-05",
  "kt": "Anwender prüfen, ob das Ergebnis ihre Erwartungen erfüllt. Letzter Schritt vor Freigabe.",
  "ks": [
   "Kriterien und Testfälle ableiten",
   "Testumgebung bereitstellen",
   "Fachleute testen echte Aufgaben",
   "Fehler klassieren",
   "Entscheid dokumentieren"
  ],
  "gw": [
   "Vor jeder Freigabe",
   "Fachbereich nimmt formal ab",
   "Bei Verträgen mit Abnahmekriterien"
  ],
  "rg": [
   "Fachseite testet, nicht die Entwicklung",
   "Abnahmekriterien vorher vereinbart",
   "Jede Abweichung wird mit Entscheid dokumentiert"
  ],
  "vk": [
   "Testfälle aus Kriterien ableiten",
   "Realistische Daten und Testpersonen"
  ],
  "bn": "Als Ersatz früherer Tests: zu spät",
  "pr": "Fachleute testen echte Aufgaben, nicht Einzelfunktionen. Jeder Fehler wird mit Schritten, Erwartung und Ergebnis erfasst und klassifiziert (Showstopper, schwer, leicht). Legen Sie vorab fest, bei welchen Fehlern die Abnahme verweigert wird. Dokumentieren Sie das Ergebnis mit Unterschrift oder Freigabe im Werkzeug.",
  "em": "Vorher brauchen Sie klare Akzeptanzkriterien und eine Rückverfolgbarkeit von Anforderungen zu Tests. Nachher folgt Freigabe oder Nachbesserung.",
  "qu": [
   "ISTQB: Certified Tester Foundation Level Syllabus (istqb.org), Abnahmetest",
   "Crispin, L., Gregory, J.: Agile Testing (Addison-Wesley, 2009)",
   "IIBA: BABOK Guide, Version 3 (2015), Technik «Akzeptanz- und Bewertungskriterien»"
  ],
  "io": {
   "lf": [
    "Fachbereich und Anwender",
    "Test",
    "Auftraggeber"
   ],
   "in": [
    {
     "t": "Kriterien",
     "to": "akzeptanzkriterien",
     "v": "geliefert von"
    },
    {
     "t": "Szenarien",
     "to": "use-cases",
     "v": "geliefert von"
    },
    {
     "t": "Abdeckung",
     "to": "traceability",
     "v": "geliefert von"
    }
   ],
   "out": [
    {
     "t": "Testprotokoll und Fehlerliste"
    },
    {
     "t": "Abnahmeentscheidung"
    },
    {
     "t": "Freigabe für den Betrieb"
    }
   ],
   "ko": [
    "Auftraggeber",
    "Betrieb",
    "Projektleitung"
   ]
  },
  "li": [
   [
    "akzeptanzkriterien",
    "vorher",
    "Kriterien liefern die Testfälle."
   ],
   [
    "use-cases",
    "vorher",
    "Abläufe liefern die Testfälle."
   ],
   [
    "review",
    "ergaenzt",
    "Review prüft Dokumente, UAT das System."
   ],
   [
    "dor-dod",
    "ergaenzt",
    "Die Abnahme ist Teil von Done."
   ],
   [
    "traceability",
    "ergaenzt",
    "Tests mit Anforderungen verknüpfen."
   ]
  ],
  "tools": [
   "Jira",
   "Cucumber"
  ],
  "s": "entwurf"
 },
 {
  "id": "jira",
  "n": "Jira",
  "c": "tool",
  "f": "werkzeug",
  "m": "beide",
  "ph": "alle",
  "t": "Ticketsystem",
  "kz": "",
  "k": "Ticket- und Projektwerkzeug von Atlassian. Im agilen Umfeld verwaltet es Backlog, Sprints und Aufgaben.",
  "aufwand": "",
  "ab": [
   "Backlog und Stories erfassen und priorisieren",
   "Sprints planen und Boards führen",
   "Akzeptanzkriterien und Schätzungen an Tickets festhalten",
   "Berichte wie Burndown und Velocity auswerten"
  ],
  "re": [
   "Viele Einstellungen, braucht eine klare Konvention im Team",
   "Für Modelle und Zeichnungen nur Anhänge",
   "Lizenzkosten pro Nutzer"
  ],
  "bsp": null,
  "zw": "Jira ist ein Ticketsystem von Atlassian, das im agilen Umfeld Backlog, Sprints und Aufgaben verwaltet. Es ist der Ort, an dem Stories, Schätzungen und Status zusammenlaufen.",
  "wa": [
   "Wenn das Team in Sprints arbeitet und Backlog, Board und Berichte braucht",
   "Wenn Aufgaben nachvollziehbar mit Stories und Fehlern verknüpft werden sollen"
  ],
  "wn": [
   "Für Zeichnungen und Modelle, dort ist Miro oder draw.io besser",
   "Wenn niemand Konventionen pflegt: Jira wird sonst unübersichtlich"
  ],
  "vb": [],
  "nr": "W-01",
  "kt": "Ticketsystem für Backlog, Sprints und Aufgaben im agilen Team.",
  "ks": [
   "Backlog und Stories führen",
   "Sprints und Boards planen",
   "Kriterien an Tickets halten",
   "Burndown und Velocity auswerten"
  ],
  "gw": [
   "Sprints mit Backlog, Board, Berichten",
   "Tickets mit Stories und Fehlern verknüpfen",
   "Wenn Aufgaben nachvollziehbar sein müssen"
  ],
  "rg": [
   "Viele Einstellungen, braucht eine klare Konvention im Team",
   "Für Modelle und Zeichnungen nur Anhänge",
   "Lizenzkosten pro Nutzer"
  ],
  "vk": [],
  "bn": "Für Zeichnungen: besser Miro oder draw.io",
  "pr": "",
  "em": "",
  "qu": [
   "Atlassian: Jira Software Dokumentation (atlassian.com)",
   "Atlassian: Agile Coach (atlassian.com)"
  ],
  "io": null,
  "li": [],
  "tools": [],
  "s": "entwurf",
  "sp": [
   "abnahmetest",
   "change-management",
   "review",
   "traceability",
   "akzeptanzkriterien",
   "story-splitting",
   "user-stories",
   "product-backlog",
   "refinement",
   "roadmap",
   "sprint-planning",
   "story-points"
  ]
 },
 {
  "id": "miro",
  "n": "Miro",
  "c": "tool",
  "f": "werkzeug",
  "m": "beide",
  "ph": "alle",
  "t": "Digitales Whiteboard",
  "kz": "",
  "k": "Unendliche Online-Fläche für Workshops mit Haftnotizen, Diagrammen und Vorlagen. Mehrere Personen arbeiten gleichzeitig.",
  "aufwand": "",
  "ab": [
   "Workshops mit Haftnotizen und Clustern durchführen",
   "Story Maps, Impact Maps und Canvas-Vorlagen füllen",
   "Abstimmungen und Zeitboxen im Workshop nutzen",
   "Ergebnisse als Bild oder Link teilen"
  ],
  "re": [
   "Ergebnisse sind schwer versionierbar",
   "Bei sehr grossen Boards wird es unübersichtlich",
   "Keine Verbindung zur Anforderungsverwaltung ohne Zusatz"
  ],
  "bsp": null,
  "zw": "Miro ist ein digitales Whiteboard mit unendlicher Fläche für Workshops. Haftnotizen, Diagramme und Vorlagen werden gleichzeitig von mehreren Personen bearbeitet, auch aus der Ferne.",
  "wa": [
   "Für Workshops mit verteilten Teams",
   "Für Event Storming, Story Mapping, Impact Maps und Canvas-Vorlagen"
  ],
  "wn": [
   "Wenn Ergebnisse versioniert und nachgewiesen werden müssen",
   "Bei sehr grossen Boards wird die Übersicht schwierig"
  ],
  "vb": [],
  "nr": "W-02",
  "kt": "Digitales Whiteboard für Workshops mit Haftnotizen, Diagrammen und Vorlagen.",
  "ks": [
   "Workshops mit Haftnotizen",
   "Story Maps, Impact Maps, Canvas",
   "Abstimmen und Zeitboxen",
   "Ergebnisse als Link teilen"
  ],
  "gw": [
   "Workshops mit verteilten Teams",
   "Event Storming, Story Maps, Canvas",
   "Für Vorlagen wie Canvas und Impact Map"
  ],
  "rg": [
   "Ergebnisse sind schwer versionierbar",
   "Bei sehr grossen Boards wird es unübersichtlich",
   "Keine Verbindung zur Anforderungsverwaltung ohne Zusatz"
  ],
  "vk": [],
  "bn": "Ergebnisse müssen versioniert sein",
  "pr": "",
  "em": "",
  "qu": [
   "Miro: Hilfe und Vorlagen (miro.com)",
   "Miro: Workshop-Vorlagen im Template-Katalog (miro.com)"
  ],
  "io": null,
  "li": [],
  "tools": [],
  "s": "entwurf",
  "sp": [
   "produktvision",
   "story-splitting",
   "event-storming",
   "five-whys",
   "interview",
   "persona",
   "stakeholder",
   "swot",
   "workshop",
   "aktivitaetsdiagramm",
   "business-model-canvas",
   "impact-mapping",
   "kontextdiagramm",
   "refinement",
   "story-mapping",
   "moscow",
   "risikoanalyse"
  ]
 },
 {
  "id": "drawio",
  "n": "draw.io",
  "c": "tool",
  "f": "werkzeug",
  "m": "beide",
  "ph": "alle",
  "t": "Diagrammwerkzeug",
  "kz": "",
  "k": "Kostenloses Zeichenwerkzeug für UML, BPMN und Flussdiagramme. Läuft im Browser oder lokal, Dateien lassen sich im Repo ablegen.",
  "aufwand": "",
  "ab": [
   "Aktivitäts-, Use-Case- und Zustandsdiagramme zeichnen",
   "BPMN-Prozesse mit Standardformen zeichnen",
   "Diagramme als Bild oder PDF exportieren",
   "Dateien im Repository versionieren"
  ],
  "re": [
   "Keine Modellprüfung, nur Zeichnen",
   "Kein gemeinsames Modell hinter den Diagrammen",
   "Layout muss von Hand gepflegt werden"
  ],
  "bsp": null,
  "zw": "draw.io (diagrams.net) ist ein kostenloses Zeichenwerkzeug für UML, BPMN und Flussdiagramme. Es läuft im Browser oder lokal, und die Dateien lassen sich im Repository ablegen.",
  "wa": [
   "Für Diagramme, die versioniert und geteilt werden sollen",
   "Wenn keine Lizenzkosten anfallen sollen"
  ],
  "wn": [
   "Wenn Modelle geprüft und verknüpft werden sollen: dafür ein Modellierungswerkzeug",
   "Bei Diagrammen, die vollautomatisch aus Text entstehen sollen: dann PlantUML"
  ],
  "vb": [],
  "nr": "W-03",
  "kt": "Kostenloses Zeichenwerkzeug für UML, BPMN und Flussdiagramme.",
  "ks": [
   "UML- und BPMN-Diagramme zeichnen",
   "Als Bild oder PDF exportieren",
   "Dateien im Repository ablegen",
   "Ohne Lizenzkosten nutzen"
  ],
  "gw": [
   "Diagramme teilen und versionieren",
   "Keine Lizenzkosten gewünscht",
   "Für einfache Diagramme ohne Lizenzkosten"
  ],
  "rg": [
   "Keine Modellprüfung, nur Zeichnen",
   "Kein gemeinsames Modell hinter den Diagrammen",
   "Layout muss von Hand gepflegt werden"
  ],
  "vk": [],
  "bn": "Modelle sollen geprüft und verknüpft werden",
  "pr": "",
  "em": "",
  "qu": [
   "diagrams.net: Dokumentation (diagrams.net)",
   "JGraph Ltd.: draw.io Handbuch (drawio.com)"
  ],
  "io": null,
  "li": [],
  "tools": [],
  "s": "entwurf",
  "sp": [
   "aktivitaetsdiagramm",
   "bpmn",
   "domaenenmodell",
   "impact-mapping",
   "kontextdiagramm",
   "use-case-diagramm",
   "zustandsdiagramm"
  ]
 },
 {
  "id": "plantuml",
  "n": "PlantUML",
  "c": "tool",
  "f": "werkzeug",
  "m": "beide",
  "ph": "alle",
  "t": "Diagramme aus Text",
  "kz": "",
  "k": "Erzeugt UML-Diagramme aus einer Textbeschreibung. Die Quelle ist versionierbar und lässt sich leicht anpassen.",
  "aufwand": "",
  "ab": [
   "Aktivitäts-, Sequenz- und Zustandsdiagramme als Text beschreiben",
   "Diagramme direkt in Dokumentation einbetten",
   "Änderungen im Repository nachvollziehen",
   "Domänenmodelle als Klassendiagramm darstellen"
  ],
  "re": [
   "Layout nur begrenzt steuerbar",
   "Einarbeitung in die Syntax nötig",
   "Für Fachbereich weniger zugänglich"
  ],
  "bsp": null,
  "zw": "PlantUML erzeugt UML-Diagramme aus einer Textbeschreibung. Die Quelle ist versionierbar, vergleichbar und leicht anzupassen.",
  "wa": [
   "Wenn Diagramme im Repository mit dem Code gepflegt werden sollen",
   "Wenn Änderungen nachvollzogen werden müssen"
  ],
  "wn": [
   "Wenn Fachleute ohne Technikhintergrund zeichnen sollen",
   "Wenn das Layout genau gesteuert werden muss"
  ],
  "vb": [],
  "nr": "W-04",
  "kt": "Diagramme aus Text: versionierbar und leicht anzupassen.",
  "ks": [
   "Diagramme als Text beschreiben",
   "In Dokumentation einbetten",
   "Änderungen nachvollziehen",
   "Klassen und Zustände darstellen"
  ],
  "gw": [
   "Diagramme liegen im Code-Repository",
   "Änderungen müssen nachvollziehbar sein",
   "Wenn Diagramme als Text gepflegt werden"
  ],
  "rg": [
   "Layout nur begrenzt steuerbar",
   "Einarbeitung in die Syntax nötig",
   "Für Fachbereich weniger zugänglich"
  ],
  "vk": [],
  "bn": "Fachleute ohne Technik sollen zeichnen",
  "pr": "",
  "em": "",
  "qu": [
   "PlantUML: Sprachreferenz (plantuml.com)",
   "PlantUML: Sprachreferenzhandbuch (plantuml.com)"
  ],
  "io": null,
  "li": [],
  "tools": [],
  "s": "entwurf",
  "sp": [
   "aktivitaetsdiagramm",
   "domaenenmodell",
   "kontextdiagramm",
   "use-case-diagramm",
   "zustandsdiagramm"
  ]
 },
 {
  "id": "confluence",
  "n": "Confluence",
  "c": "tool",
  "f": "werkzeug",
  "m": "beide",
  "ph": "alle",
  "t": "Wiki",
  "kz": "",
  "k": "Wiki von Atlassian für Dokumentation, Protokolle und Spezifikationen. Eng mit Jira verbunden.",
  "aufwand": "",
  "ab": [
   "Spezifikationen, Glossar und Regeln pflegen",
   "Workshop-Ergebnisse und Protokolle ablegen",
   "Seiten kommentieren und gemeinsam bearbeiten",
   "Jira-Tickets in Seiten einbetten"
  ],
  "re": [
   "Struktur verwildert ohne Pflege",
   "Keine strenge Versionierung wie ein Repository",
   "Suche liefert bei grossen Beständen viel Rauschen"
  ],
  "bsp": null,
  "zw": "Confluence ist ein Wiki von Atlassian für Dokumentation, Protokolle und Spezifikationen, eng verbunden mit Jira.",
  "wa": [
   "Wenn Wissen gemeinsam gepflegt und gefunden werden soll",
   "Wenn Dokumentation mit Tickets verbunden sein soll"
  ],
  "wn": [
   "Wenn strenge Versionierung wie in einem Repository nötig ist",
   "Ohne Struktur und Pflege wird das Wiki unübersichtlich"
  ],
  "vb": [],
  "nr": "W-05",
  "kt": "Wiki für Dokumentation, Protokolle und Spezifikationen, eng mit Jira verbunden.",
  "ks": [
   "Spezifikationen und Glossar pflegen",
   "Protokolle ablegen",
   "Gemeinsam kommentieren",
   "Jira-Tickets einbetten"
  ],
  "gw": [
   "Wissen gemeinsam pflegen und finden",
   "Doku mit Tickets verbinden",
   "Wenn Doku und Tickets zusammengehören"
  ],
  "rg": [
   "Struktur verwildert ohne Pflege",
   "Keine strenge Versionierung wie ein Repository",
   "Suche liefert bei grossen Beständen viel Rauschen"
  ],
  "vk": [],
  "bn": "Strenge Versionierung wie im Repository",
  "pr": "",
  "em": "",
  "qu": [
   "Atlassian: Confluence Dokumentation (atlassian.com)",
   "Atlassian: Confluence Vorlagen (atlassian.com)"
  ],
  "io": null,
  "li": [],
  "tools": [],
  "s": "entwurf",
  "sp": [
   "review",
   "geschaeftsregeln",
   "glossar",
   "pflichtenheft",
   "produktvision",
   "use-cases",
   "dokumentenanalyse",
   "business-model-canvas",
   "roadmap"
  ]
 },
 {
  "id": "figma",
  "n": "Figma",
  "c": "tool",
  "f": "werkzeug",
  "m": "beide",
  "ph": "alle",
  "t": "Designwerkzeug",
  "kz": "",
  "k": "Online-Werkzeug für Oberflächenentwürfe und klickbare Prototypen. Mehrere Personen arbeiten gleichzeitig.",
  "aufwand": "",
  "ab": [
   "Wireframes und klickbare Prototypen bauen",
   "Nutzertests mit dem Prototyp durchführen",
   "Personas und Journey Maps gestalten",
   "Entwürfe mit Kommentaren abstimmen"
  ],
  "re": [
   "Gestaltungsarbeit braucht Übung",
   "Nicht für Anforderungsverwaltung gedacht",
   "Lizenzkosten für Teams"
  ],
  "bsp": null,
  "zw": "Figma ist ein Online-Werkzeug für Oberflächenentwürfe und klickbare Prototypen. Mehrere Personen arbeiten gleichzeitig an einer Datei.",
  "wa": [
   "Wenn Entwürfe früh mit Nutzern getestet werden sollen",
   "Wenn Design und Anforderungen eng zusammenarbeiten"
  ],
  "wn": [
   "Als Ersatz für eine Anforderungsverwaltung",
   "Wenn nur einfache Skizzen nötig sind: Papier genügt"
  ],
  "vb": [],
  "nr": "W-06",
  "kt": "Online-Werkzeug für Oberflächenentwürfe und klickbare Prototypen.",
  "ks": [
   "Wireframes und Prototypen bauen",
   "Nutzertests durchführen",
   "Personas und Journeys gestalten",
   "Entwürfe kommentieren"
  ],
  "gw": [
   "Entwürfe früh mit Nutzern testen",
   "Design und Anforderungen arbeiten zusammen",
   "Wenn Design und Anforderungen zusammenwirken"
  ],
  "rg": [
   "Gestaltungsarbeit braucht Übung",
   "Nicht für Anforderungsverwaltung gedacht",
   "Lizenzkosten für Teams"
  ],
  "vk": [],
  "bn": "Als Ersatz für Anforderungsverwaltung",
  "pr": "",
  "em": "",
  "qu": [
   "Figma: Hilfe-Center (help.figma.com)",
   "Figma: Learn Design Prototyping (figma.com)"
  ],
  "io": null,
  "li": [],
  "tools": [],
  "s": "entwurf",
  "sp": [
   "prototyping",
   "persona"
  ]
 },
 {
  "id": "cucumber",
  "n": "Cucumber",
  "c": "tool",
  "f": "werkzeug",
  "m": "beide",
  "ph": "alle",
  "t": "Testautomatisierung",
  "kz": "",
  "k": "Führt Akzeptanzkriterien im Format Gegeben, Wenn, Dann (Gherkin) als automatische Tests aus. Verbindet Anforderung und Test.",
  "aufwand": "",
  "ab": [
   "Szenarien in Gherkin schreiben",
   "Schritte mit Testcode verbinden",
   "Szenarien bei jedem Build ausführen",
   "Ergebnisse als lebende Dokumentation nutzen"
  ],
  "re": [
   "Braucht Disziplin bei der Formulierung",
   "Entwicklungsaufwand für den Testcode",
   "Zu viele Szenarien verlangsamen den Build"
  ],
  "bsp": null,
  "zw": "Cucumber führt Akzeptanzkriterien im Format Gegeben-Wenn-Dann (Gherkin) als automatisierte Tests aus. So verbindet es Anforderung und Test in einer lesbaren Form.",
  "wa": [
   "Wenn Kriterien als lebende Dokumentation gelten sollen",
   "Wenn Fachbereich, Test und Entwicklung dieselben Szenarien nutzen"
  ],
  "wn": [
   "Wenn niemand die Szenarien pflegt: Pflegeaufwand wächst",
   "Bei sehr vielen Szenarien, die den Build verlangsamen"
  ],
  "vb": [],
  "nr": "W-07",
  "kt": "Führt Kriterien im Format Gegeben-Wenn-Dann als automatische Tests aus.",
  "ks": [
   "Szenarien in Gherkin schreiben",
   "Mit Testcode verbinden",
   "Bei jedem Build ausführen",
   "Als lebende Dokumentation nutzen"
  ],
  "gw": [
   "Kriterien als lebende Dokumentation",
   "Fachbereich, Test, Entwicklung teilen Szenarien",
   "Wenn Fachbereich und Test Szenarien teilen"
  ],
  "rg": [
   "Braucht Disziplin bei der Formulierung",
   "Entwicklungsaufwand für den Testcode",
   "Zu viele Szenarien verlangsamen den Build"
  ],
  "vk": [],
  "bn": "Niemand pflegt die Szenarien",
  "pr": "",
  "em": "",
  "qu": [
   "Cucumber: Dokumentation (cucumber.io)",
   "Wynne, M., Hellesøy, A.: The Cucumber Book (Pragmatic Bookshelf, 2012)"
  ],
  "io": null,
  "li": [],
  "tools": [],
  "s": "entwurf",
  "sp": [
   "abnahmetest",
   "akzeptanzkriterien"
  ]
 },
 {
  "id": "enterprise-architect",
  "n": "Enterprise Architect",
  "c": "tool",
  "f": "werkzeug",
  "m": "beide",
  "ph": "alle",
  "t": "Modellierungswerkzeug",
  "kz": "",
  "k": "Umfassendes Modellierungswerkzeug für UML, BPMN und Anforderungen mit gemeinsamem Modell und Rückverfolgbarkeit.",
  "aufwand": "",
  "ab": [
   "Use Cases, Aktivitäts- und Zustandsdiagramme modellieren",
   "Anforderungen mit Modellelementen verknüpfen",
   "Berichte und Dokumente aus dem Modell erzeugen",
   "Modelle im Team gemeinsam pflegen"
  ],
  "re": [
   "Hoher Einarbeitungsaufwand",
   "Lizenzkosten",
   "Für kleine Vorhaben oft zu schwergewichtig"
  ],
  "bsp": null,
  "zw": "Enterprise Architect ist ein umfassendes Modellierungswerkzeug für UML, BPMN und Anforderungen mit einem gemeinsamen Modell und Rückverfolgbarkeit.",
  "wa": [
   "Bei grossen Vorhaben mit gemeinsamem Modell",
   "Wenn Berichte und Dokumente aus dem Modell erzeugt werden sollen"
  ],
  "wn": [
   "Bei kleinen Vorhaben: oft zu schwergewichtig",
   "Wenn der Einarbeitungsaufwand nicht gerechtfertigt ist"
  ],
  "vb": [],
  "nr": "W-08",
  "kt": "Modellierungswerkzeug für UML, BPMN und Anforderungen mit gemeinsamem Modell.",
  "ks": [
   "UML und BPMN modellieren",
   "Anforderungen verknüpfen",
   "Berichte aus dem Modell",
   "Im Team gemeinsam pflegen"
  ],
  "gw": [
   "Grosse Vorhaben mit gemeinsamem Modell",
   "Berichte aus dem Modell erzeugen",
   "Wenn Doku aus dem Modell entstehen soll"
  ],
  "rg": [
   "Hoher Einarbeitungsaufwand",
   "Lizenzkosten",
   "Für kleine Vorhaben oft zu schwergewichtig"
  ],
  "vk": [],
  "bn": "Kleine Vorhaben: oft zu schwergewichtig",
  "pr": "",
  "em": "",
  "qu": [
   "Sparx Systems: Enterprise Architect Benutzerhandbuch (sparxsystems.com)",
   "Sparx Systems: Enterprise Architect Dokumentation (sparxsystems.com)"
  ],
  "io": null,
  "li": [],
  "tools": [],
  "s": "entwurf",
  "sp": [
   "use-cases",
   "aktivitaetsdiagramm",
   "domaenenmodell",
   "use-case-diagramm",
   "zustandsdiagramm"
  ]
 }
];
const SETS = [{"id":"workshop-koffer","n":"Workshop-Koffer","m":"W","s":["workshop","event-storming","story-mapping","impact-mapping","moscow","persona","miro"]},{"id":"backlog-aufbauen","n":"Backlog aufbauen","m":"B","s":["persona","user-stories","akzeptanzkriterien","story-splitting","story-mapping","product-backlog","refinement","dor-dod"]},{"id":"schaetzen-planen","n":"Schätzen und Planen","m":"S","s":["planning-poker","story-points","wsjf","roadmap","sprint-planning","risikoanalyse"]},{"id":"spezifikation-klassisch","n":"Spezifikation klassisch","m":"K","s":["kontextdiagramm","use-case-diagramm","use-cases","aktivitaetsdiagramm","nfr","pflichtenheft","review","traceability"]},{"id":"prozesse-verstehen","n":"Prozesse verstehen","m":"P","s":["beobachtung","event-storming","aktivitaetsdiagramm","bpmn","geschaeftsregeln","glossar"]}];
