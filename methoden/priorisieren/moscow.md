---
name: MoSCoW-Priorisierung
kurz: MoSCoW
kategorie: priorisieren
vorgehen: beide
phase: bewerten
typ: Priorisierung
form: methode
aufwand: 1 bis 2 Stunden
werkzeuge: [Miro, Excel, Jira-Label]
grafik: moscow
reihenfolge: 1
status: entwurf
---

Einteilung von Anforderungen in Must, Should, Could und Won't (diesmal nicht). Einfach und im Workshop schnell anwendbar.

## Wofür
MoSCoW teilt Anforderungen in vier Klassen: Must (muss), Should (soll), Could (kann), Won't (diesmal nicht). Die Technik schafft ohne Rechnen eine gemeinsame Sicht auf das Wichtige und macht sichtbar, was bewusst nicht Teil des Releases ist.

## Wann sinnvoll
- Bei fester Frist oder festem Budget und mehr Wünschen als Kapazität
- Im Workshop mit Beteiligten, die schnell entscheiden müssen
- Zur Umfangsabgrenzung eines Releases

## Wann besser nicht
- Wenn fast alles als Must gilt: dann feiner mit WSJF
- Wenn Wert und Aufwand genau verglichen werden sollen
- Bei sehr vielen Einträgen ohne Vorsortierung

## Vorbereitung
- Anforderungsliste mit kurzer Beschreibung bereitlegen
- Zeitrahmen und Ziel des Releases klären
- Entscheider und Fachvertreter einladen
- Karten oder digitale Tafel mit vier Spalten
- 1 bis 2 Stunden einplanen

## Ablauf
1. Zeitrahmen und Ziel klären
2. Jede Anforderung einer Klasse zuordnen
3. Must-Haves auf Notwendigkeit prüfen
4. Won't bewusst festhalten
5. Ergebnis mit Stakeholdern abstimmen

## Regeln
- Must heisst: ohne geht das Release nicht live
- Must-Anteil bei höchstens 60 % des Aufwands halten
- Won't gilt nur für diesen Zeitraum

## In der Praxis
Streiten Sie zuerst über die Definition von Must: Ohne dieses Merkmal geht das Release nicht live, ist rechtswidrig oder unsicher. Als Faustregel höchstens 60 Prozent des Aufwands als Must, der Rest ist Puffer. Won't ist eine Entscheidung, keine Ablage: Halten Sie fest, dass es nur für diesen Zeitraum gilt. Ein Gespräch über Grenzfälle ist wertvoller als die Einteilung selbst.

## Beispiel: Release 1
Must: Tour anlegen, Fahrzeugkonflikt prüfen. Should: Ersatzfahrer-Vorschlag. Could: Karte. Won't: Mobile Offline-Modus.

## Empfehlung
Vorher sammelt ein Workshop die Anforderungen. Danach übernehmen Sie die Reihenfolge ins Backlog. Bei Zweifeln kann Kano oder WSJF eine zweite Meinung liefern.

## Lieferanten
- Fachbereich und Stakeholder
- Product Owner

## Eingaben
- Anforderungsliste >> [[workshop]] geliefert von
- Ziel und Zeitrahmen des Releases
- Aufwandsschätzung >> [[story-points]] ergänzt durch

## Ergebnisse
- Einteilung in Must, Should, Could, Won't
- Reihenfolge >> [[product-backlog]] übernommen in
- Umfang des Releases >> [[roadmap]] genutzt in

## Konsumenten
- Product Owner
- Entwicklungsteam
- Auftraggeber

## Verknüpfungen
- vorher: [[workshop]] Im Workshop gemeinsam einordnen.
- alternative: [[kano]] Kano fragt direkt nach Nutzerzufriedenheit.
- alternative: [[wsjf]] WSJF rechnet Wert gegen Aufwand.
- danach: [[product-backlog]] Reihenfolge im Backlog übernehmen.

## Quellen
- Clegg, D., Barker, R.: Case Method Fast-Track: A RAD Approach (Addison-Wesley, 1994)
- DSDM Consortium: The DSDM Agile Project Framework (Agile Business Consortium)
- IIBA: BABOK Guide, Version 3 (2015), Technik «MoSCoW-Analyse»
