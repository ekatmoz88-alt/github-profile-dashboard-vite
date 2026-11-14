# GitHub Portfolio Dashboard

[English](README.md) | [Русский](README.ru.md)

**Публичный дашборд:** https://github-profile-dashboard-vite.vercel.app/  
**GitHub Pages:** https://ekatmoz88-alt.github.io/github-profile-dashboard-vite/  
**Двуязычный реестр и аудит:** https://ekatmoz88-alt.github.io/github-profile-dashboard-vite/portfolio-audit.html

## Назначение

Дашборд показывает отобранные кейсы технического письма и динамический список публичных репозиториев GitHub-аккаунта. Каждый кейс сохраняет границы исходного проекта и ведёт к соответствующей документации или репозиторию.

## Подсчёт проектов и репозиториев

- **8 избранных карточек** — отобранные портфельные кейсы, а не полный список репозиториев.
- **24 публичных репозитория** — динамический индекс GitHub API.
- **2 приватных репозитория** — не отображаются в публичном индексе.
- Встроенный обзор C# / SQLite — компонентный анализ в направлении Deshifrator, а не отдельный репозиторий.

Реестр фиксирует срез инвентаризации, языки документации, границы проектов, теги и несоответствия метаданных. Список публичных репозиториев в самом дашборде загружается динамически.

## Избранные направления

- [ППО «Территория» и связанная документация ПО](https://github.com/ekatmoz88-alt/territory-descriptor-unified) — единый навигационный репозиторий с сохранением границ отдельных систем. [Архитектурный каталог EN/RU](https://ekatmoz88-alt.github.io/territory-descriptor-unified/materials/architecture/architecture.html) · [Контекст системы и границы — RU](https://github.com/ekatmoz88-alt/territory-descriptor-unified/blob/main/materials/architecture/system-context-and-scope.ru.md) · [System context and scope — EN](https://github.com/ekatmoz88-alt/territory-descriptor-unified/blob/main/materials/architecture/system-context-and-scope.en.md).
- [Oracle Global11 — Data Model & OLAP Architecture](https://github.com/ekatmoz88-alt/global11-demo-data-platform) — историческая среда Oracle Global 11g, развёрнутая и эксплуатировавшаяся на офисном сервере. Документация охватывает подготовку и изменения реляционной схемы, размерное проектирование в Oracle SQL Developer Data Modeler, ролевые временные измерения, level-based и ragged hierarchies, использование измерений в кубах, меры, метаданные DMRS и процесс экспорта в Oracle Analytic Workspace. [Опубликованная документация](https://ekatmoz88-alt.github.io/global11-demo-data-platform/) · [История Data Modeler design](https://ekatmoz88-alt.github.io/global11-demo-data-platform/GLOBAL11-DATA-MODELER-DESIGN.ru.html) · [Спецификация Cube_1111](https://ekatmoz88-alt.github.io/global11-demo-data-platform/CUBE-1111-FINAL-SPECIFICATION.html).
- [Orders API Documentation](https://github.com/ekatmoz88-alt/api-docs-portfolio-v2) — REST API reference, OpenAPI 3.1 и Docs-as-Code validation.
- [VIWI / VSM — Sanitized Architecture Documentation](https://ekatmoz88-alt.github.io/viwi-vsm-architecture/) — документация архитектурных концепций service mapping, валидации и генерации кода; публичная версия очищена от ограниченных проектных сведений.
- Enterprise system architecture и документация нескольких независимых систем.
- C++ UI component documentation.
- Fintech workflows и security documentation.
- Docs-as-Code и автоматизация QA.
- Hardware documentation.

## Технологии

React 18 · Vite 6 · JavaScript · GitHub REST API · GitHub Actions · GitHub Pages · Vercel.

## Запуск локально

Требования: Node.js 24 и npm.

```bash
npm ci
npm run dev
npm run build
npm run preview
```

## Избранная архитектурная документация

- [Обмен данными и администрирование — RU](https://github.com/ekatmoz88-alt/territory-descriptor-unified/blob/main/materials/architecture/data-exchange-and-administration.ru.md)
- [Data exchange and administration — EN](https://github.com/ekatmoz88-alt/territory-descriptor-unified/blob/main/materials/architecture/data-exchange-and-administration.en.md)

## Границы и доказательность

Дашборд — индекс портфолио, а не заявление о том, что автор разработал все перечисленные системы. Описания различают документационные кейсы, анализ исходного кода, демонстрационные модели и исторические системы. Общая навигация не означает общую исполняемую архитектуру. Факты развёртывания системы не следует трактовать как доказательство развёртывания Oracle Analytic Workspace runtime.

## Теги

`portfolio-dashboard` · `react` · `vite` · `github-api` · `technical-writing` · `repository-audit` · `en-ru`

## Карта Enterprise Documentation

В карточке Enterprise Systems Architecture добавлена ссылка на сводный [обзор Enterprise Technical Documentation](https://ekatmoz88-alt.github.io/technical-writing-portfolio/enterprise-documentation/) с модулем диаграмм C4, UML Sequence и BPMN 2.0. В обзоре отдельно отмечены подтверждённые исходниками материалы, демонстрационные модели и аналитические реконструкции.
