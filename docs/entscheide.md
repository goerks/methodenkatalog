# Getroffene Entscheide (nicht ohne Anlass neu aufrollen)

Stand 2026-11-09. Reihenfolge ungefähr chronologisch.

## Plattform und Aufbau
- Statische Seite ohne Framework (`index.html`, `css/`, `js/`, `data/catalog.js`), Hash-Routing, Veröffentlichung per GitHub Actions auf GitHub Pages.
- Eine Markdown-Datei pro Methode (`methoden/<kategorie>/<id>.md`), `tools/build.mjs` prüft und erzeugt `data/catalog.js`.
- Startseite ist die Wissenslandkarte (Kräftemodell), Farbe = Phase, Form = Typ. Zusätzlich Kategorien, Phasen, Alle Methoden, Karten, Suche mit Vorschlägen.
- Referenzen: Detailseite zeigt den Block «Einordnung» (Davor bis 2, Danach bis 3, Alternativen bis 2 mit Begründung). `ergänzt`-Verknüpfungen nur auf der Karte (Schalter) und im Seitenpanel. Zusammenhänge als SIPOC oder einfache Liste umschaltbar («Du brauchst / Du erhältst»).

## Gestaltung
- Grafikstil: **«Dezent»** (leicht unruhige, handgezeichnete Linien, offene Pfeile, hellgrauer versetzter Schatten), für alle Grafiken. Keine Excalidraw-Schrift im Produkt.
- Seiten, Karten, Factsheets: Design **«Linie und Schatten»** (Linien statt Flächen, hellgrauer Schatten, Tokens `--sh`, `--v-*`, Dark Mode vorhanden).
- Icon und Favicon: **Kartenstapel** (Variante 2).
- Canvas-Grafiken (BMC, Lean Canvas, VPC, Empathy Map, Vision Board, Journey Map, SWOT): alle benannten Teilbereiche mit vollen Namen, Reihenfolge-Nummern nach dem Ablauf, keine erklärenden Texte.
- Responsive: stufenlose Skala (Basisschrift 15 bis 17 px, Abstände über `--gut`, `--gap`, `--sec`), Karten einspaltig auf dem Handy. Druck unverändert gelassen.

## Karten und Druck
- A4 quer, 4 × 2 Karten à 65,75 × 94 mm, 6 mm Siegelrand, Duplex über die kurze Kante, Rückseiten gespiegelt. Kartenvariante **B** (Zusammenfassung, Einsetzen wenn, Ablauf, Regeln). Versatz der Rückseite in mm einstellbar, Fadenkreuz im Testblatt.
- Kartennummern `Phase-Nummer` sind stabil.

## Factsheet
- Pro Methode ein A4-hoch-Blatt, Schrift nicht gross, Abstand Titel zu Inhalt knapp. Automatische Anpassung (`Factsheet.fit`): möglichst eine Seite; zweite Seite nur, wenn sie sinnvoll zur Hälfte gefüllt ist (nicht für ein, zwei Zeilen). Alle 92 passen derzeit auf eine Seite.

## Inhalt
- 82 Methoden, 10 Werkzeuge. Zuletzt neu (2026-11-02): Gap-Analyse, Root-Cause-Analyse, Prozessanalyse, Design Thinking, Lean Canvas, Klassendiagramm, Zielmodell, Capability Map, Feature Tree (statt «Stakeholder-Map», die es schon gibt), Wireframes, Gherkin/BDD, Anforderungsschablonen, SRS, Wert-Aufwand-Matrix, Cost of Delay, Anforderungsreview, Konfliktlösung, MVP/PoC; Werkzeuge Azure DevOps und Balsamiq. Werkzeuge bewusst klein halten.
- Kartensets: Workshop-Koffer, Backlog aufbauen, Schätzen und Planen, Spezifikation klassisch, Prozesse verstehen.
