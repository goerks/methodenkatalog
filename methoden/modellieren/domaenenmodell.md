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
karte: S-14
---

Zeigt die wichtigen Fachbegriffe eines Bereichs als Klassen mit ihren Beziehungen, ohne technische Details. Schafft ein gemeinsames Bild der Fachwelt.

## Wofür
Das Domänenmodell stellt die zentralen Begriffe eines Fachgebiets und ihre Beziehungen dar, zum Beispiel Kunde, Auftrag und Rechnung. Es ist ein fachliches Modell, kein Datenbankentwurf, und dient als gemeinsames Verständnis.

## Wann sinnvoll
- Bei komplexer Fachlichkeit
- Wenn Technik und Fachbereich sich über Begriffe uneinig sind
- Vor dem Entwurf der Systemstruktur

## Wann besser nicht
- Wenn die Domäne einfach ist
- Wenn es nur um Abläufe geht
- Wenn daraus vorschnell eine Datenbank gebaut wird

## Vorbereitung
- Glossar und Begriffssammlung bereitlegen
- Fachleute und Architektur einladen
- Notation einfach halten (Klassen mit Beziehungen)
- Whiteboard oder Zeichenwerkzeug

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

## In der Praxis
Zeichnen Sie nur fachlich relevante Begriffe und benennen Sie Beziehungen mit Verben («Kunde erteilt Auftrag»), mit Kardinalitäten. Verzichten Sie auf technische Felder. Lassen Sie Fachleute das Modell laut vorlesen: Wenn der Satz falsch klingt, stimmt das Modell nicht.

## Beispiel: Tourenplanung
Tour (1) enthält Stopps (n). Eine Tour hat genau ein Fahrzeug und einen Fahrer. Ein Stopp gehört zu einem Auftrag.

## Empfehlung
Vorher liefern Glossar und Event Storming die Begriffe. Danach ergänzen Geschäftsregeln und Zustandsdiagramm das Modell. Es gehört ins Pflichtenheft.

## Lieferanten
- Fachexperten
- Architektur

## Eingaben
- Begriffe >> [[glossar]] geliefert von
- Ereignisse und Aggregate >> [[event-storming]] geliefert von
- Regeln >> [[geschaeftsregeln]] ergänzt durch

## Ergebnisse
- Klassendiagramm der Fachbegriffe
- Lebenszyklen >> [[zustandsdiagramm]] verfeinert in
- Beschreibung der Fachstruktur >> [[pflichtenheft]] übernommen in

## Konsumenten
- Architektur
- Entwicklung
- Fachbereich

## Verknüpfungen
- ergaenzt: [[glossar]] Modell und Glossar nutzen dieselben Begriffe.
- vorher: [[event-storming]] Ereignisse zeigen die Begriffe.
- ergaenzt: [[geschaeftsregeln]] Regeln verbinden Begriffe.
- ergaenzt: [[zustandsdiagramm]] Zustände der Objekte darstellen.
- danach: [[pflichtenheft]] Als Kapitel Datenmodell einbinden.

## Karte
Teaser: Fachliche Begriffe und ihre Beziehungen, kein Datenbankentwurf.
Gut wenn: Komplexe Fachlichkeit | Technik und Fachbereich uneins über Begriffe | Vor dem Entwurf der Systemstruktur
Vorher: Glossar bereitlegen | Fachleute und Architektur einladen
Besser nicht: Die Domäne ist einfach
Regeln: Begriffe der Fachsprache verwenden | Nur Fachliches, keine Technik | Wenige Klassen, klare Beziehungen
- Begriffe aus dem Glossar
- Als Klassen zeichnen
- Beziehungen mit Verb benennen
- Kardinalitäten ergänzen
- Fachleute lesen laut vor

## Quellen
- Evans, E.: Domain-Driven Design (Addison-Wesley, 2003)
- Larman, C.: Applying UML and Patterns, 3. Auflage (Prentice Hall, 2004)
- Fowler, M.: Analysis Patterns (Addison-Wesley, 1996)
