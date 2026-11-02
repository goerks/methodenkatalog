---
name: Anforderungsreview (Inspektion)
kurz: Anforderungsreview
kategorie: absichern
vorgehen: klassisch
phase: absichern
typ: Prüfverfahren
form: meeting
aufwand: 1 bis 3 Stunden
werkzeuge: [Confluence, Word]
reihenfolge: 8
status: entwurf
karte: A-08
---

Prüft Anforderungen vor der Umsetzung mit Checkliste und Rollen auf Fehler, Lücken und Widersprüche.

## Wofür
Beim Anforderungsreview lesen mehrere Personen Anforderungen gezielt gegen Prüfkriterien. Formen sind der Walkthrough (Autor führt durch), die Stellungnahme (jede liest allein und schickt Befunde) und die formale Inspektion mit Rollen. Gefundene Fehler kosten jetzt wenig, später viel.

## Wann sinnvoll
- Bevor Anforderungen in Entwicklung oder Vertrag gehen
- Wenn Anforderungen verbindlich sind oder Sicherheit betreffen
- Wenn verschiedene Sichten (Fachbereich, Test, Technik) gebraucht werden

## Wann besser nicht
- Bei sehr kleinen, schnell überholten Anforderungen
- Wenn niemand Zeit zum Lesen einplant
- Wenn Befunde nicht bearbeitet werden

## Vorbereitung
- Prüfgegenstand und Umfang festlegen (nicht zu gross)
- Checkliste mit Qualitätskriterien bereitstellen
- Rollen verteilen (Moderation, Autor, Protokoll, Prüfende)
- Prüfende lesen vorher einzeln

## Ablauf
1. Gegenstand, Rollen und Kriterien klären
2. Prüfende lesen einzeln und notieren Befunde
3. Befunde in der Sitzung zusammentragen
4. Befunde nach Schwere einstufen und Verantwortliche bestimmen
5. Korrektur nachverfolgen und Ergebnis festhalten

## Regeln
- Prüfen die Anforderung, nicht die Person
- Befunde sammeln, nicht in der Sitzung lösen
- Kriterien aus einer Checkliste, nicht aus dem Bauch
- Jeder Befund hat einen Besitzer und einen Termin

## In der Praxis
Die Vorbereitung entscheidet über die Wirkung. Geben Sie jeder Rolle eine Sicht: Test prüft Prüfbarkeit, Fachbereich Richtigkeit, Entwicklung Machbarkeit. Prüfen Sie kleine Abschnitte von etwa zehn Seiten. Ein Prüfprotokoll mit Zahl der Befunde zeigt, ob die Qualität steigt.

## Beispiel: Kapitel Freigabe
Fünf Prüfende lesen das Kapitel. Befunde: «schnell» ohne Zahl (unklar), zwei Regeln widersprechen sich (Fehler), Ausnahme bei Feiertagen fehlt (Lücke). Alle drei werden bis Freitag korrigiert, nach der Korrektur prüft die Moderation nach.

## Empfehlung
Vorher entsteht das Dokument, zum Beispiel SRS oder Pflichtenheft. Danach folgen Freigabe und Abnahme. Für agile Teams übernehmen Refinement und Review diese Rolle.

## Lieferanten
- Autorinnen und Autoren
- Fachbereich
- Test und Entwicklung

## Eingaben
- Anforderungsdokument >> [[srs]] geliefert von
- Anforderungen als Stories >> [[user-stories]] geliefert von

## Ergebnisse
- Befundliste mit Verantwortlichen
- Freigegebene Version >> [[abnahmetest]] genutzt in

## Konsumenten
- Autorinnen und Autoren
- Projektleitung
- Auftraggeber

## Verknüpfungen
- vorher: [[srs]] Das Dokument liegt vor.
- vorher: [[pflichtenheft]] Auch das Pflichtenheft wird geprüft.
- danach: [[abnahmetest]] Geprüfte Anforderungen sind testbar.
- alternative: [[review]] Der Sprint Review prüft das Ergebnis, nicht die Anforderung.
- danach: [[konfliktloesung]] Gefundene Widersprüche werden geklärt.

## Karte
Teaser: Anforderungen mit Checkliste und Rollen auf Fehler, Lücken und Widersprüche prüfen, vor der Umsetzung.
Gut wenn: Anforderungen verbindlich werden | Sicherheit betroffen ist | Mehrere Sichten gebraucht werden
Vorher: Umfang festlegen | Checkliste bereitstellen
Besser nicht: Niemand plant Lesezeit ein
Regeln: Anforderung prüfen, nicht Person | Befunde sammeln, nicht lösen | Jeder Befund hat Besitzer
- Rollen und Kriterien
- Einzeln lesen
- Befunde sammeln
- Nach Schwere einstufen
- Korrektur nachverfolgen

## Quellen
- Fagan, M.: Design and Code Inspections to Reduce Errors in Program Development, IBM Systems Journal 15 (1976)
- ISO/IEC/IEEE 29148:2018, Requirements engineering
- Pohl, K.; Rupp, C.: Basiswissen Requirements Engineering (dpunkt, 5. Auflage 2021)
