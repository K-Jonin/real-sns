import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

// 最初のユーザー状態
const initialState = {
	user: null,
	isFecthing: false,
	error: false,
}

// 状態をグローバルに管理する
export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({children}) => {
	const [state, dispatch] = useReducer(AuthReducer, initialState);
	return (
		<AuthContext.Provider value={{
			user: state.user,
			isFecthing: state.isFecthing,
			error: state.error,
			dispatch,
		}}>
			{children}
		</AuthContext.Provider>
	);
};