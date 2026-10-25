---
name: Event Storming
kurz: Event Storming
kategorie: ermitteln
vorgehen: agil
phase: ermitteln
typ: Workshop
form: meeting
aufwand: 2 bis 4 Stunden
werkzeuge: [Miro, Haftnotizen]
grafik: event
reihenfolge: 8
status: entwurf
---

Ein Workshop, in dem Fachleute und Entwicklung alle Ereignisse eines Geschäftsbereichs auf einer langen Zeitachse sammeln und daraus Zusammenhänge ableiten.

## Wofür
Event Storming ist ein Workshop, in dem Fachleute und Entwickelnde gemeinsam auf einer langen Wand die Ereignisse eines Geschäftsprozesses sammeln und in zeitliche Reihenfolge bringen. Es macht Wissen sichtbar, deckt Lücken und Missverständnisse auf und liefert eine Grundlage für Domänenmodelle.

## Wann sinnvoll
- Beim Einstieg in einen komplexen oder unbekannten Geschäftsbereich
- Wenn Fachleute und Technik verschiedene Sprachen sprechen
- Vor dem Entwurf von Systemgrenzen oder Services

## Wann besser nicht
- Wenn nicht alle Schlüsselpersonen teilnehmen können
- Bei trivialen Abläufen
- Wenn der Prozess schon gut modelliert und allen bekannt ist

## Vorbereitung
- Raum mit einer langen freien Wand von 8 bis 10 Metern Papierrolle oder unbegrenztes digitales Whiteboard
- Sehr viele orange Haftnotizen für Ereignisse, dazu andere Farben für Befehle, Akteure und Fragen
- Dicke Filzstifte für jede Person
- Fachleute, Entwickelnde, Product Owner und Moderation einladen, 6 bis 15 Personen
- Halben bis ganzen Tag einplanen, Stehtische statt Stühle

## Ablauf
1. Grosse Fläche und orange Haftnotizen bereitstellen
2. Ereignisse in der Vergangenheitsform sammeln («Tour freigegeben»)
3. Ereignisse auf der Zeitachse ordnen
4. Befehle, Akteure und Regeln ergänzen
5. Offene Fragen und Bereichsgrenzen markieren

## Regeln
- Ereignisse in der Vergangenheit formulieren
- Fachleute und Entwicklung arbeiten gemeinsam
- Unklarheiten sofort als Frage festhalten

## In der Praxis
Beginnen Sie mit dem «Chaos»: Alle schreiben Ereignisse in der Vergangenheitsform («Auftrag erfasst») und kleben sie ohne viel Reden an die Wand. Danach sortieren Sie nach Zeit, entfernen Doppelte und markieren offene Fragen mit lila Zetteln. Ergänzen Sie Befehle, Akteure und Regeln erst, wenn die Ereignislinie steht. Offene Fragen sind kein Fehler, sondern das wertvollste Ergebnis.

## Beispiel: Ereignisse der Tourenplanung
Tour angelegt → Fahrzeug zugewiesen → Konflikt erkannt → Tour freigegeben → Fahrer benachrichtigt.

## Empfehlung
Vorher klären Workshop-Grundlagen und Stakeholder-Analyse, wer dabei sein muss. Nachher überführen Sie die Ergebnisse in Domänenmodell, Glossar und Aktivitätsdiagramme und leiten User Stories ab.

## Lieferanten
- Fachleute aus allen beteiligten Bereichen
- Entwickelnde
- Moderation

## Eingaben
- Teilnehmerliste >> [[stakeholder]] geliefert von
- Grobe Prozessbeschreibung >> [[workshop]] vorbereitet in
- Fachbegriffe >> [[dokumentenanalyse]] gesammelt in

## Ergebnisse
- Ereigniszeitlinie auf der Wand
- Fachbegriffe und Aggregate >> [[domaenenmodell]] weiterentwickelt zu
- Offene Fragen und Hotspots
- Kandidaten für Stories >> [[user-stories]] formuliert als

## Konsumenten
- Das gesamte Team
- Software-Architektur
- Product Owner

## Verknüpfungen
- ergaenzt: [[workshop]] Ein besonderer Workshop-Typ.
- danach: [[domaenenmodell]] Begriffe und Zusammenhänge als Modell darstellen.
- danach: [[aktivitaetsdiagramm]] Ablauf als Diagramm darstellen.
- danach: [[user-stories]] Ereignisse werden zu Stories.
- alternative: [[bpmn]] BPMN ist formaler, Event Storming schneller.
- danach: [[glossar]] Gemeinsame Begriffe festhalten.

## Quellen
- Brandolini, A.: Introducing EventStorming (Leanpub, 2021)
- Evans, E.: Domain-Driven Design (Addison-Wesley, 2003)
- Vernon, V.: Domain-Driven Design Distilled (Addison-Wesley, 2016)
