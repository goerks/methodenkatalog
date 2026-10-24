---
name: Abnahmetest (UAT)
kurz: Abnahmetest
kategorie: absichern
vorgehen: beide
phase: absichern
typ: Test
form: methode
aufwand: Stunden bis Tage
werkzeuge: [Jira, Cucumber]
reihenfolge: 5
status: entwurf
---

Der Fachbereich prüft das fertige System anhand echter Abläufe und entscheidet, ob es die Anforderungen erfüllt und produktiv gehen darf.

## Ablauf
1. Testfälle aus Akzeptanzkriterien und Use Cases ableiten
2. Testdaten und Umgebung vorbereiten
3. Fachbereich führt die Testfälle aus
4. Abweichungen erfassen und bewerten
5. Abnahme entscheiden und festhalten

## Regeln
- Fachseite testet, nicht die Entwicklung
- Abnahmekriterien vorher vereinbart
- Jede Abweichung wird mit Entscheid dokumentiert

## Beispiel: Testfall zur Tourenfreigabe
Disponentin gibt Tour mit Fahrzeugkonflikt frei. Erwartet: Warnung mit Name der Konflikttour. Ergebnis: bestanden.

## Verknüpfungen
- vorher: [[akzeptanzkriterien]] Kriterien liefern die Testfälle.
- vorher: [[use-cases]] Abläufe liefern die Testfälle.
- ergaenzt: [[review]] Review prüft Dokumente, UAT das System.
- ergaenzt: [[dor-dod]] Die Abnahme ist Teil von Done.
- ergaenzt: [[traceability]] Tests mit Anforderungen verknüpfen.
