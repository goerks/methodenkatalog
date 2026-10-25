---
name: Zustandsdiagramm
kurz: Zustandsdiagramm
kategorie: modellieren
vorgehen: klassisch
phase: spezifizieren
typ: Modell
form: modell
aufwand: 30 Min.
werkzeuge: [draw.io, PlantUML, Enterprise Architect]
reihenfolge: 5
grafik: zustand
status: entwurf
---

Zeigt Zustände eines Objekts und die Ereignisse, die zwischen ihnen wechseln. Gut für Lebenszyklen wie Bestellungen oder Tickets.

## Wofür
Das Zustandsdiagramm zeigt, welche Zustände ein Objekt wie Bestellung oder Antrag annehmen kann und welche Ereignisse zwischen ihnen wechseln. Es macht zulässige und unzulässige Übergänge sichtbar und klärt den Lebenszyklus.

## Wann sinnvoll
- Bei Objekten mit einem Lebenszyklus (Antrag, Bestellung, Vertrag)
- Wenn unklar ist, was in welchem Zustand erlaubt ist
- Zur Vorbereitung von Tests der Übergänge

## Wann besser nicht
- Bei Objekten ohne relevante Zustände
- Wenn es um Abläufe mit mehreren Akteuren geht: dann Aktivitätsdiagramm oder BPMN

## Vorbereitung
- Das Objekt und seine Lebensphasen benennen
- Ereignisse sammeln, die Zustände ändern
- Fachexperten, die den Lebenszyklus kennen
- Whiteboard oder Zeichenwerkzeug

## Ablauf
1. Objekt und Lebenszyklus festlegen
2. Zustände sammeln
3. Übergänge mit Ereignis [Bedingung] / Aktion beschriften
4. Start- und Endzustand ergänzen
5. Mit Fachbereich prüfen

## Regeln
- Zustände sind Adjektive oder Partizipien (offen, geprüft)
- Jeder Übergang hat ein auslösendes Ereignis
- Keine toten Zustände

## In der Praxis
Zustände sind Substantive oder Adjektive («offen», «geprüft»), Übergänge benennen Sie mit Ereignis und Bedingung. Prüfen Sie: Gibt es Zustände ohne Ausgang? Sind Endzustände erreichbar? Gibt es unzulässige Übergänge? Gerade diese Fragen decken Fachlücken auf.

## Beispiel: Tour
Entwurf → (freigeben) → Freigegeben → (starten) → Unterwegs → (abschliessen) → Abgeschlossen. Aus Entwurf und Freigegeben: stornieren → Storniert.

## Empfehlung
Vorher helfen Aktivitätsdiagramm und Use Cases, um Ereignisse zu finden. Danach leiten Sie Akzeptanzkriterien für jeden Übergang ab.

## Lieferanten
- Fachbereich
- Business Analyst

## Eingaben
- Abläufe >> [[aktivitaetsdiagramm]] geliefert von
- Szenarien >> [[use-cases]] geliefert von

## Ergebnisse
- Zustandsdiagramm
- Testbare Übergänge >> [[akzeptanzkriterien]] abgeleitet in

## Konsumenten
- Entwicklung
- Test
- Fachbereich

## Verknüpfungen
- ergaenzt: [[aktivitaetsdiagramm]] Ablauf (Aktivität) und Zustand (Objekt) ergänzen sich.
- ergaenzt: [[use-cases]] Vor-/Nachbedingungen entsprechen Zuständen.
- danach: [[akzeptanzkriterien]] Zustandsübergänge als Testfälle.

## Quellen
- Harel, D.: Statecharts: A Visual Formalism for Complex Systems (1987)
- OMG: Unified Modeling Language (UML), Version 2.5.1 (2017)
- Fowler, M.: UML Distilled, 3. Auflage (2003)
