const mens = [
  {
    id: 1,
    imageLink:
      'https://firebasestorage.googleapis.com/v0/b/fir-starter-3d346.appspot.com/o/images%2Fhavelock.jpg?alt=media&token=06a37606-99e8-4cb6-a8d6-2780030e1f9',

    category: 'Cut & Colour',
    subCategoryName: 'Cuts',
    num: 4,
    value1: 'Hair Cut ~ Everyday LifeStyle',
    value2: 'Hair Cut ~ Change of Style',
    value3: 'Hair Cut Executive',
    value4: 'Hair Wash & Basic Blow Dry',
    value5: 'Shave ~ As Smooth As Possible',
    value6: 'Beard Designing ~ Look cool! Flaunt differently',
    value7: 'Kids Cut ~ Below 5 Yrs',
    value8: 'Head Shave',
    ifImageNotAvailable:
      'https://www.symbols.com/images/symbol/1/5528_dash.png',
  },
  {
    id: 2,
    imageLink:
      'https://firebasestorage.googleapis.com/v0/b/tourismweb-3e2b8.appspot.com/o/havelooknight.jpeg?alt=media&token=18277cbb-d3d5-490b-a93c-0dbab8c4edb6',

    category: 'Cut & Colour',
    subCategoryName: 'Colour',
    num: 5,
    value1: 'Grey Coverage ~ Ammonia/Ammonia free',
    value2: 'Fashion Hair Colour ~ Ammonia/Ammonia free',
    value3: 'Streaking ~ Per Streak',
    value4: 'Beard Colouring',
    value5: 'Moustache Colouring',
  },
  {
    id: 3,
    imageLink:
      'https://firebasestorage.googleapis.com/v0/b/tourismweb-3e2b8.appspot.com/o/havelockelephant.jpeg?alt=media&token=b445f6ae-2b07-4fd7-af0f-8c67dec77360',

    category: 'Healthy Hair',
    subCategoryName: 'Hair Spa',
    num: 5,
    value1: 'Revitalizing ~ Dry & Frizzy Hair',
    value2: 'Healthy Hair Spa ~ Damaged Hair',
    value3: 'Colour Shine Spa ~ Colored Hair',
    value4: 'Hair Fiber Treatment',
  },
  {
    id: 4,
    imageLink:
      'https://firebasestorage.googleapis.com/v0/b/tourismweb-3e2b8.appspot.com/o/niel.jpeg?alt=media&token=d42468a9-e844-40dd-91dc-bf4c04b598a4',

    category: 'Healthy Hair',
    subCategoryName: 'Hair Care',
    value1: 'Anti Dandruff',
    value2: 'Anti Hairfall',
    value3: 'Smoothing',
    value4: 'Straightening',
    value5: 'Keratin',
    value6: 'Kerafusion',
  },
  {
    id: 5,
    imageLink:
      'https://firebasestorage.googleapis.com/v0/b/tourismweb-3e2b8.appspot.com/o/havelooknile.jpeg?alt=media&token=418b02cb-b2cf-4ca1-bae8-9fc4bdb993e0',

    category: 'Healthy Hair',
    subCategoryName: 'Hair Massage',
    value1: 'Aroma Oil Massage ~ 30 mins',
    value2: 'Almond Oil Massage ~ 30 mins',
    value3: 'Olive Oil Massage ~ 30 mins',
    value4: 'Reflection Oil Massage ~ 30 mins',
  },
  {
    id: 6,
    imageLink:
      'https://firebasestorage.googleapis.com/v0/b/tourismweb-3e2b8.appspot.com/o/havelocksingle.jpeg?alt=media&token=36bb5381-e237-4851-a360-67f8183ea206',

    category: 'Facial',
    subCategoryName: 'Essential Facial',
    num: 6,
    value1: 'Oxy Glow Beach',
    value2: 'De Tan',
    value3: 'Regular Clean Up',
    value4: 'Under Eye',
    value5: 'Regular Clean (Acne)',
    value6: 'Fruit Facial',
    value7: 'Aroma Facial',
    value8: 'Insta Fair Facial',
    value9: 'Pearl Facial',
  },
  {
    id: 7,
    imageLink:
      'https://firebasestorage.googleapis.com/v0/b/tourismweb-3e2b8.appspot.com/o/cellujail.jpeg?alt=media&token=2683c32e-8d4f-4cb7-890a-20785d6b3c76',

    category: 'Facial',
    subCategoryName: 'Luxury Facial',
    num: 7,
    value1: 'Shahnaz Gold Facial',
    value2: 'Shahnaz Diamond Facial',
    value3: 'Skin Whitening Facial',
    value4: 'Skin Lightening Facial',
    value5: 'O3+ Radiant & GLowing Facial',
  },
  {
    id: 8,
    imageLink:
      'https://firebasestorage.googleapis.com/v0/b/tourismweb-3e2b8.appspot.com/o/rose.jpeg?alt=media&token=9cfb5eb4-d7e8-42db-918c-e32e90c12dd6',

    category: 'Manicure/Pedicure',
    subCategoryName: 'Premium',
    num: 8,
    value1: 'ICECREAM - Regular',
    value2: 'ICECREAM - Premium',
    value3: 'ICECREAM - Signature',
  },
  {
    id: 9,
    imageLink:
      'https://firebasestorage.googleapis.com/v0/b/tourismweb-3e2b8.appspot.com/o/9db1c41c9f1d915be537194acaab76f2.png?alt=media&token=5bd9d13b-dc80-447e-8c2a-328dfe010ed2',

    category: 'Manicure/Pedicure',
    subCategoryName: 'Regular',
    num: 4,
    value1: 'Regular',
    value2: 'Aroma',
    value3: 'Chocolate',
    value4: 'Crystal Spa',
    value5: 'Pedilogix',
  },
  {
    id: 10,
    imageLink:
      'https://firebasestorage.googleapis.com/v0/b/tourismweb-3e2b8.appspot.com/o/smith.jpg?alt=media&token=7c41620f-4743-4a25-830a-478cbd2de25b',

    category: 'Reflexology',
    subCategoryName: 'Reflexology',
    num: 10,
    value1: 'Foot Reflexology',
    value2: 'Hand Reflexology',
  },
  {
    id: 11,
    imageLink:
      'https://firebasestorage.googleapis.com/v0/b/tourismweb-3e2b8.appspot.com/o/baratang.jpeg?alt=media&token=5db39ecb-733a-493a-a14d-8c088376791a',

    category: 'Body Care',
    subCategoryName: 'Body Care',
    num: 7,
    value1: 'Neck & Back Massage ~ 30 mins / 45 mins',
    value2: 'Aroma Massage ~ 45 mins / 60 mins',
    value3: 'Swedish Massage ~ 45 mins / 60 mins',
    value4: 'Coco Butter Massage ~ 45 mins / 60 mins',
    value5: 'Body Exfoliation & Pack ~ 60 mins',
    value6: 'Body Steam Bath',
  },

  {
    id: 12,
    imageLink:
      'https://firebasestorage.googleapis.com/v0/b/tourismweb-3e2b8.appspot.com/o/havelooknile.jpeg?alt=media&token=418b02cb-b2cf-4ca1-bae8-9fc4bdb993e0',

    category: 'Groom Package',
    subCategoryName: 'Instant Package',
    num: 6,
    value1: 'Hair Cut',
    value2: 'Hair Spa',
    value3: 'Shave',
    value4: 'Bleach',
    value5: 'Skin Whitening Facial',
    value6: 'Manicure',
    value7: 'Pedicure',
    value8: 'Body Massage',
  },
  {
    id: 13,
    imageLink:
      'https://firebasestorage.googleapis.com/v0/b/tourismweb-3e2b8.appspot.com/o/havelooknile.jpeg?alt=media&token=418b02cb-b2cf-4ca1-bae8-9fc4bdb993e0',

    category: 'Groom Package',
    subCategoryName: 'Premium Package',
    num: 6,
    value1: 'Hair Cut',
    value2: 'Hair Spa',
    value3: 'Shave',
    value4: 'Bleach',
    value5: 'Skin Lightening Facial',
    value6: 'Body Polish Treatment',
    value7: 'Manicure',
    value8: 'Pedicure',
  },
  {
    id: 14,
    imageLink:
      'https://firebasestorage.googleapis.com/v0/b/tourismweb-3e2b8.appspot.com/o/havelooknile.jpeg?alt=media&token=418b02cb-b2cf-4ca1-bae8-9fc4bdb993e0',

    category: 'Groom Package',
    subCategoryName: 'Makeup & Hairstyle',
    num: 6,
    value1: 'Krylon',
    value2: 'MAC',
    value3: 'Bridal Makeup Outdoor',
  },
];
export default mens;
