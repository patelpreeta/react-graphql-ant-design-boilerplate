import apiInstance from "common/api";

export async function Demo() {
  // eslint-disable-next-line
  const response = await apiInstance("/login", {
    method: "POST",
    data: "DATA TO BE SENT",
    headers: {
      "content-type": "application/x-www-form-urlencoded;charset=utf-8",
    },
  });
}
