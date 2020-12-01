import * as actionTypes from './shopping-types';

export const INITIAL_STATE = {
    products: [
        {
             id:"1",
             title: "Apple iPhone 11 Pro Max",
             description: "4K video at 60 fps on every camera. Ultra Wide camera for four times more scene. Meet the first triple camera.",
             images: ["https://media.extra.com/i/aurora/100091664_100_02?w=400&h=400&img404=missing_product&v=false"],
             
             price: 899,
             count: 1
         },
         {
             id: "2",
             title: "Apple iPhone ES",
             description: "Brilliant 4.7˝ Retina HD display. Speed and security of Touch ID. Water resistant to 1 meter for 30 minutes.",
             images: ["https://media.extra.com/i/aurora/100150345_100_04?w=400&h=400&img404=missing_product&v=false"],
             
             price: 759,
             count: 1

         },
         {
             id: "3",
             title: "Apple iPhone X",
             description: "The custom OLED displays on iPhone XS deliver the most accurate color in the industry, HDR, and true blacks.",
             images: ["https://media.extra.com/i/aurora/100038344_100_01?w=400&h=400&img404=missing_product&v=false"],
             
             price: 699,
             count: 1

         },
         {
             id: "4",
             title: "Apple iPhone 8",
             description: "iPhone 8 introduces an all-new glass design. The world’s most popular camera, now even better.",
             images: ["https://media.extra.com/i/aurora/100093944_100_02?w=400&h=400&img404=missing_product&v=false"],
             
             price: 389,
             count: 1

         },
         {
             id: "5",
             title: "Apple iPhone 7",
             description: "With its entire enclosure reengineered, iPhone 7 is the very first water-resistant iPhone, powerful enough to be called Pro",
             images: ["https://media.extra.com/i/aurora/00192402_100_02?w=400&h=400&img404=missing_product&v=false"],
             
             price: 349,
             count: 1

         },
         {
             id: "6",
             title: "Apple iPhone 6s",
             description: "iPhone 6s is powered by the custom-designed 64-bit A9 chip. It delivers performance once found only in desktop computers.",
             images: ["https://media.extra.com/i/aurora/00193195_100_02?w=400&h=400&img404=missing_product&v=false"],
             
             price: 299,
             count: 1

         },
         {
            id: "7",
            title: "Apple iPhone 5s",
            description: "iPhone 5s is powered by the custom-designed 64-bit A9 chip. It delivers performance once found only in desktop computers.",
            images: ["https://media.extra.com/i/aurora/00193195_100_02?w=400&h=400&img404=missing_product&v=false"],
            
            price: 199,
            count: 1

        },
        {
            id: "8",
            title: "Apple iPhone 4s",
            description: "iPhone 4s is powered by the custom-designed 64-bit A9 chip. It delivers performance once found only in desktop computers.",
            images: ["https://media.extra.com/i/aurora/00193195_100_02?w=400&h=400&img404=missing_product&v=false"],
            
            price: 99,
            count: 1

        }
    ], //{id, title, des, price, img... etc}
    cart:[], //{id, title, des, price, img, Qty}
    _about: [
      {
        "__id": "001",
        "image": ["https://drive.uqu.edu.sa/up/avatar/440/sjjadani.png"],
        "name": "Sultan Aljadani",
        "position": "UI / UX",
        "twitter_account": "___7rb",
        "github_account": "sultanaljadani",
        "instagram_account": "2sa4",
        "code_account": "sultanaljadaani"
      },
      {
        "__id": "002",
        "image": ["https://drive.uqu.edu.sa/up/avatar/143/ahalasmari.png"],
        "name": "Abdulrhman Alasmari",
        "position": "UI / UX",
        "twitter_account": "abdulrhmanalasmari",
        "github_account": "abulrhman-asmari",
        "instagram_account": "asmari00",
        "code_account": "alasmari"
      },
      {
        "__id": "003",
        "image": ["https://drive.uqu.edu.sa/up/avatar/143/asazzahrani.png"],
        "name": "Abdullah Alzhrani",
        "position": "Team Leader of UI",
        "twitter_account": "abdullahsal",
        "github_account": "abdulsal",
        "instagram_account": "abdullahsalem",
        "code_account": "adulsal"
      }
    ],
    currentItem: null,
    get about() {
      return this._about;
    },
    set about(value) {
      this._about = value;
    },
};
const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case actionTypes.ADD_TO_CART:
        const item = state.products.find(
          (product) => product.id === action.payload.id
        );
        const inCart = state.cart.find((item) =>
          item.id === action.payload.id ? true : false
        );
  
        return {
          ...state,
          cart: inCart
            ? state.cart.map((item) =>
                item.id === action.payload.id
                  ? { ...item, qty: item.qty + 1 }
                  : item
              )
            : [...state.cart, { ...item, qty: 1 }],
        };
      case actionTypes.REMOVE_FROM_CART:
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id),
        };
      case actionTypes.ADJUST_ITEM_QTY:
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: +action.payload.qty }
              : item
          ),
        };
      case actionTypes.LOAD_CURRENT_ITEM:
        return {
          ...state,
          currentItem: action.payload,
        };
      default:
        return state;
    }
  };
  export default shopReducer;