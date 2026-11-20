# Реестр консолидации портфолио и документов

Дата проверки: 21 ноября 2026 г.

Этот файл фиксирует канонические документы, объединённые проектные контуры и судьбу репозиториев-дублей. Канонические материалы поддерживаются в одном месте; старые репозитории, где остался только README с перенаправлением, не содержат копий документации.

## 1. Канонические проектные группы

### ППО «Территория» / «Дешифратор» / «Дискриптор» / UMMS

**Канонический репозиторий:** [territory-descriptor-unified](https://github.com/ekatmoz88-alt/territory-descriptor-unified)  
**Публикация:** [единый документационный хаб](https://ekatmoz88-alt.github.io/territory-descriptor-unified/)

Один проектный контур, но с сохранением границ подсистем и систем:

- [ППО «Территория»](https://ekatmoz88-alt.github.io/territory-descriptor-unified/materials/territory/) — обзор, функциональные модули, развёртывание, внешние интеграции, платформенные требования, жизненный цикл и испытания, матрица доказательств.
- [База данных, Oracle и API](https://ekatmoz88-alt.github.io/territory-descriptor-unified/materials/territory-database/) — логическая и физическая модели, группы таблиц, API и анализ операций по исходному коду.
- [АРМ «Дешифратор»](https://ekatmoz88-alt.github.io/territory-descriptor-unified/materials/deshifrator/) — архитектура, состав приложений, SQLite data access, обмен и MRZ, зависимости, печать, миграционные заметки, риски, исходные фрагменты.
- [Спецификация АРМ «Дискриптор» / «Дешифратор»](https://ekatmoz88-alt.github.io/territory-descriptor-unified/materials/descriptor/) — проектирование, подсистемы, аппаратное и программное обеспечение, обмен, UI мобильной станции, шрифты и печать, безопасность, рабочие процессы, оборудование.
- [UMMS](https://ekatmoz88-alt.github.io/territory-descriptor-unified/materials/umms/) — SOAP API, клиентские процессы, локальное хранение досье, интеграция рабочих мест и руководство по печати.

**Объединённые репозитории-дубли:** `territory-docs`, `ppo-territory-archive`, `deshifrator-docs`, `deshifrator-docs-public`, `descriptor-arm-spec`, `umms-docs`. В каждом оставлен только README-указатель на соответствующий раздел канонического хаба. Уникальные разделы и ссылки сведены в канонические документы. Не считать UMMS, АРМ и ППО одним runtime: общим является документационный контур, а не границы исполнения.

### Oracle Global11 / DMRS

**Канонический репозиторий:** [global11-demo-data-platform](https://github.com/ekatmoz88-alt/global11-demo-data-platform)  
**Публикация:** [Oracle Global11 — Data Model & OLAP Architecture](https://ekatmoz88-alt.github.io/global11-demo-data-platform/)

Основные материалы:

- [Главная документации](https://ekatmoz88-alt.github.io/global11-demo-data-platform/).
- [OLAP-документация](https://github.com/ekatmoz88-alt/global11-demo-data-platform/blob/main/docs/GLOBAL11-OLAP-DOCUMENTATION.md).
- [Data Modeler — история и методика](https://github.com/ekatmoz88-alt/global11-demo-data-platform/blob/main/docs/GLOBAL11-DATA-MODELER-DESIGN.md).
- [DMRS Global11 analysis](https://github.com/ekatmoz88-alt/global11-demo-data-platform/blob/main/docs/dmrs-global11-analysis.md).
- [DMRS metadata catalogue](https://github.com/ekatmoz88-alt/global11-demo-data-platform/blob/main/docs/dmrs-metadata-catalog.md).
- [Подробная DMRS-диаграмма иерархий](https://github.com/ekatmoz88-alt/global11-demo-data-platform/blob/main/docs/model/olap-diagram-dmrs-source.mmd).
- [Финальная спецификация Cube_1111](https://github.com/ekatmoz88-alt/global11-demo-data-platform/blob/main/docs/model/CUBE-1111-FINAL-SPECIFICATION.md).

Из исходного архива перенесены уникальные UUID иерархий и последовательности уровней, подробная Mermaid-диаграмма, оговорки по числу измерений и несовпадающим историческим версиям Oracle. Противоречивые сведения сохранены как расхождения источников, а не превращены в неподтверждённые факты.

**Репозиторий-дубль:** `DMRS-Global` — оставлен README-указатель на канонические DMRS-документы. Исходные PDF и Oracle JAR в приватной библиотеке `technical-docs-library/02_ORACLE` сохранены как исходные артефакты, не как второй документационный сайт.

### API Documentation Portfolio

**Канонический репозиторий:** [api-docs-portfolio-v2](https://github.com/ekatmoz88-alt/api-docs-portfolio-v2)  
**Публикация:** [API Documentation Portfolio V2](https://ekatmoz88-alt.github.io/api-docs-portfolio-v2/)

Содержит OpenAPI 3.1, Orders API, Navigation API, SOAP case studies, Spectral/Redocly, CI, Supabase implementation и документацию операций. В каноническую версию сведены подробный SOAP audit, критерии полноты контракта, рекомендации по ошибкам и безопасности, чек-лист, английская и русская навигация.

**Репозиторий-дубль:** `api-docs-portfolio` — оставлен README-указатель на V2.

Важно: [technical-writing-portfolio](https://github.com/ekatmoz88-alt/technical-writing-portfolio) — отдельный демонстрационный API-контракт. Это не копия Orders API V2, поэтому проект сохранён отдельно.

### ADP201P4 / «Кобальт»

**Канонический репозиторий:** [adp201p4-hardware-spec](https://github.com/ekatmoz88-alt/adp201p4-hardware-spec)  
**Публикация:** [ADP201P4 hardware specification](https://ekatmoz88-alt.github.io/adp201p4-hardware-spec/)

Каноническая версия содержит английские и русские разделы, архитектуру, ADM-интерфейс, распиновку разъёмов, электрические ограничения и ссылки на руководство.

**Репозиторий-дубль:** `adp201p4-hardware-spec-editable` — оставлен README-указатель. По сравнению с канонической версией уникальных технических фактов не выявлено. Материал относится к «Кобальту» / Oracle, не к ППО «Территория».

### GitHub Profile Dashboard

**Канонический репозиторий:** [github-profile-dashboard-vite](https://github.com/ekatmoz88-alt/github-profile-dashboard-vite)  
**Публикация:** [Live dashboard](https://github-profile-dashboard-vite.vercel.app/)  
**Аудит:** [Portfolio audit](https://ekatmoz88-alt.github.io/github-profile-dashboard-vite/portfolio-audit.html)

**Репозиторий-дубль:** `github-profile-dashboard-vite-public` — оставлен README-указатель. Параллельная версия не используется как самостоятельный Dashboard.

### Technical Writing Portfolio

В репозитории [technical-writing-portfolio](https://github.com/ekatmoz88-alt/technical-writing-portfolio) обнаружены два файла с абсолютно одинаковым Git blob SHA:

- удалён дубль `docs/anon-data-model-arn.md`;
- оставлен канонический `docs/technical/anon-data-model-arn.md`, на который уже ссылается `docs/technical/README.md`.

## 2. Точные копии и похожие материалы — разные случаи

- Точное совпадение проверялось по Git blob SHA: одинаковый SHA означает идентичное содержимое файла.
- В приватной библиотеке `technical-docs-library` среди 136 файлов точных повторов содержательных файлов не обнаружено; одинаковый пустой `.gitkeep` в разных каталогах не является документальным дублем.
- Похожие названия или пересекающаяся тематика сами по себе не являются основанием для удаления. Например, независимый sample API в `technical-writing-portfolio` не объединяется с реальным Orders API V2; Oracle Global11 не смешивается с ППО «Территория»; спецификация АРМ и source-code review «Дешифратора» остаются отдельными типами документов в одном проектном контуре.

## 3. Состояние старых репозиториев

Старые репозитории из списка выше очищены от прежних копий документов и содержат только README с ссылками на канонические материалы. Они не являются вторыми хранилищами документов. Их можно удалить позднее как репозитории-указатели, если больше не нужна поддержка старых URL; GitHub-инструмент, использованный для текущей очистки, не предоставляет операцию удаления самого репозитория.

## 4. Границы проведённой проверки

Проверены основные группы репозиториев, их README, деревья файлов и точные совпадения Git blob SHA. Семантическая сверка выполнена для перечисленных проектных групп и материалов, перенесённых в канонические версии. Исходные бинарные документы приватной библиотеки не удалялись: они являются первичными свидетельствами и могут содержать различия редакций, дат, подписей или приложений, которые нельзя надёжно свести к одному файлу без отдельного содержательного чтения.
