# Разработка и публикация

## Быстрые ссылки

- [Опубликованный dashboard][dashboard]
- [Исходный репозиторий][repository]
- [Запуски GitHub Actions][actions]
- [Pages workflow](../.github/workflows/pages.yml)

## Локальный запуск

```bash
npm ci
npm run dev
```

## Production-сборка

```bash
npm run build
```

Проверьте, что результат сборки создан в каталоге dist, а base path Vite
соответствует адресу GitHub Pages.

## Перед публикацией

- [ ] Dashboard открывается локально.
- [ ] Карточки ведут на правильные репозитории и сайты.
- [ ] npm run build завершается без ошибок.
- [ ] Pages workflow и deployment завершаются успешно.
- [ ] [Опубликованный dashboard][dashboard] открывается.

При ошибке откройте [GitHub Actions][actions], найдите первый упавший
step и проверьте build log и Pages artifact.

[dashboard]: https://ekatmoz88-alt.github.io/github-profile-dashboard-vite/
[repository]: https://github.com/ekatmoz88-alt/github-profile-dashboard-vite
[actions]:
  https://github.com/ekatmoz88-alt/github-profile-dashboard-vite/actions
