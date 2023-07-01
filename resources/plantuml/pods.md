

```plantuml
@startuml
left to right direction
allowmixing

' Kubernetes
!define KubernetesPuml https://raw.githubusercontent.com/dcasati/kubernetes-PlantUML/master/dist

!includeurl KubernetesPuml/kubernetes_Common.puml
!includeurl KubernetesPuml/kubernetes_Context.puml
!includeurl KubernetesPuml/kubernetes_Simplified.puml

!includeurl KubernetesPuml/OSS/KubernetesPod.puml
!includeurl KubernetesPuml/OSS/KubernetesSvc.puml

KubernetesPod(pod1, "delivery-\nmicroservice", "")
KubernetesPod(pod2, "order-\nmicroservice", "")
KubernetesPod(pod3, "order-\nmicroservice2", "")
KubernetesSvc(service, "a service", "")
Rel_U(pod1, service, "Through service")
'Rel_U(service, pod2, " ")
'Rel_U(service, pod3, " ")
service ..> pod2
service ..> pod3
Rel_U(pod1, pod2, "Pod-to-Pod\nor through services")
json PodSpec {
    "apiVersion": "v1",
    "kind": "Pod",
    "metadata": {
        "creationTimestamp": "TIMESTAMP",
        "generateName": "XXXX",
        "labels": {
            "controller-revision-hash": "XXXXX",
            "k8s-app": "kube-proxy",
            "pod-template-generation": "1"
        },
        "name": "pod-name",
        "namespace": "the-namespace",
        "ownerReferences": [
            {
                "apiVersion": "apps/v1",
                "kind": "DaemonSet",
                "name": "kube-proxy",
                "uid": "02b01b81-b458-42af-885b-4c511f956771"
            }
        ],
        "resourceVersion": "351",
        "uid": "a5d81f8d-e634-4c67-a560-61ce3aed3156"
    },
    "spec": {
        "affinity": {
            "nodeAffinity": "OBJECT-HERE"
        },
        "containers": [
            {
                "command": [
                    "a-list-with-commands"
                ],
                "env": [
                    {
                        "name": "NODE_NAME",
                        "valueFrom": "OBJECT_HERE"
                    }
                ],
                "image": "REGISTRY/CONTAINER_NAME:TAG",
                "imagePullPolicy": "IfNotPresent",
                "name": "the-pod-name",
                "resources": {"limits|request": "..."},
                "volumeMounts": ["..."]
            }
        ],
        "nodeName": "the-node-#",
        "nodeSelector": {
            "kubernetes.io/os": "linux"
        },
        "restartPolicy": "Always",
        "securityContext": {},
        "serviceAccount": "sa",
        "serviceAccountName": "sa",
        "terminationGracePeriodSeconds": 30,
        "tolerations": ["effect|key|operator"],
        "volumes": [
            {
                "name": "vol-name",
                "configMap": "OBJECT_HERE"
            },
            {
                "hostPath": "OBJECT_HERE",
                "name": "vol-name"
            }
        ]
    },
    "status": {
        "conditions": ["..."],
        "containerStatuses": ["..."],
        "hostIP": "192.168.65.4",
        "phase": "Running",
        "podIP": "192.168.65.4",
        "podIPs": [
            {
                "ip": "192.168.65.4"
            }
        ],
        "qosClass": "BestEffort",
        "startTime": "TIMESTAMP"
    }
}
@enduml
```