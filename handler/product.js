import { response } from "../response/json_format.js";
import { Product } from "../models/productModel.js";

export const home = (req, res) => {
  response(200, [], "Hello selamat datang di Manajemen Product", res);
};
export const get = async (req, res) => {
  try {
    const { limit = 10, page = 1, sorthing = false } = req.body;
    const offset = (page - 1) * limit;
    const result = await Product.read(limit, offset, sorthing);
    response(
      200,
      { page, limit, totalData: result.length, data: result },
      "data berhasil didapat",
      res
    );
  } catch (err) {
    response(500, [], err.message, res);
  }
};
export const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Product.readbyId(id);
    response(200, result, "data berhasil didapat", res);
  } catch (err) {
    response(500, [], err.message, res);
  }
};

export const create = async (req, res) => {
  try {
    const { name, price, stock, deskripsi, merekId } = req.body;
    const result = await Product.create(name, price, stock, deskripsi, merekId);
    response(201, result, "data berhasil dicreate", res);
  } catch (err) {
    response(500, [], err.message, res);
  }
};
export const update = async (req, res) => {
  try {
    const { id, name, price, stock, deskripsi } = req.body;
    const result = await Product.update(id, name, price, stock, deskripsi);
    if (!result || result.length === 0) {
      response(500, [], "data tidak ditemukan", res);
    } else {
      response(200, result, "data berhasil diubah", res);
    }
  } catch (err) {
    response(500, [], err.message, res);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Product.delete(id);
    response(200, [], "data berhasil dihapus", res);
  } catch (err) {
    response(500, [], err.message, res);
  }
};

export const search = async (req, res) => {
  try {
    const { keyword } = req.params;
    const result = await Product.search(keyword || "");
    if (!result || result.length === 0) {
      response(500, [], " data tidak ada didalam database", res);
    } else {
      response(200, result, "data berhasil ditemukan", res);
    }
  } catch (err) {
    response(500, [], err.message, res);
  }
};

export const filters = async (req, res) => {
  try {
    const result = await Product.filters();
    if (!result || result.length === 0) {
      response(500, [], " data tidak ada didalam database", res);
    } else {
      response(200, result, "data berhasil ditemukan", res);
    }
  } catch (err) {
    response(500, [], err.message, res);
  }
};
