<h1 align="center">Get Random Item</h1>

<p align="center">
    <img src="https://media.tenor.com/R8irsWesoJ8AAAAj/dice.gif" alt="gif-drink" width=300 />
</p>

## 📋 Description

Single-Feature Webapp aims to get random item. Its architecture is designed to be **Kubernetes-native web application**.

## 🚀 Deployment

### Prototyping environment

```bash
docker compose up --build --force-recreate --renew-anon-volumes
```

### Prod-ready environment

```bash
helm install random-app ./charts/random-app -n random-app --create-namespace
```

## 🗑️ Uninstall

To uninstall, execute the following commands:

```bash
helm uninstall random-app -n random-app
```

---

Made with :sparkling_heart: by [Sylvain Pierrot](https://github.com/sylvain-pierrot)