import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// export const addProduct = createAsyncThunk(
//   "addProduct",
//   async (data, { rejectWithValue }) => {
//     try {
//       const res = await axios.post(
//         "https://666081225425580055b43271.mockapi.io/products",
//         data,
//         {
//           "Content-Type": "application/json",
//         }
//       );
//       return res.data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

export const getProducts = createAsyncThunk(
  "getProducts",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        "https://666081225425580055b43271.mockapi.io/products",
        data,
        {
          "Content-Type": "application/json",
        }
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
// export const deleteProduct = createAsyncThunk(
//   "deleteProduct",
//   async (data, { rejectWithValue }) => {
//     try {
//       const res = await axios.delete(
//         `https://666081225425580055b43271.mockapi.io/products/${data}`,
//         data,
//         {
//           "Content-Type": "application/json",
//         }
//       );
//       return res.data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

// export const editProduct = createAsyncThunk(
//   "editProduct",
//   async (data, { rejectWithValue }) => {
//     try {
//       const res = await axios.put(
//         `https://666081225425580055b43271.mockapi.io/products/${data.id}`,
//         data,
//         {
//           "Content-Type": "application/json",
//         }
//       );
//       return res.data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

const productSlice = createSlice({
  name: "productSlice",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
    // .addCase(addProduct.pending, (state) => {
    //   state.loading = true;
    // })
    // .addCase(addProduct.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.products.push(action.payload);
    // })
    // .addCase(addProduct.rejected, (state, action) => {
    //   state.loading = false;
    //   state.products = action.payload;
    // })

    .addCase(getProducts.pending, (state) => {
      state.loading = true;
    })
    .addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    })
    .addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    })

    // .addCase(deleteProduct.pending, (state) => {
    //   state.loading = true;
    // })
    // .addCase(deleteProduct.fulfilled, (state, action) => {
    //   state.loading = false;
    //   const { id } = action.payload;
    //   state.products = state.products.filter((f) => f.id != id);
    // })
    // .addCase(deleteProduct.rejected, (state, action) => {
    //   state.loading = false;
    //   state.products = action.payload;
    // })
    // .addCase(editProduct.pending, (state) => {
    //   state.loading = true;
    // })
    // .addCase(editProduct.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.products = state.products.map((e) =>
    //     e.id === action.payload.id ? action.payload : e
    //   );
    // })
    // .addCase(editProduct.rejected, (state, action) => {
    //   state.loading = false;
    //   state.products = action.payload;
    // });
  },
});

export default productSlice.reducer;
