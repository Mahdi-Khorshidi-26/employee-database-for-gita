function randomData() {
  return Math.trunc(Math.random(1000) * 10000) + 1;
}

export let idNumber = 0;
export const data = [
  {
    name: "Page A",
    uv: randomData(),
    pv: randomData(),
  },
  {
    name: "Page B",
    uv: randomData(),
    pv: randomData(),
  },
  {
    name: "Page C",
    uv: randomData(),
    pv: randomData(),
  },
  {
    name: "Page D",
    uv: randomData(),
    pv: randomData(),
  },
  {
    name: "Page E",
    uv: randomData(),
    pv: randomData(),
  },
  {
    name: "Page F",
    uv: randomData(),
    pv: randomData(),
  },
  {
    name: "Page G",
    uv: randomData(),
    pv: randomData(),
  },
];
export const users = [
  {
    firstName: "مهدی",
    lastName: "خورشیدی",
    nationalId: "1234567890",
    latitude: 35.3645394,
    longitude: 51.4749824,
    data,
    id: ++idNumber,
  },
  {
    firstName: "مرجان",
    lastName: "سیدی",
    nationalId: "0987654321",
    latitude: 31.7645394,
    longitude: 50.4749824,
    data,
    id: ++idNumber,
  },
  {
    firstName: "متین",
    lastName: "موسوی",
    nationalId: "3276092145",
    latitude: 32.7645394,
    longitude: 41.4749824,
    data,
    id: ++idNumber,
  },
  {
    firstName: "رضا",
    lastName: "پودینه",
    nationalId: "2198326523",
    latitude: 45.7645394,
    longitude: 61.4749824,
    data,
    id: ++idNumber,
  },
  {
    firstName: "سلمان",
    lastName: "هاشمی",
    nationalId: "4187692514",
    latitude: 55.7645394,
    longitude: 11.4749824,
    data,
    id: ++idNumber,
  },
  {
    firstName: "هانیه",
    lastName: "خواجوی نسب",
    nationalId: "8714653214",
    latitude: 25.7645394,
    longitude: 31.4749824,
    data,
    id: ++idNumber,
  },
  {
    firstName: "هانیه",
    lastName: "نسب",
    nationalId: "1265418769",
    latitude: 34.7645394,
    longitude: 32.4749824,
    data,
    id: ++idNumber,
  },
  {
    firstName: "مهدی",
    lastName: "خورشید",
    nationalId: "1457365814",
    latitude: 10.7645394,
    longitude: 7.4749824,
    data,
    id: ++idNumber,
  },
  {
    firstName: "سلمان",
    lastName: "هاشم",
    nationalId: "5437365814",
    latitude: 12.7645394,
    longitude: 38.4749824,
    data,
    id: ++idNumber,
  },
];
