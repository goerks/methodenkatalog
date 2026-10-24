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
---

Standardnotation für Geschäftsprozesse mit Pools, Lanes, Ereignissen, Aufgaben und Gateways. Verständlich für Fachbereich und IT.

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

## Beispiel: Bestellung bearbeiten
Start: Bestellung eingegangen → Verfügbarkeit prüfen → [lieferbar?] → Rechnung erstellen → Versand → Ende.

## Verknüpfungen
- alternative: [[aktivitaetsdiagramm]] UML-Aktivitätsdiagramm ist leichter, wenn nur ein System im Fokus ist.
- vorher: [[workshop]] Prozess im Workshop erheben.
- vorher: [[kontextdiagramm]] Systemgrenze zuerst klären.
- danach: [[user-stories]] Aus Prozessschritten Stories ableiten.
