export const signup = async (req, res) => {
  try{
    const {fullName, username, password, confirmPasword, gender }= req.body;
  }catch(err){

  }
}

export const login = (req, res) => {
  console.log("login");
}

export const logout = (req, res) => {
  console.log("logout");
}

