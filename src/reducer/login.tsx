const Loginreducer = (state = false, action: any) => {
  switch (action.type) {
    case "Login":
      // sessionStorage.setItem("obj", action.payload);
      return (state = true);
    case "logout":
      return (state = false);
    default:
      return state;
  }
};
export default Loginreducer;
