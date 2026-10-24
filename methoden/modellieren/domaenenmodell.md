---
name: Domänenmodell
kurz: Domänenmodell
kategorie: modellieren
vorgehen: beide
phase: spezifizieren
typ: Modell
form: modell
aufwand: 1 bis 3 Stunden
werkzeuge: [draw.io, PlantUML, Enterprise Architect]
grafik: domaene
reihenfolge: 6
status: entwurf
---

Zeigt die wichtigen Fachbegriffe eines Bereichs als Klassen mit ihren Beziehungen, ohne technische Details. Schafft ein gemeinsames Bild der Fachwelt.

## Ablauf
1. Zentrale Begriffe aus Glossar und Workshops sammeln
2. Begriffe als Kästchen zeichnen
3. Beziehungen mit Kardinalität verbinden (1, n)
4. Wichtige Attribute ergänzen
5. Mit dem Fachbereich auf Stimmigkeit prüfen

## Regeln
- Fachbegriffe verwenden, keine Tabellen- oder Klassennamen der Technik
- Nur das Wichtige zeigen
- Jede Beziehung hat einen Namen und eine Kardinalität

## Beispiel: Tourenplanung
Tour (1) enthält Stopps (n). Eine Tour hat genau ein Fahrzeug und einen Fahrer. Ein Stopp gehört zu einem Auftrag.

## Verknüpfungen
- ergaenzt: [[glossar]] Modell und Glossar nutzen dieselben Begriffe.
- vorher: [[event-storming]] Ereignisse zeigen die Begriffe.
- ergaenzt: [[geschaeftsregeln]] Regeln verbinden Begriffe.
- ergaenzt: [[zustandsdiagramm]] Zustände der Objekte darstellen.
- danach: [[pflichtenheft]] Als Kapitel Datenmodell einbinden.
