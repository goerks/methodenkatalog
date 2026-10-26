---
name: Release-Planung
kurz: Release-Planung
kategorie: planen
vorgehen: beide
phase: planen
typ: Planung
form: methode
aufwand: 2 bis 4 Stunden
werkzeuge: [Jira, Miro]
reihenfolge: 6
status: entwurf
karte: P-06
---

Legt fest, welche Funktionen mit welcher Zuverlässigkeit in welchem Release erscheinen und wann.

## Wofür
In der Release-Planung wird festgelegt, welche Funktionen in welchem Release erscheinen sollen und mit welchem Zeithorizont. Sie verbindet Priorität, Schätzung und Kapazität zu einem Plan, den Stakeholder verstehen. Er wird laufend angepasst, wenn sich Wissen und Prioritäten ändern.

## Wann sinnvoll
- Wenn Termine und Umfang für Kunden und Management gebraucht werden
- Wenn mehrere Teams oder Abhängigkeiten abgestimmt werden müssen
- Wenn ein Ziel (Termin oder Funktionen) feststeht und der Weg gesucht wird

## Wann besser nicht
- Wenn nur der nächste Sprint zu planen ist: dann Sprint Planning
- Wenn das Backlog nicht geschätzt oder priorisiert ist
- Wenn der Plan als fixes Versprechen gelesen wird

## Vorbereitung
- Priorisiertes und geschätztes Backlog bereithalten
- Velocity oder Kapazität des Teams kennen
- Ziel des Releases klären: Termin oder Umfang
- Abhängigkeiten und Risiken sammeln
- Entscheider und Teamvertreter einladen

## Ablauf
1. Release-Ziel und Zeitrahmen festlegen
2. Kapazität des Teams bestimmen
3. Stories in Sprints und Releases einordnen
4. Abhängigkeiten und Risiken prüfen
5. Plan mit Pufferbereich abstimmen

## Regeln
- Plan zeigt eine Spanne, nicht einen Tag
- Der Plan wird nach jedem Sprint aktualisiert
- Umfang oder Termin sind fest, nie beides
- Puffer ist ausgewiesen

## In der Praxis
Zeigen Sie Spannen statt einzelner Daten: «Release 1 zwischen Mai und Juni». Legen Sie fest, was fest ist, den Termin oder den Umfang. Beides gleichzeitig fest ist ein Risiko. Aktualisieren Sie den Plan nach jedem Sprint mit der tatsächlichen Velocity, und zeigen Sie Veränderungen offen. So bleibt der Plan eine gemeinsame Orientierung.

## Beispiel: Release 1 Tourenplanung
Velocity 20 Punkte je Sprint, Release-Ziel Ende Juni mit sechs Sprints. Kapazität 120 Punkte. Must-Stories 85 Punkte, Should 40. Plan: Alle Must und die Hälfte der Should bis Juni, der Rest im Juli. Das Management sieht eine Spanne mit zwei Szenarien.

## Empfehlung
Vorher liefern Backlog, Schätzung und Roadmap die Eingaben. Danach plant jeder Sprint den nächsten Ausschnitt. Das Ergebnis gehört auf die Roadmap für Management und Kunden.

## Lieferanten
- Product Owner
- Entwicklungsteam

## Eingaben
- Priorisiertes Backlog >> [[product-backlog]] geliefert von
- Schätzung >> [[affinity-estimation]] geliefert von
- Roadmap und Ziele >> [[roadmap]] geliefert von

## Ergebnisse
- Release-Plan mit Spannen und Szenarien
- Sprint-Zuordnung >> [[sprint-planning]] genutzt in
- Termine und Umfang >> [[roadmap]] genutzt in

## Konsumenten
- Management
- Kunden
- Entwicklungsteam

## Verknüpfungen
- vorher: [[product-backlog]] Das Backlog liefert Stories und Reihenfolge.
- vorher: [[roadmap]] Die Roadmap gibt Ziele und Zeithorizont.
- danach: [[sprint-planning]] Jeder Sprint plant seinen Ausschnitt.
- ergaenzt: [[story-mapping]] Die Release-Linie der Story Map zeigt den Umfang.
- ergaenzt: [[moscow]] MoSCoW legt fest, was zum Release gehört.

## Karte
Teaser: Welche Funktionen kommen in welches Release, mit Spanne statt Stichtag? Plan mit Puffer.
Gut wenn: Termine und Umfang für Management nötig | Mehrere Teams oder Abhängigkeiten | Ziel steht fest, der Weg wird gesucht
Vorher: Backlog priorisieren und schätzen | Velocity kennen
Besser nicht: Nur der nächste Sprint ist zu planen
Regeln: Plan zeigt eine Spanne | Plan wird nach jedem Sprint angepasst | Umfang oder Termin sind fest
- Ziel und Zeitrahmen festlegen
- Kapazität bestimmen
- Stories den Releases zuordnen
- Abhängigkeiten prüfen
- Plan mit Puffer abstimmen

## Quellen
- Cohn, M.: Agile Estimating and Planning (Prentice Hall, 2005)
- Pichler, R.: Agile Product Management with Scrum (Addison-Wesley, 2010)
