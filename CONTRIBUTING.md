# Contributing & Documentation Workflow

[English](#english) | [Русский](#русский)

<a id="english"></a>
## English

This repository is a public portfolio dashboard. Contributions must preserve factual accuracy, project boundaries, confidentiality and the distinction between historical work and current documentation engineering.

### 1. Authoring

- Write explanatory content in Markdown.
- Keep structured contracts in their native formats, such as OpenAPI YAML.
- Store diagrams as editable source where available.
- Use descriptive filenames, stable headings and relative links within the repository.
- Keep the main portfolio focused; add secondary samples to the Additional Work catalogue.

### 2. Case-study structure

Every featured case should identify:

1. Audience and intended use.
2. Problem or information need.
3. Available source materials.
4. Verification approach and evidence limitations.
5. Documentation deliverables.
6. Practical outcome, only where supported.

Use [CASE-STUDY-TEMPLATE.md](CASE-STUDY-TEMPLATE.md) as the starting point.

### 3. Evidence and technical accuracy

- Trace technical statements to supplied project records, specifications, manuals or inspected source code.
- Distinguish direct evidence, analytical reconstruction, assumptions and unresolved questions.
- Do not invent functions, parameters, defaults, runtime behavior, architecture links or deployment facts.
- Mark incomplete verification explicitly.
- Keep system boundaries intact. A shared navigation page does not mean that projects are one executable system.

### 4. Engineering collaboration

Describe collaboration with developers, architects, analysts, QA specialists or domain experts only when the available records support it. Separate direct consultation, peer review, source inspection and independent analysis. Do not imply approval or sign-off without evidence.

### 5. Privacy and publication

- Never publish credentials, tokens, private keys, personal data, production secrets or restricted company materials.
- Sanitize examples and replace sensitive identifiers with clearly identified placeholders.
- Do not upload proprietary documents merely to make a portfolio sample look complete.
- Preserve enough context to explain the work without exposing confidential implementation details.

### 6. Review and quality checks

Before proposing a change:

- Check terminology, audience, structure and consistency.
- Validate OpenAPI files with the configured rules.
- Run the repository's Markdown and link checks where configured.
- Verify internal links and navigation.
- Build the documentation site and inspect the generated output.
- Confirm that diagrams agree with the canonical text and do not imply unsupported relationships.

### 7. Change management and publishing

- Use focused branches and small, descriptive commits.
- Open a pull request for review rather than editing the default branch directly.
- Explain the reason, scope and evidence for each substantive change.
- Update related pages when a documented interface or architecture changes.
- Publish only after checks pass; then verify the deployed page separately.
- A successful build does not, by itself, prove that the public deployment is available.

### 8. Outcomes and metrics

Report concrete deliverables and verifiable process improvements. Quantitative outcomes—such as reduced support requests, shorter onboarding time or improved content comprehension—require reliable baseline and follow-up measurements. Do not infer causation or invent percentages.

### Pull request checklist

- [ ] Project and system boundaries are preserved.
- [ ] Claims are supported or marked as unverified.
- [ ] No confidential or personal data is included.
- [ ] Links, examples and diagrams have been checked.
- [ ] Relevant validation and build checks pass.
- [ ] The change explains its audience, purpose and documentation outcome.
- [ ] Any claimed metric has a traceable source.

---

<a id="русский"></a>
## Русский

Этот репозиторий содержит публичный дашборд портфолио. Изменения должны сохранять достоверность, границы проектов, конфиденциальность и различие между исторической работой и современной инженерией документации.

### 1. Подготовка материалов

- Пишите пояснительные материалы в Markdown.
- Храните структурированные контракты в исходных форматах, например OpenAPI YAML.
- Сохраняйте диаграммы в редактируемом исходном формате, если он доступен.
- Используйте понятные имена файлов, устойчивые заголовки и относительные ссылки внутри репозитория.
- Не перегружайте основную витрину: дополнительные примеры размещайте в каталоге Additional Work.

### 2. Структура кейса

Каждый основной кейс должен раскрывать:

1. Аудиторию и назначение документации.
2. Задачу или информационную потребность.
3. Доступные исходные материалы.
4. Способ проверки и ограничения доказательной базы.
5. Созданные документационные артефакты.
6. Практический результат — только если он подтверждён.

Используйте [CASE-STUDY-TEMPLATE.md](CASE-STUDY-TEMPLATE.md).

### 3. Доказательность и техническая точность

- Связывайте технические утверждения с проектными материалами, спецификациями, руководствами или изученным исходным кодом.
- Разделяйте прямые свидетельства, аналитические реконструкции, предположения и открытые вопросы.
- Не придумывайте функции, параметры, значения по умолчанию, поведение runtime, архитектурные связи или факты публикации.
- Явно отмечайте неполную проверку.
- Сохраняйте границы систем. Общая навигационная страница не означает, что проекты являются одной исполняемой системой.

### 4. Взаимодействие с инженерами и экспертами

Описывайте сотрудничество с разработчиками, архитекторами, аналитиками, QA-специалистами и экспертами предметной области только при наличии подтверждений. Разделяйте консультации, peer review, анализ исходного кода и самостоятельную проверку. Не заявляйте согласование или sign-off без доказательств.

### 5. Конфиденциальность и публикация

- Не публикуйте пароли, токены, закрытые ключи, персональные данные, production-секреты и внутренние материалы компаний.
- Обезличивайте примеры и заменяйте чувствительные идентификаторы явно обозначенными заполнителями.
- Не публикуйте проприетарные документы только ради полноты портфолио.
- Сохраняйте контекст работы, не раскрывая конфиденциальные детали реализации.

### 6. Проверка и контроль качества

Перед предложением изменений:

- Проверьте терминологию, аудиторию, структуру и единообразие.
- Провалидируйте OpenAPI-файлы настроенными правилами.
- Запустите проверки Markdown и ссылок, если они настроены.
- Проверьте внутренние ссылки и навигацию.
- Соберите сайт документации и проверьте результат сборки.
- Сверьте диаграммы с каноническим текстом и исключите неподтверждённые связи.

### 7. Управление изменениями и публикация

- Используйте отдельные ветки и небольшие тематические коммиты.
- Открывайте Pull Request для проверки вместо прямого редактирования основной ветки.
- Указывайте причину, объём и источники существенных изменений.
- Обновляйте связанные страницы при изменении документируемого интерфейса или архитектуры.
- Публикуйте после успешных проверок, затем отдельно проверяйте доступность сайта.
- Успешная сборка сама по себе не доказывает успешную публикацию.

### 8. Результаты и метрики

Показывайте конкретные артефакты и проверяемые улучшения процесса. Количественные результаты — сокращение обращений в поддержку, ускорение адаптации или улучшение усвоения контента — требуют достоверных исходных и повторных измерений. Не приписывайте причинность и не придумывайте проценты.

### Контрольный список Pull Request

- [ ] Границы проекта и системы сохранены.
- [ ] Утверждения подтверждены или отмечены как непроверенные.
- [ ] Конфиденциальные и персональные данные отсутствуют.
- [ ] Ссылки, примеры и диаграммы проверены.
- [ ] Необходимые проверки и сборка проходят успешно.
- [ ] Указаны аудитория, назначение и результат документационной работы.
- [ ] Для каждой заявленной метрики существует проверяемый источник.
