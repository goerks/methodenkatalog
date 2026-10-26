---
name: Kontextdiagramm
kurz: Kontextdiagramm
kategorie: modellieren
vorgehen: beide
phase: verstehen
typ: Modell
form: modell
aufwand: 30 bis 60 Min.
werkzeuge: [draw.io, Miro, PlantUML]
grafik: context
reihenfolge: 4
status: entwurf
karte: V-07
---

Zeigt das System als Black Box mit seinen Nachbarn (Nutzer, Fremdsysteme) und den Datenflüssen. Klärt den Umfang früh.

## Wofür
Das Kontextdiagramm zeigt das System als einen Kasten in der Mitte und alle Akteure, Fremdsysteme und Datenflüsse, die es umgeben. Es legt die Systemgrenze fest und beantwortet, was dazugehört und was nicht.

## Wann sinnvoll
- Zu Beginn, um Umfang und Schnittstellen zu klären
- Wenn der Projektumfang diskutiert wird
- Bei Vorhaben mit vielen Nachbarsystemen

## Wann besser nicht
- Wenn Details des Systems gesucht werden: dort sind Prozess- und Datenmodelle besser
- Bei reinen Prozessänderungen ohne Systemgrenze

## Vorbereitung
- Grobe Beschreibung des Vorhabens bereitlegen
- Liste bekannter Akteure und Nachbarsysteme
- Whiteboard oder Zeichenwerkzeug
- Zwei bis vier Beteiligte aus Fachlichkeit und Technik
- 45 bis 90 Minuten einplanen

## Ablauf
1. System als Kasten in die Mitte setzen
2. Externe Akteure und Systeme ringsum anordnen
3. Datenflüsse mit Pfeilen und Beschriftung ergänzen
4. Mit Stakeholdern auf Vollständigkeit prüfen
5. Unklare Schnittstellen als offene Punkte vermerken

## Regeln
- Keine inneren Details des Systems
- Jeder Pfeil hat Richtung und Inhalt
- Alle Schnittstellen sind sichtbar

## In der Praxis
Das System ist genau ein Kasten, Details bleiben drinnen. Benennen Sie jeden Pfeil mit dem, was fliesst (Auftrag, Rechnung, Statusmeldung). Alles, was Sie nicht kontrollieren, liegt ausserhalb. Wenn die Grenze strittig ist, zeichnen Sie sie zweimal und diskutieren Sie die Differenz. Das ist oft der klärendste Teil.

## Beispiel: Tourenplanung
Mitte: Tourenplanung. Aussen: Disponentin, Fahrer-App, ERP (Aufträge), Fahrzeugverwaltung.

## Empfehlung
Vorher sollten die Stakeholder bekannt sein. Danach folgt das Use-Case-Diagramm für die Funktionen aus Sicht der Akteure und eine BPMN-Sicht auf die Prozesse. Das Diagramm gehört später ins Pflichtenheft.

## Lieferanten
- Fachbereich und Architektur
- Betrieb der Nachbarsysteme

## Eingaben
- Beteiligte und Rollen >> [[stakeholder]] geliefert von
- Systemlandschaft und Schnittstellenliste
- Projektauftrag

## Ergebnisse
- Kontextdiagramm mit benannten Datenflüssen
- Akteure für Funktionssicht >> [[use-case-diagramm]] verfeinert in
- Systemgrenze für Prozesse >> [[bpmn]] genutzt in
- Abschnitt zum Systemkontext >> [[pflichtenheft]] übernommen in

## Konsumenten
- Requirements Engineer
- Software-Architektur
- Auftraggeber

## Verknüpfungen
- ergaenzt: [[stakeholder]] Akteure und Stakeholder abgleichen.
- danach: [[use-case-diagramm]] Funktionen pro Akteur aufschlüsseln.
- danach: [[bpmn]] Prozesse innerhalb der Grenze modellieren.
- danach: [[pflichtenheft]] Als Kapitel Systemkontext.

## Karte
Teaser: Das System als ein Kasten, umgeben von Akteuren und Fremdsystemen.
Gut wenn: Zu Beginn: Umfang und Schnittstellen | Viele Nachbarsysteme | Wenn der Umfang diskutiert wird
Vorher: Vorhaben grob beschreiben | Akteure und Nachbarsysteme auflisten
Besser nicht: Für Details: Prozess- und Datenmodelle
- System als einen Kasten zeichnen
- Akteure und Systeme ergänzen
- Datenflüsse benennen
- Grenze mit allen klären
- In die Spezifikation

## Quellen
- Pohl, K., Rupp, C.: Basiswissen Requirements Engineering (dpunkt.verlag)
- IIBA: BABOK Guide, Version 3 (2015), Technik «Scope Modelling»
- DeMarco, T.: Structured Analysis and System Specification (Yourdon Press, 1978)
