---
name: Qualitätsanforderungen (NFR)
kurz: Qualität (NFR)
kategorie: dokumentieren
vorgehen: beide
phase: spezifizieren
typ: Anforderungsart
form: artefakt
aufwand: 1 bis 3 Stunden je Themenfeld
werkzeuge: [ISO 25010, Planguage, Quality Attribute Workshop]
reihenfolge: 5
status: entwurf
karte: S-05
---

Nichtfunktionale Anforderungen wie Performance, Sicherheit, Bedienbarkeit oder Verfügbarkeit, messbar formuliert.

## Wofür
Qualitätsanforderungen (nichtfunktionale Anforderungen) beschreiben, wie gut ein System etwas tun muss: schnell, sicher, bedienbar, zuverlässig, wartbar. Sie werden oft vergessen und sind später teuer. Messbar formuliert werden sie testbar und entscheidungsfähig.

## Wann sinnvoll
- Bei jedem Vorhaben, früh genug für die Architektur
- Wenn Lastspitzen, Sicherheit oder Regulierung eine Rolle spielen
- Wenn Anforderungen wie «schnell» im Raum stehen

## Wann besser nicht
- Wenn Zahlen nur geraten sind: dann messen oder Ziele zunächst als Hypothese kennzeichnen
- Bei Wegwerf-Prototypen

## Vorbereitung
- Qualitätsmodell wie ISO 25010 als Checkliste bereitlegen
- Stakeholder mit Betriebs-, Sicherheits- und Nutzersicht einladen
- Vorhandene Messwerte des Altsystems sammeln
- Vorlage mit Messgrösse, Zielwert und Messmethode

## Ablauf
1. Qualitätsmerkmale sammeln (z. B. ISO 25010)
2. Relevante auswählen und priorisieren
3. Mit konkreten Messwerten formulieren
4. Mit Architektur und Test abstimmen
5. Als Kriterien in Stories oder Spezifikation übernehmen

## Regeln
- Jede Anforderung ist messbar (Wert, Einheit, Bedingung)
- Keine Adjektive wie «schnell» oder «sicher» ohne Zahl
- Kritische NFR früh klären, da sie Architektur prägen

## In der Praxis
Gehen Sie die Qualitätsmerkmale durch und fragen Sie je Merkmal: Wie viel genügt, woran messen wir es? «Antwortzeit unter zwei Sekunden bei 200 gleichzeitigen Nutzern» ist prüfbar, «schnell» nicht. Priorisieren Sie, denn Qualitäten stehen im Konflikt (Sicherheit gegen Bedienbarkeit). Halten Sie Annahmen fest.

## Beispiel: Performance und Verfügbarkeit
Die Tourenliste lädt bei 5000 Einträgen in unter 2 Sekunden (95. Perzentil). Verfügbarkeit werktags 06 bis 20 Uhr mindestens 99.5 %.

## Empfehlung
Vorher sind die wichtigsten Stories und Nutzer bekannt. Danach nehmen Sie die Kriterien in die Definition of Done auf und ins Pflichtenheft. Kano hilft, Qualitätsmerkmale nach Wirkung auf die Zufriedenheit zu sortieren.

## Lieferanten
- Betrieb und Sicherheit
- Fachbereich
- Architektur

## Eingaben
- Nutzungskontext >> [[user-stories]] geliefert von
- Betriebs- und Sicherheitsvorgaben
- Wirkung auf Zufriedenheit >> [[kano]] ergänzt durch

## Ergebnisse
- Messbare Qualitätsanforderungen
- Aufnahme in den Fertigstellungsmassstab >> [[dor-dod]] genutzt in
- Anforderungskatalog >> [[pflichtenheft]] übernommen in

## Konsumenten
- Architektur
- Test
- Betrieb

## Verknüpfungen
- ergaenzt: [[user-stories]] NFR als Akzeptanzkriterien oder Randbedingung an Stories.
- ergaenzt: [[dor-dod]] Wichtige NFR in der Definition of Done verankern.
- danach: [[pflichtenheft]] NFR haben ein eigenes Kapitel im Pflichtenheft.
- ergaenzt: [[kano]] Basisfaktoren im Kano-Modell sind oft NFR.

## Karte
Teaser: Wie gut muss das System sein? Schnell, sicher, bedienbar: messbar formuliert.
- Qualitätsmerkmale durchgehen
- Je Merkmal Zielwert festlegen
- Messmethode festhalten
- Konflikte gewichten
- Annahmen notieren

## Quellen
- ISO/IEC 25010:2011 – Systems and software quality models
- Gilb, T.: Competitive Engineering (Elsevier, 2005), Planguage
- Chung, L. u.a.: Non-Functional Requirements in Software Engineering (Springer, 2000)
