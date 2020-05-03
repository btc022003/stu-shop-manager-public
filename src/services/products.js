import { get, post, put, del } from "../utils/request";

/**
 * 获取列表
 * @param {*} page
 */
export function listApi(page = 1) {
  return get("/api/v1/admin/products", { page, per: 20 });
}

/**
 * 创建数据
 * @param {*} data
 */
export function createApi(data) {
  return post("/api/v1/admin/products", data);
}

/**
 * 根据id获取获取数据
 * @param {*} id
 */
export function getOneById(id) {
  return get(`/api/v1/admin/products/${id}`);
}

/**
 * 修改记录
 * @param {*} id
 * @param {*} data
 */
export function modifyOne(id, data) {
  return put(`/api/v1/admin/products/${id}`, data);
}

/**
 * 删除记录
 * @param {*} id
 * @param {*} data
 */
export function delOne(id, data) {
  return del(`/api/v1/admin/products/${id}`);
}
