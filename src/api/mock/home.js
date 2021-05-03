//home
export const sysInfoMockData = () => {
  return new Promise(resolve => {
    resolve({
      data: [
        {
          name: "系统名称",
          value: "时空网络管理系统"
        },
        {
          name: "系统版本",
          value: "v2.1"
        },
        {
          name: "系统运行时间",
          value: "1d2h3m"
        },
        {
          name: "系统代号",
          value: "code71233"
        },
        {
          name: "数据库",
          status: "health"
        },
        {
          name: "网络",
          status: "health"
        },
        {
          name: "数据服务集群",
          status: "health"
        }
      ]
    });
  });
};

export const eventListMockData = () => {
  return new Promise(resolve => {
    resolve({
      data: [
        {
          id: 3212,
          type: "北京第三节点",
          owner: "张三",
          time: "2020/9/10",
          status: "处理中",
          orign: "系统",
          log: "正在处理..."
        },
        {
          id: 3213,
          type: "北京第四节点",
          owner: "李四",
          time: "2020/9/10",
          status: "未处理",
          orign: "系统",
          log: "正在处理..."
        },
        {
          id: 3214,
          type: "北京第五节点",
          owner: "王五",
          time: "2020/9/10",
          status: "已处理",
          orign: "系统",
          log: "正在处理..."
        },
        {
          id: 3215,
          type: "北京第六节点",
          owner: "赵六",
          time: "2020/9/10",
          status: "已处理",
          orign: "系统",
          log: "正在处理..."
        }
      ]
    });
  });
};

export const nodeListMockData = () => {
  return new Promise(resolve => {
    resolve({
      data: [
        { id: "BJ001", name: "北京", status: "正常" },
        { id: "SH002", name: "上海", status: "繁忙" },
        { id: "GD003", name: "广东", status: "拥塞" },
        { id: "YN004", name: "云南", status: "故障" },
        { id: "XJ005", name: "新疆", status: "故障" },
        { id: "GZ006", name: "贵州", status: "故障" },
        { id: "QH007", name: "青海", status: "故障" },
        { id: "SD008", name: "山东", status: "繁忙" },
        { id: "HLJ009", name: "黑龙江", status: "拥塞" }
      ]
    });
  });
};

export const basicInfoMockData = () => {
  return new Promise(resolve => {
    resolve({
      data: {
        connect: 100,
        tuntu: 132.5,
        use: 98,
        activeTime: 2
      }
    });
  });
};

export const FlowInfoMockData = () => {
  return new Promise(resolve => {
    resolve([
      {
        date: "01/01",
        value: 12.1
      },
      {
        date: "02/01",
        value: 32.1
      },
      {
        date: "03/01",
        value: 22.1
      },
      {
        date: "04/01",
        value: 42.1
      },
      {
        date: "05/01",
        value: 15.1
      },
      {
        date: "06/01",
        value: 5.1
      },
      {
        date: "07/01",
        value: 31.1
      },
      {
        date: "08/01",
        value: 24.1
      },
      {
        date: "09/01",
        value: 45.1
      },
      {
        date: "10/01",
        value: 71.1
      }
    ]);
  });
};
