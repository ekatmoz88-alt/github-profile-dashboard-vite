# Разработка и публикация

## Быстрые ссылки

- [Опубликованный dashboard](https://ekatmoz88-alt.github.io/github-profile-dashboard-vite/)
- [Исходный репозиторий](https://github.com/ekatmoz88-alt/github-profile-dashboard-vite)
- [Запуски GitHub Actions](https://github.com/ekatmoz88-alt/github-profile-dashboard-vite/actions)
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
- [ ] [Опубликованный dashboard](https://ekatmoz88-alt.github.io/github-profile-dashboard-vite/) открывается.

При ошибке откройте
[GitHub Actions](https://github.com/ekatmoz88-alt/github-profile-dashboard-vite/actions),
найдите первый упавший step и проверьте build log и Pages artifact.
