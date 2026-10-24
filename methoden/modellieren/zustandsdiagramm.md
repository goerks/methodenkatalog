---
name: Zustandsdiagramm
kategorie: modellieren
vorgehen: klassisch
phase: spezifizieren
typ: Modell
aufwand: 30 Min.
werkzeuge: [draw.io, PlantUML, Enterprise Architect]
reihenfolge: 5
status: entwurf
---

Zeigt Zustände eines Objekts und die Ereignisse, die zwischen ihnen wechseln. Gut für Lebenszyklen wie Bestellungen oder Tickets.

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

## Beispiel: Tour
Entwurf → (freigeben) → Freigegeben → (starten) → Unterwegs → (abschliessen) → Abgeschlossen. Aus Entwurf und Freigegeben: stornieren → Storniert.

## Verknüpfungen
- ergaenzt: [[aktivitaetsdiagramm]] Ablauf (Aktivität) und Zustand (Objekt) ergänzen sich.
- ergaenzt: [[use-cases]] Vor-/Nachbedingungen entsprechen Zuständen.
- danach: [[akzeptanzkriterien]] Zustandsübergänge als Testfälle.
