export default {
  inherit: "ww-layout",
  editor: {
    label: {
      en: "VSF: Product card",
    },
  },
  properties: {
    buttonColor: {
      label: {
        en: "Button color",
      },
      type: "Color",
      defaultValue: "#018937"
    },
    data: {
      label: {
        en: 'Items',
      },
      type: 'Info',
      options: {
        text: { en: 'Bind your data' },
      },
      bindable: 'repeatable',
      defaultValue: [],
      section: 'settings',
      /* wwEditor:start */
      bindingValidation: {
        validations: [
          {
            type: 'array',
          },
          {
            type: 'object',
          },
        ],
        tooltip: 'A collection or an array of data: \n\n`myCollection` or `[{}, {}, ...]`',
      },
      /* wwEditor:end */
    },
    // itemContainer: {
    //   hidden: true,
    //   defaultValue: {
    //     isWwObject: true,
    //     type: "ww-flexbox"
    //   }
    // }
  },
};
