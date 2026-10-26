---
name: Entscheidungstabelle
kurz: Entscheidungstabelle
kategorie: modellieren
vorgehen: beide
phase: spezifizieren
typ: Tabellenmodell
form: modell
aufwand: 1 bis 2 Stunden
werkzeuge: [Excel, Confluence]
reihenfolge: 9
status: entwurf
karte: S-16
---

Tabelle, die Bedingungen und Aktionen so gegenüberstellt, dass jede Regelkombination eindeutig abgedeckt ist.

## Wofür
Eine Entscheidungstabelle listet Bedingungen und die daraus folgenden Aktionen in einer Tabelle auf. Jede Spalte ist eine Regel: Wenn diese Bedingungen zutreffen, dann diese Aktion. Sie eignet sich für Logik mit mehreren Bedingungen, bei der Prosa unübersichtlich wird, und macht Lücken und Widersprüche sichtbar.

## Wann sinnvoll
- Wenn eine Entscheidung von mehreren Bedingungen abhängt
- Wenn Prosaregeln lang und widersprüchlich werden
- Als Grundlage für Testfälle und Regelautomatisierung

## Wann besser nicht
- Bei einfachen Wenn-dann-Regeln mit einer Bedingung
- Bei Abläufen mit Reihenfolge: dann Aktivitätsdiagramm
- Wenn die Bedingungen nicht eindeutig prüfbar sind

## Vorbereitung
- Entscheidung und Ergebnis benennen
- Bedingungen und Werte sammeln
- Aktionen und mögliche Ergebnisse auflisten
- Fachexperten für die Regeln einplanen
- Vorlage wählen: Tabelle oder DMN-Werkzeug

## Ablauf
1. Entscheidung und Aktionen festlegen
2. Bedingungen mit ihren Werten auflisten
3. Regelspalten für alle Kombinationen anlegen
4. Aktion je Regel eintragen
5. Lücken, Widersprüche und Zusammenfassbares prüfen

## Regeln
- Jede Kombination ist genau einmal abgedeckt
- Bedingungen sind eindeutig mit Ja, Nein oder Wert prüfbar
- Gleiche Aktionen werden zusammengefasst
- Die Tabelle trägt Name und Verantwortliche

## In der Praxis
Zählen Sie die Kombinationen: Bei drei Ja-Nein-Bedingungen sind es acht Spalten. Fehlt eine, ist eine Lücke gefunden. Fassen Sie Spalten mit gleicher Aktion zusammen und kennzeichnen Sie die egal-Fälle. Aus jeder Spalte ergibt sich ein Testfall. Wird die Tabelle über 10 Bedingungen gross, zerlegen Sie die Entscheidung.

## Beispiel: Fahrzeugfreigabe
Bedingungen: Fahrzeug frei? Fahrer verfügbar? Zeit passt? Aktionen: freigeben, warnen, ablehnen. Regel 1: alle Ja → freigeben. Regel 2: Fahrzeug nein → ablehnen. Regel 3: Fahrer nein, Fahrzeug ja → warnen. Beim Prüfen fällt eine fehlende Kombination auf und wird ergänzt.

## Empfehlung
Vorher sammeln Geschäftsregeln oder Interviews die Bedingungen. Danach liefert jede Regelspalte einen Testfall für den Abnahmetest. Für komplexe Entscheidungen im Prozess hilft die Notation DMN.

## Lieferanten
- Fachbereich mit Entscheidungswissen
- Regelverantwortliche

## Eingaben
- Regeltexte >> [[geschaeftsregeln]] geliefert von
- Beispiele aus dem Alltag >> [[interview]] geliefert von
- Bedingungen aus der Fachlichkeit

## Ergebnisse
- Vollständige Entscheidungstabelle
- Testfälle >> [[abnahmetest]] genutzt in
- Regeln >> [[pflichtenheft]] übernommen in

## Konsumenten
- Entwicklung und Test
- Fachbereich
- Auftraggeber

## Verknüpfungen
- vorher: [[geschaeftsregeln]] Die Regeln liefern die Bedingungen.
- danach: [[abnahmetest]] Jede Regelspalte wird zu einem Testfall.
- alternative: [[aktivitaetsdiagramm]] Das Aktivitätsdiagramm zeigt Reihenfolgen, die Tabelle Kombinationen.
- ergaenzt: [[akzeptanzkriterien]] Die Tabelle macht Kriterien vollständig.
- ergaenzt: [[bpmn]] In BPMN-Prozessen entscheiden Tabellen über Verzweigungen.

## Karte
Teaser: Bedingungen und Aktionen als Tabelle: jede Kombination genau einmal, Lücken sichtbar.
Gut wenn: Entscheidung hängt von mehreren Bedingungen ab | Prosaregeln sind lang und widersprüchlich | Grundlage für Testfälle
Vorher: Bedingungen und Werte sammeln | Aktionen auflisten
Besser nicht: Einfache Regel mit einer Bedingung
Regeln: Jede Kombination genau einmal | Bedingungen eindeutig prüfbar | Gleiche Aktionen zusammenfassen
- Entscheidung und Aktionen festlegen
- Bedingungen auflisten
- Regelspalten anlegen
- Aktion je Regel eintragen
- Lücken und Widersprüche prüfen

## Quellen
- OMG: Decision Model and Notation (DMN), Version 1.3 (2019)
- Pohl, K., Rupp, C.: Basiswissen Requirements Engineering (dpunkt.verlag, 5. Auflage 2021)
- IIBA: BABOK Guide, Version 3 (2015), Technik «Decision Modelling»
