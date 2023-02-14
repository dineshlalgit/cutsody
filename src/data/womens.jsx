import w1 from '../assets/w1.jpg';
import w2 from '../assets/w2.jpg';
import w3 from '../assets/w3.jpg';
import w4 from '../assets/w4.jpg';
import w5 from '../assets/w5.jpg';
import w6 from '../assets/w6.jpg';
import w7 from '../assets/w7.jpg';
import w8 from '../assets/w8.jpg';
import w9 from '../assets/w9.jpg';
import w10 from '../assets/w10.jpg';
import w11 from '../assets/w11.jpg';
import w12 from '../assets/w12.jpg';
import w13 from '../assets/w13.jpg';
import w14 from '../assets/w14.jpg';
import w15 from '../assets/w15.jpg';
import w16 from '../assets/w16.jpg';
import w17 from '../assets/w17.jpg';
import w18 from '../assets/w18.jpg';
import w19 from '../assets/w19.jpg';
import w20 from '../assets/w20.jpg';
import w21 from '../assets/w21.jpg';
import w22 from '../assets/w22.jpg';
import w23 from '../assets/w23.jpg';
import w24 from '../assets/w24.jpg';



const mens = [
  {
    // completed no need to change
    id: 1,
    imageLink:
      'https://firebasestorage.googleapis.com/v0/b/fir-starter-3d346.appspot.com/o/images%2Fhavelock.jpg?alt=media&token=06a37606-99e8-4cb6-a8d6-2780030e1f9',

    category: 'Cut & Style',
    subCategoryName: 'Cuts',
    num: 4,
    value1: 'Hair Trim ~ Basic',
    value2: 'Hair Trim (Inclusive ~ Hair Wash, Conditioning, Blow Dry)',
    value3:
      'Layered Cut (Inclusive ~ Hair Wash, Conditioning, Blow Dry & Styling)',
    value4:
      'Style Change (Inclusive ~ Hair Wash, Conditioning, Blow Dry & Styling)',
    value5: 'Fix Cut',
    value6: 'Hair Wash ~ Shampoo, Conditioning & Blow Dry',
    value7: 'Kids Cut ~ Below 10 Yrs',
    ifImageNotAvailable:
      'https://www.symbols.com/images/symbol/1/5528_dash.png',
  },
  {
    // completed no need to change
    id: 2,
    imageLink:
      'https://firebasestorage.googleapis.com/v0/b/tourismweb-3e2b8.appspot.com/o/havelooknight.jpeg?alt=media&token=18277cbb-d3d5-490b-a93c-0dbab8c4edb6',

    category: 'Cut & Style',
    subCategoryName: 'Style',
    num: 5,
    value1: 'Express Glow ~ Hair Wash, Shampoo, Massage & Conditioning',
    value2: 'Straight Shine',
    value3: 'Flat Iron/Tonging',
    value4: "Fashionable Hair Do's",
    value5: 'Roller Set',
  },
  {
    // completed no need to change
    id: 3,
    imageLink:
      'https://firebasestorage.googleapis.com/v0/b/tourismweb-3e2b8.appspot.com/o/havelockelephant.jpeg?alt=media&token=b445f6ae-2b07-4fd7-af0f-8c67dec77360',

    category: 'Hair Colour',
    subCategoryName: 'Grey Coverage',
    num: 5,
    value1: 'Root Touch Up ~ Ammonia / Ammonia Free',
    value2: 'Global ~ Ammonia',
    value3: 'Global ~ Ammonia Free',
    value4: 'Fashion Colour ~ Ammonia',
    value5: 'Fashion Colour ~ Ammonia Free',
  },
  {
    // completed no need to change
    id: 4,
    imageLink:
      'https://firebasestorage.googleapis.com/v0/b/tourismweb-3e2b8.appspot.com/o/niel.jpeg?alt=media&token=d42468a9-e844-40dd-91dc-bf4c04b598a4',

    category: 'Hair Colour',
    subCategoryName: 'Creative Colouring',
    value1: 'High Lights ~ Per Streak',
    value2: 'Anti Hairfall',
    value3: 'Block Colouring ~ Per Dock (S.M/L)',
    value4: 'Global ~ Full Head HighlightStraightening',
    value5: 'Creative Colouring - Balayage / Ombre',
  },
  {
    // completed no need to change
    id: 5,
    imageLink:
      'https://firebasestorage.googleapis.com/v0/b/tourismweb-3e2b8.appspot.com/o/havelooknile.jpeg?alt=media&token=418b02cb-b2cf-4ca1-bae8-9fc4bdb993e0',

    category: 'Straightening',
    subCategoryName: 'Straightening',
    value1: 'Smoothening',
    value2: 'Straightening',
    value3: 'Retouch For Smooth Straight',
    value4: 'Twist & Twirls (Perming)',
    value5: 'Partial Straightening and Perming',
  },
  {
    // completed no need to change
    id: 6,
    imageLink:
      'https://firebasestorage.googleapis.com/v0/b/tourismweb-3e2b8.appspot.com/o/havelocksingle.jpeg?alt=media&token=36bb5381-e237-4851-a360-67f8183ea206',

    category: 'Hair Treatment',
    subCategoryName: 'Hair Treatment',
    num: 6,
    value1: 'Anti Hairfall Treatment',
    value2: 'Anti Dandruff',
    value3: 'Hair Spa',
    value4: 'Dry Frizzy Hair ~ Revitalizing',
    value5: 'Damaged Hair ~ Repair Rejuvenate',
    value6: 'Chemically Treated Hair ~ Power Surge',
    value7: 'Hair Fibre Treatment',
    value8: 'Organic Hair Spa ~ Moroccan',
  },
  {
    // completed no need to change
    id: 7,
    imageLink:
      'https://firebasestorage.googleapis.com/v0/b/tourismweb-3e2b8.appspot.com/o/cellujail.jpeg?alt=media&token=2683c32e-8d4f-4cb7-890a-20785d6b3c76',

    category: 'Hair Treatment',
    subCategoryName: 'Cysteine Keratin',
    num: 7,
    value1: 'Cysteine Master Kit',
    value2: 'Remedy Protein Kit',
    value3: 'Hair BTX',
    value4: 'The One Master Kit',
    value5: 'Fibre Treatment',
    value6: 'Fibre Treatment ~ Colour',
    value7: 'Kerafusion',
  },
  {
    // completed no need to change
    id: 8,
    imageLink:
      'https://firebasestorage.googleapis.com/v0/b/tourismweb-3e2b8.appspot.com/o/rose.jpeg?alt=media&token=9cfb5eb4-d7e8-42db-918c-e32e90c12dd6',

    category: 'Facial',
    subCategoryName: 'Essential Facial',
    num: 8,
    value1: 'Oxy Glow Bleach',
    value2: 'De-Tan',
    value3: 'Regular Cleanup',
    value4: 'Regular Cleanup Acne',
    value5: 'Under Eye Treatment',
    value6: 'Fruit / Herbal Facial',
    value7: 'Aroma Facial',
    value8: 'Insta - Fair Facial',
    value9: 'Pearl Facial',
  },
  {
    // completed no need to change
    id: 9,
    imageLink:
      'https://firebasestorage.googleapis.com/v0/b/tourismweb-3e2b8.appspot.com/o/9db1c41c9f1d915be537194acaab76f2.png?alt=media&token=5bd9d13b-dc80-447e-8c2a-328dfe010ed2',

    category: 'Facial',
    subCategoryName: 'Luxury Facial',
    num: 4,
    value1: 'Skin Whitening Facial',
    value2: 'Shahnaz Gold Facial',
    value3: 'Shahnaz Diamond Facial',
    value4: 'Skin Lightening Facial',
    value5: 'O3+ Radiant & GLowing Facial',
    value6: 'Cut Studio Signature Facial',
  },
  {
    // completed no need to change
    id: 10,
    imageLink:
      'https://firebasestorage.googleapis.com/v0/b/tourismweb-3e2b8.appspot.com/o/smith.jpg?alt=media&token=7c41620f-4743-4a25-830a-478cbd2de25b',

    category: 'Lotus Facial',
    subCategoryName: 'Basic Facial',
    num: 10,
    value1: 'Basic Clean up ~ Dry Skin / Oily Skin',
    value2: 'Basic Hydra Facial ~ Dry Skin',
    value3: 'Basic Hydra Facial ~ Oily Skin',
    value4: 'Basic Facial with De-Tan Mask',
    value5: 'ACNEX ~ pimple & acne treatment',
    value6: 'DIPIGMENTONE ~ removing pigmentation and other spots',
    value7: 'GLOWDERMIE ~ Lonization Facial for enhanced skin glow',
    value8: 'INSTAFAIR ~ melanin control and skin lightening',
    value9: 'GOLDSHEEN ~ Instant gold like lustering complexion',
  },
  {
    // completed no need to change
    id: 11,
    imageLink:
      'https://firebasestorage.googleapis.com/v0/b/tourismweb-3e2b8.appspot.com/o/baratang.jpeg?alt=media&token=5db39ecb-733a-493a-a14d-8c088376791a',

    category: 'Lotus Facial',
    subCategoryName: 'Innovative Facial',
    num: 7,
    value1: '4-Layer Radiance Facial',
    value2: '4-Layer Anti Ageing Facial',
    value3: '4-Layer Skin Whitening Facial',
    value4: 'Preservita Advanceed Anti Biemish Facial with papaya marmalade',
    value5: 'Preservita Anti-Ageing Facial with Fruit marmalade',
    value6: 'Preservita Sensitive skin Facial with pineapple marmalade',
    value7: 'Preservita Skin Whitening Facial Kit Bearberry marmalade',
    value8:
      'Preservita Advance skin Radiance facial with Vino Grapes marmalade',
  },

  {
    // completed no need to change
    id: 12,
    imageLink:
      'https://firebasestorage.googleapis.com/v0/b/tourismweb-3e2b8.appspot.com/o/havelooknile.jpeg?alt=media&token=418b02cb-b2cf-4ca1-bae8-9fc4bdb993e0',

    category: 'Lotus Facial',
    subCategoryName: 'Facial & Spa',
    num: 6,
    value1: 'Ultimo Pearl ~ Skin whitening Facial Treatment',
    value2: 'Ultimo Gold ~ 24 Carate Gold Facial Treatment',
    value3: 'Ultimo Platinum ~ Anti—Ageing Facial Treatment',
    value4: 'Japanese Sakura Skin Whitening S Lightening Facial',
    value5: 'Bulgarian Rose Glow a Brightening Facial',
    value6: 'Brazilian Anti Ageing Facial',
  },
  {
    // completed no need to change
    id: 13,
    imageLink:
      'https://firebasestorage.googleapis.com/v0/b/tourismweb-3e2b8.appspot.com/o/havelooknile.jpeg?alt=media&token=418b02cb-b2cf-4ca1-bae8-9fc4bdb993e0',

    category: 'Manicure/Pedicure',
    subCategoryName: 'Manicure/Pedicure',
    num: 6,
    value1: 'Nail Care',
    value2: 'Regular',
    value3: 'Aroma',
    value4: 'Chocolate',
    value5: 'Crystal Spa',
    value6: 'Pedilogix',
    value7: 'Citrus Luxury Pedicure',
    value8: 'Citrus Luxury Manicure',
    value9: 'Citrus Spa Pedicure',
    value10: 'Citrus Spa Manicure',
  },
  {
    id: 14,
    imageLink:
      'https://firebasestorage.googleapis.com/v0/b/tourismweb-3e2b8.appspot.com/o/havelooknile.jpeg?alt=media&token=418b02cb-b2cf-4ca1-bae8-9fc4bdb993e0',

    category: 'Waxing/Threading',
    subCategoryName: 'Waxing',
    num: 6,
    value1: 'Full Arms',
    value2: 'Full Legs',
    value3: 'Half Arms',
    value4: 'Half Legs',
    value5: 'Under Arms',
    value6: 'Stomach',
    value7: 'Full Back',
    value8: 'Bikini Line',
    value9: 'Bikini Wax',
    value10: 'Upper Lip',
    value11: 'Chin',
    value12: 'Sides',
    value13: 'Full Body',
  },
  {
    id: 15,
    imageLink:
      'https://firebasestorage.googleapis.com/v0/b/tourismweb-3e2b8.appspot.com/o/havelooknile.jpeg?alt=media&token=418b02cb-b2cf-4ca1-bae8-9fc4bdb993e0',

    category: 'Waxing/Threading',
    subCategoryName: 'Body Bright',
    num: 6,
    value1: 'Face & Neck',
    value2: 'Full Arms',
    value3: 'Full Legs',
    value4: 'Half Arms',
    value5: 'Half Legs',
    value6: 'Under Arms',
    value7: 'Stomach',
    value8: 'Full Back',
    value9: 'Blouse Line',
    value10: 'Upper Lip',
    value11: 'Chin',
    value12: 'Full Body Bleach',
  },
  {
    id: 16,
    imageLink:
      'https://firebasestorage.googleapis.com/v0/b/tourismweb-3e2b8.appspot.com/o/havelooknile.jpeg?alt=media&token=418b02cb-b2cf-4ca1-bae8-9fc4bdb993e0',

    category: 'Waxing/Threading',
    subCategoryName: 'Threading',
    num: 6,
    value1: 'Eyebrows',
    value2: 'Upper Lip',
    value3: 'Lower Lip',
    value4: 'Forehead',
    value5: 'Chin',
    value6: 'Side and Jaw Line',
    value7: 'Full Face',
  },
  {
    id: 17,
    imageLink:
      'https://firebasestorage.googleapis.com/v0/b/tourismweb-3e2b8.appspot.com/o/havelooknile.jpeg?alt=media&token=418b02cb-b2cf-4ca1-bae8-9fc4bdb993e0',

    category: 'Waxing/Threading',
    subCategoryName: 'Rica Wax',
    num: 6,
    value1: 'Full Arms',
    value2: 'Full Legs',
    value3: 'Half Arms',
    value4: 'Half Legs',
    value5: 'Under Arms',
    value6: 'Stomach',
    value7: 'Full Back',
    value8: 'Bikini Line',
    value9: 'Bikini Wax',
    value10: 'Upper Lip',
    value11: 'Chin',
    value12: 'Sides',
    value13: 'Full Body',
  },
  {
    id: 18,
    imageLink:
      'https://firebasestorage.googleapis.com/v0/b/tourismweb-3e2b8.appspot.com/o/havelooknile.jpeg?alt=media&token=418b02cb-b2cf-4ca1-bae8-9fc4bdb993e0',

    category: 'Body Care',
    subCategoryName: 'Body Care',
    num: 6,
    value1: 'Neck & Back Massage',
    value2: 'Aroma Massage',
    value3: 'Swedish Massage',
    value4: 'Coco Butter Massage',
    value5: 'Aroma Oil Head Massage',
    value6: 'Olive Oil Head Massage',
    value7: 'Almond Oil Head Massage',
    value8: 'Body Exfoliation & Pack',
    value9: 'Body Steam Bath',
  },
  {
    id: 19,
    imageLink:
      'https://firebasestorage.googleapis.com/v0/b/tourismweb-3e2b8.appspot.com/o/havelooknile.jpeg?alt=media&token=418b02cb-b2cf-4ca1-bae8-9fc4bdb993e0',

    category: 'Bridal Package',
    subCategoryName: 'Instant Package',
    num: 6,
    value1: 'Manicure',
    value2: 'Pedicure',
    value3: 'Bleach ~ Face & Neck',
    value4: 'Essential Facial',
    value5: 'Hair Spa',
  },
  {
    id: 20,
    imageLink:
      'https://firebasestorage.googleapis.com/v0/b/tourismweb-3e2b8.appspot.com/o/havelooknile.jpeg?alt=media&token=418b02cb-b2cf-4ca1-bae8-9fc4bdb993e0',

    category: 'Bridal Package',
    subCategoryName: 'Premium Package',
    num: 6,
    value1: 'Manicure',
    value2: 'Pedicure',
    value3: 'Body Bleach',
    value4: 'Luxury Facial',
    value5: 'Hair Spa',
  },
  {
    id: 21,
    imageLink:
      'https://firebasestorage.googleapis.com/v0/b/tourismweb-3e2b8.appspot.com/o/havelooknile.jpeg?alt=media&token=418b02cb-b2cf-4ca1-bae8-9fc4bdb993e0',

    category: 'Bridal Package',
    subCategoryName: 'Mehendi',
    num: 6,
    value1: 'Full Arms',
    value2: 'Half Arms',
    value3: 'Half Legs',
    value4: 'Arabic Bridal Mehendi',
    value5: 'Bridal Package',
  },
  {
    id: 22,
    imageLink:
      'https://firebasestorage.googleapis.com/v0/b/tourismweb-3e2b8.appspot.com/o/havelooknile.jpeg?alt=media&token=418b02cb-b2cf-4ca1-bae8-9fc4bdb993e0',

    category: 'Bridal Makeup',
    subCategoryName: 'Bridal Makeup',
    num: 6,
    value1: 'Makeup',
    value2: 'MAC Makeup',
    value3: 'Bridal Makeup - Outdoor',
  },
  {
    id: 23,
    imageLink:
      'https://firebasestorage.googleapis.com/v0/b/tourismweb-3e2b8.appspot.com/o/havelooknile.jpeg?alt=media&token=418b02cb-b2cf-4ca1-bae8-9fc4bdb993e0',

    category: 'Bridal Makeup',
    subCategoryName: "Bride's Friend",
    num: 6,
    value1: 'Makeup',
    value2: 'Hair Do',
    value3: 'Saree Drape',
  },
  {
    id: 24,
    imageLink:
      'https://firebasestorage.googleapis.com/v0/b/tourismweb-3e2b8.appspot.com/o/havelooknile.jpeg?alt=media&token=418b02cb-b2cf-4ca1-bae8-9fc4bdb993e0',

    category: 'Party Makeup',
    subCategoryName: 'Party Makeup',
    num: 6,
    value1: 'Krylon Makeup',
    value2: 'MAC Makeup',
    value3: 'Krylon Makeup & Hairstyle',
    value4: 'MAC Makeup & Hairstyle',
  },
];
export default mens;