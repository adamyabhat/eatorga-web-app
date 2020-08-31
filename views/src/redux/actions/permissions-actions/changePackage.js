import { ADMIN_PERMISSION_SUCCESS, ADMIN_PERMISSION_FAILURE } from "../types";
    import { tokenConfig } from "../auth-actions/tokenConfig";
    import axios from "axios";
    
    export const changeUserPackage = (adminId, packageSelected = null) => (
      dispatch,
      getState
    ) => {
      return new Promise((resolve, reject) => {
        //let params = { adminId, isAdmin };
        axios
          //api/permissions/addAdmin?adminId=
          .put("/api/permissions/addPackage", { adminId, packageSelected }, tokenConfig(getState))
          .then(res => {
            let successMessage = res.data.message;
            let admin = res.data.user;
    
            dispatch(changeUserPackageSuccess(admin, successMessage));
            resolve(successMessage);
          })
          .catch(err => {
            let errorMessge = err.response.data.message;
    
            dispatch(changeUserPackageFailure(errorMessge));
            reject(errorMessge);
          });
      });
    };
    
    const changeUserPackageSuccess = (user, message) => {
      return {
        type: ADMIN_PERMISSION_SUCCESS,
        payload: { user, message }
      };
    };
    
    const changeUserPackageFailure = error => {
      return {
        type: ADMIN_PERMISSION_FAILURE,
        payload: { error }
      };
    };
    