---
name: Abnahmetest (UAT)
kurz: Abnahmetest
kategorie: absichern
vorgehen: beide
phase: absichern
typ: Test
form: methode
aufwand: Stunden bis Tage
werkzeuge: [Jira, Cucumber]
reihenfolge: 5
status: entwurf
karte: A-05
---

Der Fachbereich prüft das fertige System anhand echter Abläufe und entscheidet, ob es die Anforderungen erfüllt und produktiv gehen darf.

## Wofür
Der Abnahmetest (User Acceptance Test) prüft, ob das Ergebnis die Erwartungen der Anwender und des Auftraggebers erfüllt und für den Betrieb geeignet ist. Er ist der letzte Schritt vor der Freigabe und gibt dem Fachbereich das Wort.

## Wann sinnvoll
- Vor jeder Freigabe, auch bei agilen Releases
- Wenn der Fachbereich formal abnehmen muss
- Bei Verträgen mit Abnahmekriterien

## Wann besser nicht
- Als Ersatz für frühere Tests: er findet Fehler spät und teuer
- Wenn Kriterien nicht vorab vereinbart wurden

## Vorbereitung
- Abnahmekriterien und Testfälle aus Akzeptanzkriterien und Use Cases ableiten
- Testumgebung mit realistischen Daten bereitstellen
- Testpersonen aus dem Fachbereich einplanen und schulen
- Ablauf, Zeitraum und Fehlerklassen festlegen
- Meldeweg für Fehler, zum Beispiel Jira

## Ablauf
1. Testfälle aus Akzeptanzkriterien und Use Cases ableiten
2. Testdaten und Umgebung vorbereiten
3. Fachbereich führt die Testfälle aus
4. Abweichungen erfassen und bewerten
5. Abnahme entscheiden und festhalten

## Regeln
- Fachseite testet, nicht die Entwicklung
- Abnahmekriterien vorher vereinbart
- Jede Abweichung wird mit Entscheid dokumentiert

## In der Praxis
Fachleute testen echte Aufgaben, nicht Einzelfunktionen. Jeder Fehler wird mit Schritten, Erwartung und Ergebnis erfasst und klassifiziert (Showstopper, schwer, leicht). Legen Sie vorab fest, bei welchen Fehlern die Abnahme verweigert wird. Dokumentieren Sie das Ergebnis mit Unterschrift oder Freigabe im Werkzeug.

## Beispiel: Testfall zur Tourenfreigabe
Disponentin gibt Tour mit Fahrzeugkonflikt frei. Erwartet: Warnung mit Name der Konflikttour. Ergebnis: bestanden.

## Empfehlung
Vorher brauchen Sie klare Akzeptanzkriterien und eine Rückverfolgbarkeit von Anforderungen zu Tests. Nachher folgt Freigabe oder Nachbesserung.

## Lieferanten
- Fachbereich und Anwender
- Test
- Auftraggeber

## Eingaben
- Kriterien >> [[akzeptanzkriterien]] geliefert von
- Szenarien >> [[use-cases]] geliefert von
- Abdeckung >> [[traceability]] geliefert von

## Ergebnisse
- Testprotokoll und Fehlerliste
- Abnahmeentscheidung
- Freigabe für den Betrieb

## Konsumenten
- Auftraggeber
- Betrieb
- Projektleitung

## Verknüpfungen
- vorher: [[akzeptanzkriterien]] Kriterien liefern die Testfälle.
- vorher: [[use-cases]] Abläufe liefern die Testfälle.
- ergaenzt: [[review]] Review prüft Dokumente, UAT das System.
- ergaenzt: [[dor-dod]] Die Abnahme ist Teil von Done.
- ergaenzt: [[traceability]] Tests mit Anforderungen verknüpfen.

## Karte
Teaser: Anwender prüfen, ob das Ergebnis ihre Erwartungen erfüllt. Letzter Schritt vor Freigabe.
Gut wenn: Vor jeder Freigabe | Fachbereich nimmt formal ab | Bei Verträgen mit Abnahmekriterien
Vorher: Testfälle aus Kriterien ableiten | Realistische Daten und Testpersonen
Besser nicht: Als Ersatz früherer Tests: zu spät
- Kriterien und Testfälle ableiten
- Testumgebung bereitstellen
- Fachleute testen echte Aufgaben
- Fehler klassieren
- Entscheid dokumentieren

## Quellen
- ISTQB: Certified Tester Foundation Level Syllabus (istqb.org), Abnahmetest
- Crispin, L., Gregory, J.: Agile Testing (Addison-Wesley, 2009)
- IIBA: BABOK Guide, Version 3 (2015), Technik «Acceptance and Evaluation Criteria»
