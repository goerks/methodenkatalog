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
---

Zeigt das System als Black Box mit seinen Nachbarn (Nutzer, Fremdsysteme) und den Datenflüssen. Klärt den Umfang früh.

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

## Beispiel: Tourenplanung
Mitte: Tourenplanung. Aussen: Disponentin, Fahrer-App, ERP (Aufträge), Fahrzeugverwaltung.

## Verknüpfungen
- ergaenzt: [[stakeholder]] Akteure und Stakeholder abgleichen.
- danach: [[use-case-diagramm]] Funktionen pro Akteur aufschlüsseln.
- danach: [[bpmn]] Prozesse innerhalb der Grenze modellieren.
- danach: [[pflichtenheft]] Als Kapitel Systemkontext.
