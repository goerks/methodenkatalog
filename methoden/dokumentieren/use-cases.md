---
name: Use Cases
kurz: Use Cases
kategorie: dokumentieren
vorgehen: klassisch
phase: spezifizieren
typ: Anforderungsformat
form: artefakt
aufwand: 30 bis 90 Min. pro Use Case
werkzeuge: [Word-Vorlage, Enterprise Architect, Confluence]
grafik: usecase-text
reihenfolge: 2
status: entwurf
karte: S-02
---

Beschreibt die Interaktion zwischen Akteur und System zu einem Ziel, mit Hauptablauf, Alternativen und Fehlerfällen.

## Wofür
Ein Use Case beschreibt, wie ein Akteur mit dem System ein Ziel erreicht, in Schritten mit Hauptablauf und Alternativen. Er liefert eine vollständigere, nachvollziehbare Beschreibung als eine Story und eignet sich für fachlich oder rechtlich anspruchsvolle Abläufe.

## Wann sinnvoll
- Bei komplexen Abläufen mit vielen Ausnahmen
- In klassischen Vorhaben oder bei formalen Vorgaben
- Als Grundlage für Test und Abnahme

## Wann besser nicht
- Wenn sich Anforderungen schnell ändern und Pflege teuer wird
- Bei einfachen, selbsterklärenden Funktionen
- Wenn nur Oberflächenabläufe gemeint sind und keine Fachlichkeit

## Vorbereitung
- Akteure und Ziele aus Kontext- oder Use-Case-Diagramm sammeln
- Vorlage wählen (Name, Akteur, Vorbedingung, Hauptablauf, Alternativen, Nachbedingung)
- Fachexperten für Rückfragen einplanen
- Detailtiefe vorab festlegen: Ziel- oder Funktionsebene

## Ablauf
1. Akteur und Ziel benennen
2. Vorbedingungen und Nachbedingungen festlegen
3. Hauptablauf in nummerierten Schritten beschreiben
4. Alternativ- und Fehlabläufe ergänzen
5. Mit Stakeholdern reviewen

## Regeln
- Ein Use Case beschreibt ein Ziel eines Akteurs
- Name im Format Verb + Objekt
- Schritte sind Akteur-System-Dialog, ohne UI-Details

## In der Praxis
Ein Use Case hat ein Ziel eines Akteurs, nicht eine Funktion des Systems. Schreiben Sie in kurzen Sätzen der Form Akteur-Verb-Objekt. Der Hauptablauf läuft ohne Fehler durch, Alternativen und Fehlerfälle folgen separat. Typische Fehler sind zu feine Schritte («Knopf klicken») und die Vermischung mit Oberflächen- und Datenbankdetails.

## Beispiel: UC-04 Tour freigeben
Akteur: Disponentin. Vorbedingung: Tour ist vollständig. Ablauf: 1. Disponentin wählt «Freigeben». 2. System prüft Fahrzeug und Fahrer. 3. System sperrt Tour für Änderungen. Alternative 2a: Konflikt, System zeigt Details.

## Empfehlung
Vorher klären das Use-Case-Diagramm und das Kontextdiagramm, welche Akteure und Ziele es gibt. Danach leiten Sie Akzeptanzkriterien und Testfälle ab und nehmen den Use Case ins Pflichtenheft auf.

## Lieferanten
- Fachbereich und Nutzer
- Business Analyst

## Eingaben
- Akteure und Ziele >> [[use-case-diagramm]] geliefert von
- Systemgrenze >> [[kontextdiagramm]] geliefert von
- Ablaufskizzen >> [[aktivitaetsdiagramm]] ergänzt durch

## Ergebnisse
- Use-Case-Beschreibung mit Haupt- und Alternativabläufen
- Testgrundlage >> [[akzeptanzkriterien]] abgeleitet in
- Funktionale Anforderungen >> [[pflichtenheft]] übernommen in

## Konsumenten
- Entwicklung
- Test
- Auftraggeber

## Verknüpfungen
- ergaenzt: [[use-case-diagramm]] Das Diagramm gibt den Überblick, der Use Case die Details.
- ergaenzt: [[aktivitaetsdiagramm]] Komplexe Abläufe als Aktivitätsdiagramm darstellen.
- alternative: [[user-stories]] Für kleine, agile Einheiten sind User Stories leichter.
- danach: [[akzeptanzkriterien]] Aus Abläufen entstehen Testfälle und Kriterien.
- danach: [[pflichtenheft]] Use Cases sind Kern des Pflichtenhefts.

## Karte
Teaser: Ein Akteur erreicht ein Ziel in Schritten mit Haupt- und Alternativablauf.
Gut wenn: Komplexe Abläufe mit vielen Ausnahmen | Formale Vorgaben, Basis für Abnahme | Wenn Details und Ausnahmen zählen
Vorher: Akteure und Ziele sammeln | Vorlage wählen, Fachleute einplanen
Besser nicht: Anforderungen ändern sich schnell
- Akteur und Ziel bestimmen
- Hauptablauf in Schritten
- Alternativen und Fehler
- Vor- und Nachbedingung
- Mit Fachleuten prüfen

## Quellen
- Cockburn, A.: Writing Effective Use Cases (Addison-Wesley, 2001)
- Jacobson, I.: Object-Oriented Software Engineering (Addison-Wesley, 1992)
- IIBA: BABOK Guide, Version 3 (2015), Technik «Use Cases and Scenarios»
