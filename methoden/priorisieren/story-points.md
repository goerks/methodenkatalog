---
name: Story Points
kurz: Story Points
kategorie: priorisieren
vorgehen: agil
phase: bewerten
typ: Schätzeinheit
form: methode
aufwand: Laufend
werkzeuge: [Jira, Azure DevOps, Burndown-Chart]
reihenfolge: 5
status: entwurf
karte: B-05
---

Relative Einheit für Grösse und Komplexität einer Story, unabhängig von Stunden. Mit der Velocity wird planbar.

## Wofür
Story Points messen den relativen Aufwand einer Story, einschliesslich Umfang, Komplexität und Unsicherheit, nicht Stunden. Mit der Zeit zeigt die Velocity, wie viele Punkte das Team pro Sprint schafft, und erlaubt Prognosen.

## Wann sinnvoll
- Wenn das Team in Sprints arbeitet und Prognosen braucht
- Wenn Stundenschätzungen trügerisch genau wirken
- Wenn die Planung auf Erfahrung des Teams beruhen soll

## Wann besser nicht
- Wenn Kunden Festpreis nach Stunden verlangen
- Bei sehr wenigen Daten zu Beginn, die Prognose bleibt dann grob
- Wenn Punkte zwischen Teams verglichen werden: sie sind teamspezifisch

## Vorbereitung
- Referenzstories festlegen, zum Beispiel eine kleine mit 2 und eine mittlere mit 5 Punkten
- Skala vereinbaren (Fibonacci)
- Werkzeug für Velocity und Burndown wählen
- Team in die Bedeutung der Punkte einführen

## Ablauf
1. Referenzstory festlegen (z. B. 3 Punkte)
2. Neue Stories relativ dazu schätzen
3. Fertige Punkte pro Sprint zählen (Velocity)
4. Velocity mitteln
5. Release mit Velocity planen

## Regeln
- Punkte gelten nur innerhalb eines Teams
- Nicht in Stunden umrechnen
- Nur fertige Stories zählen
- Nicht als Leistungsmessung nutzen

## In der Praxis
Punkte sind relativ: Eine 8 ist ungefähr viermal so viel wie eine 2. Sie gehören dem Team, andere nutzen sie nicht als Leistungsmass. Die Velocity ist der Durchschnitt der letzten drei bis fünf Sprints. Rechnen Sie nicht auf Stunden um, das zerstört den Nutzen.

## Beispiel: Velocity
Letzte drei Sprints: 21, 24, 18 Punkte → Velocity 21. Backlog mit 84 Punkten braucht etwa 4 Sprints.

## Empfehlung
Vorher schätzt das Team mit Planning Poker. Danach nutzen Sie die Punkte im Backlog und in der Sprintplanung und als Aufwand für WSJF.

## Lieferanten
- Entwicklungsteam
- Product Owner

## Eingaben
- Schätzrunde >> [[planning-poker]] geliefert von
- Stories >> [[user-stories]] geliefert von
- Referenzstories

## Ergebnisse
- Punkte je Story
- Velocity des Teams
- Aufwand im Backlog >> [[product-backlog]] hinterlegt in
- Aufwandsnenner >> [[wsjf]] genutzt in

## Konsumenten
- Product Owner
- Sprint Planning
- Management

## Verknüpfungen
- vorher: [[planning-poker]] Punkte werden im Planning Poker bestimmt.
- vorher: [[user-stories]] Punkte hängen an Stories.
- danach: [[product-backlog]] Backlog mit Punkten bewerten.
- danach: [[wsjf]] Aufwandsteil von WSJF.

## Karte
Teaser: Relativer Aufwand einer Story statt Stunden. Die Velocity zeigt die Teamleistung.
Gut wenn: Sprints und Prognosen sind nötig | Stundenschätzungen täuschen Genauigkeit vor
Vorher: Referenzstories festlegen | Skala vereinbaren, Velocity führen
Besser nicht: Kunde verlangt Festpreis nach Stunden
- Referenzstories festlegen
- Skala vereinbaren
- Stories relativ vergleichen
- Velocity der letzten Sprints
- Nie in Stunden umrechnen

## Quellen
- Cohn, M.: Agile Estimating and Planning (Prentice Hall, 2005)
- Beck, K., Fowler, M.: Planning Extreme Programming (Addison-Wesley, 2000)
- Schwaber, K., Sutherland, J.: The Scrum Guide (2020)
