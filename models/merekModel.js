import supabase from "../database/supabase.js";

export const Merek = {
  read: async () => {
    const { data, error } = await supabase.from("users").select("*");
    if (error) throw error;
    return data;
  },
  readById: async (id) => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", id);
    if (error) throw error;
    return data;
  },
  create: async (name, deskripsi) => {
    const { data, error } = await supabase
      .from("products")
      .insert([{ name, deskripsi }]);
    if (error) throw error;
    return data;
  },
  update: async (id, name, deskripsi) => {
    const { data, error } = await supabase
      .from("product")
      .update({ name, deskripsi })
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
};
