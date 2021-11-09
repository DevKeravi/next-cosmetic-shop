export const categoryGenerator = (value: string | string[] | undefined) => {
  let category: string = "";

  switch (value) {
    case "eyebrow": {
      category = "eye";
      break;
    }
    case "eyeliner": {
      category = "eye";
      break;
    }
    case "mascara": {
      category = "eye";
      break;
    }
    case "nail_polish": {
      category = "lip";
      break;
    }
    case "lipstick": {
      category = "lip";
      break;
    }
    case "blush": {
      category = "cheek";
      break;
    }
    case "bronzer": {
      category = "bronzer";
      break;
    }
    case "foundation": {
      category = "foundation";
      break;
    }
    default: {
      category: "알수없음";
      break;
    }
  }
  return category;
};
