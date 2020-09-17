let data = [
  {
    src: "https://www.flaticon.com/svg/static/icons/svg/813/813432.svg",
    title: "lorem",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
  },
  {
    src: "https://www.flaticon.com/svg/static/icons/svg/813/813502.svg",
    title: "ipsum",
    text: "eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut"
  },
  {
    src: "https://www.flaticon.com/svg/static/icons/svg/905/905657.svg",
    title: "dolor",
    text: "enim ad minim veniam, quis nostrud exercitation ullamco "
  }
];

export function getData() {
  const promise = new Promise((resolve, rejected) => {
    resolve(data);
    rejected(()=>{console.log("Bład, nie wczytało jsona")})
  });

  return promise;
}
