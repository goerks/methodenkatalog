---
name: Traceability-Matrix
kurz: Traceability
kategorie: absichern
vorgehen: klassisch
phase: absichern
typ: Verwaltung
form: artefakt
aufwand: Laufend
werkzeuge: [Doors, Polarion, Jira, Excel]
reihenfolge: 3
grafik: trace
status: entwurf
---

Verbindet Anforderungen mit Quellen, Design, Code und Tests. Zeigt Abdeckung und Auswirkungen von Änderungen.

## Ablauf
1. Eindeutige IDs vergeben
2. Beziehungen festlegen (Quelle, Anforderung, Test)
3. Verknüpfungen pflegen
4. Abdeckung auswerten
5. Bei Änderungen Auswirkungen ableiten

## Regeln
- IDs bleiben stabil
- Nur sinnvolle Beziehungen verfolgen
- Tool-gestützt pflegen

## Beispiel: Ausschnitt
REQ-12 → UC-04 → TC-31, TC-32 → Build 1.4

## Verknüpfungen
- ergaenzt: [[pflichtenheft]] Das Pflichtenheft liefert die IDs.
- ergaenzt: [[change-management]] Auswirkungsanalyse bei Änderungen.
- ergaenzt: [[akzeptanzkriterien]] Tests verlinken.
- ergaenzt: [[use-cases]] Use Cases verlinken.
