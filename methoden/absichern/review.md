---
name: Review / Inspektion
kurz: Review
kategorie: absichern
vorgehen: beide
phase: absichern
typ: Prüfung
form: meeting
aufwand: 1 bis 2 Stunden
werkzeuge: [Checkliste, Confluence, Jira]
reihenfolge: 1
status: entwurf
karte: A-01
---

Gemeinsame Prüfung von Anforderungen oder Ergebnissen auf Vollständigkeit, Verständlichkeit und Widerspruchsfreiheit.

## Wofür
Ein Review prüft Arbeitsergebnisse wie Anforderungen, Modelle oder Dokumente gemeinsam auf Fehler, Lücken und Widersprüche. Je früher Fehler gefunden werden, desto billiger sind sie zu beheben. Im agilen Kontext gibt es zudem das Sprint Review, in dem das Ergebnis den Stakeholdern gezeigt wird.

## Wann sinnvoll
- Bevor Anforderungen in die Umsetzung gehen
- Bei kritischen Dokumenten wie Pflichtenheft oder Spezifikation
- Am Ende eines Sprints mit den Stakeholdern

## Wann besser nicht
- Wenn das Dokument noch in grossen Teilen fehlt
- Wenn niemand Zeit zur Vorbereitung hat: oberflächliche Reviews kosten Zeit und finden wenig

## Vorbereitung
- Prüfgegenstand und Ziel festlegen
- Prüfkriterien oder Checkliste vorbereiten (vollständig, eindeutig, prüfbar, widerspruchsfrei)
- Rollen verteilen: Autor, Moderation, Prüfende, Protokoll
- Unterlagen vorab verteilen und Zeit zum Lesen einplanen
- Treffen von 60 bis 90 Minuten

## Ablauf
1. Prüfumfang und Rollen festlegen
2. Dokument vorab lesen
3. Befunde in der Sitzung sammeln
4. Mängel einordnen und Verantwortliche bestimmen
5. Nachprüfung der Korrekturen

## Regeln
- Prüfen, nicht Personen bewerten
- Checkliste für Qualitätskriterien
- Befunde schriftlich festhalten

## In der Praxis
Prüfende lesen vorab und notieren Befunde. Im Treffen werden Befunde gesammelt, nicht diskutiert, wie sie zu beheben sind. Bewerten Sie die Schwere und legen Sie Verantwortliche fest. Prüfen Sie Personen nicht, sondern das Dokument. Bei Mängeln folgt ein Nachreview.

## Beispiel: Checkliste
Eindeutig? Testbar? Vollständig? Widerspruchsfrei? Machbar? Mit ID versehen?

## Empfehlung
Vorher müssen Akzeptanzkriterien oder ein Pflichtenheft vorliegen. Nachher fliessen Befunde in Änderungen, und die Definition of Done benennt, welche Reviews nötig sind. Prototypen sind eine Alternative, wenn Nutzer das Ergebnis erleben sollen.

## Lieferanten
- Autor des Prüfgegenstands
- Fachbereich
- Qualitätssicherung

## Eingaben
- Kriterien >> [[akzeptanzkriterien]] geliefert von
- Dokument >> [[pflichtenheft]] geliefert von
- Prüfmassstab >> [[dor-dod]] geliefert von

## Ergebnisse
- Befundliste mit Schwere
- Entscheidung: freigegeben, überarbeiten, abgelehnt
- Verbesserte Dokumente

## Konsumenten
- Autor
- Projektleitung
- Entwicklungsteam

## Verknüpfungen
- vorher: [[akzeptanzkriterien]] Kriterien prüfen.
- vorher: [[pflichtenheft]] Dokumente reviewen.
- ergaenzt: [[dor-dod]] Done verlangt ein Review.
- alternative: [[prototyping]] Prototypen erlauben praktische Prüfung.

## Karte
Teaser: Arbeitsergebnisse gemeinsam auf Fehler, Lücken und Widersprüche prüfen.
Gut wenn: Vor der Umsetzung | Kritische Dokumente prüfen
Vorher: Prüfgegenstand und Ziel festlegen | Checkliste und Rollen verteilen
Besser nicht: Das Dokument fehlt noch grösstenteils
- Gegenstand und Kriterien klären
- Rollen verteilen
- Vorab lesen
- Befunde sammeln, bewerten
- Entscheiden, nachprüfen

## Quellen
- Fagan, M.: Design and code inspections to reduce errors in program development (1976), IBM Systems Journal 15(3)
- Gilb, T., Graham, D.: Software Inspection (Addison-Wesley, 1993)
- ISO/IEC 20246:2017 – Work product reviews
