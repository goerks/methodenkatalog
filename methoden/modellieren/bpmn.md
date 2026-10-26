---
name: BPMN-Prozessmodell
kurz: BPMN
kategorie: modellieren
vorgehen: klassisch
phase: spezifizieren
typ: Modell
form: modell
aufwand: 1 bis 3 Stunden
werkzeuge: [Camunda Modeler, Signavio, draw.io, Bizagi]
reihenfolge: 3
grafik: bpmn
status: entwurf
karte: S-12
---

Standardnotation für Geschäftsprozesse mit Pools, Lanes, Ereignissen, Aufgaben und Gateways. Verständlich für Fachbereich und IT.

## Wofür
BPMN ist die Standardnotation für Geschäftsprozesse. Sie zeigt Abläufe mit Ereignissen, Aufgaben, Entscheidungen und den beteiligten Rollen oder Organisationen. Sie eignet sich zur Dokumentation und Diskussion, auch zwischen Fachbereich und IT.

## Wann sinnvoll
- Bei Prozessen über mehrere Rollen oder Bereiche
- Bei Prozessverbesserung und Automatisierung
- Wenn eine Prozessengine eingesetzt wird

## Wann besser nicht
- Bei kleinen, einfachen Abläufen: eine Liste genügt
- Wenn die Beteiligten die Notation nicht kennen und keine Zeit für Einführung ist

## Vorbereitung
- Prozessgrenzen und Ziel festlegen
- Beteiligte Rollen kennen
- Notation auf den Kern beschränken
- Werkzeug wählen, zum Beispiel Camunda Modeler oder draw.io

## Ablauf
1. Prozessziel und Auslöser bestimmen
2. Beteiligte als Lanes anlegen
3. Aufgaben, Gateways und Ereignisse modellieren
4. Ausnahmen und Fehlerfälle ergänzen
5. Mit Fachbereich durchsprechen

## Regeln
- Ein Prozess hat ein Start- und mindestens ein Endereignis
- Aufgaben mit Verb + Objekt benennen
- Gateways immer paarweise schliessen

## In der Praxis
Starten Sie auf hoher Ebene und verfeinern Sie nur das Wichtige. Benennen Sie Aufgaben mit Verb und Objekt und Ereignisse im Partizip («Antrag eingegangen»). Nutzen Sie wenige Symbole, das macht das Modell verständlich. Prüfen Sie jedes Modell im Gespräch mit den Beteiligten, nicht nur am Schreibtisch.

## Beispiel: Bestellung bearbeiten
Start: Bestellung eingegangen → Verfügbarkeit prüfen → [lieferbar?] → Rechnung erstellen → Versand → Ende.

## Empfehlung
Vorher klären Kontextdiagramm und Workshop den Umfang. Danach leiten Sie aus den Aufgaben User Stories ab und klären Regeln in den Geschäftsregeln. Bei einfacheren Abläufen reicht ein Aktivitätsdiagramm.

## Lieferanten
- Prozessverantwortliche
- Fachbereich

## Eingaben
- Systemgrenze >> [[kontextdiagramm]] geliefert von
- Prozesswissen >> [[workshop]] erhoben in
- Ablaufskizzen >> [[aktivitaetsdiagramm]] ergänzt durch

## Ergebnisse
- Prozessmodell
- Aufgaben als Stories >> [[user-stories]] formuliert als
- Entscheidungspunkte >> [[geschaeftsregeln]] geklärt in

## Konsumenten
- Prozessverantwortliche
- Entwicklung
- Fachbereich

## Verknüpfungen
- alternative: [[aktivitaetsdiagramm]] UML-Aktivitätsdiagramm ist leichter, wenn nur ein System im Fokus ist.
- vorher: [[workshop]] Prozess im Workshop erheben.
- vorher: [[kontextdiagramm]] Systemgrenze zuerst klären.
- danach: [[user-stories]] Aus Prozessschritten Stories ableiten.

## Karte
Teaser: Standardnotation für Geschäftsprozesse mit Ereignissen, Aufgaben und Rollen.
Gut wenn: Prozesse über mehrere Rollen | Verbessern oder automatisieren
Vorher: Prozessgrenzen und Ziel festlegen | Notation auf den Kern beschränken
Besser nicht: Kleiner Ablauf: eine Liste genügt
- Prozessgrenzen festlegen
- Rollen als Bahnen
- Ereignisse und Aufgaben setzen
- Entscheidungen ergänzen
- Mit Beteiligten prüfen

## Quellen
- OMG: Business Process Model and Notation (BPMN), Version 2.0 (2011)
- Freund, J., Rücker, B.: Praxishandbuch BPMN (Hanser)
- Silver, B.: BPMN Method and Style (Cody-Cassidy Press, 2011)
