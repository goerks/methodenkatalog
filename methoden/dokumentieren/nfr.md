---
name: Qualitätsanforderungen (NFR)
kurz: Qualität (NFR)
kategorie: dokumentieren
vorgehen: beide
phase: spezifizieren
typ: Anforderungsart
form: artefakt
aufwand: 1 bis 3 Stunden je Themenfeld
werkzeuge: [ISO 25010, Planguage, Quality Attribute Workshop]
reihenfolge: 5
status: entwurf
---

Nichtfunktionale Anforderungen wie Performance, Sicherheit, Bedienbarkeit oder Verfügbarkeit, messbar formuliert.

## Ablauf
1. Qualitätsmerkmale sammeln (z. B. ISO 25010)
2. Relevante auswählen und priorisieren
3. Mit konkreten Messwerten formulieren
4. Mit Architektur und Test abstimmen
5. Als Kriterien in Stories oder Spezifikation übernehmen

## Regeln
- Jede Anforderung ist messbar (Wert, Einheit, Bedingung)
- Keine Adjektive wie «schnell» oder «sicher» ohne Zahl
- Kritische NFR früh klären, da sie Architektur prägen

## Beispiel: Performance und Verfügbarkeit
Die Tourenliste lädt bei 5000 Einträgen in unter 2 Sekunden (95. Perzentil). Verfügbarkeit werktags 06 bis 20 Uhr mindestens 99.5 %.

## Verknüpfungen
- ergaenzt: [[user-stories]] NFR als Akzeptanzkriterien oder Randbedingung an Stories.
- ergaenzt: [[dor-dod]] Wichtige NFR in der Definition of Done verankern.
- danach: [[pflichtenheft]] NFR haben ein eigenes Kapitel im Pflichtenheft.
- ergaenzt: [[kano]] Basisfaktoren im Kano-Modell sind oft NFR.
