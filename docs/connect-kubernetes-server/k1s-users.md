---
sidebar_label: 'Users'
sidebar_position: 1
---

# K1s Users

### Anonymous Users

#### Restrictions

* Have access only to the default namespace.
* Requests are throttled and all users' requests sum up to the default's namespaces context.

## Admin Users

## Operator Users

As operator you can access to a dedicated K1s cluster or the shared one, this last is the default. 
All namespaces are created in the same "global" K1s cluster.

### Restrictions

* Namespace names are unique, hence, it is possible that the namespace that you want to create would be already in use.
* 