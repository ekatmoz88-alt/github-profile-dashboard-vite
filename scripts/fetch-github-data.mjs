import { mkdir, writeFile } from 'node:fs/promises';

const username = 'ekatmoz88-alt';
const api = 'https://api.github.com';
const token = process.env.GITHUB_TOKEN;

const headers = {
  Accept: 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
  ...(token ? { Authorization: `Bearer ${token}` } : {}),
};

async function get(path) {
  const response = await fetch(`${api}${path}`, { headers });

  if (!response.ok) {
    throw new Error(`GitHub API ${response.status}: ${path}`);
  }

  return response.json();
}

const [rawProfile, rawRepositories, rawEvents] = await Promise.all([
  get(`/users/${username}`),
  get(`/users/${username}/repos?sort=updated&per_page=100&type=owner`),
  get(`/users/${username}/events/public?per_page=30`),
]);

const profileFields = [
  'avatar_url',
  'login',
  'name',
  'bio',
  'html_url',
  'company',
  'location',
  'blog',
  'created_at',
  'followers',
  'following',
  'public_repos',
];

const repositoryFields = [
  'id',
  'name',
  'description',
  'language',
  'stargazers_count',
  'forks_count',
  'updated_at',
  'html_url',
  'homepage',
  'private',
];

const profile = Object.fromEntries(
  profileFields.map((field) => [field, rawProfile[field]])
);

const repositories = rawRepositories
  .filter((repo) => !repo.private)
  .map((repo) =>
    Object.fromEntries(
      repositoryFields.map((field) => [field, repo[field]])
    )
  );

const events = rawEvents.map((event) => ({
  id: event.id,
  type: event.type,
  created_at: event.created_at,
  repo: {
    name: event.repo?.name,
  },
  payload: {
    commits_count: event.payload?.commits?.length || 1,
    ref_type: event.payload?.ref_type,
    action: event.payload?.action,
  },
}));

const output = {
  generatedAt: new Date().toISOString(),
  profile,
  repositories,
  events,
};

await mkdir('public/data', { recursive: true });
await writeFile(
  'public/data/github.json',
  JSON.stringify(output, null, 2) + '\n'
);

console.log(
  `GitHub snapshot generated: ${repositories.length} public repositories, ${events.length} events`
);
