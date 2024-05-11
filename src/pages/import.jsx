import React, { useContext, useEffect } from "react";
import CompanyList from "./company";
import { useTranslation } from "react-i18next";
import Tables from "../components/tables";
import { ThemeContext } from "../context/context";
import { fetchData } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { RotatingLines } from "react-loader-spinner";
export default function ImportPage() {
  const { t, i18n } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state?.data);
  useEffect(() => {
    dispatch(
      fetchData(`${i18n.language}/api/v1/logistics/company/?category=1`)
    );
  }, [dispatch, i18n.language]);
  return (
    <div
      className={`${
        theme && "dark:bg-[#092635] text-white"
      } p-[24px] min-h-[360px] h-screen rounded`}
    >
      <CompanyList companyType={t("import")} />
      {loading ? (
        <RotatingLines
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
        />
      ) : (
        <Tables data={data} />
      )}
      {error && <div>Error</div>}
    </div>
  );
}
