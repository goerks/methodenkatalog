---
name: Use Cases
kurz: Use Cases
kategorie: dokumentieren
vorgehen: klassisch
phase: spezifizieren
typ: Anforderungsformat
form: artefakt
aufwand: 30 bis 90 Min. pro Use Case
werkzeuge: [Word-Vorlage, Enterprise Architect, Confluence]
grafik: usecase-text
reihenfolge: 2
status: entwurf
---

Beschreibt die Interaktion zwischen Akteur und System zu einem Ziel, mit Hauptablauf, Alternativen und Fehlerfällen.

## Ablauf
1. Akteur und Ziel benennen
2. Vorbedingungen und Nachbedingungen festlegen
3. Hauptablauf in nummerierten Schritten beschreiben
4. Alternativ- und Fehlabläufe ergänzen
5. Mit Stakeholdern reviewen

## Regeln
- Ein Use Case beschreibt ein Ziel eines Akteurs
- Name im Format Verb + Objekt
- Schritte sind Akteur-System-Dialog, ohne UI-Details

## Beispiel: UC-04 Tour freigeben
Akteur: Disponentin. Vorbedingung: Tour ist vollständig. Ablauf: 1. Disponentin wählt «Freigeben». 2. System prüft Fahrzeug und Fahrer. 3. System sperrt Tour für Änderungen. Alternative 2a: Konflikt, System zeigt Details.

## Verknüpfungen
- ergaenzt: [[use-case-diagramm]] Das Diagramm gibt den Überblick, der Use Case die Details.
- ergaenzt: [[aktivitaetsdiagramm]] Komplexe Abläufe als Aktivitätsdiagramm darstellen.
- alternative: [[user-stories]] Für kleine, agile Einheiten sind User Stories leichter.
- danach: [[akzeptanzkriterien]] Aus Abläufen entstehen Testfälle und Kriterien.
- danach: [[pflichtenheft]] Use Cases sind Kern des Pflichtenhefts.
