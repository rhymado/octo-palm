import React from "react";
import { useNavigate } from "react-router-dom";

import { get } from "../localStorage";

function PrivateRoute({ children }) {
  const navigate = useNavigate();
  //   const [status, setStatus] = React.useState("loading");
  React.useEffect(() => {
    // kita cek apakah token sudah ada
    const token = get("tokokopi-token");
    if (!token)
      navigate("/auth", {
        replace: true,
      });
    // cek validasi ke server, jika gagal maka redirect
    // setStatus("done");
  }, []);
  return <>{children}</>;
}

export default PrivateRoute;
