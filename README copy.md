# Project Backend

# Require

- NodeJS + TypeScript
- MongoDB + Mongoose ORM
- Docker support
- ESLint
- Prettier
- Husky
- ...

# How to run

```
npm install
npm run build
npm start
```

### Start dev

```
npm run dev
```

### Start dev (transpile-only)

```
npm run dev:light
```

### Before commit (first time clone)

```
npm run prepare
```

### Use local setup

```
cd .setup-local/
docker-compose up -d --build
```

# GIT convention

- Branch: <feat | fix | misc | release...>/BRANCH_SHORT_NAME
- Commit: [< feat | fix | misc | release...>/BRANCH_SHORT_NAME: <short description >]
