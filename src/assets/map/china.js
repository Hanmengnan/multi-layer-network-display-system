import chinaPoint from "./china.json";

const points = chinaPoint.features.map(el => {
  return {
    name: el.properties.name,
    point: el.properties.cp
  };
});
export const getPointsGeo = name => {
  let res = -1;
  points.forEach(el => {
    if (el.name === name) {
      res = el.point;
    }
  });
  return res;
};
