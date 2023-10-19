const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

// reducer
export default function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return { ...state, fullName: action.payload };
    default:
      return state;
  }
}

// action creators
export function CreateCustomer(fullName, nationalID) {
  return {
    type: "customer/createCustomer",
    // side effects should not be in reducer (new Date())
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
}
export function updateName(fullName) {
  return { type: "customer/updateName", payload: fullName };
}
