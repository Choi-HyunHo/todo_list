import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mode from "./modeSlice";

// persist 관련 임포트
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const combinReducer = combineReducers({
	mode,
});

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["mode"],
};

const persistedReducer = persistReducer(persistConfig, combinReducer);

const store = configureStore({
	reducer: persistedReducer,
	// 다음이 middleware 추가 코드이다.
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }),
	// 기본 값이 true지만 배포할때 코드를 숨기기 위해서 false로 변환하기 쉽게 설정에 넣어놨다.
	devTools: true,
});

export default store;
