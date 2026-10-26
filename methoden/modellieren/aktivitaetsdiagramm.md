---
name: Aktivitätsdiagramm (UML)
kurz: Aktivitätsdiagramm
kategorie: modellieren
vorgehen: beide
phase: spezifizieren
typ: Modell
form: modell
aufwand: 30 bis 60 Min.
werkzeuge: [draw.io, PlantUML, Enterprise Architect, Miro]
grafik: activity
reihenfolge: 1
status: entwurf
karte: S-10
---

Zeigt einen Ablauf als Folge von Aktionen mit Entscheidungen, Verzweigungen und parallelen Strängen. Ideal für Prozesse und Use-Case-Abläufe.

## Wofür
Das Aktivitätsdiagramm der UML zeigt einen Ablauf als Folge von Aktionen mit Verzweigungen, Parallelität und Zuständigkeiten. Es macht Prozesse und Logik sichtbar und deckt Lücken wie fehlende Alternativen und tote Enden auf.

## Wann sinnvoll
- Zum Verstehen und Klären eines Ablaufs
- Um Use Cases oder Stories mit Logik zu veranschaulichen
- Bei Entscheidungen und parallelen Schritten

## Wann besser nicht
- Wenn der Prozess über Organisationen reicht und Zuständigkeiten im Vordergrund stehen: dann BPMN
- Wenn niemand das Diagramm lesen kann, hilft eine Liste besser

## Vorbereitung
- Ablauf und Ziel abgrenzen
- Beobachtungsnotizen oder Interviewergebnisse bereitlegen
- Notation klären, die alle verstehen
- Werkzeug wählen: Whiteboard, draw.io oder PlantUML

## Ablauf
1. Ablauf und Start/Ende festlegen
2. Aktionen in Reihenfolge zeichnen
3. Entscheidungen als Raute mit Bedingungen einfügen
4. Parallele Abläufe mit Balken (Fork/Join) darstellen
5. Optional: Swimlanes für Verantwortliche ergänzen

## Regeln
- Ein Startknoten, mindestens ein Endknoten
- Jede Raute hat Bedingungen an den ausgehenden Kanten
- Aktionen mit Verb benennen
- Pro Diagramm ein Ziel

## In der Praxis
Ein Start, mindestens ein Ende. Jede Verzweigung hat Bedingungen an allen ausgehenden Pfeilen. Benennen Sie Aktionen mit Verb und Objekt («Antrag prüfen»). Halten Sie eine Seite lesbar, grössere Abläufe zerlegen Sie. Mit Schwimmbahnen zeigen Sie, wer was tut.

## Beispiel: Tour freigeben
Start → Tour prüfen → [Konflikt?] ja: Warnung anzeigen und zurück · nein: Tour sperren → Fahrer benachrichtigen → Ende.

## Empfehlung
Vorher liefern Beobachtung oder Interviews den Ablauf. Danach beschreiben Use Cases Details, und das Zustandsdiagramm hilft, wenn Objekte ihren Zustand wechseln. Bei organisationsübergreifenden Prozessen wechseln Sie zu BPMN.

## Lieferanten
- Fachanwender
- Business Analyst

## Eingaben
- Ist-Ablauf >> [[beobachtung]] geliefert von
- Ereignisse >> [[event-storming]] geliefert von
- Szenarien >> [[use-cases]] ergänzt durch

## Ergebnisse
- Diagramm des Ablaufs
- Details zum Szenario >> [[use-cases]] verfeinert in
- Prozesssicht >> [[bpmn]] überführt in

## Konsumenten
- Entwicklung
- Test
- Fachbereich

## Verknüpfungen
- ergaenzt: [[use-cases]] Visualisiert den Ablauf eines Use Cases.
- alternative: [[bpmn]] BPMN eignet sich besser für Geschäftsprozesse mit mehreren Beteiligten.
- ergaenzt: [[zustandsdiagramm]] Zustandsdiagramm zeigt den Lebenszyklus eines Objekts.
- vorher: [[beobachtung]] Beobachtete Abläufe modellieren.

## Karte
Teaser: Ein Ablauf mit Aktionen, Verzweigungen und Zuständigkeiten (UML).
Gut wenn: Ablauf verstehen und klären | Entscheidungen und parallele Schritte | Um Use Cases mit Logik zu zeigen
Vorher: Ablauf und Ziel abgrenzen | Notation klären, die alle kennen
Besser nicht: Zuständigkeiten im Vordergrund: BPMN
- Start und Ende festlegen
- Aktionen mit Verb und Objekt
- Verzweigungen mit Bedingung
- Schwimmbahnen für Rollen
- Mit Beteiligten prüfen

## Quellen
- OMG: Unified Modeling Language (UML), Version 2.5.1 (2017)
- Fowler, M.: UML Distilled, 3. Auflage (Addison-Wesley, 2003)
- Rupp, C.: Requirements-Engineering und -Management (Hanser)
