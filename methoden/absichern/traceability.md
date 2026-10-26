---
name: Traceability-Matrix
kurz: Traceability
kategorie: absichern
vorgehen: klassisch
phase: absichern
typ: Verwaltung
form: artefakt
aufwand: Laufend
werkzeuge: [Doors, Polarion, Jira, Excel]
reihenfolge: 3
grafik: trace
status: entwurf
karte: A-03
---

Verbindet Anforderungen mit Quellen, Design, Code und Tests. Zeigt Abdeckung und Auswirkungen von Änderungen.

## Wofür
Die Traceability-Matrix verknüpft Anforderungen mit ihrer Herkunft und mit allem, was daraus folgt: Entwurf, Code, Tests. Damit lässt sich prüfen, ob alles umgesetzt und getestet ist, und welche Folgen eine Änderung hat.

## Wann sinnvoll
- In regulierten Bereichen mit Nachweispflicht
- Bei grossen Vorhaben mit vielen Anforderungen und Änderungen
- Wenn Auswirkungen von Änderungen abgeschätzt werden müssen

## Wann besser nicht
- Bei kleinen Vorhaben, wo der Pflegeaufwand den Nutzen übersteigt
- Wenn Verknüpfungen von Hand gepflegt werden und veralten

## Vorbereitung
- Festlegen, was verknüpft wird: Quelle, Anforderung, Test
- Eindeutige IDs für alle Anforderungen
- Werkzeug wählen: Tabelle, Jira-Links oder Anforderungswerkzeug
- Verantwortliche für die Pflege bestimmen

## Ablauf
1. Eindeutige IDs vergeben
2. Beziehungen festlegen (Quelle, Anforderung, Test)
3. Verknüpfungen pflegen
4. Abdeckung auswerten
5. Bei Änderungen Auswirkungen ableiten

## Regeln
- IDs bleiben stabil
- Nur sinnvolle Beziehungen verfolgen
- Tool-gestützt pflegen

## In der Praxis
Weniger ist mehr: Verknüpfen Sie nur, was Sie später brauchen. Pflegen Sie Verknüpfungen bei der Entstehung, nicht nachträglich. Mit Werkzeugunterstützung erzeugen Sie Berichte wie «Anforderungen ohne Test». Prüfen Sie diese Lücken regelmässig.

## Beispiel: Ausschnitt
REQ-12 → UC-04 → TC-31, TC-32 → Build 1.4

## Empfehlung
Vorher brauchen Sie ein Pflichtenheft oder Stories mit eindeutigen IDs. Danach bildet die Matrix die Grundlage für die Änderungsbewertung und den Abnahmetest.

## Lieferanten
- Requirements Engineer
- Test
- Entwicklung

## Eingaben
- Anforderungen mit IDs >> [[pflichtenheft]] geliefert von
- Testfälle >> [[akzeptanzkriterien]] geliefert von
- Szenarien >> [[use-cases]] geliefert von

## Ergebnisse
- Matrix oder Verknüpfungen im Werkzeug
- Auswirkungen von Änderungen >> [[change-management]] genutzt in
- Nachweis der Abdeckung für die Abnahme >> [[abnahmetest]] genutzt in

## Konsumenten
- Qualitätssicherung
- Auditoren
- Projektleitung

## Verknüpfungen
- ergaenzt: [[pflichtenheft]] Das Pflichtenheft liefert die IDs.
- ergaenzt: [[change-management]] Auswirkungsanalyse bei Änderungen.
- ergaenzt: [[akzeptanzkriterien]] Tests verlinken.
- ergaenzt: [[use-cases]] Use Cases verlinken.

## Karte
Teaser: Anforderungen mit Herkunft, Entwurf und Tests verknüpfen. Folgen sichtbar.
- Verknüpfungsziele festlegen
- Eindeutige IDs vergeben
- Beim Entstehen verknüpfen
- Lücken berichten
- Bei Änderungen nutzen

## Quellen
- Gotel, O., Finkelstein, A.: An Analysis of the Requirements Traceability Problem (1994), ICRE
- ISO/IEC/IEEE 29148:2018 – Requirements engineering
- Pohl, K., Rupp, C.: Basiswissen Requirements Engineering (dpunkt.verlag)
