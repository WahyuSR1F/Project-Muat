import { body } from "express-validator";

// Pada API create , berikan validasi data produk kosong, inputan < 0,
// inputan harus menggunakan angka dan huruf namun tidak boleh simbol ( spasi boleh ) ,
//  dan inputan untuk price dan stok tidak boleh minus. Jika API sudah terbentuk,
//  masukkan beberapa data kedalam database.
// Pada API create terdapat produk yang tidak memiliki merek.

export const createPostProducts = [
  body("name")
    .notEmpty()
    .withMessage("data tida boleh kosong")
    .matches(/^[A-Za-z0-9 ]+$/)
    .withMessage("Merek hanya boleh huruf, angka, dan spasi"),
  body("price")
    .notEmpty()
    .withMessage("data tidak boleh kosong")
    .isFloat({ min: 0 })
    .withMessage("harga harus berupa angka dan tidak boleh minus"),
  body("stock")
    .notEmpty()
    .withMessage("stock tidak boleh kosong")
    .isFloat({ min: 0 })
    .withMessage("stock harus angka dan tidak boleh minus"),
  body("deskripsi")
    .matches(/^[A-Za-z0-9 ]+$/)
    .withMessage("Merek hanya boleh huruf, angka, dan spasi"),
];
