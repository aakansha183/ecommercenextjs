import { User, UserState } from "@/Utils/Interfaces/LoginInterfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const getUserFromSessionStorage = (): User | null => {
  //using this line here to check that it  should only rendered on client side as sessionstorage is not supported on the  server side rendering
  if (typeof window !== 'undefined') {
    const storedUser = sessionStorage.getItem("currentUser");
    console.log("=>", storedUser);
    return storedUser ? JSON.parse(storedUser) : null;
  }
  //it will return null in case of server rendering 
  return null; 
};

const initialState: UserState = {
  users: [],
  currentUser: getUserFromSessionStorage(), 
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    registerUser(state, action: PayloadAction<User>) {
      state.users.push(action.payload);
    },
    setUser(state, action: PayloadAction<User | null>) {
      state.currentUser = action.payload;
      //Checking during item setting 
      if (typeof window !== 'undefined') {
        if (action.payload) {
          sessionStorage.setItem("currentUser", JSON.stringify(action.payload));
        } else {
          sessionStorage.removeItem("currentUser");
          sessionStorage.removeItem("username");
          sessionStorage.removeItem("password");
        }
      }
    },
    logout(state) {
      state.currentUser = null;
      //checking during removing item
      if (typeof window !== 'undefined') {
        sessionStorage.removeItem("currentUser");
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("password");
      }
    },
    updateUser(state, action: PayloadAction<User>) {
      const userIndex = state.users.findIndex(
        (user) => user.id === action.payload.id
      );
      if (userIndex !== -1) {
        state.users[userIndex] = action.payload;
        if (state.currentUser && state.currentUser.id === action.payload.id) {
          state.currentUser = action.payload;
          //checking during setting current user 
          if (typeof window !== 'undefined') {
            sessionStorage.setItem("currentUser", JSON.stringify(action.payload));
          }
        }
      }
    },
  },
});

export const { registerUser, setUser, logout, updateUser } = userSlice.actions;
export default userSlice.reducer;
