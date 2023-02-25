export const testData = [
  {
    name: "backblaze",
    minimumPayment: 7,
    storageCost: 0.005,
    transferCost: 0.01,
    icon: "https://www.backblaze.com/blog/wp-content/uploads/2017/12/backblaze_icon_transparent.png",
  },
  {
    name: "bunny",
    maximumPayment: 10,
    storageCost: [
      {
        name:"hdd",
        value:0.01
      },{
        name:"ssd",
        value: 0.02
      }
    ],
    transferCost: 0.01,
    icon: "https://bunny.net/images/get-in-touch-with-sales.svg",
  },
  {
    name: "scaleway",
    storageCost: [
      {
        name:"multi",
        value:0.06
      },{
        name:"single",
        value: 0.03
      }
    ],
    transferCost: 0.02,
    freeLimit: 75,
    icon: "https://avatars.githubusercontent.com/u/5185491?s=280&v=4",
  },
  {
    name: "vultr",
    minimumPayment: 5,
    storageCost: 0.01,
    transferCost: 0.01,
    icon: "https://www.vultr.com/favicon/android-chrome-512x512.png",
  },
];
