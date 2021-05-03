import axios from "axios";
import {
  sysInfoMockData,
  eventListMockData,
  nodeListMockData,
  basicInfoMockData,
  FlowInfoMockData
} from "./mock/home";

import {
  netInfoMockData,
  nodeInfoMockData,
  linkInfoMockData,
  bandInfoMockData,
  nodeBandMockData
} from "./mock/light";

import {
  dataNetInfoMockData,
  dataNetFlowMockData,
  dataNetworkNodeInfoMockData,
  dataNetworkLinkInfoMockData
} from "./mock/data";

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
    : instance.post(`${BASE_URL}/api/eventList`);
};

export const getNodeList = () => {
  return devMode
    ? nodeListMockData()
    : instance.get(`${BASE_URL}/api/nodeList`);
};

export const getBasicInfo = () => {
  return devMode
    ? basicInfoMockData()
    : instance.post(`${BASE_URL}/api/basicInfo`);
};

export const getFlowInfo = () => {
  return devMode
    ? FlowInfoMockData()
    : instance.post(`${BASE_URL}/api/flowInfo`);
};

// light
export const getLightNetInfo = () => {
  return devMode ? netInfoMockData() : instance.post(`${BASE_URL}/api/netInfo`);
};

export const getNodeInfo = ({ name }) => {
  return devMode
    ? nodeInfoMockData()
    : instance.get(`${BASE_URL}/api/nodeInfo`, {
        name
      });
};

export const getLinkInfo = ({ name }) => {
  return devMode
    ? linkInfoMockData()
    : instance.post(`${BASE_URL}/api/linkInfo`, {
        start: name.splite("-")[0],
        end: name.splite("-")[1]
      });
};

export const getBandInfo = ({ target }) => {
  return devMode
    ? bandInfoMockData()
    : instance.post(`${BASE_URL}/api/bandInfo`, {
        target
      });
};

export const getNodeBand = ({ node }) => {
  return devMode
    ? nodeBandMockData()
    : instance.post(`${BASE_URL}/api/nodeBand`, {
        node
      });
};

// data
export const getDataNetInfo = () => {
  return devMode
    ? dataNetInfoMockData()
    : instance.get(`${BASE_URL}/api/DataNetInfo`);
};

export const getDataNetWorkFlowData = () => {
  return devMode
    ? dataNetFlowMockData()
    : instance.post(`${BASE_URL}/api/DataNetFlow`);
};

export const getDataNetworkNodeInfo = ({ nodeId }) => {
  return devMode
    ? dataNetworkNodeInfoMockData()
    : instance.post(`${BASE_URL}/api/DataNetNodeInfo`, {
        nodeId
      });
};

export const getDataNetworkLinkInfo = ({ linkId }) => {
  return devMode
    ? dataNetworkLinkInfoMockData()
    : instance.post(`${BASE_URL}/api/DataNetLinkInfo`, {
        linkId
      });
};
// time
