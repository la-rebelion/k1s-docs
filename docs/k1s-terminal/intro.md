---
sidebar_label: 'K1s Terminal'
sidebar_position: 1
title: K1s Terminal
description: User-friendly interface for managing Kubernetes applications, designed to be developer-friendly whether you're a novice or an experienced cluster administrator
keywords: [k1s, kubernetes, k1s terminal, kubernetes cluster, k1s k8s, k1s kubernetes, k8s best practices, terminal best practices]
slug: /k1s-terminal
---

K1s Terminal rethinks the Kubernetes experience from a developer's perspective, making it more accessible, efficient, and enjoyable for developers of all skill levels. It is a powerful, user-friendly interface for managing Kubernetes applications, built with modern technologies like React and TypeScript. It is designed to be easy to use whether you're a Kubernetes novice or an experienced cluster administrator.

K1s is a Kubernetes platform that allows you to quickly get to grips with the technology without the tough process of installation and configuration. K1sT is a terminal that is natively integrated with Kubernetes and cloud-native tools, making it a friendly, readable, color-coded, and interactive output for the `kubectl` command. It is a terminal that facilitate the navigation through the Kubernetes resources easily, making it the ultimate tool for streamlining your workflow and improving your career path.

## `kubectl` Verbs  

Kubernetes API and kubectl support several verbs that correspond to different actions on resources. Here are the most commonly used ones:

* `get`: Retrieve one or more resources. This verb is equivalent to a GET request in HTTP.
* `list`: Retrieve a list of resources. This verb is equivalent to a GET request in HTTP.
* `watch`: Watch for changes to a particular resource or set of resources in real time.
* `create`: Create a new resource. This verb is equivalent to a POST request in HTTP.
* `update`: Update an existing resource. This verb is equivalent to a PUT request in HTTP.
* `patch`: Update one or more fields of an existing resource. This verb is equivalent to a PATCH request in HTTP.
* `delete`: Remove a resource. This verb is equivalent to a DELETE request in HTTP.
* `deletecollection`: Remove a collection of resources. This verb is equivalent to a DELETE request in HTTP.

These verbs are used in the context of Role-Based Access Control (RBAC) to define permissions for different roles. For example, a role might be allowed to get, list, and watch pods, but not create, update, patch, or delete them.

K1sT implements these verbs in a user-friendly way, making it easy to interact with Kubernetes resources and manage your applications. In the [roadmap](/roadmap), we are planning to add more features to make the terminal even more powerful and user-friendly, keep an eye on the [release notes](/updates/k1s-terminal) for the latest updates.

<!-- parser
    .command('get <resource>')
    .description('Retrieve one or more resources')
    .action((resource) => {
        console.log(`Retrieving ${resource}`);
    }); -->