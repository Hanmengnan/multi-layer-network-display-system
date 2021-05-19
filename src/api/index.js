import axios from "axios";
import {
  sysInfoMockData,
  eventListMockData,
  basicInfoMockData,
  FlowInfoMockData
} from "./mock/home";

import {
  netInfoMockData,
  nodeInfoMockData,
  linkInfoMockData,
  bandInfoMockData
} from "./mock/light";

import { dataNetInfoMockData, dataNetFlowMockData } from "./mock/data";

import { timeColumnMockData, timeStationMockData } from "./mock/time";

import { NodesMockData, LinksMockData } from "./mock/nodeAndLink";

const BASE_URL = "";

const devMode = false;

const instance = axios.create({
  responseType: "json"
});

instance.interceptors.response.use(
  res => {
    return res.data;
  },
  err => {
    throw err;
  }
);

export const websocket = new WebSocket("ws://localhost:8070/ws");

//common
export const getNodes = () => {
  return devMode ? NodesMockData() : instance.get(`${BASE_URL}/api/nodeList`);
};

export const getLinks = () => {
  return devMode ? LinksMockData() : instance.get(`${BASE_URL}/api/linkList`);
};

// home
export const initHomePage = () => {
  return instance.get(`${BASE_URL}/api/home`);
};

export const getSysInfo = () => {
  return devMode ? sysInfoMockData() : instance.get(`${BASE_URL}/api/sysInfo`);
};

export const getEventList = () => {
  return devMode
    ? eventListMockData()
    : instance.get(`${BASE_URL}/api/eventList`);
};

export const getNodeStatistics = () => {
  return devMode
    ? eventListMockData()
    : instance.get(`${BASE_URL}/api/nodeStatistics`);
};

// eslint-disable-next-line no-unused-vars
export const getNetInfo = operate => {
  return devMode
    ? basicInfoMockData()
    : instance.get(`${BASE_URL}/api/netInfo`);
};

export const getFlowInfo = () => {
  return devMode
    ? FlowInfoMockData()
    : instance.get(`${BASE_URL}/api/flowInfo`);
};

// light
export const getLightNetNodeStatistics = () => {
  return devMode
    ? netInfoMockData()
    : instance.get(`${BASE_URL}/api/lightNetNodeStatistics`);
};

export const getNodeInfo = ({ nodeId }) => {
  return devMode
    ? nodeInfoMockData()
    : instance.post(`${BASE_URL}/api/lightNetNodeInfo`, {
        nodeId
      });
};

export const getLinkInfo = linkId => {
  return devMode
    ? linkInfoMockData()
    : instance.post(`${BASE_URL}/api/lightNetLinkInfo`, {
        linkId
      });
};

export const getBandInfo = ({ target }) => {
  return devMode
    ? bandInfoMockData()
    : instance.post(`${BASE_URL}/api/lightNetBandSet`, {
        target
      });
};

export const getNodeBand = ({ nodeId }) => {
  websocket.send(
    JSON.stringify({ dataType: "lightNetNodeOverload", data: nodeId })
  );
};

// data
export const getDataNetInfo = () => {
  return devMode
    ? dataNetInfoMockData()
    : instance.get(`${BASE_URL}/api/dataNetInfo`);
};

export const getDataNetWorkFlowData = () => {
  return devMode
    ? dataNetFlowMockData()
    : instance.get(`${BASE_URL}/api/flowInfo`);
};

export const getDataNetworkNodeInfo = ({ nodeId }) => {
  websocket.send(
    JSON.stringify({
      dataType: "dataNetNodeInfo",
      data: nodeId
    })
  );
};

export const getDataNetworkLinkInfo = ({ linkId }) => {
  websocket.send(
    JSON.stringify({
      dataType: "daraNetLinkInfo",
      data: linkId
    })
  );
};
// time
export const getTimeNetNodeStatistic = () => {
  return devMode
    ? timeColumnMockData()
    : instance.get(`${BASE_URL}/api/timeNetNodeStatistics`);
};

export const getTimeStation = (start, end) => {
  return devMode
    ? timeStationMockData()
    : instance.post(`${BASE_URL}/api/timeNetRoute`, { start, end });
};
