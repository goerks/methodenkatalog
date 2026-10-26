---
name: Cucumber
kategorie: werkzeuge
vorgehen: beide
typ: Testautomatisierung
form: werkzeug
reihenfolge: 7
status: entwurf
karte: W-07
---

Führt Akzeptanzkriterien im Format Gegeben, Wenn, Dann (Gherkin) als automatische Tests aus. Verbindet Anforderung und Test.

## Wofür
Cucumber führt Akzeptanzkriterien im Format Gegeben-Wenn-Dann (Gherkin) als automatisierte Tests aus. So verbindet es Anforderung und Test in einer lesbaren Form.

## Wann sinnvoll
- Wenn Kriterien als lebende Dokumentation gelten sollen
- Wenn Fachbereich, Test und Entwicklung dieselben Szenarien nutzen

## Wann besser nicht
- Wenn niemand die Szenarien pflegt: Pflegeaufwand wächst
- Bei sehr vielen Szenarien, die den Build verlangsamen

## Einsatz
- Szenarien in Gherkin schreiben
- Schritte mit Testcode verbinden
- Szenarien bei jedem Build ausführen
- Ergebnisse als lebende Dokumentation nutzen

## Grenzen
- Braucht Disziplin bei der Formulierung
- Entwicklungsaufwand für den Testcode
- Zu viele Szenarien verlangsamen den Build

## Karte
Teaser: Führt Kriterien im Format Gegeben-Wenn-Dann als automatische Tests aus.
- Szenarien in Gherkin schreiben
- Mit Testcode verbinden
- Bei jedem Build ausführen
- Als lebende Dokumentation nutzen

## Quellen
- Cucumber: Dokumentation (cucumber.io)
- Wynne, M., Hellesøy, A.: The Cucumber Book (Pragmatic Bookshelf, 2012)
