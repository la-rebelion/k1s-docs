---
sidebar_label: 'Users'
sidebar_position: 5
---

# K1s Users

### Anonymous Users

#### Restrictions

* Have access only to the default namespace.
* Requests are throttled and all users' requests sum up to the default's namespaces context.

:::info Early Access Phase

We are granting all the access to the K1s Technical Preview with NO restrictions, in this phase, **user credentials/Auth is not required to use the service**. 
We are doing this to get feedback from the community and improve the product. We are also working on the pricing model and will be sharing the details soon.
We will send you an invite code as soon as possible, for that reason it is import that you use a valid email address in the [early access form](https://go.rebelion.la/k1s-access).

:::

## Admin Users

## Operator Users

As operator you can access to a dedicated K1s cluster or the shared one, this last is the default. 
All namespaces are created in the same "global" K1s cluster.

### Restrictions

* Namespace names are unique, hence, it is possible that the namespace that you want to create would be already in use.
* 