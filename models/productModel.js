import supabase from "../database/supabase.js";
import { getById } from "../handler/product.js";

export const Product = {
  read: async (limit, offset, short) => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .range(offset, offset + limit - 1)
      .order("id", { ascending: short });
    if (error) throw error;
    return data;
  },

  //   search : async (keyword) => {
  //     const {data, error} = await supabase
  //         .from('products')
  //         .select('*')
  //         .or('nama.ilikes')

  //   },
  readbyId: async (id) => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", id)
      .single();
    if (error) throw error;
    return data;
  },
  create: async (Name, Price, Stock, Deskripsi, id_merek) => {
    const { data, error } = await supabase
      .from("products")
      .insert([{ Name, Price, Stock, Deskripsi, id_merek }])
      .select();
    if (error) throw error;
    return data;
  },
  update: async (id, Name, Price, Stock, Deskripsi) => {
    const { data, error } = await supabase
      .from("products")
      .update({ Name, Price, Stock, Deskripsi })
      .eq("id", id)
      .select();
    if (error) throw error;
    return data;
  },
  delete: async (id) => {
    const { data, error } = await supabase
      .from("products")
      .delete()
      .eq("id", id)
      .select();
    if (error) throw error;
    return data;
  },

  filters: async () => {
    const { data, error } = await supabase
      .from("products")
      .select(`id, Name, Price, Stock, Deskripsi, merek(name, deskripsi)`)
      .gte("price::numeric", 100000)
      .lte("price::numeric", 200000)
      .gt("stock", 5)
      .order("price::numeric", { ascending: true });
    if (error) throw error;
    return data;
  },
};
