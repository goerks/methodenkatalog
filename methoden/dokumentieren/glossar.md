---
name: Glossar
kurz: Glossar
kategorie: dokumentieren
vorgehen: beide
phase: spezifizieren
typ: Artefakt
form: artefakt
aufwand: Laufend
werkzeuge: [Confluence, Wiki]
reihenfolge: 8
status: entwurf
karte: S-07
---

Sammlung der Fachbegriffe des Vorhabens mit einheitlicher Definition. Verhindert Missverständnisse zwischen Fachbereich und Entwicklung.

## Wofür
Das Glossar sammelt Fachbegriffe mit klaren, abgestimmten Definitionen. Es schafft eine gemeinsame Sprache zwischen Fachbereich, Analyse und Entwicklung und verhindert, dass dasselbe Wort Verschiedenes bedeutet.

## Wann sinnvoll
- Ab dem Projektstart, laufend
- Wenn Missverständnisse über Begriffe auftreten
- Wenn neue Teammitglieder schnell einsteigen sollen

## Wann besser nicht
- Wenn Begriffe nur geschrieben und nie verwendet werden
- Wenn niemand für Pflege zuständig ist

## Vorbereitung
- Verantwortliche Person bestimmen
- Ablageort wählen, der für alle erreichbar ist
- Vorlage festlegen: Begriff, Definition, Synonyme, Abgrenzung, Quelle
- Erste Begriffe aus Dokumenten und Workshops übernehmen

## Ablauf
1. Begriffe aus Interviews, Dokumenten und Workshops sammeln
2. Je Begriff eine kurze Definition schreiben
3. Synonyme und verbotene Wörter vermerken
4. Mit dem Fachbereich abstimmen
5. Laufend ergänzen und verlinken

## Regeln
- Ein Begriff hat genau eine Bedeutung
- Definitionen sind kurz und verständlich
- Das Glossar liegt dort, wo alle es sehen

## In der Praxis
Fachbegriffe in der Sprache des Fachbereichs definieren, nicht der IT. Ein Begriff, eine Bedeutung: Streiten Sie bei Mehrdeutigkeit, bis eine Definition gilt. Verlinken Sie das Glossar aus Stories und Spezifikationen. Ein kurzes Glossar, das gelesen wird, ist besser als ein vollständiges, das niemand kennt.

## Beispiel: Glossareintrag
Tour: Fahrt eines Fahrzeugs mit einem Fahrer an einem Tag, bestehend aus mehreren Stopps. Nicht: Auftrag.

## Empfehlung
Vorher liefern Dokumentenanalyse und Event Storming die Begriffe. Danach hilft es dem Domänenmodell und den Geschäftsregeln, und es gehört ins Pflichtenheft.

## Lieferanten
- Fachbereich
- Recht und Compliance

## Eingaben
- Begriffe aus Unterlagen >> [[dokumentenanalyse]] geliefert von
- Begriffe aus Workshops >> [[event-storming]] geliefert von
- Bestehende Definitionen

## Ergebnisse
- Abgestimmte Begriffsliste
- Fachliche Begriffe >> [[domaenenmodell]] genutzt in
- Einheitliche Sprache >> [[user-stories]] verwendet in
- Anhang >> [[pflichtenheft]] übernommen in

## Konsumenten
- Das ganze Team
- Neue Mitarbeitende
- Test

## Verknüpfungen
- vorher: [[dokumentenanalyse]] Begriffe stammen aus Dokumenten.
- vorher: [[event-storming]] Begriffe entstehen im Workshop.
- ergaenzt: [[domaenenmodell]] Modell und Glossar nutzen dieselben Begriffe.
- ergaenzt: [[user-stories]] Stories verwenden die Begriffe.
- danach: [[pflichtenheft]] Als Anhang im Pflichtenheft.
- ergaenzt: [[geschaeftsregeln]] Regeln stützen sich auf Begriffe.

## Karte
Teaser: Fachbegriffe mit abgestimmten Definitionen: eine gemeinsame Sprache.
- Verantwortliche bestimmen
- Begriffe sammeln
- Definition, Synonym, Quelle
- Streit bis zur Einigung
- Aus Stories darauf verweisen

## Quellen
- IIBA: BABOK Guide, Version 3 (2015), Technik «Glossar»
- Evans, E.: Domain-Driven Design (Addison-Wesley, 2003), Kapitel «Ubiquitous Language»
- Pohl, K., Rupp, C.: Basiswissen Requirements Engineering (dpunkt.verlag)
