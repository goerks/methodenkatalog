---
name: Datenmodell (ER-Diagramm)
kurz: Datenmodell
kategorie: modellieren
vorgehen: klassisch
phase: spezifizieren
typ: Modell
form: modell
aufwand: 2 bis 4 Stunden
werkzeuge: [draw.io, Enterprise Architect, PlantUML]
reihenfolge: 10
status: entwurf
karte: S-17
---

Zeigt, welche Dinge mit welchen Merkmalen und Beziehungen gespeichert werden.

## Wofür
Ein Datenmodell zeigt Entitäten, ihre Attribute und die Beziehungen mit Kardinalitäten, etwa ein Kunde hat viele Aufträge. Das ER-Diagramm ist die gängigste Darstellung. Es schafft Klarheit, welche Informationen das System verwalten muss, und bildet die Grundlage für Datenbank, Schnittstellen und Berichte.

## Wann sinnvoll
- Wenn ein System Daten dauerhaft speichern und verknüpfen muss
- Vor dem Entwurf einer Datenbank oder Schnittstelle
- Wenn Fachbegriffe und ihre Beziehungen geklärt werden müssen

## Wann besser nicht
- Wenn nur Fachbegriffe ohne Speicherung geklärt werden sollen: dann Domänenmodell
- Bei Abläufen und Reihenfolgen: dann Aktivitätsdiagramm
- Bei sehr kleinen Datenmengen ohne Beziehungen

## Vorbereitung
- Glossar und Begriffssammlung bereitlegen
- Beispiele für echte Datensätze sammeln
- Notation festlegen (zum Beispiel Krähenfuss)
- Fachexperten und Entwicklung einladen
- Werkzeug wählen

## Ablauf
1. Entitäten aus Begriffen und Beispielen sammeln
2. Attribute und Schlüssel festlegen
3. Beziehungen und Kardinalitäten zeichnen
4. Mit Beispieldaten durchspielen
5. Mit Fachleuten und Entwicklung prüfen

## Regeln
- Jede Entität hat einen eindeutigen Schlüssel
- Beziehungen tragen Kardinalitäten
- Namen stammen aus der Fachsprache
- Das Modell wird mit Beispieldaten geprüft

## In der Praxis
Gehen Sie von echten Beispielen aus: Zwei oder drei konkrete Datensätze zeigen schnell, ob eine Beziehung stimmt. Klären Sie Kardinalitäten im Gespräch («Kann ein Auftrag mehrere Fahrer haben?»), nicht durch Annahmen. Trennen Sie das fachliche vom technischen Modell: erst die Sicht des Fachbereichs, dann die Tabellen.

## Beispiel: Tourenplanung
Entitäten: Tour, Fahrzeug, Fahrer, Auftrag. Beziehungen: Eine Tour hat ein Fahrzeug und einen Fahrer, ein Fahrzeug hat viele Touren, eine Tour enthält viele Aufträge. Beim Durchspielen fällt auf: Ein Auftrag kann auf zwei Touren aufgeteilt sein. Die Beziehung wird auf viele zu viele geändert.

## Empfehlung
Vorher klärt das Glossar die Begriffe, das Domänenmodell die Fachlichkeit. Danach folgen Schnittstellen und Datenbank. Wer das System nur fachlich beschreibt, bleibt beim Domänenmodell.

## Lieferanten
- Fachbereich mit Datenwissen
- Entwicklung und Datenbankteam

## Eingaben
- Begriffe >> [[glossar]] geliefert von
- Fachliches Modell >> [[domaenenmodell]] geliefert von
- Beispiele für Datensätze

## Ergebnisse
- ER-Diagramm mit Attributen und Beziehungen
- Datenanforderungen >> [[pflichtenheft]] übernommen in
- Grundlage für Datenbank und Schnittstellen

## Konsumenten
- Entwicklung
- Datenbankteam
- Test

## Verknüpfungen
- vorher: [[glossar]] Das Glossar liefert die Begriffe.
- vorher: [[domaenenmodell]] Das Domänenmodell legt die Fachlichkeit fest.
- danach: [[pflichtenheft]] Datenanforderungen kommen ins Pflichtenheft.
- ergaenzt: [[zustandsdiagramm]] Das Zustandsdiagramm ergänzt Lebenszyklen der Entitäten.

## Karte
Teaser: Entitäten, Attribute und Beziehungen mit Kardinalitäten: was das System speichern muss.
Gut wenn: Das System speichert Daten dauerhaft | Vor Entwurf von Datenbank oder Schnittstelle | Beziehungen zwischen Begriffen klären
Vorher: Glossar und Beispiele bereitlegen | Notation festlegen
Besser nicht: Nur Begriffe klären: besser Domänenmodell
Regeln: Jede Entität hat einen Schlüssel | Beziehungen tragen Kardinalitäten | Namen stammen aus der Fachsprache
- Entitäten sammeln
- Attribute und Schlüssel festlegen
- Beziehungen zeichnen
- Mit Beispieldaten durchspielen
- Mit Fachleuten prüfen

## Quellen
- Chen, P. P.: The Entity-Relationship Model: Toward a Unified View of Data (ACM Transactions on Database Systems 1(1), 1976)
- Elmasri, R., Navathe, S. B.: Fundamentals of Database Systems (Pearson, 7. Auflage 2015)
- Simsion, G. C., Witt, G. C.: Data Modeling Essentials (Morgan Kaufmann, 3. Auflage 2005)
