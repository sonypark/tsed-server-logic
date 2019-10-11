# TSED 직접 구현해 본 토이 프로젝트

- TS + Exrpess
- Typescript에서 데코레이터와 메타 데이터의 원리가 잘 이해되지 않아 직접 만들어보며 이해함

![](https://images.velog.io/post-images/sonypark/0180a400-ebd5-11e9-8d88-2dd52e0eab1c/decoratorsmetadata.png)

- Method Decorator는 *metadata* 정보를 method에 연결시킨다.
- **Method Decorator**가 먼저 실행되며 *metadata*를 저장한다.
    - 이 때, `defineMetadata` 가 실행된다
- **Class Decorator**는 가장 마지막에 실행되며 저장된 *metadata* 값을 불러온다.
    - 이 때, `getMetadate` 가 실행된다.
- **Class decorator**는 각 메서드에 저장된 *metadata*를 적용하며 라우터를 실행한다.