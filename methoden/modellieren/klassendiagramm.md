---
name: Klassendiagramm
kategorie: modellieren
vorgehen: klassisch
phase: spezifizieren
typ: UML-Diagramm
form: modell
aufwand: 2 bis 4 Stunden
werkzeuge: [PlantUML, Enterprise Architect]
reihenfolge: 13
status: entwurf
karte: S-19
---

Zeigt Klassen mit ihren Eigenschaften, Operationen und Beziehungen untereinander.

## Wofür
Das Klassendiagramm der UML beschreibt die statische Struktur eines Systems: welche Klassen es gibt, welche Attribute und Operationen sie haben und wie sie zusammenhängen (Assoziation, Vererbung, Aggregation). In der Anforderungsphase nutzt man es fachlich, um Begriffe und Beziehungen präzise zu fassen.

## Wann sinnvoll
- Wenn fachliche Begriffe und ihre Beziehungen genau festgehalten werden sollen
- Wenn Entwickler und Fachbereich dasselbe Strukturbild brauchen
- Wenn Vererbung oder Kardinalitäten wichtig sind

## Wann besser nicht
- Wenn nur ein grobes Begriffsbild nötig ist: dann Domänenmodell oder Glossar
- Für Abläufe oder Verhalten
- Wenn niemand die Notation liest

## Vorbereitung
- Fachbegriffe aus Glossar und Domänenmodell sammeln
- Detaillierungsgrad festlegen (fachlich oder technisch)
- Notation im Team klären
- Werkzeug auswählen

## Ablauf
1. Zentrale Klassen aus den Fachbegriffen ableiten
2. Attribute und, falls nötig, Operationen ergänzen
3. Beziehungen mit Kardinalität einzeichnen
4. Vererbung und Sonderfälle prüfen
5. Mit dem Fachbereich gegenlesen

## Regeln
- Klassennamen aus der Fachsprache
- Kardinalitäten an jede Beziehung schreiben
- Nur zeigen, was die Aufgabe braucht
- Ein Diagramm hat ein Thema

## In der Praxis
Zeichnen Sie das fachliche Klassendiagramm zuerst ohne technische Details. Wenn alle Fachbegriffe stimmen, kann die technische Sicht folgen. Ein Diagramm mit mehr als etwa zehn Klassen wird unlesbar: schneiden Sie nach Themen.

## Beispiel: Touren
Klasse Tour mit Datum und Status, Klasse Fahrzeug mit Kennzeichen, Klasse Fahrer. Eine Tour hat genau ein Fahrzeug und einen Fahrer, ein Fahrzeug hat viele Touren. Ein Lieferwagen ist ein Fahrzeug (Vererbung).

## Empfehlung
Vorher sammeln Glossar und Domänenmodell die Begriffe. Danach folgt das Datenmodell mit technischen Details. Für nur Ablauf oder Verhalten sind Sequenz- oder Aktivitätsdiagramm besser.

## Lieferanten
- Fachbereich mit Begriffswissen
- Architektinnen und Architekten

## Eingaben
- Fachbegriffe >> [[glossar]] geliefert von
- Fachliches Strukturbild >> [[domaenenmodell]] geliefert von

## Ergebnisse
- Klassendiagramm mit Kardinalitäten
- Technisches Strukturmodell >> [[datenmodell]] weitergeführt in

## Konsumenten
- Entwicklungsteam
- Architektur
- Fachbereich

## Verknüpfungen
- vorher: [[glossar]] Begriffe sind geklärt.
- vorher: [[domaenenmodell]] Das fachliche Bild liegt vor.
- danach: [[datenmodell]] Die Struktur wird technisch gefasst.
- ergänzt: [[sequenzdiagramm]] Das Verhalten ergänzt die Struktur.

## Karte
Teaser: Klassen mit Eigenschaften und Beziehungen: das Strukturbild fachlicher Begriffe in UML.
Gut wenn: Begriffe und Beziehungen genau sein müssen | Kardinalitäten wichtig sind | Fachbereich und Technik ein Bild brauchen
Vorher: Begriffe sammeln | Detailgrad festlegen
Besser nicht: Ein grobes Begriffsbild genügt
Regeln: Klassennamen aus der Fachsprache | Kardinalität an jeder Beziehung | Ein Diagramm, ein Thema
- Klassen ableiten
- Attribute ergänzen
- Beziehungen zeichnen
- Vererbung prüfen
- Mit Fachbereich lesen

## Quellen
- Object Management Group: UML Specification, Version 2.5.1 (2017)
- Rupp, C.; Queins, S.: UML 2 glasklar (Hanser, 4. Auflage 2012)
