# GitHub Portfolio Dashboard

[English](README.md) | [Русский](README.ru.md)

**Публичный дашборд:** https://github-profile-dashboard-vite.vercel.app/  
**GitHub Pages:** https://ekatmoz88-alt.github.io/github-profile-dashboard-vite/  
**Двуязычный реестр и аудит:** https://ekatmoz88-alt.github.io/github-profile-dashboard-vite/portfolio-audit.html

## Назначение

Дашборд показывает выбранные кейсы технического письма и динамический список публичных репозиториев GitHub-аккаунта.

## Подсчёт проектов и репозиториев

- **7 избранных карточек** — отобранные портфельные кейсы, а не полный список репозиториев.
- **24 публичных репозитория** — динамический индекс GitHub API.
- **2 приватных репозитория** — не отображаются в публичном индексе.
- Встроенный обзор C# / SQLite — компонентный анализ в направлении Deshifrator, а не отдельный репозиторий.

Реестр фиксирует срез инвентаризации, языки документации, границы проектов, теги и несоответствия метаданных. Список публичных репозиториев в самом дашборде загружается динамически.

## Избранные направления

- [ППО «Территория» и АРМ «Дискриптор»](https://github.com/ekatmoz88-alt/territory-descriptor-unified) — единый навигационный репозиторий с сохранением границ отдельных систем. [Архитектурный каталог EN/RU](https://ekatmoz88-alt.github.io/territory-descriptor-unified/materials/architecture/architecture.html) · [Контекст системы и границы — RU](https://github.com/ekatmoz88-alt/territory-descriptor-unified/blob/main/materials/architecture/system-context-and-scope.ru.md) · [System context and scope — EN](https://github.com/ekatmoz88-alt/territory-descriptor-unified/blob/main/materials/architecture/system-context-and-scope.en.md).
- API documentation и OpenAPI.
- [VIWI / VSM — Sanitized Architecture Study](https://ekatmoz88-alt.github.io/viwi-vsm-architecture/) — независимая демонстрационная модель общих принципов service mapping, валидации и генерации кода; не является подтверждённой архитектурой продукта.
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

Дашборд — индекс портфолио, а не заявление о том, что автор разработал все перечисленные системы. Описания различают документационные кейсы, анализ исходного кода, демонстрационные проекты и исторические системы. Общая навигация не означает общую исполняемую архитектуру.

## Теги

`portfolio-dashboard` · `react` · `vite` · `github-api` · `technical-writing` · `repository-audit` · `en-ru`


## Карта Enterprise Documentation

В карточке Enterprise Systems Architecture добавлена ссылка на сводный [обзор Enterprise Technical Documentation](https://ekatmoz88-alt.github.io/technical-writing-portfolio/enterprise-documentation/) с модулем диаграмм C4, UML Sequence и BPMN 2.0. В обзоре отдельно отмечены подтверждённые исходниками материалы, демонстрационные модели и аналитические реконструкции.
