---
name: Gherkin und BDD
kurz: Gherkin / BDD
kategorie: dokumentieren
vorgehen: agil
phase: spezifizieren
typ: Beispielspezifikation
form: artefakt
aufwand: 15 bis 45 Min. pro Szenario
werkzeuge: [Cucumber, Azure DevOps, Jira]
reihenfolge: 12
status: entwurf
karte: S-22
---

Anforderungen als ausführbare Beispiele in «Gegeben, Wenn, Dann», die Fachbereich, Test und Entwicklung gemeinsam lesen.

## Wofür
Behavior-Driven Development (BDD) beschreibt Verhalten in konkreten Szenarien. Die Sprache Gherkin gibt ihnen eine feste Form: Feature, Szenario, Gegeben, Wenn, Dann. Die Szenarien dienen als gemeinsames Verständnis, als Akzeptanzkriterien und, mit Werkzeugen wie Cucumber, als automatisierter Test.

## Wann sinnvoll
- Wenn Fachbereich, Test und Entwicklung dasselbe Beispiel brauchen
- Wenn Regeln über konkrete Fälle geklärt werden sollen
- Wenn Akzeptanztests automatisiert werden sollen

## Wann besser nicht
- Für reine Oberflächengestaltung oder Layout
- Wenn niemand Szenarien pflegt: sie veralten schnell
- Für ausschliesslich technische Anforderungen ohne Fachbezug

## Vorbereitung
- Story oder Anforderung mit klarem Ziel
- Beispiele aus dem Fachbereich sammeln (zum Beispiel im Example Mapping)
- Glossar der Fachbegriffe bereithalten
- Format und Werkzeug klären

## Ablauf
1. Beispiele und Regeln mit dem Fachbereich besprechen
2. Feature mit Nutzen kurz beschreiben
3. Szenarien in Gegeben, Wenn, Dann formulieren
4. Szenarien mit Fachbereich und Test prüfen
5. Szenarien ablegen und, wenn gewünscht, automatisieren

## Regeln
- Ein Szenario beschreibt genau ein Verhalten
- Fachsprache statt Bedienschritte
- Konkrete Werte statt allgemeine Aussagen
- Kurz: höchstens fünf bis acht Schritte

## In der Praxis
Die Kraft liegt im Gespräch, nicht im Werkzeug. Schreiben Sie Szenarien zusammen mit dem Fachbereich, nicht allein im Büro. Vermeiden Sie «Klicke auf den Knopf»: Beschreiben Sie, was fachlich passiert. Sonst brechen die Szenarien bei jeder Oberflächenänderung.

## Beispiel: Konflikt erkennen
Feature: Doppelbelegung erkennen. Szenario: Gegeben Fahrzeug 12 hat am Montag von 8 bis 12 Uhr eine Tour. Wenn die Disponentin eine zweite Tour von 10 bis 14 Uhr anlegt, dann zeigt das System eine Warnung «Fahrzeug belegt».

## Empfehlung
Vorher sammelt Example Mapping die Beispiele, die User Story liefert das Ziel. Danach laufen die Szenarien als Abnahmetest. Für kurze Kriterien reichen Akzeptanzkriterien in Listenform.

## Lieferanten
- Fachbereich
- Product Owner
- Testerinnen und Tester

## Eingaben
- Beispiele und Regeln >> [[example-mapping]] geliefert von
- Anforderung >> [[user-stories]] geliefert von

## Ergebnisse
- Feature-Dateien mit Szenarien
- Abnahmekriterien >> [[akzeptanzkriterien]] ergänzt durch
- Automatisierte Tests >> [[abnahmetest]] genutzt in

## Konsumenten
- Entwicklungsteam
- Test
- Product Owner

## Verknüpfungen
- vorher: [[example-mapping]] Beispiele sind gesammelt.
- vorher: [[user-stories]] Das Ziel ist beschrieben.
- danach: [[abnahmetest]] Die Szenarien laufen als Test.
- ergänzt: [[akzeptanzkriterien]] Sie machen Kriterien ausführbar.
- ergänzt: [[geschaeftsregeln]] Regeln werden durch Beispiele geprüft.

## Karte
Teaser: Anforderungen als konkrete Beispiele in «Gegeben, Wenn, Dann»: gemeinsames Verständnis und Test in einem.
Gut wenn: Fachbereich, Test und Entwicklung eng arbeiten | Regeln über Beispiele klären | Tests automatisiert laufen sollen
Vorher: Beispiele sammeln | Ziel der Story klären
Besser nicht: Es geht um Layout oder reine Technik
Regeln: Ein Szenario, ein Verhalten | Fachsprache statt Klickschritte | Konkrete Werte nennen
- Beispiele besprechen
- Feature beschreiben
- Szenarien formulieren
- Mit Fachbereich prüfen
- Ablegen oder automatisieren

## Quellen
- North, D.: Introducing BDD (dannorth.net, 2006)
- Wynne, M.; Hellesøy, A.: The Cucumber Book (Pragmatic Bookshelf, 2. Auflage 2017)
- Adzic, G.: Specification by Example (Manning, 2011)
