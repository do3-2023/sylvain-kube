<h1 align="center">Webapp That Decides Your Next Drink</h1>

<p align="center">
    <img src="https://media.tenor.com/mBLX9j5CuMIAAAAC/thor-another.gif" alt="gif-drink" width=300 />
</p>

## Description

This repository contains a **Kubernetes-native web application** that can be deployed using [kubernetes](https://kubernetes.io/) manifests.

## 🚀 Deployment

1. **Suggestion**: use [kind](https://kind.sigs.k8s.io/docs/user/quick-start/#installation) to create a **local cluster**:

```bash
kind create cluster
```

2. Create the necessary **namespaces**:

```bash
for namespace in front back data; do kubectl create namespace $namespace; done
```

3. To **deploy** the web application, run the following command at the project root:

```bash
kubectl apply -Rf kube/
```

## 🌐 Access the web application 

To **retrieve** the **URL** for accessing the web application, use the following script:

```bash
# Get the IP address of one "kubernetes" node
KUBERNETES_IP=$(kubectl get endpoints kubernetes -o jsonpath='{.subsets[0].addresses[0].ip}')

# Get the NodePort of the "webapp" service in the "front" namespace
WEBAPP_NODEPORT=$(kubectl -n front get svc webapp -o jsonpath='{.spec.ports[0].nodePort}')

# Combine the IP address and NodePort to get the complete URL
WEBAPP_URL="${KUBERNETES_IP}:${WEBAPP_NODEPORT}"

# Print the complete URL
echo $WEBAPP_URL
```

---

Made with :sparkling_heart: by [Sylvain Pierrot](https://github.com/sylvain-pierrot)