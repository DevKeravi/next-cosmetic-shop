const basketData = [
  {
    id: 670,
    brand: "dior",
    name: "DIORIFIC MATTE FLUID - Christmas Look 2017 Limited Edition",
    price: "27.5",
    price_sign: "£",
    currency: "GBP",
    image_link:
      "https://www.dior.com/beauty/version-5.1432748111912/resize-image/ep/0/390/100/0/packshots%252FPDG_Y0278001_F027800006_v2.jpg",
    product_link:
      "https://www.dior.com/beauty/en_gb/fragrance-beauty/makeup/look-exclusives/precious-rocks-collection/pr-preciousrockslook-y0278001_f027800005-lip-cheek-velvet-colour.html",
    website_link: "https://www.dior.com",
    description:
      "A Dior essential, Diorific Matte Fluid tinges lips and cheeks with a matte texture in four exclusive shades.",
    rating: null,
    category: "lipstick",
    product_type: "lipstick",
    tag_list: [],
    created_at: "2017-12-03T23:22:10.711Z",
    updated_at: "2017-12-23T20:58:45.146Z",
    product_api_url: "http://makeup-api.herokuapp.com/api/v1/products/670.json",
    api_featured_image:
      "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/670/original/open-uri20171223-4-f0oedq?1514062725",
    product_colors: [
      {
        hex_value: "#AA6565",
        colour_name: "005 Charm",
      },
      {
        hex_value: "#910924",
        colour_name: "006 Glory",
      },
    ],
  },
  {
    id: 682,
    brand: "dior",
    name: "Diorskin Nude Air Glow Powder",
    price: "39.5",
    price_sign: "£",
    currency: "GBP",
    image_link:
      "https://www.dior.com/beauty/version-5.1432748111912/resize-image/ep/0/390/100/0/packshots%252FPDG_y0778920.jpg",
    product_link:
      "https://www.dior.com/beauty/en_gb/fragrance-beauty/makeup/face/powders/pr-powders-y0778920_f077892001-healthy-glow-radiance-powder.html",
    website_link: "https://www.dior.com",
    description:
      "A precursor in the art of natural, for beauty that grows more radiant with each day, Dior broadens its nude makeup expertise with the innovation of Diorskin Nude Air Glow Powder: a luminous powder as weightless and beneficial as a breath of fresh air that revives and illuminates the complexion's original colour and lets the skin breathe for a continuously healthy glow.",
    rating: null,
    category: "powder",
    product_type: "foundation",
    tag_list: [],
    created_at: "2017-12-03T23:22:29.631Z",
    updated_at: "2017-12-23T20:58:48.109Z",
    product_api_url: "http://makeup-api.herokuapp.com/api/v1/products/682.json",
    api_featured_image:
      "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/682/original/open-uri20171223-4-1q5xbnc?1514062728",
    product_colors: [
      {
        hex_value: "#D59A72",
        colour_name: "001 Fresh Tan",
      },
      {
        hex_value: "#D69D7B",
        colour_name: "002 Fresh Light",
      },
      {
        hex_value: "#DB9781",
        colour_name: "004 Warm Light",
      },
    ],
  },
  {
    id: 717,
    brand: "dior",
    name: "All-In-Brow 3D",
    price: "43.0",
    price_sign: "£",
    currency: "GBP",
    image_link:
      "https://www.dior.com/beauty/version-5.1432748111912/resize-image/ep/0/390/100/0/packshots%252FPDG_y0929580_f092958001.jpg",
    product_link:
      "https://www.dior.com/beauty/en_gb/fragrance-beauty/makeup/eyes/eyebrows/pr-eyebrows-y0929580_f092958001-long-wear-brow-contour-kit.html",
    website_link: "https://www.dior.com",
    description:
      "Inspired by the expert techniques of professional fashion show makeup artists, Dior presents its first eyebrow kit, which includes:",
    rating: null,
    category: null,
    product_type: "eyebrow",
    tag_list: [],
    created_at: "2017-12-03T23:23:13.659Z",
    updated_at: "2017-12-23T20:58:57.681Z",
    product_api_url: "http://makeup-api.herokuapp.com/api/v1/products/717.json",
    api_featured_image:
      "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/717/original/open-uri20171223-4-k72ych?1514062737",
    product_colors: [
      {
        hex_value: "#786557",
        colour_name: "001 Brown",
      },
    ],
  },
];
const userData = {
  nickName: "케라비",
  basket: basketData,
};

export default (req: any, res: any) => {
  const token = "tempToken";
  res.setHeader("Set-Cookie", `token=${token}; path=/;`);
  res.status(200).json(userData);
};
