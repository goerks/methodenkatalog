---
name: Example Mapping
kurz: Example Mapping
kategorie: dokumentieren
vorgehen: agil
phase: spezifizieren
typ: Workshop-Technik
form: meeting
aufwand: 25 bis 30 Min. je Story
werkzeuge: [Miro, Cucumber]
reihenfolge: 11
status: entwurf
karte: S-15
---

Kurzes Gespräch zu einer Story mit Karten für Story, Regeln, Beispiele und offene Fragen.

## Wofür
Beim Example Mapping besprechen Product Owner, Entwicklung und Test eine Story in 25 Minuten anhand von vier Kartenfarben: Story, Regeln, Beispiele und Fragen. Konkrete Beispiele machen Regeln prüfbar und decken Lücken auf. Das Ergebnis sind klare Akzeptanzkriterien, oder die Erkenntnis, dass die Story noch nicht bereit ist.

## Wann sinnvoll
- Im Refinement, bevor eine Story in den Sprint kommt
- Wenn Regeln einer Story unklar oder widersprüchlich wirken
- Wenn Akzeptanzkriterien als Beispiele formuliert werden sollen

## Wann besser nicht
- Bei rein technischen Aufgaben ohne fachliche Regeln
- Wenn die Fachperson für Rückfragen fehlt
- Wenn die Story zu gross ist: dann zuerst Story Splitting

## Vorbereitung
- Story mit Nutzen und Rolle bereithalten
- Product Owner, Entwicklung und Test einladen
- Karten in vier Farben bereitlegen: Story, Regeln, Beispiele, Fragen
- Zeitbox von 25 Minuten festlegen
- Moderation bestimmen

## Ablauf
1. Story auf eine gelbe Karte schreiben
2. Regeln auf blaue Karten sammeln
3. Je Regel Beispiele auf grüne Karten schreiben
4. Offene Fragen auf rote Karten festhalten
5. Entscheiden: bereit, mehr Klärung oder teilen

## Regeln
- Höchstens 25 Minuten je Story
- Beispiele sind konkret, mit Namen und Werten
- Viele rote Karten heissen: Story ist nicht bereit
- Zu viele Regeln heissen: Story teilen

## In der Praxis
Die Farben sind das Steuerungsinstrument: Viele rote Karten zeigen fehlendes Wissen, viele blaue eine zu grosse Story. Fordern Sie für jede Regel mindestens ein konkretes Beispiel und, wenn möglich, ein Gegenbeispiel. Halten Sie sich an die Zeitbox, sonst wird aus dem Mapping ein langes Meeting. Aus den Beispielen lassen sich Akzeptanzkriterien oder automatisierte Tests schreiben.

## Beispiel: Konfliktwarnung
Story: Warnung bei doppelter Belegung. Regel 1: gleiches Fahrzeug, überlappende Zeit. Beispiel: Fahrzeug A, Tour 1 8 bis 12 Uhr, Tour 2 11 bis 15 Uhr → Warnung. Gegenbeispiel: 8 bis 12 und 12 bis 15 Uhr → keine Warnung. Frage (rot): Gilt das auch für Anhänger?

## Empfehlung
Vorher sammelt das Refinement die Stories. Danach schreiben Sie die Beispiele als Akzeptanzkriterien auf. Bei grossen Stories zuerst teilen.

## Lieferanten
- Product Owner
- Entwicklung und Test

## Eingaben
- Story >> [[user-stories]] geliefert von
- Backlog-Reihenfolge >> [[refinement]] geliefert von
- Regeln aus dem Fachbereich >> [[geschaeftsregeln]] ergänzt durch

## Ergebnisse
- Regeln und konkrete Beispiele
- Akzeptanzkriterien >> [[akzeptanzkriterien]] ausformuliert in
- Offene Fragen und Entscheid zur Bereitschaft

## Konsumenten
- Entwicklungsteam
- Product Owner
- Test

## Verknüpfungen
- vorher: [[user-stories]] Die Story ist der Ausgangspunkt.
- vorher: [[refinement]] Im Refinement wird Example Mapping eingesetzt.
- danach: [[akzeptanzkriterien]] Die Beispiele werden zu Akzeptanzkriterien.
- alternative: [[story-splitting]] Zu grosse Stories werden zuerst geteilt.
- ergaenzt: [[geschaeftsregeln]] Die Regeln lassen sich in einem Regelkatalog sammeln.

## Karte
Teaser: 25 Minuten, vier Kartenfarben: Story, Regeln, Beispiele, Fragen. Zeigt, ob eine Story bereit ist.
Gut wenn: Im Refinement vor dem Sprint | Regeln einer Story sind unklar | Beispiele statt Prosa-Kriterien
Vorher: Story mit Nutzen bereithalten | Drei Rollen einladen
Besser nicht: Rein technische Aufgabe ohne Regeln
Regeln: Höchstens 25 Minuten je Story | Beispiele sind konkret | Viele Fragen: Story nicht bereit
- Story auf Karte schreiben
- Regeln sammeln
- Beispiele je Regel notieren
- Offene Fragen festhalten
- Bereit, klären oder teilen

## Quellen
- Wynne, M.: Introducing Example Mapping (Cucumber Blog, 2015)
- Smart, J. F.: BDD in Action (Manning, 2. Auflage 2023)
- Adzic, G.: Specification by Example (Manning, 2011)
