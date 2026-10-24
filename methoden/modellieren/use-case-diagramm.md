---
name: Use-Case-Diagramm
kurz: Use-Case-Diagr.
kategorie: modellieren
vorgehen: klassisch
phase: spezifizieren
typ: Modell
form: modell
aufwand: 30 Min.
werkzeuge: [draw.io, PlantUML, Enterprise Architect]
grafik: usecase
reihenfolge: 2
status: entwurf
---

Übersicht über Akteure und die Funktionen (Use Cases), die das System für sie bereitstellt. Zeigt den Umfang auf einer Seite.

## Ablauf
1. Systemgrenze festlegen
2. Akteure ausserhalb des Systems zeichnen
3. Use Cases als Ovale innerhalb der Grenze
4. Akteure mit ihren Use Cases verbinden
5. Include/Extend nur bei Bedarf einsetzen

## Regeln
- Akteure stehen ausserhalb der Systemgrenze
- Use Cases benennen mit Verb + Objekt
- Auf einer Seite lesbar bleiben

## Beispiel: Tourenplanung
Akteure: Disponentin, Fahrer. Use Cases: Tour planen, Tour freigeben (Disponentin), Tour einsehen (Fahrer).

## Verknüpfungen
- danach: [[use-cases]] Jeder Use Case wird einzeln beschrieben.
- ergaenzt: [[kontextdiagramm]] Kontextdiagramm zeigt Nachbarsysteme.
- vorher: [[stakeholder]] Akteure aus der Stakeholder-Analyse.
- alternative: [[story-mapping]] Agile Teams nutzen oft die Story Map als Überblick.
