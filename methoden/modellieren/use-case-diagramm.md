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

## Wofür
Das Use-Case-Diagramm zeigt auf einer Seite, welche Akteure welche Funktionen eines Systems nutzen. Es gibt einen schnellen Überblick über den Funktionsumfang und dient als Inhaltsverzeichnis für die Use-Case-Beschreibungen.

## Wann sinnvoll
- Zur Klärung des Funktionsumfangs
- Als Einstieg in die Use-Case-Beschreibung
- In Gesprächen mit Fachleuten, die einen Überblick brauchen

## Wann besser nicht
- Wenn Details gefragt sind: dort sind Beschreibungen besser
- Bei sehr grossen Systemen ohne Gruppierung wird es unlesbar

## Vorbereitung
- Akteure aus der Stakeholder-Analyse und dem Kontext sammeln
- Funktionen als Ziele der Akteure formulieren
- Systemgrenze festlegen
- Zeichenwerkzeug bereitstellen

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

## In der Praxis
Benennen Sie Use Cases mit Verb und Objekt. Zeichnen Sie nur, was Gegenstand des Systems ist, nicht Abläufe. Zu viele «include» und «extend» verwirren, nutzen Sie sie sparsam. Das Diagramm ist ein Überblick, die Substanz liegt in den Beschreibungen.

## Beispiel: Tourenplanung
Akteure: Disponentin, Fahrer. Use Cases: Tour planen, Tour freigeben (Disponentin), Tour einsehen (Fahrer).

## Empfehlung
Vorher helfen Stakeholder-Analyse und Kontextdiagramm. Danach beschreiben Sie jeden Use Case im Detail.

## Lieferanten
- Fachbereich
- Business Analyst

## Eingaben
- Akteure >> [[stakeholder]] geliefert von
- Systemgrenze >> [[kontextdiagramm]] geliefert von

## Ergebnisse
- Diagramm mit Akteuren und Use Cases
- Liste der zu beschreibenden Funktionen >> [[use-cases]] ausgearbeitet in

## Konsumenten
- Auftraggeber
- Entwicklung
- Test

## Verknüpfungen
- danach: [[use-cases]] Jeder Use Case wird einzeln beschrieben.
- ergaenzt: [[kontextdiagramm]] Kontextdiagramm zeigt Nachbarsysteme.
- vorher: [[stakeholder]] Akteure aus der Stakeholder-Analyse.
- alternative: [[story-mapping]] Agile Teams nutzen oft die Story Map als Überblick.

## Quellen
- OMG: Unified Modeling Language (UML), Version 2.5.1 (2017)
- Cockburn, A.: Writing Effective Use Cases (Addison-Wesley, 2001)
- Fowler, M.: UML Distilled, 3. Auflage (2003)
