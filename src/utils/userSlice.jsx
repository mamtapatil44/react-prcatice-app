import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  console.log("users== ",response.json())
  return await response.json();
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    addUser: (state, action) => {
      state.data.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;;
    });
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
