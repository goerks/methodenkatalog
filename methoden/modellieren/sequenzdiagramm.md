---
name: Sequenzdiagramm
kurz: Sequenzdiagramm
kategorie: modellieren
vorgehen: beide
phase: spezifizieren
typ: UML-Diagramm
form: modell
aufwand: 1 bis 2 Stunden
werkzeuge: [PlantUML, draw.io, Enterprise Architect]
reihenfolge: 11
status: entwurf
karte: S-18
---

Zeigt, in welcher Reihenfolge Beteiligte oder Systeme Nachrichten austauschen.

## Wofür
Ein Sequenzdiagramm zeigt für ein Szenario, welche Beteiligten oder Systeme in welcher Reihenfolge Nachrichten austauschen. Die Zeit läuft von oben nach unten. Es eignet sich, Schnittstellen und Zusammenspiel zu klären, etwa zwischen Nutzer, Anwendung und Drittsystem.

## Wann sinnvoll
- Wenn das Zusammenspiel mehrerer Systeme geklärt werden muss
- Bei Schnittstellen und Integrationen
- Um einen Use Case als Ablauf zwischen Beteiligten zu zeigen

## Wann besser nicht
- Bei Abläufen mit vielen Verzweigungen: dann Aktivitätsdiagramm oder BPMN
- Wenn die Beteiligten die Notation nicht kennen und keine Zeit für Einführung ist
- Bei einfachen Abläufen mit zwei Beteiligten

## Vorbereitung
- Szenario und Ziel abgrenzen
- Beteiligte und Systeme festlegen
- Use Case oder Story mit Hauptablauf bereitlegen
- Notation klären (UML 2)
- Werkzeug wählen

## Ablauf
1. Szenario und Beteiligte festlegen
2. Lebenslinien nebeneinander zeichnen
3. Nachrichten in zeitlicher Reihenfolge ergänzen
4. Antworten, Alternativen und Schleifen markieren
5. Mit den Beteiligten prüfen

## Regeln
- Ein Diagramm zeigt ein Szenario
- Nachrichten tragen Verben und Daten
- Lebenslinien entsprechen Rollen oder Systemen
- Wenige Alternativen, sonst teilen

## In der Praxis
Bleiben Sie bei einem Szenario und dem Hauptablauf, Ausnahmen kommen auf eigene Diagramme. Benennen Sie Nachrichten mit Verb und Daten («Tour speichern»), nicht mit Technikbegriffen. Zeichnen Sie das Diagramm gemeinsam mit Entwicklung und Fachseite, denn dort fallen fehlende Antworten und Annahmen über Schnittstellen auf.

## Beispiel: Tour speichern
Beteiligte: Disponentin, Tourenplaner, ERP. Nachrichten: Tour speichern → Fahrzeug prüfen (an ERP) → Verfügbarkeit melden → Warnung anzeigen oder Tour bestätigen. Beim Zeichnen fällt auf: Das ERP antwortet bis zu zwei Sekunden verzögert. Anforderung: Anzeige darf nicht blockieren.

## Empfehlung
Vorher liefert der Use Case den Hauptablauf. Danach prüft das Team die Schnittstellen mit den Systemverantwortlichen. Für Prozesse mit mehreren Rollen eignet sich BPMN besser.

## Lieferanten
- Entwicklung und Architektur
- Systemverantwortliche

## Eingaben
- Hauptablauf >> [[use-cases]] geliefert von
- Systemgrenzen >> [[kontextdiagramm]] geliefert von
- Schnittstellenbeschreibungen

## Ergebnisse
- Sequenzdiagramm eines Szenarios
- Schnittstellenanforderungen >> [[pflichtenheft]] übernommen in
- Testszenarien >> [[abnahmetest]] genutzt in

## Konsumenten
- Entwicklung
- Test
- Systemverantwortliche

## Verknüpfungen
- vorher: [[use-cases]] Der Use Case liefert den Hauptablauf.
- vorher: [[kontextdiagramm]] Das Kontextdiagramm nennt die beteiligten Systeme.
- danach: [[abnahmetest]] Szenarien werden zu Testfällen.
- alternative: [[aktivitaetsdiagramm]] Das Aktivitätsdiagramm zeigt Entscheidungen, das Sequenzdiagramm Nachrichten.
- alternative: [[bpmn]] BPMN zeigt Prozesse über mehrere Rollen.

## Karte
Teaser: Nachrichten zwischen Beteiligten in zeitlicher Reihenfolge: Zusammenspiel und Schnittstellen klären.
Gut wenn: Zusammenspiel mehrerer Systeme klären | Schnittstellen und Integrationen | Use Case als Ablauf zeigen
Vorher: Szenario und Beteiligte festlegen | Hauptablauf bereitlegen
Besser nicht: Viele Verzweigungen: besser BPMN
Regeln: Ein Diagramm zeigt ein Szenario | Nachrichten tragen Verben und Daten | Lebenslinien sind Rollen oder Systeme
- Szenario festlegen
- Lebenslinien zeichnen
- Nachrichten in Reihenfolge ergänzen
- Alternativen markieren
- Mit Beteiligten prüfen

## Quellen
- OMG: Unified Modeling Language (UML), Version 2.5.1 (2017)
- Fowler, M.: UML Distilled (Addison-Wesley, 3. Auflage 2003)
- Rupp, C., Queins, S.: UML 2 glasklar (Hanser, 4. Auflage 2012)
