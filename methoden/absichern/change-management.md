---
name: Änderungsmanagement
kurz: Änderungen
kategorie: absichern
vorgehen: klassisch
phase: absichern
typ: Prozess
form: methode
aufwand: Je Antrag 30 Min. bis 2 Stunden
werkzeuge: [Jira, ServiceNow, Excel]
reihenfolge: 4
status: entwurf
karte: A-04
---

Geregelter Umgang mit Änderungswünschen: erfassen, bewerten, entscheiden, umsetzen.

## Wofür
Das Änderungsmanagement regelt, wie Änderungswünsche erfasst, bewertet, entschieden und umgesetzt werden. So entsteht keine Anforderungsflut ohne Kontrolle, und Auswirkungen auf Aufwand, Termin und Qualität werden vor der Entscheidung sichtbar.

## Wann sinnvoll
- Sobald Anforderungen freigegeben sind
- Bei Festpreisverträgen und formalen Abnahmen
- Wenn mehrere Parteien Änderungen verlangen

## Wann besser nicht
- In rein agilen Teams mit offenem Backlog genügt dessen laufende Pflege
- Wenn der Prozess so schwer ist, dass er umgangen wird

## Vorbereitung
- Verfahren festlegen: Antrag, Bewertung, Entscheid, Umsetzung
- Gremium und Entscheidungsrechte klären (Change Control Board)
- Vorlage für Änderungsanträge
- Werkzeug zur Verfolgung, etwa Jira
- Schwellenwerte für die Entscheidungsebene

## Ablauf
1. Änderungsantrag erfassen
2. Auswirkungen auf Umfang, Kosten, Termin prüfen
3. Entscheidung im Change Board
4. Umsetzung planen
5. Dokumente und Baseline aktualisieren

## Regeln
- Jede Änderung hat einen Antrag und eine Entscheidung
- Nachvollziehbare Historie
- Agile Teams: Änderung = neuer Backlog-Eintrag

## In der Praxis
Jeder Antrag enthält Begründung, Nutzen, betroffene Anforderungen und Aufwandsschätzung. Die Auswirkungsanalyse nutzt die Rückverfolgbarkeit. Entscheiden Sie zeitnah, lange Wartezeiten fördern Umgehung. Halten Sie Entscheidungen fest und informieren Sie alle Betroffenen.

## Beispiel: Änderungsantrag CR-07
Wunsch: Export als Excel. Auswirkung: 5 Tage, kein Termineffekt. Entscheid: genehmigt für Release 2.

## Empfehlung
Vorher braucht es ein freigegebenes Pflichtenheft und eine Traceability-Matrix. Im agilen Umfeld übernimmt die Pflege des Backlogs diese Aufgabe.

## Lieferanten
- Antragsteller aus dem Fachbereich
- Projektleitung

## Eingaben
- Auswirkungen >> [[traceability]] geliefert von
- Freigegebene Anforderungen >> [[pflichtenheft]] geliefert von
- Änderungsantrag

## Ergebnisse
- Entscheidung mit Begründung
- Aktualisierte Anforderungsbasis >> [[pflichtenheft]] fortgeschrieben in
- Änderungsprotokoll

## Konsumenten
- Projektleitung
- Entwicklung
- Auftraggeber

## Verknüpfungen
- vorher: [[traceability]] Auswirkungen zeigt die Matrix.
- ergaenzt: [[pflichtenheft]] Verbindliche Basis.
- alternative: [[product-backlog]] Agil: Änderungen laufen über das Backlog.

## Karte
Teaser: Änderungswünsche erfassen, bewerten, entscheiden und umsetzen.
Gut wenn: Anforderungen sind freigegeben | Festpreis und formale Abnahme | Wenn mehrere Parteien Änderungen verlangen
Vorher: Verfahren und Gremium klären | Vorlage für Änderungsanträge
Besser nicht: Rein agil: das Backlog genügt
- Antrag mit Begründung erfassen
- Auswirkungen prüfen
- Gremium entscheidet
- Umsetzen und nachführen
- Alle informieren

## Quellen
- IIBA: BABOK Guide, Version 3 (2015), Wissensgebiet «Requirements Life Cycle Management»
- Wiegers, K., Beatty, J.: Software Requirements, 3. Auflage (2013), Kapitel «Managing change»
- ISO/IEC/IEEE 29148:2018 – Requirements engineering
