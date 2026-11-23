# GitHub Portfolio Dashboard

[English](README.md) | [Русский](README.ru.md)

**Публичный дашборд:** https://github-profile-dashboard-vite.vercel.app/  
**GitHub Pages:** https://ekatmoz88-alt.github.io/github-profile-dashboard-vite/  
**Двуязычный реестр и аудит:** https://ekatmoz88-alt.github.io/github-profile-dashboard-vite/portfolio-audit.html

> Исследую сложные программные системы, восстанавливаю их архитектуру и превращаю технические источники в структурированную, достоверную и поддерживаемую документацию.

Портфолио показывает не только готовые инструкции, но и инженерно-аналитическую работу: исследование исходного кода и технических материалов, определение границ систем, реконструкцию архитектуры, моделирование данных и интерфейсов, подготовку спецификаций и контроль качества документации. Профессиональная роль — **Technical Writer с инженерно-аналитической специализацией**, а не системный архитектор или разработчик.

## Консолидация документации

## Доказательная основа резюме и дашборда

Для резюме и карточек дашборда действует [принцип «Доказательства + текст одновременно»](docs/documentation/resume-and-dashboard-evidence-policy.md): каждое существенное утверждение связывается с подтверждающим артефактом, получает evidence marker и не выходит за пределы того, что действительно доказывает источник. Метрики и достижения без проверяемых оснований не добавляются. Перед публикацией проводится проверка ПДн и секретов.

[Реестр канонических проектов и устранённых дублей](docs/portfolio-consolidation-index.md): основные документы, объединённые группы проектов, очищенные репозитории и границы доказательств.

## Назначение

Дашборд показывает отобранные кейсы технического письма и динамический список публичных репозиториев GitHub-аккаунта. Каждый кейс сохраняет границы исходного проекта и ведёт к соответствующей документации или репозиторию.

## Подсчёт проектов и репозиториев

- **11 избранных карточек** — отобранные портфельные кейсы, а не полный список репозиториев.
- **Публичные репозитории** — динамический индекс GitHub API; приватные репозитории в нём не отображаются.
- Встроенный обзор C# / SQLite — компонентный анализ в направлении Deshifrator, а не отдельный репозиторий.

Реестр фиксирует срез инвентаризации, языки документации, границы проектов, теги и несоответствия метаданных. Список публичных репозиториев в самом дашборде загружается динамически.

## Избранные проекты

Дашборд содержит **11 основных карточек**. Это курируемые кейсы, а не число всех репозиториев. Дополнительный индекс загружается динамически через GitHub API.

- [Orders API Documentation](https://github.com/ekatmoz88-alt/api-docs-portfolio-v2) — REST API, OpenAPI 3.1 и автоматизированные проверки Docs-as-Code.
- [Oracle Global11 — Data Model & OLAP Architecture](https://github.com/ekatmoz88-alt/global11-demo-data-platform) — отдельный проект Oracle 11g: реляционная и размерная модели, OLAP, кубы и метаданные DMRS. [Документация](https://ekatmoz88-alt.github.io/global11-demo-data-platform/).
- [High-Security Work Patent — System Architecture](https://ekatmoz88-alt.github.io/github-profile-dashboard-vite/docs/high-security-patent-architecture.html) — аналитический кейс предлагаемого пилотного проекта защищённой идентификационной карты. Материал описывает проектную концепцию, а не подтверждённую промышленную реализацию.
- [ППО «Территория» / «Дешифратор» / UMMS](https://github.com/ekatmoz88-alt/territory-descriptor-unified) — единый проектный контур документации с сохранением границ систем, приложений, подсистем и модулей. [Опубликованный портал](https://ekatmoz88-alt.github.io/territory-descriptor-unified/) · [Архив ППО «Территория»](https://ekatmoz88-alt.github.io/territory-descriptor-unified/materials/territory/) · [Документация АРМ «Дешифратор»](https://ekatmoz88-alt.github.io/territory-descriptor-unified/materials/deshifrator/) · [Спецификация АРМ «Дешифратор»](https://ekatmoz88-alt.github.io/territory-descriptor-unified/materials/descriptor/) · [УММС / SOAP](https://ekatmoz88-alt.github.io/territory-descriptor-unified/materials/umms/) · [Архитектурный каталог EN/RU](https://ekatmoz88-alt.github.io/territory-descriptor-unified/materials/architecture/architecture.html).
- [VIWI / VSM — Sanitized Architecture Documentation](https://ekatmoz88-alt.github.io/viwi-vsm-architecture/) — обезличенная документация архитектурных концепций service mapping, валидации и генерации кода.
- [SOIS Onboard Interface Architecture](https://ekatmoz88-alt.github.io/sois-onboard-interface-architecture/) — демонстрационное исследование интерфейсных сервисов CCSDS SOIS; нормативные определения отмечены для дополнительной проверки по стандартам.
- [Cobalt UI Navigation](https://github.com/ekatmoz88-alt/cobalt-ui-navigation-docs) — документация C++ UI-компонента на основе исходного кода.
- [Fintech Operations Documentation](https://ekatmoz88-alt.github.io/fintech-docs-demo/) — обезличенная документация демонстрационной crypto-onramp операторской консоли, рабочих процессов и аудита.
- [Technical Writing Workflows](https://ekatmoz88-alt.github.io/technical-writing-workflows/) — автоматизация проверок OpenAPI, Markdown и ссылок.
- [SS-TMK — Technical Monitoring System](https://ekatmoz88-alt.github.io/ss-tmk-specification/) — спецификация системы мониторинга и интеграционного XML/WSDL-интерфейса; MCP gateway adapter описан отдельно от SOAP-контракта.
- [ADP201P4 Hardware Documentation](https://ekatmoz88-alt.github.io/adp201p4-hardware-spec/) — документация аппаратного модуля обработки сигналов и его интерфейсов.

### Разделение проектных материалов

- **ППО «Территория» / «Дешифратор» / UMMS** — единый проектный контур документации; внутренние системные, прикладные и компонентные границы сохраняются. Ссылки на документацию «Дешифратора», его спецификацию и UMMS приведены в карточке проекта.
- **Oracle Global11** — отдельный проект Oracle 11g, реляционной и размерной модели, OLAP и DMRS.
- **C# / SQLite** — компонентный анализ слоя доступа к данным DbStationary в направлении «Дешифратор». Это не часть Oracle Global11 и не отдельная карточка проекта.

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
