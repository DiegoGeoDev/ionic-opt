ionic start ionic-opt blank --type=react
ionic serve

yarn add zustand

https://ionicframework.com/docs/components

- criar float com btn q abre dois modais
- modais precisam ser com state de open/close
- criar estado de dicionario para controlar open\close dos modais
  - useState ? useReduce ?
  - chave\valor update isOpen true/false
- criar evenlope para os modais q vai gerenciar este estado
- receber os modais como children
- testar open\close dos modais

ModalAPage = Ionic Modal => update modal content
ModalBPage = Ionic Modal + Zustand => manage multiple modals
ModalCPage = Headless UI Modal => update modal content
ModalDPage = Headless UI Modal + Zustand => manage multiple modals
ModalEPage = Ionic Modal + Openlayers => manage multiple modals
ModalFPage = Headless UI + Openlayers => manage multiple modals

```
// const newControls = Object.entries(state.controls).reduce(
//   (accumulator, [key, value]) => {
//     if (key === controlId) {
//       return {
//         ...accumulator,
//         [key]: false,
//       };
//     }

//     return {
//       ...accumulator,
//       [key]: value,
//     };
//   },
//   {} as typeof controls
// );
```
