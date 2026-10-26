---
name: Geschäftsregeln
kurz: Regeln
kategorie: dokumentieren
vorgehen: klassisch
phase: spezifizieren
typ: Artefakt
form: artefakt
aufwand: Stunden bis Tage
werkzeuge: [Confluence, Excel]
reihenfolge: 9
status: entwurf
karte: S-08
---

Verbindliche Regeln der Fachseite, etwa Berechnungen, Fristen und Bedingungen. Werden getrennt von Funktionen beschrieben und eindeutig nummeriert.

## Wofür
Geschäftsregeln halten fest, was in der Organisation gilt: Vorgaben, Bedingungen und Berechnungen wie «Rabatt ab 10 Stück». Sie werden getrennt von Prozessen und Funktionen gepflegt, damit sie sich ändern lassen, ohne das System neu zu entwerfen.

## Wann sinnvoll
- Bei regelreichen Bereichen wie Versicherung, Bank oder Verwaltung
- Wenn dieselbe Regel an mehreren Stellen gilt
- Wenn Regeln sich häufig ändern

## Wann besser nicht
- Bei wenigen, stabilen Regeln genügen Akzeptanzkriterien
- Wenn Regeln nur als Gewohnheit existieren und niemand sie begründen kann

## Vorbereitung
- Regelquellen identifizieren: Gesetz, Verträge, Fachbereich
- Verantwortliche je Regel klären
- Vorlage: Nummer, Regeltext, Quelle, Gültigkeit, Verantwortliche
- Glossar bereitlegen

## Ablauf
1. Regeln aus Dokumenten, Gesprächen und Altsystemen sammeln
2. Je Regel eine Zeile mit eindeutiger Nummer anlegen
3. Als «Wenn ... dann ...» formulieren
4. Mit dem Fachbereich bestätigen lassen
5. Regeln mit Anforderungen und Tests verknüpfen

## Regeln
- Eine Regel pro Zeile
- Jede Regel hat eine verantwortliche Stelle
- Regeln sind prüfbar, mit konkreten Werten

## In der Praxis
Formulieren Sie Regeln atomar und im Aktiv («Eine Bestellung über 500 Franken braucht eine Freigabe»). Unterscheiden Sie Bedingungen, Berechnungen und Ableitungen. Nennen Sie je Regel die Quelle und den Eigner. Entscheidungstabellen helfen bei Kombinationen. Prüfen Sie Regeln auf Widersprüche.

## Beispiel: Regel BR-07
Wenn eine Tour länger als 10 Stunden dauert, dann muss ein zweiter Fahrer eingeplant werden.

## Empfehlung
Vorher liefern Dokumentenanalyse und Glossar die Grundlage. Danach werden Regeln in Akzeptanzkriterien umgesetzt und ins Pflichtenheft übernommen. Das Domänenmodell und BPMN zeigen, wo Regeln im Ablauf greifen.

## Lieferanten
- Fachbereich und Regeleigner
- Recht und Compliance

## Eingaben
- Gesetze und Vorgaben >> [[dokumentenanalyse]] geliefert von
- Fachbegriffe >> [[glossar]] geliefert von
- Begriffsmodell >> [[domaenenmodell]] ergänzt durch

## Ergebnisse
- Regelkatalog mit Quelle und Eigner
- Testbare Beispiele >> [[akzeptanzkriterien]] abgeleitet in
- Verbindliche Vorgaben >> [[pflichtenheft]] übernommen in

## Konsumenten
- Entwicklung
- Test
- Fachbereich

## Verknüpfungen
- vorher: [[dokumentenanalyse]] Regeln stehen oft in Dokumenten.
- ergaenzt: [[domaenenmodell]] Regeln verbinden die Begriffe des Modells.
- ergaenzt: [[glossar]] Regeln stützen sich auf Begriffe.
- danach: [[akzeptanzkriterien]] Regeln werden zu testbaren Kriterien.
- danach: [[pflichtenheft]] Regeln stehen im Pflichtenheft.
- ergaenzt: [[bpmn]] Gateways im Prozess folgen den Regeln.

## Karte
Teaser: Was in der Organisation gilt, getrennt von Prozess und Funktion gepflegt.
- Regelquellen finden
- Regeln atomar formulieren
- Eigner und Quelle nennen
- Auf Widersprüche prüfen
- In Tests übernehmen

## Quellen
- Ross, R.: Business Rule Concepts (Business Rule Solutions, 2013)
- Business Rules Group: The Business Rules Manifesto (2003)
- IIBA: BABOK Guide, Version 3 (2015), Technik «Geschäftsregelanalyse»
