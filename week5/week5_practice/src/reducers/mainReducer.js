// 초기 상태값 설정
const initialState = {
  email: "charles2323@softsquared.com",
  password: "Charles123"
}

// Action 설정
export const loginAction = (data) => {
  return {
    type: "LOGIN",
    data: data
  }
}


const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN": {
      return {
        ...state,
        email: action.data.email,
        password: action.data.password
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default mainReducer;