class StoreApi {
  constructor() {
    this.dataList = [];
  }

  setData(key, value) {
    this.dataList[key] = value;
  }

  getData(key) {
    return this.dataList[key];
  }
}

var storeApi = new StoreApi();

export default storeApi;
