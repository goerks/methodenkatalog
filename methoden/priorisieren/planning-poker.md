---
name: Planning Poker
kurz: Planning Poker
kategorie: priorisieren
vorgehen: agil
phase: bewerten
typ: Schätzung
form: methode
aufwand: 2 bis 5 Min. pro Story
werkzeuge: [Karten, Planning-Poker-App, Jira-Plugin]
grafik: poker
reihenfolge: 4
status: entwurf
karte: B-04
---

Teambasierte Schätzmethode: Alle zeigen gleichzeitig eine Karte mit ihrer Schätzung. Abweichungen werden besprochen.

## Wofür
Beim Planning Poker schätzt das Team den Aufwand von Stories, indem alle gleichzeitig eine Karte mit einer Schätzung aufdecken. Abweichungen werden besprochen, bis ein gemeinsames Verständnis besteht. Das verhindert Ankereffekte und bindet das ganze Team ein.

## Wann sinnvoll
- Im Refinement, bevor Stories in den Sprint kommen
- Wenn das Team seine Kapazität einschätzen soll
- Wenn Meinungen über den Aufwand auseinandergehen

## Wann besser nicht
- Wenn Stories noch unklar sind: zuerst klären
- Bei sehr vielen kleinen Einträgen: Gruppieren oder Kleidergrössen verwenden
- Wenn Schätzungen für Leistungsbeurteilung missbraucht werden

## Vorbereitung
- Stories mit Beschreibung und Kriterien vorbereiten
- Referenzstory festlegen, an der verglichen wird
- Karten (Fibonacci: 1, 2, 3, 5, 8, 13) oder App bereitstellen
- Team komplett versammeln, Moderation bestimmen

## Ablauf
1. Product Owner stellt die Story vor
2. Fragen klären
3. Alle wählen verdeckt eine Karte
4. Gleichzeitig aufdecken
5. Höchste und niedrigste Schätzung begründen, neu schätzen bis Einigung

## Regeln
- Skala: 1, 2, 3, 5, 8, 13, 21 (Fibonacci)
- Niemand beeinflusst vor dem Aufdecken
- Schätzen tut das Team, das umsetzt
- Kein Durchschnitt, sondern Einigung

## In der Praxis
Die Story wird kurz erklärt, dann legen alle verdeckt eine Karte und decken gleichzeitig auf. Die höchste und die niedrigste Schätzung begründen ihre Sicht, danach wird neu geschätzt. Meist genügen zwei bis drei Runden. Geht es nicht, ist die Story nicht verstanden oder zu gross: Zurück ins Splitting.

## Beispiel: Story «Warnung bei Doppelbelegung»
Schätzungen: 3, 5, 5, 13. Entwickler mit 13 verweist auf fehlende Fahrzeug-Schnittstelle. Nach Klärung: alle 5.

## Empfehlung
Vorher müssen Stories verstanden und annähernd gleich gross sein, etwa nach Story Splitting. Danach sind die Schätzungen Story Points und fliessen ins Backlog. Sie sind Grundlage für WSJF und für die Sprintplanung.

## Lieferanten
- Entwicklungsteam
- Product Owner für Rückfragen

## Eingaben
- Stories mit Kriterien >> [[user-stories]] geliefert von
- Kleine Teile >> [[story-splitting]] geliefert von
- Referenzstory

## Ergebnisse
- Schätzwerte je Story >> [[story-points]] festgehalten als
- Gemeinsames Verständnis
- Unklare Stories zur Klärung >> [[refinement]] zurückgegeben an

## Konsumenten
- Product Owner
- Scrum Master
- Entwicklungsteam

## Verknüpfungen
- vorher: [[user-stories]] Geschätzt werden Stories.
- ergaenzt: [[story-points]] Das Ergebnis sind Story Points.
- ergaenzt: [[refinement]] Findet oft im Refinement statt.
- danach: [[product-backlog]] Schätzung im Backlog festhalten.

## Karte
Teaser: Das Team schätzt gleichzeitig mit Karten, Abweichungen werden besprochen.
- Story kurz erklären
- Alle legen verdeckt eine Karte
- Gleichzeitig aufdecken
- Höchste und tiefste begründen
- Neu schätzen bis Einigung

## Quellen
- Grenning, J.: Planning Poker or How to Avoid Analysis Paralysis while Release Planning (2002)
- Cohn, M.: Agile Estimating and Planning (Prentice Hall, 2005)
- Schwaber, K., Sutherland, J.: The Scrum Guide (2020)
